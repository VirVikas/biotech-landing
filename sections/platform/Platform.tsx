import { Activity, BrainCircuit, Database } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { AmbientGlow } from "@/components/effects/AmbientGlow";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { FloatingParticles } from "@/components/effects/FloatingParticles";
import { PlatformGraph } from "./PlatformGraph";

const features = [
  {
    title: "Unified Data Layer",
    category: "Data Infrastructure",
    description:
      "A harmonized foundation for genomic, molecular, experimental, and clinical information.",
    icon: Database,
  },
  {
    title: "Predictive AI Models",
    category: "Intelligence",
    description:
      "Biology-aware models that uncover relationships and predict meaningful scientific outcomes.",
    icon: BrainCircuit,
  },
  {
    title: "Clinical Translation",
    category: "Application",
    description:
      "Connected evidence that moves computational discoveries toward actionable research programs.",
    icon: Activity,
  },
] as const;

export function Platform() {
  return (
    <section
      id="platform"
      aria-label="Computational Architecture"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)]"
    >
      <AnimatedGrid />
      <FloatingParticles />
      <AmbientGlow
        color="var(--primary)"
        size="42rem"
        opacity={0.07}
        top="22%"
        left="48%"
      />
      <AmbientGlow
        color="var(--secondary)"
        size="30rem"
        opacity={0.045}
        right="-8%"
        bottom="4%"
      />

      <Container className="relative z-10 py-28 sm:py-36 lg:py-44">
        <SectionHeading
          eyebrow="Technology Platform / 02"
          title="Computational Architecture"
          description="A scalable intelligence platform connecting molecular biology, AI and clinical research."
          align="center"
          maxWidth="lg"
        />

        <FadeIn delay={0.12} y={32} className="mt-16 sm:mt-20 lg:mt-24">
          <PlatformGraph />
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-4 sm:mt-24 md:grid-cols-3 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={feature.title} delay={index * 0.1} y={20}>
                <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)]/45 p-6 backdrop-blur-md transition-colors duration-500 hover:border-white/[0.14] hover:bg-[var(--surface)]/65 sm:p-7 lg:p-8">
                  <Badge
                    variant="ghost"
                    size="sm"
                    icon={<Icon aria-hidden="true" className="h-3 w-3" />}
                  >
                    {feature.category}
                  </Badge>

                  <h3 className="mt-8 text-xl font-medium tracking-[-0.025em] text-[var(--foreground)] lg:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {feature.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
