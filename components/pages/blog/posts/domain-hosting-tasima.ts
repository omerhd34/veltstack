import type { BlogPostEntry } from "./types";

export const blogPostEntry: BlogPostEntry = {
  slug: "domain-hosting-tasima",
  titleTr: "Domain ve Hosting Taşıma Rehberi",
  titleEn: "Domain and Hosting Migration Guide",
  excerptTr:
    "Domain veya hosting sağlayıcısı değiştirirken izlemeniz gereken adımları, DNS güncellemesini ve kesintisiz geçiş için dikkat edilecekleri anlatıyoruz.",
  excerptEn:
    "Steps for changing domain or hosting providers, updating DNS and ensuring a smooth migration with minimal downtime.",
  category: "Hosting & Domain",
  categoryEn: "Hosting & Domain",
  imageUrl: "/images/blog/domain-hosting-tasima.png",
  readingTime: 10,
  publishedAt: "2026-06-25",
  featured: true,
  content: {
    tr: `
<p>Mevcut sağlayıcınızdan memnun değilseniz, daha hızlı bir altyapıya geçmek istiyorsanız veya Vercel gibi modern bir platforma taşınıyorsanız <strong>domain ve hosting taşıma</strong> sürecini doğru planlamak kritiktir. Yanlış adımlar site kesintisine, e-posta kaybına ve SEO düşüşüne yol açabilir. Bu rehberde taşıma türlerini, hazırlık listesini ve adım adım süreci paylaşıyoruz.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">DNS</span><span class="blog-stat-label">Yönlendirme anahtarı</span></div>
  <div class="blog-stat"><span class="blog-stat-value">TTL</span><span class="blog-stat-label">Yayılım süresi</span></div>
  <div class="blog-stat"><span class="blog-stat-value">Yedek</span><span class="blog-stat-label">Taşımadan önce zorunlu</span></div>
</div>

<h2>Ne Zaman Taşıma Yapılır?</h2>
<ul>
<li>Mevcut hosting yavaş veya sık kesinti yaşıyor</li>
<li>Daha uygun fiyat veya daha iyi destek aranıyor</li>
<li>WordPress'ten Next.js gibi modern stack'e geçiliyor</li>
<li>Vercel, Railway veya bulut platformuna taşınıyor</li>
<li>Domain registrar'ı değiştirilmek isteniyor</li>
</ul>

<h2>Taşıma Türleri</h2>
<div class="blog-table-wrap blog-table-compare">
<table>
<colgroup>
  <col class="blog-table-compare-col-feature" />
  <col class="blog-table-compare-col-domain" />
  <col class="blog-table-compare-col-hosting" />
</colgroup>
<thead><tr><th>Tür</th><th>Ne değişir?</th><th>Tipik süre</th></tr></thead>
<tbody>
<tr><td>Sadece hosting taşıma</td><td>Site dosyaları ve veritabanı; domain aynı kalır</td><td>1–24 saat (DNS yayılımı)</td></tr>
<tr><td>DNS yönlendirme</td><td>A/CNAME kayıtları yeni sunucuya işaret eder</td><td>15 dk – 48 saat</td></tr>
<tr><td>Domain transfer</td><td>Registrar değişir; auth code gerekir</td><td>5–7 gün</td></tr>
<tr><td>Platform taşıma (Vercel vb.)</td><td>Deploy ortamı değişir; DNS güncellenir</td><td>1–4 saat</td></tr>
</tbody>
</table>
</div>

<h2>Taşımadan Önce Hazırlık</h2>
<ul class="blog-checklist">
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Tam yedek alın:</strong> Site dosyaları, veritabanı dump'ı ve e-posta ayarları.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Mevcut DNS kayıtlarını not edin:</strong> A, CNAME, MX, TXT kayıtlarının ekran görüntüsünü alın.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>TTL değerini düşürün:</strong> Taşımadan 24–48 saat önce TTL'yi 300–600 saniyeye indirin; yayılım hızlanır.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Düşük trafik saati seçin:</strong> Gece veya hafta sonu bakım penceresi planlayın.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>E-posta etkisini değerlendirin:</strong> MX kayıtları değişirse kurumsal e-posta kesilebilir.</span></div></li>
</ul>

<h2>Hosting Taşıma Adımları</h2>
<div class="blog-flow">
  <div class="blog-flow-step" data-step="1">Yedek al</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="2">Yeni ortamı kur</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="3">Test et</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="4">DNS güncelle</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="5">Doğrula</div>
</div>

<ol class="blog-steps">
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Dosya ve veritabanı yedekleyin</strong> FTP/cPanel veya SSH ile tüm dosyaları indirin; phpMyAdmin veya <code>mysqldump</code> ile DB export alın.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Yeni hosting'e yükleyin</strong> Dosyaları yeni sunucuya aktarın, veritabanını import edin, bağlantı bilgilerini güncelleyin.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Geçici URL ile test edin</strong> DNS değiştirmeden önce yeni sunucunun IP'si veya staging URL'si üzerinden siteyi kontrol edin.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>DNS kayıtlarını güncelleyin</strong> A kaydını yeni sunucu IP'sine veya CNAME'i yeni hedefe yönlendirin.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>SSL ve yönlendirmeleri kontrol edin</strong> HTTPS çalıştığından, www/non-www tutarlı olduğundan emin olun.</span></div></li>
</ol>

<h2>Domain Transfer (Registrar Değişikliği)</h2>
<p>Domain'i başka bir registrar'a taşımak farklı bir süreçtir. Mevcut firmadan <strong>EPP / auth code</strong> alınır, domain kilidi kaldırılır ve yeni firmada transfer başlatılır. Transfer sırasında nameserver'lar genelde değişmez; site çalışmaya devam eder. Ancak transfer süresi (5–7 gün) boyunca WHOIS bilgilerinde değişiklik yapılamayabilir.</p>
<p>Domain seçimi ve uzantı kararı için <a href="/blog/dogru-domain-secimi">Doğru Domain Seçimi</a> yazımıza bakabilirsiniz.</p>

<h2>Vercel veya Bulut Platforma Taşıma</h2>
<p>Next.js projelerini Vercel'e taşırken hosting dosya transferi yerine Git tabanlı deploy kullanılır. Domain panelinden A veya CNAME kaydı Vercel'in verdiği değerlere güncellenir. Ortam değişkenleri, veritabanı bağlantısı ve harici servis anahtarları yeni panelde tanımlanmalıdır. Detaylı adımlar için <a href="/blog/vercel-de-yayin">Vercel'de Yayın</a> rehberimize göz atın.</p>

<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>Klasik hosting → Vercel</h4>
    <p>Statik veya Next.js projesi Git'e taşınır, build alınır, DNS Vercel'e yönlendirilir. PHP tabanlı siteler doğrudan taşınamaz; yeniden geliştirme gerekebilir.</p>
  </div>
  <div class="blog-type-card">
    <h4>WordPress → Modern stack</h4>
    <p>İçerik export edilir, yeni frontend/backend kurulur, URL yapısı korunarak 301 yönlendirmeleri planlanır.</p>
  </div>
  <div class="blog-type-card">
    <h4>Veritabanı taşıma</h4>
    <p>MySQL dump import, connection string güncelleme ve serverless ortamda pooling (Neon, PlanetScale) gerekebilir.</p>
  </div>
  <div class="blog-type-card">
    <h4>E-posta taşıma</h4>
    <p>MX kayıtları yeni sağlayıcıya işaret edilir; geçiş öncesi mevcut kutuların yedeklenmesi önerilir.</p>
  </div>
</div>

<div class="blog-callout">
  <p class="blog-callout-title">Pratik ipucu</p>
  <p>DNS değişikliği yapmadan önce yeni sunucuda hosts dosyası veya geçici subdomain ile tüm sayfaları, form gönderimlerini ve admin panelini test edin. Canlıya aldıktan sonra düzeltmek çok daha maliyetlidir.</p>
</div>

<h2>Taşıma Sonrası Kontrol Listesi</h2>
<ul>
<li>Ana sayfa ve kritik sayfalar açılıyor mu?</li>
<li>HTTPS sertifikası geçerli mi, mixed content uyarısı var mı?</li>
<li>Formlar, ödeme ve giriş işlemleri çalışıyor mu?</li>
<li>E-posta gönderimi ve alımı test edildi mi?</li>
<li>Google Search Console'da crawl hatası var mı?</li>
<li Eski URL'ler 301 ile yeni adrese yönlendiriliyor mu?</li>
</ul>

<h2>SEO ve Kesinti Riski</h2>
<p>Doğru planlanmış taşımada SEO kaybı minimumda tutulur. URL yapısını değiştirmeyin; değiştirmek zorundaysanız 301 redirect kullanın. DNS yayılımı sırasında kısa süreli erişim dalgalanması normaldir. Search Console'da adres değişikliği bildirimi gerekmez; domain aynı kalıyorsa sitemap'i yeniden göndermek yeterli olabilir.</p>

<h2>Sık Yapılan Hatalar</h2>
<ul>
<li>Yedek almadan DNS değiştirmek</li>
<li>MX kayıtlarını silerek kurumsal e-postayı kesmek</li>
<li>TTL'yi taşıma öncesi düşürmemek; yayılımın günler sürmesi</li>
<li>Eski hosting'i hemen iptal etmek; yeni ortamda sorun çıkınca geri dönüş imkansızlaşır</li>
<li>SSL kurulumunu atlamak; tarayıcı "güvenli değil" uyarısı verir</li>
<li>www ve non-www versiyonlarından birini yönlendirmemek; duplicate content oluşur</li>
</ul>

<h2>Profesyonel Taşıma Desteği</h2>
<p>Domain ve hosting taşıma teknik bilgi ve dikkat gerektirir. Veltstack olarak site migration, Vercel deploy, DNS yapılandırması ve SSL kurulumu konularında proje kapsamında destek sunuyoruz. Mevcut sitenizi modern altyapıya taşımak istiyorsanız bizimle iletişime geçin.</p>

<h2>Sonuç</h2>
<p>Domain ve hosting taşıma; yedek, test, DNS güncelleme ve doğrulama adımlarıyla güvenle yapılabilir. Taşıma türünüze göre (sadece hosting, domain transfer veya platform değişikliği) süreci planlayın, düşük trafik saatinde uygulayın ve eski ortamı bir süre daha aktif tutun. Temel kavramlar için <a href="/blog/domain-hosting">Domain & Hosting</a> yazımız da yardımcı olacaktır.</p>
`,
    en: `
<p>If you are unhappy with your current provider, need faster infrastructure or are moving to a modern platform like Vercel, planning <strong>domain and hosting migration</strong> correctly is critical. Wrong steps cause downtime, email loss and SEO drops. This guide covers migration types, preparation and step-by-step process.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">DNS</span><span class="blog-stat-label">Routing key</span></div>
  <div class="blog-stat"><span class="blog-stat-value">TTL</span><span class="blog-stat-label">Propagation time</span></div>
  <div class="blog-stat"><span class="blog-stat-value">Backup</span><span class="blog-stat-label">Required first</span></div>
</div>

<h2>When to Migrate</h2>
<ul>
<li>Current hosting is slow or frequently down</li>
<li>You want better pricing or support</li>
<li>Moving from WordPress to a modern stack like Next.js</li>
<li>Migrating to Vercel, Railway or another cloud platform</li>
<li>Changing domain registrar</li>
</ul>

<h2>Migration Types</h2>
<div class="blog-table-wrap blog-table-compare">
<table>
<colgroup>
  <col class="blog-table-compare-col-feature" />
  <col class="blog-table-compare-col-domain" />
  <col class="blog-table-compare-col-hosting" />
</colgroup>
<thead><tr><th>Type</th><th>What changes</th><th>Typical duration</th></tr></thead>
<tbody>
<tr><td>Hosting only</td><td>Site files and database; domain stays the same</td><td>1–24 hours (DNS propagation)</td></tr>
<tr><td>DNS update</td><td>A/CNAME records point to new server</td><td>15 min – 48 hours</td></tr>
<tr><td>Domain transfer</td><td>Registrar changes; auth code required</td><td>5–7 days</td></tr>
<tr><td>Platform move (Vercel etc.)</td><td>Deploy environment changes; DNS updated</td><td>1–4 hours</td></tr>
</tbody>
</table>
</div>

<h2>Pre-Migration Checklist</h2>
<ul class="blog-checklist">
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Full backup:</strong> Site files, database dump and email settings.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Record current DNS:</strong> Screenshot A, CNAME, MX and TXT records.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Lower TTL:</strong> Set TTL to 300–600 seconds 24–48 hours before migration.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Pick a low-traffic window:</strong> Plan maintenance at night or on weekends.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Assess email impact:</strong> Changing MX records can break corporate email.</span></div></li>
</ul>

<h2>Hosting Migration Steps</h2>
<div class="blog-flow">
  <div class="blog-flow-step" data-step="1">Backup</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="2">Set up new env</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="3">Test</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="4">Update DNS</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="5">Verify</div>
</div>

<ol class="blog-steps">
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Back up files and database</strong> Download all files via FTP/cPanel or SSH; export DB with phpMyAdmin or <code>mysqldump</code>.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Upload to new hosting</strong> Transfer files, import database, update connection credentials.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Test on temporary URL</strong> Check the site via new server IP or staging URL before changing DNS.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Update DNS records</strong> Point A record to new IP or CNAME to new target.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Verify SSL and redirects</strong> Confirm HTTPS works and www/non-www is consistent.</span></div></li>
</ol>

<h2>Domain Transfer (Registrar Change)</h2>
<p>Moving a domain to another registrar is a separate process. Get an <strong>EPP / auth code</strong> from the current provider, unlock the domain and start transfer at the new registrar. Nameservers usually stay the same during transfer; the site keeps running. WHOIS changes may be locked for 5–7 days while transfer completes.</p>
<p>See our <a href="/blog/dogru-domain-secimi">Choosing the Right Domain</a> article for naming and extension decisions.</p>

<h2>Moving to Vercel or Cloud Platforms</h2>
<p>When migrating Next.js to Vercel, you use Git-based deploy instead of file transfer. Update A or CNAME in the domain panel to Vercel's values. Define environment variables, database connections and API keys in the new dashboard. See our <a href="/blog/vercel-de-yayin">Deploying on Vercel</a> guide for details.</p>

<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>Classic hosting → Vercel</h4>
    <p>Move static or Next.js project to Git, build and point DNS to Vercel. PHP sites cannot migrate directly; rebuild may be required.</p>
  </div>
  <div class="blog-type-card">
    <h4>WordPress → Modern stack</h4>
    <p>Export content, build new frontend/backend, plan 301 redirects to preserve URL structure.</p>
  </div>
  <div class="blog-type-card">
    <h4>Database migration</h4>
    <p>MySQL dump import, connection string update and pooling (Neon, PlanetScale) on serverless may be needed.</p>
  </div>
  <div class="blog-type-card">
    <h4>Email migration</h4>
    <p>Point MX records to new provider; back up existing mailboxes before switching.</p>
  </div>
</div>

<div class="blog-callout">
  <p class="blog-callout-title">Practical tip</p>
  <p>Before changing DNS, test all pages, forms and admin on the new server via hosts file or a temporary subdomain. Fixing issues after go-live is far more costly.</p>
</div>

<h2>Post-Migration Checklist</h2>
<ul>
<li>Do homepage and critical pages load?</li>
<li>Is HTTPS valid with no mixed content warnings?</li>
<li>Do forms, payments and login work?</li>
<li>Was email send/receive tested?</li>
<li>Any crawl errors in Google Search Console?</li>
<li>Are old URLs redirected with 301 to new paths?</li>
</ul>

<h2>SEO and Downtime Risk</h2>
<p>With proper planning, SEO loss stays minimal. Keep URL structure; if you must change it, use 301 redirects. Brief access fluctuation during DNS propagation is normal. No Search Console address change is needed if the domain stays the same; resubmitting the sitemap may be enough.</p>

<h2>Common Mistakes</h2>
<ul>
<li>Changing DNS without a backup</li>
<li>Deleting MX records and breaking corporate email</li>
<li>Not lowering TTL beforehand; propagation takes days</li>
<li>Canceling old hosting immediately; no rollback if issues appear</li>
<li>Skipping SSL setup; browsers show "not secure"</li>
<li>Not redirecting www or non-www; duplicate content appears</li>
</ul>

<h2>Professional Migration Support</h2>
<p>Domain and hosting migration requires technical care. At Veltstack we support site migration, Vercel deploy, DNS configuration and SSL setup within project scope. Contact us if you want to move your site to modern infrastructure.</p>

<h2>Conclusion</h2>
<p>Domain and hosting migration is safe with backup, testing, DNS update and verification. Plan by migration type (hosting only, domain transfer or platform change), run during low traffic and keep the old environment active for a while. Our <a href="/blog/domain-hosting">Domain & Hosting</a> article covers the basics.</p>
`,
  },
};
