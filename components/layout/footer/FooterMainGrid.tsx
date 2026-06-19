"use client";

import { LuGithub, LuGlobe, LuLinkedin, LuMail, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getFooterBlogPosts } from "@/components/pages/blog/blog-data";
import {
  footerProjectItems,
  footerServiceItems,
  getFooterBlogCategoryIcon,
} from "./footer-config";
import { FooterColumn } from "./FooterColumn";

interface FooterMainGridProps {
  className?: string;
}

interface FooterContactLink {
  label: string;
  href: string;
}

function getContactLinkIcon(href: string): IconType {
  if (href.includes("wa.me") || href.includes("whatsapp.com")) return FaWhatsapp;
  if (href.includes("github.com")) return LuGithub;
  if (href.includes("linkedin.com")) return LuLinkedin;
  return LuGlobe;
}

export function FooterMainGrid({ className }: FooterMainGridProps) {
  const locale = useLocale() as "tr" | "en";
  const t = useTranslations("footer");
  const serviceLabels = t.raw("serviceLabels") as Record<string, string>;
  const projectLabels = t.raw("projectLabels") as Record<string, string>;
  const contactExtraLinks = t.raw("contactExtraLinks") as FooterContactLink[];
  const footerBlogPosts = getFooterBlogPosts(locale);

  const footerLinkClassName =
    "inline-flex items-center gap-2.5 text-sm text-background/60 transition-colors hover:text-background";

  return (
    <div
      className={`grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 ${className ?? ""}`}
    >
      <FooterColumn title={t("servicesTitle")}>
        <ul className="space-y-3">
          {footerServiceItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link href={item.href} className={footerLinkClassName}>
                  <Icon className="size-4 shrink-0" aria-hidden />
                  {serviceLabels[item.navKey]}
                </Link>
              </li>
            );
          })}
        </ul>
      </FooterColumn>

      <FooterColumn title={t("projectsTitle")}>
        <ul className="space-y-3">
          {footerProjectItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link href={item.href} className={footerLinkClassName}>
                  <Icon className="size-4 shrink-0" aria-hidden />
                  {projectLabels[item.navKey]}
                </Link>
              </li>
            );
          })}
        </ul>
      </FooterColumn>

      <FooterColumn title={t("blogTitle")}>
        <ul className="space-y-3">
          {footerBlogPosts.map((post) => {
            const Icon = getFooterBlogCategoryIcon(post.category);

            return (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className={footerLinkClassName}
                >
                  <Icon className="size-4 shrink-0" aria-hidden />
                  {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </FooterColumn>

      <FooterColumn title={t("contactTitle")}>
        <ul className="space-y-3">
          <li>
            <a href={t("contactPhoneHref")} className={footerLinkClassName}>
              <LuPhone className="size-4 shrink-0" aria-hidden />
              {t("contactPhone")}
            </a>
          </li>
          <li>
            <a href={t("contactEmailHref")} className={footerLinkClassName}>
              <LuMail className="size-4 shrink-0" aria-hidden />
              {t("contactEmail")}
            </a>
          </li>
          {contactExtraLinks.map((item) => {
            const Icon = getContactLinkIcon(item.href);

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClassName}
                >
                  <Icon className="size-4 shrink-0" aria-hidden />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </FooterColumn>
    </div>
  );
}
