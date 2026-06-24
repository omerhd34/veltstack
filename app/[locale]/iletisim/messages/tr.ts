export const contactTr = {
  formBadge: "Mesaj Gönderin",
  formTitle: "Projenizi anlatın",

  fieldName: "Ad Soyad",
  fieldNamePlaceholder: "Adınız ve soyadınız",
  fieldEmail: "E-posta",
  fieldEmailPlaceholder: "ornek@sirket.com",
  fieldPhone: "Telefon",
  fieldPhonePlaceholder: "5XX XXX XX XX",
  fieldPhoneCountryLabel: "Ülke kodu",
  fieldPhoneOptional: "opsiyonel",
  fieldService: "Hizmet Türü",
  fieldServicePlaceholder: "Hizmet seçin.",
  fieldPackage: "Paket Seçimi",
  fieldPackagePlaceholder: "Paket seçin.",
  fieldTier: "Kademe Tipi",
  fieldTierPlaceholder: "Kademe seçin.",
  fieldBudget: "Bütçe Aralığı",
  fieldBudgetPlaceholder: "Bütçe seçin.",
  fieldMessage: "Mesajınız",
  fieldMessageOptional: "opsiyonel",
  fieldMessagePlaceholder:
    "Projenizi, beklentilerinizi ve varsa teknik gereksinimlerinizi anlatın…",

  serviceOptions: [
    { value: "web-sitesi", label: "Web Sitesi Geliştirme" },
    { value: "web-sitesi-yenileme", label: "Web & Uygulama Yenileme" },
    { value: "uygulama", label: "Uygulama Geliştirme" },
    { value: "seo-hizmetleri", label: "SEO Hizmetleri" },
    { value: "teknik-denetim", label: "Teknik Denetim" },
    { value: "bakim-ve-destek", label: "Bakım & Destek" },
    { value: "diger", label: "Diğer / Henüz bilmiyorum" },
  ],

  tierOptions: [
    { value: "temel", label: "Temel" },
    { value: "standart", label: "Standart" },
    { value: "pro", label: "Pro" },
    { value: "belirsiz", label: "Henüz bilmiyorum" },
  ],

  servicePackages: {
    "web-sitesi": [
      { value: "portfolio", label: "Portföy / Tanıtım Web Sitesi" },
      { value: "corporate", label: "Kurumsal Web Sitesi" },
      { value: "ecommerce", label: "E-Ticaret Web Sitesi" },
    ],
    "web-sitesi-yenileme": [
      { value: "portfolio", label: "Portföy / Tanıtım Sitesi Yenileme" },
      { value: "corporate", label: "Kurumsal Site Yenileme" },
      { value: "ecommerce", label: "E-Ticaret Sitesi Yenileme" },
    ],
    uygulama: [
      { value: "portfolio", label: "Tanıtım / Portföy Uygulaması" },
      { value: "corporate", label: "Kurumsal Mobil Uygulama" },
      { value: "ecommerce", label: "E-Ticaret Mobil Uygulama" },
    ],
    "seo-hizmetleri": [
      { value: "seoServices", label: "Dijital Pazarlama & SEO" },
    ],
    "teknik-denetim": [
      { value: "webAudit", label: "Web Sitesi Teknik Denetimi" },
      { value: "appAudit", label: "Mobil Uygulama Teknik Denetimi" },
      { value: "infrastructureAudit", label: "Altyapı ve Güvenlik Denetimi" },
    ],
    "bakim-ve-destek": [
      { value: "maintenanceServices", label: "Bakım & Destek Hizmetleri" },
    ],
  },

  budgetOptions: [
    { value: "0k-15k", label: "0 – 15.000 ₺" },
    { value: "15k-25k", label: "15.000 – 25.000 ₺" },
    { value: "25k-50k", label: "25.000 – 50.000 ₺" },
    { value: "50k-75k", label: "50.000 – 75.000 ₺" },
    { value: "75k-100k", label: "75.000 – 100.000 ₺" },
    { value: "100k+", label: "100.000 ₺ ve üzeri" },
    { value: "belirsiz", label: "Henüz bilmiyorum" },
  ],

  submitButton: "Gönder ve Teklif Al",
  submitting: "Gönderiliyor…",

  successTitle: "Mesajınız iletildi!",
  successMessage:
    "En kısa sürede, genellikle 24 saat içinde uzman ekibimiz size özel yol haritasıyla dönüş yapacak. Teşekkürler!",
  successButtonBack: "Yeni mesaj gönder",

  errorMessage:
    "Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",

  infoBadge: "İletişim Kanalları",
  infoTitle: "Tercih ettiğiniz kanaldan ulaşın.",

  contactItems: [
    { label: "Telefon", value: "+90 507 849 29 03", href: "tel:+905078492903" },
    {
      label: "WhatsApp",
      href: "https://wa.me/905078492903",
      value: "+90 507 849 29 03",
    },
    {
      label: "E-posta",
      value: "demirome123@gmail.com",
      href: "mailto:demirome123@gmail.com",
    },
    {
      label: "Portfolyo | Ömer Halis Demir",
      value: "omerhalisdemir.com.tr",
      href: "https://www.omerhalisdemir.com.tr/",
    },
    {
      label: "LinkedIn",
      value: "ömer-halis-demir-7a9b79169/",
      href: "https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169",
    },
    {
      label: "GitHub",
      value: "omerhd34",
      href: "https://github.com/omerhd34",
    },
  ],

  workflowBadge: "Süreç",
  workflowTitleLead: "Formdan projeye",
  workflowTitleAccent: "şeffaf ve planlı bir süreç",
  workflowSubtitle:
    "Her adımı önceden planlıyor, süreci şeffaf şekilde yönetiyor ve sizi her aşamada bilgilendiriyoruz.",
  workflowSteps: [
    {
      step: "1",
      title: "Formu Gönderin",
      desc: "Projeniz hakkında birkaç temel bilgi paylaşmanız yeterli; birkaç dakikada biter.",
      timing: "1 dakika",
    },
    {
      step: "2",
      title: "İhtiyaçları Belirleyelim",
      desc: "Hedeflerinizi analiz ediyor, kapsamı birlikte netleştiriyor ve en uygun çözümü belirliyoruz.",
      timing: "24 saat",
    },
    {
      step: "3",
      title: "Teklifi Oluşturalım",
      desc: "Kapsam, maliyet ve teslim planını içeren detaylı teklifinizi hazırlayıp size iletiyoruz.",
      timing: "48 saat",
    },
    {
      step: "4",
      title: "Geliştirmeye Başlayalım",
      desc: "Onayınızdan sonra geliştirmeye başlıyor ve süreci düzenli paylaşıyoruz.",
      timing: "Başlangıç",
    },
  ],
} as const;
