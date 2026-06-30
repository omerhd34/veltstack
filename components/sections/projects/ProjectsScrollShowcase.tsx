import { getTranslations } from "next-intl/server";
import { ProjectsScrollCarousel } from "./ProjectsScrollCarousel";
import {
  projectCoverGradients,
  projectImageUrls,
} from "./project-detail-config";
import { homepageProjectItems } from "./project-items";

interface ProjectsScrollShowcaseProps {
  className?: string;
}

export async function ProjectsScrollShowcase({
  className,
}: ProjectsScrollShowcaseProps) {
  const t = await getTranslations("home");

  const projects = homepageProjectItems.map((project, index) => ({
    slug: project.slug,
    href: project.href,
    title: t(project.titleKey),
    description: t(project.descKey),
    tag: t(project.tagKey),
    image: projectImageUrls[project.slug],
    coverGradient: projectCoverGradients[project.slug],
    index: index + 1,
  }));

  return <ProjectsScrollCarousel className={className} projects={projects} />;
}
