"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FloatProps {
  children: ReactNode;
  distance?: number;
  duration?: number;
  delay?: number;
}

export function Float({
  children,
  distance = 8,
  duration = 4,
  delay = 0,
}: FloatProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ y: shouldReduceMotion ? 0 : [0, -distance, 0] }}
      transition={{
        duration,
        delay,
        repeat: shouldReduceMotion ? 0 : Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
