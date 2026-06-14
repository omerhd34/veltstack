interface CTAContentProps {
  title: string;
  subtitle: string;
}

export function CTAContent({ title, subtitle }: CTAContentProps) {
  return (
    <div className="text-center">
      <h2 className="font-(family-name:--font-heading) text-3xl font-bold text-white">
        {title}
      </h2>
      <p className="mt-4 text-white/70">{subtitle}</p>
    </div>
  );
}
