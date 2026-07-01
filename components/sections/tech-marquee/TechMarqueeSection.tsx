import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TechBeamCircle } from "./TechBeamCircle";
import { techItemCount } from "./tech-items";

interface TechMarqueeSectionProps {
  className?: string;
}

export async function TechMarqueeSection({
  className,
}: TechMarqueeSectionProps) {
  const t = await getTranslations("home");

  return (
    <section
      className={`relative overflow-hidden border-y border-[#00D4AA]/15 bg-[#071410] py-20 text-white md:py-28 ${className ?? ""}`}
      aria-labelledby="tech-stack-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgb(0_212_170/0.12),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_100%,rgb(58_107_82/0.14),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#00D4AA]/35 to-transparent"
      />

      <SiteContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <SectionBadge>{t("techStackBadge")}</SectionBadge>
            <h2
              id="tech-stack-title"
              className="mt-4 font-(family-name:--font-heading) text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-[2.65rem]"
            >
              {t("techStackTitle")}
              <br />
              <span className="text-[#00D4AA]">
                {t("techStackTitleAccent")}
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/65 lg:mx-0 md:text-lg">
              {t("techStackSubtitle")}
            </p>
            <p className="mt-6 font-(family-name:--font-heading) text-sm tracking-wide text-white/45">
              {t.rich("techStackCount", {
                count: techItemCount,
                bold: (chunks) => (
                  <span className="text-base font-extrabold text-white/70">
                    {chunks}
                  </span>
                ),
              })}
            </p>
          </div>

          <TechBeamCircle className="mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto" />
        </div>
      </SiteContainer>
    </section>
  );
}
