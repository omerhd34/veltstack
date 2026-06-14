import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { TestimonialSlider } from "./TestimonialSlider";

interface TestimonialsSectionProps {
  className?: string;
}

export async function TestimonialsSection({
  className,
}: TestimonialsSectionProps) {
  const t = await getTranslations("home");

  return (
    <section className={`bg-[#F8F9FA] py-24 ${className ?? ""}`}>
      <SiteContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-(family-name:--font-heading) text-3xl font-bold md:text-4xl">
            {t("testimonialsTitle")}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t("testimonialsSubtitle")}
          </p>
        </div>
        <TestimonialSlider className="mx-auto mt-12 max-w-4xl px-8 md:px-12" />
      </SiteContainer>
    </section>
  );
}
