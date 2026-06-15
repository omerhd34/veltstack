import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ServicesPackagesPanel } from "./ServicesPackagesPanel";
import type { PackageCardData } from "./ServicePackageCard";
import type { PackageCategory } from "./packages-config";

interface ServicesPackagesSectionProps {
  className?: string;
}

export async function ServicesPackagesSection({
  className,
}: ServicesPackagesSectionProps) {
  const t = await getTranslations("servicesPage");

  const packages = {
    web: t.raw("webPackages") as Record<string, PackageCardData>,
    app: t.raw("appPackages") as Record<string, PackageCardData>,
    seo: t.raw("seoPackages") as Record<string, PackageCardData>,
    api: t.raw("apiPackages") as Record<string, PackageCardData>,
  };

  const tabs: { id: PackageCategory; label: string }[] = [
    { id: "web", label: t("tabWeb") },
    { id: "app", label: t("tabApp") },
    { id: "seo", label: t("tabSeo") },
    { id: "api", label: t("tabApi") },
  ];

  return (
    <section
      id="services-packages"
      className={`relative scroll-mt-20 overflow-hidden bg-[#050f0c] py-20 text-white md:py-28 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500/25 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgb(58_107_82/0.08),transparent)]"
      />

      <SiteContainer className="relative px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-brand-accent md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {t("packagesTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-emerald-50/55 md:text-base">
            {t("packagesSubtitle")}
          </p>
        </div>

        <ServicesPackagesPanel
          className="mt-12 md:mt-16"
          labels={{
            tabs,
            tierTemel: t("tierTemel"),
            tierStandart: t("tierStandart"),
            tierPro: t("tierPro"),
            statDelivery: t("statDelivery"),
            statRevision: t("statRevision"),
            statPages: t("statPages"),
            statScreens: t("statScreens"),
            statKeywords: t("statKeywords"),
            statEndpoints: t("statEndpoints"),
            getQuote: t("getQuote"),
            techPrimaryLabel: t("techPrimaryLabel"),
            techSecondaryLabel: t("techSecondaryLabel"),
          }}
          intros={{
            web: {
              title: t("webIntroTitle"),
              p1: t("webIntroP1"),
              p2: t("webIntroP2"),
            },
            app: {
              title: t("appIntroTitle"),
              p1: t("appIntroP1"),
              p2: t("appIntroP2"),
            },
            seo: {
              title: t("seoIntroTitle"),
              p1: t("seoIntroP1"),
              p2: t("seoIntroP2"),
            },
            api: {
              title: t("apiIntroTitle"),
              p1: t("apiIntroP1"),
              p2: t("apiIntroP2"),
            },
          }}
          packages={packages}
        />
      </SiteContainer>
    </section>
  );
}
