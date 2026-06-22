import type { BlogPostEntry } from "./types";

export const blogPostEntry: BlogPostEntry = {
  slug: "vercel-de-yayin",
  titleTr: "Vercel'de Yayın",
  titleEn: "Deploying on Vercel",
  excerptTr:
    "Next.js projelerini Vercel'e nasıl deploy edeceğinizi adım adım anlatıyor; ortam değişkenleri, özel domain, preview ortamları ve sık karşılaşılan hataları kapsıyoruz.",
  excerptEn:
    "A step-by-step guide to deploying Next.js projects on Vercel, covering environment variables, custom domains, preview environments and common pitfalls.",
  category: "Web Geliştirme",
  categoryEn: "Web Development",
  imageUrl: "/images/blog/vercel-de-yayin.png",
  readingTime: 9,
  publishedAt: "2026-06-22",
  featured: true,
  content: {
    tr: `
<p>Next.js projesini canlıya almak için en pratik yollardan biri <strong>Vercel</strong>. Git push ile otomatik deploy, global CDN ve preview ortamları sayesinde hem geliştirme hem production sürecini hızlandırır. Bu rehberde Vercel'de yayın sürecini sıfırdan adım adım ele alıyoruz.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">Git</span><span class="blog-stat-label">Kaynak kod</span></div>
  <div class="blog-stat"><span class="blog-stat-value">CDN</span><span class="blog-stat-label">Global dağıtım</span></div>
  <div class="blog-stat"><span class="blog-stat-value">Preview</span><span class="blog-stat-label">PR başına ortam</span></div>
</div>

<h2>Vercel Nedir?</h2>
<p>Vercel, Next.js'in geliştiricisi olan ekip tarafından sunulan bir <strong>frontend cloud platformudur</strong>. Statik siteler, SSR/ISR uygulamaları ve serverless fonksiyonları tek panelden yönetmenizi sağlar.</p>
<ul>
<li><strong>Zero-config deploy:</strong> Next.js projeleri ek yapılandırma olmadan tanınır.</li>
<li><strong>Edge Network:</strong> İçerik dünya genelinde edge noktalarından sunulur.</li>
<li><strong>Preview URL'leri:</strong> Her branch ve pull request için ayrı test adresi üretilir.</li>
</ul>

<h2>Neden Vercel?</h2>
<div class="blog-table-wrap blog-table-compare">
<table>
<colgroup>
  <col class="blog-table-compare-col-feature" />
  <col class="blog-table-compare-col-domain" />
  <col class="blog-table-compare-col-hosting" />
</colgroup>
<thead><tr><th>Özellik</th><th>Geleneksel hosting</th><th>Vercel</th></tr></thead>
<tbody>
<tr><td>Kurulum</td><td>Manuel sunucu ve nginx yapılandırması</td><td>Git bağlantısı ile otomatik</td></tr>
<tr><td>SSL</td><td>Ayrı sertifika yönetimi</td><td>Otomatik HTTPS</td></tr>
<tr><td>Ölçekleme</td><td>Manuel kapasite planlama</td><td>Serverless, talebe göre</td></tr>
<tr><td>Next.js uyumu</td><td>Ek optimizasyon gerekir</td><td>Native destek</td></tr>
<tr><td>Preview ortamı</td><td>Genelde yok veya ayrı sunucu</td><td>Her PR için hazır URL</td></tr>
</tbody>
</table>
</div>

<h2>Deploy Öncesi Hazırlık</h2>
<ol>
<li>Projenizin GitHub, GitLab veya Bitbucket üzerinde bir repository'si olsun.</li>
<li><code>npm run build</code> komutunun yerelde hatasız tamamlandığından emin olun.</li>
<li>Veritabanı bağlantısı, API anahtarları gibi gizli değerleri <code>.env</code> dosyasında tutun; repoya commit etmeyin.</li>
<li><code>DATABASE_URL</code>, <code>NEXTAUTH_SECRET</code>, <code>RESEND_API_KEY</code> gibi production değişkenlerini listeleyin.</li>
</ol>

<h2>Vercel'de Yayın Adımları</h2>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>1. Hesap ve proje</h4>
    <p>vercel.com üzerinden kayıt olun, <strong>Add New → Project</strong> ile Git repository'nizi bağlayın. Vercel framework'ü otomatik algılar.</p>
  </div>
  <div class="blog-type-card">
    <h4>2. Build ayarları</h4>
    <p>Varsayılan komutlar çoğu Next.js projesi için yeterlidir: Build Command <code>next build</code>, Output Directory <code>.next</code>. Monorepo değilse değiştirmeniz gerekmez.</p>
  </div>
  <div class="blog-type-card">
    <h4>3. Ortam değişkenleri</h4>
    <p>Project Settings → Environment Variables bölümünden Production, Preview ve Development için ayrı ayrı tanımlayın. İlk deploy'dan önce eklemek build hatalarını önler.</p>
  </div>
  <div class="blog-type-card">
    <h4>4. Deploy</h4>
    <p><strong>Deploy</strong> butonuna bastıktan sonra build loglarını izleyin. Başarılı olunca <code>proje-adi.vercel.app</code> adresinde siteniz yayında olur.</p>
  </div>
</div>

<h2>Özel Domain Bağlama</h2>
<p>Domain satın aldıysanız Vercel panelinde <strong>Settings → Domains</strong> bölümüne gidin, alan adınızı ekleyin ve DNS kayıtlarını yönlendirin.</p>
<ul>
<li><strong>Apex domain (example.com):</strong> Vercel'in verdiği A kaydını kullanın.</li>
<li><strong>Alt domain (www.example.com):</strong> CNAME kaydı ile <code>cname.vercel-dns.com</code> hedeflenir.</li>
<li>DNS yayılımı birkaç dakika ile 48 saat arasında sürebilir; SSL sertifikası otomatik üretilir.</li>
</ul>

<div class="blog-callout">
  <p class="blog-callout-title">Pratik ipucu</p>
  <p>Domain DNS yönetimini domain sağlayıcınızda tutup yalnızca gerekli A/CNAME kayıtlarını Vercel'e yönlendirmek en yaygın ve güvenli yöntemdir. Nameserver'ları tamamen taşımak zorunlu değildir.</p>
</div>

<h2>Preview ve Production Ortamları</h2>
<p>Her <code>git push</code> sonrası Vercel yeni bir deployment başlatır. <code>main</code> veya <code>master</code> branch production'a gider; diğer branch'ler preview URL alır. Müşteri onayı ve QA testleri için bu adresleri paylaşabilirsiniz.</p>
<p>Production'da sorun çıkarsa Deployments sekmesinden önceki başarılı sürüme <strong>Instant Rollback</strong> ile dönebilirsiniz.</p>

<h2>Sık Karşılaşılan Sorunlar</h2>
<ul>
<li><strong>Build hatası:</strong> Yerelde <code>npm run build</code> çalıştırın; TypeScript veya lint hataları Vercel'de de aynı şekilde patlar.</li>
<li><strong>Env değişkeni eksik:</strong> Production'da tanımlı olmayan <code>process.env</code> değerleri runtime'da undefined döner.</li>
<li><strong>Prisma / DB bağlantısı:</strong> Serverless ortamda connection pool limitlerine dikkat edin; gerekirse connection pooling (ör. PlanetScale, Neon) kullanın.</li>
<li><strong>Image domain hatası:</strong> Harici görseller için <code>next.config</code> içinde <code>images.remotePatterns</code> tanımlayın.</li>
</ul>

<h2>Vercel Maliyeti</h2>
<p>Hobby plan kişisel ve küçük projeler için ücretsizdir; bandwidth ve build dakikası sınırları vardır. Kurumsal trafik, ekip iş birliği ve SLA ihtiyacı olan projelerde Pro veya Enterprise plan değerlendirilir. Domain ve e-posta gibi hizmetler Vercel dışından ayrıca faturalandırılır.</p>

<h2>Profesyonel Deploy Desteği</h2>
<p>Vercel kurulumu teknik olarak basit görünse de DNS, ortam değişkenleri, veritabanı bağlantısı ve CI/CD akışının doğru kurgulanması production güvenilirliğini belirler. Veltstack web sitesi paketlerinde Vercel yayınlama desteği sunuyor; domain yönlendirmesi ve ilk production deploy'u sizin adınıza tamamlıyoruz.</p>

<h2>Sonuç</h2>
<p>Next.js projelerini Vercel'de yayınlamak hızlı, güvenli ve ölçeklenebilir bir yoldur. Git tabanlı workflow, otomatik SSL ve preview ortamları modern web geliştirme sürecinin vazgeçilmez parçalarıdır. Projenizi canlıya alırken destek isterseniz bizimle iletişime geçebilirsiniz.</p>
`,
    en: `
<p>One of the easiest ways to ship a Next.js project is <strong>Vercel</strong>. Automatic deploys on git push, a global CDN and preview environments speed up both development and production. This guide walks through publishing on Vercel from scratch.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">Git</span><span class="blog-stat-label">Source code</span></div>
  <div class="blog-stat"><span class="blog-stat-value">CDN</span><span class="blog-stat-label">Global delivery</span></div>
  <div class="blog-stat"><span class="blog-stat-value">Preview</span><span class="blog-stat-label">Per-PR environment</span></div>
</div>

<h2>What Is Vercel?</h2>
<p>Vercel is a <strong>frontend cloud platform</strong> from the team behind Next.js. It lets you manage static sites, SSR/ISR apps and serverless functions from one dashboard.</p>
<ul>
<li><strong>Zero-config deploy:</strong> Next.js projects are detected without extra setup.</li>
<li><strong>Edge Network:</strong> Content is served from edge locations worldwide.</li>
<li><strong>Preview URLs:</strong> Each branch and pull request gets its own test URL.</li>
</ul>

<h2>Why Vercel?</h2>
<div class="blog-table-wrap blog-table-compare">
<table>
<colgroup>
  <col class="blog-table-compare-col-feature" />
  <col class="blog-table-compare-col-domain" />
  <col class="blog-table-compare-col-hosting" />
</colgroup>
<thead><tr><th>Feature</th><th>Traditional hosting</th><th>Vercel</th></tr></thead>
<tbody>
<tr><td>Setup</td><td>Manual server and nginx config</td><td>Automatic via Git</td></tr>
<tr><td>SSL</td><td>Separate certificate management</td><td>Automatic HTTPS</td></tr>
<tr><td>Scaling</td><td>Manual capacity planning</td><td>Serverless, on demand</td></tr>
<tr><td>Next.js fit</td><td>Extra optimization needed</td><td>Native support</td></tr>
<tr><td>Preview env</td><td>Often missing or separate server</td><td>Ready URL per PR</td></tr>
</tbody>
</table>
</div>

<h2>Before You Deploy</h2>
<ol>
<li>Have your project in a GitHub, GitLab or Bitbucket repository.</li>
<li>Confirm <code>npm run build</code> completes without errors locally.</li>
<li>Keep secrets (database URLs, API keys) in <code>.env</code>; never commit them.</li>
<li>List production variables such as <code>DATABASE_URL</code>, <code>NEXTAUTH_SECRET</code>, <code>RESEND_API_KEY</code>.</li>
</ol>

<h2>Steps to Deploy on Vercel</h2>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>1. Account and project</h4>
    <p>Sign up at vercel.com, choose <strong>Add New → Project</strong> and connect your Git repo. Vercel detects the framework automatically.</p>
  </div>
  <div class="blog-type-card">
    <h4>2. Build settings</h4>
    <p>Defaults work for most Next.js apps: Build Command <code>next build</code>, Output Directory <code>.next</code>. No changes needed unless you use a monorepo.</p>
  </div>
  <div class="blog-type-card">
    <h4>3. Environment variables</h4>
    <p>Add them under Project Settings → Environment Variables for Production, Preview and Development separately. Adding them before the first deploy avoids build failures.</p>
  </div>
  <div class="blog-type-card">
    <h4>4. Deploy</h4>
    <p>Click <strong>Deploy</strong> and watch the build logs. On success your site is live at <code>project-name.vercel.app</code>.</p>
  </div>
</div>

<h2>Connecting a Custom Domain</h2>
<p>If you own a domain, go to <strong>Settings → Domains</strong> in the Vercel dashboard, add your domain and point DNS records.</p>
<ul>
<li><strong>Apex domain (example.com):</strong> Use the A record Vercel provides.</li>
<li><strong>Subdomain (www.example.com):</strong> CNAME to <code>cname.vercel-dns.com</code>.</li>
<li>DNS propagation can take minutes to 48 hours; SSL is issued automatically.</li>
</ul>

<div class="blog-callout">
  <p class="blog-callout-title">Practical tip</p>
  <p>Keeping DNS at your registrar and only pointing the required A/CNAME records to Vercel is the most common and safe approach. Moving nameservers entirely is optional.</p>
</div>

<h2>Preview vs Production</h2>
<p>Every <code>git push</code> triggers a new deployment. The <code>main</code> or <code>master</code> branch goes to production; other branches get preview URLs. Share these for client review and QA.</p>
<p>If production breaks, use <strong>Instant Rollback</strong> on the Deployments tab to return to the last good release.</p>

<h2>Common Issues</h2>
<ul>
<li><strong>Build failure:</strong> Run <code>npm run build</code> locally; TypeScript and lint errors fail the same way on Vercel.</li>
<li><strong>Missing env var:</strong> Undefined <code>process.env</code> values at runtime usually mean they were not set for Production.</li>
<li><strong>Prisma / DB:</strong> Watch connection pool limits in serverless; use pooling (e.g. PlanetScale, Neon) when needed.</li>
<li><strong>Image domain error:</strong> Define external hosts in <code>images.remotePatterns</code> in <code>next.config</code>.</li>
</ul>

<h2>Vercel Pricing</h2>
<p>The Hobby plan is free for personal and small projects with bandwidth and build-minute limits. Pro or Enterprise fits higher traffic, team collaboration and SLA needs. Domains and email are billed separately outside Vercel.</p>

<h2>Professional Deploy Support</h2>
<p>Vercel setup looks simple, but DNS, environment variables, database connections and CI/CD flow determine production reliability. Veltstack website packages include Vercel publishing support; we handle domain routing and the first production deploy for you.</p>

<h2>Conclusion</h2>
<p>Publishing Next.js on Vercel is fast, secure and scalable. Git-based workflow, automatic SSL and preview environments are essential parts of modern web delivery. Contact us if you need help taking your project live.</p>
`,
  },
};
