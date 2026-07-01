"use client";

import { useState } from "react";
import { LuCircleCheck } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { cn, truncateToSentences } from "@/lib/utils";
import { FeatureShowcase, ServiceFeatureCard } from "./ServiceFeatureCard";

interface ServiceFeaturesProps {
  badge: string;
  title: string;
  subtitle: string;
  detailLabel: string;
  features: { title: string; description: string }[];
  className?: string;
}

export function ServiceFeatures({
  badge,
  title,
  subtitle,
  detailLabel,
  features,
  className,
}: ServiceFeaturesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex] ?? features[0];

  return (
    <section
      id="service-features"
      className={cn(
        "relative scroll-mt-20 overflow-hidden bg-[#FAFBFA] py-24 md:py-32",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,rgb(58_107_82/0.06),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(58 107 82 / 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <SiteContainer className="relative">
        <header>
          <SectionBadge variant="accent-card">
            <LuCircleCheck className="size-3.5" aria-hidden />
            {badge}
          </SectionBadge>

          <h2 className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-[#0A0A0F] md:text-4xl lg:text-[2.625rem] lg:leading-[1.12]">
            {title}
          </h2>
          <p className="mt-5 w-full text-base leading-[1.85] text-muted-foreground">
            {subtitle}
          </p>
        </header>

        <div className="mt-10 hidden items-stretch gap-16 lg:grid lg:grid-cols-2 xl:gap-24">
          <ul
            className="flex h-full flex-col gap-1.5"
            role="tablist"
          >
            {features.map((feature, index) => {
              const isActive = activeIndex === index;

              return (
                <li
                  key={feature.title}
                  className="flex min-h-0 flex-1"
                  role="presentation"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "group flex h-full w-full items-center gap-4 rounded-2xl px-5 py-3 text-left transition-colors duration-300",
                      isActive
                        ? "bg-brand-accent text-white shadow-[0_8px_28px_rgb(58_107_82/0.28)]"
                        : "text-[#0A0A0F] hover:bg-brand-accent/6",
                    )}
                  >
                    <span
                      className={cn(
                        "font-(family-name:--font-heading) text-sm font-bold tabular-nums transition-colors duration-300",
                        isActive
                          ? "text-emerald-200/80"
                          : "text-muted-foreground/50",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-(family-name:--font-heading) text-[0.9375rem] font-semibold leading-snug">
                      {feature.title}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "size-1.5 shrink-0 rounded-full transition-all duration-300",
                        isActive
                          ? "scale-100 bg-emerald-300"
                          : "scale-0 bg-transparent",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="h-full min-h-128">
            {activeFeature ? (
              <FeatureShowcase
                key={activeFeature.title}
                title={activeFeature.title}
                description={activeFeature.description}
                index={activeIndex}
                total={features.length}
                detailLabel={detailLabel}
              />
            ) : null}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
          {features.map((feature, index) => (
            <ServiceFeatureCard
              key={feature.title}
              title={feature.title}
              description={truncateToSentences(feature.description, 2)}
              index={index}
              detailLabel={detailLabel}
            />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
