"use client";

import { useTranslations } from "next-intl";
import ThreeDCarousel from "@/components/lightswind/3d-carousel";
import { ProjectCard } from "./ProjectCard";
import { projectItems, type ProjectSlug } from "./project-items";

const projectIconBySlug = Object.fromEntries(
  projectItems.map((item) => [item.slug, item.icon]),
);

export interface ProjectSlideItem {
  slug: ProjectSlug;
  href: string;
  title: string;
  description: string;
  tag: string;
  index: number;
  imageUrl?: string;
  coverGradient?: string;
}

interface ProjectsThreeDCarouselProps {
  projects: ProjectSlideItem[];
  className?: string;
}

export function ProjectsThreeDCarousel({
  projects,
  className,
}: ProjectsThreeDCarouselProps) {
  const t = useTranslations("home");

  const items = projects.map((project) => ({
    ...project,
    id: project.slug,
  }));

  return (
    <ThreeDCarousel
      className={className}
      viewportClassName="h-[min(480px,72vh)] min-h-[420px] sm:h-[500px]"
      items={items}
      rotateInterval={12000}
      getSlideLabel={(project) => project.title}
      formatSlideAnnouncement={(label, current, total) =>
        t("projectsSliderStatus", { label, current, total })
      }
      formatActivateLabel={(title) => t("projectsSliderActivate", { title })}
      labels={{
        prev: t("projectsSliderPrev"),
        next: t("projectsSliderNext"),
        dot: t("projectsSliderDot"),
        region: t("projectsSliderRegion"),
      }}
      renderItem={(
        project,
        _index,
        { isActive, onActivate, activateLabel },
      ) => (
        <ProjectCard
          variant="slide"
          href={project.href}
          title={project.title}
          description={project.description}
          tag={project.tag}
          icon={projectIconBySlug[project.slug]}
          imageUrl={project.imageUrl}
          coverGradient={project.coverGradient}
          index={project.index}
          isActive={isActive}
          onActivate={onActivate}
          activateLabel={activateLabel}
        />
      )}
    />
  );
}
