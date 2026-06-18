import { SiteContainer } from "@/components/layout/SiteContainer";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

interface AboutExperienceProps {
  badge: string;
  title: string;
  subtitle: string;
  items: ExperienceItem[];
  className?: string;
}

export function AboutExperience({
  badge,
  title,
  subtitle,
  items,
  className,
}: AboutExperienceProps) {
  return (
    <section
      id="about-experience"
      className={`scroll-mt-20 bg-background py-20 md:py-28 ${className ?? ""}`}
      aria-labelledby="about-experience-title"
    >
      <SiteContainer>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {badge}
          </span>
          <h2
            id="about-experience-title"
            className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight md:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </div>

        <ol className="relative mx-auto mt-14 max-w-2xl space-y-0">
          <div
            aria-hidden
            className="absolute bottom-4 left-4.25 top-4 w-px bg-linear-to-b from-brand-accent/50 via-border to-transparent"
          />

          {items.map((item, index) => (
            <li key={`${item.company}-${item.period}`} className="relative pl-12 pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute left-0 top-1 flex size-8.5 items-center justify-center rounded-full border-2 border-brand-accent/30 bg-background"
              >
                <span className="size-2.5 rounded-full bg-brand-accent" />
              </span>

              <span className="inline-block rounded-full border border-brand-accent/20 bg-brand-accent/8 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-brand-accent">
                {item.period}
              </span>

              <h3 className="mt-3 font-(family-name:--font-heading) text-lg font-bold tracking-tight">
                {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-accent">{item.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {index < items.length - 1 ? (
                <div aria-hidden className="mt-8 h-px w-full bg-border/60" />
              ) : null}
            </li>
          ))}
        </ol>
      </SiteContainer>
    </section>
  );
}
