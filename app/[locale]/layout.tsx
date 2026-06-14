import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { LocaleHtmlLang } from "@/components/layout/LocaleHtmlLang"
import { LocalBusinessSchema } from "@/components/seo"

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  if (!routing.locales.includes(locale as "tr" | "en")) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages({ locale })

  return (
    <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
      <LocaleHtmlLang />
      <LocalBusinessSchema />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  )
}
