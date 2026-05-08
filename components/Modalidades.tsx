"use client";

import { motion } from "framer-motion";
import { MapPin, Laptop, ArrowRight, Check } from "lucide-react";
import { modalidades } from "@/data/site";
import { site } from "@/data/site";
import SectionTitle from "./SectionTitle";

const icons = {
  mapPin: MapPin,
  laptop: Laptop,
};

export default function Modalidades() {
  return (
    <section id="modalidades" className="relative py-14 sm:py-16 lg:py-20">
      <div className="paper-bg absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <SectionTitle
            className="lg:col-span-6"
            eyebrow="Modalidades"
            title={
              <>
                Estude{" "}
                <span className="font-hand italic font-bold text-amber-brand">
                  do seu jeito
                </span>
                , com a mesma presença.
              </>
            }
            description="Presencial em Varginha ou online de qualquer lugar — a metodologia, o acompanhamento e os professores são os mesmos."
          />
        </div>

        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4 sm:gap-5">
          {modalidades.map((m, i) => {
            const Icon = icons[m.iconKey as keyof typeof icons] ?? MapPin;
            const href = m.cta.href === "wa" ? site.whatsapp.href : m.cta.href;
            const external = m.cta.href === "wa";
            return (
              <motion.article
                key={m.titulo}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative bg-[#FBF5E5] ring-1 ring-navy/10 shadow-paper-lg rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col"
              >
                <span
                  aria-hidden
                  className="absolute -top-1 left-6 h-1.5 w-12 bg-amber-brand/70 rounded-b-md"
                />
                <span className="tape absolute -top-3 right-8 rotate-6" />

                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-cream shadow-paper">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-navy text-lg sm:text-xl leading-tight">
                      {m.titulo}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-navy/75 text-sm sm:text-[15px] leading-relaxed">
                  {m.descricao}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {m.bullets.map((b, k) => (
                    <li
                      key={k}
                      className="flex items-center gap-2 text-navy/80 text-[13px] sm:text-sm"
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-brand/20 text-amber-deep">
                        <Check size={11} strokeWidth={2.6} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy text-cream px-4 py-2.5 text-sm font-semibold hover:bg-navy-400 transition-colors w-fit"
                >
                  {m.cta.label}
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-brand text-navy">
                    <ArrowRight size={11} />
                  </span>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
