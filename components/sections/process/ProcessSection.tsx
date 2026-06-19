import { SiteContainer } from "@/components/layout/SiteContainer";
import { ProcessIntro } from "./ProcessIntro";
import { ProcessTimeline } from "./ProcessTimeline";

interface ProcessSectionProps {
  className?: string;
}

export function ProcessSection({ className }: ProcessSectionProps) {
  return (
    <section
      className={`relative overflow-hidden py-24 text-white md:py-32 ${className ?? ""}`}
      aria-labelledby="process-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#030b08_0%,#061812_42%,#0a2219_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgb(58_107_82/0.28),transparent_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_0%_100%,rgb(16_80_60/0.14),transparent_62%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_100%_20%,rgb(52_120_90/0.1),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_at_center,black_15%,transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/35 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 size-[640px] rounded-full bg-emerald-500/8 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-1/4 size-[520px] rounded-full bg-teal-600/6 blur-[90px]"
      />

      <SiteContainer className="relative">
        <ProcessIntro />
        <ProcessTimeline className="mt-14 md:mt-16" variant="dark" />
      </SiteContainer>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-400/25 to-transparent"
      />
    </section>
  );
}
