import { Star } from "lucide-react"

interface TestimonialCardProps {
  clientName: string
  companyName: string
  feedback: string
  rating: number
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toLocaleUpperCase("tr-TR")
}

export function TestimonialCard({
  clientName,
  companyName,
  feedback,
  rating,
}: TestimonialCardProps) {
  return (
    <article className="mx-auto flex h-full w-full max-w-3xl flex-col rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
      <blockquote className="flex-1 text-lg leading-relaxed text-foreground md:text-xl">
        {feedback}
      </blockquote>
      <footer className="mt-8 flex shrink-0 items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#6C63FF]/15 text-sm font-bold text-[#6C63FF]">
            {getInitials(clientName)}
          </div>
          <div>
            <p className="font-(family-name:--font-heading) font-semibold">{clientName}</p>
            <p className="text-sm text-muted-foreground">{companyName}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {Array.from({ length: rating }).map((_, starIndex) => (
            <Star
              key={starIndex}
              aria-hidden
              className="size-4 fill-brand-accent text-brand-accent md:size-5"
              strokeWidth={0}
            />
          ))}
        </div>
      </footer>
    </article>
  )
}
