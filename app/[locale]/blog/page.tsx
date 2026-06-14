import { setRequestLocale, getTranslations } from "next-intl/server";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages");

  return (
    <div className="mx-auto max-w-7xl px-4 py-24">
      <h1 className="font-(family-name:--font-heading) text-4xl font-bold">
        {t("blogTitle")}
      </h1>
      <p className="mt-4 text-muted-foreground">{t("blogSubtitle")}</p>
    </div>
  );
}
