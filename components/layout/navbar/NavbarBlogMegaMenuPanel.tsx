"use client"

import { LuArrowRight } from "react-icons/lu"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/shadcn"
import { SiteContainer } from "@/components/layout/SiteContainer"
import { ServiceCard } from "@/components/sections/services/ServiceCard"
import { getNavBlogPosts } from "@/components/pages/blog/blog-data"
import { getFooterBlogCategoryIcon } from "@/components/layout/footer/footer-config"
import { useUiStore } from "@/store/uiSlice"

export function NavbarBlogMegaMenuPanel() {
  const locale = useLocale() as "tr" | "en"
  const tHome = useTranslations("home")
  const setBlogMenuOpen = useUiStore((state) => state.setBlogMenuOpen)
  const posts = getNavBlogPosts(locale)

  return (
    <SiteContainer className="py-10">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
        <div className="mega-menu-intro max-w-md">
          <h2 className="font-(family-name:--font-heading) text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            {tHome("blogHeadline")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {tHome("blogIntro")}
          </p>
          <Button
            size="lg"
            className="mt-6 rounded-full bg-[#0A0A0F] px-8 text-white hover:bg-[#0A0A0F]/90"
            asChild
          >
            <Link href="/blog" onClick={() => setBlogMenuOpen(false)}>
              {tHome("blogCta")}
              <LuArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3">
          {posts.map((post) => (
            <div key={post.slug} className="mega-menu-card">
              <ServiceCard
                compact
                href={`/blog/${post.slug}`}
                title={post.title}
                description={post.excerpt}
                icon={getFooterBlogCategoryIcon(post.category)}
                onNavigate={() => setBlogMenuOpen(false)}
              />
            </div>
          ))}
        </div>
      </div>
    </SiteContainer>
  )
}
