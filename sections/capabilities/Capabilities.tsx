import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AmbientGlow } from "@/components/effects/AmbientGlow";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { CapabilityGrid } from "./CapabilityGrid";
import { capabilities } from "./capabilitiesData";

const capabilityList = [...capabilities];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-label="Capabilities"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)]"
    >
      <AnimatedGrid />
      <AmbientGlow
        color="var(--primary)"
        size="38rem"
        opacity={0.04}
        top="18%"
        right="-8%"
      />
      <AmbientGlow
        color="var(--secondary)"
        size="28rem"
        opacity={0.025}
        left="-10%"
        bottom="8%"
      />

      <Container className="relative z-10 py-28 sm:py-36 lg:py-44">
        <SectionHeading
          eyebrow="CAPABILITIES / 04"
          title="What we build for complex biology."
          description="From molecular intelligence to predictive systems, our platform connects biological data, computational models and scientific research into one intelligent workflow."
          maxWidth="lg"
        />

        <div className="mt-20 sm:mt-24 lg:mt-32">
          <CapabilityGrid capabilities={capabilityList} />
        </div>
      </Container>
    </section>
  );
}
