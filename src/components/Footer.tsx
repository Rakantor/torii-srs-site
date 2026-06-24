import { Mail } from "lucide-react";
import { siGithub } from "simple-icons";
import logo from "../assets/logo.webp";

import type { SimpleIcon as SimpleIconType } from "simple-icons";

const contactEmail = import.meta.env.PUBLIC_CONTACT_EMAIL;
const githubUrl = import.meta.env.PUBLIC_GITHUB_URL;
const legacyAppsUrl = import.meta.env.PUBLIC_LEGACY_APPS_URL;

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
    <footer className="border-t border-slate-100 bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 py-8 text-slate-600">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 justify-items-center text-center">
          <div className="max-w-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img
                src={logo.src}
                alt="Torii SRS logo"
                className="h-9 w-9 object-cover"
              />
              <span className="text-xl text-slate-800 font-medium">Torii SRS</span>
            </div>
            <p className="text-sm mb-4">
              Master Japanese vocabulary with smart flashcards and spaced repetition.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-7 w-7 items-center justify-center rounded bg-slate-200 text-slate-500 transition-colors hover:bg-slate-300 hover:text-indigo-600"
              >
                <SimpleIcon icon={siGithub} />
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex h-7 w-7 items-center justify-center rounded bg-slate-200 text-slate-500 transition-colors hover:bg-slate-300 hover:text-indigo-600"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-800 font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#features" className="hover:text-indigo-600 transition-colors">Features</a></li>
              <li><a href="/knowledge" className="hover:text-indigo-600 transition-colors">Knowledge</a></li>
              <li><a href="/#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
              <li><a href="/knowledge#contact-support" className="hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="max-w-xs">
            <h4 className="text-slate-800 font-medium mb-4">Legacy Apps</h4>
            <p className="mb-3 text-sm leading-relaxed">
              Looking for the original desktop or Android apps? Downloads are still available on the legacy Torii SRS site.
            </p>
            <a
              href={legacyAppsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
            >
              Open legacy downloads
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Torii SRS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
