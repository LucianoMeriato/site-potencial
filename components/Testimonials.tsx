"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-12 sm:py-14 lg:py-16">
      <div className="paper-bg absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:items-end mb-8">
          <div className="lg:col-span-6">
            <p className="eyebrow text-navy/70">Depoimentos reais</p>
            <h2 className="headline mt-2 text-2xl sm:text-3xl lg:text-[2rem] font-semibold text-navy leading-tight">
              Menos drama.{" "}
              <span className="font-hand italic font-bold text-amber-brand">
                Mais resultado.
              </span>
            </h2>
          </div>
          <p className="lg:col-span-6 text-navy/75 text-sm sm:text-base lg:text-right">
            Quem ganhou rotina, confiança e resultado conta como foi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 18, rotate: i % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative bg-[#FBF5E5] ring-1 ring-navy/10 shadow-paper rounded-2xl p-5"
            >
              <span className="tape absolute -top-3 left-1/2 -translate-x-1/2" />
              <Quote
                size={22}
                className="text-amber-brand"
                fill="currentColor"
              />
              <blockquote className="mt-2 text-navy text-[14px] sm:text-[15px] leading-snug">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 pt-3 border-t border-navy/10 text-xs text-navy/65">
                <span className="font-semibold text-navy/85">{t.author}</span>{" "}
                · {t.context}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
