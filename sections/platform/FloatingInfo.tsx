"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PlatformCategory } from "./platformData";

interface FloatingInfoProps {
  category: PlatformCategory;
  title: string;
  description: string;
}

export function FloatingInfo({
  category,
  title,
  description,
}: FloatingInfoProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
      className="rounded-2xl border border-white/[0.08] bg-[var(--surface)]/55 p-5 backdrop-blur-xl sm:p-6"
    >
      <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[var(--primary)] sm:text-[10px]">
        {category}
      </p>
      <h3 className="mt-3 text-base font-medium tracking-[-0.015em] text-[var(--foreground)] sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
        {description}
      </p>
    </motion.article>
  );
}
