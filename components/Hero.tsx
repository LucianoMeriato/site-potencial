"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import ApprovalsBoard from "./ApprovalsBoard";
import {
  Rocket,
  RocketTrail,
  Star,
  PaperScrap,
  Squiggle,
} from "./DecorativeElements";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-24 lg:pt-28 pb-4 lg:pb-6 overflow-hidden"
    >
      <div className="paper-bg absolute inset-0 -z-10" />

      {/* small technical drawing - top-left */}
      <svg
        viewBox="0 0 200 200"
        aria-hidden
        className="absolute left-2 top-28 w-12 h-12 lg:w-16 lg:h-16 opacity-40"
      >
        <g stroke="#0F2240" strokeWidth="1" fill="none" opacity="0.7">
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="50" />
          <line x1="20" y1="100" x2="180" y2="100" />
          <line x1="100" y1="20" x2="100" y2="180" />
          <line x1="40" y1="40" x2="160" y2="160" strokeDasharray="3 3" />
          <line x1="160" y1="40" x2="40" y2="160" strokeDasharray="3 3" />
        </g>
      </svg>

      {/* technical drawing on right edge */}
      <svg
        viewBox="0 0 100 100"
        aria-hidden
        className="hidden lg:block absolute right-2 top-32 w-10 h-10 opacity-40"
      >
        <g stroke="#0F2240" strokeWidth="1" fill="none">
          <path d="M50 10 L 60 40 L 90 50 L 60 60 L 50 90 L 40 60 L 10 50 L 40 40 Z" />
        </g>
      </svg>

      {/* rocket trail across hero */}
      <RocketTrail className="pointer-events-none absolute left-0 right-0 top-[44%] h-32 lg:h-40 -z-0 opacity-90" />

      {/* Rocket */}
      <div className="pointer-events-none absolute right-1 sm:right-3 lg:right-6 top-12 lg:top-16 w-20 sm:w-24 lg:w-28 xl:w-32 -z-0">
        <Rocket className="w-full h-auto" />
      </div>

      {/* twinkling stars */}
      <Star className="absolute left-[14%] top-32 w-4 h-4 sm:w-5 sm:h-5" filled delay={0.2} />
      <Star className="absolute right-[26%] top-20 w-3 h-3 sm:w-4 sm:h-4" delay={0.7} />
      <Star className="absolute left-[42%] bottom-20 w-3 h-3" filled delay={1.1} />
      <Star className="absolute right-[6%] bottom-24 w-4 h-4 sm:w-5 sm:h-5" delay={1.6} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-8 items-start lg:pt-4">
        {/* LEFT: copy */}
        <div className="lg:col-span-7 relative">
          <PaperScrap
            rotate={-4}
            className="hidden md:flex flex-col absolute -top-4 -left-2 max-w-[150px] font-hand text-[0.95rem] leading-tight italic"
          >
            <span>Ensino que</span>
            <span>conecta e</span>
            <span>transforma.</span>
          </PaperScrap>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="headline mt-2 md:mt-12 lg:mt-2 text-[1.9rem] xs:text-[2.2rem] sm:text-[2.6rem] lg:text-[2.6rem] xl:text-[3rem] font-bold text-navy"
          >
            <span className="block">Direção certa.</span>
            <span className="block">Estudo inteligente.</span>
            <span className="block whitespace-nowrap">
              Aprovação com{" "}
              <span className="hand-underline font-hand text-amber-brand text-[1.1em] font-bold italic">
                presença
              </span>
              <span className="text-navy">.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 max-w-md text-sm sm:text-[15px] lg:text-base text-navy/80 leading-relaxed"
          >
            Preparação completa para ENEM e vestibulares, com metodologia focada
            em resultados, acompanhamento real e aulas presenciais e online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3"
          >
            <WhatsAppButton size="sm" />
            <a href="#metodologia" className="btn-ghost justify-center text-sm py-2.5 px-5">
              Conheça nossa metodologia
              <span className="arrow">
                <ArrowRight size={12} strokeWidth={2.4} />
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-navy/80 text-[13px] sm:text-sm"
          >
            {[
              "Presencial em Varginha",
              "Online de qualquer lugar",
              "Acompanhamento individual",
            ].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-brand/20 text-amber-deep">
                  <Check size={11} strokeWidth={2.6} />
                </span>
                {b}
              </span>
            ))}
          </motion.div>

          <Squiggle className="hidden sm:block w-32 h-5 mt-5 opacity-90" />
        </div>

        {/* RIGHT: approval counter board */}
        <div className="lg:col-span-5 relative w-full">
          <ApprovalsBoard />
        </div>
      </div>
    </section>
  );
}
