import { getTranslations } from "next-intl/server"
import { ProcessFlowGrid } from "./ProcessFlowGrid"
import { ProcessStep } from "./ProcessStep"
import { processStepIcons } from "./process-step-icons"

interface ProcessItem {
  title: string
  description: string
}

interface ProcessTimelineProps {
  className?: string
  variant?: "light" | "dark"
  steps?: ProcessItem[]
}

export async function ProcessTimeline({
  className,
  variant = "light",
  steps: stepsProp,
}: ProcessTimelineProps) {
  const t = await getTranslations("home")
  const steps =
    stepsProp ?? (t.raw("processItems") as ProcessItem[])

  const flowItems = steps.map((step, index) => ({
    step: index + 1,
    title: step.title,
    description: step.description,
  }))

  return (
    <div className={className}>
      <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
        {flowItems.map((item, index) => (
          <ProcessStep
            key={item.step}
            step={item.step}
            title={item.title}
            description={item.description}
            icon={processStepIcons[index]!}
            variant={variant}
          />
        ))}
      </div>

      <ProcessFlowGrid items={flowItems} variant={variant} />
    </div>
  )
}
