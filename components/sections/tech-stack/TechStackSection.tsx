interface TechStackSectionProps { className?: string }
export function TechStackSection({ className }: TechStackSectionProps) {
  return <section className={`px-4 py-24 ${className ?? ""}`}><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-bold">Teknolojiler</h2></div></section>
}
