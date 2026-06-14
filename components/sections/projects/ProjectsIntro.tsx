import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/shadcn";

interface ProjectsIntroProps {
  className?: string;
}

export async function ProjectsIntro({ className }: ProjectsIntroProps) {
  const t = await getTranslations("home");

  return (
    <div className={`w-full lg:sticky lg:top-28 ${className ?? ""}`}>
      <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
        {t("projectsBadge")}
      </span>

      <h2
        id="projects-section-title"
        className="mt-7 font-(family-name:--font-heading) text-4xl font-bold leading-[1.08] tracking-tight text-[#0A0A0F] md:text-5xl"
      >
        {t("projectsTitleLead")}{" "}
        <span className="text-brand-accent">{t("projectsTitleAccent")}</span>
      </h2>

      <p className="mt-5 text-lg font-semibold leading-snug text-brand-accent">
        {t("projectsSubtitle")}
      </p>

      <p className="mt-4 text-[0.9375rem] leading-[1.85] text-foreground/62">
        {t("projectsIntro")}
      </p>

      <Button
        size="lg"
        className="mt-8 h-12 gap-2 rounded-full bg-[#0A0A0F] px-8 text-base text-white hover:bg-[#0A0A0F]/85"
        asChild
      >
        <Link href="/projeler">
          {t("projectsCta")}
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}
