import type { ProjectSlug } from "@/components/sections/projects/project-items";
import type { ServiceSlug } from "@/components/sections/services/service-items";

export const serviceTechStacks: Record<ServiceSlug, string[]> = {
  "web-sitesi": [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "MySQL",
    "Vercel",
  ],
  uygulama: [
    "React Native",
    "Expo",
    "TypeScript",
    "Node.js",
    "REST API",
    "PostgreSQL",
    "Vercel",
  ],
  "seo-hizmetleri": [
    "Next.js",
    "Google Analytics",
    "Google Search",
    "TypeScript",
    "Vercel",
  ],
  "bakim-ve-destek": [
    "Next.js",
    "Node.js",
    "TypeScript",
    "Vercel",
    "GitHub",
    "PostgreSQL",
  ],
};

export const serviceRelatedProjects: Record<ServiceSlug, ProjectSlug[]> = {
  "web-sitesi": ["uzman-klinik-psikolog", "fablessi", "yazici-ticaret"],
  uygulama: ["iqfinansai"],
  "seo-hizmetleri": ["uzman-klinik-psikolog", "yazici-ticaret"],
  "bakim-ve-destek": ["fablessi", "iqfinansai"],
};
