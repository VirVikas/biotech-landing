"use client";

import { useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ResearchArea } from "./researchData";

interface ResearchVisualizationProps {
  area: ResearchArea;
}

interface VisualProps {
  reduced: boolean;
  glowId: string;
}

const molecularNodes = [
  [92, 194], [148, 112], [166, 260], [226, 170],
  [274, 86], [292, 248], [346, 154], [382, 286],
  [424, 102], [458, 214], [510, 148], [522, 286],
] as const;

const molecularEdges = [
  [0, 1], [0, 2], [0, 3], [1, 3], [1, 4], [2, 3], [2, 5],
  [3, 4], [3, 5], [3, 6], [4, 6], [5, 6], [5, 7], [6, 7],
  [6, 8], [6, 9], [7, 9], [7, 11], [8, 9], [8, 10], [9, 10],
  [9, 11], [10, 11],
] as const;

function MolecularVisual({ reduced, glowId }: VisualProps) {
  return (
    <g>
      {molecularEdges.map(([from, to], index) => (
        <motion.line
          key={`${from}-${to}`}
          x1={molecularNodes[from][0]}
          y1={molecularNodes[from][1]}
          x2={molecularNodes[to][0]}
          y2={molecularNodes[to][1]}
          stroke="#58D6FF"
          strokeWidth="1"
          initial={reduced ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: reduced ? 0 : 1.4, delay: reduced ? 0 : index * 0.04 }}
        />
      ))}
      {molecularNodes.map(([cx, cy], index) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={index % 4 === 0 ? 6 : 4}
          fill={index % 3 === 0 ? "#18E8CF" : "#6AA8FF"}
          filter={`url(#${glowId})`}
          animate={{
            opacity: reduced ? 0.75 : [0.45, 0.95, 0.45],
            scale: reduced ? 1 : [1, 1.18, 1],
          }}
          transition={{
            duration: 4 + (index % 3),
            delay: index * 0.18,
            repeat: reduced ? 0 : Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
    </g>
  );
}

function PredictiveVisual({ reduced, glowId }: VisualProps) {
  const nodes = [110, 182, 254, 326, 398, 470];

  return (
    <g>
      {Array.from({ length: 8 }, (_, index) => (
        <line
          key={`horizontal-${index}`}
          x1="64"
          y1={70 + index * 38}
          x2="536"
          y2={70 + index * 38}
          stroke="#6AA8FF"
          strokeWidth="0.6"
          opacity="0.1"
        />
      ))}
      {Array.from({ length: 12 }, (_, index) => (
        <line
          key={`vertical-${index}`}
          x1={64 + index * 43}
          y1="60"
          x2={64 + index * 43}
          y2="340"
          stroke="#6AA8FF"
          strokeWidth="0.6"
          opacity="0.08"
        />
      ))}
      <motion.path
        d="M 64 236 C 110 236, 124 142, 172 160 S 236 286, 286 214 S 350 92, 402 146 S 468 252, 536 116"
        fill="none"
        stroke="#18E8CF"
        strokeWidth="2"
        strokeLinecap="round"
        filter={`url(#${glowId})`}
        initial={reduced ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: reduced ? 0 : 2.4, ease: "easeInOut" }}
      />
      {nodes.map((cx, index) => {
        const cy = [224, 158, 247, 170, 143, 204][index];
        return (
          <motion.circle
            key={cx}
            cx={cx}
            cy={cy}
            r="5"
            fill="#18E8CF"
            filter={`url(#${glowId})`}
            initial={reduced ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.5 + index * 0.28 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        );
      })}
      <motion.path
        d="M 64 292 C 154 250, 200 306, 286 264 S 434 222, 536 240"
        fill="none"
        stroke="#6AA8FF"
        strokeWidth="1"
        strokeDasharray="5 9"
        animate={{ strokeDashoffset: reduced ? 0 : [0, -28] }}
        transition={{ duration: 5, repeat: reduced ? 0 : Infinity, ease: "linear" }}
        opacity="0.25"
      />
    </g>
  );
}

function CellularVisual({ reduced, glowId }: VisualProps) {
  const particles = [
    [238, 132], [316, 112], [370, 166], [386, 238], [330, 286],
    [250, 274], [202, 218], [272, 198], [328, 212], [296, 246],
  ] as const;

  return (
    <g>
      <motion.path
        d="M 300 58 C 404 54, 486 116, 490 202 C 494 288, 414 342, 304 344 C 194 346, 108 286, 112 196 C 116 108, 198 62, 300 58 Z"
        fill="#0B1D2B"
        fillOpacity="0.5"
        stroke="#58D6FF"
        strokeWidth="1.5"
        animate={{
          opacity: reduced ? 0.65 : [0.45, 0.72, 0.45],
          scale: reduced ? 1 : [1, 1.012, 1],
        }}
        transition={{ duration: 7, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "300px 200px" }}
      />
      <ellipse cx="300" cy="201" rx="62" ry="52" fill="none" stroke="#18E8CF" strokeWidth="1" opacity="0.28" />
      <ellipse cx="300" cy="201" rx="34" ry="28" fill="#18E8CF" opacity="0.08" />
      {particles.map(([cx, cy], index) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={index % 3 === 0 ? 5 : 3.5}
          fill={index % 2 === 0 ? "#18E8CF" : "#6AA8FF"}
          filter={`url(#${glowId})`}
          animate={{
            x: reduced ? 0 : [0, index % 2 === 0 ? 8 : -7, 0],
            y: reduced ? 0 : [0, index % 3 === 0 ? -7 : 6, 0],
            opacity: reduced ? 0.65 : [0.35, 0.9, 0.35],
          }}
          transition={{
            duration: 5 + (index % 4),
            delay: index * 0.22,
            repeat: reduced ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.circle
        cx="300"
        cy="201"
        r="8"
        fill="#18E8CF"
        filter={`url(#${glowId})`}
        animate={{ opacity: reduced ? 0.8 : [0.4, 1, 0.4] }}
        transition={{ duration: 3.8, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

function TranslationalVisual({ reduced, glowId }: VisualProps) {
  return (
    <g>
      <motion.path
        d="M 62 214 L 112 214 L 136 170 L 164 264 L 194 136 L 226 230 L 256 194 L 302 194"
        fill="none"
        stroke="#6AA8FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: reduced ? 0 : 2.2, ease: "easeInOut" }}
        opacity="0.55"
      />
      <motion.path
        d="M 302 194 C 352 194, 370 126, 420 126 L 470 126"
        fill="none"
        stroke="#18E8CF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 10"
        filter={`url(#${glowId})`}
        animate={{ strokeDashoffset: reduced ? 0 : [0, -32] }}
        transition={{ duration: 3.6, repeat: reduced ? 0 : Infinity, ease: "linear" }}
        opacity="0.55"
      />
      <motion.circle
        cx="482"
        cy="126"
        r="42"
        fill="none"
        stroke="#18E8CF"
        strokeWidth="1"
        animate={{
          opacity: reduced ? 0.35 : [0.15, 0.5, 0.15],
          scale: reduced ? 1 : [0.9, 1.1, 0.9],
        }}
        transition={{ duration: 4.8, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "482px 126px" }}
      />
      <circle cx="482" cy="126" r="22" fill="#18E8CF" opacity="0.09" />
      <motion.circle
        cx="482"
        cy="126"
        r="7"
        fill="#18E8CF"
        filter={`url(#${glowId})`}
        animate={{ opacity: reduced ? 0.9 : [0.5, 1, 0.5] }}
        transition={{ duration: 2.8, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
      />
      {[344, 384, 424].map((cx, index) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy={194 - index * 31}
          r="3"
          fill="#18E8CF"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: reduced ? 0.65 : [0.15, 0.9, 0.15] }}
          transition={{ duration: 3, delay: index * 0.6, repeat: reduced ? 0 : Infinity }}
        />
      ))}
    </g>
  );
}

function visualizationFor(area: ResearchArea, props: VisualProps) {
  switch (area.category) {
    case "Molecular Discovery":
    case "Molecular Biology":
      return <MolecularVisual {...props} />;
    case "Predictive Biology":
    case "Computational Modeling":
      return <PredictiveVisual {...props} />;
    case "Cellular Intelligence":
    case "Cellular Systems":
      return <CellularVisual {...props} />;
    case "Translational Research":
    case "Clinical Translation":
      return <TranslationalVisual {...props} />;
    default:
      return <MolecularVisual {...props} />;
  }
}

export function ResearchVisualization({ area }: ResearchVisualizationProps) {
  const shouldReduceMotion = useReducedMotion();
  const glowId = `research-glow-${useId().replace(/:/g, "")}`;

  return (
    <AnimatePresence mode="wait">
      <motion.svg
        key={area.id}
        viewBox="0 0 600 400"
        role="img"
        aria-label={`${area.title} scientific visualization`}
        className="h-auto w-full"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.02 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
      >
        <defs>
          <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="600" height="400" rx="28" fill="#071923" />
        <rect x="1" y="1" width="598" height="398" rx="27" fill="none" stroke="#6AA8FF" strokeOpacity="0.1" />
        {visualizationFor(area, {
          reduced: Boolean(shouldReduceMotion),
          glowId,
        })}
      </motion.svg>
    </AnimatePresence>
  );
}
