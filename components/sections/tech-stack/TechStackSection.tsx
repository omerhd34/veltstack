interface TechStackSectionProps { className?: string }
export function TechStackSection({ className }: TechStackSectionProps) {
  return <section className={`py-24 ${className ?? ""}`}><div className="mx-auto max-w-site"><h2 className="text-3xl font-bold">Teknolojiler</h2></div></section>
}
