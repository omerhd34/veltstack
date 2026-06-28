import { SiteContainer } from "@/components/layout/SiteContainer";
import {
  ServiceTechHoverStack,
  type ServiceTechCategoryGroup,
} from "./ServiceTechHoverStack";

interface ServiceTechProps {
  title: string;
  subtitle: string;
  techStack: string[];
  techDescriptions: Record<string, string>;
  primaryTech?: readonly string[];
  categories?: ServiceTechCategoryGroup[];
  className?: string;
}

export function ServiceTech({
  title,
  subtitle,
  techStack,
  techDescriptions,
  primaryTech,
  categories,
  className,
}: ServiceTechProps) {
  return (
    <section className={`bg-background py-24 md:py-32 ${className ?? ""}`}>
      <SiteContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-[#0A0A0F] md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <ServiceTechHoverStack
          names={techStack}
          descriptions={techDescriptions}
          primaryTech={primaryTech}
          categories={categories}
        />
      </SiteContainer>
    </section>
  );
}
