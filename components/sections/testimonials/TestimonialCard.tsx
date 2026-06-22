import { LuQuote, LuStar } from "react-icons/lu";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn } from "@/lib/utils";

const slowTransition =
  "transition-all duration-1000 ease-in-out motion-reduce:transition-none";

interface TestimonialCardProps {
  clientName: string;
  companyName: string;
  feedback: string;
  rating: number;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toLocaleUpperCase("tr-TR");
}

export function TestimonialCard({
  clientName,
  companyName,
  feedback,
  rating,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "group relative mx-auto flex h-full w-full max-w-3xl flex-col rounded-3xl bg-white p-8 md:p-12",
        "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
        "shadow-[0_2px_12px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgb(58,107,82,0.1)]",
        slowTransition,
      )}
    >
      <BorderTrace durationSec={2.5} />
      <LuQuote
        aria-hidden
        className="absolute right-8 top-8 size-20 text-brand-accent/8 md:size-28"
      />

      <div className="mb-6 flex items-center gap-1">
        {Array.from({ length: rating }).map((_, starIndex) => (
          <LuStar
            key={starIndex}
            aria-hidden
            className="size-4 fill-brand-accent text-brand-accent"
            strokeWidth={0}
          />
        ))}
      </div>

      <blockquote className="relative flex-1 text-lg leading-[1.85] text-foreground/75 md:text-xl md:leading-[1.9]">
        {feedback}
      </blockquote>

      <footer className="mt-8 flex shrink-0 items-center gap-4 border-t border-border/50 pt-6">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-accent/12 text-sm font-bold text-brand-accent ring-2 ring-brand-accent/15">
          {getInitials(clientName)}
        </div>
        <div>
          <p className="font-(family-name:--font-heading) text-base font-bold text-[#0A0A0F]">
            {clientName}
          </p>
          <p className="text-sm text-muted-foreground">{companyName}</p>
        </div>
      </footer>
    </article>
  );
}
