interface HeroContentProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function HeroContent({ title, subtitle, className }: HeroContentProps) {
  return (
    <div className={className}>
      <h1 className="mx-auto max-w-4xl font-(family-name:--font-heading) text-3xl font-bold leading-snug tracking-tight text-white/90 sm:text-4xl sm:leading-snug md:text-5xl md:leading-normal lg:text-6xl lg:leading-normal">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-white/65">{subtitle}</p>
    </div>
  );
}
