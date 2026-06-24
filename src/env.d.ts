/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_GITHUB_URL?: string;
  readonly PUBLIC_LEGACY_APPS_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface PagefindUIOptions {
  element: string;
  showSubResults?: boolean;
  translations?: {
    placeholder?: string;
    zero_results?: string;
  };
}

interface Window {
  PagefindUI?: new (options: PagefindUIOptions) => unknown;
  turnstile?: {
    reset: () => void;
  };
}
