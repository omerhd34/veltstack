import { ArrowRight, Layers } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/shadcn";

interface ServicesIntroProps {
  className?: string;
}

export async function ServicesIntro({ className }: ServicesIntroProps) {
  const t = await getTranslations("home");

  return (
    <div className={`w-full min-w-0 ${className ?? ""}`}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-accent/20 bg-white/80 px-3 py-2 pr-5 shadow-sm ring-1 ring-brand-accent/10 backdrop-blur-sm">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-accent-foreground shadow-sm">
              <Layers className="size-4" strokeWidth={2} aria-hidden />
            </span>
            <span className="font-(family-name:--font-heading) text-sm font-semibold tracking-wide text-[#0A0A0F]">
              {t("servicesTitle")}
            </span>
          </div>
          <h2
            id="services-section-title"
            className="mt-6 w-full font-(family-name:--font-heading) text-3xl font-bold leading-[1.12] tracking-tight md:text-4xl lg:text-[2.75rem]"
          >
            {t("servicesHeadline")}
          </h2>
        </div>

        <Button
          size="lg"
          className="h-11 shrink-0 gap-2 self-start rounded-full bg-[#0A0A0F] px-8 text-base text-white hover:bg-[#0A0A0F]/90 lg:mt-10"
          asChild
        >
          <Link href="/iletisim">
            {t("servicesCta")}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <p className="mt-4 w-full max-w-none font-(family-name:--font-heading) text-lg font-semibold leading-snug text-brand-accent md:text-xl">
        {t("servicesSubtitle")}
      </p>
      <p className="mt-5 w-full max-w-none text-base leading-[1.8] text-foreground/65 md:text-lg">
        {t("servicesIntro")}
      </p>
    </div>
  );
}
