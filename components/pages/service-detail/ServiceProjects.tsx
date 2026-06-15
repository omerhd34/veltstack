import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import {
  projectCoverGradients,
  projectImageUrls,
  projectTechStacks,
} from "@/components/sections/projects/project-detail-config";
import { projectItems } from "@/components/sections/projects/project-items";
import type { ProjectSlug } from "@/components/sections/projects/project-items";

interface ServiceProjectsProps {
  title: string;
  subtitle: string;
  projectSlugs: ProjectSlug[];
  className?: string;
}

export async function ServiceProjects({
  title,
  subtitle,
  projectSlugs,
  className,
}: ServiceProjectsProps) {
  const tHome = await getTranslations("home");
  const projects = projectItems.filter((item) =>
    projectSlugs.includes(item.slug),
  );

  if (!projects.length) return null;

  return (
    <section className={`bg-[#F4F8F5] py-24 md:py-32 ${className ?? ""}`}>
      <SiteContainer className="px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-[#0A0A0F] md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              href={project.href}
              title={tHome(project.titleKey)}
              description={tHome(project.descKey)}
              tag={tHome(project.tagKey)}
              icon={project.icon}
              imageUrl={projectImageUrls[project.slug]}
              coverGradient={projectCoverGradients[project.slug]}
              techStack={projectTechStacks[project.slug]}
              viewLabel={tHome("projectsViewLabel")}
            />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
