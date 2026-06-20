import Image from "next/image";

interface NavbarLogoProps {
  className?: string;
}

export function NavbarLogo({ className }: NavbarLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <Image
        src="/images/favicons/favicon-48.png"
        alt=""
        width={32}
        height={32}
        className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
        aria-hidden
      />
      <span className="font-(family-name:--font-heading) text-[1.5rem] font-extrabold tracking-[-0.04em] sm:text-[2rem]">
        Velt
        <span className="text-brand-accent">stack</span>
      </span>
    </span>
  );
}
