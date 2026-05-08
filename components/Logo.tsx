"use client";

import Image from "next/image";

export default function Logo({
  variant = "navy",
  className = "",
}: {
  variant?: "navy" | "cream";
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center ${className}`}
      aria-label="+Potencial Ensino Multidisciplinar"
    >
      <Image
        src="/images/logo-mais-potencial.png"
        alt="+Potencial Ensino Multidisciplinar"
        width={1024}
        height={870}
        priority
        sizes="(min-width: 1024px) 220px, 180px"
        className={`block h-auto w-[140px] sm:w-[170px] lg:w-[210px] xl:w-[230px] object-contain ${
          variant === "cream" ? "brightness-0 invert" : ""
        }`}
      />
    </div>
  );
}
