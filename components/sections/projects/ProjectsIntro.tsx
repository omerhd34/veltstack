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
      <p className="font-(family-name:--font-heading) text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {t("projectsBadge")}
      </p>
      <h2
        id="projects-section-title"
        className="mt-4 w-full text-balance font-(family-name:--font-heading) text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl"
      >
        {t("projectsTitleLead")}{" "}
        <span className="text-brand-accent">{t("projectsTitleAccent")}</span>
      </h2>
      <p className="mt-4 font-(family-name:--font-heading) text-lg font-semibold leading-snug text-brand-accent">
        {t("projectsSubtitle")}
      </p>
      <p className="mt-4 w-full text-pretty text-base leading-[1.8] text-foreground/65 md:text-[0.9375rem] md:leading-[1.85]">
        {t("projectsIntro")}
      </p>
      <Button
        size="lg"
        className="mt-8 h-11 gap-2 rounded-full bg-[#0A0A0F] px-8 text-base text-white hover:bg-[#0A0A0F]/90"
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
