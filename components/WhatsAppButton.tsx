"use client";

import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export default function WhatsAppButton({
  label,
  size = "md",
  variant = "primary",
  className = "",
}: {
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const text = label ?? "Fale com a gente no WhatsApp";
  const cls =
    variant === "ghost"
      ? `btn-ghost whitespace-nowrap ${size === "sm" ? "py-2 px-4 text-sm" : ""} ${className}`
      : `btn-primary whitespace-nowrap ${size === "sm" ? "py-2 px-4 text-sm" : ""} ${className}`;

  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      aria-label="Abrir conversa no WhatsApp"
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-brand text-navy">
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M19.05 4.91A10 10 0 0 0 4.43 18.34L3 22l3.79-1.39a10 10 0 0 0 12.26-15.7zm-7 14.36a8.32 8.32 0 0 1-4.25-1.16l-.31-.18-2.25.83.84-2.19-.2-.32a8.34 8.34 0 1 1 6.17 3zm4.55-6.23c-.25-.13-1.46-.72-1.69-.8s-.39-.13-.55.12-.63.8-.78.96-.29.18-.54.06a6.85 6.85 0 0 1-3.41-2.99c-.26-.45.26-.42.74-1.39a.47.47 0 0 0 0-.45c-.06-.13-.55-1.34-.76-1.83s-.4-.42-.55-.43h-.47a.91.91 0 0 0-.66.31 2.78 2.78 0 0 0-.86 2.06 4.83 4.83 0 0 0 1 2.55 11 11 0 0 0 4.18 3.69c2.45 1.06 2.45.71 2.89.66a2.5 2.5 0 0 0 1.65-1.16 2 2 0 0 0 .14-1.16c-.06-.11-.21-.17-.46-.3z"
          />
        </svg>
      </span>
      <span>{text}</span>
      <span className="arrow">
        <ArrowRight size={14} strokeWidth={2.4} />
      </span>
    </a>
  );
}
