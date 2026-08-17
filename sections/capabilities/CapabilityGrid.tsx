"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CapabilityCard } from "./CapabilityCard";
import type { Capability } from "./capabilitiesData";

interface CapabilityGridProps {
  capabilities: Capability[];
}

const desktopPlacement = [
  "lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1",
  "lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1",
  "lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-1",
  "lg:col-span-1 lg:row-span-1 lg:col-start-2 lg:row-start-3",
  "lg:col-span-1 lg:row-span-1 lg:col-start-3 lg:row-start-3",
] as const;

export function CapabilityGrid({ capabilities }: CapabilityGridProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(12rem,auto)] lg:gap-5 xl:gap-6">
      {capabilities.map((capability, index) => (
        <motion.div
          key={capability.id}
          className={`min-w-0 ${desktopPlacement[index] ?? ""}`}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : index * 0.08,
            ease: "easeOut",
          }}
        >
          <CapabilityCard capability={capability} />
        </motion.div>
      ))}
    </div>
  );
}
