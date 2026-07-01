import { getTranslations } from "next-intl/server";
import { SectionBadge } from "@/components/ui/SectionBadge";

interface ProjectsIntroProps {
  className?: string;
}

export async function ProjectsIntro({ className }: ProjectsIntroProps) {
  const t = await getTranslations("home");

  return (
    <div className={`w-full max-w-5xl ${className ?? ""}`}>
      <SectionBadge variant="emerald-soft">{t("projectsBadge")}</SectionBadge>

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
