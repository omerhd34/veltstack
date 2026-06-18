import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import {
  projectCoverGradients,
  projectImageUrls,
} from "@/components/sections/projects/project-detail-config";
import { projectItems } from "@/components/sections/projects/project-items";
import { ProjectShowcaseCard } from "./ProjectShowcaseCard";

interface ProjectsShowcaseProps {
  className?: string;
}

export async function ProjectsShowcase({ className }: ProjectsShowcaseProps) {
  const tPage = await getTranslations("projectsPage");
  const tHome = await getTranslations("home");

  const [featured, ...rest] = projectItems;

  return (
    <section
      id="projects-showcase"
      className={`relative overflow-hidden bg-[#F8F9FA] py-24 md:py-32 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-1/2 w-1/3 rounded-bl-[100px] bg-brand-accent/4"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-brand-accent/3 blur-3xl"
      />

      <SiteContainer className="relative">
        <header className="max-w-2xl">
          <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {tPage("showcaseBadge")}
          </span>
          <h2 className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-[#0A0A0F] md:text-4xl lg:text-[2.625rem]">
            {tPage("showcaseTitle")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/62 md:text-lg">
            {tPage("showcaseSubtitle")}
          </p>
        </header>

        <div className="mt-14 space-y-6">
          <ProjectShowcaseCard
            index={1}
            href={featured.href}
            title={tHome(featured.titleKey)}
            description={tHome(featured.descKey)}
            tag={tHome(featured.tagKey)}
            icon={featured.icon}
            imageUrl={projectImageUrls[featured.slug]}
            coverGradient={projectCoverGradients[featured.slug]}
            viewLabel={tPage("viewLabel")}
            featuredLabel={tPage("featuredLabel")}
            featured
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <ProjectShowcaseCard
                key={project.slug}
                index={i + 2}
                href={project.href}
                title={tHome(project.titleKey)}
                description={tHome(project.descKey)}
                tag={tHome(project.tagKey)}
                icon={project.icon}
                imageUrl={projectImageUrls[project.slug]}
                coverGradient={projectCoverGradients[project.slug]}
                viewLabel={tPage("viewLabel")}
              />
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
