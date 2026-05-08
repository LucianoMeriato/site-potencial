"use client";

import { motion } from "framer-motion";

export function Rocket({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 120 200"
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0, 6, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <defs>
        <linearGradient id="rocketBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FBF5E5" />
          <stop offset="1" stopColor="#E2D7B6" />
        </linearGradient>
        <linearGradient id="rocketWindow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F2A93A" />
          <stop offset="1" stopColor="#C97A14" />
        </linearGradient>
      </defs>

      <g transform="translate(60 100) rotate(28) translate(-60 -100)">
        {/* fuselage */}
        <path
          d="M60 18 C 84 60, 90 110, 80 150 L 40 150 C 30 110, 36 60, 60 18 Z"
          fill="url(#rocketBody)"
          stroke="#0F2240"
          strokeWidth="2.4"
        />
        {/* nose */}
        <path
          d="M60 18 C 70 36, 70 50, 65 58 L 55 58 C 50 50, 50 36, 60 18 Z"
          fill="#F2A93A"
          stroke="#0F2240"
          strokeWidth="2.4"
        />
        {/* window */}
        <circle
          cx="60"
          cy="84"
          r="11"
          fill="url(#rocketWindow)"
          stroke="#0F2240"
          strokeWidth="2.4"
        />
        <circle cx="56" cy="80" r="3" fill="#FBF5E5" opacity="0.7" />
        {/* fins */}
        <path
          d="M40 150 L 22 168 L 40 130 Z"
          fill="#0F2240"
          stroke="#0F2240"
          strokeWidth="2"
        />
        <path
          d="M80 150 L 98 168 L 80 130 Z"
          fill="#0F2240"
          stroke="#0F2240"
          strokeWidth="2"
        />
        {/* belt */}
        <path
          d="M44 120 H 76"
          stroke="#0F2240"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* flame */}
        <motion.path
          d="M50 152 Q60 200 70 152 Q60 175 50 152Z"
          fill="#F2A93A"
          animate={{ scaleY: [1, 1.15, 0.95, 1.1, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ transformOrigin: "60px 152px" }}
        />
      </g>
    </motion.svg>
  );
}

