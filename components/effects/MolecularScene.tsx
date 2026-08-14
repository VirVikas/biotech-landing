"use client";

import { Canvas } from "@react-three/fiber";
import { MolecularNetwork } from "./MolecularNetwork";

export function MolecularScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
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