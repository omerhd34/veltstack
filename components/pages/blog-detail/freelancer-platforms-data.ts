export const BLOG_FREELANCER_PLATFORMS_PLACEHOLDER =
  "<!--BLOG_FREELANCER_PLATFORMS-->";

export interface FreelancerPlatformRow {
  id: string;
  name: string;
  url: string;
  model: string;
  scenario: string;
}

interface FreelancerPlatformsContent {
  headers: [string, string, string];
  moreLabel: string;
  rows: FreelancerPlatformRow[];
}

const freelancerPlatformsContent: Record<
  "tr" | "en",
  FreelancerPlatformsContent
> = {
  tr: {
    headers: ["Platform", "Model", "En uygun senaryo"],
    moreLabel: "Diğer {count} platformu göster",
    rows: [
      {
        id: "upwork",
        name: "Upwork",
        url: "https://www.upwork.com/",
        model: "Saatlik / proje bazlı",
        scenario: "Uzun vadeli ve sürekli iş birlikleri",
      },
      {
        id: "fiverr",
        name: "Fiverr",
        url: "https://www.fiverr.com/",
        model: "Gig (paket) bazlı",
        scenario: "Küçük, hızlı teslimatlı işler",
      },
      {
        id: "freelancer-com",
        name: "Freelancer.com",
        url: "https://www.freelancer.com/",
        model: "Teklif (ihale) sistemi",
        scenario: "Geniş kategori, rekabetçi fiyat",
      },
      {
        id: "toptal",
        name: "Toptal",
        url: "https://www.toptal.com/",
        model: "Seçici, üst %3",
        scenario: "Kurumsal ve yüksek bütçeli projeler",
      },
      {
        id: "bionluk",
        name: "Bionluk",
        url: "https://bionluk.com/",
        model: "Gig (paket) bazlı",
        scenario: "Türkiye odaklı, hızlı ve çeşitli hizmetler",
      },
      {
        id: "jobtogo",
        name: "Jobtogo",
        url: "https://www.jobtogo.co/",
        model: "Proje bazlı / teklif sistemi",
        scenario:
          "Türkiye'de kurumsal ve KOBİ projeleri, sözleşme ve fatura",
      },
      {
        id: "armut",
        name: "Armut",
        url: "https://armut.com/",
        model: "Teklif / hizmet talebi bazlı",
        scenario: "Yerel profesyonellerden teklif alma, geniş hizmet kategorileri",
      },
      {
        id: "guru",
        name: "Guru",
        url: "https://www.guru.com/",
        model: "Saatlik / proje bazlı",
        scenario: "Esnek sözleşmeler, orta ölçekli projeler",
      },
      {
        id: "peopleperhour",
        name: "PeoplePerHour",
        url: "https://www.peopleperhour.com/",
        model: "Saatlik / kredi sistemi",
        scenario: "Avrupa ve İngiltere odaklı dijital hizmetler",
      },
      {
        id: "99designs",
        name: "99designs",
        url: "https://99designs.com/",
        model: "Tasarım yarışması",
        scenario: "Logo, marka ve grafik tasarım ihtiyaçları",
      },
      {
        id: "weworkremotely",
        name: "We Work Remotely",
        url: "https://weworkremotely.com/",
        model: "Uzaktan iş ilanı",
        scenario: "Tam zamanlı ve sözleşmeli remote pozisyonlar",
      },
      {
        id: "remoteok",
        name: "Remote OK",
        url: "https://remoteok.com/",
        model: "Uzaktan iş ilanı / freelance",
        scenario: "Yazılım, tasarım ve pazarlama rolleri",
      },
      {
        id: "simplyhired",
        name: "SimplyHired",
        url: "https://www.simplyhired.com/",
        model: "İş arama motoru",
        scenario: "Geniş ilan havuzu, freelance filtreleme",
      },
      {
        id: "dribbble",
        name: "Dribbble",
        url: "https://dribbble.com/",
        model: "Tasarım iş ilanı / freelance",
        scenario: "UI/UX, grafik ve ürün tasarımı rolleri",
      },
    ],
  },
  en: {
    headers: ["Platform", "Model", "Best for"],
    moreLabel: "Show {count} more platforms",
    rows: [
      {
        id: "upwork",
        name: "Upwork",
        url: "https://www.upwork.com/",
        model: "Hourly / project-based",
        scenario: "Long-term, ongoing collaborations",
      },
      {
        id: "fiverr",
        name: "Fiverr",
        url: "https://www.fiverr.com/",
        model: "Gig (package) based",
        scenario: "Small jobs with fast delivery",
      },
      {
        id: "freelancer-com",
        name: "Freelancer.com",
        url: "https://www.freelancer.com/",
        model: "Bidding system",
        scenario: "Wide categories, competitive pricing",
      },
      {
        id: "toptal",
        name: "Toptal",
        url: "https://www.toptal.com/",
        model: "Selective, top 3%",
        scenario: "Enterprise and high-budget projects",
      },
      {
        id: "bionluk",
        name: "Bionluk",
        url: "https://bionluk.com/",
        model: "Gig (package) based",
        scenario: "Turkey-focused, fast and diverse services",
      },
      {
        id: "jobtogo",
        name: "Jobtogo",
        url: "https://www.jobtogo.co/",
        model: "Project-based / bidding",
        scenario:
          "SME and corporate projects in Turkey, contracts and invoicing",
      },
      {
        id: "armut",
        name: "Armut",
        url: "https://armut.com/",
        model: "Quote / service request based",
        scenario: "Local professionals, wide service categories",
      },
      {
        id: "guru",
        name: "Guru",
        url: "https://www.guru.com/",
        model: "Hourly / project-based",
        scenario: "Flexible contracts, mid-size projects",
      },
      {
        id: "peopleperhour",
        name: "PeoplePerHour",
        url: "https://www.peopleperhour.com/",
        model: "Hourly / credit system",
        scenario: "Europe and UK-focused digital services",
      },
      {
        id: "99designs",
        name: "99designs",
        url: "https://99designs.com/",
        model: "Design contest",
        scenario: "Logo, branding and graphic design needs",
      },
      {
        id: "weworkremotely",
        name: "We Work Remotely",
        url: "https://weworkremotely.com/",
        model: "Remote job board",
        scenario: "Full-time and contract remote roles",
      },
      {
        id: "remoteok",
        name: "Remote OK",
        url: "https://remoteok.com/",
        model: "Remote job board / freelance",
        scenario: "Software, design and marketing roles",
      },
      {
        id: "simplyhired",
        name: "SimplyHired",
        url: "https://www.simplyhired.com/",
        model: "Job search engine",
        scenario: "Large listing pool, freelance filtering",
      },
      {
        id: "dribbble",
        name: "Dribbble",
        url: "https://dribbble.com/",
        model: "Design jobs / freelance",
        scenario: "UI/UX, graphic and product design roles",
      },
    ],
  },
};

export function getFreelancerPlatformsContent(locale: "tr" | "en") {
  return freelancerPlatformsContent[locale];
}
