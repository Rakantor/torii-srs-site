import heroImage from "../assets/hero.webp";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 ring-1 ring-indigo-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600"></span>
              </span>
              Join 25,000+ learners mastering Japanese
            </div>
            
            <h1 className="max-w-3xl text-4xl font-medium leading-none tracking-tight text-slate-800 sm:text-6xl">
              Master Japanese Vocabulary
              <span className="mt-2 block text-primary">The Smart Way</span>
            </h1>
            
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Learn the Core 10k — Japan's 10,000 most essential words — with smart flashcards and spaced repetition.
              A few minutes a day is all it takes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="px-8 py-3 text-base shadow-lg shadow-indigo-100 sm:text-lg">
                <a href="https://app.torii-srs.com/">Start Learning Free</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free forever, no credit card required
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-2xl lg:mx-0 xl:max-w-3xl">
            <div className="w-full">
              <img
                src={heroImage.src}
                alt="Torii SRS dashboard"
                className="block aspect-[16/9] w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
