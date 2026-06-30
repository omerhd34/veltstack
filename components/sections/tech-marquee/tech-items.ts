import type { IconType } from "react-icons";
import {
  SiAppstore,
  SiBootstrap,
  SiCss,
  SiExpress,
  SiExpo,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGoogleanalytics,
  SiGoogleplay,
  SiGoogletagmanager,
  SiGooglesearchconsole,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiLighthouse,
  SiMeta,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPagespeedinsights,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRailway,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { ZustandIcon } from "./ZustandIcon";

export interface TechItem {
  name: string;
  icon: IconType;
  tooltip?: string;
  brandIcon?: boolean;
}

export type TechCategoryKey =
  | "frontend"
  | "backend"
  | "mobile"
  | "hosting"
  | "seo";

export interface TechCategory {
  key: TechCategoryKey;
  items: TechItem[];
}

/** Günlük / öncelikli stack — Beam Circle'da marka rengiyle vurgulanır */
export const primaryTechNames = [
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Redux",
  "Node.js",
  "REST API",
  "MySQL",
  "Prisma",
  "React Native",
  "Vercel",
  "Git",
  "GitHub",
  "Google Analytics",
  "PageSpeed Insights",
  "Google Search Console",
] as const;

export type PrimaryTechName = (typeof primaryTechNames)[number];

export function isPrimaryTechItem(name: string): name is PrimaryTechName {
  return (primaryTechNames as readonly string[]).includes(name);
}

export const techCategories: TechCategory[] = [
  {
    key: "frontend",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Redux", icon: SiRedux },
      { name: "Zustand", icon: ZustandIcon },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API", icon: TbApi },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    key: "mobile",
    items: [
      { name: "React Native", icon: TbBrandReactNative },
      { name: "Flutter", icon: SiFlutter },
      { name: "Expo", icon: SiExpo },
      { name: "Kotlin", icon: SiKotlin },
      { name: "App Store", icon: SiAppstore },
      { name: "Google Play", icon: SiGoogleplay },
    ],
  },
  {
    key: "hosting",
    items: [
      { name: "Vercel", icon: SiVercel },
      { name: "Railway", icon: SiRailway },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    key: "seo",
    items: [
      { name: "Google Analytics", icon: SiGoogleanalytics },
      { name: "Meta Pixel", icon: SiMeta },
      { name: "Lighthouse", icon: SiLighthouse },
      { name: "PageSpeed Insights", icon: SiPagespeedinsights },
      { name: "Google Search Console", icon: SiGooglesearchconsole },
      { name: "Google Tag Manager", icon: SiGoogletagmanager },
    ],
  },
];

/** Merkezden dışa: 1 SEO · 2 Hosting · 3 Mobil · 4 Backend · 5 Frontend */
export const techOrbitCategoryOrder = [
  "seo",
  "hosting",
  "mobile",
  "backend",
  "frontend",
] as const satisfies readonly TechCategoryKey[];

export function getTechCategoriesForOrbit(): TechCategory[] {
  return techOrbitCategoryOrder.map(
    (key) => techCategories.find((category) => category.key === key)!,
  );
}

export const techItems = techCategories.flatMap((category) => category.items);

export const techItemCount = techItems.length;
