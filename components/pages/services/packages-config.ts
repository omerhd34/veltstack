import type { IconType } from "react-icons";
import {
  LuBuilding2,
  LuCodeXml,
  LuContact,
  LuGlobe,
  LuLifeBuoy,
  LuMonitorSmartphone,
  LuSearch,
  LuServer,
  LuShieldCheck,
  LuShoppingCart,
  LuSmartphone,
  LuTrendingUp,
} from "react-icons/lu";

export const packageCategories = [
  "web",
  "app",
  "seo",
  "api",
  "maintenance",
] as const;
export type PackageCategory = (typeof packageCategories)[number];

export const categoryTabIcons: Record<PackageCategory, IconType> = {
  web: LuGlobe,
  app: LuSmartphone,
  seo: LuSearch,
  api: LuCodeXml,
  maintenance: LuLifeBuoy,
};

export const webPackageSlugs = ["portfolio", "corporate", "ecommerce"] as const;
export const seoPackageSlugs = ["audit", "growth", "enterprise"] as const;
export const apiPackageSlugs = ["starter", "scale", "enterprise"] as const;
export const maintenancePackageSlugs = [
  "webApp",
  "backendCloud",
  "enterpriseSLA",
] as const;

export type WebPackageSlug = (typeof webPackageSlugs)[number];
export type SeoPackageSlug = (typeof seoPackageSlugs)[number];
export type ApiPackageSlug = (typeof apiPackageSlugs)[number];
export type MaintenancePackageSlug = (typeof maintenancePackageSlugs)[number];

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

export const maintenancePackageIcons: Record<MaintenancePackageSlug, IconType> =
  {
    webApp: LuMonitorSmartphone,
    backendCloud: LuServer,
    enterpriseSLA: LuShieldCheck,
  };

export const categoryPackageSlugs: Record<PackageCategory, readonly string[]> =
  {
    web: webPackageSlugs,
    app: webPackageSlugs,
    seo: seoPackageSlugs,
    api: apiPackageSlugs,
    maintenance: maintenancePackageSlugs,
  };

export const webPackageTechStack = [
  "HTML",
  "CSS",
  "Sass & SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Vue",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Redux",
  "Zustand",
  "UI",
  "Node.js",
  "Express.js",
  "REST API",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "MSSQL",
  "SQLite",
  "Vercel",
  "Postman",
  "cPanel",
  "Google Analytics",
  "Google Search",
  "Figma",
  "Git",
  "GitHub",
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
    "Zustand",
    "UI",
    "Node.js",
    "Express.js",
    "REST API",
    "Prisma",
    "MySQL",
    "Vercel",
    "Google Analytics",
    "Google Search",
    "Git",
    "GitHub",
  ],
  app: [
    "React Native",
    "Flutter",
    "Expo",
    "App Store",
    "Google Play",
    "Android Studio",
    "Redux Toolkit",
    "TypeScript",
    "Node.js",
    "Express.js",
    "REST API",
    "Prisma",
    "Postman",
    "Vercel",
  ],
  seo: [
    "Google Search",
    "Google Analytics",
    "Google Tag Manager",
    "PageSpeed Insights",
    "Next.js",
    "HTML",
    "JSON-LD",
  ],
  api: [
    "Node.js",
    "Express.js",
    "TypeScript",
    "REST API",
    "Prisma",
    "Postman",
    "MySQL",
    "PostgreSQL",
    "Swagger / OpenAPI",
  ],
  maintenance: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "UI",
    "Node.js",
    "Express.js",
    "REST API",
    "Prisma",
    "MySQL",
    "React Native",
    "Flutter",
    "Expo",
    "App Store",
    "Google Play",
    "Android Studio",
    "Vercel",
    "Google Analytics",
    "Google Search",
    "Postman",
    "Git",
    "GitHub",
    "cPanel",
  ],
};

export const appPackageTechStack = [
  "JavaScript",
  "TypeScript",
  "React Native",
  "Flutter",
  "Expo",
  "App Store",
  "Google Play",
  "Android Studio",
  "Redux Toolkit",
  "Node.js",
  "Express.js",
  "REST API",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Vercel",
  "Postman",
] as const;

export const seoPackageTechStack = [
  "Google Search",
  "Google Analytics",
  "Google Tag Manager",
  "PageSpeed Insights",
  "Next.js",
  "HTML",
  "CSS",
  "TypeScript",
  "Git",
  "Vercel",
  "Figma",
  "Semrush",
  "JSON-LD",
] as const;

export const apiPackageTechStack = [
  "Node.js",
  "Express.js",
  "TypeScript",
  "REST API",
  "Prisma",
  "Postman",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "MSSQL",
  "SQLite",
  "Redis",
  "Swagger / OpenAPI",
  "Docker",
  "Kubernetes",
] as const;

export const maintenancePackageTechStack = [
  "HTML",
  "CSS",
  "Sass & SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Vue",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Redux",
  "Zustand",
  "UI",
  "Node.js",
  "Express.js",
  "REST API",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "MSSQL",
  "SQLite",
  "React Native",
  "Flutter",
  "Expo",
  "App Store",
  "Google Play",
  "Android Studio",
  "Redux Toolkit",
  "Vercel",
  "Railway",
  "Render",
  "Git",
  "GitHub",
  "Postman",
  "cPanel",
  "Google Analytics",
  "Google Search",
  "Google Tag Manager",
  "PageSpeed Insights",
  "Figma",
  "Docker",
  "Kubernetes",
  "Redis",
] as const;

export const categoryTechStack: Record<PackageCategory, readonly string[]> = {
  web: webPackageTechStack,
  app: appPackageTechStack,
  seo: seoPackageTechStack,
  api: apiPackageTechStack,
  maintenance: maintenancePackageTechStack,
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
  maintenance: maintenancePackageIcons,
};
