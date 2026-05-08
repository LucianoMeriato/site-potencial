"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { timelineEntries } from "@/data/timeline";
import { PaperEdgeTop, PaperEdgeBottom, PaperScrap } from "./DecorativeElements";

export default function Timeline() {
  return (
    <section id="historia" className="relative">
      <PaperEdgeTop fill="#0F2240" className="-mb-px" />
      <div className="bg-navy text-cream relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 lg:items-start">
            <div className="lg:col-span-3">
              <p className="eyebrow text-cream/70">Nossa história</p>
              <h2 className="headline mt-2 text-2xl sm:text-3xl lg:text-[2rem] font-semibold leading-tight">
                De uma sala em Varginha a um centro{" "}
                <span className="font-hand italic font-bold text-amber-brand">
                  multidisciplinar
                </span>
                .
              </h2>
              <a
                href="#contato"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-cream/40 px-4 py-2 text-sm font-semibold text-cream hover:bg-cream hover:text-navy transition-colors"
              >
                Faça parte dessa história
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-brand text-navy">
                  <ArrowRight size={12} />
                </span>
              </a>

              <PaperScrap
                rotate={-3}
                variant="cream"
                className="mt-8 hidden lg:flex flex-col max-w-[180px] font-hand italic text-[0.95rem] leading-tight text-navy"
              >
                <span className="block">Seguimos juntos</span>
                <span className="block">escrevendo</span>
                <span className="block">novas histórias</span>
                <span className="block">de sucesso.</span>
              </PaperScrap>
            </div>

            <div className="lg:col-span-8 lg:col-start-4 relative">

              {/* horizontal dashed route — aligned to bullet center (~7px) */}
              <svg
                className="absolute left-0 right-0 top-[2px] hidden md:block w-full h-3 pointer-events-none"
                viewBox="0 0 1000 12"
                preserveAspectRatio="none"
                aria-hidden
              >
                <motion.path
                  d="M20 6 C 200 2, 380 10, 540 4 S 880 10, 980 6"
                  stroke="#F2A93A"
                  strokeWidth="1.8"
                  fill="none"
                  strokeDasharray="3 6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6 }}
                />
              </svg>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 lg:gap-3 relative">
                {timelineEntries.map((e, i) => (
                  <motion.div
                    key={e.year}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-2 md:flex-col md:items-start">
                      <span className="relative z-10 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-brand ring-4 ring-navy" />
                      <span className="font-display text-xl lg:text-2xl font-bold text-amber-brand">
                        {e.year}
                      </span>
                    </div>
                    <h3 className="mt-2 font-semibold text-cream text-[15px] sm:text-base">
                      {e.title}
                    </h3>
                    <p className="mt-1 text-cream/75 text-xs sm:text-sm leading-snug max-w-[220px]">
                      {e.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaperEdgeBottom fill="#0F2240" className="-mt-px" />
    </section>
  );
}
