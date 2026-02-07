import { Button } from "./ui/button";

export function Hero() {
  const heroImageSrc = "@/assets/hero.webp";
  const showHeroImage = false;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div
          className={`grid items-center gap-12 ${showHeroImage ? "lg:grid-cols-2 lg:gap-8" : "lg:grid-cols-1"}`}
        >
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700 dark:bg-blue-950/40 dark:text-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              Join 25,000+ learners mastering Japanese
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight">
              Master Japanese Vocabulary
              <span className="block text-blue-600 mt-2">The Smart Way</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Learn the Core 10k — Japan's 10,000 most essential words — with smart flashcards and spaced repetition.
              A few minutes a day is all it takes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <a href="https://app.torii-srs.com/">Start Learning Free</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free forever, no credit card required
              </div>
            </div>
          </div>
          
          {showHeroImage && (
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border aspect-square">
                <img
                  src={heroImageSrc}
                  alt="Japanese vocabulary flashcards"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
