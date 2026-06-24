import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="px-6 py-24 bg-indigo-600">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-white mb-6">
          Ready to master Japanese vocabulary?
        </h2>
        <p className="text-lg leading-relaxed text-indigo-100 mb-10 max-w-2xl mx-auto sm:text-xl">
          Join thousands of learners using science-backed techniques to achieve fluency faster.
          Start your journey today with our forever-free plan.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <a href="https://app.torii-srs.com/">Get Started Free</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-indigo-800 hover:text-white"
          >
            <a href="/#pricing">Compare Plans</a>
          </Button>
        </div>

        <div className="mt-8 text-indigo-100 text-sm">
          Free forever • No credit card required
        </div>
      </div>
    </section>
  );
}
