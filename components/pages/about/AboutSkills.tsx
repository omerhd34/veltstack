import { TechStackIcons } from "@/components/sections/projects/TechStackIcons";
import { SiteContainer } from "@/components/layout/SiteContainer";

interface SkillGroup {
  label: string;
  tech: string[];
}

interface AboutSkillsProps {
  badge: string;
  title: string;
  subtitle: string;
  groups: SkillGroup[];
  className?: string;
}

export function AboutSkills({
  badge,
  title,
  subtitle,
  groups,
  className,
}: AboutSkillsProps) {
  return (
    <section
      id="about-skills"
      className={`scroll-mt-20 bg-[#F8F9FA] py-20 md:py-28 ${className ?? ""}`}
      aria-labelledby="about-skills-title"
    >
      <SiteContainer className="px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {badge}
          </span>
          <h2
            id="about-skills-title"
            className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight md:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {groups.map((group) => (
            <article
              key={group.label}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/30 hover:shadow-[0_16px_40px_rgb(58_107_82/0.08)] md:p-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-brand-accent/5 transition-transform duration-500 group-hover:scale-150"
              />

              <h3 className="relative font-(family-name:--font-heading) text-sm font-bold uppercase tracking-[0.14em] text-brand-accent">
                {group.label}
              </h3>

              <TechStackIcons
                names={group.tech}
                size="md"
                variant="light"
                className="relative mt-5 gap-2"
              />
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
