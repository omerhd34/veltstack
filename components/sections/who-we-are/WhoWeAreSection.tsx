import { getTranslations } from "next-intl/server";
import { LuQuote } from "react-icons/lu";
import { TbWaveSine } from "react-icons/tb";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { WhoWeAreLeftColumn } from "./WhoWeAreLeftColumn";
import { WhoWeAreSignature } from "./WhoWeAreSignature";

interface WhoWeAreSectionProps {
  className?: string;
}

export async function WhoWeAreSection({ className }: WhoWeAreSectionProps) {
  const t = await getTranslations("home");

  const stats = [
    { target: 6, suffix: "+", label: t("whoWeAreStat1Label") },
    { target: 20, suffix: "+", label: t("whoWeAreStat2Label") },
    { target: 100, suffix: "%", label: t("whoWeAreStat3Label") },
  ];

  return (
    <section
      className={`bg-background py-24 md:py-32 ${className ?? ""}`}
      aria-labelledby="who-we-are-title"
    >
      <SiteContainer>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <WhoWeAreLeftColumn
            badge={t("whoWeAreTitle")}
            stats={stats}
            heading={
              <h2
                id="who-we-are-title"
                className="mt-8 font-(family-name:--font-heading) text-4xl font-bold leading-[1.08] tracking-tight text-[#0A0A0F] md:text-5xl lg:text-[3.25rem]"
              >
                {t("whoWeAreHeadline")}
                <br />
                <span className="relative inline-block text-brand-accent">
                  {t("whoWeAreHeadlineAccent")}
                  <TbWaveSine
                    aria-hidden
                    className="absolute -bottom-2 left-0 w-full opacity-40"
                    strokeWidth={2.5}
                  />
                </span>
              </h2>
            }
          />

          <div className="min-w-0">
            <div className="relative rounded-3xl border border-border/60 bg-[#F8F9FA] p-8 md:p-10">
              <LuQuote
                aria-hidden
                className="absolute -top-4 left-8 size-8 text-brand-accent/25"
              />
              <p className="text-lg leading-[1.85] text-foreground/75 md:text-xl">
                {t("whoWeAreDescription")}
              </p>

              <footer className="mt-8 flex flex-col gap-6 border-t border-border/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <WhoWeAreSignature
                  name={t("whoWeAreSignatureName")}
                  role={t("whoWeAreSignatureRole")}
                />

                <PrimaryCtaLink href="/hakkimda" size="md">
                  {t("whoWeAreCta")}
                </PrimaryCtaLink>
              </footer>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
