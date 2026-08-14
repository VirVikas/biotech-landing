export interface InnovationStage {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly stat: string;
  readonly label: string;
}

export const stages: readonly InnovationStage[] = [
  {
    id: "biological-signals",
    title: "Biological Signals",
    subtitle: "Observe",
    description:
      "Capture high-dimensional molecular observations from complex biological systems using advanced sensing and computational pipelines.",
    stat: "18M+",
    label: "Signals Processed",
  },
  {
    id: "computational-models",
    title: "Computational Models",
    subtitle: "Model",
    description:
      "Machine learning algorithms identify hidden biological relationships and generate predictive molecular representations.",
    stat: "99.4%",
    label: "Prediction Accuracy",
  },
  {
    id: "molecular-intelligence",
    title: "Molecular Intelligence",
    subtitle: "Understand",
    description:
      "Reveal meaningful pathways, biomarkers and biological interactions that traditional analysis cannot easily detect.",
    stat: "640+",
    label: "Molecular Networks",
  },
  {
    id: "clinical-possibilities",
    title: "Clinical Possibilities",
    subtitle: "Act",
    description:
      "Transform computational insight into actionable research opportunities that accelerate scientific discovery.",
    stat: "35+",
    label: "Research Programs",
  },
] as const;
