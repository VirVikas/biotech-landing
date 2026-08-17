"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const pathways = [
  "M 44 72 C 132 72, 158 188, 300 200",
  "M 38 198 C 138 198, 176 198, 300 200",
  "M 56 330 C 152 330, 174 218, 300 200",
  "M 556 62 C 458 62, 434 184, 300 200",
  "M 568 202 C 464 202, 420 200, 300 200",
  "M 546 342 C 446 342, 426 220, 300 200",
] as const;

const particles = [
  [72, 72], [118, 116], [80, 198], [132, 270], [76, 330],
  [528, 62], [482, 112], [536, 202], [478, 282], [516, 342],
] as const;

export function CTAVisual() {
  const shouldReduceMotion = useReducedMotion();
  const glowId = `cta-glow-${useId().replace(/:/g, "")}`;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 600 400"
      className="h-auto w-full"
    >
      <defs>
        <filter id={glowId} x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="300" cy="200" rx="250" ry="158" fill="#071923" fillOpacity="0.34" />

      {pathways.map((path, index) => (
        <g key={path}>
          <path
            d={path}
            fill="none"
            stroke={index % 3 === 0 ? "#9D5CFF" : "#6AA8FF"}
            strokeWidth="0.8"
            strokeOpacity="0.16"
          />
          <motion.path
            d={path}
            fill="none"
            stroke={index % 3 === 0 ? "#9D5CFF" : "#18E8CF"}
            strokeWidth="1.2"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="0.08 0.92"
            initial={{ opacity: shouldReduceMotion ? 0.3 : 0, strokeDashoffset: 0 }}
            animate={{
              opacity: shouldReduceMotion ? 0.3 : [0.12, 0.42, 0.12],
              strokeDashoffset: shouldReduceMotion ? 0 : -1,
            }}
            transition={{
              opacity: {
                duration: 5 + index * 0.35,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              },
              strokeDashoffset: {
                duration: 8 + index * 0.55,
                delay: index * 0.35,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: "linear",
              },
            }}
          />
        </g>
      ))}

      {particles.map(([cx, cy], index) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={index % 4 === 0 ? 3.5 : 2.25}
          fill={index % 3 === 0 ? "#9D5CFF" : index % 2 === 0 ? "#18E8CF" : "#6AA8FF"}
          animate={{
            x: shouldReduceMotion ? 0 : [0, index % 2 === 0 ? 6 : -5, 0],
            y: shouldReduceMotion ? 0 : [0, index % 3 === 0 ? -7 : 5, 0],
            opacity: shouldReduceMotion ? 0.55 : [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 8 + (index % 4),
            delay: index * 0.4,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.circle
        cx="300"
        cy="200"
        r="48"
        fill="none"
        stroke="#18E8CF"
        strokeWidth="0.8"
        animate={{
          opacity: shouldReduceMotion ? 0.22 : [0.1, 0.32, 0.1],
          scale: shouldReduceMotion ? 1 : [0.9, 1.12, 0.9],
        }}
        transition={{ duration: 6, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "300px 200px" }}
      />
      <circle cx="300" cy="200" r="24" fill="#18E8CF" opacity="0.08" />
      <motion.circle
        cx="300"
        cy="200"
        r="8"
        fill="#18E8CF"
        filter={`url(#${glowId})`}
        animate={{
          opacity: shouldReduceMotion ? 0.9 : [0.55, 1, 0.55],
          scale: shouldReduceMotion ? 1 : [0.94, 1.16, 0.94],
        }}
        transition={{ duration: 4.5, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "300px 200px" }}
      />
    </svg>
  );
}
