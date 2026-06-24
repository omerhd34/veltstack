import { LuCircleCheck, LuMessageCircle } from "react-icons/lu";
import { getTranslations } from "next-intl/server";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";

interface ServicesIntroProps {
  className?: string;
}

export async function ServicesIntro({ className }: ServicesIntroProps) {
  const t = await getTranslations("home");

  const bullets = t.raw("servicesBullets") as string[];

  return (
    <div className={`w-full min-w-0 ${className ?? ""}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
        {t("servicesTitle")}
      </span>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        <div className="flex flex-col lg:h-full">
          <h2
            id="services-section-title"
            className="font-(family-name:--font-heading) text-5xl font-bold leading-[1.04] tracking-tight text-[#0A0A0F] md:text-6xl lg:text-[4rem]"
          >
            {t("servicesHeadline")}
          </h2>

          <div className="mt-8 flex flex-col gap-6 lg:mt-auto">
            <p className="max-w-sm text-[0.9375rem] leading-relaxed text-foreground/60">
              {t("servicesHeadlineDesc")}
            </p>

            <PrimaryCtaLink
              href="/iletisim"
              showArrow={false}
              trailingIcon={<LuMessageCircle className="size-5" aria-hidden />}
            >
              {t("servicesCta")}
            </PrimaryCtaLink>
          </div>
        </div>

        <div className="flex flex-col gap-6">
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
        </div>
      </div>
    </div>
  );
}
