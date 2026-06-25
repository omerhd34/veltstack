"use client";

import { useState } from "react";
import type { IconType } from "react-icons";
import { LuArrowDown, LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { WhyMeCard } from "./WhyMeCard";
import { whyMeItems } from "./why-me-items";

export interface WhyMeFlowItem {
  titleKey: string;
  index: number;
  title: string;
  description: string;
}

interface WhyMeFlowGridProps {
  items: WhyMeFlowItem[];
  className?: string;
}

type FlowArrowDirection = "right" | "down" | "left";

const iconByTitleKey = Object.fromEntries(
  whyMeItems.map((item) => [item.titleKey, item.icon]),
) as Record<string, IconType>;

const flowArrows: {
  id: number;
  direction: FlowArrowDirection;
  className: string;
}[] = [
  { id: 0, direction: "right", className: "col-start-2 row-start-1" },
  { id: 1, direction: "down", className: "col-start-3 row-start-2 py-1" },
  { id: 2, direction: "left", className: "col-start-2 row-start-3" },
  { id: 3, direction: "down", className: "col-start-1 row-start-4 py-1" },
  { id: 4, direction: "right", className: "col-start-2 row-start-5" },
];

const cardSlots: {
  itemIndex: number;
  flowStep: number;
  className: string;
}[] = [
  { itemIndex: 0, flowStep: 0, className: "col-start-1 row-start-1" },
  { itemIndex: 1, flowStep: 1, className: "col-start-3 row-start-1" },
  { itemIndex: 2, flowStep: 2, className: "col-start-3 row-start-3" },
  { itemIndex: 3, flowStep: 3, className: "col-start-1 row-start-3" },
  { itemIndex: 4, flowStep: 4, className: "col-start-1 row-start-5" },
  { itemIndex: 5, flowStep: 5, className: "col-start-3 row-start-5" },
];

function WhyMeFlowArrow({
  direction,
  active,
  className,
}: {
  direction: FlowArrowDirection;
  active: boolean;
  className?: string;
}) {
  const Icon =
    direction === "down"
      ? LuArrowDown
      : direction === "left"
        ? LuArrowLeft
        : LuArrowRight;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center transition-colors duration-300 motion-reduce:transition-none",
        active ? "text-brand-accent" : "text-brand-accent/35",
        className,
      )}
      aria-hidden
    >
      <Icon
        className={cn(
          "size-5 transition-all duration-300 motion-reduce:transition-none",
          active && "scale-110",
        )}
        strokeWidth={active ? 2.5 : 2.25}
      />
    </div>
  );
}

export function WhyMeFlowGrid({ items, className }: WhyMeFlowGridProps) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "hidden lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:grid-rows-[auto_auto_auto_auto_auto] lg:items-stretch lg:gap-x-3 lg:gap-y-2",
        className,
      )}
      onMouseLeave={() => setHoveredStep(null)}
    >
      {cardSlots.map(({ itemIndex, flowStep, className: slotClassName }) => {
        const item = items[itemIndex];
        if (!item) return null;

        const icon = iconByTitleKey[item.titleKey];
        if (!icon) return null;

        return (
          <div
            key={item.titleKey}
            className={cn("h-full min-h-0", slotClassName)}
            onMouseEnter={() => setHoveredStep(flowStep)}
          >
            <WhyMeCard
              index={item.index}
              icon={icon}
              title={item.title}
              description={item.description}
            />
          </div>
        );
      })}

      {flowArrows.map((arrow) => (
        <WhyMeFlowArrow
          key={arrow.id}
          direction={arrow.direction}
          active={hoveredStep === arrow.id}
          className={arrow.className}
        />
      ))}
    </div>
  );
}
