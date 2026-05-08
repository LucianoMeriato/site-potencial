"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Star, Quote } from "lucide-react";
import { teachers } from "@/data/teachers";
import { PaperEdgeTop, PaperEdgeBottom } from "./DecorativeElements";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={12}
          className={
            i < rating
              ? "fill-amber-brand text-amber-brand"
              : "text-cream/40"
          }
        />
      ))}
    </div>
  );
}

function TeacherCard({
  teacher,
  delay = 0,
  rotate = 0,
}: {
  teacher: (typeof teachers)[number];
  delay?: number;
  rotate?: number;
}) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotate - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, rotate: rotate + 0.5 }}
      className="relative bg-[#FBF5E5] ring-1 ring-black/5 shadow-paper-lg rounded-[14px] p-3 sm:p-4 flex flex-col"
    >
      <span className="tape absolute -top-3 left-4 sm:left-6" />
      <span className="tape tape-orange absolute -top-3 right-4 sm:right-6 rotate-12" />

      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-navy ring-1 ring-black/10">
        {teacher.image && imgOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={teacher.image}
            alt={teacher.name}
            className="h-full w-full object-cover object-top"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="absolute inset-0 flex items-end justify-center avatar-placeholder">
            <svg viewBox="0 0 80 80" className="h-20 w-20 opacity-90" aria-hidden>
              <circle cx="40" cy="32" r="14" fill="#FBF5E5" />
              <path d="M14 76 C14 60 26 50 40 50 S66 60 66 76 Z" fill="#FBF5E5" />
            </svg>
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-col">
        <h3 className="font-semibold text-navy text-sm sm:text-[15px] leading-tight">
          {teacher.name}
        </h3>
        <p className="text-navy/70 text-xs sm:text-[13px] leading-snug mt-1">
          {teacher.area}
        </p>
        <div className="mt-2">
          <StarRow rating={teacher.rating} />
        </div>
        <p className="mt-2 text-amber-deep text-[11px] sm:text-xs font-semibold leading-tight">
          {teacher.experience}
        </p>
      </div>
    </motion.div>
  );
}

export default function Teachers() {
  return (
    <section id="professores" className="relative">
      <PaperEdgeTop fill="#0F2240" className="-mb-px" />
      <div className="bg-navy text-cream relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
          aria-hidden
        >
          <defs>
            <pattern
              id="dotsgrid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="0.8" fill="#F2A93A" />
              <circle cx="50" cy="40" r="0.6" fill="#FBF5E5" />
              <circle cx="70" cy="70" r="0.8" fill="#F2A93A" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotsgrid)" />
        </svg>

        <svg
          viewBox="0 0 200 200"
          aria-hidden
          className="absolute left-4 bottom-6 w-24 h-24 opacity-25 hidden sm:block"
        >
          <g
            stroke="#F2A93A"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          >
            <path d="M20 100 q40 -50 80 0 t80 0" />
            <circle cx="40" cy="160" r="3" fill="#F2A93A" />
            <circle cx="170" cy="40" r="2" fill="#FBF5E5" />
          </g>
        </svg>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 relative">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-3">
              <p className="eyebrow text-cream/70">
                Professores que acompanham
              </p>
              <h2 className="headline mt-2 text-2xl sm:text-3xl lg:text-[2rem] font-semibold leading-tight">
                Experiência, didática e compromisso com o seu resultado.
              </h2>
              <a
                href="#professores"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-cream/40 px-4 py-2 text-sm font-semibold text-cream hover:bg-cream hover:text-navy transition-colors"
              >
                Ver todos os professores
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-brand text-navy">
                  <ArrowRight size={12} />
                </span>
              </a>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
              {teachers.map((t, i) => (
                <TeacherCard
                  key={t.id}
                  teacher={t}
                  delay={i * 0.08}
                  rotate={i % 3 === 1 ? 0 : i % 2 === 0 ? -1 : 1}
                />
              ))}
            </div>

            <div className="lg:col-span-3">
              <motion.figure
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-[#FBF5E5] text-navy rounded-[14px] shadow-paper-lg p-5 rotate-[1.5deg]"
              >
                <span className="tape tape-orange absolute -top-3 left-4" />
                <span className="tape absolute -top-3 right-4 rotate-12" />
                <Quote
                  className="absolute -top-4 -left-2 text-amber-brand"
                  size={28}
                  fill="currentColor"
                />
                <blockquote className="font-hand italic text-base sm:text-[1.1rem] leading-snug pt-2">
                  Não ensinamos só conteúdo. Acreditamos em pessoas e no
                  potencial de cada um.
                </blockquote>
                <Quote
                  className="absolute bottom-2 right-2 text-amber-brand rotate-180"
                  size={20}
                  fill="currentColor"
                />
              </motion.figure>
            </div>
          </div>
        </div>
      </div>
      <PaperEdgeBottom fill="#0F2240" className="-mt-px" />
    </section>
  );
}
