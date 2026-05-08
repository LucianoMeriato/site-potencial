"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Users,
  GraduationCap,
  Star,
  UserCheck,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { stats } from "@/data/site";

const iconMap = {
  trophy: Trophy,
  users: Users,
  graduationCap: GraduationCap,
  star: Star,
  userCheck: UserCheck,
  checkCircle: CheckCircle2,
  compass: Compass,
};

function AnimatedValue({
  value,
  inView,
  delay = 0,
}: {
  value: string;
  inView: boolean;
  delay?: number;
}) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const [display, setDisplay] = useState(
    match ? match[1] + "0" + match[3] : value,
  );

  useEffect(() => {
    if (!match || !inView) return;
    const target = parseInt(match[2], 10);
    const duration = 1200;
    const startAt = performance.now() + delay * 1000;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.max(0, Math.min(1, (now - startAt) / duration));
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(target * eased);
      setDisplay(`${match[1]}${current}${match[3]}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  if (!match) return <>{value}</>;
  return <>{display}</>;
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-5 sm:py-6 lg:py-7"
      aria-label="Métricas e diferenciais"
    >
      <div className="paper-bg-light absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-2 gap-y-5 items-stretch">
          {stats.map((s, i) => {
            const Icon = iconMap[s.iconKey as keyof typeof iconMap] ?? Compass;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col items-center text-center gap-1.5 px-1 lg:border-l lg:first:border-l-0 lg:border-navy/10"
              >
                <motion.span
                  initial={{ scale: 0.6, rotate: -8 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 14,
                    delay: i * 0.06,
                  }}
                  className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-navy/5 text-navy"
                >
                  <Icon size={18} strokeWidth={2} />
                </motion.span>
                <p className="font-semibold text-navy text-[13px] sm:text-sm leading-snug">
                  <AnimatedValue
                    value={s.value}
                    inView={inView}
                    delay={i * 0.05}
                  />
                </p>
                <p className="text-navy/60 text-[11px] sm:text-xs leading-snug max-w-[140px]">
                  {s.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
