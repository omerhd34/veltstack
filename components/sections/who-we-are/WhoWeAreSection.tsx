import { getTranslations } from "next-intl/server";
import { LuNetwork, LuQuote } from "react-icons/lu";
import { TbGitBranch, TbWorldWww } from "react-icons/tb";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionDecorIcon } from "@/components/ui/SectionDecorIcon";
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
      className={`relative overflow-hidden bg-[#EDF6F1] py-24 md:py-32 ${className ?? ""}`}
      aria-labelledby="who-we-are-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,rgb(58_107_82/0.1),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-accent/20 to-transparent"
      />
      <SectionDecorIcon
        icon={TbGitBranch}
        tone="accent"
        className="-left-2 top-[38%] -rotate-12 xl:left-4"
      />
      <SectionDecorIcon
        icon={LuNetwork}
        tone="accent-muted"
        size="md"
        className="right-2 top-[18%] rotate-6 xl:right-8"
      />
      <SectionDecorIcon
        icon={TbWorldWww}
        tone="accent"
        size="sm"
        className="bottom-[20%] left-6 -rotate-6 xl:left-12"
      />
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
                <span className="text-brand-accent">
                  {t("whoWeAreHeadlineAccent")}
                </span>
              </h2>
            }
          />

          <div className="min-w-0">
            <div className="relative rounded-3xl border border-emerald-900/10 bg-white p-8 shadow-[0_8px_32px_rgb(58_107_82/0.08)] md:p-10">
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
