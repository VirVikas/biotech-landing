"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Research", href: "#research" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#innovation" },
];

export function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? false : { y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <nav
          className={[
            "mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6",
            scrolled
              ? "border border-white/[0.09] bg-[#071923]/80 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
              : "border border-transparent bg-white/[0.02]",
          ].join(" ")}
        >
          {/* Logo */}
          <a
            href="#top"
            className="group flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#18E8CF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#05131D]"
            aria-label="Nexora Bio home"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[#18E8CF]/30 bg-[#18E8CF]/10">
              <span className="absolute h-3 w-3 rounded-full bg-[#18E8CF] blur-[5px]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#18E8CF]" />
            </span>

            <span className="text-sm font-semibold tracking-[0.18em] text-white">
              NEXORA
              <span className="text-white/40"> BIO</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-sm text-slate-400 outline-none transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#18E8CF]/70"
              >
                {item.label}

                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-[#18E8CF] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full border border-[#18E8CF]/30 bg-[#18E8CF]/10 px-4 py-2 text-sm font-medium text-[#8ff8ea] outline-none transition-all duration-300 hover:border-[#18E8CF]/60 hover:bg-[#18E8CF]/15 hover:text-white focus-visible:ring-2 focus-visible:ring-[#18E8CF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05131D] md:flex"
          >
            Start a conversation
            <ArrowUpRight
              aria-hidden="true"
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white outline-none focus-visible:ring-2 focus-visible:ring-[#18E8CF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05131D] md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#041019]/95 px-6 pt-28 backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto max-w-lg">
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobile}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.06,
                      duration: shouldReduceMotion ? 0 : 0.4,
                    }}
                    className="border-b border-white/[0.08] py-5 text-2xl font-medium text-white outline-none focus-visible:text-[#18E8CF]"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#contact"
                onClick={closeMobile}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#18E8CF] px-6 py-4 font-semibold text-[#041019] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#041019]"
              >
                Start a conversation
                <ArrowUpRight aria-hidden="true" size={18} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
