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
  active?: boolean;
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
  active = true,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "group relative mx-auto flex h-full w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white p-8 md:p-12",
        "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
        "shadow-[0_4px_24px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_56px_rgb(58,107,82,0.12)]",
        slowTransition,
        active ? "opacity-100" : "opacity-0",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgb(58_107_82/0.05),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-brand-accent/4 blur-2xl"
      />

      <BorderTrace durationSec={2.5} />

      <div
        aria-hidden
        className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-linear-to-b from-brand-accent/60 to-brand-accent/15 md:top-10 md:h-20"
      />

      <LuQuote
        aria-hidden
        className="absolute right-6 top-6 size-16 text-brand-accent/10 md:right-8 md:top-8 md:size-24"
      />

      <div className="relative mb-7 flex items-center gap-3">
        <div className="flex items-center gap-0.5 rounded-full border border-brand-accent/15 bg-brand-accent/6 px-3 py-1.5">
          {Array.from({ length: rating }).map((_, starIndex) => (
            <LuStar
              key={starIndex}
              aria-hidden
              className="size-3.5 fill-brand-accent text-brand-accent md:size-4"
              strokeWidth={0}
            />
          ))}
        </div>
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand-accent/70">
          {rating}/5
        </span>
      </div>

      <blockquote className="relative flex-1 text-lg leading-[1.9] text-foreground/78 md:text-xl md:leading-[1.95]">
        <span
          aria-hidden
          className="mr-1 font-(family-name:--font-heading) text-3xl leading-none text-brand-accent/35 md:text-4xl"
        >
          &ldquo;
        </span>
        {feedback}
        <span
          aria-hidden
          className="ml-0.5 font-(family-name:--font-heading) text-3xl leading-none text-brand-accent/35 md:text-4xl"
        >
          &rdquo;
        </span>
      </blockquote>

      <footer className="relative mt-8 flex shrink-0 items-center gap-4 border-t border-border/40 pt-7">
        <div className="relative shrink-0">
          <div
            aria-hidden
            className="absolute -inset-0.5 rounded-full bg-linear-to-br from-brand-accent/40 to-brand-accent/10"
          />
          <div className="relative flex size-12 items-center justify-center rounded-full bg-white text-sm font-bold text-brand-accent ring-2 ring-white">
            {getInitials(clientName)}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-(family-name:--font-heading) text-base font-bold text-[#0A0A0F]">
            {clientName}
          </p>
          <p className="mt-0.5 inline-flex max-w-full items-center rounded-md bg-muted/80 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
            {companyName}
          </p>
        </div>
      </footer>
    </article>
  );
}
