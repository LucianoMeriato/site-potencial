"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Rocket, Compass } from "./DecorativeElements";

const TOTAL_DURATION = 4600;

export default function SplashScreen() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setOpen(false), TOTAL_DURATION);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!open) document.body.style.overflow = "";
  }, [open]);

  // Pre-computed star positions for deterministic render
  const stars = [
    { top: "12%", left: "10%", size: 6, delay: 0.2 },
    { top: "18%", left: "82%", size: 8, delay: 0.4 },
    { top: "28%", left: "22%", size: 4, delay: 0.6 },
    { top: "32%", left: "70%", size: 6, delay: 0.5 },
    { top: "42%", left: "15%", size: 5, delay: 0.8 },
    { top: "48%", left: "88%", size: 7, delay: 0.7 },
    { top: "55%", left: "30%", size: 4, delay: 1.0 },
    { top: "62%", left: "78%", size: 6, delay: 0.9 },
    { top: "68%", left: "12%", size: 5, delay: 1.1 },
    { top: "75%", left: "62%", size: 8, delay: 1.0 },
    { top: "82%", left: "20%", size: 4, delay: 1.2 },
    { top: "88%", left: "80%", size: 6, delay: 1.3 },
  ];

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] overflow-hidden"
          aria-hidden
        >
          {/* paper background — animated reveal away on exit */}
          <div className="paper-bg absolute inset-0" />

          {/* dotted radial grid that fades */}
          <motion.svg
            className="absolute inset-0 w-full h-full opacity-50"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0.5] }}
            transition={{ duration: 1.6 }}
            aria-hidden
          >
            <defs>
              <pattern
                id="splashDots"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="16" cy="16" r="1" fill="#0F2240" opacity="0.18" />
              </pattern>
              <radialGradient id="splashFade" cx="50%" cy="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="white" stopOpacity="0.7" />
              </radialGradient>
            </defs>
            <rect width="1200" height="800" fill="url(#splashDots)" />
            <rect width="1200" height="800" fill="url(#splashFade)" />
          </motion.svg>

          {/* Twinkling stars scattered — appear in stagger */}
          {stars.map((s, i) => (
            <motion.svg
              key={i}
              viewBox="0 0 24 24"
              style={{
                top: s.top,
                left: s.left,
                width: s.size * 4,
                height: s.size * 4,
                position: "absolute",
              }}
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{
                scale: [0, 1.4, 1, 1.2, 1],
                opacity: [0, 1, 0.6, 1, 0.8],
                rotate: 0,
              }}
              transition={{
                duration: 2,
                delay: s.delay * 1.4,
                ease: "easeOut",
              }}
            >
              <path
                d="M12 2 L14.5 9 L22 9.3 L16 14 L18 21.5 L12 17 L6 21.5 L8 14 L2 9.3 L9.5 9 Z"
                fill="#F2A93A"
                stroke="#F2A93A"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </motion.svg>
          ))}

          {/* Hand-drawn arc trail across the entire screen */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1400 800"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="splashTrail" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#F2A93A" stopOpacity="0" />
                <stop offset="0.3" stopColor="#F2A93A" stopOpacity="0.9" />
                <stop offset="0.85" stopColor="#FBE3A6" stopOpacity="0.95" />
                <stop offset="1" stopColor="#F2A93A" stopOpacity="0" />
              </linearGradient>
              <filter id="splashBlur" x="-5%" y="-5%" width="110%" height="110%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>
            {/* Glow layer */}
            <motion.path
              d="M-40 720 C 200 660, 380 580, 560 500 S 920 320, 1100 220 S 1320 80, 1500 -50"
              stroke="url(#splashTrail)"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
              filter="url(#splashBlur)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.6, ease: "easeOut", delay: 1.4 }}
            />
            {/* Sharp line on top */}
            <motion.path
              d="M-40 720 C 200 660, 380 580, 560 500 S 920 320, 1100 220 S 1320 80, 1500 -50"
              stroke="#FFEFC7"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.95"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.6, ease: "easeOut", delay: 1.4 }}
            />
          </svg>

          {/* Rocket flying along the trail */}
          <motion.div
            className="absolute pointer-events-none"
            initial={{ x: -200, y: 600, rotate: -10, opacity: 0 }}
            animate={{
              x: ["-15vw", "0vw", "20vw", "45vw"],
              y: ["55vh", "30vh", "5vh", "-25vh"],
              rotate: [-10, 15, 28, 38],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.8,
              ease: [0.2, 0.6, 0.4, 1],
              delay: 1.4,
              times: [0, 0.3, 0.7, 1],
            }}
            style={{ left: "50%", top: "50%", marginLeft: -50, marginTop: -80 }}
          >
            <Rocket className="w-24 h-32 sm:w-32 sm:h-44 drop-shadow-[0_8px_18px_rgba(242,169,58,0.45)]" />
          </motion.div>

          {/* Compass anchor in bottom-left as decoration */}
          <motion.div
            className="absolute left-6 sm:left-10 bottom-8 sm:bottom-12 hidden md:block"
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Compass className="w-16 h-16" />
          </motion.div>

          {/* Logo + tagline center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, y: 30, rotate: -3 }}
              animate={{
                scale: [0.6, 1.08, 0.98, 1],
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              transition={{
                duration: 1.4,
                ease: [0.2, 0.8, 0.2, 1],
                delay: 0.4,
                times: [0, 0.4, 0.7, 1],
              }}
              className="relative"
            >
              <Image
                src="/images/logo-mais-potencial.png"
                alt="+Potencial Ensino Multidisciplinar"
                width={1024}
                height={870}
                priority
                className="block w-[260px] sm:w-[340px] md:w-[420px] lg:w-[460px] h-auto object-contain drop-shadow-[0_10px_28px_rgba(15,34,64,0.18)]"
              />
              {/* Spark right at the rocket position in the logo */}
              <motion.span
                className="absolute right-[18%] top-[30%] block w-3 h-3 rounded-full bg-amber-brand shadow-[0_0_28px_10px_rgba(242,169,58,0.7)]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.8, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.0, delay: 1.4, ease: "easeOut" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.9 }}
              className="-mt-1 sm:-mt-2 font-hand italic text-navy/90 text-base sm:text-lg md:text-xl text-center"
            >
              Direção certa.{" "}
              <span className="text-amber-brand font-bold">
                Aprovação com presença.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
              className="mt-6 flex items-center gap-1.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="block h-2 w-2 rounded-full bg-amber-brand"
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.18,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Page-reveal curtain — two halves split apart on exit */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-navy origin-left"
            initial={{ width: "0%" }}
            animate={{ width: "0%" }}
            exit={{
              width: "50%",
              transition: { duration: 0.9, ease: [0.7, 0, 0.3, 1] },
            }}
            style={{ zIndex: 5 }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 bg-navy origin-right"
            initial={{ width: "0%" }}
            animate={{ width: "0%" }}
            exit={{
              width: "50%",
              transition: { duration: 0.9, ease: [0.7, 0, 0.3, 1] },
            }}
            style={{ zIndex: 5 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
