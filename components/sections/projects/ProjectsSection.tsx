import { LuCodeXml } from "react-icons/lu";
import { TbBrandReactNative, TbMathFunction, TbTopologyRing2 } from "react-icons/tb";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionDecorIcon } from "@/components/ui/SectionDecorIcon";
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,rgb(58_107_82/0.07),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_100%_100%,rgb(58_107_82/0.06),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-brand-accent/25 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 size-72 rounded-full bg-brand-accent/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-1/4 size-64 rounded-full bg-brand-accent/4 blur-3xl"
      />

      <SectionDecorIcon
        icon={LuCodeXml}
        tone="accent-muted"
        className="left-2 top-[30%] -rotate-12 xl:left-8"
      />
      <SectionDecorIcon
        icon={TbMathFunction}
        tone="accent"
        size="md"
        className="right-0 bottom-[28%] rotate-6 xl:right-6"
      />
      <SectionDecorIcon
        icon={TbBrandReactNative}
        tone="accent-muted"
        className="right-4 top-[14%] -rotate-6 xl:right-12"
      />
      <SectionDecorIcon
        icon={TbTopologyRing2}
        tone="accent"
        size="sm"
        className="bottom-[12%] left-6 rotate-12 xl:left-14"
      />

      <SiteContainer className="relative">
        <ProjectsIntro />
        <ProjectsGrid className="mt-12 md:mt-14" />
      </SiteContainer>
    </section>
  );
}
