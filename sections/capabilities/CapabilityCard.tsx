"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Capability } from "./capabilitiesData";

interface CapabilityCardProps {
  capability: Capability;
}

const sizeStyles: Record<Capability["size"], string> = {
  large: "min-h-[30rem] p-8 sm:p-10 lg:min-h-[34rem] lg:p-12",
  medium: "min-h-[24rem] p-7 sm:p-8 lg:min-h-[27rem] lg:p-10",
  small: "min-h-[18rem] p-6 sm:p-7 lg:min-h-[20rem] lg:p-8",
};

const titleStyles: Record<Capability["size"], string> = {
  large: "text-4xl sm:text-5xl lg:text-[3.5rem]",
  medium: "text-3xl sm:text-4xl",
  small: "text-2xl sm:text-3xl",
};

function ScientificMark({ reduced }: { reduced: boolean }) {
  const nodes = [
    [24, 66],
    [52, 28],
    [78, 58],
    [112, 22],
    [132, 72],
    [92, 106],
    [42, 112],
  ] as const;
  const edges = [
    [0, 1],
    [0, 6],
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
    [2, 5],
    [4, 5],
    [5, 6],
  ] as const;

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 156 136"
      className="absolute bottom-5 right-5 h-32 w-36 text-[#18E8CF] opacity-[0.14] sm:bottom-7 sm:right-7 sm:h-40 sm:w-44"
      variants={{
        rest: { opacity: 0.14, rotate: 0 },
        hover: { opacity: 0.3, rotate: reduced ? 0 : 2 },
      }}
      transition={{ duration: reduced ? 0 : 0.55, ease: "easeOut" }}
    >
      {edges.map(([from, to], index) => (
        <motion.line
          key={`${from}-${to}`}
          x1={nodes[from][0]}
          y1={nodes[from][1]}
          x2={nodes[to][0]}
          y2={nodes[to][1]}
          stroke="currentColor"
          strokeWidth="1"
          variants={{
            rest: { pathLength: 0.72 },
            hover: { pathLength: 1 },
          }}
          transition={{ duration: reduced ? 0 : 0.5, delay: index * 0.025 }}
        />
      ))}
      {nodes.map(([cx, cy], index) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={index === 2 ? 5 : 3.5}
          fill="currentColor"
          variants={{
            rest: { scale: 1 },
            hover: { scale: reduced ? 1 : index === 2 ? 1.45 : 1.18 },
          }}
          transition={{ duration: reduced ? 0 : 0.45, delay: index * 0.035 }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
    </motion.svg>
  );
}

export function CapabilityCard({ capability }: CapabilityCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      variants={{
        rest: { y: 0 },
        hover: { y: shouldReduceMotion ? 0 : -4 },
      }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" }}
      tabIndex={0}
      className={`${sizeStyles[capability.size]} group relative flex h-full flex-col overflow-hidden border border-white/[0.07] bg-[#081923] outline-none transition-colors duration-500 hover:border-[#18E8CF]/25 focus-visible:border-[#18E8CF]/35`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#18E8CF]/0 blur-[70px] transition-colors duration-500 group-hover:bg-[#18E8CF]/[0.08] group-focus-visible:bg-[#18E8CF]/[0.08]"
      />

      <div className="relative z-10 flex items-center justify-between gap-6">
        <span className="font-mono text-[10px] tabular-nums text-slate-600">
          {capability.number}
        </span>
        <span className="text-right text-[9px] font-medium uppercase tracking-[0.24em] text-[#18E8CF] sm:text-[10px]">
          {capability.category}
        </span>
      </div>

      <div className="relative z-10 mt-auto max-w-[38rem] pt-16">
        <h3
          className={`${titleStyles[capability.size]} max-w-[12ch] font-semibold leading-[1.04] tracking-[-0.04em] text-white`}
        >
          {capability.title}
        </h3>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {capability.description}
        </p>

        {capability.metric ? (
          <div className="mt-8 border-l border-[#18E8CF]/30 pl-4">
            <p className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              {capability.metric}
            </p>
            {capability.metricLabel ? (
              <p className="mt-1.5 text-[9px] uppercase tracking-[0.2em] text-slate-500">
                {capability.metricLabel}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      <ScientificMark reduced={Boolean(shouldReduceMotion)} />
    </motion.article>
  );
}
