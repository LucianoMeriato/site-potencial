"use client";

import { motion } from "framer-motion";
import {
  Mic,
  FlaskConical,
  PenTool,
  Lightbulb,
  Play,
  ArrowRight,
} from "lucide-react";
import { contents } from "@/data/contents";

const icons = {
  mic: Mic,
  flaskConical: FlaskConical,
  penTool: PenTool,
  lightbulb: Lightbulb,
};

const accentBg: Record<string, string> = {
  podcast:
    "linear-gradient(135deg,#1B3261 0%,#0F2240 65%), radial-gradient(circle at 30% 20%, rgba(242,169,58,0.25), transparent 60%)",
  exatas:
    "linear-gradient(135deg,#162C57 0%,#0F2240 65%), radial-gradient(circle at 70% 40%, rgba(242,169,58,0.18), transparent 60%)",
  redacao:
    "linear-gradient(135deg,#1A2F5B 0%,#0F2240 65%), radial-gradient(circle at 50% 50%, rgba(242,169,58,0.2), transparent 60%)",
  vestibulares:
    "linear-gradient(135deg,#1F3565 0%,#0F2240 65%), radial-gradient(circle at 40% 30%, rgba(242,169,58,0.22), transparent 60%)",
};

function AccentArt({ kind }: { kind: string }) {
  if (kind === "podcast") {
    return (
      <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full opacity-90" aria-hidden>
        <g stroke="#FBF5E5" strokeOpacity="0.45" strokeWidth="1" fill="none">
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1={10 + i * 4}
              y1={50 - (i % 5) * 4}
              x2={10 + i * 4}
              y2={70 + ((i + 1) % 5) * 4}
              strokeLinecap="round"
            />
          ))}
        </g>
        <g transform="translate(60 60)">
          <rect x="-10" y="-22" width="20" height="38" rx="10" fill="#FBF5E5" opacity="0.95" />
          <rect x="-3" y="16" width="6" height="14" fill="#FBF5E5" opacity="0.95" />
          <path d="M-18 8 Q-18 28 0 28 Q18 28 18 8" stroke="#FBF5E5" strokeWidth="2" fill="none" />
        </g>
      </svg>
    );
  }
  if (kind === "exatas") {
    return (
      <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full" aria-hidden>
        <g stroke="#FBF5E5" strokeOpacity="0.5" strokeWidth="1" fill="none">
          <path d="M10 90 L 60 30 L 110 90" />
          <path d="M30 60 L 50 80" />
          <text x="14" y="40" fontSize="10" fill="#FBF5E5" opacity="0.7">x²</text>
          <text x="80" y="50" fontSize="10" fill="#FBF5E5" opacity="0.7">∑</text>
          <text x="50" y="100" fontSize="10" fill="#FBF5E5" opacity="0.7">π</text>
        </g>
      </svg>
    );
  }
  if (kind === "redacao") {
    return (
      <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full" aria-hidden>
        <g stroke="#FBF5E5" strokeOpacity="0.5" strokeWidth="1" fill="none" strokeLinecap="round">
          <line x1="20" y1="40" x2="100" y2="40" />
          <line x1="20" y1="55" x2="90" y2="55" />
          <line x1="20" y1="70" x2="100" y2="70" />
          <line x1="20" y1="85" x2="80" y2="85" />
        </g>
        <g transform="translate(80 26) rotate(28)">
          <path d="M0 0 L 18 8 L 14 12 L 0 6 Z" fill="#F2A93A" opacity="0.9" />
          <path d="M14 12 L 4 22" stroke="#FBF5E5" strokeWidth="2" />
        </g>
      </svg>
    );
  }
  // vestibulares — lightbulb art
  return (
    <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full" aria-hidden>
      <g stroke="#FBF5E5" strokeOpacity="0.45" strokeWidth="1" fill="none" strokeLinecap="round">
        <path d="M14 90 H 106" />
        <path d="M30 70 L 40 60" />
        <path d="M90 70 L 80 60" />
        <path d="M60 24 L 60 14" />
      </g>
      <g transform="translate(60 64)">
        <circle r="20" fill="#F2A93A" opacity="0.9" />
        <circle r="20" stroke="#FBF5E5" strokeOpacity="0.7" strokeWidth="1.5" fill="none" />
        <rect x="-7" y="20" width="14" height="6" rx="1.5" fill="#FBF5E5" opacity="0.9" />
        <rect x="-5" y="26" width="10" height="4" rx="1.5" fill="#FBF5E5" opacity="0.9" />
      </g>
    </svg>
  );
}

export default function Contents() {
  return (
    <section id="conteudos" className="relative py-16 lg:py-24">
      <div className="paper-bg absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 lg:items-start">
          <div className="lg:col-span-3">
            <p className="eyebrow text-navy/70">Conteúdos que geram resultados</p>
            <h2 className="headline mt-3 text-2xl sm:text-3xl lg:text-[2rem] font-semibold text-navy leading-tight">
              Movidos por propósito.
              <br />
              Guiados por resultados.
            </h2>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {contents.map((c, i) => {
              const Icon = icons[c.iconKey];
              return (
                <motion.a
                  key={c.id}
                  href="#"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl shadow-paper-lg ring-1 ring-black/10 text-cream"
                  style={{
                    background: accentBg[c.accentImage],
                  }}
                >
                  <div className="relative grid grid-cols-[1fr_100px] sm:grid-cols-[1fr_120px] min-h-[140px] sm:min-h-[150px]">
                    <div className="p-4 sm:p-5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-amber-brand font-semibold text-base sm:text-lg leading-tight">
                          {c.title}
                        </h3>
                        {c.subtitle ? (
                          <p className="text-cream/85 text-xs sm:text-sm font-medium">
                            {c.subtitle}
                          </p>
                        ) : null}
                        <p className="mt-2 text-cream/80 text-xs sm:text-sm leading-snug max-w-xs">
                          {c.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-3 sm:mt-4">
                        <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-amber-brand text-navy shadow-paper transition-transform group-hover:scale-110">
                          <Play size={12} fill="currentColor" />
                        </span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-cream/70">
                          assistir
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                      <AccentArt kind={c.accentImage} />
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 rounded-full bg-cream/15 ring-1 ring-cream/25 p-1.5">
                        <Icon size={12} className="text-cream" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <div className="lg:col-span-2 lg:sticky lg:top-28 self-start">
            <div className="relative bg-[#FBF5E5] ring-1 ring-navy/10 rounded-2xl shadow-paper p-4 sm:p-5 lg:-rotate-1">
              <span className="tape absolute -top-3 left-1/2 -translate-x-1/2" />
              <p className="font-semibold text-navy text-sm sm:text-base leading-snug">
                Acesse todos
                <br /> os conteúdos
              </p>
              <a
                href="#"
                className="mt-3 sm:mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-cream text-xs sm:text-sm font-semibold hover:bg-navy-400 transition-colors"
              >
                Explorar agora
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-brand text-navy">
                  <ArrowRight size={11} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
