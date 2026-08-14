"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PlatformCategory } from "./platformData";

interface PlatformNodeProps {
  title: string;
  category: PlatformCategory;
  x: number;
  y: number;
  active: boolean;
}

const categoryColors: Record<PlatformCategory, string> = {
  Data: "#58D6FF",
  AI: "#18E8CF",
  Research: "#9D5CFF",
  Clinical: "#6AA8FF",
  Infrastructure: "#94A3B8",
  Visualization: "#35E5A1",
};

export function PlatformNode({
  title,
  category,
  x,
  y,
  active,
}: PlatformNodeProps) {
  const shouldReduceMotion = useReducedMotion();
  const color = categoryColors[category];

  return (
    <motion.div
      role="img"
      tabIndex={0}
      aria-label={`${title}, ${category}`}
      className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center outline-none"
      style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
      initial={false}
      animate={{
        opacity: active ? 1 : 0.68,
        scale: active && !shouldReduceMotion ? [1, 1.035, 1] : 1,
      }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.08, opacity: 1 }}
      whileFocus={shouldReduceMotion ? undefined : { scale: 1.08, opacity: 1 }}
      transition={
        active && !shouldReduceMotion
          ? { duration: 3.4, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.35, ease: "easeOut" }
      }
    >
      <span className="relative flex h-8 w-8 items-center justify-center sm:h-9 sm:w-9">
        <motion.span
          aria-hidden="true"
          className="absolute -inset-2 rounded-full blur-lg"
          style={{ backgroundColor: color }}
          animate={{ opacity: active ? 0.3 : 0.1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border bg-[#071923]"
          style={{ borderColor: color }}
        />
        <span
          aria-hidden="true"
          className="relative h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
        />
      </span>

      <span className="mt-2 whitespace-nowrap text-[10px] font-medium tracking-[0.02em] text-white sm:text-xs">
        {title}
      </span>
    </motion.div>
  );
}
