interface NavbarLogoProps {
  className?: string;
}

export function NavbarLogo({ className }: NavbarLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <span
        className="size-2 shrink-0 rounded-full bg-brand-accent shadow-[0_0_10px_rgb(58_107_82/0.45)]"
        aria-hidden
      />
      <span className="font-(family-name:--font-heading) text-[1.05rem] font-bold tracking-tight sm:text-lg">
        Veltstack
      </span>
    </span>
  );
}
