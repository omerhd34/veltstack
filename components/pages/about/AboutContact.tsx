import {
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuPhone,
} from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

interface AboutContactProps {
  badge: string;
  title: string;
  subtitle: string;
  items: ContactItem[];
  className?: string;
}

const contactIcons = [LuPhone, LuMail, LuMapPin, LuMessageCircle] as const;

export function AboutContact({
  badge,
  title,
  subtitle,
  items,
  className,
}: AboutContactProps) {
  return (
    <section
      id="about-contact"
      className={`scroll-mt-20 bg-[#F8F9FA] py-20 md:py-28 ${className ?? ""}`}
      aria-labelledby="about-contact-title"
    >
      <SiteContainer>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {badge}
          </span>
          <h2
            id="about-contact-title"
            className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight md:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = contactIcons[index] ?? LuMail;
            const content = (
              <>
                <div className="flex size-10 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                  <Icon className="size-4.5" strokeWidth={1.75} aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 truncate text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-brand-accent/30 hover:shadow-[0_12px_32px_rgb(58_107_82/0.08)]"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5"
              >
                {content}
              </div>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}
