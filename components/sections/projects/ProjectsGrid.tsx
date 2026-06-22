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
    <div className={`grid gap-5 md:grid-cols-2 ${className ?? ""}`}>
      {homepageProjectItems.map((project) => (
        <ProjectCard
          key={project.href}
          href={project.href}
          title={t(project.titleKey)}
          description={t(project.descKey)}
          icon={project.icon}
          imageUrl={projectImageUrls[project.slug]}
          coverGradient={projectCoverGradients[project.slug]}
        />
      ))}
    </div>
  );
}
