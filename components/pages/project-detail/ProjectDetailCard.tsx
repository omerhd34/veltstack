"use client";

import { useState } from "react";
import {
  LuBookOpen,
  LuChartBar,
  LuChevronUp,
  LuExternalLink,
  LuEye,
  LuRocket,
} from "react-icons/lu";
import type { ProjectSlug } from "@/components/sections/projects/project-items";
import { projectTechStacks } from "@/components/sections/projects/project-detail-config";
import { TechStackIcons } from "@/components/sections/projects/TechStackIcons";
import { cn } from "@/lib/utils";

export interface ProjectDetailCardProps {
  slug: ProjectSlug;
  title: string;
  summary: string;
  details: string;
  features: string[];
  metrics: { value: string; label: string }[];
  demoUrl?: string;
  labels: {
    demo: string;
    showMore: string;
    showLess: string;
    detailsTitle: string;
    featuresTitle: string;
    metricsTitle: string;
  };
  defaultExpanded?: boolean;
  className?: string;
}

export function ProjectDetailCard({
  slug,
  title,
  summary,
  details,
  features,
  metrics,
  demoUrl,
  labels,
  defaultExpanded = false,
  className,
}: ProjectDetailCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const techNames = projectTechStacks[slug];

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-emerald-900/50 bg-[#071510] text-white shadow-xl shadow-black/20",
        className,
      )}
    >
      <div className="border-b border-emerald-900/40 p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h2 className="font-(family-name:--font-heading) text-2xl font-bold tracking-tight md:text-3xl">
            {title}
          </h2>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-emerald-50/75 md:text-base">
          {summary}
        </p>

        <TechStackIcons names={techNames} variant="dark" className="mt-5" />

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-400"
            >
              <LuEye className="size-4" aria-hidden />
              {labels.demo}
              <LuExternalLink className="size-3.5 opacity-80" aria-hidden />
            </a>
          ) : null}

          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
            aria-expanded={expanded}
          >
            {expanded ? labels.showLess : labels.showMore}
            <LuChevronUp
              className={cn(
                "size-4 transition-transform duration-200",
                !expanded && "rotate-180",
              )}
              aria-hidden
            />
          </button>
        </div>
      </div>

      {expanded ? (
        <div className="space-y-8 p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <section>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <LuBookOpen className="size-4 text-blue-400" aria-hidden />
                {labels.detailsTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-emerald-50/70">
                {details}
              </p>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <LuRocket className="size-4 text-brand-accent" aria-hidden />
                {labels.featuresTitle}
              </h3>
              <ul className="mt-3 space-y-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 text-sm leading-relaxed text-emerald-50/75"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-sm bg-blue-400"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
              <LuChartBar className="size-4 text-emerald-400" aria-hidden />
              {labels.metricsTitle}
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={`${metric.label}-${metric.value}`}
                  className="rounded-xl bg-emerald-950/70 px-4 py-5 ring-1 ring-emerald-800/50"
                >
                  <p className="font-(family-name:--font-heading) text-xl font-bold text-emerald-400 md:text-2xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-emerald-50/70">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </article>
  );
}
