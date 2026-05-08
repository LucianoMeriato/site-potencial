"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  variant?: "navy" | "cream";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "cream",
  className = "",
}: Props) {
  const isNavy = variant === "navy";
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={`eyebrow ${isNavy ? "text-cream/80" : "text-navy/70"}`}
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className={`headline mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold ${
          isNavy ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`mt-4 text-base sm:text-lg ${
            isNavy ? "text-cream/80" : "text-navy/75"
          }`}
        >
          {description}
        </motion.div>
      ) : null}
    </div>
  );
}
