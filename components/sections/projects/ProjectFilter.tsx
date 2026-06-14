"use client"

interface ProjectFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const categories = ["Tümü", "Kurumsal", "E-Ticaret", "Mobil", "SEO"]

export function ProjectFilter({ activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`cursor-pointer rounded-full px-4 py-1.5 text-sm transition-colors ${
            activeCategory === category
              ? "bg-[#6C63FF] text-white"
              : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
