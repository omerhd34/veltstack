import {
  bakimVeDestekProcessTr,
  seoHizmetleriProcessTr,
  teknikDenetimProcessTr,
  uygulamaGelistirmeProcessTr,
  webSitesiGelistirmeProcessTr,
  webSitesiYenilemeProcessTr,
} from "../service-process-items/tr";

export const serviceDetailsTr = {
  featuresTitle: "Neler Sunuyoruz",
  featuresBadge: "Özellikler",
  featuresSubtitle:
    "Kapsamı baştan netleştirip teslimatı ölçülebilir adımlarla yönetiyorum. Proje boyunca şeffaf iletişim ve düzenli geri bildirimle ilerlersiniz.",
  processTitle: "Çalışma Süreci",
  processSubtitle:
    "Keşiften yayına kadar her aşamada ne yapılacağını, ne zaman teslim edileceğini ve hangi çıktının alınacağını netleştiriyoruz. Tasarım, geliştirme, test ve canlıya alma adımlarını öngörülebilir bir planla yönetiyor; proje boyunca düzenli iletişimle sizi bilgilendiriyoruz.",
  techTitle: "Kullandığımız Teknolojiler",
  techSubtitle:
    "Projenizin ihtiyacına göre seçilmiş, güncel ve ölçeklenebilir araçlar. Renkli ikonlar projelerimizde asıl kullandığımız teknolojileri; soluk ikonlar ise talep etmeniz halinde kullanabileceğimiz alternatifleri gösterir.",
  techCategoryFrontend: "Frontend",
  techCategoryMobile: "Mobil Geliştirme",
  techCategoryUi: "UI Kütüphaneleri",
  techCategoryBackend: "Backend",
  techCategoryDatabase: "Veritabanı",
  techCategoryDevops: "DevOps & Hosting",
  techCategoryAnalytics: "Analitik & SEO",
  techCategoryPayment: "Ödeme",
  techCategoryStore: "Mağaza & Yayın",
  techCategoryTools: "Araçlar & Entegrasyon",
  deliveryLabel: "Teslim Süresi",
  heroImageAlt: "Dijital geliştirme çalışma ortamı",
  statDelivery: "Teslim Süresi (Gün)",
  statSupport: "Destek Süresi (Gün)",
  statTiers: "Paket Seviyesi",
  statRevisions: "Revizyon Sayısı",
  statDeliveryHint:
    "Proje kapsamına göre değişen tahmini teslim aralığı. Keşif görüşmesinden sonra net takvim paylaşılır.",
  statSupportHint:
    "Yayın sonrası teknik destek, revizyon ve küçük düzenlemeler için ayrılan süre aralığı.",
  statTiersHint:
    "Temel, Standart ve Pro olmak üzere üç net kapsam seviyesi; ihtiyacınıza göre karşılaştırabilirsiniz.",
  statRevisionsHint:
    "Seçtiğiniz pakette tanımlı tasarım ve içerik revizyonu sayısı. Geri bildirimlerinizi liste halinde iletmeniz yeterli; her revizyonda bu maddeler uygulanır.",
  featureDetailLabel: "Özellik detayı",
  breadcrumbHome: "Ana Sayfa",
  breadcrumbServices: "Hizmetler",
  "web-sitesi-gelistirme": {
    metaTitle: "Web Sitesi Geliştirme",
    metaDesc:
      "Kurumsal web sitesi, e-ticaret ve portfolyo projelerinde uçtan uca web geliştirme. Next.js ile hızlı, SEO uyumlu ve ölçeklenebilir çözümler.",
    heroBadge: "Web Geliştirme",
    heroTitle: "Web Sitesi Geliştirme",
    heroSubtitle:
      "Kurumsal siteden e-ticarete, portfolyodan tanıtım sayfasına kadar her web projesini uçtan uca geliştiriyorum.",
    heroSubtitleSecondary:
      "Projenize uygun modern altyapı, SEO uyumlu yapı ve mobil öncelikli tasarımla markanızı dijitalde güçlü bir şekilde temsil edecek, hızlı ve ölçeklenebilir çözümler sunuyorum.",
    deliveryTime: "14-84 gün",
    processSubtitle:
      "Keşiften yayına kadar her aşamada ne yapılacağını, ne zaman teslim edileceğini ve hangi çıktının alınacağını netleştiriyoruz. Tasarım, geliştirme, test ve canlıya alma adımlarını öngörülebilir bir planla yönetiyor; proje boyunca düzenli iletişimle sizi bilgilendiriyoruz.",
    techSubtitle:
      "Projenizin ihtiyacına göre seçilmiş, güncel ve ölçeklenebilir araçlar. Renkli ikonlar projelerimizde asıl kullandığımız teknolojileri; soluk ikonlar ise talep etmeniz halinde kullanabileceğimiz alternatifleri gösterir.",
    processItems: webSitesiGelistirmeProcessTr,
    features: [
      {
        title: "SEO Altyapısı",
        description:
          "SSR, meta etiketleri, sitemap ve yapılandırılmış veri ile siteniz arama motorlarına hazır teslim edilir. Open Graph, canonical URL ve robots yapılandırması sayesinde indeksleme sorunları en baştan önlenir. Blog, hizmet ve ürün sayfaları için ayrı meta şablonları hazırlanır. Google Search Console entegrasyonu ile tarama durumu yayın öncesinden takip edilir. Arama sonuçlarında daha çekici görünmeniz için başlık ve açıklama metinleri optimize edilir.",
      },
      {
        title: "E-Ticaret ve Ödeme",
        description:
          "Ürün kataloğu, sepet, sipariş yönetimi ve güvenli ödeme akışları uçtan uca kurulur. PayTR, İyzico ve Stripe gibi altyapılarla mobil uyumlu, dönüşüm odaklı bir satış deneyimi sunulur. Stok, kargo ve sipariş durumu tek panelden takip edilebilir. Ödeme sayfası SSL ve 3D Secure ile korunur; PCI uyumlu altyapılar tercih edilir. Sipariş onay e-postaları ve basit raporlama ekranları günlük operasyonları kolaylaştırır.",
      },
      {
        title: "Hızlı Performans",
        description:
          "Next.js, görsel optimizasyonu ve CDN ile yüksek Lighthouse skorları ve düşük yükleme süreleri hedeflenir. Core Web Vitals proje başında belirlenir; performans süreç boyunca izlenir. Lazy loading, font optimizasyonu ve gereksiz script temizliği ile sayfa hızı korunur. Kritik CSS ve kaynak önceliklendirme doğru sırayla yüklenir. Yayın öncesi son performans turu tamamlanarak canlı ortamda da hız garanti altına alınır.",
      },
      {
        title: "Responsive Tasarım",
        description:
          "Mobil, tablet ve masaüstünde tutarlı, dokunmatik uyumlu bir deneyim tasarlanır. Tipografi, boşluklar ve etkileşimler her ekran boyutu için ayrı optimize edilir. Navigasyon, formlar ve CTA butonları küçük ekranlarda rahat kullanılabilir. Hamburger menü ve dokunmatik hedef boyutları mobil standartlara uygun tutulur. Farklı cihaz ve tarayıcılarda gerçek testler yapılarak uyumluluk yayın öncesi doğrulanır.",
      },
      {
        title: "Çok Dilli Destek",
        description:
          "Türkçe, İngilizce ve ihtiyacınıza göre ek diller için altyapı kurulur. URL yapısı, meta etiketleri ve hreflang etiketleri her dilde SEO dostu kalacak şekilde yapılandırılır. Dil bazlı sitemap ve içerik yönetimi uluslararası erişimi destekler. Varsayılan dil ve alternatif yönlendirmeler net tanımlanır. Yeni dil eklemek istediğinizde mevcut yapı bozulmadan genişletilebilir bir mimari tercih edilir.",
      },
      {
        title: "Dark & Light Modu",
        description:
          "Ziyaretçiler karanlık veya aydınlık temayı seçebilir; sistem tercihini otomatik takip etmek de mümkündür. Her iki modda kontrast ve marka tutarlılığı korunur, seçim tarayıcıda hatırlanır. Renk token'ları her tema için ayrı optimize edilir. Tema geçişleri yumuşak animasyonlarla sunulur. WCAG kontrast standartları her iki modda da gözetilerek erişilebilir bir deneyim sağlanır.",
      },
      {
        title: "Admin Panel & CMS",
        description:
          "Blog, hizmet ve sayfa içeriklerinizi kod bilmeden yönetebileceğiniz bir admin panel kurulur. Panel arayüzü müşterinin istediği dilde hazırlanır; WYSIWYG editör, görsel yükleme ve taslak-yayın akışı standarttır. Rol bazlı erişim ile ekip üyelerine farklı yetkiler tanımlanabilir. İçerik değişiklikleri anında veya planlı yayınlanabilir. Panel mobil uyumlu olduğu için hareket halindeyken de güncelleme yapabilirsiniz.",
      },
      {
        title: "Güvenlik ve SSL",
        description:
          "HTTPS, güvenli header yapılandırması ve modern kimlik doğrulama standartları projeye en baştan entegre edilir. Form gönderimlerinde rate limiting ve temel bot koruması uygulanır. Bağımlılık güvenlik taramaları geliştirme sürecinde düzenli yapılır. Admin ve API endpoint'leri yetkilendirme katmanı ile korunur. Yayın öncesi güvenlik kontrol listesi tamamlanarak canlı ortama güvenli geçiş sağlanır.",
      },
      {
        title: "Analitik ve Form Takibi",
        description:
          "Google Analytics, Search Console ve dönüşüm olayları projeye entegre edilir. İletişim formları spam koruması ve anlık e-posta bildirimleri ile birlikte devreye alınır. Hangi sayfaların trafik aldığını ve form gönderimlerini takip edebilirsiniz. GTM veya doğrudan entegrasyon ihtiyacınıza göre planlanır. İlk ay sonunda temel performans raporu ile veri toplama doğrulanır.",
      },
    ],
  },
  "web-sitesi-yenileme": {
    metaTitle: "Web & Uygulama Yenileme",
    metaDesc:
      "Eski veya yavaş web sitenizi ve mobil uygulamanızı modern tasarım, hızlı altyapı ve SEO iyileştirmeleriyle yenileyin. İçeriklerinizi koruyarak güvenli geçiş.",
    heroBadge: "Web & Uygulama Yenileme",
    heroTitle: "Web & Uygulama Yenileme",
    heroSubtitle:
      "Güncelliğini yitirmiş, yavaş veya mobil uyumsuz web ve uygulama deneyimlerinizi modern, hızlı ve dönüşüm odaklı bir yapıya taşıyoruz.",
    heroSubtitleSecondary:
      "Mevcut içeriklerinizi koruyarak SEO sıralamanızı riske atmadan yeni tasarım ve altyapıya güvenli geçiş sağlıyoruz.",
    deliveryTime: "7-49 gün",
    processSubtitle:
      "Mevcut sitenizi veya uygulamanızı analizden canlıya almaya kadar ölçülebilir adımlarla yeniliyoruz. SEO kaybı riskini en aza indiren geçiş planı, tasarım onayı ve içerik migrasyonu süreç boyunca şeffaf iletişimle yönetilir.",
    techSubtitle:
      "Mevcut sitenizi modern altyapıya taşırken kullandığımız güncel ve ölçeklenebilir araçlar.",
    processItems: webSitesiYenilemeProcessTr,
    features: [
      {
        title: "Mevcut Site Analizi",
        description:
          "Teknik altyapı, performans, SEO ve kullanıcı deneyimi açısından mevcut sitenizi kapsamlı şekilde denetliyoruz. Tespit edilen sorunları etki ve aciliyet bazında sıralayıp önceliklendirilmiş bir aksiyon planı çıkarıyoruz. Yenileme kapsamı bu analiz sonucunda netleştirilir; gereksiz iş yükü en baştan elenir.",
      },
      {
        title: "Modern Tasarım ve UX",
        description:
          "Markanıza uygun güncel arayüz, net bilgi mimarisi ve dönüşüm odaklı sayfa akışları tasarlıyoruz. Mobil ve masaüstünde tutarlı bir deneyim hedeflenir; tipografi ve bileşen dili projenizin kimliğiyle uyumlu kalır. Onayınız alınmadan geliştirme aşamasına geçilmez.",
      },
      {
        title: "Performans İyileştirmesi",
        description:
          "Hızlı yükleme, optimize görseller ve yüksek Lighthouse skorları hedefleyen altyapı güncellemesi yapıyoruz. Core Web Vitals proje boyunca izlenir; gereksiz script ve ağır kaynaklar temizlenir. Canlıya almadan önce son performans turu tamamlanır.",
      },
      {
        title: "SEO Koruma ve Güçlendirme",
        description:
          "URL yapısı, 301 yönlendirmeler ve meta verilerle mevcut sıralamanızı koruyarak görünürlüğü artırıyoruz. Sitemap, robots ve yapılandırılmış veri yayın öncesi doğrulanır. Geçiş sürecinde indeksleme Search Console üzerinden takip edilir.",
      },
      {
        title: "İçerik Migrasyonu",
        description:
          "Mevcut metin, görsel ve sayfa içeriklerini yeni yapıya güvenli ve düzenli şekilde aktarıyoruz. Eksik, bozuk veya yanlış eşleşen içerikler tespit edilip düzeltilir. Migrasyon sonrası sayfa bazında kontrol listesi ile doğrulama yapılır.",
      },
      {
        title: "Yayın Sonrası Destek",
        description:
          "Canlıya alım sonrası teknik destek, küçük düzeltmeler ve geçiş sürecinde izleme sağlıyoruz. İlk hafta olası sorunlara hızlı müdahale edilir; yönlendirme ve form akışları yakından takip edilir. Destek süresi boyunca sitenizin sorunsuz çalışması hedeflenir.",
      },
    ],
  },
  "uygulama-gelistirme": {
    metaTitle: "Mobil Uygulama Geliştirme",
    metaDesc:
      "iOS ve Android için React Native ve Expo ile performanslı mobil uygulama geliştirme hizmeti.",
    heroBadge: "Uygulama Geliştirme",
    heroTitle: "Mobil Uygulama Geliştirme",
    heroSubtitle:
      "Tek kod tabanıyla iOS ve Android'de çalışan, kullanıcı dostu ve ölçeklenebilir mobil uygulamalar geliştiriyorum.",
    heroSubtitleSecondary:
      "React Native ve Expo ile hızlı teslimat, sorunsuz mağaza yayını ve backend entegrasyonlarını tek çatı altında yönetiyorum.",
    deliveryTime: "21-120 gün",
    processSubtitle:
      "Uygulama fikrinden mağaza yayınına kadar her aşamada ne yapılacağını ve hangi çıktının alınacağını netleştiriyoruz. Tasarım, geliştirme, test ve yayın adımlarını öngörülebilir bir planla yönetiyoruz.",
    techSubtitle:
      "Mobil uygulama projelerinde kullandığımız güncel ve ölçeklenebilir araçlar. Renkli ikonlar projelerimizde asıl kullandığımız teknolojileri; soluk ikonlar ise talep etmeniz halinde kullanabileceğimiz alternatifleri gösterir.",
    processItems: uygulamaGelistirmeProcessTr,
    features: [
      {
        title: "Çapraz Platform",
        description:
          "React Native ve Expo ile hem iOS hem Android için tek kod tabanından verimli geliştirme yapıyoruz. Platforma özgü davranışlar native modüllerle desteklenir; ekran boyutları ve etkileşimler her cihaz için optimize edilir. Böylece iki ayrı ekip ve bütçe yerine tek çizgide hızlı iterasyon mümkün olur.",
      },
      {
        title: "API Entegrasyonu",
        description:
          "Güvenli backend bağlantıları, kimlik doğrulama ve gerçek zamanlı veri akışını uçtan uca kuruyoruz. REST API, token yönetimi ve üçüncü taraf servis entegrasyonları proje mimarisine uygun şekilde yapılandırılır. Offline senaryolar ve hata yönetimi de kullanıcı deneyimini bozmayacak şekilde ele alınır.",
      },
      {
        title: "Kullanıcı Deneyimi",
        description:
          "Sezgisel navigasyon, erişilebilirlik ve iOS ile Android platform standartlarına uygun arayüz tasarlıyoruz. Tipografi, boşluklar ve etkileşimler markanızla tutarlı kalır. Form akışları, geri bildirimler ve onboarding adımları gerçek kullanıcı senaryolarına göre test edilir.",
      },
      {
        title: "Performans Optimizasyonu",
        description:
          "Cold start süreleri, akıcı animasyonlar ve düşük bellek kullanımı hedeflenir. Görsel önbellekleme, listeleme performansı ve gereksiz re-render'lar proje boyunca izlenir. Gerçek cihazlarda yapılan testlerle mağaza onayı öncesinde performans doğrulanır.",
      },
      {
        title: "Store Yayını",
        description:
          "App Store ve Google Play yayın süreçlerinde teknik hazırlık, build alma ve mağaza metadata desteği sağlıyoruz. İkon, ekran görüntüsü boyutları ve sürüm notları platform kurallarına uygun hazırlanır. Reddedilme riskini azaltmak için guideline kontrol listesi yayın öncesi tamamlanır.",
      },
      {
        title: "Bakım ve Güncelleme",
        description:
          "OS güncellemelerine uyum, hata düzeltmeleri ve yeni özellik iterasyonları düzenli plan dahilinde yürütülür. Crash raporları izlenir; kritik sorunlara öncelikli müdahale edilir. Uygulamanız canlıya alındıktan sonra da sürdürülebilir şekilde gelişmeye devam eder.",
      },
    ],
  },
  "seo-hizmetleri": {
    metaTitle: "SEO Hizmeti",
    metaDesc:
      "Teknik SEO, içerik stratejisi ve performans optimizasyonu ile sürdürülebilir organik büyüme.",
    heroBadge: "SEO",
    heroTitle: "SEO Hizmetleri",
    heroSubtitle:
      "Teknik altyapıdan içerik stratejisine kadar arama motorlarında görünürlüğünüzü artırıyorum.",
    heroSubtitleSecondary:
      "Site denetiminden anahtar kelime planlamasına, on-page optimizasyondan düzenli raporlamaya kadar sürdürülebilir organik büyüme için uçtan uca SEO desteği sunuyorum.",
    deliveryTime: "7-30 gün",
    processSubtitle:
      "Site analizinden sürekli iyileştirmeye kadar SEO çalışmalarını ölçülebilir adımlarla yürütüyoruz. Her aşamada yapılan işleri ve beklenen çıktıları şeffaf şekilde paylaşıyoruz.",
    techSubtitle:
      "SEO projelerinde analiz, izleme ve optimizasyon için kullandığımız araçlar.",
    processItems: seoHizmetleriProcessTr,
    features: [
      {
        title: "Teknik SEO Denetimi",
        description:
          "Site hızı, tarama hataları, indeksleme ve yapılandırılmış veri analizi.",
      },
      {
        title: "Anahtar Kelime Stratejisi",
        description:
          "Hedef kitlenize uygun, dönüşüm potansiyeli yüksek anahtar kelime haritası.",
      },
      {
        title: "On-Page Optimizasyon",
        description:
          "Başlık yapısı, meta etiketler, iç bağlantılar ve içerik düzeni iyileştirmeleri.",
      },
      {
        title: "İçerik Planlaması",
        description:
          "Blog ve landing page içerikleri için SEO uyumlu editoryal takvim.",
      },
      {
        title: "Performans İzleme",
        description:
          "Search Console ve Analytics ile sıralama, trafik ve dönüşüm takibi.",
      },
      {
        title: "Rakip Analizi",
        description:
          "Sektörünüzdeki rakiplerin görünürlüğünü analiz ederek fırsat alanları belirleme.",
      },
    ],
  },
  "teknik-denetim": {
    metaTitle: "Teknik Denetim",
    metaDesc:
      "Web sitesi, mobil uygulama ve dijital altyapınız için performans, güvenlik, SEO ve kod kalitesi odaklı teknik denetim hizmeti.",
    heroBadge: "Teknik Denetim",
    heroTitle: "Teknik Denetim",
    heroSubtitle:
      "Mevcut dijital varlıklarınızı performans, güvenlik, SEO ve kod kalitesi açısından analiz ediyoruz; önceliklendirilmiş aksiyon planı sunuyoruz.",
    heroSubtitleSecondary:
      "Lighthouse skorlarından erişilebilirliğe, altyapı risklerinden teknik borca kadar kapsamlı bir denetim raporu ile net bir yol haritası çıkarıyoruz.",
    deliveryTime: "3-10 gün",
    processSubtitle:
      "Denetim sürecini briefing'den aksiyon planına kadar net adımlarla yönetiyoruz. Bulguları öncelik sırasına göre raporlayıp uygulanabilir öneriler sunuyoruz.",
    techSubtitle:
      "Teknik denetimlerde performans, güvenlik ve SEO analizi için kullandığımız araçlar. Renkli ikonlar projelerimizde asıl kullandığımız teknolojileri; soluk ikonlar ise talep etmeniz halinde kullanabileceğimiz alternatifleri gösterir.",
    processItems: teknikDenetimProcessTr,
    features: [
      {
        title: "Performans Analizi",
        description:
          "Lighthouse, Core Web Vitals ve yükleme süreleri üzerinden hız ve kullanıcı deneyimi değerlendirmesi.",
      },
      {
        title: "Güvenlik İncelemesi",
        description:
          "Bağımlılık açıkları, HTTPS yapılandırması, erişim kontrolleri ve temel güvenlik riskleri.",
      },
      {
        title: "SEO Teknik Denetimi",
        description:
          "Tarama hataları, meta yapısı, indeksleme durumu ve yapılandırılmış veri kontrolü.",
      },
      {
        title: "Kod ve Mimari İncelemesi",
        description:
          "Kod kalitesi, bakım kolaylığı, teknik borç ve ölçeklenebilirlik değerlendirmesi.",
      },
      {
        title: "Erişilebilirlik Kontrolü",
        description:
          "WCAG uyumluluk, kontrast, klavye erişimi ve temel UX sorunlarının tespiti.",
      },
      {
        title: "Aksiyon Planı",
        description:
          "Önceliklendirilmiş bulgular, etki analizi ve uygulanabilir iyileştirme önerileri.",
      },
    ],
  },
  "bakim-ve-destek": {
    metaTitle: "Web Sitesi Bakım ve Destek",
    metaDesc:
      "Web sitesi, mobil uygulama ve backend altyapınız için düzenli bakım, güncelleme ve teknik destek hizmeti.",
    heroBadge: "Bakım & Destek",
    heroTitle: "Bakım & Destek",
    heroSubtitle:
      "Yayına aldıktan sonra da yanınızdayım. Güncelleme, yedekleme, güvenlik ve teknik destek tek çatı altında.",
    heroSubtitleSecondary:
      "Web siteniz, mobil uygulamanız ve backend altyapınız için kesintisiz izleme, hızlı müdahale ve düzenli raporlama sunuyorum.",
    deliveryTime: "7-14 gün",
    processSubtitle:
      "Proje devralmadan aylık raporlamaya kadar bakım sürecini düzenli ve öngörülebilir adımlarla yönetiyoruz. Güncelleme, izleme ve destek talepleri net bir takvimle ilerler.",
    techSubtitle:
      "Bakım ve destek hizmetlerinde kullandığımız altyapı ve izleme araçları. Renkli ikonlar projelerimizde asıl kullandığımız teknolojileri; soluk ikonlar ise talep etmeniz halinde kullanabileceğimiz alternatifleri gösterir.",
    processItems: bakimVeDestekProcessTr,
    features: [
      {
        title: "Güncellemeler ve Yamalar",
        description:
          "Bağımlılık, framework ve güvenlik yamalarının düzenli olarak uygulanması.",
      },
      {
        title: "Yedekleme ve Güvenlik",
        description:
          "Düzenli veri yedeklemeleri, güvenlik taramaları ve erişim denetimi.",
      },
      {
        title: "Performans İzleme",
        description:
          "Uptime takibi, sayfa hızı izleme ve yavaşlama anında müdahale.",
      },
      {
        title: "Teknik Destek",
        description:
          "Sorun bildirme, hata giderme ve küçük geliştirmeler için öncelikli destek.",
      },
      {
        title: "İçerik Güncellemeleri",
        description:
          "Metin, görsel ve sayfa güncellemelerini hızlıca uygulamak için hazır kapasite.",
      },
      {
        title: "Raporlama",
        description:
          "Yapılan işler, sistem durumu ve öneriler için aylık durum raporu.",
      },
    ],
  },
} as const;
