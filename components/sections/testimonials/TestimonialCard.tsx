import { LuStar } from "react-icons/lu";

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
    <article className="relative mx-auto flex h-full w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border/60 bg-white p-8 shadow-[0_8px_40px_rgb(0,0,0,0.06)] md:p-12">
      {/* Büyük tırnak işareti */}
      <svg
        aria-hidden
        className="absolute right-8 top-8 size-20 text-brand-accent/8 md:size-28"
        viewBox="0 0 80 60"
        fill="currentColor"
      >
        <path d="M0 36C0 16.118 16.118 0 36 0v13.5C23.574 13.5 13.5 23.574 13.5 36v22.5H0V36zm43.5 0C43.5 16.118 59.618 0 79.5 0v13.5C67.074 13.5 57 23.574 57 36v22.5H43.5V36z" />
      </svg>

      <div className="flex items-center gap-1 mb-6">
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
