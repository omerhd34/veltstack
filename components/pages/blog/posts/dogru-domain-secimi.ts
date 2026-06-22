import { BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER } from "@/components/pages/blog-detail/domain-extensions-data";
import type { BlogPostEntry } from "./types";

export const blogPostEntry: BlogPostEntry = {
  slug: "dogru-domain-secimi",
  titleTr: "Doğru Domain Seçimi",
  titleEn: "Choosing the Right Domain",
  excerptTr:
    "Markanıza uygun domain adını nasıl belirleyeceğinizi, uzantı seçimini ve sık yapılan hataları pratik bir rehberle paylaşıyoruz; SEO etkisini de ele alıyoruz.",
  excerptEn:
    "A practical guide to picking a domain name that fits your brand, choosing the right extension, avoiding common mistakes and understanding SEO impact.",
  category: "Hosting & Domain",
  categoryEn: "Hosting & Domain",
  imageUrl: "/images/blog/dogru-domain-secimi.png",
  readingTime: 8,
  publishedAt: "2026-06-24",
  featured: true,
  content: {
    tr: `
<p>Domain adınız, markanızın dijital vitrinidir. İlk izlenim, arama sonuçlarındaki tıklama oranı ve müşteri güveni büyük ölçüde bu adrese bağlıdır. Doğru domain seçimi; kısa, akılda kalıcı ve hedef kitlenize uygun bir isimle başlar. Bu rehberde isimlendirme kurallarını, uzantı tercihlerini ve kaçınılması gereken hataları ele alıyoruz.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">.com</span><span class="blog-stat-label">Global güven standardı</span></div>
  <div class="blog-stat"><span class="blog-stat-value">Kısa</span><span class="blog-stat-label">Akılda kalıcı isim</span></div>
  <div class="blog-stat"><span class="blog-stat-value">Marka</span><span class="blog-stat-label">Tutarlı kimlik</span></div>
</div>

<h2>Domain Seçimi Neden Önemli?</h2>
<p>Domain yalnızca bir web adresi değildir; e-posta adresleriniz, sosyal medya profilleriniz ve basılı materyallerinizle birlikte marka kimliğinizin parçasıdır. Yanlış seçim; telaffuz zorluğu, yazım hataları ve SEO kaybına yol açabilir. İyi bir domain ise uzun vadede pazarlama maliyetinizi düşürür.</p>

<h2>İyi Bir Domain Adının Özellikleri</h2>
<ul class="blog-checklist">
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Kısa ve net:</strong> İdeal olarak 6–14 karakter arası; tek seferde okunup yazılabilmeli.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Telaffuzu kolay:</strong> Telefonda söylediğinizde karşı taraf doğru yazabilmeli.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Markayla uyumlu:</strong> Şirket veya ürün adınızla tutarlı olmalı; farklı yazımlardan kaçının.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Tire ve rakam yok:</strong> <em>marka-site.com</em> veya <em>marka2024.com</em> hatırlamayı zorlaştırır.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Yasal açıdan temiz:</strong> Tescilli marka veya rakip isimlerine benzememeli.</span></div></li>
</ul>

<h2>İsim Bulma Stratejileri</h2>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>Doğrudan marka adı</h4>
    <p>En güçlü seçenek. Markanız <em>Acme</em> ise <em>acme.com</em> idealdir. Müsait değilse alternatif uzantı veya hafif varyasyon düşünün.</p>
  </div>
  <div class="blog-type-card">
    <h4>Açıklayıcı birleşim</h4>
    <p><em>istanbulmutfak.com</em> gibi hizmet + konum birleşimleri yerel SEO'da işe yarar. Çok uzun olmamasına dikkat edin.</p>
  </div>
  <div class="blog-type-card">
    <h4>Yaratıcı kelime türetme</h4>
    <p>Spotify, Google gibi özgün isimler güçlüdür ancak marka bilinirliği için daha fazla yatırım gerektirir.</p>
  </div>
  <div class="blog-type-card">
    <h4>Kısaltma ve akronim</h4>
    <p>Uzun şirket adları için kısaltma kullanılabilir. Telaffuz ve yazım netliği korunmalıdır.</p>
  </div>
</div>

<h2>.com mu, .com.tr mi?</h2>
<p>Hedef kitlenize göre uzantı seçimi değişir:</p>
<ul>
<li><strong>Global veya uluslararası müşteri:</strong> <code>.com</code> öncelikli tercih.</li>
<li><strong>Türkiye odaklı işletme:</strong> <code>.com.tr</code> yerel güven ve resmi algı sağlar.</li>
<li><strong>Her ikisi de mümkünse:</strong> Ana site bir uzantıda, diğerini yönlendirme (redirect) ile koruyun.</li>
</ul>

<h2>Popüler Domain Uzantıları</h2>
<p class="blog-section-lead">Markanıza ve hedef kitlenize göre aşağıdaki uzantılardan birini tercih edebilirsiniz:</p>
${BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER}

<h2>Müsaitlik ve Marka Koruması</h2>
<ol class="blog-steps">
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>İsim listesi oluşturun</strong> 5–10 alternatif yazın; birincil tercih doluysa hemen ikinciye geçin.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Müsaitliği sorgulayın</strong> Registrar panelinden veya <a href="https://www.ixirhost.com/" target="_blank" rel="noopener noreferrer">ixirhost</a> üzerinden kontrol edin.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Sosyal medyayı kontrol edin</strong> Aynı kullanıcı adının Instagram, LinkedIn ve X'te boş olup olmadığına bakın.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Marka tescilini planlayın</strong> Domain ile marka adınızın örtüşmesi ileride hukuki sorunları önler.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>İlgili uzantıları koruyun</strong> Bütçe elveriyorsa .com, .com.tr ve .net gibi varyasyonları da kaydedin.</span></div></li>
</ol>

<div class="blog-callout">
  <p class="blog-callout-title">Pratik ipucu</p>
  <p>Domain satın almadan önce birkaok kişiye ismi söyleyip doğru yazıp yazamadıklarını test edin. Yazım hatası yapan her kişi, potansiyel müşteri kaybı demektir.</p>
</div>

<h2>SEO ve Domain İlişkisi</h2>
<p>Google doğrudan domain adına göre sıralama yapmaz; ancak anahtar kelime içeren domainler (exact match) geçmişte avantaj sağlasa da bugün marka güveni ve içerik kalitesi daha belirleyicidir. Aşırı uzun, tireli veya spam görünümlü domainlerden kaçının. HTTPS, hızlı yükleme ve kaliteli içerik SEO'da asıl farkı yaratır.</p>

<h2>Sık Yapılan Hatalar</h2>
<ul>
<li>Trend kelimelerle geçici isim seçmek; birkaç yıl sonra modası geçer</li>
<li>Rakip markaya çok benzer isim kullanmak; hukuki risk oluşturur</li>
<li>Otomatik yenilemeyi kapatmak; domain süresi dolunca site erişilemez olur</li>
<li>Sadece fiyata bakarak güvenilir olmayan registrar seçmek</li>
<li>Whois gizliliğini ve DNS yönetim erişimini ihmal etmek</li>
</ul>

<h2>Domain Seçtikten Sonra</h2>
<p>Domain hazır olduğunda bir sonraki adım hosting veya Vercel gibi bir platforma yönlendirmedir. DNS, SSL ve yayın süreci için <a href="/blog/domain-hosting">Domain & Hosting</a> yazımıza göz atabilirsiniz. Veltstack projelerinde domain tescil ve DNS yapılandırması konusunda yönlendirme desteği sunuyoruz.</p>

<h2>Sonuç</h2>
<p>Doğru domain; kısa, telaffuzu kolay, markanızla uyumlu ve hedef kitlenize hitap eden bir adrestir. Uzantı seçiminde global mi yerel mi olduğunuzu netleştirin, müsaitliği kontrol edin ve marka korumasını erken planlayın. Domain seçiminde veya kurulumda destek isterseniz bizimle iletişime geçin.</p>
`,
    en: `
<p>Your domain name is your brand's digital storefront. First impressions, click-through rates in search results and customer trust depend heavily on this address. Choosing the right domain starts with a short, memorable name that fits your audience. This guide covers naming rules, extension choices and mistakes to avoid.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">.com</span><span class="blog-stat-label">Global trust standard</span></div>
  <div class="blog-stat"><span class="blog-stat-value">Short</span><span class="blog-stat-label">Memorable name</span></div>
  <div class="blog-stat"><span class="blog-stat-value">Brand</span><span class="blog-stat-label">Consistent identity</span></div>
</div>

<h2>Why Domain Choice Matters</h2>
<p>A domain is not just a web address; it is part of your brand identity alongside email, social profiles and print materials. A poor choice leads to pronunciation issues, typos and SEO loss. A strong domain lowers marketing cost over time.</p>

<h2>Traits of a Good Domain Name</h2>
<ul class="blog-checklist">
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Short and clear:</strong> Ideally 6–14 characters; readable and writable at a glance.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Easy to say:</strong> Someone on a phone call should spell it correctly.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Brand-aligned:</strong> Match your company or product name; avoid alternate spellings.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>No hyphens or numbers:</strong> <em>brand-site.com</em> or <em>brand2024.com</em> are harder to remember.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Legally clean:</strong> Should not resemble registered trademarks or competitors.</span></div></li>
</ul>

<h2>Naming Strategies</h2>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>Direct brand name</h4>
    <p>The strongest option. If your brand is <em>Acme</em>, <em>acme.com</em> is ideal. If taken, consider alternate extensions or slight variations.</p>
  </div>
  <div class="blog-type-card">
    <h4>Descriptive combination</h4>
    <p>Combinations like <em>istanbulkitchen.com</em> work for local SEO. Keep them from getting too long.</p>
  </div>
  <div class="blog-type-card">
    <h4>Coined words</h4>
    <p>Unique names like Spotify or Google are powerful but need more investment in brand awareness.</p>
  </div>
  <div class="blog-type-card">
    <h4>Abbreviations</h4>
    <p>Long company names can use acronyms. Pronunciation and spelling must stay clear.</p>
  </div>
</div>

<h2>.com or .com.tr?</h2>
<p>Extension choice depends on your audience:</p>
<ul>
<li><strong>Global or international clients:</strong> prioritize <code>.com</code>.</li>
<li><strong>Turkey-focused business:</strong> <code>.com.tr</code> adds local trust and recognition.</li>
<li><strong>When both are possible:</strong> run the main site on one extension and redirect the other.</li>
</ul>

<h2>Popular Domain Extensions</h2>
<p class="blog-section-lead">Pick an extension that matches your brand and target audience:</p>
${BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER}

<h2>Availability and Brand Protection</h2>
<ol class="blog-steps">
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Build a shortlist</strong> Write 5–10 alternatives; move to the next if your first choice is taken.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Check availability</strong> Use a registrar panel or <a href="https://www.ixirhost.com/" target="_blank" rel="noopener noreferrer">ixirhost</a>.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Check social handles</strong> See if the same username is free on Instagram, LinkedIn and X.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Plan trademark registration</strong> Aligning domain and brand name prevents legal issues later.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Protect related extensions</strong> If budget allows, register .com, .com.tr and .net variants.</span></div></li>
</ol>

<div class="blog-callout">
  <p class="blog-callout-title">Practical tip</p>
  <p>Before buying, say the name to a few people and ask them to write it. Every typo is a potential lost visitor.</p>
</div>

<h2>SEO and Domain Names</h2>
<p>Google does not rank sites purely by domain name; keyword-heavy exact-match domains matter less today than brand trust and content quality. Avoid overly long, hyphenated or spammy-looking names. HTTPS, fast load times and strong content drive SEO results.</p>

<h2>Common Mistakes</h2>
<ul>
<li>Picking trendy buzzwords that age poorly within a few years</li>
<li>Using a name too similar to a competitor; legal risk</li>
<li>Disabling auto-renewal; the site goes offline when the domain expires</li>
<li>Choosing an unreliable registrar based on price alone</li>
<li>Ignoring WHOIS privacy and DNS management access</li>
</ul>

<h2>After You Choose a Domain</h2>
<p>Once your domain is ready, the next step is pointing it to hosting or a platform like Vercel. See our <a href="/blog/domain-hosting">Domain & Hosting</a> article for DNS, SSL and launch steps. Veltstack projects include guidance on domain registration and DNS configuration.</p>

<h2>Conclusion</h2>
<p>The right domain is short, easy to say, aligned with your brand and suited to your audience. Clarify whether you are global or local, check availability early and plan brand protection. Contact us if you need help choosing or setting up your domain.</p>
`,
  },
};
