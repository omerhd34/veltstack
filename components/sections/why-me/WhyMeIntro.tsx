import { getTranslations } from "next-intl/server";

interface WhyMeIntroProps {
  className?: string;
}

export async function WhyMeIntro({ className }: WhyMeIntroProps) {
  const t = await getTranslations("home");

  return (
    <div className={`w-full ${className ?? ""}`}>
      <p className="font-(family-name:--font-heading) text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
        {t("whyMeBadge")}
      </p>
      <h2
        id="why-me-section-title"
        className="mt-5 w-full max-w-3xl text-balance font-(family-name:--font-heading) text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-[2.75rem]"
      >
        {t("whyMeTitleLead")}{" "}
        <span className="text-brand-accent">{t("whyMeTitleAccent")}</span>
      </h2>
      <p className="mt-5 w-full text-pretty font-(family-name:--font-heading) text-xl font-semibold leading-[1.35] tracking-tight text-brand-accent md:text-2xl">
        {t("whyMeSubtitle")}
      </p>
      <p className="mt-6 w-full text-pretty text-base leading-[1.85] text-foreground/72 md:text-lg md:leading-[1.9]">
        {t("whyMeIntro")}
      </p>
    </div>
  );
}
