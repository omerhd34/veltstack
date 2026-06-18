import { LuChevronDown, LuMail, LuPhone, LuLinkedin } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";

interface QuickContact {
  label: string;
  value: string;
  href: string;
}

interface ContactHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  scrollLabel: string;
  quickContacts: QuickContact[];
  className?: string;
}

const quickIcons = [LuPhone, LuMail, LuLinkedin] as const;

export function ContactHero({
  badge,
  title,
  subtitle,
  scrollLabel,
  quickContacts,
  className,
}: ContactHeroProps) {
  return (
    <section
      className={`relative flex min-h-[calc(60svh-4rem)] flex-col overflow-hidden bg-[#050f0c] text-white ${className ?? ""}`}
      aria-label={badge}
    >
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgb(58_107_82/0.14),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 size-[480px] rounded-full bg-emerald-600/6 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-10 size-[400px] rounded-full bg-emerald-800/5 blur-[110px]"
      />

      {/* Grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.025)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.025)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
      />

      <SiteContainer className="relative flex flex-1 flex-col justify-center px-6 py-16 sm:px-8 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
            {badge}
          </span>

          {/* Title */}
          <h1 className="mt-8 font-(family-name:--font-heading) text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-[2.75rem] lg:text-[3.25rem]">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-[1.85] text-emerald-50/65 sm:text-lg">
            {subtitle}
          </p>

          {/* Quick contact links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {quickContacts.map((item, index) => {
              const Icon = quickIcons[index] ?? LuMail;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-2.5 rounded-full border border-emerald-800/50 bg-emerald-950/50 px-5 py-2.5 text-sm text-emerald-200/75 backdrop-blur-sm transition-all hover:border-emerald-600/40 hover:bg-emerald-900/40 hover:text-emerald-100"
                >
                  <Icon
                    className="size-3.5 shrink-0 text-emerald-400/70 transition-colors group-hover:text-emerald-400"
                    aria-hidden
                  />
                  <span className="hidden sm:inline">{item.label}:</span>
                  <span className="font-medium">{item.value}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#contact-form"
          className="mt-auto flex flex-col items-center gap-1.5 pt-12 text-emerald-300/45 transition-colors hover:text-emerald-300/75"
        >
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em]">
            {scrollLabel}
          </span>
          <LuChevronDown className="size-4 animate-bounce" aria-hidden />
        </a>
      </SiteContainer>
    </section>
  );
}
