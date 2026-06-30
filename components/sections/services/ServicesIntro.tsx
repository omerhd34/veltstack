import { LuCircleCheck, LuMessageCircle } from "react-icons/lu";
import { getTranslations } from "next-intl/server";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";

interface ServicesIntroProps {
  className?: string;
}

export async function ServicesIntro({ className }: ServicesIntroProps) {
  const t = await getTranslations("home");

  const bullets = t.raw("servicesBullets") as string[];

  const cta = (
    <PrimaryCtaLink
      href="/iletisim"
      variant="accent"
      showArrow={false}
      trailingIcon={<LuMessageCircle className="size-5" aria-hidden />}
    >
      {t("servicesCta")}
    </PrimaryCtaLink>
  );

  return (
    <div className={`w-full min-w-0 ${className ?? ""}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/90">
        {t("servicesTitle")}
      </span>

      <div className="relative mt-8 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="flex flex-col">
          <h2
            id="services-section-title"
            className="font-(family-name:--font-heading) text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
          >
            {t("servicesHeadline")}{" "}
            <span className="text-brand-accent">
              {t("servicesHeadlineAccent")}
            </span>
          </h2>

          <div className="relative z-10 mt-8 hidden lg:block">{cta}</div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[0.9375rem] leading-[1.9] text-white/55">
            {t("servicesIntro")}
          </p>

          <ul className="flex flex-col gap-2.5">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-white/65"
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

          <div className="relative z-10 mt-2 lg:hidden">{cta}</div>
        </div>
      </div>
    </div>
  );
}
