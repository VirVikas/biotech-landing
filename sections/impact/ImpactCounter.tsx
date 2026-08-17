"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import type { ImpactMetric } from "./impactData";

interface ImpactCounterProps {
  metric: ImpactMetric;
  index: number;
}

function parseMetric(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  const numeric = match ? Number(match[1]) : 0;
  const suffix = match?.[2] ?? "";
  const decimals = match?.[1].includes(".") ? 1 : 0;

  return { numeric, suffix, decimals };
}

export function ImpactCounter({ metric, index }: ImpactCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.55 });
  const shouldReduceMotion = useReducedMotion();
  const { numeric, suffix, decimals } = parseMetric(metric.value);
  const progress = useMotionValue(0);
  const display = useTransform(progress, (latest) => {
    const formatted = decimals ? latest.toFixed(decimals) : Math.round(latest);
    return `${formatted}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;

    if (shouldReduceMotion) {
      progress.set(numeric);
      return;
    }

    const controls = animate(progress, numeric, {
      duration: 1.35,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [inView, index, numeric, progress, shouldReduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: index * 0.08 }}
      className="min-w-0 px-5 py-9 sm:px-7 sm:py-12 lg:px-8 lg:py-14"
    >
      <span className="sr-only">{metric.value}</span>
      <motion.span
        aria-hidden="true"
        className="block text-[2.6rem] font-semibold leading-none tracking-[-0.05em] text-white sm:text-5xl xl:text-6xl"
      >
        {display}
      </motion.span>
      <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.22em] text-slate-500 sm:text-[10px]">
        {metric.label}
      </p>
    </motion.div>
  );
}
