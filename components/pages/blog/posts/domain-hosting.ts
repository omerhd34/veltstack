import { BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER } from "@/components/pages/blog-detail/domain-extensions-data";

import type { BlogPostEntry } from "./types";

export const blogPostEntry: BlogPostEntry = {
  slug: "domain-hosting",
  titleTr: "Domain & Hosting",
  titleEn: "Domain & Hosting",
  excerptTr:
    "Domain ve hosting kavramlarını açıklıyor; ikisinin farkını, birlikte nasıl çalıştıklarını ve domain satın alma sürecini adım adım anlatıyoruz.",
  excerptEn:
    "We explain domain and hosting, how they differ and work together, and walk through the domain purchase process step by step.",
  category: "Hosting & Domain",
  categoryEn: "Hosting & Domain",
  imageUrl: "/images/blog/domain-hosting.png",
  readingTime: 9,
  publishedAt: "2026-06-15",
  featured: true,
  content: {
    tr: `
<p>Web sitenizi yayına almak için iki temel bileşen gerekir: <strong>domain</strong> (alan adı) ve <strong>hosting</strong> (barındırma). Bu rehberde ikisinin ne olduğunu, aralarındaki farkı, birlikte nasıl çalıştıklarını ve domain satın alma sürecini adım adım anlatıyoruz.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">.com</span><span class="blog-stat-label">En popüler domain uzantısı</span></div>
  <div class="blog-stat"><span class="blog-stat-value">%99.9</span><span class="blog-stat-label">Hedef uptime (kaliteli hosting)</span></div>
  <div class="blog-stat"><span class="blog-stat-value">HTTPS</span><span class="blog-stat-label">SSL ile zorunlu güvenlik</span></div>
</div>

<h2>Domain Nedir?</h2>
<p>Domain (alan adı), web sitenizin internetteki adresidir. Örneğin <em>veltstack.com</em> bir domain adıdır. Kullanıcılar tarayıcıya bu adresi yazarak sitenize ulaşır. Domain, hosting'den bağımsızdır; önce domain alırsınız, ardından hosting hizmetine bağlarsınız.</p>
<p>Domain'ler yıllık olarak kiralanır ve bir domain kayıt firması (registrar) üzerinden satın alınır.</p>

<div class="blog-analogy">
  <div class="blog-analogy-header">
    <span class="blog-analogy-kicker">Benzetme</span>
    <p class="blog-analogy-title">Domain ve hosting'i günlük hayattan düşünün</p>
  </div>
  <div class="blog-analogy-grid">
    <article class="blog-analogy-item blog-analogy-item--domain">
      <div class="blog-analogy-item-head">
        <span class="blog-analogy-item-icon blog-analogy-item-icon--domain" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
        <div class="blog-analogy-item-meta">
          <p class="blog-analogy-item-label">Domain</p>
          <span class="blog-analogy-item-tag">Alan adı · adres</span>
        </div>
      </div>
      <p class="blog-analogy-item-desc">Evinizin açık adresidir. Ziyaretçiler tarayıcıya adresi yazar; sizi doğru yere yönlendirir.</p>
      <span class="blog-analogy-item-example">veltstack.com</span>
    </article>
    <div class="blog-analogy-join" aria-hidden="true"><span>+</span></div>
    <article class="blog-analogy-item blog-analogy-item--hosting">
      <div class="blog-analogy-item-head">
        <span class="blog-analogy-item-icon blog-analogy-item-icon--hosting" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/></svg></span>
        <div class="blog-analogy-item-meta">
          <p class="blog-analogy-item-label">Hosting</p>
          <span class="blog-analogy-item-tag">Barındırma · evin kendisi</span>
        </div>
      </div>
      <p class="blog-analogy-item-desc">Evin binası ve içindeki eşyalar gibidir. Site dosyalarınız, veritabanınız ve e-postalar burada saklanır.</p>
      <span class="blog-analogy-item-example">Sunucu / Vercel</span>
    </article>
  </div>
</div>

<h2>Hosting Nedir?</h2>
<p>Hosting (barındırma), web sitenizin dosyalarının — HTML, CSS, görseller, veritabanı — saklandığı sunucu hizmetidir. Domain adresiniz kullanıcıyı doğru eve yönlendirir; hosting ise o evin içindeki eşyaları barındırır.</p>
<p class="blog-section-lead">Hosting türlerini projenizin ölçeğine göre değerlendirin:</p>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>Paylaşımlı Hosting</h4>
    <p>Bir sunucuyu birden fazla site kullanır. Küçük kurumsal siteler ve bloglar için <strong>ekonomik</strong> başlangıç.</p>
  </div>
  <div class="blog-type-card">
    <h4>VPS (Sanal Sunucu)</h4>
    <p>Daha fazla kaynak ve kontrol. Trafik artan veya özel yapılandırma gereken projeler için <strong>esnek</strong> seçenek.</p>
  </div>
  <div class="blog-type-card">
    <h4>Bulut Hosting</h4>
    <p>Ölçeklenebilir altyapı. Ani trafik artışlarında kaynak artırımı — <strong>yüksek erişilebilirlik</strong> hedefleyenler için.</p>
  </div>
  <div class="blog-type-card">
    <h4>Platform (Vercel, Netlify)</h4>
    <p>Next.js ve statik siteler için optimize. Git push ile deploy — <strong>modern web projeleri</strong> için ideal. Detay: <a href="/blog/vercel-de-yayin">Vercel'de Yayın</a>.</p>
  </div>
</div>

<figure class="blog-chart">
  <figcaption>Ortalama aylık hosting maliyetleri (Türkiye, 2026 — gösterge)</figcaption>
  <div class="blog-chart-bars">
    <div class="blog-chart-row">
      <span class="blog-chart-label">Paylaşımlı</span>
      <div class="blog-chart-track"><div class="blog-chart-fill" style="width:28%"></div></div>
      <span class="blog-chart-value">₺150</span>
    </div>
    <div class="blog-chart-row">
      <span class="blog-chart-label">WordPress</span>
      <div class="blog-chart-track"><div class="blog-chart-fill" style="width:42%"></div></div>
      <span class="blog-chart-value">₺250</span>
    </div>
    <div class="blog-chart-row">
      <span class="blog-chart-label">VPS</span>
      <div class="blog-chart-track"><div class="blog-chart-fill" style="width:68%"></div></div>
      <span class="blog-chart-value">₺450</span>
    </div>
    <div class="blog-chart-row">
      <span class="blog-chart-label">Bulut</span>
      <div class="blog-chart-track"><div class="blog-chart-fill" style="width:100%"></div></div>
      <span class="blog-chart-value">₺650+</span>
    </div>
  </div>
</figure>

<h2>Domain ve Hosting Arasındaki Fark</h2>
<div class="blog-table-wrap">
<table>
<thead><tr><th>Özellik</th><th>Domain</th><th>Hosting</th></tr></thead>
<tbody>
<tr><td>Ne işe yarar?</td><td>Adres (URL)</td><td>İçerik depolama</td></tr>
<tr><td>Analoji</td><td>Ev adresi</td><td>Ev binası</td></tr>
<tr><td>Yenileme</td><td>Yıllık</td><td>Aylık veya yıllık</td></tr>
<tr><td>Değiştirilebilir mi?</td><td>Evet (DNS ile)</td><td>Evet (dosya taşıma ile)</td></tr>
</tbody>
</table>
</div>

<div class="blog-compare">
  <div class="blog-compare-card">
    <h4>Domain</h4>
    <ul>
      <li>Tarayıcıda görünen adres</li>
      <li>Registrar üzerinden yıllık kiralanır</li>
      <li>DNS kayıtlarıyla yönlendirilir</li>
    </ul>
  </div>
  <div class="blog-compare-card">
    <h4>Hosting</h4>
    <ul>
      <li>Site dosyalarının saklandığı sunucu</li>
      <li>Aylık veya yıllık paketler</li>
      <li>SSL, e-posta ve yedekleme burada yapılandırılır</li>
    </ul>
  </div>
</div>

<h2>İkisi Birlikte Nasıl Çalışır?</h2>
<p>Domain satın aldığınızda DNS (Domain Name System) kayıtlarını hosting sunucunuzun IP adresine yönlendirmeniz gerekir. Bu yönlendirme tamamlandığında kullanıcı domain adresinizi yazdığında hosting sunucunuzdaki site açılır.</p>

<div class="blog-flow">
  <div class="blog-flow-step">1. Domain satın al</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step">2. Hosting paketi seç</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step">3. DNS'i yönlendir</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step">4. SSL ile yayına al</div>
</div>

<div class="blog-callout">
  <p class="blog-callout-title">Pratik ipucu</p>
  <p>Domain ve hosting'i aynı sağlayıcıdan almak DNS yönetimini kolaylaştırır. Farklı firmalardan alsanız bile A kaydı ve nameserver güncellemesiyle bağlayabilirsiniz.</p>
</div>

<p>SSL sertifikası da hosting tarafında yapılandırılır; böylece siteniz <em>https://</em> ile güvenli şekilde çalışır.</p>

<h2>Domain Nasıl Alınır?</h2>
<p>Domain satın alma süreci oldukça basittir:</p>
<ul class="blog-steps">
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Domain adını belirleyin</strong>Kısa, telaffuzu kolay ve markanızla uyumlu bir isim seçin. <a href="/blog/dogru-domain-secimi">Doğru Domain Seçimi</a> rehberimize bakabilirsiniz.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Müsaitliği kontrol edin</strong>Seçtiğiniz ismin .com, .com.tr veya .net gibi uzantılarda boş olup olmadığına bakın.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Kayıt firmasını seçin</strong>Güvenilir, destek sunan ve şeffaf fiyatlandırmaya sahip bir registrar tercih edin.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Satın alın ve yenilemeyi planlayın</strong>Hesap oluşturup ödemeyi tamamlayın. Otomatik yenilemeyi aktif edin.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>DNS ayarlarını yapın</strong>Domain'i hosting sağlayıcınıza yönlendirin. <a href="/blog/domain-hosting-tasima">Taşıma rehberimiz</a> DNS güncellemesinde yardımcı olur.</div></div></li>
</ul>

<h2>DNS Yapılandırması Nedir?</h2>
<p>DNS (Domain Name System), domain adresinizi hosting sunucunuzun IP adresine bağlayan kayıt sistemidir. Domain panelinizden A kaydı veya nameserver (NS) güncellemesi yaparak sitenizi yayına alabilirsiniz. Hosting sağlayıcınız size hangi kayıtları girmeniz gerektiğini bildirir.</p>

<h2>Popüler Domain Uzantıları</h2>
<p class="blog-section-lead">Uzantı seçimi markanızın algısını doğrudan etkiler. Aşağıdaki tabloda yaygın uzantıları karşılaştırabilirsiniz:</p>
${BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER}

<h2>Domain Seçerken Dikkat Edilmesi Gerekenler</h2>
<ul>
<li>Mümkünse <strong>.com</strong> uzantısını tercih edin; en yaygın ve güvenilir uzantıdır.</li>
<li>Tire (-) kullanımından kaçının; telaffuzu zorlaştırır.</li>
<li>Rakam ve özel karakterlerden uzak durun.</li>
<li>Marka tescili yapmayı planlıyorsanız domain adınızın markanızla örtüşmesine dikkat edin.</li>
<li>Domain'i yıllık yenilemeyi unutmayın; süresi dolan domainler başkalarına satılabilir.</li>
<li>Otomatik yenileme seçeneğini aktif edin; domain kaybını önler.</li>
</ul>

<h2>Domain ve Hosting Nereden Alınır?</h2>
<p>Domain ve hosting'i aynı firmadan almak yönetimi kolaylaştırır. Projelerimizde <strong>ixirhost</strong> altyapısını kullanıyoruz; domain tescili, DNS, SSL ve hosting hizmetlerini tek panelden yönetebiliyoruz.</p>

<h2>Sonuç</h2>
<p>Domain sitenizin adresi, hosting ise içeriğinizin evi. İkisi birlikte çalışmadan web siteniz yayına giremez. Doğru isim, güvenilir sağlayıcı ve DNS yapılandırması yeterlidir — kurulum sürecinde destek almak isterseniz bizimle iletişime geçebilirsiniz.</p>
`,
    en: `
<p>Two building blocks are required to launch a website: a <strong>domain</strong> name and <strong>hosting</strong>. This guide explains what they are, how they differ, how they work together and walks through the domain purchase process step by step.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">.com</span><span class="blog-stat-label">Most popular domain extension</span></div>
  <div class="blog-stat"><span class="blog-stat-value">99.9%</span><span class="blog-stat-label">Target uptime (quality hosting)</span></div>
  <div class="blog-stat"><span class="blog-stat-value">HTTPS</span><span class="blog-stat-label">Required security with SSL</span></div>
</div>

<h2>What Is a Domain?</h2>
<p>A domain name is your website's address on the internet. For example, <em>veltstack.com</em> is a domain name. Users type this address into their browser to reach your site. A domain is separate from hosting — you register the domain first, then connect it to a hosting service.</p>
<p>Domains are leased yearly through a registrar.</p>

<div class="blog-analogy">
  <div class="blog-analogy-header">
    <span class="blog-analogy-kicker">Analogy</span>
    <p class="blog-analogy-title">Think of domain and hosting in everyday terms</p>
  </div>
  <div class="blog-analogy-grid">
    <article class="blog-analogy-item blog-analogy-item--domain">
      <div class="blog-analogy-item-head">
        <span class="blog-analogy-item-icon blog-analogy-item-icon--domain" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
        <div class="blog-analogy-item-meta">
          <p class="blog-analogy-item-label">Domain</p>
          <span class="blog-analogy-item-tag">Domain name · address</span>
        </div>
      </div>
      <p class="blog-analogy-item-desc">Like your home's street address. Visitors type it in the browser to find you.</p>
      <span class="blog-analogy-item-example">veltstack.com</span>
    </article>
    <div class="blog-analogy-join" aria-hidden="true"><span>+</span></div>
    <article class="blog-analogy-item blog-analogy-item--hosting">
      <div class="blog-analogy-item-head">
        <span class="blog-analogy-item-icon blog-analogy-item-icon--hosting" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/></svg></span>
        <div class="blog-analogy-item-meta">
          <p class="blog-analogy-item-label">Hosting</p>
          <span class="blog-analogy-item-tag">Hosting · the building</span>
        </div>
      </div>
      <p class="blog-analogy-item-desc">Like the building and everything inside. Your site files, database and email live here.</p>
      <span class="blog-analogy-item-example">Server / Vercel</span>
    </article>
  </div>
</div>

<h2>What Is Hosting?</h2>
<p>Hosting is the server space where your site files live — HTML, CSS, images, databases. The domain sends visitors to the right address; hosting stores what's inside.</p>
<p class="blog-section-lead">Evaluate hosting types against your project scale:</p>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>Shared Hosting</h4>
    <p>Multiple sites on one server. An <strong>economical</strong> start for small corporate sites and blogs.</p>
  </div>
  <div class="blog-type-card">
    <h4>VPS</h4>
    <p>More resources and control. A <strong>flexible</strong> option for growing traffic or custom configuration.</p>
  </div>
  <div class="blog-type-card">
    <h4>Cloud Hosting</h4>
    <p>Scalable infrastructure. Scale resources on traffic spikes — for teams targeting <strong>high availability</strong>.</p>
  </div>
  <div class="blog-type-card">
    <h4>Platform (Vercel, Netlify)</h4>
    <p>Optimized for Next.js and static sites. Deploy via Git push — <strong>ideal for modern web projects</strong>. See <a href="/blog/vercel-de-yayin">Deploying on Vercel</a>.</p>
  </div>
</div>

<figure class="blog-chart">
  <figcaption>Average monthly hosting costs (Turkey, 2026 — indicative)</figcaption>
  <div class="blog-chart-bars">
    <div class="blog-chart-row">
      <span class="blog-chart-label">Shared</span>
      <div class="blog-chart-track"><div class="blog-chart-fill" style="width:28%"></div></div>
      <span class="blog-chart-value">₺150</span>
    </div>
    <div class="blog-chart-row">
      <span class="blog-chart-label">WordPress</span>
      <div class="blog-chart-track"><div class="blog-chart-fill" style="width:42%"></div></div>
      <span class="blog-chart-value">₺250</span>
    </div>
    <div class="blog-chart-row">
      <span class="blog-chart-label">VPS</span>
      <div class="blog-chart-track"><div class="blog-chart-fill" style="width:68%"></div></div>
      <span class="blog-chart-value">₺450</span>
    </div>
    <div class="blog-chart-row">
      <span class="blog-chart-label">Cloud</span>
      <div class="blog-chart-track"><div class="blog-chart-fill" style="width:100%"></div></div>
      <span class="blog-chart-value">₺650+</span>
    </div>
  </div>
</figure>

<h2>Domain vs Hosting</h2>
<div class="blog-table-wrap">
<table>
<thead><tr><th>Feature</th><th>Domain</th><th>Hosting</th></tr></thead>
<tbody>
<tr><td>Purpose</td><td>Address (URL)</td><td>Content storage</td></tr>
<tr><td>Analogy</td><td>Street address</td><td>The building</td></tr>
<tr><td>Renewal</td><td>Yearly</td><td>Monthly or yearly</td></tr>
<tr><td>Can you switch?</td><td>Yes (via DNS)</td><td>Yes (by migrating files)</td></tr>
</tbody>
</table>
</div>

<div class="blog-compare">
  <div class="blog-compare-card">
    <h4>Domain</h4>
    <ul>
      <li>The address shown in the browser</li>
      <li>Leased yearly from a registrar</li>
      <li>Points visitors via DNS records</li>
    </ul>
  </div>
  <div class="blog-compare-card">
    <h4>Hosting</h4>
    <ul>
      <li>Server where site files are stored</li>
      <li>Monthly or yearly packages</li>
      <li>SSL, email and backups configured here</li>
    </ul>
  </div>
</div>

<h2>How They Work Together</h2>
<p>After buying a domain you point DNS records to your hosting server's IP. Once that's done, visitors who type your domain see the site on your host.</p>

<div class="blog-flow">
  <div class="blog-flow-step">1. Buy domain</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step">2. Choose hosting</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step">3. Point DNS</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step">4. Go live with SSL</div>
</div>

<div class="blog-callout">
  <p class="blog-callout-title">Practical tip</p>
  <p>Buying domain and hosting from the same provider simplifies DNS management. You can still connect different providers by updating A records or nameservers.</p>
</div>

<p>SSL is configured on the hosting side so your site runs securely over <em>https://</em>.</p>

<h2>How to Buy a Domain</h2>
<p>The domain purchase process is straightforward:</p>
<ul class="blog-steps">
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Choose a domain name</strong>Pick something short, easy to say and aligned with your brand. See our <a href="/blog/dogru-domain-secimi">Choosing the Right Domain</a> guide.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Check availability</strong>See whether your name is free under extensions like .com, .com.tr or .net.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Pick a registrar</strong>Choose a reliable provider with fair pricing and support.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Complete purchase and plan renewal</strong>Create an account and pay. Enable auto-renewal.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Configure DNS</strong>Point the domain to your hosting provider. Our <a href="/blog/domain-hosting-tasima">migration guide</a> helps with DNS updates.</div></div></li>
</ul>

<h2>What Is DNS Configuration?</h2>
<p>DNS (Domain Name System) connects your domain to your hosting server's IP address. Update A records or nameservers (NS) in your domain panel to go live. Your hosting provider will tell you which records to enter.</p>

<h2>Popular Domain Extensions</h2>
<p class="blog-section-lead">Extension choice directly affects brand perception. Compare common extensions below:</p>
${BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER}

<h2>Tips for Choosing a Domain</h2>
<ul>
<li>Prefer <strong>.com</strong> when possible — it's the most trusted extension.</li>
<li>Avoid hyphens; they make names harder to say aloud.</li>
<li>Skip numbers and special characters.</li>
<li>If you plan to register a trademark, align the domain with your brand name.</li>
<li>Renew annually — expired domains can be sold to someone else.</li>
<li>Enable auto-renewal to avoid losing your domain.</li>
</ul>

<h2>Where to Get Domain and Hosting</h2>
<p>Buying both from one provider simplifies management. We use <strong>ixirhost</strong> in our projects — domain registration, DNS, SSL and hosting from a single panel.</p>

<h2>Conclusion</h2>
<p>Domain is your address, hosting is your home for content. Both are required to go live. The right name, a reliable provider and DNS setup are enough — contact us if you want help with the process.</p>
`,
  },
};
