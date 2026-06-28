import { SiteContainer } from "@/components/layout/SiteContainer";
import { ProcessTimeline } from "@/components/sections/process/ProcessTimeline";

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  className?: string;
}

export function ServiceProcess({
  title,
  subtitle,
  steps,
  className,
}: ServiceProcessProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#071510] py-24 text-white md:py-32 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent"
      />

      <SiteContainer className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-emerald-50/65">
            {subtitle}
          </p>
        </div>

        <ProcessTimeline
          className="mt-14 md:mt-16"
          variant="dark"
          steps={steps}
        />
      </SiteContainer>
    </section>
  );
}
