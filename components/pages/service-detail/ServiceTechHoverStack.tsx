"use client";

import { techItems } from "@/components/sections/tech-marquee/tech-items";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/shadcn/hover-card";
import { techIconColors } from "@/components/pages/service-detail/service-tech-primary";
import { cn } from "@/lib/utils";
import type { TechItem } from "@/components/sections/tech-marquee/tech-items";

export interface ServiceTechCategoryGroup {
  label: string;
  items: string[];
}

interface ServiceTechHoverStackProps {
  names: string[];
  descriptions: Record<string, string>;
  primaryTech?: readonly string[];
  categories?: ServiceTechCategoryGroup[];
  className?: string;
}

function TechIconButton({
  tech,
  description,
  isPrimary,
}: {
  tech: TechItem;
  description: string;
  isPrimary: boolean;
}) {
  const Icon = tech.icon;
  const iconColor = techIconColors[tech.name] ?? "text-foreground/70";

  return (
    <HoverCard openDelay={150} closeDelay={100}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          className={cn(
            "grid size-11 min-h-11 min-w-11 shrink-0 cursor-default place-items-center rounded-lg leading-none transition-all duration-200 hover:scale-105 sm:size-12 sm:min-h-12 sm:min-w-12",
            isPrimary
              ? "bg-white ring-1 ring-brand-accent/45 shadow-[0_0_18px_rgb(58_107_82/0.16)] hover:ring-brand-accent/60 hover:shadow-[0_0_22px_rgb(58_107_82/0.24)]"
              : "bg-muted/60 ring-1 ring-border/70 hover:bg-muted/80 hover:ring-border",
          )}
          aria-label={tech.name}
        >
          <Icon
            className={cn(
              "block size-5 shrink-0 sm:size-6",
              !tech.brandIcon && iconColor,
              !isPrimary && !tech.brandIcon && "opacity-45 saturate-[0.4]",
              !isPrimary && tech.brandIcon && "opacity-60",
            )}
            aria-hidden
          />
        </button>
      </HoverCardTrigger>
      <HoverCardContent side="top" className="w-64">
        <p className="font-(family-name:--font-heading) text-sm font-semibold text-[#0A0A0F]">
          {tech.name}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </HoverCardContent>
    </HoverCard>
  );
}

function resolveTechItems(names: string[]): TechItem[] {
  return names
    .map((name) => techItems.find((item) => item.name === name))
    .filter((tech): tech is TechItem => Boolean(tech));
}

function sortItemsByPrimary(
  items: string[],
  primaryTech: readonly string[],
): string[] {
  const primaryOrder = new Map(primaryTech.map((name, index) => [name, index]));

  return [...items].sort((a, b) => {
    const aPrimary = primaryOrder.has(a);
    const bPrimary = primaryOrder.has(b);

    if (aPrimary && bPrimary) {
      return primaryOrder.get(a)! - primaryOrder.get(b)!;
    }
    if (aPrimary) return -1;
    if (bPrimary) return 1;
    return items.indexOf(a) - items.indexOf(b);
  });
}

export function ServiceTechHoverStack({
  names,
  descriptions,
  primaryTech = [],
  categories,
  className,
}: ServiceTechHoverStackProps) {
  const primarySet = new Set(primaryTech);

  if (categories?.length) {
    return (
      <div className={cn("mx-auto mt-12 max-w-6xl space-y-6 md:space-y-7", className)}>
        {categories.map((category) => {
          const sortedItems = sortItemsByPrimary(category.items, primaryTech);
          const icons = resolveTechItems(sortedItems);
          if (icons.length === 0) return null;

          return (
            <div
              key={category.label}
              className="flex items-center gap-4 sm:gap-6 md:gap-8"
            >
              <h3 className="w-28 shrink-0 text-left font-(family-name:--font-heading) text-xs font-bold uppercase leading-snug tracking-[0.16em] text-brand-accent/80 sm:w-36 md:w-40">
                {category.label}
              </h3>
              <div className="flex min-w-0 flex-1 flex-wrap justify-end gap-3 sm:gap-3.5">
                {icons.map((tech) => (
                  <TechIconButton
                    key={tech.name}
                    tech={tech}
                    description={
                      descriptions[tech.name] ?? tech.tooltip ?? tech.name
                    }
                    isPrimary={primarySet.has(tech.name)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  const primaryOrder = new Map(primaryTech.map((name, index) => [name, index]));
  const primaryIcons = primaryTech
    .map((name) => techItems.find((item) => item.name === name))
    .filter((tech): tech is TechItem => Boolean(tech));

  const secondaryIcons = names
    .filter((name) => !primaryOrder.has(name))
    .map((name) => techItems.find((item) => item.name === name))
    .filter((tech): tech is TechItem => Boolean(tech));

  return (
    <div className={cn("mx-auto mt-12 max-w-6xl space-y-5", className)}>
      {primaryIcons.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-3 sm:gap-3.5">
          {primaryIcons.map((tech) => (
            <TechIconButton
              key={tech.name}
              tech={tech}
              description={
                descriptions[tech.name] ?? tech.tooltip ?? tech.name
              }
              isPrimary
            />
          ))}
        </div>
      ) : null}

      {secondaryIcons.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-3 sm:gap-3.5">
          {secondaryIcons.map((tech) => (
            <TechIconButton
              key={tech.name}
              tech={tech}
              description={
                descriptions[tech.name] ?? tech.tooltip ?? tech.name
              }
              isPrimary={false}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
