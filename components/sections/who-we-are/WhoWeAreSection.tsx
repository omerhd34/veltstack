import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { WhoWeAreAuroraLayer } from "./WhoWeAreAuroraLayer";
import { WhoWeAreLeftColumn } from "./WhoWeAreLeftColumn";
import { WhoWeAreQuoteCard } from "./WhoWeAreQuoteCard";

interface WhoWeAreSectionProps {
  className?: string;
}

export async function WhoWeAreSection({ className }: WhoWeAreSectionProps) {
  const t = await getTranslations("home");

  const stats = [
    { target: 6, suffix: "+", label: t("whoWeAreStat1Label") },
    { target: 40, suffix: "+", label: t("whoWeAreStat2Label") },
    { target: 100, suffix: "%", label: t("whoWeAreStat3Label") },
  ];

  return (
    <section
      className={`relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-[#EDF6F1] py-16 md:py-20 ${className ?? ""}`}
      aria-labelledby="who-we-are-title"
    >
      <WhoWeAreAuroraLayer />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgb(58_107_82/0.08),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-accent/20 to-transparent"
      />
      <SiteContainer className="relative z-10 w-full">
        <div className="grid items-stretch gap-16 lg:grid-cols-2 lg:gap-20">
          <WhoWeAreLeftColumn
            badge={t("whoWeAreTitle")}
            headline={t("whoWeAreHeadline")}
            headlineAccent={t("whoWeAreHeadlineAccent")}
            stats={stats}
          />

          <div className="flex h-full min-w-0 self-stretch">
            <WhoWeAreQuoteCard
              description={t("whoWeAreDescription")}
              name={t("whoWeAreSignatureName")}
              role={t("whoWeAreSignatureRole")}
              cta={t("whoWeAreCta")}
            />
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
