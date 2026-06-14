import { SiteContainer } from "@/components/layout/SiteContainer";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsIntro } from "./ProjectsIntro";

interface ProjectsSectionProps {
  className?: string;
}

export function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <section
      className={`bg-[#F8F9FA] py-24 md:py-28 ${className ?? ""}`}
      aria-labelledby="projects-section-title"
    >
      <SiteContainer>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <ProjectsIntro className="lg:col-span-4" />
          <ProjectsGrid className="lg:col-span-8" />
        </div>
      </SiteContainer>
    </section>
  );
}
