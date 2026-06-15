import type { IconType } from "react-icons";
import {
  LuBuilding2,
  LuCodeXml,
  LuContact,
  LuGlobe,
  LuSearch,
  LuServer,
  LuShoppingCart,
  LuSmartphone,
  LuTrendingUp,
} from "react-icons/lu";

export const packageCategories = ["web", "app", "seo", "api"] as const;
export type PackageCategory = (typeof packageCategories)[number];

export const categoryTabIcons: Record<PackageCategory, IconType> = {
  web: LuGlobe,
  app: LuSmartphone,
  seo: LuSearch,
  api: LuCodeXml,
};

export const webPackageSlugs = ["portfolio", "corporate", "ecommerce"] as const;
export const seoPackageSlugs = ["audit", "growth", "enterprise"] as const;
export const apiPackageSlugs = ["starter", "scale", "enterprise"] as const;

export type WebPackageSlug = (typeof webPackageSlugs)[number];
export type SeoPackageSlug = (typeof seoPackageSlugs)[number];
export type ApiPackageSlug = (typeof apiPackageSlugs)[number];

export type PackageTier = "temel" | "standart" | "pro";

export const webPackageIcons: Record<WebPackageSlug, IconType> = {
  portfolio: LuContact,
  corporate: LuBuilding2,
  ecommerce: LuShoppingCart,
};

export const appPackageIcons: Record<WebPackageSlug, IconType> = {
  portfolio: LuSmartphone,
  corporate: LuBuilding2,
  ecommerce: LuShoppingCart,
};

export const seoPackageIcons: Record<SeoPackageSlug, IconType> = {
  audit: LuSearch,
  growth: LuTrendingUp,
  enterprise: LuBuilding2,
};

export const apiPackageIcons: Record<ApiPackageSlug, IconType> = {
  starter: LuCodeXml,
  scale: LuServer,
  enterprise: LuServer,
};

export const categoryPackageSlugs: Record<
  PackageCategory,
  readonly string[]
> = {
  web: webPackageSlugs,
  app: webPackageSlugs,
  seo: seoPackageSlugs,
  api: apiPackageSlugs,
};

export const webPackageTechStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Zustand",
  "Tailwind CSS",
  "shadcn/ui",
  "Bootstrap",
  "Next.js",
  "Node.js",
  "Express.js",
  "REST API",
  "Prisma",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Postman",
  "cPanel",
  "Vercel",
  "Google Analytics",
  "Google Search",
] as const;

export const categoryPrimaryTechStack: Record<
  PackageCategory,
  readonly string[]
> = {
  web: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Node.js",
    "REST API",
    "MySQL",
    "Vercel",
  ],
  app: [
    "React Native",
    "TypeScript",
    "Node.js",
    "REST API",
    "Flutter",
    "Expo",
    "Vercel",
  ],
  seo: [
    "Google Search",
    "Google Analytics",
    "Next.js",
    "TypeScript",
    "HTML",
    "Vercel",
  ],
  api: [
    "Node.js",
    "REST API",
    "TypeScript",
    "Prisma",
    "MySQL",
    "Express.js",
    "Vercel",
  ],
};

export const appPackageTechStack = [
  "JavaScript",
  "TypeScript",
  "React Native",
  "Flutter",
  "Expo",
  "Node.js",
  "Express.js",
  "REST API",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Vercel",
  "App Store",
  "Google Play",
] as const;

export const seoPackageTechStack = [
  "Next.js",
  "Google Search",
  "Google Analytics",
  "HTML",
  "TypeScript",
  "Vercel",
] as const;

export const apiPackageTechStack = [
  "Node.js",
  "Express.js",
  "REST API",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Postman",
  "Railway",
  "Vercel",
] as const;

export const categoryTechStack: Record<PackageCategory, readonly string[]> = {
  web: webPackageTechStack,
  app: appPackageTechStack,
  seo: seoPackageTechStack,
  api: apiPackageTechStack,
};

export function getCategorySecondaryTechStack(
  category: PackageCategory,
): string[] {
  const primarySet = new Set(categoryPrimaryTechStack[category]);
  return categoryTechStack[category].filter((name) => !primarySet.has(name));
}

export const categoryIcons: Record<
  PackageCategory,
  Record<string, IconType>
> = {
  web: webPackageIcons,
  app: appPackageIcons,
  seo: seoPackageIcons,
  api: apiPackageIcons,
};
