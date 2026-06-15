import type { ProjectSlug } from "@/components/sections/projects/project-items";
import type { ServiceSlug } from "@/components/sections/services/service-items";

export const serviceTechStacks: Record<ServiceSlug, string[]> = {
  "kurumsal-web-sitesi": [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "MySQL",
    "Vercel",
  ],
  "e-ticaret": [
    "Next.js",
    "React",
    "Node.js",
    "Prisma",
    "MySQL",
    "Tailwind CSS",
    "Vercel",
  ],
  "mobil-uygulama": [
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
  "portfolyo-sitesi": [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Figma",
    "Vercel",
  ],
  "api-gelistirme": [
    "Node.js",
    "Express.js",
    "REST API",
    "Prisma",
    "PostgreSQL",
    "Railway",
    "Postman",
  ],
};

export const serviceRelatedProjects: Record<ServiceSlug, ProjectSlug[]> = {
  "kurumsal-web-sitesi": ["uzman-klinik-psikolog", "fablessi"],
  "e-ticaret": ["yazici-ticaret"],
  "mobil-uygulama": ["iqfinansai"],
  "seo-hizmetleri": ["uzman-klinik-psikolog", "yazici-ticaret"],
  "portfolyo-sitesi": ["fablessi", "iqfinansai"],
  "api-gelistirme": ["iqfinansai", "yazici-ticaret"],
};
