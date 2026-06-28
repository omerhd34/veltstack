import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  ServiceDetailView,
  getServiceStaticSlugs,
  isServiceSlug,
} from "@/components/pages/service-detail";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo";
import { getPathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const revalidate = 86400;

export function generateStaticParams() {
  return getServiceStaticSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isServiceSlug(slug)) return {};

  const t = await getTranslations({ locale, namespace: "serviceDetails" });
  const canonical = `https://www.veltstack.com${getPathname({
    locale: locale as Locale,
    href: `/hizmetler/${slug}`,
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

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!isServiceSlug(slug)) notFound();

  const t = await getTranslations("serviceDetails");
  const serviceUrl = `https://www.veltstack.com${getPathname({
    locale: locale as Locale,
    href: `/hizmetler/${slug}`,
  })}`;
  const servicesUrl = `https://www.veltstack.com${getPathname({
    locale: locale as Locale,
    href: "/hizmetler",
  })}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: t("breadcrumbHome"), url: "https://www.veltstack.com" },
          { name: t("breadcrumbServices"), url: servicesUrl },
          { name: t(`${slug}.heroTitle`), url: serviceUrl },
        ]}
      />
      <ServiceSchema
        name={t(`${slug}.heroTitle`)}
        description={t(`${slug}.heroSubtitle`)}
        url={serviceUrl}
      />
      <ServiceDetailView slug={slug} />
    </>
  );
}
