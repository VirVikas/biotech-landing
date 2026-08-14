"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  maxWidth?: "sm" | "md" | "lg";
}

const descriptionWidths: Record<
  NonNullable<SectionHeadingProps["maxWidth"]>,
  string
> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  maxWidth = "lg",
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const isCentered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
      className={isCentered ? "text-center" : "text-left"}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-[#18E8CF]">
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={`${eyebrow ? "mt-6" : ""} text-[40px] font-semibold leading-[1.05] tracking-[-0.035em] text-white md:text-[56px] lg:text-[72px]`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`${descriptionWidths[maxWidth]} ${
            isCentered ? "mx-auto" : ""
          } mt-6 text-base leading-relaxed text-slate-400 sm:text-lg`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
