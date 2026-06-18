import { SiteContainer } from "@/components/layout/SiteContainer";

interface AboutStoryProps {
  profileBadge: string;
  profileTitle: string;
  paragraphs: string[];
  className?: string;
}

export function AboutStory({
  profileBadge,
  profileTitle,
  paragraphs,
  className,
}: AboutStoryProps) {
  return (
    <section
      id="about-story"
      className={`scroll-mt-20 bg-background py-20 md:py-28 ${className ?? ""}`}
      aria-labelledby="about-story-title"
    >
      <SiteContainer>
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {profileBadge}
          </span>
          <h2
            id="about-story-title"
            className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight md:text-4xl"
          >
            {profileTitle}
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-5xl space-y-5">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[0.9375rem] leading-[1.85] text-muted-foreground md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
