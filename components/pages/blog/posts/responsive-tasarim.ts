import type { BlogPostEntry } from "./types";

export const blogPostEntry: BlogPostEntry = {
  slug: "responsive-tasarim",
  titleTr: "Gerçek Mobil Uyumluluk: Responsive",
  titleEn: "Real Mobile Compatibility: Responsive",
  excerptTr:
    "Mobil uyumluluk ile responsive tasarım arasındaki farkı, mobile-first yaklaşımı ve gerçekten her ekranda çalışan arayüz için pratik kuralları paylaşıyoruz.",
  excerptEn:
    "We explain the difference between mobile-friendly and responsive design, mobile-first approach and practical rules for interfaces that work on every screen.",
  category: "Responsive",
  categoryEn: "Responsive",
  imageUrl: "/images/blog/responsive-tasarim.png",
  readingTime: 9,
  publishedAt: "2026-06-26",
  featured: true,
  content: {
    tr: `
<p>"Mobil uyumlu" ibaresi birçok sitede görülür; ancak gerçekte yalnızca küçültülmüş masaüstü görünümü sunan projeler de bu etiketi taşır. <strong>Gerçek mobil uyumluluk</strong>, responsive tasarım prensipleriyle her ekran boyutunda okunabilir, kullanılabilir ve performanslı bir deneyim sunmaktır. Bu yazıda responsive tasarımın ne olduğunu, mobile-first yaklaşımını ve uygulama kurallarını ele alıyoruz.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">%60+</span><span class="blog-stat-label">Mobil trafik payı</span></div>
  <div class="blog-stat"><span class="blog-stat-value">320px</span><span class="blog-stat-label">Minimum test genişliği</span></div>
  <div class="blog-stat"><span class="blog-stat-value">44px</span><span class="blog-stat-label">Dokunma hedefi minimum</span></div>
</div>

<h2>Mobil Uyumlu ≠ Responsive</h2>
<p>Mobil uyumlu site, telefonda açılabilen sitedir; responsive site ise layout'un ekrana <strong>uyum sağlamasıdır</strong>. Aşağıdaki tablo farkı netleştirir:</p>
<div class="blog-table-wrap blog-table-compare">
<table>
<colgroup>
  <col class="blog-table-compare-col-feature" />
  <col class="blog-table-compare-col-domain" />
  <col class="blog-table-compare-col-hosting" />
</colgroup>
<thead><tr><th>Özellik</th><th>Sahte mobil uyum</th><th>Gerçek responsive</th></tr></thead>
<tbody>
<tr><td>Layout</td><td>Sabit genişlik, yatay kaydırma</td><td>Esnek grid; içerik ekrana sığar</td></tr>
<tr><td>Tipografi</td><td>Okunması zor küçük metin</td><td>Ölçeklenen font ve satır aralığı</td></tr>
<tr><td>Navigasyon</td><td>Hover menü, küçük linkler</td><td>Hamburger veya alt tab; büyük dokunma alanı</td></tr>
<tr><td>Görseller</td><td>Taşan, kırpılmayan img</td><td><code>max-width: 100%</code> veya responsive image</td></tr>
<tr><td>Performans</td><td>Masaüstü boyutlu asset yükler</td><td>Mobil için optimize boyut ve lazy load</td></tr>
</tbody>
</table>
</div>

<h2>Responsive Tasarım Nedir?</h2>
<p>Responsive tasarım; CSS media query, esnek birimler (%, rem, fr) ve fluid grid kullanarak arayüzün tablet, telefon ve geniş monitörde otomatik uyum sağlamasıdır. Tek bir kod tabanı tüm cihazları hedefler; ayrı mobil site (m.example.com) gerekmez.</p>

<h2>Mobile-First Yaklaşımı</h2>
<p>Önce mobil ekran için tasarlayıp, daha geniş breakpoint'lerde layout'u genişletmek mobile-first'tür. Veltstack projelerinde Tailwind CSS ile bu yaklaşımı benimsiyoruz: varsayılan stiller mobil, <code>md:</code> ve <code>lg:</code> prefix'leri ile masaüstü katmanları eklenir.</p>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>Breakpoint planı</h4>
    <p>640px (sm), 768px (md), 1024px (lg), 1280px (xl) yaygın kırılım noktalarıdır. İçeriğe göre özelleştirin; cihaz listesi kovalamayın.</p>
  </div>
  <div class="blog-type-card">
    <h4>Esnek grid</h4>
    <p>CSS Grid ve Flexbox ile sütun sayısı ekrana göre 1 → 2 → 3 olarak değişir. Sabit piksel genişliklerden kaçının.</p>
  </div>
  <div class="blog-type-card">
    <h4>Fluid tipografi</h4>
    <p><code>clamp()</code> ile minimum ve maksimum font arasında akıcı ölçekleme sağlayın. Başlıklar mobilde taşmamalı.</p>
  </div>
  <div class="blog-type-card">
    <h4>Viewport meta</h4>
    <p><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code> olmadan mobil tarayıcı sayfayı zoom'lu gösterir.</p>
  </div>
</div>

<h2>Temel Uygulama Kuralları</h2>
<ul class="blog-checklist">
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Dokunma hedefleri:</strong> Buton ve linkler en az 44×44px; parmakla rahat tıklanmalı.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Yatay kaydırma yok:</strong> <code>overflow-x: hidden</code> semptomu değil, kök nedeni düzeltin.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Okunabilir metin:</strong> Gövde metni 16px ve üzeri; kontrast WCAG AA standardına uygun olmalı.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Responsive görseller:</strong> Next.js <code>Image</code> bileşeni ve <code>sizes</code> prop'u ile doğru boyut sunun.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Form alanları:</strong> Input yüksekliği yeterli; mobil klavye açıldığında alan görünür kalmalı.</span></div></li>
</ul>

<div class="blog-callout">
  <p class="blog-callout-title">Pratik ipucu</p>
  <p>Chrome DevTools'ta cihaz simülasyonu başlangıç noktıdır; gerçek iPhone ve Android cihazlarda test etmeden canlıya almayın. Safari ve Chrome render farkları yaşanabilir.</p>
</div>

<h2>Performans ve SEO</h2>
<p>Google mobil-first indexing kullanır; yani sıralama öncelikle mobil sürüme göre yapılır. Yavaş mobil site hem kullanıcı kaybına hem SEO düşüşüne yol açar. Core Web Vitals (LCP, INP, CLS) mobilde de hedeflenmelidir. Gereksiz JavaScript, büyük hero görselleri ve render-blocking kaynaklar mobil skorları düşürür.</p>
<p>SEO rehberimizde teknik optimizasyon adımlarını <a href="/blog/seo">SEO</a> yazımızda detaylandırdık.</p>

<h2>Test Checklist</h2>
<ul>
<li>320px, 375px ve 414px genişliklerde layout kontrolü</li>
<li>Dikey ve yatay (landscape) mod</li>
<li>Menü, modal ve dropdown'ların dokunmatik kullanımı</li>
<li>Form gönderimi ve ödeme akışı mobilde</li>
<li>Lighthouse mobil raporu (Performance, Accessibility)</li>
<li>Gerçek cihazda 3G/4G hız simülasyonu</li>
</ul>

<h2>Sık Yapılan Hatalar</h2>
<ul>
<li>Masaüstü tasarımı küçültüp "mobil uyumlu" demek</li>
<li>Hover-only etkileşimler; dokunmatik ekranda çalışmaz</li>
<li>Sabit piksel genişlikli container (<code>width: 1200px</code>)</li>
<li>Mobilde gizlenen kritik içerik (SEO ve erişilebilirlik riski)</li>
<li>Ayrı mobil subdomain; bakım maliyeti ve duplicate content</li>
<li>Popup ve interstitial'ların ekranın tamamını kaplaması</li>
</ul>

<h2>Responsive Tasarımda Veltstack Yaklaşımı</h2>
<p>Tüm web projelerimizde mobile-first Tailwind CSS, erişilebilir bileşenler (shadcn/ui) ve gerçek cihaz testleri standart sürecimizin parçasıdır. Yazıcı Ticaret, Fablessi ve kurumsal katalog projelerinde mobil dönüşüm oranlarını artırmak için responsive layout ve performans optimizasyonunu birlikte ele aldık.</p>

<h2>Sonuç</h2>
<p>Gerçek mobil uyumluluk, responsive tasarım disiplini ve test kültürüyle gelir. Mobile-first düşünün, esnek layout kullanın, dokunma ve okuma deneyimini önceliklendirin. Web sitenizin mobilde gerçekten güçlü olmasını istiyorsanız bizimle iletişime geçin.</p>
`,
    en: `
<p>Many sites claim to be "mobile-friendly", yet some only show a shrunken desktop layout. <strong>Real mobile compatibility</strong> means a readable, usable and performant experience on every screen size through responsive design. This article covers what responsive design is, mobile-first approach and practical rules.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">60%+</span><span class="blog-stat-label">Mobile traffic share</span></div>
  <div class="blog-stat"><span class="blog-stat-value">320px</span><span class="blog-stat-label">Minimum test width</span></div>
  <div class="blog-stat"><span class="blog-stat-value">44px</span><span class="blog-stat-label">Min touch target</span></div>
</div>

<h2>Mobile-Friendly ≠ Responsive</h2>
<p>A mobile-friendly site opens on a phone; a responsive site <strong>adapts its layout</strong> to the screen. This table clarifies the difference:</p>
<div class="blog-table-wrap blog-table-compare">
<table>
<colgroup>
  <col class="blog-table-compare-col-feature" />
  <col class="blog-table-compare-col-domain" />
  <col class="blog-table-compare-col-hosting" />
</colgroup>
<thead><tr><th>Feature</th><th>Fake mobile fit</th><th>True responsive</th></tr></thead>
<tbody>
<tr><td>Layout</td><td>Fixed width, horizontal scroll</td><td>Flexible grid; content fits</td></tr>
<tr><td>Typography</td><td>Tiny unreadable text</td><td>Scaled font and line height</td></tr>
<tr><td>Navigation</td><td>Hover menu, small links</td><td>Hamburger or bottom tab; large tap targets</td></tr>
<tr><td>Images</td><td>Overflowing uncropped img</td><td><code>max-width: 100%</code> or responsive images</td></tr>
<tr><td>Performance</td><td>Loads desktop-sized assets</td><td>Optimized sizes and lazy load for mobile</td></tr>
</tbody>
</table>
</div>

<h2>What Is Responsive Design?</h2>
<p>Responsive design uses CSS media queries, flexible units (%, rem, fr) and fluid grids so the UI adapts to tablets, phones and wide monitors. One codebase targets all devices; separate mobile sites (m.example.com) are unnecessary.</p>

<h2>Mobile-First Approach</h2>
<p>Design for mobile first, then expand layout at wider breakpoints. At Veltstack we use Tailwind CSS this way: default styles for mobile, <code>md:</code> and <code>lg:</code> prefixes add desktop layers.</p>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>Breakpoint plan</h4>
    <p>640px (sm), 768px (md), 1024px (lg), 1280px (xl) are common break points. Customize for content; do not chase device lists.</p>
  </div>
  <div class="blog-type-card">
    <h4>Flexible grid</h4>
    <p>CSS Grid and Flexbox change columns from 1 → 2 → 3 by screen. Avoid fixed pixel widths.</p>
  </div>
  <div class="blog-type-card">
    <h4>Fluid typography</h4>
    <p>Use <code>clamp()</code> for smooth scaling between min and max font sizes. Headings must not overflow on mobile.</p>
  </div>
  <div class="blog-type-card">
    <h4>Viewport meta</h4>
    <p>Without <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code> mobile browsers zoom the page incorrectly.</p>
  </div>
</div>

<h2>Core Implementation Rules</h2>
<ul class="blog-checklist">
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Touch targets:</strong> Buttons and links at least 44×44px; easy to tap with a finger.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>No horizontal scroll:</strong> Fix the root cause; do not rely on <code>overflow-x: hidden</code> alone.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Readable text:</strong> Body text 16px or larger; contrast should meet WCAG AA.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Responsive images:</strong> Use Next.js <code>Image</code> with the <code>sizes</code> prop for correct delivery.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Form fields:</strong> Adequate input height; fields stay visible when the mobile keyboard opens.</span></div></li>
</ul>

<div class="blog-callout">
  <p class="blog-callout-title">Practical tip</p>
  <p>Chrome DevTools device simulation is a starting point; do not go live without testing on real iPhone and Android devices. Safari and Chrome can render differently.</p>
</div>

<h2>Performance and SEO</h2>
<p>Google uses mobile-first indexing; rankings prioritize the mobile version. A slow mobile site loses users and SEO ground. Target Core Web Vitals (LCP, INP, CLS) on mobile too. Excess JavaScript, large hero images and render-blocking resources hurt mobile scores.</p>
<p>See our <a href="/blog/seo">SEO</a> article for technical optimization steps.</p>

<h2>Test Checklist</h2>
<ul>
<li>Layout check at 320px, 375px and 414px widths</li>
<li>Portrait and landscape orientation</li>
<li>Touch use of menus, modals and dropdowns</li>
<li>Form submission and checkout flow on mobile</li>
<li>Lighthouse mobile report (Performance, Accessibility)</li>
<li>Real device test with 3G/4G throttling</li>
</ul>

<h2>Common Mistakes</h2>
<ul>
<li>Shrinking desktop design and calling it mobile-friendly</li>
<li>Hover-only interactions; they fail on touch screens</li>
<li>Fixed pixel containers (<code>width: 1200px</code>)</li>
<li>Hiding critical content on mobile (SEO and accessibility risk)</li>
<li>Separate mobile subdomain; maintenance cost and duplicate content</li>
<li>Popups and interstitials covering the entire screen</li>
</ul>

<h2>Responsive Design at Veltstack</h2>
<p>Every web project uses mobile-first Tailwind CSS, accessible components (shadcn/ui) and real device testing as standard. On Yazıcı Ticaret, Fablessi and corporate catalog projects we combined responsive layout with performance optimization to improve mobile conversion.</p>

<h2>Conclusion</h2>
<p>Real mobile compatibility comes from responsive design discipline and a testing culture. Think mobile-first, use flexible layouts and prioritize touch and reading experience. Contact us if you want your site to perform truly well on mobile.</p>
`,
  },
};
