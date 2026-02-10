const MESSAGE_MIN_LENGTH = 20;
const MESSAGE_MAX_LENGTH = 2000;
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const TURNSTILE_ACTION = 'knowledge_contact';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Env {
  TURNSTILE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  TORII_CONTACT_EMAIL: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

interface TurnstileVerificationResponse {
  success: boolean;
  action?: string;
  ['error-codes']?: string[];
}

const jsonResponse = (body: Record<string, unknown>, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

const getStringField = (formData: FormData, fieldName: string): string => {
  const value = formData.get(fieldName);
  return typeof value === 'string' ? value.trim() : '';
};

const isFormContentType = (contentTypeHeader: string | null): boolean => {
  if (!contentTypeHeader) {
    return false;
  }

  return (
    contentTypeHeader.includes('application/x-www-form-urlencoded') ||
    contentTypeHeader.includes('multipart/form-data')
  );
};

export async function onRequestPost(context: PagesContext): Promise<Response> {
  if (!isFormContentType(context.request.headers.get('content-type'))) {
    return jsonResponse(
      {
        ok: false,
        error: 'Unsupported request content type.',
      },
      415,
    );
  }

  const formData = await context.request.formData();
  const name = getStringField(formData, 'name');
  const email = getStringField(formData, 'email').toLowerCase();
  const message = getStringField(formData, 'message');
  const turnstileResponseToken = getStringField(formData, 'cf-turnstile-response');

  if (!name || !email || !message) {
    return jsonResponse(
      {
        ok: false,
        error: 'Name, email, and message are required.',
      },
      400,
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return jsonResponse(
      {
        ok: false,
        error: 'Please enter a valid email address.',
      },
      400,
    );
  }

  if (message.length < MESSAGE_MIN_LENGTH || message.length > MESSAGE_MAX_LENGTH) {
    return jsonResponse(
      {
        ok: false,
        error: `Message must be ${MESSAGE_MIN_LENGTH}-${MESSAGE_MAX_LENGTH} characters.`,
      },
      400,
    );
  }

  if (!turnstileResponseToken) {
    return jsonResponse(
      {
        ok: false,
        error: 'Verification failed. Please complete Turnstile and try again.',
      },
      400,
    );
  }

  if (!context.env.TURNSTILE_SECRET_KEY) {
    return jsonResponse(
      {
        ok: false,
        error: 'Contact form is not configured.',
      },
      500,
    );
  }

  const verificationParams = new URLSearchParams({
    secret: context.env.TURNSTILE_SECRET_KEY,
    response: turnstileResponseToken,
  });
  const remoteIp = context.request.headers.get('CF-Connecting-IP');
  if (remoteIp) {
    verificationParams.set('remoteip', remoteIp);
  }

  let verificationResult: TurnstileVerificationResponse;
  try {
    const verificationResponse = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: verificationParams,
    });

    verificationResult = (await verificationResponse.json()) as TurnstileVerificationResponse;
    if (!verificationResponse.ok || !verificationResult.success) {
      return jsonResponse(
        {
          ok: false,
          error: 'Verification failed. Please retry.',
        },
        400,
      );
    }
  } catch {
    return jsonResponse(
      {
        ok: false,
        error: 'Could not verify request at this time. Please try again.',
      },
      502,
    );
  }

  if (verificationResult.action && verificationResult.action !== TURNSTILE_ACTION) {
    return jsonResponse(
      {
        ok: false,
        error: 'Verification failed. Please retry.',
      },
      400,
    );
  }

  const submission = {
    name,
    email,
    message,
    source: 'knowledge_base',
    submittedAt: new Date().toISOString(),
  };

  if (context.env.RESEND_API_KEY) {
    try {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Contact Form <noreply@torii-srs.com>',
          to: context.env.TORII_CONTACT_EMAIL,
          subject: `Contact: ${name}`,
          reply_to: email,
          html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at ${submission.submittedAt}</small></p>
          `,
        }),
      });

      if (!emailResponse.ok) {
        console.error('Resend error:', await emailResponse.text());
        return jsonResponse(
          { ok: false, error: 'Message received, but delivery failed. Please try again.' },
          502,
        );
      }
    } catch {
      return jsonResponse(
        { ok: false, error: 'Message received, but delivery failed. Please try again.' },
        502,
      );
    }
  } else {
    console.log('Contact form submission received (no email configured)', {
      email,
      messageLength: message.length,
      name,
    });
  }

  return jsonResponse({ ok: true });
}
