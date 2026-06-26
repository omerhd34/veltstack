interface ServicesPackagesIntroProps {
  title: string;
  p1: string;
  p2: string;
  className?: string;
}

export function ServicesPackagesIntro({
  title,
  p1,
  p2,
  className,
}: ServicesPackagesIntroProps) {
  return (
    <div className={`mx-auto max-w-4xl text-center ${className ?? ""}`}>
      <h3 className="font-(family-name:--font-heading) text-lg font-bold tracking-tight text-brand-accent md:text-xl">
        {title}
      </h3>
      <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:max-w-4xl md:text-base md:leading-[1.85]">
        {p1}
      </p>
      <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground/80 md:max-w-4xl md:text-[0.9375rem] md:leading-[1.85]">
        {p2}
      </p>
    </div>
  );
}
