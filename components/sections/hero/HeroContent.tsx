interface HeroContentProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function HeroContent({ title, subtitle, className }: HeroContentProps) {
  return (
    <div className={className}>
      <h1 className="max-w-md font-(family-name:--font-heading) text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">{subtitle}</p>
    </div>
  );
}
