"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faq } from "@/data/site";
import SectionTitle from "./SectionTitle";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-14 sm:py-16 lg:py-20">
      <div className="paper-bg-light absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:items-start">
          <div className="lg:col-span-4">
            <SectionTitle
              eyebrow="Perguntas frequentes"
              title={
                <>
                  Tirando as{" "}
                  <span className="font-hand italic font-bold text-amber-brand">
                    dúvidas
                  </span>{" "}
                  mais comuns.
                </>
              }
              description="Se ficou alguma pergunta no caminho, manda um oi pelo WhatsApp — a gente responde rapidinho."
            />
          </div>

          <div className="lg:col-span-8">
            <ul className="space-y-3">
              {faq.map((item, i) => {
                const open = openIdx === i;
                return (
                  <li
                    key={i}
                    className="bg-[#FBF5E5] ring-1 ring-navy/10 shadow-paper rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx(open ? null : i)}
                      aria-expanded={open}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left"
                    >
                      <span className="font-semibold text-navy text-[15px] sm:text-base leading-snug">
                        {item.q}
                      </span>
                      <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-cream"
                      >
                        <Plus size={16} strokeWidth={2.4} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 sm:px-6 pb-5 text-navy/75 text-sm sm:text-[15px] leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
