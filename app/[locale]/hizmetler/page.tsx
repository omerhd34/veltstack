import { setRequestLocale } from "next-intl/server";
import { ServicesPageView } from "@/components/pages/services";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesPageView />;
}
