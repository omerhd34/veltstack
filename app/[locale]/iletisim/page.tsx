import { setRequestLocale } from "next-intl/server";
import { ContactPageView } from "@/components/pages/contact";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPageView />;
}
