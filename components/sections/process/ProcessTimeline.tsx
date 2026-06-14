import {
  LuClipboardList,
  LuCodeXml,
  LuLayoutTemplate,
  LuPalette,
  LuRocket,
  LuSearch,
  LuServer,
  LuShieldCheck,
} from "react-icons/lu"
import { getTranslations } from "next-intl/server"
import { ProcessStep } from "./ProcessStep"

interface ProcessItem {
  title: string
  description: string
}

interface ProcessTimelineProps {
  className?: string
  variant?: "light" | "dark"
}

const stepIcons = [
  LuSearch,
  LuClipboardList,
  LuPalette,
  LuLayoutTemplate,
  LuCodeXml,
  LuServer,
  LuShieldCheck,
  LuRocket,
] as const

export async function ProcessTimeline({
  className,
  variant = "light",
}: ProcessTimelineProps) {
  const t = await getTranslations("home")
  const steps = t.raw("processItems") as ProcessItem[]

  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${className ?? ""}`}>
      {steps.map((step, index) => (
        <ProcessStep
          key={step.title}
          step={index + 1}
          title={step.title}
          description={step.description}
          icon={stepIcons[index]}
          variant={variant}
        />
      ))}
    </div>
  )
}
