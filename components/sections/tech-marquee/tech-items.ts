import type { IconType } from "react-icons";
import {
  SiAndroidstudio,
  SiAngular,
  SiAppstore,
  SiBootstrap,
  SiCpanel,
  SiCss,
  SiDocker,
  SiExpress,
  SiExpo,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiChakraui,
  SiHeadlessui,
  SiRadixui,
  SiHeroui,
  SiAntdesign,
  SiReactquery,
  SiGooglemaps,
  SiGit,
  SiGithub,
  SiGoogleanalytics,
  SiGoogleplay,
  SiGoogletagmanager,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiLighthouse,
  SiLooker,
  SiKubernetes,
  SiPagespeedinsights,
  SiSemrush,
  SiSentry,
  SiMongodb,
  SiMeta,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRedis,
  SiResend,
  SiRailway,
  SiReact,
  SiRedux,
  SiRender,
  SiSass,
  SiShadcnui,
  SiSqlite,
  SiStripe,
  SiSupabase,
  SiSwagger,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiUpstash,
  SiVercel,
  SiZod,
  SiVuedotjs,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import {
  TbBrandReactNative,
  TbApi,
  TbCloudComputing,
  TbComponents,
  TbMapPin,
  TbTools,
} from "react-icons/tb";
import { ShopierIcon } from "./ShopierIcon";
import { PayTRIcon } from "./PayTRIcon";
import { IyzicoIcon } from "./IyzicoIcon";
import { IxirhostIcon } from "./IxirhostIcon";
import { createBrandImageIcon } from "./createBrandImageIcon";
import { ZustandIcon } from "./ZustandIcon";
import { createUiTextIcon } from "./UiTextIcon";

const LightswindIcon = createUiTextIcon({ label: "LW", fontSize: 8 });
const HyperUIIcon = createUiTextIcon({ label: "UI", fontSize: 9 });
const NextUIIcon = createUiTextIcon({ label: "NUI", fontSize: 7 });
const NativeWindIcon = createUiTextIcon({ label: "NW", fontSize: 8 });
const AhrefsIcon = createBrandImageIcon("/images/ahrefs.jpeg");
const MozIcon = createBrandImageIcon("/images/tech/moz.png");
const ScreamingFrogIcon = createBrandImageIcon("/images/tech/screamingfrog.png");
const GoogleSearchConsoleIcon = createBrandImageIcon(
  "/images/tech/googlesearchconsole.png",
);
const GoogleSearchIcon = createBrandImageIcon("/images/tech/googlesearch.png");
const GoogleTrendsIcon = createBrandImageIcon("/images/tech/googletrends.png");
const JsonLdIcon = createBrandImageIcon("/images/tech/jsonld.png");

export interface TechItem {
  name: string;
  icon: IconType;
  tooltip?: string;
  brandIcon?: boolean;
}

export const techItems: TechItem[] = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "Sass & SCSS", icon: SiSass },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Chakra UI", icon: SiChakraui },
  { name: "Ant Design", icon: SiAntdesign },
  { name: "TanStack Query", icon: SiReactquery },
  { name: "Google Maps", icon: SiGooglemaps },
  { name: "Tools", icon: TbTools, tooltip: "Geliştirme ve bakım araçları" },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Angular", icon: SiAngular },
  { name: "Vue", icon: SiVuedotjs },
  { name: "Redux", icon: SiRedux },
  { name: "Zustand", icon: ZustandIcon },
  { name: "Shadcn", icon: SiShadcnui },
  { name: "Lightswind UI", icon: LightswindIcon },
  { name: "HeroUI", icon: SiHeroui },
  { name: "Headless UI", icon: SiHeadlessui },
  { name: "HyperUI", icon: HyperUIIcon },
  { name: "Radix UI", icon: SiRadixui },
  { name: "mapcn", icon: TbMapPin },
  { name: "NextUI", icon: NextUIIcon },
  {
    name: "UI",
    icon: TbComponents,
    tooltip: "UI(Shadcn, Material, ...)",
  },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Flutter", icon: SiFlutter },
  { name: "Expo", icon: SiExpo },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Swift", icon: SiSwift },
  { name: "NativeWind", icon: NativeWindIcon },
  { name: "Firebase", icon: SiFirebase },
  { name: "Supabase", icon: SiSupabase },
  { name: "Sentry", icon: SiSentry },
  { name: "Android Studio", icon: SiAndroidstudio },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "REST API", icon: TbApi },
  { name: "Prisma", icon: SiPrisma },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MSSQL", icon: DiMsqlServer },
  { name: "SQLite", icon: SiSqlite },
  { name: "Vercel", icon: SiVercel },
  { name: "ixirhost", icon: IxirhostIcon, brandIcon: true },
  { name: "Railway", icon: SiRailway },
  { name: "Shopier", icon: ShopierIcon },
  { name: "PayTR", icon: PayTRIcon },
  { name: "iyzico", icon: IyzicoIcon },
  { name: "Stripe", icon: SiStripe },
  { name: "CollectAPI", icon: TbCloudComputing },
  { name: "Render", icon: SiRender },
  { name: "cPanel", icon: SiCpanel },
  { name: "Figma", icon: SiFigma },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Redis", icon: SiRedis },
  { name: "Upstash", icon: SiUpstash },
  { name: "Resend", icon: SiResend },
  { name: "Zod", icon: SiZod },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Swagger / OpenAPI", icon: SiSwagger },
  { name: "Google Search", icon: GoogleSearchIcon, brandIcon: true },
  { name: "Google Search Console", icon: GoogleSearchConsoleIcon, brandIcon: true },
  { name: "Google Analytics", icon: SiGoogleanalytics },
  { name: "Lighthouse", icon: SiLighthouse },
  { name: "PageSpeed Insights", icon: SiPagespeedinsights },
  { name: "Google Tag Manager", icon: SiGoogletagmanager },
  { name: "Semrush", icon: SiSemrush },
  { name: "Ahrefs", icon: AhrefsIcon, brandIcon: true },
  { name: "Moz", icon: MozIcon, brandIcon: true },
  { name: "Google Looker Studio", icon: SiLooker },
  { name: "Meta Pixel", icon: SiMeta },
  { name: "Google Trends", icon: GoogleTrendsIcon, brandIcon: true },
  { name: "Screaming Frog SEO Spider", icon: ScreamingFrogIcon, brandIcon: true },
  { name: "JSON-LD", icon: JsonLdIcon, brandIcon: true },
  { name: "App Store", icon: SiAppstore },
  { name: "Google Play", icon: SiGoogleplay },
];

export const techItemCount = techItems.length;
