import { getTranslations } from "next-intl/server";
import { projectTechStacks } from "./project-detail-config";
import { ProjectsCarousel } from "./ProjectsCarousel";
import { homepageProjectItems } from "./project-items";

interface ProjectsSliderProps {
  className?: string;
}

export async function ProjectsSlider({ className }: ProjectsSliderProps) {
  const t = await getTranslations("home");

  const items = homepageProjectItems.map((project, index) => ({
    id: project.slug,
    href: project.href,
    title: t(project.titleKey),
    description: t(project.descKey),
    techStack: projectTechStacks[project.slug],
    index: index + 1,
  }));

  return (
    <ProjectsCarousel
      className={className}
      items={items}
      labels={{
        prev: t("projectsSliderPrev"),
        next: t("projectsSliderNext"),
        dot: t("projectsSliderDot"),
      }}
    />
  );
}
