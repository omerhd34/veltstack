import { LuCompass, LuLayers, LuTrendingUp } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";

const approachIcons = [LuCompass, LuLayers, LuTrendingUp] as const;

interface ProjectsApproachProps {
  badge: string;
  title: string;
  subtitle: string;
  items: { title: string; description: string }[];
  className?: string;
}

export function ProjectsApproach({
  badge,
  title,
  subtitle,
  items,
  className,
}: ProjectsApproachProps) {
  return (
    <section className={`bg-background py-20 md:py-28 ${className ?? ""}`}>
      <SiteContainer>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {badge}
          </span>
          <h2 className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = approachIcons[index] ?? LuCompass;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-[0_16px_40px_rgb(58_107_82/0.08)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-brand-accent/5 transition-transform duration-500 group-hover:scale-150"
                />

                <div className="relative flex size-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </div>

                <h3 className="relative mt-5 font-(family-name:--font-heading) text-lg font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <span
                  aria-hidden
                  className="absolute bottom-4 right-5 font-(family-name:--font-heading) text-4xl font-bold text-brand-accent/8"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}
