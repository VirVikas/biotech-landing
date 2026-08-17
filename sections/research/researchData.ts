export interface ResearchArea {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
}

export const researchAreas: readonly ResearchArea[] = [
  {
    id: "molecular-discovery",
    number: "01",
    category: "Molecular Biology",
    title: "Molecular Discovery",
    description:
      "Identify hidden molecular relationships and biological signals across complex datasets.",
    metric: "18M+",
    metricLabel: "Biological Signals",
    tags: ["Biomarkers", "Molecular Networks", "Signal Analysis"],
  },
  {
    id: "predictive-biology",
    number: "02",
    category: "Computational Modeling",
    title: "Predictive Biology",
    description:
      "Use machine learning to model biological behavior and generate predictive insights.",
    metric: "99.4%",
    metricLabel: "Model Precision",
    tags: ["Machine Learning", "Prediction", "Pattern Recognition"],
  },
  {
    id: "cellular-intelligence",
    number: "03",
    category: "Cellular Systems",
    title: "Cellular Intelligence",
    description:
      "Understand cellular behavior through computational analysis of molecular and biological interactions.",
    metric: "640+",
    metricLabel: "Molecular Networks",
    tags: ["Cell Systems", "Interactions", "Pathways"],
  },
  {
    id: "translational-research",
    number: "04",
    category: "Clinical Translation",
    title: "Translational Research",
    description:
      "Connect computational discoveries with research programs and opportunities for real-world scientific impact.",
    metric: "35+",
    metricLabel: "Research Programs",
    tags: ["Drug Discovery", "Clinical Research", "Translation"],
  },
];
