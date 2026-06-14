import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const revalidate = 86400;

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!slug) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-24">
      <h1 className="font-(family-name:--font-heading) text-4xl font-bold capitalize">
        {slug.replace(/-/g, " ")}
      </h1>
      <p className="mt-4 text-muted-foreground">
        Hizmet detay sayfası — Veltstack
      </p>
    </div>
  );
}
