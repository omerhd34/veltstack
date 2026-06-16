import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  ProjectDetailView,
  getProjectStaticSlugs,
  validateProjectSlug,
} from "@/components/pages/project-detail/ProjectDetailView";
import { BreadcrumbSchema } from "@/components/seo";
import { getPathname } from "@/i18n/navigation";
import { SITE_URL } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const revalidate = 86400;

export function generateStaticParams() {
  return getProjectStaticSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!validateProjectSlug(slug)) return {};

  const t = await getTranslations({ locale, namespace: "projectDetails" });
  const canonical = `${SITE_URL}${getPathname({
    locale: locale as Locale,
    href: `/projeler/${slug}`,
  })}`;

  return {
    title: t(`${slug}.metaTitle`),
    description: t(`${slug}.metaDesc`),
    alternates: { canonical },
    openGraph: {
      title: t(`${slug}.metaTitle`),
      description: t(`${slug}.metaDesc`),
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!validateProjectSlug(slug)) notFound();

  const t = await getTranslations("projectDetails");
  const projectUrl = `${SITE_URL}${getPathname({
    locale: locale as Locale,
    href: `/projeler/${slug}`,
  })}`;
  const projectsUrl = `${SITE_URL}${getPathname({
    locale: locale as Locale,
    href: "/projeler",
  })}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: t("breadcrumbHome"), url: SITE_URL },
          { name: t("breadcrumbProjects"), url: projectsUrl },
          { name: t(`${slug}.heroTitle`), url: projectUrl },
        ]}
      />
      <ProjectDetailView slug={slug} />
    </>
  );
}
