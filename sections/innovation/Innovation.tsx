"use client";

import { useRef, useState, useMemo, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Timeline } from "./Timeline";
import { StageCard } from "./StageCard";
import { stages } from "./stages";

const DESKTOP_SCROLL_HEIGHT = "160vh";

function getActiveIndex(progress: number): number {
  if (progress < 0.25) return 0;
  if (progress < 0.5) return 1;
  if (progress < 0.75) return 2;
  return 3;
}

export function Innovation() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.05, 0.08, 0.05]
  );

  const handleScrollProgress = useCallback((progress: number) => {
    const nextIndex = getActiveIndex(progress);

    setActiveIndex((previous) =>
      previous === nextIndex ? previous : nextIndex
    );
  }, []);

  useMotionValueEvent(scrollYProgress, "change", handleScrollProgress);

  const activeStage = useMemo(
    () => stages[activeIndex],
    [activeIndex]
  );

  const stageList = useMemo(() => [...stages], []);

  return (
    <section
      id="innovation"
      aria-labelledby="innovation-heading"
      className="relative border-t border-white/5 bg-[#05131D]"
    >
      {/* Ambient glow */}
      <motion.div
        aria-hidden
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute left-[8%] top-[18%] h-[480px] w-[480px] rounded-full bg-[#18E8CF]/10 blur-[140px] lg:block hidden"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[6%] bottom-[12%] h-[420px] w-[420px] rounded-full bg-[#6AA8FF]/[0.06] blur-[130px]"
      />

      {/* Scientific grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <Container className="relative z-10 pt-40">
        <header className="max-w-[700px]">
          <p className="text-xs uppercase tracking-[0.25em] text-[#18E8CF]">
            Innovation Platform
          </p>

          <h2
            id="innovation-heading"
            className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem]"
          >
            From biological complexity
            <br />
            to actionable intelligence.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            Every experiment generates extraordinary amounts of molecular
            information. Our platform transforms biological complexity into
            interpretable computational intelligence that accelerates research
            and scientific discovery.
          </p>
        </header>
      </Container>

      {/* Mobile — natural stack, no sticky scroll */}
      <Container className="relative z-10 mt-16 flex flex-col gap-20 pb-40 lg:hidden">
        <Timeline stages={stageList} activeIndex={activeIndex} />

        {stageList.map((stage) => (
          <StageCard key={stage.id} stage={stage} />
        ))}
      </Container>

      {/* Desktop — sticky scroll-driven stages */}
      <div
        ref={scrollRef}
        className="relative z-10 mt-20 hidden lg:block"
        style={{ height: DESKTOP_SCROLL_HEIGHT }}
      >
        <div className="sticky top-0 flex h-screen items-center">
          <Container className="w-full pb-20 pt-8">
            <div className="grid grid-cols-[2fr_3fr] items-start gap-16 xl:gap-24">
              <Timeline stages={stageList} activeIndex={activeIndex} />

              <div className="min-h-[32rem]">
                <StageCard stage={activeStage} />
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className="relative z-10 hidden pb-24 lg:block" aria-hidden />
    </section>
  );
}
