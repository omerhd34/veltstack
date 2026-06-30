import type { OrbitConfig } from "@/components/lightswind/beam-circle";
import { cn } from "@/lib/utils";
import {
  getTechCategoriesForOrbit,
  isPrimaryTechItem,
  primaryTechNames,
} from "./tech-items";

const ACCENT_ORBIT = "rgba(0, 212, 170, 0.35)";
const ACCENT_ORBIT_SOFT = "rgba(0, 212, 170, 0.18)";

const primaryBeamIconColors: Record<(typeof primaryTechNames)[number], string> =
  {
    "Next.js": "text-[#0A0A0F]",
    "Tailwind CSS": "text-[#06B6D4]",
    TypeScript: "text-[#3178C6]",
    Redux: "text-[#764ABC]",
    "Node.js": "text-[#339933]",
    "REST API": "text-[#00B894]",
    MySQL: "text-[#00758F]",
    Prisma: "text-[#2D3748]",
    "React Native": "text-[#61DAFB]",
    Vercel: "text-[#0A0A0F]",
    Git: "text-[#F05032]",
    GitHub: "text-[#181717]",
    "Google Analytics": "text-[#E37400]",
    "PageSpeed Insights": "text-[#4285F4]",
    "Google Search Console": "text-[#458CF5]",
  };

export function buildTechOrbitItems(iconSize: number): OrbitConfig[] {
  const categories = getTechCategoriesForOrbit();
  const minRadius = 0.28;
  const maxRadius = 0.94;
  const radiusStep =
    categories.length > 1
      ? (maxRadius - minRadius) / (categories.length - 1)
      : 0;
  const primaryIconSize = iconSize + 8;

  return categories.map((category, ringIndex) => ({
    id: ringIndex + 1,
    radiusFactor: minRadius + radiusStep * ringIndex,
    speed: 10 + ringIndex * 2.5,
    iconSize,
    orbitColor: ringIndex % 2 === 0 ? ACCENT_ORBIT : ACCENT_ORBIT_SOFT,
    orbitThickness: 1,
    icons: category.items.map((item) => {
      const Icon = item.icon;
      const isPrimary = isPrimaryTechItem(item.name);
      const colorClass = isPrimary
        ? primaryBeamIconColors[item.name as keyof typeof primaryBeamIconColors]
        : "text-[#0A0A0F]/55";

      return {
        label: item.tooltip ?? item.name,
        emphasis: isPrimary,
        iconSize: isPrimary ? primaryIconSize : iconSize,
        icon: (
          <Icon
            className={cn(
              "size-full shrink-0",
              colorClass,
              isPrimary && "drop-shadow-[0_1px_1px_rgb(0_0_0/0.08)]",
            )}
            aria-hidden
          />
        ),
      };
    }),
  }));
}
