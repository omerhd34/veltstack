import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface FooterLogoProps {
  className?: string;
}

export function FooterLogo({ className }: FooterLogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex transition-opacity hover:opacity-80", className)}
    >
      <span className="font-(family-name:--font-heading) text-lg font-extrabold tracking-[-0.04em] sm:text-xl">
        Velt
        <span className="text-brand-accent">stack</span>
      </span>
    </Link>
  );
}
