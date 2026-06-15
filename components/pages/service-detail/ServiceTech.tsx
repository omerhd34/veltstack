import { SiteContainer } from "@/components/layout/SiteContainer";
import { TechStackIcons } from "@/components/sections/projects/TechStackIcons";

interface ServiceTechProps {
  title: string;
  subtitle: string;
  techStack: string[];
  className?: string;
}

export function ServiceTech({
  title,
  subtitle,
  techStack,
  className,
}: ServiceTechProps) {
  return (
    <section className={`bg-background py-24 md:py-32 ${className ?? ""}`}>
      <SiteContainer className="px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-[#0A0A0F] md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          <TechStackIcons names={techStack} size="md" className="justify-center gap-3" />
        </div>
      </SiteContainer>
    </section>
  );
}
