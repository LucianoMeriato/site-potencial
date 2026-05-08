"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  Calendar,
  Lightbulb,
  Target,
  MessageCircle,
  Users,
  Send,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import { PaperScrap } from "./DecorativeElements";
import { methodologySteps } from "@/data/methodology";

const icons = {
  fileSearch: FileSearch,
  calendar: Calendar,
  lightbulb: Lightbulb,
  target: Target,
  messageCircle: MessageCircle,
  users: Users,
};

export default function Methodology() {
  return (
    <section
      id="metodologia"
      className="relative py-14 sm:py-16 lg:py-24 overflow-hidden"
    >
      <div className="paper-bg absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:items-end">
          <SectionTitle
            className="lg:col-span-5"
            eyebrow="Nossa metodologia"
            title={
              <>
                Uma jornada
                <br />
                com{" "}
                <span className="font-hand italic font-bold text-amber-brand">
                  direção
                </span>{" "}
                e método.
              </>
            }
          />

          <div className="lg:col-span-6 lg:col-start-7 relative hidden lg:block">
            <PaperScrap
              rotate={4}
              className="absolute -top-2 right-0 max-w-[170px] flex flex-col font-hand italic text-[0.95rem] leading-tight"
            >
              <span className="block">Cada etapa</span>
              <span className="block">te aproxima</span>
              <span className="block">da sua melhor</span>
              <span className="block">versão.</span>
            </PaperScrap>
          </div>
        </div>

        {/* Journey path */}
        <div className="mt-12 lg:mt-20 relative">
          {/* Curved dotted route — desktop only */}
          <svg
            className="absolute inset-x-0 -top-4 hidden lg:block w-full h-20 pointer-events-none"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              d="M40 56 C 200 0, 360 80, 520 32 S 880 80, 1040 28 S 1180 60, 1180 50"
              stroke="#0F2240"
              strokeOpacity="0.5"
              strokeWidth="2.4"
              fill="none"
              strokeDasharray="3 8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
          </svg>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10">
            {methodologySteps.map((s, i) => {
              const Icon = icons[s.iconKey];
              return (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="relative flex flex-col items-start"
                >
                  <div className="flex items-center gap-3 w-full">
                    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-cream text-xs font-bold shadow-paper">
                      {s.number}
                    </span>
                    <span className="lg:hidden h-px flex-1 dotted-route" />
                  </div>

                  <div className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cream-100 text-navy ring-1 ring-navy/10 shadow-paper">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-3 font-semibold text-navy text-[15px] sm:text-base leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-navy/70 text-sm leading-snug">
                    {s.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Plane / final pointer */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="hidden lg:flex absolute right-0 -top-10 items-center justify-center text-amber-brand"
            aria-hidden
          >
            <Send size={26} strokeWidth={2} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
