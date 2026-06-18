import { LuArrowRight } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/shadcn";
import { SiteContainer } from "@/components/layout/SiteContainer";

interface ServicesPageCTAProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  note: string;
  className?: string;
}

export function ServicesPageCTA({
  title,
  subtitle,
  buttonLabel,
  note,
  className,
}: ServicesPageCTAProps) {
  return (
    <section className={`bg-background py-20 md:py-28 ${className ?? ""}`}>
      <SiteContainer>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-[#0A0A0F] px-8 py-14 text-center md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 size-[400px] -translate-x-1/2 rounded-full bg-brand-accent/12 blur-[80px]"
          />

          <h2 className="relative font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/55">
            {subtitle}
          </p>

          <div className="relative mt-8 flex flex-col items-center gap-3">
            <Button
              size="lg"
              className="h-12 gap-2 rounded-full bg-brand-accent px-10 text-base font-semibold text-white hover:bg-brand-accent/85"
              asChild
            >
              <Link href="/iletisim">
                {buttonLabel}
                <LuArrowRight className="size-4" />
              </Link>
            </Button>
            <span className="text-sm text-white/40">{note}</span>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
