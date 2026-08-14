"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PlatformNode } from "./platformData";

interface PlatformConnectionProps {
  from: PlatformNode;
  to: PlatformNode;
}

export function PlatformConnection({
  from,
  to,
}: PlatformConnectionProps) {
  const gradientId = `platform-connection-${useId().replace(/:/g, "")}`;
  const shouldReduceMotion = useReducedMotion();

  return (
    <g aria-hidden="true">
      <defs>
        <linearGradient
          id={gradientId}
          x1={`${from.x * 100}%`}
          y1={`${from.y * 100}%`}
          x2={`${to.x * 100}%`}
          y2={`${to.y * 100}%`}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#18E8CF" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#58D6FF" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#18E8CF" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      <motion.line
        x1={`${from.x * 100}%`}
        y1={`${from.y * 100}%`}
        x2={`${to.x * 100}%`}
        y2={`${to.y * 100}%`}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeDasharray="3 8"
        initial={{ opacity: 0, strokeDashoffset: 22 }}
        animate={{
          opacity: 0.18,
          strokeDashoffset: shouldReduceMotion ? 0 : 0,
        }}
        transition={{
          opacity: { duration: shouldReduceMotion ? 0 : 0.9, ease: "easeOut" },
          strokeDashoffset: shouldReduceMotion
            ? { duration: 0 }
            : { duration: 2.8, repeat: Infinity, ease: "linear" },
        }}
      />
    </g>
  );
}
