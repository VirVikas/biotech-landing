"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { InnovationStage } from "./stages";

interface StageCardProps {
  stage: InnovationStage;
}

const stepNumbers: Record<string, string> = {
  Observe: "01",
  Model: "02",
  Understand: "03",
  Act: "04",
};

const hudMetrics: Record<string, readonly [string, string][]> = {
  Observe: [
    ["Signal fidelity", "98.7%"],
    ["Samples", "18.4K"],
    ["Noise floor", "0.03"],
  ],
  Model: [
    ["Confidence", "99.4%"],
    ["Nodes", "2.8M"],
    ["Latency", "14ms"],
  ],
  Understand: [
    ["Pathways", "640+"],
    ["Correlations", "8.2K"],
    ["Resolution", "0.01"],
  ],
  Act: [
    ["Programs", "35+"],
    ["Candidates", "128"],
    ["Readiness", "94%"],
  ],
};

const hudPositions = [
  "left-0 top-1 sm:left-2",
  "right-0 top-5 sm:right-4",
  "bottom-1 right-3 sm:right-12",
] as const;

const hudMotion = [
  { x: [0, 4, 0], y: [0, -5, 0], duration: 5.8, delay: 0 },
  { x: [0, -5, 0], y: [0, 3, 0], duration: 6.6, delay: 0.9 },
  { x: [0, 3, 0], y: [0, 5, 0], duration: 7.2, delay: 1.7 },
] as const;

function ScientificHud({ subtitle }: { subtitle: string }) {
  const shouldReduceMotion = useReducedMotion();
  const metrics = hudMetrics[subtitle] ?? hudMetrics.Observe;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {metrics.map(([label, value], index) => {
        const float = hudMotion[index];

        return (
          <motion.div
            key={label}
            className={`absolute ${hudPositions[index]} rounded-full border border-white/[0.08] bg-[#0B1D2B]/55 px-3 py-2 opacity-60 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md sm:px-4`}
            animate={
              shouldReduceMotion
                ? undefined
                : { x: [...float.x], y: [...float.y] }
            }
            transition={{
              duration: float.duration,
              delay: float.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-[9px]">
                {label}
              </span>
              <span className="font-mono text-[10px] tabular-nums text-[#18E8CF] sm:text-xs">
                {value}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function StageIllustration({ subtitle }: { subtitle: string }) {
  switch (subtitle) {
    case "Observe":
      return <ObserveIllustration />;
    case "Model":
      return <ModelIllustration />;
    case "Understand":
      return <UnderstandIllustration />;
    case "Act":
      return <ActIllustration />;
    default:
      return null;
  }
}

function ObserveIllustration() {
  const particles = [
    { cx: 12, cy: 48, delay: 0 },
    { cx: 28, cy: 32, delay: 0.6 },
    { cx: 44, cy: 56, delay: 1.2 },
    { cx: 60, cy: 28, delay: 1.8 },
    { cx: 76, cy: 44, delay: 2.4 },
    { cx: 92, cy: 36, delay: 3.0 },
  ];

  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden
      className="h-16 w-28 text-[#18E8CF]/70 sm:h-20 sm:w-32"
    >
      <motion.path
        d="M 4 40 Q 30 20 60 40 T 116 40"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeOpacity="0.25"
        fill="none"
      />
      {particles.map((particle, index) => (
        <motion.circle
          key={index}
          r="2.5"
          fill="currentColor"
          initial={{ cx: particle.cx, cy: particle.cy, opacity: 0.2 }}
          animate={{
            cx: [particle.cx, particle.cx + 18, particle.cx + 36],
            cy: [particle.cy, particle.cy - 6, particle.cy],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </svg>
  );
}

function ModelIllustration() {
  const nodes = [
    { cx: 60, cy: 16 },
    { cx: 24, cy: 44 },
    { cx: 96, cy: 44 },
    { cx: 60, cy: 68 },
  ];

  const edges = [
    "M 60 16 L 24 44",
    "M 60 16 L 96 44",
    "M 24 44 L 60 68",
    "M 96 44 L 60 68",
    "M 24 44 L 96 44",
  ];

  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden
      className="h-16 w-28 text-[#18E8CF]/70 sm:h-20 sm:w-32"
    >
      {edges.map((d, index) => (
        <motion.path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="0.75"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        />
      ))}
      {nodes.map((node, index) => (
        <motion.circle
          key={`${node.cx}-${node.cy}`}
          cx={node.cx}
          cy={node.cy}
          r="4"
          fill="currentColor"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        />
      ))}
    </svg>
  );
}

function UnderstandIllustration() {
  const strands = 12;

  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden
      className="h-16 w-28 text-[#18E8CF]/70 sm:h-20 sm:w-32"
    >
      {Array.from({ length: strands }).map((_, index) => {
        const y = 8 + index * 6;

        return (
          <g key={index}>
            <motion.circle
              cx={48 + Math.sin(index * 0.8) * 10}
              cy={y}
              r="2"
              fill="currentColor"
              animate={{
                cx: [48 + Math.sin(index * 0.8) * 10, 72 - Math.sin(index * 0.8) * 10, 48 + Math.sin(index * 0.8) * 10],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />
            <motion.line
              x1={48 + Math.sin(index * 0.8) * 10}
              y1={y}
              x2={72 - Math.sin(index * 0.8) * 10}
              y2={y}
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.25"
              animate={{ opacity: [0.15, 0.45, 0.15] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />
            <motion.circle
              cx={72 - Math.sin(index * 0.8) * 10}
              cy={y}
              r="2"
              fill="currentColor"
              animate={{
                cx: [72 - Math.sin(index * 0.8) * 10, 48 + Math.sin(index * 0.8) * 10, 72 - Math.sin(index * 0.8) * 10],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}

function ActIllustration() {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden
      className="h-16 w-28 text-[#18E8CF]/70 sm:h-20 sm:w-32"
    >
      <circle cx="60" cy="40" r="6" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
      <circle cx="60" cy="40" r="2.5" fill="currentColor" />

      {[0, 1.3].map((delay) => (
        <motion.circle
          key={delay}
          cx="60"
          cy="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          initial={{ r: 8, opacity: 0.6 }}
          animate={{ r: [8, 28], opacity: [0.5, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeOut",
            delay,
          }}
        />
      ))}
    </svg>
  );
}

export function StageCard({ stage }: StageCardProps) {
  const step = stepNumbers[stage.subtitle] ?? "01";

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={stage.id}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-[#18E8CF]">
          Step {step}
        </p>

        <h3 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[56px]">
          {stage.title}
        </h3>

        <p className="mt-6 max-w-[560px] text-base leading-relaxed text-slate-400 sm:text-lg">
          {stage.description}
        </p>

        <div className="mt-10 inline-flex w-fit flex-col rounded-2xl border border-white/10 bg-white/5 px-7 py-5 backdrop-blur-sm">
          <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {stage.stat}
          </p>

          <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-500">
            {stage.label}
          </p>
        </div>

        <div className="relative mt-10 h-44 w-full max-w-[32rem] sm:h-52">
          <div className="absolute inset-0 flex items-center justify-center">
            <StageIllustration subtitle={stage.subtitle} />
          </div>
          <ScientificHud subtitle={stage.subtitle} />
        </div>
      </motion.article>
    </AnimatePresence>
  );
}
