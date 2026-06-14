import { LuArrowRight, LuCircleCheck } from "react-icons/lu";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/shadcn";

interface ServicesIntroProps {
  className?: string;
}

export async function ServicesIntro({ className }: ServicesIntroProps) {
  const t = await getTranslations("home");

  const bullets = [
    "Tek muhatap, baştan sona şeffaf süreç",
    "Tasarım + geliştirme + yayın tek pakette",
    "Yayın sonrası teknik destek dahil",
  ];

  return (
    <div className={`w-full min-w-0 ${className ?? ""}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
        {t("servicesTitle")}
      </span>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <h2
          id="services-section-title"
          className="font-(family-name:--font-heading) text-5xl font-bold leading-[1.04] tracking-tight text-[#0A0A0F] md:text-6xl lg:text-[4rem]"
        >
          {t("servicesHeadline")}
        </h2>

        <div className="flex flex-col gap-6">
          <p className="text-lg font-semibold leading-snug text-brand-accent">
            {t("servicesSubtitle")}
          </p>

          <p className="text-[0.9375rem] leading-[1.9] text-foreground/60">
            {t("servicesIntro")}
          </p>

          <ul className="flex flex-col gap-2.5">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-foreground/70"
              >
                <LuCircleCheck
                  className="mt-0.5 size-4 shrink-0 text-brand-accent"
                  strokeWidth={2}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="h-px w-full bg-border/50" />

          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="h-12 gap-2 rounded-full bg-[#0A0A0F] px-8 text-base text-white hover:bg-[#0A0A0F]/85"
              asChild
            >
              <Link href="/iletisim">
                {t("servicesCta")}
                <LuArrowRight className="size-4" />
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              {t("servicesCtaNote")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
