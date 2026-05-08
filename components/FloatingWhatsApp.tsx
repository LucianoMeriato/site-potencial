"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { site } from "@/data/site";

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {showBubble && !dismissed ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="pointer-events-auto relative max-w-[260px] sm:max-w-[280px] bg-[#FBF5E5] ring-1 ring-navy/10 shadow-paper-lg rounded-2xl rounded-br-md px-4 py-3 -mr-1"
          >
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Fechar"
              className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-navy text-cream shadow-paper hover:bg-navy-400 transition-colors"
            >
              <X size={12} />
            </button>
            <p className="font-hand italic text-navy/90 text-base leading-tight">
              Manda um oi! 👋
            </p>
            <p className="text-navy/75 text-xs sm:text-[13px] leading-snug mt-1">
              Tira dúvidas, agenda visita ou conhece a metodologia direto pelo
              WhatsApp.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.a
        href={site.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        initial={{ opacity: 0, scale: 0.6, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto relative inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-amber-brand text-navy shadow-[0_10px_24px_-8px_rgba(242,169,58,0.7)] hover:bg-amber-warm transition-colors"
      >
        <span className="absolute inset-0 rounded-full bg-amber-brand animate-ping opacity-40" />
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          aria-hidden
          className="relative"
        >
          <path
            fill="currentColor"
            d="M19.05 4.91A10 10 0 0 0 4.43 18.34L3 22l3.79-1.39a10 10 0 0 0 12.26-15.7zm-7 14.36a8.32 8.32 0 0 1-4.25-1.16l-.31-.18-2.25.83.84-2.19-.2-.32a8.34 8.34 0 1 1 6.17 3zm4.55-6.23c-.25-.13-1.46-.72-1.69-.8s-.39-.13-.55.12-.63.8-.78.96-.29.18-.54.06a6.85 6.85 0 0 1-3.41-2.99c-.26-.45.26-.42.74-1.39a.47.47 0 0 0 0-.45c-.06-.13-.55-1.34-.76-1.83s-.4-.42-.55-.43h-.47a.91.91 0 0 0-.66.31 2.78 2.78 0 0 0-.86 2.06 4.83 4.83 0 0 0 1 2.55 11 11 0 0 0 4.18 3.69c2.45 1.06 2.45.71 2.89.66a2.5 2.5 0 0 0 1.65-1.16 2 2 0 0 0 .14-1.16c-.06-.11-.21-.17-.46-.3z"
          />
        </svg>
      </motion.a>
    </div>
  );
}
