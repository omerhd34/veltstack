import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ServiceCard } from "@/components/sections/services/ServiceCard";
import { serviceItems } from "@/components/sections/services/service-items";
import type { ServiceSlug } from "@/components/sections/services/service-items";
import { serviceTechStacks } from "@/components/pages/service-detail/service-detail-config";
import { cn } from "@/lib/utils";

interface ProjectRelatedProps {
  title: string;
  subtitle: string;
  serviceSlugs: ServiceSlug[];
  className?: string;
}

export async function ProjectRelated({
  title,
  subtitle,
  serviceSlugs,
  className,
}: ProjectRelatedProps) {
  const tHome = await getTranslations("home");
  const services = serviceItems.filter((item) =>
    serviceSlugs.includes(item.slug),
  );

  if (!services.length) return null;

  return (
    <section className={cn("bg-background py-24 md:py-32", className)}>
      <SiteContainer className="px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-[#0A0A0F] md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              href={service.href}
              title={tHome(service.titleKey)}
              description={tHome(service.descKey)}
              tag={tHome(service.tagKey)}
              icon={service.icon}
              techStack={serviceTechStacks[service.slug]}
              numbered
              index={index + 1}
            />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
