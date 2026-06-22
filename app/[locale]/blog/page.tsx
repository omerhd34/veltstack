// app/[locale]/blog/page.tsx
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { BlogPageView } from "@/components/pages/blog";
import { getPathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blogPage" });
  const canonical = `https://www.veltstack.com${getPathname({
    locale: locale as Locale,
    href: "/blog",
  })}`;

  return {
    title: t("heroBadge"),
    description: t("heroSubtitle"),
    alternates: { canonical },
    openGraph: {
      title: t("heroTitle"),
      description: t("heroSubtitle"),
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BlogPageView />;
}
