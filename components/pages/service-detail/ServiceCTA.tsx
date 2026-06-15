import { LuArrowRight } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/shadcn";
import { SiteContainer } from "@/components/layout/SiteContainer";

interface ServiceCTAProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  note: string;
  className?: string;
}

export function ServiceCTA({
  title,
  subtitle,
  buttonLabel,
  note,
  className,
}: ServiceCTAProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#0A0A0F] py-24 md:py-32 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-brand-accent/10 blur-[100px]"
      />

      <SiteContainer className="relative px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-(family-name:--font-heading) text-3xl font-bold leading-[1.08] tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/55">{subtitle}</p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="h-13 gap-2 rounded-full bg-brand-accent px-10 text-base font-semibold text-white hover:bg-brand-accent/85"
              asChild
            >
              <Link href="/iletisim">
                {buttonLabel}
                <LuArrowRight className="size-4" />
              </Link>
            </Button>
            <span className="text-sm text-white/45">{note}</span>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
