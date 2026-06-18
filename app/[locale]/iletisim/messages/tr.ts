export const contactTr = {
  heroBadge: "İletişim",
  heroTitle: "Projenizi birlikte hayata geçirelim",
  heroSubtitle:
    "Yeni bir proje, iş birliği ya da teknik danışmanlık için formu doldurun veya doğrudan yazın — genellikle 24 saat içinde dönüş yapıyorum.",
  heroScrollLabel: "Forma ilerle",
  heroQuickContacts: [
    { label: "Telefon", value: "+90 507 849 29 03", href: "tel:+905078492903" },
    {
      label: "E-posta",
      value: "demirome123@gmail.com",
      href: "mailto:demirome123@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "Ömer Halis Demir",
      href: "https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169",
    },
  ],

  formBadge: "Mesaj Gönderin",
  formTitle: "Projenizi anlatın",
  formSubtitle:
    "Aşağıdaki formu doldurarak ihtiyaçlarınızı paylaşın; kapsam, süre ve fiyat konularında size özel bir değerlendirme sunayım.",

  fieldName: "Ad Soyad",
  fieldNamePlaceholder: "Adınız ve soyadınız",
  fieldEmail: "E-posta",
  fieldEmailPlaceholder: "ornek@domain.com",
  fieldPhone: "Telefon",
  fieldPhonePlaceholder: "+90 5XX XXX XX XX",
  fieldPhoneOptional: "isteğe bağlı",
  fieldSubject: "Konu",
  fieldSubjectPlaceholder: "Örn. Kurumsal web sitesi yenileme",
  fieldService: "Hizmet Türü",
  fieldServicePlaceholder: "Hizmet seçin",
  fieldBudget: "Bütçe Aralığı",
  fieldBudgetPlaceholder: "Bütçe seçin",
  fieldMessage: "Mesajınız",
  fieldMessagePlaceholder:
    "Projenizi, beklentilerinizi ve varsa teknik gereksinimlerinizi anlatın…",
  fieldRequired: "Zorunlu alan",

  serviceOptions: [
    { value: "kurumsal-web", label: "Kurumsal Web Sitesi" },
    { value: "e-ticaret", label: "E-Ticaret" },
    { value: "mobil-uygulama", label: "Mobil Uygulama" },
    { value: "seo", label: "SEO Optimizasyonu" },
    { value: "diger", label: "Diğer / Henüz bilmiyorum" },
  ],

  budgetOptions: [
    { value: "0k-15k", label: "0 – 15.000 ₺" },
    { value: "15k-25k", label: "15.000 – 25.000 ₺" },
    { value: "25k-50k", label: "25.000 – 50.000 ₺" },
    { value: "50k-75k", label: "50.000 – 75.000 ₺" },
    { value: "75k-100k", label: "75.000 – 100.000 ₺" },
    { value: "100k+", label: "100.000 ₺ ve üzeri" },
    { value: "belirsiz", label: "Henüz bilmiyorum" },
  ],

  submitButton: "Mesajı Gönder",
  submitting: "Gönderiliyor…",

  successTitle: "Mesajınız iletildi!",
  successMessage:
    "En kısa sürede, genellikle 24 saat içinde size dönüş yapacağım. Teşekkürler!",
  successButtonBack: "Yeni mesaj gönder",

  errorMessage:
    "Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",

  infoBadge: "Doğrudan İletişim",
  infoTitle: "Tercih ettiğiniz kanaldan ulaşın",

  contactItems: [
    { label: "Telefon", value: "+90 507 849 29 03", href: "tel:+905078492903" },
    {
      label: "E-posta",
      value: "demirome123@gmail.com",
      href: "mailto:demirome123@gmail.com",
    },
    { label: "Konum", value: "İstanbul / Türkiye" },
    {
      label: "GitHub",
      value: "github.com/omerhd34",
      href: "https://github.com/omerhd34",
    },
    {
      label: "LinkedIn",
      value: "Ömer Halis Demir",
      href: "https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169",
    },
  ],

  responseTimeBadge: "Yanıt Süresi",
  responseTimeValue: "~24 saat",
  responseTimeNote:
    "Mesajları genellikle aynı gün, en geç 24 saat içinde yanıtlıyorum.",

  processTitle: "Süreç nasıl işliyor?",
  processSteps: [
    {
      step: "01",
      title: "Mesaj gönderin",
      desc: "Formu doldurun ya da doğrudan yazın.",
    },
    {
      step: "02",
      title: "Ücretsiz görüşme",
      desc: "Kapsam, süre ve fiyatı birlikte belirleyelim.",
    },
    {
      step: "03",
      title: "Geliştirmeye başlayalım",
      desc: "Anlaşma sonrası süreci hızla başlatıyorum.",
    },
  ],
} as const;
