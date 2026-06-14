import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

interface BlogDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!slug) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="font-(family-name:--font-heading) text-4xl font-bold capitalize">
        {slug.replace(/-/g, " ")}
      </h1>
      <p className="mt-4 text-muted-foreground">Blog yazısı — Veltstack</p>
    </div>
  );
}
