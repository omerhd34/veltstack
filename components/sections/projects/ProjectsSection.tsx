import { SiteContainer } from "@/components/layout/SiteContainer";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsIntro } from "./ProjectsIntro";

interface ProjectsSectionProps {
  className?: string;
}

export function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#F8F9FA] py-24 md:py-32 ${className ?? ""}`}
      aria-labelledby="projects-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-1/2 w-1/3 rounded-br-[100px] bg-brand-accent/4"
      />
      <SiteContainer className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <ProjectsIntro className="lg:col-span-4" />
          <ProjectsGrid className="lg:col-span-8" />
        </div>
      </SiteContainer>
    </section>
  );
}
