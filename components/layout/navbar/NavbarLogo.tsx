interface NavbarLogoProps {
  className?: string;
}

export function NavbarLogo({ className }: NavbarLogoProps) {
  return (
    <span className={`inline-flex items-center ${className ?? ""}`}>
      <span className="font-(family-name:--font-heading) text-[1.25rem] font-extrabold tracking-[-0.04em] sm:text-[1.4rem]">
        Velt
        <span className="text-brand-accent">stack</span>
      </span>
    </span>
  );
}
