"use client";

import { motion } from "framer-motion";
import { Compass, ClipboardCheck, Sparkles } from "lucide-react";
import { pillars } from "@/data/site";
import SectionTitle from "./SectionTitle";

const icons = [Compass, ClipboardCheck, Sparkles];

export default function Pillars() {
  return (
    <section id="sobre" className="relative pt-6 sm:pt-8 lg:pt-10 pb-14 sm:pb-16 lg:pb-20">
      <div className="paper-bg-light absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Por que +Potencial?"
          title={
            <>
              Três pilares que{" "}
              <span className="font-hand italic font-bold text-amber-brand">
                guiam
              </span>{" "}
              o nosso trabalho.
            </>
          }
          description="Fazer o aluno entender o conteúdo, saber estudar sozinho e ter apoio quando surgir dificuldade."
          className="max-w-2xl"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map((p, i) => {
            const Icon = icons[i] ?? Compass;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative bg-[#FBF5E5] ring-1 ring-navy/10 shadow-paper rounded-2xl p-5 sm:p-6"
              >
                <span
                  aria-hidden
                  className="absolute -top-1 left-6 h-1.5 w-12 bg-amber-brand/70 rounded-b-md"
                />
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-cream shadow-paper">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-semibold text-navy text-lg leading-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-navy/75 text-sm sm:text-[15px] leading-relaxed">
                  {p.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
