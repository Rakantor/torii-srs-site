import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="px-6 py-24 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl text-white mb-6">
          Ready to master Japanese vocabulary?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of learners using science-backed techniques to achieve fluency faster.
          Start your journey today with our forever-free plan.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <a href="https://app.torii-srs.com/">Get Started Free</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white/10"
          >
            <a href="/#pricing">Compare Plans</a>
          </Button>
        </div>

        <div className="mt-8 text-blue-100 text-sm">
          Free forever • No credit card required
        </div>
      </div>
    </section>
  );
}
