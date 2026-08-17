"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import type { ResearchArea } from "./researchData";

interface ResearchCardProps {
  area: ResearchArea;
}

export function ResearchCard({ area }: ResearchCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      key={area.id}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: "easeOut" }}
      className="border-y border-[var(--border)] py-10 sm:py-14 lg:py-16"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_12rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_15rem] xl:gap-24">
        <div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tabular-nums text-[var(--muted)]">
              {area.number}
            </span>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--primary)] sm:text-xs">
              {area.category}
            </p>
          </div>

          <h3 className="mt-7 max-w-3xl text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl lg:text-[3.5rem]">
            {area.title}
          </h3>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {area.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-2 sm:mt-12">
            {area.tags.map((tag) => (
              <Badge key={tag} variant="outline" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-end border-t border-[var(--border)] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-12">
          <p className="text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            {area.metric}
          </p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            {area.metricLabel}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
