import { setRequestLocale } from "next-intl/server";
import { AboutPageView } from "@/components/pages/about";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPageView />;
}
