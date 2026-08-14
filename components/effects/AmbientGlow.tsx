import type { CSSProperties } from "react";

interface AmbientGlowProps {
  color: string;
  size: CSSProperties["width"];
  opacity: number;
  top?: CSSProperties["top"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  bottom?: CSSProperties["bottom"];
}

export function AmbientGlow({
  color,
  size,
  opacity,
  top,
  left,
  right,
  bottom,
}: AmbientGlowProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute rounded-full blur-[120px]"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity,
        top,
        left,
        right,
        bottom,
      }}
    />
  );
}
