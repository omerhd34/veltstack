import {
  LuCircleCheck,
  LuClock,
  LuGithub,
  LuGlobe,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn } from "@/lib/utils";

type ContactItemIcon = "location" | "clock";

interface ContactItem {
  label: string;
  value?: string;
  href?: string;
  icon?: ContactItemIcon;
}

interface ContactSectionBadgeProps {
  badge: string;
}

interface ContactSectionTitleProps {
  title: string;
  titleAs?: "h1" | "h2";
  titleId?: string;
}

interface ContactSectionHeaderProps {
  badge: string;
  title: string;
  titleAs?: "h1" | "h2";
  titleId?: string;
}

interface ContactInfoProps {
  badge: string;
  title: string;
  items: ContactItem[];
  showHeader?: boolean;
  stretchItems?: boolean;
  className?: string;
}

const badgeClassName =
  "inline-flex w-fit items-center gap-2 justify-self-start rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent";

const slowTransition =
  "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

export function ContactSectionBadge({ badge }: ContactSectionBadgeProps) {
  return (
    <span className={badgeClassName}>
      <LuCircleCheck className="size-3.5 shrink-0" aria-hidden />
      {badge}
    </span>
  );
}

export function ContactSectionTitle({
  title,
  titleAs: TitleTag = "h2",
  titleId,
}: ContactSectionTitleProps) {
  const titleClassName =
    TitleTag === "h1"
      ? "m-0 font-(family-name:--font-heading) text-3xl font-bold tracking-tight md:text-4xl"
      : "m-0 font-(family-name:--font-heading) text-xl font-bold tracking-tight text-foreground";

  return (
    <TitleTag id={titleId} className={titleClassName}>
      {title}
    </TitleTag>
  );
}

export function ContactSectionHeader({
  badge,
  title,
  titleAs = "h2",
  titleId,
}: ContactSectionHeaderProps) {
  return (
    <header className="m-0 p-0">
      <ContactSectionBadge badge={badge} />
      <div className="mt-5">
        <ContactSectionTitle
          title={title}
          titleAs={titleAs}
          titleId={titleId}
        />
      </div>
    </header>
  );
}

function getContactIcon(item: ContactItem): IconType {
  if (item.icon === "clock") return LuClock;
  if (item.icon === "location") return LuMapPin;
  if (item.href?.includes("wa.me") || item.href?.includes("whatsapp.com")) {
    return FaWhatsapp;
  }
  if (item.href?.startsWith("tel:")) return LuPhone;
  if (item.href?.startsWith("mailto:")) return LuMail;
  if (item.href?.includes("github.com")) return LuGithub;
  if (item.href?.includes("linkedin.com")) return LuLinkedin;
  if (!item.href) return LuMapPin;
  return LuGlobe;
}

export function ContactInfo({
  badge,
  title,
  items,
  showHeader = true,
  stretchItems = false,
  className,
}: ContactInfoProps) {
  const itemClassName = cn(
    "group relative flex items-center gap-3.5 overflow-visible rounded-xl bg-card px-4 py-3.5",
    "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
    slowTransition,
    stretchItems && "h-full w-full",
  );

  return (
    <div
      className={cn(stretchItems && "flex h-full flex-col", className)}
      role={showHeader ? undefined : "region"}
      aria-label={showHeader ? undefined : title}
    >
      {showHeader ? <ContactSectionHeader badge={badge} title={title} /> : null}

      <ul
        className={cn(
          stretchItems ? "flex flex-1 flex-col gap-3" : "space-y-3",
          showHeader ? "mt-6" : undefined,
        )}
      >
        {items.map((item) => {
          const Icon = getContactIcon(item);
          const content = (
            <>
              <div
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/20 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-accent-foreground group-hover:ring-brand-accent/50",
                  slowTransition,
                )}
              >
                <Icon
                  className={cn("size-4", slowTransition)}
                  strokeWidth={1.75}
                  aria-hidden
                />
              </div>
              <div className="min-w-0">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {item.label}
                </p>
                {item.value ? (
                  <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                ) : null}
              </div>
            </>
          );

          if (item.href) {
            return (
              <li
                key={item.label}
                className={cn(stretchItems && "flex min-h-0 flex-1")}
              >
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={cn(
                    itemClassName,
                    "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgb(58_107_82/0.08)]",
                  )}
                >
                  <BorderTrace durationSec={2.5} />
                  {content}
                </a>
              </li>
            );
          }

          return (
            <li
              key={item.label}
              className={cn(stretchItems && "flex min-h-0 flex-1")}
            >
              <div className={itemClassName}>
                <BorderTrace durationSec={2.5} />
                {content}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
