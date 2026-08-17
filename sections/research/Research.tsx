"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AmbientGlow } from "@/components/effects/AmbientGlow";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { ResearchCard } from "./ResearchCard";
import { ResearchNavigator } from "./ResearchNavigator";
import { ResearchVisualization } from "./ResearchVisualization";
import { researchAreas } from "./researchData";

export function Research() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = researchAreas[activeIndex];

  const handleAreaChange = useCallback((index: number) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? currentIndex : index
    );
  }, []);

  return (
    <section
      id="research"
      aria-label="Research intelligence"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)]"
    >
      <AnimatedGrid />
      <AmbientGlow
        color="var(--primary)"
        size="36rem"
        opacity={0.045}
        top="28%"
        right="4%"
      />
      <AmbientGlow
        color="var(--secondary)"
        size="28rem"
        opacity={0.035}
        left="-10%"
        bottom="4%"
      />

      <Container className="relative z-10 py-28 sm:py-36 lg:py-44">
        <SectionHeading
          eyebrow="Research / 03"
          title="Advancing biological intelligence."
          description="Our research connects molecular discovery, predictive computation, and clinical translation to reveal new scientific possibilities."
          maxWidth="lg"
        />

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <ResearchNavigator
            areas={researchAreas}
            activeIndex={activeIndex}
            onChange={handleAreaChange}
          />
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 sm:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-24">
          <AnimatePresence mode="wait" initial={false}>
            <ResearchCard key={activeArea.id} area={activeArea} />
          </AnimatePresence>

          <div className="w-full">
            <ResearchVisualization area={activeArea} />
          </div>
        </div>
      </Container>
    </section>
  );
}
