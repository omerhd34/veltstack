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
      className={`relative overflow-hidden bg-[#0D1210] py-24 text-white md:py-32 ${className ?? ""}`}
      aria-labelledby="why-me-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_15%_0%,rgb(58_107_82/0.16),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_100%,rgb(58_107_82/0.1),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-brand-accent/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 size-[500px] rounded-full bg-brand-accent/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 size-[400px] rounded-full bg-brand-accent/8 blur-3xl"
      />

      <SectionDecorIcon
        icon={TbApiApp}
        tone="on-dark-muted"
        className="right-6 top-28 rotate-12 xl:right-14"
      />
      <SectionDecorIcon
        icon={LuAtom}
        tone="on-dark"
        size="md"
        className="bottom-32 left-2 -rotate-6 xl:left-8"
      />
      <SectionDecorIcon
        icon={TbTopologyStar3}
        tone="on-dark-muted"
        className="left-4 top-20 rotate-12 xl:left-12"
      />
      <SectionDecorIcon
        icon={TbHexagon3D}
        tone="on-dark"
        size="sm"
        className="right-2 bottom-[14%] -rotate-12 xl:right-10"
      />

      <SiteContainer className="relative">
        <WhyMeIntro />
        <WhyMeGrid className="mt-14 md:mt-16" />
      </SiteContainer>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-brand-accent/40 to-transparent"
      />
    </section>
  );
}
