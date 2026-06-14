import type { LucideIcon } from "lucide-react";

interface WhyMeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function WhyMeCard({
  title,
  description,
  icon: Icon,
  index,
}: WhyMeCardProps) {
  return (
    <div className="group relative flex h-full min-h-60 flex-col overflow-hidden rounded-2xl border border-border/60 bg-linear-to-b from-white to-[#fafbfa] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/35 hover:shadow-[0_12px_40px_rgb(58,107,82,0.1)]">
      <span
        aria-hidden
        className="absolute bottom-0 left-0 top-0 w-0.5 origin-top scale-y-0 rounded-full bg-brand-accent transition-transform duration-300 group-hover:scale-y-100"
      />
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/15 transition-colors group-hover:bg-brand-accent group-hover:text-brand-accent-foreground">
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </div>
        <span
          aria-hidden
          className="font-mono text-sm font-semibold text-brand-accent/30 transition-colors group-hover:text-brand-accent/60"
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-5 font-(family-name:--font-heading) text-lg font-bold leading-tight tracking-tight text-[#0A0A0F] md:text-xl">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.75] text-foreground/62">
        {description}
      </p>
    </div>
  );
}
