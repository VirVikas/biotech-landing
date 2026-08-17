export interface CTAContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export const ctaContent: Readonly<CTAContent> = {
  eyebrow: "READY TO EXPLORE",
  title: "Turn biological complexity into your next discovery.",
  description:
    "Connect molecular data, computational intelligence and scientific research through a platform designed to reveal what conventional analysis can miss.",
  primaryCta: "Start a conversation",
  secondaryCta: "Explore the platform",
};
