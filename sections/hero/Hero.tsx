"use client";

import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";

const MolecularScene = dynamic(
  () =>
    import("@/components/effects/MolecularScene").then(
      (module) => module.MolecularScene
    ),
  {
    ssr: false,
    loading: () => null,
  }
);

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#05131D]"
    >
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute left-[5%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#18E8CF]/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[5%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#6AA8FF]/10 blur-[160px]" />

      {/* Scientific grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Molecular visualization */}
      <div className="pointer-events-none absolute inset-y-0 right-[-18%] w-[78%] sm:right-[-12%] sm:w-[70%] lg:right-[-5%] lg:w-[64%]">
        <MolecularScene />

        {/* Atmospheric fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,#05131D_72%,#05131D_100%)]" />

        {/* Scientific HUD */}
        <div className="absolute right-[12%] top-[25%] hidden w-40 sm:block">
          <div className="rounded-2xl border border-white/[0.08] bg-[#071923]/50 p-4 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-[0.22em] text-slate-500">
                System
              </span>

              <span className="flex items-center gap-1.5 text-[8px] uppercase tracking-[0.15em] text-[#18E8CF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#18E8CF] shadow-[0_0_8px_#18E8CF]" />
                Active
              </span>
            </div>

            <div className="mt-4">
              <p className="text-xs font-medium text-white">
                Molecular Core
              </p>

              <div className="mt-3 h-px bg-white/[0.08]" />

              <div className="mt-3 flex items-end justify-between">
                <span className="text-[9px] uppercase tracking-[0.15em] text-slate-500">
                  Density
                </span>

                <span className="text-sm font-medium text-[#18E8CF]">
                  87.4%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live signal indicator */}
        <div className="absolute bottom-[23%] right-[17%] hidden sm:block">
          <div className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-[#071923]/50 px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#18E8CF] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#18E8CF]" />
            </span>

            <span className="text-[8px] uppercase tracking-[0.2em] text-slate-400">
              Live biological signal / 0042
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero content */}
      <Container className="relative z-10 flex min-h-screen items-center">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl pb-24 pt-32 lg:pb-16"
        >
          {/* Eyebrow */}
          <motion.div
            variants={heroItem}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#18E8CF]" />

            <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#18E8CF]">
              Computational Biology / 01
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={heroItem}
            className="max-w-5xl text-[clamp(3.5rem,8vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]"
          >
            Living
            <br />

            <span className="text-white/35">
              Molecular
            </span>

            <br />

            Intelligence
            <span className="text-[#18E8CF]">.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={heroItem}
            className="mt-9 max-w-xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            We combine computational biology, machine intelligence,
            and molecular science to uncover the signals hidden inside
            complex biological systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroItem}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#platform"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#18E8CF] px-6 py-3.5 text-sm font-semibold text-[#041019] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(24,232,207,0.22)]"
            >
              Explore our platform

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#research"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              View research

              <span className="h-1.5 w-1.5 rounded-full bg-[#6AA8FF] transition-transform duration-300 group-hover:scale-150" />
            </a>
          </motion.div>

          {/* Scientific data */}
          <motion.div
            variants={heroItem}
            className="mt-16 grid max-w-2xl grid-cols-3 border-y border-white/[0.08] py-5"
          >
            <div className="pr-4">
              <p className="text-xl font-semibold text-white sm:text-2xl">
                12M+
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                Biological signals
              </p>
            </div>

            <div className="border-l border-white/[0.08] px-4">
              <p className="text-xl font-semibold text-white sm:text-2xl">
                99.4%
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                Model precision
              </p>
            </div>

            <div className="border-l border-white/[0.08] pl-4">
              <p className="text-xl font-semibold text-white sm:text-2xl">
                35+
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                Research regions
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.a
        href="#innovation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-slate-500 transition-colors hover:text-white sm:flex"
      >
        <span>Scroll to explore</span>

        <motion.span
          animate={{ y: shouldReduceMotion ? 0 : [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
