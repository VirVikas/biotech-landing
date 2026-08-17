import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AmbientGlow } from "@/components/effects/AmbientGlow";
import { ImpactCounter } from "./ImpactCounter";
import { ImpactSignal } from "./ImpactSignal";
import { impactMetrics } from "./impactData";

export function Impact() {
  return (
    <section
      id="impact"
      aria-label="Impact"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)]"
    >
      <AmbientGlow
        color="var(--primary)"
        size="30rem"
        opacity={0.028}
        top="18%"
        left="42%"
      />

      <Container className="relative z-10 py-28 sm:py-36 lg:py-40">
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow="IMPACT / 05"
            title="Measurable intelligence for biological discovery."
            description="Evidence at scale, connecting biological signals, predictive precision and scientific programs through one computational platform."
            maxWidth="lg"
          />
        </div>

        <div className="mt-12 sm:mt-16">
          <ImpactSignal />
        </div>

        <div className="mt-3 grid grid-cols-2 border-y border-[var(--border)] lg:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <div
              key={metric.id}
              className="border-[var(--border)] odd:border-r lg:border-r lg:last:border-r-0"
            >
              <ImpactCounter metric={metric} index={index} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
