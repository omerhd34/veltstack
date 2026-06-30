"use client";

import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import type { TimelineEvent } from "@/components/lightswind/scroll-timeline";
import { whyMeItems } from "./why-me-items";

export interface WhyMeTimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  titleKey: string;
}

interface WhyMeScrollTimelineProps {
  items: WhyMeTimelineItem[];
  className?: string;
}

const iconByTitleKey = Object.fromEntries(
  whyMeItems.map((item) => [item.titleKey, item.icon]),
);

export function WhyMeScrollTimeline({
  items,
  className,
}: WhyMeScrollTimelineProps) {
  const events: TimelineEvent[] = items.map((item) => {
    const Icon = iconByTitleKey[item.titleKey];

    return {
      id: item.id,
      year: item.year,
      title: item.title,
      description: item.description,
      icon: Icon ? (
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/20 transition-all duration-500 group-hover:scale-105 group-hover:bg-brand-accent group-hover:text-brand-accent-foreground group-hover:ring-brand-accent/50">
          <Icon className="size-4" strokeWidth={1.75} aria-hidden />
        </span>
      ) : undefined,
    };
  });

  return (
    <ScrollTimeline
      events={events}
      className={className}
      cardAlignment="alternating"
      cardVariant="elevated"
      cardEffect="shadow"
      revealAnimation="slide"
      animationOrder="staggered"
      dateFormat="badge"
      progressIndicator
      parallaxIntensity={0}
      lineColor="bg-brand-accent/20"
      connectorStyle="line"
      progressLineWidth={2}
    />
  );
}
