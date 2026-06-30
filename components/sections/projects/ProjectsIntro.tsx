import { getTranslations } from "next-intl/server";

interface ProjectsIntroProps {
  className?: string;
}

export async function ProjectsIntro({ className }: ProjectsIntroProps) {
  const t = await getTranslations("home");

  return (
    <div className={`w-full max-w-5xl ${className ?? ""}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/90">
        {t("projectsBadge")}
      </span>

      <h2
        id="projects-section-title"
        className="mt-7 font-(family-name:--font-heading) text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl"
      >
        {t("projectsTitleLead")}{" "}
        <span className="text-brand-accent">{t("projectsTitleAccent")}</span>
      </h2>

      <p className="mt-5 text-lg font-semibold leading-snug text-emerald-300/90">
        {t("projectsSubtitle")}
      </p>

      <p className="mt-4 text-[0.9375rem] leading-[1.85] text-white/55">
        {t("projectsIntro")}
      </p>
    </div>
  );
}
