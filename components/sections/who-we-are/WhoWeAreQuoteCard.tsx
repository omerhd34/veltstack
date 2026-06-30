"use client";

import { LuQuote } from "react-icons/lu";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { cn } from "@/lib/utils";
import { WhoWeAreSignature } from "./WhoWeAreSignature";

interface WhoWeAreQuoteCardProps {
  description: string;
  name: string;
  role: string;
  cta: string;
}

const slowTransition =
  "transition-all duration-700 ease-out motion-reduce:transition-none";

export function WhoWeAreQuoteCard({
  description,
  name,
  role,
  cta,
}: WhoWeAreQuoteCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white p-8 md:p-10",
        "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
        "shadow-[0_4px_24px_rgb(58_107_82/0.08)] hover:shadow-[0_24px_56px_rgb(58_107_82/0.14)]",
        slowTransition,
      )}
    >
      <BorderTrace durationSec={2.5} stroke="rgb(58 107 82 / 0.55)" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_100%_0%,rgb(58_107_82/0.07),transparent_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-1/2 size-48 -translate-y-1/2 rounded-full bg-brand-accent/6 blur-3xl"
      />

      <div
        aria-hidden
        className="absolute left-0 top-8 h-20 w-1 rounded-r-full bg-linear-to-b from-brand-accent/70 to-brand-accent/10 md:top-10 md:h-24"
      />

      <LuQuote
        aria-hidden
        className="absolute right-6 top-6 size-20 text-brand-accent/8 md:right-8 md:top-8 md:size-28"
      />

      <blockquote className="relative px-5 md:px-6">
        <p className="text-lg leading-[1.9] text-foreground/80 md:text-xl md:leading-[1.88]">
          <span
            aria-hidden
            className="mr-1 font-(family-name:--font-heading) text-3xl leading-none text-brand-accent/35 md:text-4xl"
          ></span>
          {description}
          <span
            aria-hidden
            className="ml-0.5 font-(family-name:--font-heading) text-3xl leading-none text-brand-accent/35 md:text-4xl"
          ></span>
        </p>
      </blockquote>

      <footer className="relative mx-5 mt-8 shrink-0 rounded-2xl border border-brand-accent/10 bg-[#f3faf6] p-5 md:mx-6 md:mt-10 md:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <WhoWeAreSignature name={name} role={role} />

          <PrimaryCtaLink href="/hakkimda" size="md" className="shrink-0">
            {cta}
          </PrimaryCtaLink>
        </div>
      </footer>
    </article>
  );
}
