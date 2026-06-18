import {
  LuGithub,
  LuGlobe,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

interface ContactInfoProps {
  badge: string;
  title: string;
  items: ContactItem[];
  className?: string;
}

const contactIcons = [LuPhone, LuMail, LuMapPin, LuGithub, LuLinkedin, LuGlobe] as const;

export function ContactInfo({ badge, title, items, className }: ContactInfoProps) {
  return (
    <div className={className}>
      <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
        {badge}
      </span>
      <h2 className="mt-4 font-(family-name:--font-heading) text-xl font-bold tracking-tight text-foreground">
        {title}
      </h2>

      <ul className="mt-6 space-y-3">
        {items.map((item, index) => {
          const Icon = contactIcons[index] ?? LuMail;
          const content = (
            <>
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                <Icon className="size-4" strokeWidth={1.75} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </div>
            </>
          );

          if (item.href) {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group flex items-center gap-3.5 rounded-xl border border-border/60 bg-card px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-brand-accent/30 hover:shadow-[0_8px_24px_rgb(58_107_82/0.08)]"
                >
                  {content}
                </a>
              </li>
            );
          }

          return (
            <li key={item.label}>
              <div className="flex items-center gap-3.5 rounded-xl border border-border/60 bg-card px-4 py-3.5">
                {content}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
