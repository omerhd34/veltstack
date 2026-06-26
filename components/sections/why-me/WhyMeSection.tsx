import { LuAtom } from "react-icons/lu";
import { TbApiApp, TbHexagon3D, TbTopologyStar3 } from "react-icons/tb";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionDecorIcon } from "@/components/ui/SectionDecorIcon";
import { WhyMeGrid } from "./WhyMeGrid";
import { WhyMeIntro } from "./WhyMeIntro";

interface WhyMeSectionProps {
  className?: string;
}

export function WhyMeSection({ className }: WhyMeSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#E4F0EA] py-24 md:py-32 ${className ?? ""}`}
      aria-labelledby="why-me-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_100%_0%,rgb(58_107_82/0.11),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_0%_100%,rgb(58_107_82/0.09),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-accent/25 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 size-80 rounded-full bg-brand-accent/6 blur-3xl"
      />

      <SectionDecorIcon
        icon={TbApiApp}
        tone="accent-muted"
        className="right-6 top-28 rotate-12 xl:right-14"
      />
      <SectionDecorIcon
        icon={LuAtom}
        tone="accent"
        size="md"
        className="bottom-32 left-2 -rotate-6 xl:left-8"
      />
      <SectionDecorIcon
        icon={TbTopologyStar3}
        tone="accent-muted"
        className="left-4 top-20 rotate-12 xl:left-12"
      />
      <SectionDecorIcon
        icon={TbHexagon3D}
        tone="accent"
        size="sm"
        className="right-2 bottom-[14%] -rotate-12 xl:right-10"
      />

      <SiteContainer className="relative">
        <WhyMeIntro />
        <WhyMeGrid className="mt-14 md:mt-16" />
      </SiteContainer>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-accent/20 to-transparent"
      />
    </section>
  );
}
