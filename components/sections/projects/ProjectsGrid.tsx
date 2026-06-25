import { getTranslations } from "next-intl/server";
import { ProjectCard } from "./ProjectCard";
import {
  projectCoverGradients,
  projectImageUrls,
} from "./project-detail-config";
import { homepageProjectItems } from "./project-items";

interface ProjectsGridProps {
  className?: string;
}

export async function ProjectsGrid({ className }: ProjectsGridProps) {
  const t = await getTranslations("home");

  return (
    <div
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 ${className ?? ""}`}
    >
      {homepageProjectItems.map((project, i) => (
        <ProjectCard
          key={project.href}
          href={project.href}
          title={t(project.titleKey)}
          description={t(project.descKey)}
          tag={t(project.tagKey)}
          icon={project.icon}
          imageUrl={projectImageUrls[project.slug]}
          coverGradient={projectCoverGradients[project.slug]}
          index={i + 1}
          viewLabel={t("projectsViewLabel")}
          variant="grid"
        />
      ))}
    </div>
  );
}
