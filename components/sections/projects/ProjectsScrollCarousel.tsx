"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/shadcn";
import {
  ScrollCarousel,
  type FeatureItem,
} from "@/components/lightswind/scroll-carousel";
import { cn } from "@/lib/utils";
import { projectItems, type ProjectSlug } from "./project-items";

const projectIconBySlug = Object.fromEntries(
  projectItems.map((item) => [item.slug, item.icon]),
);

export interface ProjectScrollItem {
  slug: ProjectSlug;
  href: string;
  title: string;
  description: string;
  tag: string;
  image?: string;
  coverGradient: string;
  index: number;
}

interface ProjectsScrollCarouselProps {
  projects: ProjectScrollItem[];
  className?: string;
}

function ProjectScrollCard({ project }: { project: ProjectScrollItem }) {
  const Icon = projectIconBySlug[project.slug];

  return (
    <Link
      href={project.href}
      className="group block h-full w-full"
    >
      <div className="relative h-[min(420px,58vh)] w-full overflow-hidden rounded-3xl border border-white/12 shadow-[0_24px_64px_rgb(0,0,0,0.35)] transition-shadow duration-300 group-hover:shadow-[0_28px_72px_rgb(0,0,0,0.42)] md:h-[min(460px,62vh)]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 bg-linear-to-br",
              project.coverGradient,
            )}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {Icon ? (
              <div className="flex h-full items-center justify-center">
                <Icon
                  className="size-20 text-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:text-white/35 motion-reduce:transition-none"
                  strokeWidth={1.25}
                  aria-hidden
                />
              </div>
            ) : null}
          </div>
        )}

        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10"
        />

        {project.tag ? (
          <Badge
            variant="secondary"
            className="absolute left-4 top-4 rounded-full border-0 bg-white/90 px-3 py-1 text-[0.6875rem] font-semibold text-[#0A0A0F] shadow-sm backdrop-blur-sm"
          >
            {project.tag}
          </Badge>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 p-6 text-center md:p-8">
          <h3 className="font-(family-name:--font-heading) text-2xl font-bold leading-snug tracking-tight text-white md:text-[1.65rem]">
            {project.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export function ProjectsScrollCarousel({
  projects,
  className,
}: ProjectsScrollCarouselProps) {
  const t = useTranslations("home");

  const projectBySlug = Object.fromEntries(
    projects.map((project) => [project.slug, project]),
  );

  const features: FeatureItem[] = projects.map((project) => ({
    id: project.slug,
    title: project.title,
    description: project.description,
    image: project.image,
    tag: project.tag,
    href: project.href,
    index: project.index,
    coverGradient: project.coverGradient,
  }));

  return (
    <ScrollCarousel
      className={className}
      features={features}
      hideSecondRow
      interactionMode="drag"
      alignStart
      columnsPerView={2}
      loop
      navLabels={{
        prev: t("projectsSliderPrev"),
        next: t("projectsSliderNext"),
      }}
      containerClassName="pt-0 pb-4 md:pb-6"
      navPlacement="outside"
      progressStyle="pages"
      renderFeature={(feature) => {
        const project = projectBySlug[feature.id as ProjectSlug];
        if (!project) return null;
        return <ProjectScrollCard project={project} />;
      }}
    />
  );
}
