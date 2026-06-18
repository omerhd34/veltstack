import { setRequestLocale, getTranslations } from "next-intl/server";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div className="mx-auto max-w-7xl py-24">
      <h1 className="font-(family-name:--font-heading) text-4xl font-bold">
        {t("title")}
      </h1>
      <p className="mt-4 text-muted-foreground">{t("subtitle")}</p>
    </div>
  );
}
