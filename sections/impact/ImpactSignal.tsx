"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ImpactSignal() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="h-20 w-full sm:h-24"
    >
      <path
        d="M 0 68 C 110 68, 142 44, 245 62 S 420 86, 524 54 S 724 40, 820 68 S 1048 88, 1200 50"
        fill="none"
        stroke="#6AA8FF"
        strokeWidth="1"
        strokeOpacity="0.13"
      />
      <motion.path
        d="M 0 68 C 110 68, 142 44, 245 62 S 420 86, 524 54 S 724 40, 820 68 S 1048 88, 1200 50"
        fill="none"
        stroke="#18E8CF"
        strokeWidth="1.4"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray="0.06 0.94"
        initial={false}
        animate={{
          opacity: shouldReduceMotion ? 0.32 : [0.16, 0.38, 0.16],
          strokeDashoffset: shouldReduceMotion ? 0 : -1,
        }}
        transition={{
          opacity: { duration: 6, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" },
          strokeDashoffset: { duration: 10, repeat: shouldReduceMotion ? 0 : Infinity, ease: "linear" },
        }}
      />
      {[245, 524, 820, 1060].map((cx, index) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy={[62, 54, 68, 78][index]}
          r="3"
          fill="#18E8CF"
          animate={{ opacity: shouldReduceMotion ? 0.55 : [0.25, 0.75, 0.25] }}
          transition={{ duration: 4.5, delay: index * 0.65, repeat: shouldReduceMotion ? 0 : Infinity }}
        />
      ))}
    </svg>
  );
}