export function RocketTrail({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1400 220"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="trailGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#F2A93A" stopOpacity="0" />
          <stop offset="0.4" stopColor="#F2A93A" stopOpacity="0.85" />
          <stop offset="0.85" stopColor="#FBE3A6" stopOpacity="0.95" />
          <stop offset="1" stopColor="#F2A93A" stopOpacity="0" />
        </linearGradient>
        <filter id="trailBlur" x="-5%" y="-50%" width="110%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <motion.path
        d="M0 170 C 200 110, 380 60, 560 110 S 920 220, 1100 130 S 1320 30, 1400 70"
        stroke="url(#trailGrad)"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        filter="url(#trailBlur)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.6, ease: "easeInOut" }}
      />
      <motion.path
        d="M0 170 C 200 110, 380 60, 560 110 S 920 220, 1100 130 S 1320 30, 1400 70"
        stroke="#FFEFC7"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.6, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function Compass({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="#FBF5E5"
        stroke="#F2A93A"
        strokeWidth="2.4"
      />
      <circle
        cx="60"
        cy="60"
        r="44"
        fill="none"
        stroke="#0F2240"
        strokeWidth="1.2"
        strokeDasharray="2 4"
      />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="60"
          y1="14"
          x2="60"
          y2="22"
          stroke="#0F2240"
          strokeWidth="1.4"
          strokeLinecap="round"
          transform={`rotate(${deg} 60 60)`}
        />
      ))}
      <text
        x="60"
        y="22"
        textAnchor="middle"
        fontSize="10"
        fill="#0F2240"
        fontWeight="700"
      >
        N
      </text>
      <text
        x="60"
        y="106"
        textAnchor="middle"
        fontSize="9"
        fill="#0F2240"
      >
        S
      </text>
      <text x="14" y="64" fontSize="9" fill="#0F2240">
        O
      </text>
      <text x="100" y="64" fontSize="9" fill="#0F2240">
        L
      </text>
      <motion.g
        animate={{ rotate: [0, 8, -6, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 60px" }}
      >
        <polygon points="60,28 64,60 60,64 56,60" fill="#F2A93A" />
        <polygon points="60,92 56,60 60,56 64,60" fill="#0F2240" />
      </motion.g>
      <circle cx="60" cy="60" r="3.5" fill="#0F2240" />
    </svg>
  );
}

export function Star({
  className = "",
  filled = false,
  delay = 0,
}: {
  className?: string;
  filled?: boolean;
  delay?: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={className}
      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 3.4, repeat: Infinity, delay }}
      aria-hidden
    >
      <path
        d="M12 2 L14.5 9 L22 9.3 L16 14 L18 21.5 L12 17 L6 21.5 L8 14 L2 9.3 L9.5 9 Z"
        fill={filled ? "#F2A93A" : "none"}
        stroke="#F2A93A"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export function PaperScrap({
  children,
  className = "",
  rotate = -2,
  variant = "cream",
}: {
  children?: React.ReactNode;
  className?: string;
  rotate?: number;
  variant?: "cream" | "navy" | "yellow";
}) {
  const bg =
    variant === "navy"
      ? "bg-navy text-cream"
      : variant === "yellow"
        ? "bg-[#F8E8B6] text-navy"
        : "bg-[#FBF5E5] text-navy";

  return (
    <div
      className={`relative ${bg} shadow-paper px-3 py-2 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span className="tape -top-3 left-1/2 -translate-x-1/2" />
      {children}
    </div>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 24" className={className} aria-hidden>
      <path
        d="M2 12 Q20 0 40 12 T80 12 T120 12 T160 12 T198 12"
        stroke="#F2A93A"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 40" className={className} aria-hidden>
      <path
        d="M4 28 C 20 8, 50 8, 70 22"
        stroke="#0F2240"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />
      <path
        d="M62 14 L 72 22 L 60 28"
        stroke="#0F2240"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CornerScribbles({ side = "left" }: { side?: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none absolute top-0 ${side === "left" ? "left-0" : "right-0"} h-full w-32 hidden lg:block`}
      aria-hidden
    >
      <svg viewBox="0 0 130 600" className="h-full w-full">
        <g
          stroke="#0F2240"
          strokeOpacity="0.15"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M20 60 q20 -10 40 0" />
          <circle cx="80" cy="120" r="3" />
          <path d="M30 200 l8 -8 m0 8 l-8 -8" />
          <path d="M20 320 q30 -20 60 -10 t40 20" />
          <path d="M40 480 l4 -4 l5 5 l-5 5 z" fill="#F2A93A" stroke="#F2A93A" />
          <path d="M70 540 q20 10 40 -2" />
        </g>
      </svg>
    </div>
  );
}

function tornPath(direction: "top" | "bottom") {
  const teeth = 80;
  const w = 1200;
  const step = w / teeth;
  let d = direction === "top" ? `M0 24` : `M0 0`;
  for (let i = 0; i <= teeth; i++) {
    const x = i * step;
    // pseudo-random but deterministic offsets
    const r1 = Math.sin(i * 1.7) * 2.4;
    const r2 = Math.cos(i * 2.1) * 2;
    const baseY = direction === "top" ? 24 : 0;
    const y = baseY + (i % 2 === 0 ? 1 + r1 : -1 + r2);
    d += ` L${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  if (direction === "top") {
    d += ` L${w} 0 L0 0 Z`;
  } else {
    d += ` L${w} 24 L0 24 Z`;
  }
  return d;
}

const TOP_PATH = tornPath("top");
const BOTTOM_PATH = tornPath("bottom");

export function PaperEdgeTop({
  fill = "#0F2240",
  className = "",
}: {
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className={`block w-full h-[18px] sm:h-[22px] ${className}`}
      aria-hidden
    >
      <path d={TOP_PATH} fill={fill} />
    </svg>
  );
}

export function PaperEdgeBottom({
  fill = "#0F2240",
  className = "",
}: {
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className={`block w-full h-[18px] sm:h-[22px] ${className}`}
      aria-hidden
    >
      <path d={BOTTOM_PATH} fill={fill} />
    </svg>
  );
}
