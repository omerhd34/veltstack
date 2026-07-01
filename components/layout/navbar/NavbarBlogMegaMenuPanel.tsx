"use client";

import { LuEye } from "react-icons/lu";
import { useLocale, useTranslations } from "next-intl";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { ServiceCard } from "@/components/sections/services/ServiceCard";
import { getNavBlogPosts } from "@/components/pages/blog/blog-data";
import { getFooterBlogCategoryIcon } from "@/components/layout/footer/footer-config";
import { useUiStore } from "@/store/uiSlice";
import { NavbarMegaMenuIntroColumn } from "./NavbarMegaMenuIntroColumn";

export function NavbarBlogMegaMenuPanel() {
  const locale = useLocale() as "tr" | "en";
  const tHome = useTranslations("home");
  const tNav = useTranslations("nav");
  const setBlogMenuOpen = useUiStore((state) => state.setBlogMenuOpen);
  const posts = getNavBlogPosts(locale);

  return (
    <SiteContainer className="py-10">
      <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
        <NavbarMegaMenuIntroColumn
          headline={
            <>
              {tHome("blogHeadline")}
              <span className="text-brand-accent">{" "}
                {tHome("blogHeadlineAccent")}
              </span>
            </>
          }
          intro={tNav("blogMegaMenuIntro")}
          introLines={5}
        >
          <PrimaryCtaLink
            href="/blog"
            wrapperClassName="origin-left"
            showArrow={false}
            leadingIcon={<LuEye className="size-5" aria-hidden />}
            onNavigate={() => setBlogMenuOpen(false)}
          >
            {tHome("blogCta")}
          </PrimaryCtaLink>
        </NavbarMegaMenuIntroColumn>
        <div className="grid min-w-0 grid-cols-2 gap-3">
          {posts.map((post) => (
            <div key={post.slug} className="mega-menu-card">
              <ServiceCard
                compact
                href={`/blog/${post.slug}`}
                title={post.title}
                icon={getFooterBlogCategoryIcon(post.category)}
                onNavigate={() => setBlogMenuOpen(false)}
              />
            </div>
          ))}
        </div>
      </div>
    </SiteContainer>
  );
}
