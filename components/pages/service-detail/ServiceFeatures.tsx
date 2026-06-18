import { LuCircleCheck } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";

interface ServiceFeatureItemProps {
  title: string;
  description: string;
  index: number;
}

export function ServiceFeatureItem({
  title,
  description,
  index,
}: ServiceFeatureItemProps) {
  return (
    <article className="group rounded-2xl border border-border/80 bg-card p-6 transition-all duration-300 hover:border-brand-accent/40 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 font-mono text-sm font-bold text-brand-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-(family-name:--font-heading) text-lg font-bold tracking-tight text-[#0A0A0F]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

interface ServiceFeaturesProps {
  badge: string;
  title: string;
  subtitle: string;
  features: { title: string; description: string }[];
  className?: string;
}

export function ServiceFeatures({
  badge,
  title,
  subtitle,
  features,
  className,
}: ServiceFeaturesProps) {
  return (
    <section className={`bg-[#F8F9FA] py-24 md:py-32 ${className ?? ""}`}>
      <SiteContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              <LuCircleCheck className="size-3.5" aria-hidden />
              {badge}
            </span>
            <h2 className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-[#0A0A0F] md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {features.map((feature, index) => (
              <ServiceFeatureItem
                key={feature.title}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
