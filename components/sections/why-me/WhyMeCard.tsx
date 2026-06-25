import type { IconType } from "react-icons";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { CardIndexNumber } from "@/components/ui/CardIndexNumber";
import { cn } from "@/lib/utils";

interface WhyMeCardProps {
  title: string;
  description: string;
  icon: IconType;
  index: number;
}

const slowTransition =
  "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

export function WhyMeCard({
  title,
  description,
  icon: Icon,
  index,
}: WhyMeCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl bg-white/4 p-6",
        "border-trace-hover-fallback box-border border-[3px] border-solid border-[#8aab99]",
        "hover:shadow-[0_16px_48px_rgb(58,107,82,0.14)]",
        slowTransition,
      )}
    >
      <BorderTrace durationSec={2.5} />
      <CardIndexNumber index={index} theme="dark" />

      <div className="flex gap-4">
        <div
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/20 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-accent-foreground group-hover:ring-brand-accent/50",
            slowTransition,
          )}
        >
          <Icon
            className={cn("size-6", slowTransition)}
            strokeWidth={1.75}
            aria-hidden
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="pr-10 font-(family-name:--font-heading) text-xl font-bold leading-snug tracking-tight text-white">
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 h-[calc(0.9375rem*1.7*3)] text-[0.9375rem] leading-[1.7] text-white/50">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
