import { SiteContainer } from "@/components/layout/SiteContainer";
import { ProcessIntro } from "./ProcessIntro";
import { ProcessTimeline } from "./ProcessTimeline";

interface ProcessSectionProps {
  className?: string;
}

export function ProcessSection({ className }: ProcessSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#071510] py-24 text-white md:py-28 ${className ?? ""}`}
      aria-labelledby="process-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-emerald-500/25 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 size-96 rounded-full bg-emerald-600/[0.07] blur-3xl"
      />
      <SiteContainer className="relative">
        <ProcessIntro />
        <ProcessTimeline className="mt-12 md:mt-14" variant="dark" />
      </SiteContainer>
    </section>
  );
}
