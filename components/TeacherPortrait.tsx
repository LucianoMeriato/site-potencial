"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  name: string;
  role: string;
  image?: string;
  rotate?: number;
  delay?: number;
  size?: "sm" | "md" | "lg" | "xl";
};

export default function TeacherPortrait({
  name,
  role,
  image,
  rotate = 0,
  delay = 0,
  size = "md",
}: Props) {
  const [imgOk, setImgOk] = useState(true);
  const dim =
    size === "xl"
      ? "w-[44%] aspect-[4/5] min-h-[260px] sm:min-h-[320px] lg:min-h-[400px] xl:min-h-[460px]"
      : size === "lg"
        ? "w-[33%] aspect-[4/5] min-h-[200px] sm:min-h-[260px] lg:min-h-[320px] xl:min-h-[360px]"
        : size === "sm"
          ? "w-[22%] aspect-[4/5] min-h-[140px]"
          : "w-[31%] aspect-[4/5] min-h-[180px] sm:min-h-[240px] lg:min-h-[300px] xl:min-h-[340px]";

  // Distinct gradient for placeholders so faces look different
  const gradient =
    name.includes("Diego")
      ? "linear-gradient(160deg,#7B97BB 0%,#3F567A 70%)"
      : name.includes("Rogério")
        ? "linear-gradient(160deg,#A5B6CE 0%,#52688A 70%)"
        : "linear-gradient(160deg,#8FA3BF 0%,#46587A 70%)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: rotate - 4 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ y: -6, rotate: rotate + 1 }}
      className={`relative shrink-0 ${dim}`}
    >
      <span className="tape tape-blue absolute -top-3 left-6 z-20" />
      <span className="tape absolute -top-2 right-4 rotate-12 z-20" />

      {/* Outer paper frame (cream border like a polaroid) */}
      <div className="relative h-full w-full rounded-[10px] shadow-paper-lg ring-1 ring-black/10 p-[3px] sm:p-[4px] bg-[#FBF5E5]">
        {/* Decorative colored backplate behind the photo */}
        <div
          className="absolute inset-[3px] sm:inset-[4px] rounded-[7px] overflow-hidden"
          style={{
            background: name.includes("Rogério")
              ? "radial-gradient(circle at 50% 35%, #F2A93A 0%, #E89A2C 55%, #C97A14 100%)"
              : name.includes("Diego")
                ? "radial-gradient(circle at 50% 35%, #2F4D7C 0%, #1A2F5B 55%, #0F2240 100%)"
                : "radial-gradient(circle at 50% 35%, #5C77A0 0%, #2F4D7C 55%, #0F2240 100%)",
          }}
        >
          {/* Sunburst rays for visual contrast */}
          <svg
            className="absolute inset-0 w-full h-full opacity-25"
            viewBox="0 0 200 250"
            preserveAspectRatio="none"
            aria-hidden
          >
            <g
              stroke={name.includes("Rogério") ? "#FBF5E5" : "#F2A93A"}
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            >
              {Array.from({ length: 18 }).map((_, i) => {
                const angle = (i / 18) * Math.PI * 2;
                return (
                  <line
                    key={i}
                    x1={100}
                    y1={90}
                    x2={100 + Math.cos(angle) * 200}
                    y2={90 + Math.sin(angle) * 200}
                  />
                );
              })}
            </g>
          </svg>
        </div>

        {/* Photo container */}
        <div className="relative h-full w-full rounded-[7px] overflow-hidden">
          {image && imgOk ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={name}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "center 18%" }}
              onError={() => setImgOk(false)}
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-end pb-8"
              style={{ background: gradient }}
            >
              <svg viewBox="0 0 80 80" className="h-24 w-24 opacity-90" aria-hidden>
                <circle cx="40" cy="30" r="14" fill="#FBF5E5" />
                <path
                  d="M14 76 C14 60 26 50 40 50 S66 60 66 76 Z"
                  fill="#FBF5E5"
                />
              </svg>
            </div>
          )}

          {/* Vignette gradient at the bottom — hides busy backgrounds and creates space for the name label */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,34,64,0) 0%, rgba(15,34,64,0.25) 35%, rgba(15,34,64,0.85) 80%, rgba(15,34,64,0.95) 100%)",
            }}
          />

          {/* Subtle top inner shadow for depth */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-12 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Name label in the dark area */}
          <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 z-10">
            <p className="text-cream font-semibold text-[13px] sm:text-base lg:text-lg leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {name}
            </p>
            <p className="text-amber-brand text-[10px] sm:text-xs lg:text-sm leading-tight font-medium uppercase tracking-wide mt-0.5">
              {role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
