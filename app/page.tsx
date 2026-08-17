import { Hero } from "@/sections/hero/Hero";
import { Innovation } from "@/sections/innovation/Innovation";
import { Platform } from "@/sections/platform/Platform";
import { Research } from "@/sections/research/Research";
import { Capabilities } from "@/sections/capabilities/Capabilities";
import { Impact } from "@/sections/impact/Impact";
import { CTA } from "@/sections/cta/CTA";
import { Footer } from "@/components/layouts/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Innovation />
        <Platform />
        <Research />
        <Capabilities />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
