"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function AnimatedGrid() {
  const patternId = `animated-grid-${useId().replace(/:/g, "")}`;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)] text-white"
      initial={false}
      animate={{
        opacity: shouldReduceMotion ? 0.035 : [0.025, 0.045, 0.025],
        x: shouldReduceMotion ? 0 : [0, -10, 0],
        y: shouldReduceMotion ? 0 : [0, 8, 0],
      }}
      transition={{
        duration: 18,
        repeat: shouldReduceMotion ? 0 : Infinity,
        ease: "easeInOut",
      }}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={patternId}
          width="56"
          height="56"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 56 0 L 0 0 0 56"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          <circle cx="0" cy="0" r="1" fill="currentColor" opacity="0.45" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </motion.svg>
  );
}
