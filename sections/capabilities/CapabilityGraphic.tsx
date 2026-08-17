"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface CapabilityGraphicProps {
  type: "molecular" | "prediction" | "biomarker" | "network" | "translation";
}

interface GraphicProps {
  reduced: boolean;
  glowId: string;
}

function MolecularGraphic({ reduced, glowId }: GraphicProps) {
  const nodes = [
    [28, 82], [62, 42], [82, 102], [116, 70],
    [150, 32], [164, 104], [206, 62], [214, 118],
  ] as const;
  const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6], [5, 7]] as const;

  return (
    <g>
      {edges.map(([from, to], index) => (
        <motion.line
          key={`${from}-${to}`}
          x1={nodes[from][0]}
          y1={nodes[from][1]}
          x2={nodes[to][0]}
          y2={nodes[to][1]}
          stroke="#6AA8FF"
          strokeWidth="0.8"
          initial={reduced ? false : { pathLength: 0 }}
          animate={{ pathLength: 1, opacity: 0.25 }}
          transition={{ duration: reduced ? 0 : 1.4, delay: index * 0.06 }}
        />
      ))}
      {nodes.map(([cx, cy], index) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={index === 3 ? 4.5 : 3}
          fill={index === 3 ? "#18E8CF" : "#6AA8FF"}
          filter={`url(#${glowId})`}
          animate={{ opacity: reduced ? 0.7 : [0.35, 0.85, 0.35] }}
          transition={{ duration: 4 + (index % 3), delay: index * 0.2, repeat: reduced ? 0 : Infinity }}
        />
      ))}
    </g>
  );
}

function PredictionGraphic({ reduced, glowId }: GraphicProps) {
  return (
    <g>
      {[38, 74, 110].map((y) => (
        <line key={y} x1="20" y1={y} x2="220" y2={y} stroke="#6AA8FF" strokeWidth="0.5" opacity="0.1" />
      ))}
      {[52, 92, 132, 172, 212].map((x) => (
        <line key={x} x1={x} y1="24" x2={x} y2="126" stroke="#6AA8FF" strokeWidth="0.5" opacity="0.08" />
      ))}
      <motion.path
        d="M 20 92 C 42 92, 46 50, 70 58 S 98 112, 126 84 S 156 34, 180 54 S 202 92, 220 42"
        fill="none"
        stroke="#18E8CF"
        strokeWidth="1.5"
        strokeLinecap="round"
        filter={`url(#${glowId})`}
        initial={reduced ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: reduced ? 0 : 2.2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="180"
        cy="54"
        r="4"
        fill="#18E8CF"
        animate={{ opacity: reduced ? 0.8 : [0.35, 1, 0.35], scale: reduced ? 1 : [1, 1.25, 1] }}
        transition={{ duration: 3.4, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "180px 54px" }}
      />
    </g>
  );
}

function BiomarkerGraphic({ reduced, glowId }: GraphicProps) {
  return (
    <g>
      <motion.path
        d="M 18 78 L 48 78 L 60 66 L 72 88 L 88 74 L 106 80 L 120 34 L 136 112 L 150 76 L 170 80 L 186 68 L 200 84 L 222 78"
        fill="none"
        stroke="#6AA8FF"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
        animate={{ strokeDashoffset: reduced ? 0 : [0, -20] }}
        strokeDasharray="4 6"
        transition={{ duration: 5, repeat: reduced ? 0 : Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="120"
        cy="34"
        r="7"
        fill="#18E8CF"
        filter={`url(#${glowId})`}
        animate={{ opacity: reduced ? 0.85 : [0.4, 1, 0.4], scale: reduced ? 1 : [0.9, 1.2, 0.9] }}
        transition={{ duration: 3, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "120px 34px" }}
      />
      <motion.circle
        cx="120"
        cy="34"
        r="18"
        fill="none"
        stroke="#18E8CF"
        strokeWidth="0.8"
        animate={{ opacity: reduced ? 0.25 : [0.08, 0.35, 0.08], scale: reduced ? 1 : [0.75, 1.25, 0.75] }}
        transition={{ duration: 4.2, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "120px 34px" }}
      />
    </g>
  );
}

function NetworkGraphic({ reduced, glowId }: GraphicProps) {
  const satellites = [[38, 42], [42, 112], [112, 24], [124, 126], [202, 42], [204, 108]] as const;

  return (
    <g>
      {satellites.map(([x, y], index) => (
        <motion.line
          key={`${x}-${y}`}
          x1="120"
          y1="76"
          x2={x}
          y2={y}
          stroke="#6AA8FF"
          strokeWidth="0.8"
          animate={{ opacity: reduced ? 0.2 : [0.1, 0.35, 0.1] }}
          transition={{ duration: 4.5, delay: index * 0.35, repeat: reduced ? 0 : Infinity }}
        />
      ))}
      {satellites.map(([cx, cy], index) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="3.5"
          fill="#6AA8FF"
          animate={{ opacity: reduced ? 0.6 : [0.25, 0.8, 0.25] }}
          transition={{ duration: 4, delay: index * 0.4, repeat: reduced ? 0 : Infinity }}
        />
      ))}
      <motion.circle
        cx="120"
        cy="76"
        r="7"
        fill="#18E8CF"
        filter={`url(#${glowId})`}
        animate={{ scale: reduced ? 1 : [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "120px 76px" }}
      />
    </g>
  );
}

function TranslationGraphic({ reduced, glowId }: GraphicProps) {
  return (
    <g>
      <path d="M 18 78 L 42 78 L 54 54 L 68 104 L 82 68 L 98 82" fill="none" stroke="#6AA8FF" strokeWidth="1.2" opacity="0.4" />
      <motion.path
        d="M 98 82 C 128 82, 138 58, 166 58 L 190 58"
        fill="none"
        stroke="#18E8CF"
        strokeWidth="1.5"
        strokeDasharray="5 8"
        strokeLinecap="round"
        animate={{ strokeDashoffset: reduced ? 0 : [0, -26] }}
        transition={{ duration: 3.8, repeat: reduced ? 0 : Infinity, ease: "linear" }}
        opacity="0.55"
      />
      <motion.circle
        cx="202"
        cy="58"
        r="20"
        fill="none"
        stroke="#18E8CF"
        strokeWidth="0.8"
        animate={{ opacity: reduced ? 0.3 : [0.12, 0.42, 0.12], scale: reduced ? 1 : [0.85, 1.12, 0.85] }}
        transition={{ duration: 4, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "202px 58px" }}
      />
      <circle cx="202" cy="58" r="5" fill="#18E8CF" filter={`url(#${glowId})`} />
    </g>
  );
}

export function CapabilityGraphic({ type }: CapabilityGraphicProps) {
  const shouldReduceMotion = useReducedMotion();
  const glowId = `capability-glow-${useId().replace(/:/g, "")}`;
  const props = { reduced: Boolean(shouldReduceMotion), glowId };

  return (
    <svg
      viewBox="0 0 240 150"
      role="img"
      aria-label={`${type} scientific visualization`}
      className="h-auto w-full"
    >
      <defs>
        <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {type === "molecular" ? <MolecularGraphic {...props} /> : null}
      {type === "prediction" ? <PredictionGraphic {...props} /> : null}
      {type === "biomarker" ? <BiomarkerGraphic {...props} /> : null}
      {type === "network" ? <NetworkGraphic {...props} /> : null}
      {type === "translation" ? <TranslationGraphic {...props} /> : null}
    </svg>
  );
}
