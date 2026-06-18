import { servicesPackagesEn } from "./packages-en";

export const servicesPageEn = {
  heroBadge: "Digital Services",
  heroTitle: "Clear packages for your web and mobile projects",
  heroSubtitle:
    "Every project type comes in three tiers: Basic, Standard and Pro. Scope, delivery and revisions are defined upfront — large projects scale without limits.",
  heroSubtitleSecondary:
    "Browse the packages below and switch between website, app, SEO, API and maintenance tabs to find the scope that fits your project.",
  heroImageAlt: "Digital development workspace",
  scrollLabel: "View packages",
  ctaTitle: "Need help choosing a package?",
  ctaSubtitle:
    "In a free call we'll discuss your project and recommend the right tier.",
  ctaButton: "Schedule a Call",
  ctaNote: "Response within 24h",
  stats: [
    { value: "5-120", label: "Delivery Days" },
    { value: "5", label: "Service Types" },
    { value: "∞", label: "Page Capacity" },
    { value: "98%", label: "Satisfaction" },
  ],
  ...servicesPackagesEn,
} as const;
