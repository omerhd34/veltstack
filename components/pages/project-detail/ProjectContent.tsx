import {
  LuCircleCheck,
  LuFileText,
  LuLightbulb,
  LuTarget,
} from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { cn } from "@/lib/utils";

interface ProjectContentProps {
  badge: string;
  challengeTitle: string;
  challengeText: string;
  solutionTitle: string;
  solutionText: string;
  detailsTitle: string;
  details: string;
  className?: string;
}

export function ProjectContent({
  badge,
  challengeTitle,
  challengeText,
  solutionTitle,
  solutionText,
  detailsTitle,
  details,
  className,
}: ProjectContentProps) {
  return (
    <section className={cn("bg-background py-24 md:py-32", className)}>
      <SiteContainer className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            <LuCircleCheck className="size-3.5" aria-hidden />
            {badge}
          </span>
        </div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-6">
          <article className="rounded-2xl border border-border/80 bg-card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                <LuTarget className="size-5" aria-hidden />
              </span>
              <h2 className="font-(family-name:--font-heading) text-xl font-bold tracking-tight text-[#0A0A0F]">
                {challengeTitle}
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {challengeText}
            </p>
          </article>

          <article className="rounded-2xl border border-border/80 bg-card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                <LuLightbulb className="size-5" aria-hidden />
              </span>
              <h2 className="font-(family-name:--font-heading) text-xl font-bold tracking-tight text-[#0A0A0F]">
                {solutionTitle}
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {solutionText}
            </p>
          </article>

          <article className="rounded-2xl border border-border/80 bg-card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                <LuFileText className="size-5" aria-hidden />
              </span>
              <h3 className="font-(family-name:--font-heading) text-xl font-bold tracking-tight text-[#0A0A0F]">
                {detailsTitle}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {details}
            </p>
          </article>
        </div>
      </SiteContainer>
    </section>
  );
}
