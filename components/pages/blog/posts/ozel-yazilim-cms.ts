import {
  BLOG_LUCIDE_CODE,
  BLOG_LUCIDE_LAYOUT_TEMPLATE,
  blogAnalogyIcon,
} from "./blog-analogy-icons";
import type { BlogPostEntry } from "./types";

export const blogPostEntry: BlogPostEntry = {
  slug: "ozel-yazilim-cms",
  titleTr: "Özel Yazılım | CMS",
  titleEn: "Custom Software | CMS",
  excerptTr:
    "Özel yazılımın CMS'e göre neden şart olduğunu; kaliteli projede bir insanın kod yazmasının neden vazgeçilmez olduğunu örneklerle birlikte anlatıyoruz.",
  excerptEn:
    "Why custom software beats CMS for quality projects, and why a human developer writing code is non-negotiable, with practical examples along the way.",
  category: "Özel Yazılım",
  categoryEn: "Custom Software",
  imageUrl: "/images/blog/ozel-yazilim-cms.png",
  readingTime: 10,
  publishedAt: "2026-06-27",
  featured: true,
  content: {
    tr: `
<p>Domain ve hosting hazır olduğunda web sitenizi inşa etmenin iki yolu vardır: hazır bir <strong>CMS</strong> veya ihtiyaca göre geliştirilen <strong>özel yazılım</strong>. Bizim net görüşümüz şudur: ciddi bir dijital varlık hedefliyorsanız <strong>özel yazılım şarttır</strong>, ve bu yazılımı <strong>bir insanın kod yazması şarttır</strong>. Şablon, eklenti veya sürükle-bırak panel kaliteli projelerin yerini tutamaz. Bu rehberde nedenini, CMS'in sınırlarını ve doğru yaklaşımı anlatıyoruz.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">İnsan</span><span class="blog-stat-label">Kod yazımı şart</span></div>
  <div class="blog-stat"><span class="blog-stat-value">Özel</span><span class="blog-stat-label">Profesyonel standart</span></div>
  <div class="blog-stat"><span class="blog-stat-value">CMS</span><span class="blog-stat-label">Geçici / yetersiz</span></div>
</div>

<h2>Neden Özel Yazılım ve İnsan Geliştirici?</h2>
<p>Özel yazılım; deneyimli bir geliştiricinin iş akışınıza, performans hedeflerinize ve entegrasyon ihtiyaçlarınıza göre el ile kodladığı, test ettiği ve sahiplendiği çözümdür. Next.js, React ve TypeScript ile kurulan kurumsal siteler, e-ticaret altyapıları ve yönetim panelleri bu gruba girer.</p>
<p>Hazır CMS ile karşılaştırıldığında insan tarafından yazılan özel yazılım her kritik metrikte öne çıkar:</p>
<ul class="blog-checklist">
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Daha kaliteli:</strong> Tasarım, kod ve kullanıcı deneyimi markanıza birebir uyar; şablon ve eklenti sınırları yoktur.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>İnsan denetimli:</strong> Her satır gözden geçirilir; iş mantığı, güvenlik ve performans bilinçli olarak tasarlanır.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Daha hızlı:</strong> Gereksiz eklenti yükü olmadan optimize edilmiş mimari; Core Web Vitals hedeflerine ulaşmak kolaylaşır.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Daha güvenli:</strong> Bilinen CMS açıkları, güncellenmemiş eklentiler ve üçüncü parti bağımlılıkları devre dışı kalır.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Daha iyi SEO:</strong> Sayfa yapısı, hız ve teknik altyapı arama motorları için sıfırdan optimize edilir.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Daha sürdürülebilir:</strong> Okunabilir kod tabanı ve şeffaf mimari; eklenti uyumsuzlukları ve güncelleme sürprizleri olmadan uzun vadede yönetilir.</span></div></li>
</ul>

<h2>CMS Nedir ve Neden Yetersiz Kalır?</h2>
<p>CMS (Content Management System); WordPress, Wix ve benzeri panel tabanlı sistemlerdir. İçerik girişi kolay görünür; ancak arka planda yine de bir şablona, eklenti yığınına ve genel mimariye mahkûmsunuz. Markanızı öne çıkarmak, hız hedeflemek veya özel iş süreçlerini yönetmek istediğinizde CMS hızla tavan yapar. CMS sizi geliştiriciden bağımsız kılmaz, yalnızca farklı kısıtlara hapseder.</p>

<div class="blog-analogy">
  <div class="blog-analogy-header">
    <span class="blog-analogy-kicker">Benzetme</span>
  </div>
  <div class="blog-analogy-grid">
    <article class="blog-analogy-item blog-analogy-item--domain">
      <div class="blog-analogy-item-head">
        ${blogAnalogyIcon("domain", BLOG_LUCIDE_LAYOUT_TEMPLATE)}
        <div class="blog-analogy-item-meta">
          <p class="blog-analogy-item-label">CMS</p>
          <span class="blog-analogy-item-tag">Seri üretim / geçici çözüm</span>
        </div>
      </div>
      <p class="blog-analogy-item-desc">Hazır, seri üretim mobilya gibidir. Hızlı kurulur ama ölçünüze oturmaz; usta eli değmeden kalıcı olmaz.</p>
      <span class="blog-analogy-item-example">WordPress, Wix</span>
    </article>
    <div class="blog-analogy-join" aria-hidden="true"><span>→</span></div>
    <article class="blog-analogy-item blog-analogy-item--hosting">
      <div class="blog-analogy-item-head">
        ${blogAnalogyIcon("hosting", BLOG_LUCIDE_CODE)}
        <div class="blog-analogy-item-meta">
          <p class="blog-analogy-item-label">Özel Yazılım</p>
          <span class="blog-analogy-item-tag">Usta eli / kalıcı yatırım</span>
        </div>
      </div>
      <p class="blog-analogy-item-desc">Ustanın ölçüye göre ürettiği ev gibidir. İnsan geliştirici tasarlar, kodlar, test eder; yıllarca size hizmet eder.</p>
      <span class="blog-analogy-item-example">El ile kod / Next.js</span>
    </article>
  </div>
</div>

<h2>Karşılaştırma: Özel Yazılım Her Zaman Önde</h2>
<div class="blog-table-wrap blog-table-compare">
<table>
<colgroup>
  <col class="blog-table-compare-col-feature" />
  <col class="blog-table-compare-col-domain" />
  <col class="blog-table-compare-col-hosting" />
</colgroup>
<thead><tr><th>Özellik</th><th>CMS</th><th>Özel Yazılım (İnsan)</th></tr></thead>
<tbody>
<tr><td>Kod sahipliği</td><td>Şablon + eklenti bağımlılığı</td><td><strong>İnsan geliştirici yazar ve sahiplenir</strong></td></tr>
<tr><td>Kalite ve marka uyumu</td><td>Şablon sınırları</td><td><strong>Tam marka deneyimi</strong></td></tr>
<tr><td>Performans</td><td>Eklenti yükü, yavaşlama riski</td><td><strong>Optimize mimari</strong></td></tr>
<tr><td>Güvenlik</td><td>Toplu saldırı hedefi, eklenti açıkları</td><td><strong>Review ve test ile kontrol</strong></td></tr>
<tr><td>Bakım</td><td>Güncelleme sürprizleri</td><td><strong>Okunabilir, sürdürülebilir kod</strong></td></tr>
<tr><td>Uzun vadeli maliyet</td><td>Yeniden yazım + sürprizler</td><td><strong>Tek seferlik doğru yatırım</strong></td></tr>
<tr><td>Profesyonel projeler</td><td>Yetersiz</td><td><strong>Şart</strong></td></tr>
</tbody>
</table>
</div>

<h2>CMS Neden Tercih Edilmemeli?</h2>
<p>CMS yalnızca çok kısa vadeli, düşük beklentili ve teknik altyapısı hiç önemsenmeyen projelerde geçici olarak düşünülebilir. Kurumsal kimlik, dönüşüm hedefi, e-ticaret veya B2B süreçleri varsa CMS ile başlamak zaman ve para kaybıdır. Headless CMS (Strapi, Sanity) bile ancak üzerine <strong>insan geliştiricinin yazdığı özel frontend</strong> konduğunda anlamlıdır, panel kolaylığı, kaliteli yazılımın yerini alamaz.</p>

<div class="blog-callout">
  <p class="blog-callout-title">Net tavsiyemiz</p>
  <p>"CMS kuralım, geliştiriciye gerek kalmaz" veya "Önce CMS, sonra özele geçeriz" cümleleri profesyonel projelerde kabul edilemez. <strong>Özel yazılım şarttır; bir insanın kod yazması şarttır.</strong></p>
</div>

<h2>Özel Yazılım Süreci</h2>
<div class="blog-flow">
  <div class="blog-flow-step" data-step="1">İhtiyaç ve mimari analizi</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="2">İnsan geliştirici ile kodlama</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="3">Review, test, güvenlik kontrolü</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="4">Yayın ve sürekli bakım</div>
</div>

<h2>CMS ile Sık Yapılan Hatalar</h2>
<ul>
<li>Geliştirici olmadan CMS kurup kaliteli yazılım sanmak</li>
<li>Özel yazılım gerektiren projede hazır şablonla başlayıp sonra her şeyi yeniden yazmak</li>
<li>Eklenti yüküyle siteyi yavaşlatmak ve SEO kaybına yol açmak</li>
<li>Güncellenmemiş CMS çekirdeği ve eklentilerle güvenlik açığı bırakmak</li>
<li>Marka kimliğini şablona sığdırmaya çalışmak; sonuçta sıradan bir site</li>
</ul>

<h2>Domain & Hosting ile Bağlantı</h2>
<p>Özel yazılım kararı, altyapı hazır olduktan sonra devreye girer. Domain, DNS, SSL ve Vercel/hosting yapılandırması tamamlanmadan kaliteli bir yayın süreci yürütülemez. Temel kavramlar için <a href="/blog/domain-hosting">Domain & Hosting</a> yazımıza, insan geliştirici ve AI dengesi için <a href="/blog/geleneksel-yazilim-yapay-zeka">Geleneksel Yazılım | Yapay Zeka (AI)</a> rehberimize, modern stack için <a href="/blog/react-nextjs">React & Next.js</a> yazımıza göz atabilirsiniz.</p>

<h2>Veltstack'te Yaklaşımımız</h2>
<p>Veltstack olarak tüm ciddi projelerde <strong>kodu biz yazıyoruz</strong>. TypeScript, Next.js, Tailwind CSS, Prisma ve Vercel ile markanıza özel, hızlı, güvenli ve SEO uyumlu çözümler sunuyoruz. İçerik yönetimi gerektiğinde bunu özel yazılımın içine gömülü admin paneli olarak tasarlıyoruz, hazır CMS'e bağımlı kalmıyoruz. Mimari, güvenlik, review ve teslim kalitesi tamamen insan geliştiricide. IQfinansAI, Yazıcı Ticaret ve Fablessi projelerimizde farkı yaratan şey deneyimli geliştirici emeğidir.</p>

<h2>Sonuç</h2>
<p>CMS hızlı bir illüzyon sunabilir; ancak kaliteli, güvenli ve ölçeklenebilir bir dijital varlık için <strong>özel yazılım şarttır</strong> ve <strong>bir insanın kod yazması şarttır</strong>. Daha iyi performans, daha iyi SEO, daha iyi kullanıcı deneyimi ve uzun vadede daha düşük toplam maliyet, hepsi insan eliyle yazılmış özel geliştirmeyle gelir. Projenizi doğru temele oturtmak için bizimle iletişime geçin.</p>
`,
    en: `
<p>Once domain and hosting are ready, there are two ways to build your website: an off-the-shelf <strong>CMS</strong> or <strong>custom software</strong> built for your needs. Our clear view: for a serious digital presence, <strong>custom software is essential</strong>, and <strong>a human writing code is essential</strong>. Templates, plugins and drag-and-drop panels cannot replace quality software. This guide explains why, the limits of CMS and the right approach.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">Human</span><span class="blog-stat-label">Code writing essential</span></div>
  <div class="blog-stat"><span class="blog-stat-value">Custom</span><span class="blog-stat-label">Professional standard</span></div>
  <div class="blog-stat"><span class="blog-stat-value">CMS</span><span class="blog-stat-label">Temporary / insufficient</span></div>
</div>

<h2>Why Custom Software and a Human Developer?</h2>
<p>Custom software is a solution consciously coded, tested and owned by an experienced developer to match your workflows, performance goals and integration needs. Corporate sites, e-commerce platforms and admin panels built with Next.js, React and TypeScript belong here.</p>
<p>Compared to off-the-shelf CMS, human-written custom software leads on every critical metric:</p>
<ul class="blog-checklist">
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Higher quality:</strong> Design, code and UX fit your brand exactly; no template or plugin limits.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Human-reviewed:</strong> Every line is reviewed; business logic, security and performance are designed consciously.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Faster:</strong> Optimized architecture without plugin bloat; Core Web Vitals targets are easier to hit.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>More secure:</strong> Known CMS vulnerabilities, outdated plugins and third-party dependencies are eliminated.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Better SEO:</strong> Page structure, speed and technical foundation are optimized from the ground up.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>More maintainable:</strong> Readable codebase and transparent architecture; managed long term without plugin conflicts or update surprises.</span></div></li>
</ul>

<h2>What Is CMS and Why It Falls Short</h2>
<p>A CMS (Content Management System), WordPress, Wix and similar panel-based systems, makes content entry look easy, but you are still tied to templates, plugin stacks and generic architecture. CMS hits a ceiling quickly when you want to stand out, target speed or run custom business processes. CMS does not free you from developers, it only traps you in different constraints.</p>

<div class="blog-analogy">
  <div class="blog-analogy-header">
    <span class="blog-analogy-kicker">Analogy</span>
  </div>
  <div class="blog-analogy-grid">
    <article class="blog-analogy-item blog-analogy-item--domain">
      <div class="blog-analogy-item-head">
        ${blogAnalogyIcon("domain", BLOG_LUCIDE_LAYOUT_TEMPLATE)}
        <div class="blog-analogy-item-meta">
          <p class="blog-analogy-item-label">CMS</p>
          <span class="blog-analogy-item-tag">Mass-produced / temporary fix</span>
        </div>
      </div>
      <p class="blog-analogy-item-desc">Like mass-produced furniture. Quick to set up but never fits properly; it won't last without a craftsman's hand.</p>
      <span class="blog-analogy-item-example">WordPress, Wix</span>
    </article>
    <div class="blog-analogy-join" aria-hidden="true"><span>→</span></div>
    <article class="blog-analogy-item blog-analogy-item--hosting">
      <div class="blog-analogy-item-head">
        ${blogAnalogyIcon("hosting", BLOG_LUCIDE_CODE)}
        <div class="blog-analogy-item-meta">
          <p class="blog-analogy-item-label">Custom Software</p>
          <span class="blog-analogy-item-tag">Craftsman's work / lasting investment</span>
        </div>
      </div>
      <p class="blog-analogy-item-desc">Like a home built to measure by a master. A human developer designs, codes and tests; it serves you for years.</p>
      <span class="blog-analogy-item-example">Hand-written code / Next.js</span>
    </article>
  </div>
</div>

<h2>Comparison: Custom Software Always Wins</h2>
<div class="blog-table-wrap blog-table-compare">
<table>
<colgroup>
  <col class="blog-table-compare-col-feature" />
  <col class="blog-table-compare-col-domain" />
  <col class="blog-table-compare-col-hosting" />
</colgroup>
<thead><tr><th>Feature</th><th>CMS</th><th>Custom Software (Human)</th></tr></thead>
<tbody>
<tr><td>Code ownership</td><td>Template + plugin dependency</td><td><strong>Human developer writes and owns</strong></td></tr>
<tr><td>Quality and brand fit</td><td>Template limits</td><td><strong>Full brand experience</strong></td></tr>
<tr><td>Performance</td><td>Plugin bloat, slowdown risk</td><td><strong>Optimized architecture</strong></td></tr>
<tr><td>Security</td><td>Mass attack target, plugin holes</td><td><strong>Review and test under control</strong></td></tr>
<tr><td>Maintenance</td><td>Update surprises</td><td><strong>Readable, maintainable code</strong></td></tr>
<tr><td>Long-term cost</td><td>Rewrite + surprises</td><td><strong>One-time right investment</strong></td></tr>
<tr><td>Professional projects</td><td>Insufficient</td><td><strong>Essential</strong></td></tr>
</tbody>
</table>
</div>

<h2>Why CMS Should Not Be Chosen</h2>
<p>CMS is only a temporary option for very short-term, low-expectation projects where technical foundation does not matter at all. If you have a corporate identity, conversion goals, e-commerce or B2B processes, starting with CMS wastes time and money. Even headless CMS (Strapi, Sanity) only makes sense with a <strong>custom frontend written by a human developer</strong>, panel convenience cannot replace quality software.</p>

<div class="blog-callout">
  <p class="blog-callout-title">Our clear recommendation</p>
  <p>"We'll set up CMS, no developer needed" or "CMS first, custom later" is unacceptable on professional projects. <strong>Custom software is essential; a human writing code is essential.</strong></p>
</div>

<h2>Custom Software Process</h2>
<div class="blog-flow">
  <div class="blog-flow-step" data-step="1">Needs and architecture analysis</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="2">Coding with a human developer</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="3">Review, test, security check</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="4">Launch and ongoing maintenance</div>
</div>

<h2>Common Mistakes with CMS</h2>
<ul>
<li>Setting up CMS without a developer and calling it quality software</li>
<li>Starting with a ready template on a project that needs custom software, then rewriting everything</li>
<li>Slowing the site with plugins and losing SEO rankings</li>
<li>Leaving security holes through outdated CMS core and plugins</li>
<li>Forcing brand identity into a template; ending up with a generic site</li>
</ul>

<h2>Connection to Domain & Hosting</h2>
<p>The custom software decision comes after infrastructure is ready. A quality launch cannot run without domain, DNS, SSL and Vercel or hosting configuration. See our <a href="/blog/domain-hosting">Domain & Hosting</a> article for the basics, our <a href="/blog/geleneksel-yazilim-yapay-zeka">Traditional Software | AI</a> guide for the human developer vs AI balance, and our <a href="/blog/react-nextjs">React & Next.js</a> article for the modern stack.</p>

<h2>Our Approach at Veltstack</h2>
<p>At Veltstack <strong>we write the code</strong> on every serious project. With TypeScript, Next.js, Tailwind CSS, Prisma and Vercel we deliver tailored, fast, secure and SEO-friendly solutions. When content management is needed, we design it as an embedded admin panel inside custom software, we do not depend on off-the-shelf CMS. Architecture, security, review and delivery quality are entirely human. Projects like IQfinansAI, Yazıcı Ticaret and Fablessi show that experienced developer craft makes the difference.</p>

<h2>Conclusion</h2>
<p>CMS can offer a quick illusion; but for a high-quality, secure and scalable digital presence, <strong>custom software is essential</strong> and <strong>a human writing code is essential</strong>. Better performance, better SEO, better user experience and lower total cost long term, all come from custom development written by human hands. Contact us to put your project on the right foundation.</p>
`,
  },
};
