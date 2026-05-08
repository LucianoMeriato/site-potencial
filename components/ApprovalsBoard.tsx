"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { approvals } from "@/data/site";

function CountUp({
  to,
  duration = 1800,
  start,
}: {
  to: number;
  duration?: number;
  start: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startedAt = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return <>{value}</>;
}

export default function ApprovalsBoard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg">
      {/* Spiral notebook backdrop */}
      <div className="relative grid-paper rounded-[16px] shadow-paper-lg ring-1 ring-navy/10 px-4 pt-7 pb-4 sm:px-5 sm:pt-8 sm:pb-5">
        {/* horizontal spiral binding at top */}
        <div className="spiral-top absolute -top-2.5 left-4 right-4 rounded-md" />

        {/* Decorative tape */}
        <span className="tape absolute -top-3 left-10 rotate-[-6deg]" />
        <span className="tape tape-orange absolute -top-3 right-10 rotate-[7deg]" />

        {/* Headline */}
        <div className="text-center">
          <p className="eyebrow text-navy/65 text-[10px] sm:text-[11px]">
            Quadro de aprovações
          </p>
          <p className="font-hand italic text-navy/85 mt-0.5 text-sm sm:text-base">
            Já carimbamos
          </p>
        </div>

        {/* Big counter */}
        <div className="mt-1 flex items-baseline justify-center gap-1">
          <span className="font-display font-extrabold text-navy text-[3.6rem] sm:text-[4.4rem] lg:text-[5rem] xl:text-[5.6rem] leading-none">
            <CountUp to={approvals.total} start={inView} />
          </span>
          <span className="font-display font-extrabold text-amber-brand text-3xl sm:text-4xl lg:text-5xl leading-none">
            +
          </span>
        </div>

        <p className="text-center mt-1 text-navy/80 font-semibold text-[11px] sm:text-xs uppercase tracking-[0.18em]">
          {approvals.highlight}
        </p>
        <p className="text-center mt-1.5 text-navy/65 text-[11px] sm:text-xs leading-snug max-w-xs mx-auto">
          {approvals.caption}
        </p>

        {/* Universities — smaller sticker style */}
        <div className="mt-3 flex flex-wrap justify-center gap-1 sm:gap-1.5">
          {approvals.universities.map((u, i) => (
            <motion.span
              key={u.sigla}
              initial={{ opacity: 0, y: 10, rotate: i % 2 === 0 ? -2 : 2 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotate: i % 2 === 0 ? -2 : 2,
                    }
                  : {}
              }
              transition={{
                delay: 0.7 + i * 0.06,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{ y: -2, rotate: 0 }}
              title={u.nome}
              className="inline-flex items-center gap-0.5 rounded-md bg-[#FBF5E5] ring-1 ring-navy/15 shadow-paper px-1.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-navy"
            >
              <GraduationCap size={9} className="text-amber-deep" />
              {u.sigla}
            </motion.span>
          ))}
        </div>

        {/* Hand-written ribbon */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="h-px flex-1 bg-navy/15 max-w-[50px]" />
          <span className="font-hand italic text-amber-deep text-xs sm:text-sm">
            ...e contando!
          </span>
          <span className="h-px flex-1 bg-navy/15 max-w-[50px]" />
        </div>
      </div>
    </div>
  );
}
