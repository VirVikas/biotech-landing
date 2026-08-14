"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PlatformConnection } from "./PlatformConnection";
import { PlatformNode } from "./PlatformNode";
import { platformConnections, platformNodes } from "./platformData";

export function Architecture() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const connections = useMemo(() => {
    const nodesById = new Map(platformNodes.map((node) => [node.id, node]));
    return platformConnections.flatMap((connection) => {
      const from = nodesById.get(connection.from);
      const to = nodesById.get(connection.to);

      return from && to
        ? [{ key: `${connection.from}:${connection.to}`, from, to }]
        : [];
    });
  }, []);

  const highlightedIds = useMemo(() => {
    if (!hoveredNodeId) return null;

    const hoveredNode = platformNodes.find(
      (node) => node.id === hoveredNodeId
    );

    if (!hoveredNode) return new Set([hoveredNodeId]);

    const ids = new Set<string>([hoveredNode.id]);

    platformConnections.forEach(({ from, to }) => {
      if (from === hoveredNode.id) ids.add(to);
      if (to === hoveredNode.id) ids.add(from);
    });

    return ids;
  }, [hoveredNodeId]);

  return (
    <div className="relative mx-auto aspect-[4/5] min-h-[28rem] w-full max-w-5xl sm:aspect-[5/4] sm:min-h-[34rem] lg:aspect-[16/10]">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {connections.map(({ key, from, to }) => {
          const isHighlighted =
            hoveredNodeId === null ||
            from.id === hoveredNodeId ||
            to.id === hoveredNodeId;

          return (
            <motion.g
              key={key}
              initial={false}
              animate={{ opacity: isHighlighted ? 1 : 0.12 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
            >
              <PlatformConnection from={from} to={to} />
            </motion.g>
          );
        })}
      </svg>

      <div className="absolute inset-0 z-10">
        {platformNodes.map((node, index) => {
          const isRelated = highlightedIds?.has(node.id) ?? false;
          const isDimmed = highlightedIds !== null && !isRelated;
          const distance = 3 + (index % 3);

          return (
            <motion.div
              key={node.id}
              className="pointer-events-none absolute inset-0"
              animate={{
                opacity: isDimmed ? 0.18 : 1,
                x: shouldReduceMotion ? 0 : [0, index % 2 === 0 ? distance : -distance, 0],
                y: shouldReduceMotion ? 0 : [0, index % 2 === 0 ? -distance : distance, 0],
              }}
              transition={{
                opacity: { duration: shouldReduceMotion ? 0 : 0.4 },
                x: {
                  duration: 7 + index * 0.45,
                  delay: index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: 8 + index * 0.4,
                  delay: index * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div
                className="pointer-events-auto"
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                onFocus={() => setHoveredNodeId(node.id)}
                onBlur={() => setHoveredNodeId(null)}
              >
                <PlatformNode
                  title={node.title}
                  category={node.category}
                  x={node.x}
                  y={node.y}
                  active={isRelated}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
