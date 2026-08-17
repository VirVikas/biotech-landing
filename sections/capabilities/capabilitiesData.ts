export interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  size: "large" | "medium" | "small";
  metric?: string;
  metricLabel?: string;
}

export const capabilities: readonly Capability[] = [
  {
    id: "molecular-intelligence",
    number: "01",
    title: "Molecular Intelligence",
    category: "CORE PLATFORM",
    description:
      "Transform complex molecular observations into structured biological intelligence using computational models and network analysis.",
    size: "large",
    metric: "18M+",
    metricLabel: "Signals Analyzed",
  },
  {
    id: "predictive-modeling",
    number: "02",
    title: "Predictive Modeling",
    category: "AI SYSTEMS",
    description:
      "Build predictive models that uncover patterns and relationships across biological datasets.",
    size: "medium",
    metric: "99.4%",
    metricLabel: "Model Precision",
  },
  {
    id: "biomarker-discovery",
    number: "03",
    title: "Biomarker Discovery",
    category: "RESEARCH",
    description:
      "Identify molecular signatures and candidate biomarkers hidden inside high-dimensional biological data.",
    size: "medium",
  },
  {
    id: "biological-networks",
    number: "04",
    title: "Biological Networks",
    category: "COMPUTATIONAL BIOLOGY",
    description:
      "Map relationships between genes, proteins, pathways and cellular systems.",
    size: "small",
  },
  {
    id: "translational-research",
    number: "05",
    title: "Translational Research",
    category: "SCIENTIFIC IMPACT",
    description:
      "Connect computational discoveries with research programs and real-world scientific opportunities.",
    size: "small",
  },
];
