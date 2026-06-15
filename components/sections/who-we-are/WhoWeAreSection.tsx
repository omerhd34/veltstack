import { LuArrowRight } from "react-icons/lu";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { Button } from "@/components/ui/shadcn";

interface WhoWeAreSectionProps {
  className?: string;
}

export async function WhoWeAreSection({ className }: WhoWeAreSectionProps) {
  const t = await getTranslations("home");

  const stats = [
    { value: "6+", label: t("whoWeAreStat1Label") },
    { value: "20+", label: t("whoWeAreStat2Label") },
    { value: "98%", label: t("whoWeAreStat3Label") },
  ];

  return (
    <section
      className={`bg-background py-24 md:py-32 ${className ?? ""}`}
      aria-labelledby="who-we-are-title"
    >
      <SiteContainer>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Sol — Başlık + Quote */}
          <div className="min-w-0">
            <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              {t("whoWeAreTitle")}
            </span>

            <h2
              id="who-we-are-title"
              className="mt-8 font-(family-name:--font-heading) text-4xl font-bold leading-[1.08] tracking-tight text-[#0A0A0F] md:text-5xl lg:text-[3.25rem]"
            >
              {t("whoWeAreHeadline")}
              <br />
              <span className="relative inline-block text-brand-accent">
                {t("whoWeAreHeadlineAccent")}
                <svg
                  aria-hidden
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6 C60 2, 140 2, 298 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </span>
            </h2>

            {/* İstatistikler */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <p className="font-(family-name:--font-heading) text-3xl font-bold text-[#0A0A0F] md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ — Açıklama + CTA */}
          <div className="min-w-0 space-y-6">
            {/* Büyük tırnak */}
            <div className="relative rounded-3xl border border-border/60 bg-[#F8F9FA] p-8 md:p-10">
              <svg
                aria-hidden
                className="absolute -top-4 left-8 size-8 text-brand-accent/25"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M0 16C0 7.163 7.163 0 16 0v6C10.477 6 6 10.477 6 16v14H0V16zm18 0C18 7.163 25.163 0 34 0v6c-5.523 0-10 4.477-10 10v14H18V16z" />
              </svg>
              <p className="text-lg leading-[1.85] text-foreground/75 md:text-xl">
                {t("whoWeAreDescription")}
              </p>
            </div>

            <p className="px-2 text-[0.9375rem] leading-[1.85] text-muted-foreground">
              {t("whoWeAreDescriptionSecondary")}
            </p>

            <Button
              size="lg"
              className="h-12 gap-2 rounded-full bg-[#0A0A0F] px-8 text-base text-white hover:bg-[#0A0A0F]/85"
              asChild
            >
              <Link href="/hakkimda">
                {t("whoWeAreCta")}
                <LuArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
