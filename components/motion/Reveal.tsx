"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealDirection = "left" | "right" | "up" | "down" | "fade";

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

const offsets: Record<RevealDirection, { x: number; y: number }> = {
  left: { x: -32, y: 0 },
  right: { x: 32, y: 0 },
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  fade: { x: 0, y: 0 },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  once = true,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = shouldReduceMotion ? offsets.fade : offsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once }}
      transition={{
        delay: shouldReduceMotion ? 0 : delay,
        duration: shouldReduceMotion ? 0 : duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
