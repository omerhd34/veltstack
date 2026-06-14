import { TechMarqueeTrack } from "./TechMarqueeTrack"

interface TechMarqueeSectionProps {
  className?: string
}

export function TechMarqueeSection({ className }: TechMarqueeSectionProps) {
  return (
    <section
      className={`overflow-hidden border-y border-[#00D4AA]/30 bg-[#00D4AA] text-[#0A0A0F] ${className ?? ""}`}
      aria-label="Teknoloji stack"
    >
      <TechMarqueeTrack />
    </section>
  )
}
