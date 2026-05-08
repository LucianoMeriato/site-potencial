"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  ScrollText,
  PenLine,
  BookOpen,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import { trails } from "@/data/trails";

const icons = {
  graduationCap: GraduationCap,
  scrollText: ScrollText,
  penLine: PenLine,
  bookOpen: BookOpen,
  trendingUp: TrendingUp,
  users: Users,
};

export default function StudyTrails() {
  return (
    <section id="trilhas" className="relative py-16 lg:py-24">
      <div className="paper-bg-light absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <SectionTitle
            className="lg:col-span-5"
            eyebrow="Trilhas de estudo"
            title={
              <>
                Escolha sua trilha.
                <br />
                Alcance seu{" "}
                <span className="font-hand italic font-bold text-amber-brand">
                  destino
                </span>
                .
              </>
            }
          />
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {trails.map((t, i) => {
            const Icon = icons[t.iconKey];
            return (
              <motion.a
                key={t.id}
                href={t.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col gap-2.5 rounded-2xl bg-[#FBF5E5] ring-1 ring-navy/10 shadow-paper p-4 sm:p-5 hover:shadow-paper-lg transition-shadow min-h-[180px]"
              >
                <span
                  aria-hidden
                  className="absolute -top-1 right-4 h-1.5 w-10 bg-amber-brand/70 rounded-b-md"
                />
                <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-navy text-cream shadow-[inset_0_-2px_4px_rgba(0,0,0,0.18)]">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <h3 className="font-semibold text-navy text-base sm:text-lg leading-tight">
                  {t.title}
                </h3>
                <p className="text-navy/70 text-xs sm:text-sm leading-snug">
                  {t.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-amber-deep group-hover:text-amber-brand transition-colors">
                  Saber mais
                  <ArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
