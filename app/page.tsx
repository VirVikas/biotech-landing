import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#05131D] text-white">
      <Navbar />

      <section className="flex min-h-screen items-center">
        <Container>
          <div className="max-w-4xl pt-24">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#18E8CF]">
              NEXORA BIO
            </p>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
              Engineering
              <span className="block text-white/40">
                the future of biology.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              Computational biology, artificial intelligence, and molecular
              science working together to accelerate precision medicine.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="technology"
        className="flex min-h-screen items-center border-t border-white/5"
      >
        <Container>
          <h2 className="text-4xl font-semibold">Technology</h2>
        </Container>
      </section>

      <section
        id="research"
        className="flex min-h-screen items-center border-t border-white/5"
      >
        <Container>
          <h2 className="text-4xl font-semibold">Research</h2>
        </Container>
      </section>

      <section
        id="capabilities"
        className="flex min-h-screen items-center border-t border-white/5"
      >
        <Container>
          <h2 className="text-4xl font-semibold">Capabilities</h2>
        </Container>
      </section>

      <section
        id="innovation"
        className="flex min-h-screen items-center border-t border-white/5"
      >
        <Container>
          <h2 className="text-4xl font-semibold">About / Innovation</h2>
        </Container>
      </section>

      <section
        id="contact"
        className="flex min-h-screen items-center border-t border-white/5"
      >
        <Container>
          <h2 className="text-4xl font-semibold">Contact</h2>
        </Container>
      </section>
    </main>
  );
}