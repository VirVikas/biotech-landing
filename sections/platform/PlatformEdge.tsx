"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { NodePosition } from "@/types/common";

interface PlatformEdgeProps {
  from: NodePosition;
  to: NodePosition;
  active: boolean;
}

export function PlatformEdge({ from, to, active }: PlatformEdgeProps) {
  const gradientId = `platform-edge-${useId().replace(/:/g, "")}`;
  const shouldReduceMotion = useReducedMotion();
  const path = `M ${from.x * 100} ${from.y * 100} L ${to.x * 100} ${
    to.y * 100
  }`;

  return (
    <g aria-hidden="true">
      <defs>
        <linearGradient
          id={gradientId}
          x1={from.x * 100}
          y1={from.y * 100}
          x2={to.x * 100}
          y2={to.y * 100}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.path
        d={path}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={active ? 0.75 : 0.55}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray="0.22 0.78"
        initial={{ opacity: 0, strokeDashoffset: 0 }}
        animate={{
          opacity: active ? 0.48 : 0.12,
          strokeDashoffset: shouldReduceMotion ? 0 : -1,
        }}
        transition={{
          opacity: { duration: shouldReduceMotion ? 0 : 0.45 },
          strokeDashoffset: shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: active ? 2.8 : 4.5,
                repeat: Infinity,
                ease: "linear",
              },
        }}
      />
    </g>
  );
}
