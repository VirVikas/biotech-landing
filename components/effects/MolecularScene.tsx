"use client";

import { Canvas } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { MolecularNetwork } from "./MolecularNetwork";

export function MolecularScene() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0">
      <Canvas
        frameloop={shouldReduceMotion ? "never" : "always"}
        camera={{
          position: [0, 0, 7],
          fov: 42,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <MolecularNetwork />
      </Canvas>
    </div>
  );
}
