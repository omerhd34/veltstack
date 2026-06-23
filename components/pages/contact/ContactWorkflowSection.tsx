import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn } from "@/lib/utils";
import { ContactSectionBadge } from "./ContactInfo";

interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
  timing: string;
}

interface ContactWorkflowSectionProps {
  badge: string;
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  steps: WorkflowStep[];
  className?: string;
}

const slowTransition =
  "transition-all duration-1000 ease-out motion-reduce:transition-none";

export function ContactWorkflowSection({
  badge,
  titleLead,
  titleAccent,
  subtitle,
  steps,
  className,
}: ContactWorkflowSectionProps) {
  return (
    <div className={className}>
      <div className="mx-auto max-w-3xl text-center">
        <ContactSectionBadge badge={badge} />

        <h2 className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {titleLead}
          <br />
          <span className="font-serif font-normal italic text-foreground/85">
            {titleAccent}
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
      </div>

      <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
        <div
          aria-hidden
          className="pointer-events-none absolute top-5 right-[calc(25%-16rem)] left-5 hidden h-px bg-border lg:block"
        />

        {steps.map((item) => (
          <li
            key={item.step}
            className="group relative flex h-full flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span
              aria-hidden
              className={cn(
                "relative z-10 flex size-10 shrink-0 items-center justify-center overflow-visible rounded-full",
                "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
                slowTransition,
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-[-3px] rounded-full bg-background",
                  "group-hover:bg-brand-accent group-hover:shadow-[0_4px_14px_rgb(58_107_82/0.28)]",
                  slowTransition,
                )}
              />
              <BorderTrace loop trigger="hover" durationSec={2.5} radius={20} />
              <span
                className={cn(
                  "relative z-10 text-sm font-bold text-muted-foreground group-hover:text-white",
                  slowTransition,
                )}
              >
                {item.step}
              </span>
            </span>

            <div className="mt-5 flex flex-1 flex-col">
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
            <span className="mt-4 inline-flex rounded-full border border-border/70 bg-muted/30 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {item.timing}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
