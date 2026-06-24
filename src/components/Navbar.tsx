import { Button } from "./ui/button";
import { ExternalLink, Menu } from "lucide-react";
import { useState, type MouseEvent } from "react";
import logo from "../assets/logo.webp";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // Let modified clicks behave normally (new tab, etc.).
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const destination = new URL(event.currentTarget.href, window.location.href);
    const current = new URL(window.location.href);

    if (destination.origin === current.origin && destination.pathname === current.pathname) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });

      if (window.location.hash) {
        history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      }
    }
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg"
      data-pagefind-ignore
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3" onClick={handleHomeClick}>
            <img
              src={logo.src}
              alt="Torii SRS logo"
              className="h-9 w-9 object-cover"
            />
            <span className="text-xl font-medium text-slate-800">Torii SRS</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#features" className="nav-link">
              Features
            </a>
            <a href="/knowledge" className="nav-link">
              Knowledge
            </a>
            <a href="/#pricing" className="nav-link">
              Pricing
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="group gap-1 px-4 py-2">
              <a href="https://app.torii-srs.com/" aria-label="Open Torii SRS web app">
                <span>Web App</span>
                <ExternalLink className="mt-px h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          aria-hidden={!mobileMenuOpen}
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-200 py-4">
            <div className="flex flex-col gap-4">
              <a
                href="/#features"
                className="nav-link w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="/knowledge"
                className="nav-link w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Knowledge
              </a>
              <a
                href="/#pricing"
                className="nav-link w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-slate-200">
                <Button asChild className="group w-full">
                  <a href="https://app.torii-srs.com/" aria-label="Open Torii SRS web app">
                    <span>Get Started</span>
                    <ExternalLink className="mt-px h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
