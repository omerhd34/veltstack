export const BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER =
  "<!--BLOG_DOMAIN_EXTENSIONS-->";

export interface DomainExtensionRow {
  extension: string;
  audience: string;
  advantage: string;
}

interface DomainExtensionsContent {
  headers: [string, string, string];
  moreLabel: string;
  rows: DomainExtensionRow[];
}

const domainExtensionsContent: Record<"tr" | "en", DomainExtensionsContent> = {
  tr: {
    headers: ["Uzantı", "Kimler için?", "Öne çıkan avantaj"],
    moreLabel: "Diğer {count} uzantıyı göster",
    rows: [
      {
        extension: ".com",
        audience: "Global markalar, ticari siteler",
        advantage: "En yaygın ve güvenilir uzantı",
      },
      {
        extension: ".net",
        audience: "Teknoloji ve altyapı projeleri",
        advantage: ".com doluysa güçlü alternatif",
      },
      {
        extension: ".com.tr",
        audience: "Türkiye odaklı işletmeler",
        advantage: "Yerel güven ve TR pazarı algısı",
      },
      {
        extension: ".net.tr",
        audience: "Türkiye'deki teknoloji ve ağ projeleri",
        advantage: ".com.tr doluysa yerel alternatif",
      },
      {
        extension: ".tr",
        audience: "Türkiye merkezli markalar ve kurumlar",
        advantage: "Kısa ve yerel kimlik vurgusu",
      },
      {
        extension: ".xyz",
        audience: "Startup'lar, yenilikçi markalar",
        advantage: "Modern ve geniş kullanılabilirlik",
      },
      {
        extension: ".info",
        audience: "Bilgi siteleri, rehberler, wiki tarzı içerikler",
        advantage: "İçerik odaklı projeler için uygun algı",
      },
      {
        extension: ".pro",
        audience: "Serbest çalışanlar, danışmanlar, uzman profilleri",
        advantage: "Profesyonel hizmet vurgusu",
      },
      {
        extension: ".site",
        audience: "Kurumsal tanıtım ve genel web siteleri",
        advantage: ".com'a yakın anlam, genelde uygun fiyat",
      },
      {
        extension: ".tech",
        audience: "Yazılım, SaaS ve teknoloji girişimleri",
        advantage: "Sektörle doğrudan örtüşen mesaj",
      },
      {
        extension: ".online",
        audience: "Dijital hizmetler, eğitim ve online işletmeler",
        advantage: "Web'de faaliyet vurgusu",
      },
      {
        extension: ".org",
        audience: "STK, dernekler, topluluklar",
        advantage: "Kâr amacı gütmeyen yapılar için uygun",
      },
      {
        extension: ".club",
        audience: "Topluluklar, kulüpler, üyelik siteleri",
        advantage: "Topluluk ve aidiyet hissi",
      },
      {
        extension: ".biz",
        audience: "KOBİ'ler ve ticari girişimler",
        advantage: "İş odaklı, erişilebilir fiyatlı seçenek",
      },
    ],
  },
  en: {
    headers: ["Extension", "Best for", "Key advantage"],
    moreLabel: "Show {count} more",
    rows: [
      {
        extension: ".com",
        audience: "Global brands, commercial sites",
        advantage: "Most trusted and memorable extension",
      },
      {
        extension: ".net",
        audience: "Technology and infrastructure projects",
        advantage: "Strong alternative when .com is taken",
      },
      {
        extension: ".com.tr",
        audience: "Turkey-focused businesses",
        advantage: "Local trust and Turkish market presence",
      },
      {
        extension: ".net.tr",
        audience: "Tech and network projects in Turkey",
        advantage: "Local alternative when .com.tr is taken",
      },
      {
        extension: ".tr",
        audience: "Turkey-based brands and organizations",
        advantage: "Short extension with local identity",
      },
      {
        extension: ".xyz",
        audience: "Startups and innovative brands",
        advantage: "Modern feel with wide availability",
      },
      {
        extension: ".info",
        audience: "Information sites, guides, wiki-style content",
        advantage: "Suits content-first projects",
      },
      {
        extension: ".pro",
        audience: "Freelancers, consultants, expert profiles",
        advantage: "Signals professional services",
      },
      {
        extension: ".site",
        audience: "Corporate sites and general web projects",
        advantage: "Similar meaning to .com, often affordable",
      },
      {
        extension: ".tech",
        audience: "Software, SaaS and tech startups",
        advantage: "Direct match for technology brands",
      },
      {
        extension: ".online",
        audience: "Digital services, education and online businesses",
        advantage: "Emphasizes web-based presence",
      },
      {
        extension: ".org",
        audience: "NGOs, associations, communities",
        advantage: "Suits non-profit and community structures",
      },
      {
        extension: ".club",
        audience: "Communities, clubs and membership sites",
        advantage: "Conveys community and belonging",
      },
      {
        extension: ".biz",
        audience: "Small businesses and commercial ventures",
        advantage: "Business-focused, accessible pricing",
      },
    ],
  },
};

export function getDomainExtensionsContent(locale: "tr" | "en") {
  return domainExtensionsContent[locale];
}
