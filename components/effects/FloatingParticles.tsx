"use client";

import { motion, useReducedMotion } from "framer-motion";

function seededRandom(seed: number) {
  let value = seed >>> 0;
  value = Math.imul(value ^ (value >>> 16), 0x45d9f3b);
  value = Math.imul(value ^ (value >>> 16), 0x45d9f3b);
  value ^= value >>> 16;
  return (value >>> 0) / 4_294_967_296;
}

const particles = Array.from({ length: 20 }, (_, index) => ({
  x: seededRandom(index + 1) * 100,
  y: seededRandom(index + 21) * 100,
  radius: 0.12 + seededRandom(index + 41) * 0.22,
  driftX: (seededRandom(index + 61) - 0.5) * 8,
  driftY: 3 + seededRandom(index + 81) * 8,
  duration: 10 + seededRandom(index + 101) * 10,
  delay: seededRandom(index + 121) * 7,
  opacity: 0.08 + seededRandom(index + 141) * 0.16,
}));

export function FloatingParticles() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {particles.map((particle, index) => (
        <motion.circle
          key={index}
          cx={particle.x}
          cy={particle.y}
          r={particle.radius}
          fill="var(--primary)"
          initial={false}
          animate={{
            x: shouldReduceMotion ? 0 : [0, particle.driftX, 0],
            y: shouldReduceMotion ? 0 : [0, -particle.driftY, 0],
            opacity: shouldReduceMotion
              ? particle.opacity
              : [particle.opacity * 0.55, particle.opacity, particle.opacity * 0.55],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: shouldReduceMotion ? "auto" : "transform, opacity" }}
        />
      ))}
    </svg>
  );
}
