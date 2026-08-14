import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/sections/hero/Hero";
import { Innovation } from "@/sections/innovation/Innovation";
import { Platform } from "@/sections/platform/Platform";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="bg-[#05131D] text-white">
      <Navbar />

      <Hero />
      <Innovation />
      <Platform />
      <section
        id="technology"
        className="flex min-h-screen items-center border-t border-white/5"
      >
        <Container>
          <p className="text-sm uppercase tracking-[0.25em] text-[#18E8CF]">
            02 / Platform
          </p>

          <h2 className="mt-5 text-5xl font-semibold">
            Technology
          </h2>
        </Container>
      </section>

      <section
        id="research"
        className="flex min-h-screen items-center border-t border-white/5"
      >
        <Container>
          <p className="text-sm uppercase tracking-[0.25em] text-[#18E8CF]">
            03 / Research
          </p>

          <h2 className="mt-5 text-5xl font-semibold">
            Research
          </h2>
        </Container>
      </section>

      <section
        id="capabilities"
        className="flex min-h-screen items-center border-t border-white/5"
      >
        <Container>
          <p className="text-sm uppercase tracking-[0.25em] text-[#18E8CF]">
            04 / Capabilities
          </p>

          <h2 className="mt-5 text-5xl font-semibold">
            Capabilities
          </h2>
        </Container>
      </section>
    </main>
  );
}