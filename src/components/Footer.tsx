import { Mail } from "lucide-react";
import { siGithub } from "simple-icons";
import logo from "../assets/logo.webp";

import type { SimpleIcon as SimpleIconType } from "simple-icons";

function SimpleIcon({
  icon,
  className = "h-5 w-5",
}: {
  icon: SimpleIconType;
  className?: string;
}) {
  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 justify-items-center text-center">
          <div className="max-w-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img
                src={logo.src}
                alt="Torii SRS logo"
                className="h-9 w-9 object-cover"
              />
              <span className="text-xl text-white font-semibold">Torii SRS</span>
            </div>
            <p className="text-sm mb-4">
              Master Japanese vocabulary with smart flashcards and spaced repetition.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <SimpleIcon icon={siGithub} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="/#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="/knowledge" className="hover:text-blue-400 transition-colors">Knowledge</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Torii SRS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
