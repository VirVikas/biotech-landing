"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AmbientGlow } from "@/components/effects/AmbientGlow";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { CTAVisual } from "./CTAVisual";
import { ctaContent } from "./ctaData";

export function CTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative flex min-h-[80vh] items-center overflow-hidden border-t border-[var(--border)] bg-[var(--background)] lg:min-h-[90vh]"
    >
      <AnimatedGrid />
      <AmbientGlow
        color="var(--primary)"
        size="38rem"
        opacity={0.055}
        top="14%"
        right="2%"
      />
      <AmbientGlow
        color="var(--accent)"
        size="24rem"
        opacity={0.025}
        left="34%"
        bottom="-8%"
      />

      <Container className="relative z-10 py-24 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(22rem,0.9fr)] md:gap-6 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#18E8CF]">
              {ctaContent.eyebrow}
            </p>
            <h2
              id="cta-heading"
              className="mt-6 max-w-[12ch] text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[3.5rem] lg:text-[4.5rem]"
            >
              {ctaContent.title}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {ctaContent.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.a
                href="mailto:hello@nexorabio.com"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#18E8CF] px-6 py-3 text-sm font-medium text-[#05131D] outline-none transition-[box-shadow] duration-300 hover:shadow-[0_0_28px_rgba(24,232,207,0.2)] focus-visible:ring-2 focus-visible:ring-[#18E8CF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05131D]"
              >
                {ctaContent.primaryCta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#platform"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.12] px-6 py-3 text-sm font-medium text-white outline-none transition-colors duration-300 hover:border-[#18E8CF]/40 hover:text-[#18E8CF] focus-visible:ring-2 focus-visible:ring-[#18E8CF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05131D]"
              >
                {ctaContent.secondaryCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.12 }}
            className="mx-auto w-full max-w-2xl"
          >
            <CTAVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
