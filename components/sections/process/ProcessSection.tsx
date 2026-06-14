import { SiteContainer } from "@/components/layout/SiteContainer";
import { ProcessIntro } from "./ProcessIntro";
import { ProcessTimeline } from "./ProcessTimeline";

interface ProcessSectionProps {
  className?: string;
}

export function ProcessSection({ className }: ProcessSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#071510] py-24 text-white md:py-32 ${className ?? ""}`}
      aria-labelledby="process-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 size-[600px] rounded-full bg-emerald-600/5 blur-[80px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-1/4 size-[500px] rounded-full bg-emerald-800/6 blur-[80px]"
      />

      <SiteContainer className="relative">
        <ProcessIntro />
        <ProcessTimeline className="mt-14 md:mt-16" variant="dark" />
      </SiteContainer>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent"
      />
    </section>
  );
}
