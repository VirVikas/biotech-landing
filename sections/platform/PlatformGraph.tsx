"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { platformConnections, platformNodes } from "./platformData";
import { PlatformNode } from "./PlatformNode";
import { PlatformEdge } from "./PlatformEdge";
import { FloatingInfo } from "./FloatingInfo";

export function PlatformGraph() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const nodesById = useMemo(
    () => new Map(platformNodes.map((node) => [node.id, node])),
    []
  );

  const hoveredNode = hoveredNodeId
    ? nodesById.get(hoveredNodeId) ?? null
    : null;

  return (
    <div
      className="relative mx-auto aspect-[4/5] min-h-[30rem] w-full max-w-6xl sm:aspect-[5/4] sm:min-h-[38rem] lg:aspect-[16/10] lg:min-h-[42rem]"
      onMouseLeave={() => setHoveredNodeId(null)}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {platformConnections.map((connection) => {
          const from = nodesById.get(connection.from);
          const to = nodesById.get(connection.to);

          if (!from || !to) return null;

          const active =
            hoveredNodeId === from.id || hoveredNodeId === to.id;

          return (
            <PlatformEdge
              key={`${connection.from}:${connection.to}`}
              from={from}
              to={to}
              active={active}
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 z-10">
        {platformNodes.map((node) => (
          <div
            key={node.id}
            className="contents"
            onMouseEnter={() => setHoveredNodeId(node.id)}
            onFocus={() => setHoveredNodeId(node.id)}
            onBlur={() => setHoveredNodeId(null)}
          >
            <PlatformNode
              title={node.title}
              category={node.category}
              x={node.x}
              y={node.y}
              active={hoveredNodeId === node.id}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {hoveredNode ? (
          <motion.div
            key={hoveredNode.id}
            className="pointer-events-none absolute bottom-3 left-1/2 z-20 w-[min(90%,22rem)] -translate-x-1/2 sm:bottom-6 lg:bottom-auto lg:left-auto lg:right-4 lg:top-4 lg:translate-x-0"
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
          >
            <FloatingInfo
              category={hoveredNode.category}
              title={hoveredNode.title}
              description={hoveredNode.description}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
