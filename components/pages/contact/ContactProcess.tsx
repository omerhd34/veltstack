import { LuClock } from "react-icons/lu";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface ContactProcessProps {
  responseTimeBadge: string;
  responseTimeValue: string;
  responseTimeNote: string;
  processTitle: string;
  processSteps: ProcessStep[];
  className?: string;
}

export function ContactProcess({
  responseTimeBadge,
  responseTimeValue,
  responseTimeNote,
  processTitle,
  processSteps,
  className,
}: ContactProcessProps) {
  return (
    <div className={className}>
      {/* Response time card */}
      <div className="flex items-center gap-4 rounded-2xl border border-brand-accent/20 bg-brand-accent/5 px-5 py-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent">
          <LuClock className="size-4.5" strokeWidth={1.75} aria-hidden />
        </div>
        <div>
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-brand-accent/80">
            {responseTimeBadge}
          </p>
          <p className="mt-0.5 text-base font-bold text-foreground">
            {responseTimeValue}
          </p>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
            {responseTimeNote}
          </p>
        </div>
      </div>

      {/* Process steps */}
      <div className="mt-6">
        <p className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-foreground/60">
          {processTitle}
        </p>
        <ol className="relative mt-4 space-y-0">
          <div
            aria-hidden
            className="absolute bottom-3 left-4 top-3 w-px bg-linear-to-b from-brand-accent/40 via-border to-transparent"
          />
          {processSteps.map((step, index) => (
            <li
              key={step.step}
              className={`relative pl-10 ${index < processSteps.length - 1 ? "pb-5" : ""}`}
            >
              <span
                aria-hidden
                className="absolute left-0 top-0.5 flex size-8 items-center justify-center rounded-full border border-brand-accent/30 bg-background text-[0.6875rem] font-bold text-brand-accent"
              >
                {step.step}
              </span>
              <p className="text-sm font-semibold text-foreground">{step.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
