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
    <section
      className={`relative overflow-hidden bg-background py-24 md:py-32 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgb(58_107_82/0.06),transparent)]"
      />

      <SiteContainer className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Referanslar
          </span>
          <h2 className="mt-6 font-(family-name:--font-heading) text-4xl font-bold tracking-tight text-[#0A0A0F] md:text-5xl">
            {t("testimonialsTitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("testimonialsSubtitle")}
          </p>
        </div>

        <TestimonialSlider className="mx-auto mt-14 max-w-4xl px-8 md:px-12" />
      </SiteContainer>
    </section>
  );
}
