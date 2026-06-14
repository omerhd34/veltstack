import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { Button } from "@/components/ui/shadcn";

interface WhoWeAreSectionProps {
  className?: string;
}

export async function WhoWeAreSection({ className }: WhoWeAreSectionProps) {
  const t = await getTranslations("home");

  return (
    <section
      className={`bg-background py-24 md:py-28 ${className ?? ""}`}
      aria-labelledby="who-we-are-title"
    >
      <SiteContainer>
        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <div className="min-w-0">
            <h2
              id="who-we-are-title"
              className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight md:text-4xl"
            >
              {t("whoWeAreTitle")}
            </h2>

            <p className="mt-8 text-balance font-(family-name:--font-heading) text-2xl font-bold leading-[1.2] tracking-tight md:text-3xl lg:text-[2.125rem]">
              {t("whoWeAreHeadline")}
              <span className="mt-2 block text-brand-accent">
                {t("whoWeAreHeadlineAccent")}
              </span>
            </p>
          </div>

          <div className="min-w-0 lg:pt-2">
            <div className="max-w-md space-y-5 text-base leading-[1.8] text-muted-foreground md:text-lg">
              <p>{t("whoWeAreDescription")}</p>
              <p>{t("whoWeAreDescriptionSecondary")}</p>
            </div>

            <Button
              size="lg"
              className="mt-8 h-11 gap-2 rounded-full bg-[#0A0A0F] px-8 text-base text-white hover:bg-[#0A0A0F]/90"
              asChild
            >
              <Link href="/hakkimda">
                {t("whoWeAreCta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
