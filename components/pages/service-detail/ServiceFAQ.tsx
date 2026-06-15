import { LuChevronDown } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";

interface ServiceFAQItemProps {
  question: string;
  answer: string;
}

export function ServiceFAQItem({ question, answer }: ServiceFAQItemProps) {
  return (
    <details className="group rounded-2xl border border-border/80 bg-card transition-colors open:border-brand-accent/30 open:bg-brand-accent/3">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-(family-name:--font-heading) text-base font-semibold text-[#0A0A0F] marker:content-none [&::-webkit-details-marker]:hidden">
        {question}
        <LuChevronDown
          className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="border-t border-border/60 px-6 pb-6 pt-4 text-sm leading-relaxed text-muted-foreground">
        {answer}
      </div>
    </details>
  );
}

interface ServiceFAQProps {
  title: string;
  subtitle: string;
  items: { question: string; answer: string }[];
  className?: string;
}

export function ServiceFAQ({
  title,
  subtitle,
  items,
  className,
}: ServiceFAQProps) {
  return (
    <section className={`bg-background py-24 md:py-32 ${className ?? ""}`}>
      <SiteContainer className="px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-[#0A0A0F] md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {items.map((item) => (
            <ServiceFAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
