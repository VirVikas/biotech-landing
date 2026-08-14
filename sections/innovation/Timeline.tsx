"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { InnovationStage } from "./stages";

interface TimelineProps {
  stages: InnovationStage[];
  activeIndex: number;
}

export function Timeline({ stages, activeIndex }: TimelineProps) {
  const shouldReduceMotion = useReducedMotion();
  const progress =
    stages.length > 1
      ? Math.min(Math.max(activeIndex, 0), stages.length - 1) /
        (stages.length - 1)
      : 0;

  return (
    <nav
      aria-label="Innovation workflow"
      className="sticky top-[120px] hidden h-full lg:block"
    >
      <div className="relative flex h-full flex-col justify-center py-12">
        {/* Centered vertical track and active progress */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 overflow-hidden bg-white/[0.15]"
        >
          <motion.div
            className="h-full w-full origin-top bg-[#18E8CF] shadow-[0_0_12px_rgba(24,232,207,0.65)]"
            initial={false}
            animate={{ scaleY: progress }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>

        <ol className="relative space-y-16">
          {stages.map((stage, index) => {
            const isActive = index === activeIndex;

            return (
              <li
                key={stage.id}
                className="group relative flex min-h-[3.5rem] items-center"
              >
                {/* Node — centered on vertical line */}
                <motion.div
                  aria-hidden
                  className="absolute left-1/2 h-5 w-5 -translate-x-1/2 transition-transform duration-500 ease-out group-hover:scale-110"
                  initial={false}
                  animate={{ scale: isActive ? 1 : 0.82 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.span
                    className="absolute -inset-3 rounded-full bg-[#18E8CF]/25 blur-md"
                    initial={false}
                    animate={{
                      opacity: isActive
                        ? shouldReduceMotion
                          ? 0.45
                          : [0.3, 0.65, 0.3]
                        : 0,
                    }}
                    transition={
                      isActive && !shouldReduceMotion
                        ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                        : { duration: shouldReduceMotion ? 0 : 0.35 }
                    }
                  />
                  <motion.span
                    className="absolute inset-0 rounded-full border border-[#18E8CF] shadow-[0_0_14px_rgba(24,232,207,0.45)]"
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive
                        ? shouldReduceMotion
                          ? 1
                          : [1, 1.12, 1]
                        : 0.7,
                    }}
                    transition={
                      isActive && !shouldReduceMotion
                        ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                        : { duration: shouldReduceMotion ? 0 : 0.4 }
                    }
                  />
                  <motion.span
                    className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    initial={false}
                    animate={{
                      backgroundColor: isActive ? "#18E8CF" : "#334155",
                      opacity: isActive ? 1 : 0.8,
                      boxShadow: isActive
                        ? "0 0 10px rgba(24,232,207,0.9)"
                        : "0 0 0 rgba(24,232,207,0)",
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.45,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>

                {/* Label — offset right of center line */}
                <div
                  aria-current={isActive ? "step" : undefined}
                  className="w-full pl-[calc(50%+1.75rem)]"
                >
                  <p
                    className={[
                      "text-xs uppercase tracking-wide text-slate-400 transition-opacity duration-500",
                      isActive
                        ? "opacity-80"
                        : "opacity-40 group-hover:opacity-70",
                    ].join(" ")}
                  >
                    {stage.subtitle}
                  </p>

                  <p
                    className={[
                      "mt-2 font-medium text-white transition-opacity duration-500",
                      isActive
                        ? "opacity-100"
                        : "opacity-55 group-hover:opacity-90",
                    ].join(" ")}
                  >
                    {stage.title}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
