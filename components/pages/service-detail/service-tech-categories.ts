import type { ServiceSlug } from "@/components/sections/services/service-items";

export type ServiceTechCategoryKey =
  | "mobile"
  | "frontend"
  | "ui"
  | "backend"
  | "database"
  | "devops"
  | "analytics"
  | "payment"
  | "store"
  | "tools";

export interface ServiceTechCategoryDefinition {
  key: ServiceTechCategoryKey;
  items: readonly string[];
}

export const webSitesiTechCategories: ServiceTechCategoryDefinition[] = [
  {
    key: "frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Sass & SCSS",
      "Framer Motion",
      "Redux",
      "Zustand",
      "Bootstrap",
      "Angular",
      "Vue",
    ],
  },
  {
    key: "ui",
    items: [
      "Shadcn",
      "Lightswind UI",
      "HeroUI",
      "Chakra UI",
      "Headless UI",
      "HyperUI",
      "Radix UI",
      "mapcn",
      "NextUI",
    ],
  },
  {
    key: "backend",
    items: ["Node.js", "REST API", "Express.js"],
  },
  {
    key: "database",
    items: ["MySQL", "Prisma", "MongoDB", "PostgreSQL", "MSSQL", "SQLite", "Railway"],
  },
  {
    key: "devops",
    items: ["Vercel", "ixirhost", "cPanel"],
  },
  {
    key: "analytics",
    items: [
      "Google Analytics",
      "Google Search",
      "Lighthouse",
      "PageSpeed Insights",
    ],
  },
  {
    key: "payment",
    items: ["Shopier", "PayTR", "iyzico", "Stripe"],
  },
  {
    key: "tools",
    items: ["Postman", "Google Maps", "Git", "GitHub"],
  },
];

export const uygulamaGelistirmeTechCategories: ServiceTechCategoryDefinition[] =
  [
    {
      key: "mobile",
      items: ["React Native", "Expo", "Flutter", "Kotlin", "Swift"],
    },
    {
      key: "frontend",
      items: ["TypeScript", "JavaScript", "React"],
    },
    {
      key: "ui",
      items: [
        "Zustand",
        "TanStack Query",
        "Framer Motion",
        "Redux",
        "NativeWind",
      ],
    },
    {
      key: "backend",
      items: ["Node.js", "REST API", "Express.js", "Firebase", "Supabase"],
    },
    {
      key: "database",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "SQLite", "Redis", "Railway"],
    },
    {
      key: "devops",
      items: ["Vercel", "Render", "Docker"],
    },
    {
      key: "payment",
      items: ["PayTR", "iyzico", "Stripe", "Shopier"],
    },
    {
      key: "store",
      items: ["App Store", "Google Play", "Android Studio", "Figma"],
    },
    {
      key: "tools",
      items: ["Git", "GitHub", "Postman", "Google Maps", "Sentry"],
    },
  ];

export const seoHizmetleriTechCategories: ServiceTechCategoryDefinition[] = [
  {
    key: "frontend",
    items: ["Next.js", "React", "TypeScript", "HTML", "Angular", "Vue"],
  },
  {
    key: "analytics",
    items: [
      "Google Analytics",
      "Google Search Console",
      "Google Search",
      "Google Tag Manager",
      "Lighthouse",
      "PageSpeed Insights",
      "Semrush",
      "Ahrefs",
      "Moz",
      "Google Looker Studio",
      "Meta Pixel",
      "Google Trends",
      "Screaming Frog SEO Spider",
    ],
  },
  {
    key: "tools",
    items: ["JSON-LD"],
  },
  {
    key: "devops",
    items: ["Vercel"],
  },
];

export const teknikDenetimTechCategories: ServiceTechCategoryDefinition[] = [
  {
    key: "analytics",
    items: [
      "Lighthouse",
      "PageSpeed Insights",
      "Google Search Console",
      "Google Analytics",
    ],
  },
  {
    key: "frontend",
    items: ["Next.js", "React", "TypeScript", "React Native", "Expo"],
  },
  {
    key: "backend",
    items: ["Node.js", "REST API", "Express.js"],
  },
  {
    key: "database",
    items: ["MySQL", "PostgreSQL", "Prisma", "MongoDB", "Railway"],
  },
  {
    key: "devops",
    items: ["Vercel", "GitHub", "Docker", "ixirhost", "cPanel"],
  },
  {
    key: "tools",
    items: ["Postman", "Git", "Swagger / OpenAPI"],
  },
];

export const bakimVeDestekTechCategories: ServiceTechCategoryDefinition[] = [
  {
    key: "frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "React Native",
      "Expo",
      "Tailwind CSS",
    ],
  },
  {
    key: "backend",
    items: ["Node.js", "REST API", "Express.js"],
  },
  {
    key: "database",
    items: ["MySQL", "PostgreSQL", "Prisma", "MongoDB", "Redis", "Railway"],
  },
  {
    key: "devops",
    items: ["Vercel", "ixirhost", "cPanel", "Docker"],
  },
  {
    key: "analytics",
    items: ["Google Analytics", "Lighthouse", "PageSpeed Insights"],
  },
  {
    key: "tools",
    items: ["Git", "GitHub", "Postman", "Upstash"],
  },
];

export const serviceTechCategories: Partial<
  Record<ServiceSlug, ServiceTechCategoryDefinition[]>
> = {
  "web-sitesi-gelistirme": webSitesiTechCategories,
  "web-sitesi-yenileme": webSitesiTechCategories,
  "uygulama-gelistirme": uygulamaGelistirmeTechCategories,
  "seo-hizmetleri": seoHizmetleriTechCategories,
  "teknik-denetim": teknikDenetimTechCategories,
  "bakim-ve-destek": bakimVeDestekTechCategories,
};

export const serviceTechCategoryMessageKeys: Record<
  ServiceTechCategoryKey,
  string
> = {
  mobile: "techCategoryMobile",
  frontend: "techCategoryFrontend",
  ui: "techCategoryUi",
  backend: "techCategoryBackend",
  database: "techCategoryDatabase",
  devops: "techCategoryDevops",
  analytics: "techCategoryAnalytics",
  payment: "techCategoryPayment",
  store: "techCategoryStore",
  tools: "techCategoryTools",
};

export function flattenTechCategories(
  categories: ServiceTechCategoryDefinition[],
): string[] {
  return categories.flatMap((category) => [...category.items]);
}
