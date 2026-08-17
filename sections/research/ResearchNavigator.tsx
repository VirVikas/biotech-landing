"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ResearchArea } from "./researchData";

interface ResearchNavigatorProps {
  areas: readonly ResearchArea[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export function ResearchNavigator({
  areas,
  activeIndex,
  onChange,
}: ResearchNavigatorProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav aria-label="Research areas" className="w-full">
      <div className="relative overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div
          aria-hidden="true"
          className="absolute left-2 right-2 top-[7px] h-px bg-white/[0.1]"
        />

        <ol className="relative flex min-w-max items-start md:min-w-0">
          {areas.map((area, index) => {
            const isActive = index === activeIndex;

            return (
              <li
                key={area.id}
                className="w-48 shrink-0 pr-6 sm:w-56 md:min-w-0 md:flex-1 md:pr-8 last:pr-0"
              >
                <motion.button
                  type="button"
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => onChange(index)}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.55 }}
                  whileHover={
                    shouldReduceMotion ? { opacity: 0.9 } : { opacity: 0.9, y: -3 }
                  }
                  whileFocus={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: -3 }
                  }
                  transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" }}
                  className="group w-full text-left outline-none"
                >
                  <span className="relative mb-6 flex h-[15px] items-center">
                    <motion.span
                      aria-hidden="true"
                      className="relative z-10 block h-[7px] w-[7px] rounded-full border"
                      animate={{
                        backgroundColor: isActive ? "#18E8CF" : "#334155",
                        borderColor: isActive ? "#18E8CF" : "#64748B",
                        scale: isActive ? 1.25 : 1,
                      }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
                    />
                    <motion.span
                      aria-hidden="true"
                      className="absolute -left-[7px] h-5 w-5 rounded-full bg-[#18E8CF] blur-md"
                      animate={{ opacity: isActive ? 0.3 : 0, scale: isActive ? 1 : 0.6 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
                    />
                  </span>

                  <span
                    className={`block font-mono text-[9px] tabular-nums transition-colors duration-300 ${
                      isActive
                        ? "text-[#18E8CF]"
                        : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  >
                    {area.number}
                  </span>
                  <span
                    className={`mt-3 block text-[9px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive
                        ? "text-[#18E8CF]"
                        : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    {area.category}
                  </span>
                  <span
                    className={`mt-2 block text-sm font-medium leading-snug transition-colors duration-300 sm:text-base ${
                      isActive
                        ? "text-white"
                        : "text-slate-500 group-hover:text-slate-200"
                    }`}
                  >
                    {area.title}
                  </span>
                </motion.button>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
