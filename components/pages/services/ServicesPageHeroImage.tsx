import Image from "next/image";

interface ServicesPageHeroImageProps {
  alt: string;
  className?: string;
}

export function ServicesPageHeroImage({
  alt,
  className,
}: ServicesPageHeroImageProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div
        aria-hidden
        className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-brand-accent/20 via-transparent to-emerald-600/10 blur-2xl"
      />
      <div className="relative h-[min(32vh,280px)] w-full overflow-hidden rounded-3xl border border-emerald-700/30 shadow-[0_24px_80px_rgb(0_0_0/0.45)] sm:h-[min(36vh,320px)] lg:h-[min(42vh,380px)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-[#050f0c]/90 via-[#050f0c]/15 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-emerald-400/15"
        />
        <Image
          src="/images/services/hero.jpg"
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 42vw, 90vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
