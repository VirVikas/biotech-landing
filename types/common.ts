export interface AnimationProps {
  delay?: number;
  duration?: number;
  once?: boolean;
}

export interface BaseComponentProps {
  id?: string;
  className?: string;
}

export interface SectionProps extends BaseComponentProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface Stat {
  value: string | number;
  label: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
}

export interface NodePosition {
  x: number;
  y: number;
}
