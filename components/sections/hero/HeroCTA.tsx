import { Compass, Rocket } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/shadcn"

interface HeroCTAProps {
  primary: string
  secondary: string
  className?: string
}

export function HeroCTA({ primary, secondary, className }: HeroCTAProps) {
  const buttonClass = "h-11 gap-2 px-6 text-base"

  return (
    <div className={`flex flex-wrap gap-4 ${className ?? ""}`}>
      <Button size="lg" className={buttonClass} asChild>
        <Link href="/iletisim">
          <Rocket className="size-5" aria-hidden />
          {primary}
        </Link>
      </Button>
      <Button
        size="lg"
        variant="outline"
        className={`border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white ${buttonClass}`}
        asChild
      >
        <Link href="/hizmetler">
          <Compass className="size-5" aria-hidden />
          {secondary}
        </Link>
      </Button>
    </div>
  )
}
