import { servicesPackagesEn } from "./packages-en";

export const servicesPageEn = {
  heroBadge: "Digital Services",
  heroTitle: "Clear packages for your web and mobile projects",
  heroSubtitle:
    "Every project type comes in three tiers: Basic, Standard and Pro. Scope, delivery and revisions are defined upfront, large projects scale without limits.",
  heroSubtitleSecondary:
    "Browse the packages below and switch between website, app, redesign, SEO, technical audit and maintenance tabs to find the scope that fits your project.",
  heroImageAlt: "Digital development workspace",
  scrollLabel: "View packages",
  ctaBadge: "Free Consultation",
  ctaTagline: "Let's find the right package together",
  ctaTitle: "Need help choosing a package?",
  ctaTitleLead: "Need help",
  ctaTitleAccent: "choosing a package?",
  ctaSubtitle:
    "In a free call we'll discuss your project and recommend the right tier.",
  ctaPoint1: "Free discovery call",
  ctaPoint2: "Tailored package recommendation",
  ctaPoint3: "Clear scope and pricing",
  ctaButton: "Schedule a Call",
  ctaNote: "Response within 24h",
  stats: [
    { value: "3-112", label: "Delivery (Days)" },
    { value: "6", label: "Service Types" },
    { value: "14", label: "Ready Packages" },
    { value: "15-45", label: "Support Period (Days)" },
  ],
  ...servicesPackagesEn,
} as const;
