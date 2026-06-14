import { getTranslations } from "next-intl/server";

interface ProcessIntroProps {
  className?: string;
}

export async function ProcessIntro({ className }: ProcessIntroProps) {
  const t = await getTranslations("home");
  const steps = t.raw("processItems") as { title: string }[];
  const lastStep = String(steps.length).padStart(2, "0");

  return (
    <div className={`mx-auto w-full max-w-3xl text-center ${className ?? ""}`}>
      <div className="inline-flex items-center gap-3 font-mono text-sm font-semibold tracking-widest text-emerald-400/80">
        <span>01</span>
        <span className="h-px w-10 bg-emerald-600/60" aria-hidden />
        <span>{lastStep}</span>
        <span className="ml-2 font-(family-name:--font-heading) text-xs uppercase tracking-[0.2em] text-emerald-300/70">
          {t("processBadge")}
        </span>
      </div>
      <h2
        id="process-section-title"
        className="mt-6 w-full text-balance font-(family-name:--font-heading) text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-[3.25rem]"
      >
        {t("processTitleLead")}{" "}
        <span className="text-emerald-400">{t("processTitleAccent")}</span>
      </h2>
      <p className="mt-5 w-full text-pretty font-(family-name:--font-heading) text-xl font-semibold leading-[1.35] tracking-tight text-emerald-300/90 md:text-2xl">
        {t("processSubtitle")}
      </p>
      <p className="mt-6 w-full text-pretty text-base leading-[1.85] text-emerald-50/65 md:text-lg md:leading-[1.9]">
        {t("processIntro")}
      </p>
    </div>
  );
}
