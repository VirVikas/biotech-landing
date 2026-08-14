export type PlatformCategory =
  | "Data"
  | "AI"
  | "Research"
  | "Clinical"
  | "Infrastructure"
  | "Visualization";

export interface PlatformNode {
  id: string;
  title: string;
  category: PlatformCategory;
  x: number;
  y: number;
  description: string;
}

export interface PlatformConnection {
  from: PlatformNode["id"];
  to: PlatformNode["id"];
}

export const platformNodes: readonly PlatformNode[] = [
  {
    id: "data-ingestion",
    title: "Data Ingestion",
    category: "Data",
    x: 0.08,
    y: 0.28,
    description: "Normalizes multimodal biological and experimental inputs.",
  },
  {
    id: "genomics",
    title: "Genomics",
    category: "Data",
    x: 0.12,
    y: 0.72,
    description: "Processes genomic sequences and population-scale variation.",
  },
  {
    id: "molecular-graph",
    title: "Molecular Graph",
    category: "Research",
    x: 0.3,
    y: 0.48,
    description: "Maps molecular entities, pathways, and biological interactions.",
  },
  {
    id: "compute-layer",
    title: "Compute Layer",
    category: "Infrastructure",
    x: 0.34,
    y: 0.86,
    description: "Scales secure scientific workloads across research programs.",
  },
  {
    id: "ai-engine",
    title: "AI Engine",
    category: "AI",
    x: 0.5,
    y: 0.5,
    description: "Learns predictive representations from connected biological data.",
  },
  {
    id: "foundation-models",
    title: "Foundation Models",
    category: "AI",
    x: 0.5,
    y: 0.14,
    description: "Provides adaptable models for molecular and clinical reasoning.",
  },
  {
    id: "research-intelligence",
    title: "Research Intelligence",
    category: "Research",
    x: 0.66,
    y: 0.84,
    description: "Synthesizes evidence into testable scientific hypotheses.",
  },
  {
    id: "clinical-data",
    title: "Clinical Data",
    category: "Clinical",
    x: 0.7,
    y: 0.28,
    description: "Connects longitudinal patient evidence with molecular context.",
  },
  {
    id: "biomarker-discovery",
    title: "Biomarker Discovery",
    category: "Clinical",
    x: 0.84,
    y: 0.5,
    description: "Identifies measurable signals linked to disease and response.",
  },
  {
    id: "knowledge-interface",
    title: "Knowledge Interface",
    category: "Visualization",
    x: 0.88,
    y: 0.16,
    description: "Makes complex platform intelligence explorable and interpretable.",
  },
  {
    id: "scientific-insights",
    title: "Scientific Insights",
    category: "Visualization",
    x: 0.92,
    y: 0.78,
    description: "Surfaces actionable findings for research and clinical teams.",
  },
];

export const platformConnections: readonly PlatformConnection[] = [
  { from: "data-ingestion", to: "molecular-graph" },
  { from: "genomics", to: "molecular-graph" },
  { from: "genomics", to: "compute-layer" },
  { from: "molecular-graph", to: "ai-engine" },
  { from: "compute-layer", to: "ai-engine" },
  { from: "foundation-models", to: "ai-engine" },
  { from: "foundation-models", to: "clinical-data" },
  { from: "ai-engine", to: "clinical-data" },
  { from: "ai-engine", to: "research-intelligence" },
  { from: "clinical-data", to: "biomarker-discovery" },
  { from: "research-intelligence", to: "biomarker-discovery" },
  { from: "clinical-data", to: "knowledge-interface" },
  { from: "biomarker-discovery", to: "scientific-insights" },
  { from: "research-intelligence", to: "scientific-insights" },
];
