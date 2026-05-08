"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const sections = site.nav.map((n) => n.href.replace("#", ""));
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top < 120) current = id;
        }
      }
      setActive("#" + current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FBF5E5]/90 backdrop-blur-md shadow-[0_4px_18px_-12px_rgba(15,34,64,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
        <a href="#inicio" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-[13px] xl:text-sm font-semibold transition-colors whitespace-nowrap ${
                active === item.href
                  ? "text-amber-brand"
                  : "text-navy/85 hover:text-navy"
              }`}
            >
              {item.label}
              {active === item.href ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-amber-brand"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block shrink-0">
          <WhatsAppButton size="sm" label="Fale no WhatsApp" />
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-navy text-cream shadow-paper"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute left-0 right-0 top-full mx-3 mt-2 rounded-2xl bg-[#FBF5E5] shadow-paper-lg border border-navy/10 p-4"
          >
            <ul className="flex flex-col">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 px-3 rounded-xl text-base font-semibold transition-colors ${
                      active === item.href
                        ? "bg-navy text-cream"
                        : "text-navy hover:bg-navy/5"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <WhatsAppButton size="sm" className="w-full justify-center" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
