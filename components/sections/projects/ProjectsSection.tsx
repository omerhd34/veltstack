import { SiteContainer } from "@/components/layout/SiteContainer";
import { ProjectsIntro } from "./ProjectsIntro";
import { ProjectsScrollShowcase } from "./ProjectsScrollShowcase";

interface ProjectsSectionProps {
  className?: string;
}

export function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#0C1F18] py-24 text-white md:py-32 ${className ?? ""}`}
      aria-labelledby="projects-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_0%_0%,rgb(58_107_82/0.16),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_100%_100%,rgb(16_80_60/0.1),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/30 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 size-72 rounded-full bg-brand-accent/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-1/4 size-64 rounded-full bg-emerald-600/6 blur-3xl"
      />

      <SiteContainer className="relative">
        <ProjectsIntro />
      </SiteContainer>

      <ProjectsScrollShowcase className="mt-4 md:mt-5" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-400/20 to-transparent"
      />
    </section>
  );
}
