import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import logo from "../assets/logo.webp";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo.src}
              alt="Torii SRS logo"
              className="h-9 w-9 object-cover"
            />
            <span className="text-xl font-semibold">Torii SRS</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#features" className="text-muted-foreground hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="/knowledge" className="text-muted-foreground hover:text-blue-600 transition-colors">
              Knowledge
            </a>
            <a href="/#pricing" className="text-muted-foreground hover:text-blue-600 transition-colors">
              Pricing
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button asChild>
              <a href="https://app.torii-srs.com/">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="/#features" className="text-muted-foreground hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="/knowledge" className="text-muted-foreground hover:text-blue-600 transition-colors">
                Knowledge
              </a>
              <a href="/#pricing" className="text-muted-foreground hover:text-blue-600 transition-colors">
                Pricing
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <ThemeToggle />
                <Button asChild className="w-full">
                  <a href="https://app.torii-srs.com/">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
