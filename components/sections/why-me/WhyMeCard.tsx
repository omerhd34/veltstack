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
    <div className="group relative flex h-full min-h-56 flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/4 p-7 transition-all duration-300 hover:border-brand-accent/40 hover:bg-white/7 hover:shadow-[0_16px_48px_rgb(0,0,0,0.3)]">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-accent transition-transform duration-500 group-hover:scale-x-100"
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-brand-accent/25 bg-brand-accent/12 text-brand-accent transition-colors group-hover:border-brand-accent/50 group-hover:bg-brand-accent/20">
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </div>
        <span
          aria-hidden
          className="font-mono text-xs font-bold tracking-widest text-white/15 transition-colors group-hover:text-brand-accent/40"
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-5 font-(family-name:--font-heading) text-lg font-bold leading-tight tracking-tight text-white md:text-xl">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-[1.8] text-white/50">
        {description}
      </p>
    </div>
  );
}
