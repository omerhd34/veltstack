"use client";

import { LuMessageCircle } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { ServiceCard } from "@/components/sections/services/ServiceCard";
import { serviceItems } from "@/components/sections/services/service-items";
import { useUiStore } from "@/store/uiSlice";
import { NavbarMegaMenuIntroColumn } from "./NavbarMegaMenuIntroColumn";

export function NavbarServicesMegaMenuPanel() {
  const tHome = useTranslations("home");
  const setServicesMenuOpen = useUiStore((state) => state.setServicesMenuOpen);

  const cards = serviceItems.map((item) => ({
    href: item.href,
    title: tHome(item.titleKey),
    description: tHome(item.descKey),
    icon: item.icon,
  }));

  return (
    <SiteContainer className="py-10">
      <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
        <NavbarMegaMenuIntroColumn
          headline={tHome("servicesHeadline")}
          intro={tHome("servicesIntro")}
          introLines={11}
        >
          <PrimaryCtaLink
            href="/iletisim"
            wrapperClassName="origin-left"
            showArrow={false}
            leadingIcon={<LuMessageCircle className="size-5" aria-hidden />}
            onNavigate={() => setServicesMenuOpen(false)}
          >
            {tHome("servicesCta")}
          </PrimaryCtaLink>
        </NavbarMegaMenuIntroColumn>
        <div className="grid min-w-0 grid-cols-2 gap-3">
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
