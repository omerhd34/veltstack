interface HeroVideoProps {
  className?: string;
}

export function HeroVideo({ className }: HeroVideoProps) {
  return (
    <div
      className={`relative aspect-640/591 h-auto w-full overflow-hidden ${className ?? ""}`}
      style={{
        clipPath: `path('M 74 0 C 148 0, 222 25, 246 98 L 271 148 C 296 197, 345 222, 394 246 L 443 271 C 492 296, 542 320, 592 369 L 615 443 C 640 517, 615 566, 542 591 L 98 591 C 49 591, 12 554, 0 492 L 0 98 C 0 37, 37 0, 74 0 Z')`,
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster=""
        className="h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
