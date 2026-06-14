import { getTranslations } from "next-intl/server";

interface WhyMeIntroProps {
  className?: string;
}

export async function WhyMeIntro({ className }: WhyMeIntroProps) {
  const t = await getTranslations("home");

  return (
    <div className={`w-full max-w-6xl ${className ?? ""}`}>
      <span className="inline-block rounded-full border border-brand-accent/40 bg-brand-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
        {t("whyMeBadge")}
      </span>

      <h2
        id="why-me-section-title"
        className="mt-7 font-(family-name:--font-heading) text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3rem]"
      >
        {t("whyMeTitleLead")}{" "}
        <span className="text-brand-accent">{t("whyMeTitleAccent")}</span>
      </h2>

      <p className="mt-5 text-xl font-semibold leading-snug text-brand-accent/90 md:text-2xl">
        {t("whyMeSubtitle")}
      </p>

      <p className="mt-5 text-base leading-[1.85] text-white/55 md:text-lg">
        {t("whyMeIntro")}
      </p>
    </div>
  );
}
