export interface ImpactMetric {
  id: string;
  value: string;
  label: string;
}

export const impactMetrics: readonly ImpactMetric[] = [
  { id: "biological-signals", value: "18M+", label: "Biological Signals" },
  { id: "model-precision", value: "99.4%", label: "Model Precision" },
  { id: "molecular-networks", value: "640+", label: "Molecular Networks" },
  { id: "research-programs", value: "35+", label: "Research Programs" },
];
