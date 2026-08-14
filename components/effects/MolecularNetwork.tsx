"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface NodeData {
  position: [number, number, number];
  index: number;
}

const NODE_COUNT = 42;
const CONNECTION_DISTANCE = 1.12;

function createNodes(): NodeData[] {
  return Array.from({ length: NODE_COUNT }, (_, i) => {
    const t = i / (NODE_COUNT - 1);

    const angle = t * Math.PI * 8;
    const y = (t - 0.5) * 5.2;

    const radius = 0.85 + Math.sin(i * 1.7) * 0.12;

    return {
      index: i,
      position: [
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius,
      ],
    };
  });
}

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const count = 32;

    return Array.from({ length: count }, (_, i) => {
      const t = i / (count - 1);
      const y = (t - 0.5) * 5;

      const angle = t * Math.PI * 4;
      const radius = 0.72;

      return {
        left: [
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius,
        ] as [number, number, number],

        right: [
          Math.cos(angle + Math.PI) * radius,
          y,
          Math.sin(angle + Math.PI) * radius,
        ] as [number, number, number],
      };
    });
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    groupRef.current.rotation.y = time * 0.12;

    groupRef.current.rotation.z =
      Math.sin(time * 0.3) * 0.035;
    
    groupRef.current.scale.setScalar(
      1 + Math.sin(time * 0.7) * 0.015
    );
  });

  return (
    <group ref={groupRef}>
      {points.map((point, index) => {
        const geometry =
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(...point.left),
            new THREE.Vector3(...point.right),
          ]);

        return (
          <group key={index}>
            {/* Left DNA node */}
            <mesh position={point.left}>
              <sphereGeometry args={[0.055, 16, 16]} />
              <meshBasicMaterial
                color="#18E8CF"
                transparent
                opacity={0.95}
              />
            </mesh>

            {/* Right DNA node */}
            <mesh position={point.right}>
              <sphereGeometry args={[0.055, 16, 16]} />
              <meshBasicMaterial
                color="#6AA8FF"
                transparent
                opacity={0.95}
              />
            </mesh>

            {/* DNA rung */}
            <lineSegments geometry={geometry}>
              <lineBasicMaterial
                color="#7C8CFF"
                transparent
                opacity={0.35}
              />
            </lineSegments>
          </group>
        );
      })}
    </group>
  );
}

export function MolecularNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => createNodes(), []);

  const connections = useMemo(() => {
    const result: [NodeData, NodeData][] = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = new THREE.Vector3(...nodes[i].position);
        const b = new THREE.Vector3(...nodes[j].position);

        if (a.distanceTo(b) < CONNECTION_DISTANCE) {
          result.push([nodes[i], nodes[j]]);
        }
      }
    }

    return result;
  }, [nodes]);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    groupRef.current.rotation.y = time * 0.08;

    groupRef.current.rotation.x =
      Math.sin(time * 0.35) * 0.08;

    // Very subtle mouse interaction
    groupRef.current.position.x =
      THREE.MathUtils.lerp(
        groupRef.current.position.x,
        state.pointer.x * 0.18,
        0.04
      );

    groupRef.current.position.y =
      THREE.MathUtils.lerp(
        groupRef.current.position.y,
        state.pointer.y * 0.12,
        0.04
      );
  });

  return (
    <group ref={groupRef}>
      {/* DNA */}
      <DNAHelix />

      {/* Molecular nodes */}
      {nodes.map((node) => (
        <mesh
          key={node.index}
          position={node.position}
        >
          <sphereGeometry args={[0.055, 12, 12]} />

          <meshBasicMaterial
            color="#18E8CF"
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}

      {/* Molecular network */}
      {connections.map(([a, b], index) => {
        const geometry =
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(...a.position),
            new THREE.Vector3(...b.position),
          ]);

        return (
          <lineSegments
            key={index}
            geometry={geometry}
          >
            <lineBasicMaterial
              color="#6AA8FF"
              transparent
              opacity={0.12}
            />
          </lineSegments>
        );
      })}
    </group>
  );
}