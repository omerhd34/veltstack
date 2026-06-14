"use client";

import { LuArrowRight } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/shadcn";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ServiceCard } from "@/components/sections/services/ServiceCard";
import { serviceItems } from "@/components/sections/services/service-items";
import { useUiStore } from "@/store/uiSlice";

export function NavbarServicesMegaMenuPanel() {
  const tHome = useTranslations("home");
  const setServicesMenuOpen = useUiStore((state) => state.setServicesMenuOpen);

  const cards = [
    {
      href: serviceItems[0].href,
      title: tHome("servicesCorporateTitle"),
      description: tHome("servicesCorporateDesc"),
      tag: tHome("servicesCorporateTag"),
      icon: serviceItems[0].icon,
    },
    {
      href: serviceItems[1].href,
      title: tHome("servicesEcommerceTitle"),
      description: tHome("servicesEcommerceDesc"),
      tag: tHome("servicesEcommerceTag"),
      icon: serviceItems[1].icon,
    },
    {
      href: serviceItems[2].href,
      title: tHome("servicesMobileTitle"),
      description: tHome("servicesMobileDesc"),
      tag: tHome("servicesMobileTag"),
      icon: serviceItems[2].icon,
    },
    {
      href: serviceItems[3].href,
      title: tHome("servicesSeoTitle"),
      description: tHome("servicesSeoDesc"),
      tag: tHome("servicesSeoTag"),
      icon: serviceItems[3].icon,
    },
    {
      href: serviceItems[4].href,
      title: tHome("servicesPortfolioTitle"),
      description: tHome("servicesPortfolioDesc"),
      tag: tHome("servicesPortfolioTag"),
      icon: serviceItems[4].icon,
    },
    {
      href: serviceItems[5].href,
      title: tHome("servicesApiTitle"),
      description: tHome("servicesApiDesc"),
      tag: tHome("servicesApiTag"),
      icon: serviceItems[5].icon,
    },
  ];

  return (
    <SiteContainer className="py-10">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
        <div className="mega-menu-intro max-w-md">
          <h2 className="font-(family-name:--font-heading) text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            {tHome("servicesHeadline")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {tHome("servicesIntro")}
          </p>
          <Button
            size="lg"
            className="mt-6 rounded-full bg-[#0A0A0F] px-8 text-white hover:bg-[#0A0A0F]/90"
            asChild
          >
            <Link href="/iletisim" onClick={() => setServicesMenuOpen(false)}>
              {tHome("servicesCta")}
              <LuArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3 xl:grid-cols-3">
          {cards.map((service) => (
            <div key={service.href} className="mega-menu-card">
              <ServiceCard
                compact
                onNavigate={() => setServicesMenuOpen(false)}
                {...service}
              />
            </div>
          ))}
        </div>
      </div>
    </SiteContainer>
  );
}
