"use client";

import { Instagram } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/data/site";

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.91a8.27 8.27 0 0 0 4.85 1.55V7a4.85 4.85 0 0 1-1.92-.31z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <Logo variant="cream" />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-cream/80 hover:text-amber-brand transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex md:justify-end items-center gap-3">
            <span className="text-sm text-cream/70 mr-1">
              Siga o +Potencial
            </span>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @mais_potencial"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 hover:bg-amber-brand hover:text-navy transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok @mais_potencial"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 hover:bg-amber-brand hover:text-navy transition-colors"
            >
              <TikTokIcon size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cream/15 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs text-cream/65">
          <p>
            © 2026 +Potencial Ensino Multidisciplinar — Varginha · MG.
            Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Desenvolvido por{" "}
            <a
              href="https://instagram.com/lucianomeriato"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-brand hover:text-cream transition-colors font-semibold"
            >
              @lucianomeriato
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
