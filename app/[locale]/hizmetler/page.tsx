import { setRequestLocale, getTranslations } from "next-intl/server";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages");

  return (
    <div className="mx-auto max-w-7xl px-4 py-24">
      <h1 className="font-(family-name:--font-heading) text-4xl font-bold">
        {t("servicesTitle")}
      </h1>
      <p className="mt-4 text-muted-foreground">{t("servicesSubtitle")}</p>
    </div>
  );
}
