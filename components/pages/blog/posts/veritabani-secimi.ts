import type { BlogPostEntry } from "./types";

export const blogPostEntry: BlogPostEntry = {
  slug: "veritabani-secimi",
  titleTr: "Veritabanı Seçimi",
  titleEn: "Choosing a Database",
  excerptTr:
    "SQL ve NoSQL farkını, MySQL, PostgreSQL ve MongoDB karşılaştırmasını ve projenize uygun veritabanını seçerken dikkat edilecek kriterleri ele alıyoruz.",
  excerptEn:
    "We compare SQL vs NoSQL, MySQL, PostgreSQL and MongoDB, and the criteria for picking the right database for your project.",
  category: "Web Geliştirme",
  categoryEn: "Web Development",
  imageUrl: "/images/blog/veritabani-secimi.png",
  readingTime: 10,
  publishedAt: "2026-06-23",
  featured: true,
  content: {
    tr: `
<p>Yeni bir web veya mobil projeye başlarken alınan en kritik teknik kararlardan biri <strong>veritabanı seçimi</strong>dir. Yanlış tercih; performans sorunları, maliyet artışı ve ileride zor migration süreçlerine yol açabilir. Bu yazıda SQL ve NoSQL modellerini, popüler veritabanlarını ve proje ihtiyacına göre nasıl karar vereceğinizi anlatıyoruz.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">SQL</span><span class="blog-stat-label">İlişkisel veri</span></div>
  <div class="blog-stat"><span class="blog-stat-value">NoSQL</span><span class="blog-stat-label">Esnek şema</span></div>
  <div class="blog-stat"><span class="blog-stat-value">Prisma</span><span class="blog-stat-label">Type-safe ORM</span></div>
</div>

<h2>Veritabanı Nedir, Neden Önemlidir?</h2>
<p>Veritabanı; kullanıcı kayıtları, siparişler, blog içerikleri ve ayarlar gibi uygulama verilerinin kalıcı olarak saklandığı sistemdir. Doğru seçim; veri bütünlüğü, sorgu hızı, ölçeklenebilirlik ve geliştirici verimliliğini doğrudan etkiler.</p>

<h2>SQL ve NoSQL: Temel Fark</h2>
<div class="blog-table-wrap blog-table-compare">
<table>
<colgroup>
  <col class="blog-table-compare-col-feature" />
  <col class="blog-table-compare-col-domain" />
  <col class="blog-table-compare-col-hosting" />
</colgroup>
<thead><tr><th>Özellik</th><th>SQL (İlişkisel)</th><th>NoSQL</th></tr></thead>
<tbody>
<tr><td>Veri modeli</td><td>Tablolar, satırlar, ilişkiler</td><td>Doküman, key-value, graph vb.</td></tr>
<tr><td>Şema</td><td>Sabit, önceden tanımlı</td><td>Esnek, değişken</td></tr>
<tr><td>JOIN / ilişki</td><td>Güçlü, native destek</td><td>Uygulama katmanında veya sınırlı</td></tr>
<tr><td>ACID uyumu</td><td>Genelde güçlü</td><td>Modele göre değişir</td></tr>
<tr><td>Tipik kullanım</td><td>E-ticaret, finans, CRM</td><td>Log, içerik, hızlı prototip</td></tr>
</tbody>
</table>
</div>

<h2>Popüler Veritabanları</h2>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>MySQL</h4>
    <p>Yıllardır yaygın kullanılan açık kaynaklı SQL veritabanı. Paylaşımlı hosting ve kurumsal projelerde güvenilir seçenek. Veltstack projelerinde sıklıkla Prisma ORM ile birlikte tercih ediyoruz.</p>
  </div>
  <div class="blog-type-card">
    <h4>PostgreSQL</h4>
    <p>Gelişmiş SQL özellikleri, JSON desteği ve güçlü veri bütünlüğü sunar. Karmaşık sorgular ve analitik ihtiyaçlar için idealdir. Supabase, Neon gibi managed servislerle kolay entegre olur.</p>
  </div>
  <div class="blog-type-card">
    <h4>MongoDB</h4>
    <p>Doküman tabanlı NoSQL veritabanı. Hızlı geliştirme, esnek şema ve içerik ağırlıklı uygulamalarda avantajlıdır. E-ticaret katalogları ve dinamik form yapılarında kullanılabilir.</p>
  </div>
  <div class="blog-type-card">
    <h4>Managed servisler</h4>
    <p>Neon, PlanetScale, Railway, Supabase gibi platformlar yedekleme, ölçekleme ve connection pooling'i yönetir. Serverless deploy (Vercel) ile birlikte düşünülmelidir.</p>
  </div>
</div>

<h2>MySQL vs PostgreSQL vs MongoDB</h2>
<div class="blog-table-wrap">
<table>
<thead><tr><th>Veritabanı</th><th>Güçlü yön</th><th>Zayıf yön</th><th>Ne zaman?</th></tr></thead>
<tbody>
<tr><td>MySQL</td><td>Basit kurulum, geniş hosting desteği</td><td>İleri düzey analitikte PostgreSQL kadar esnek değil</td><td>Kurumsal site, admin panel, standart CRUD</td></tr>
<tr><td>PostgreSQL</td><td>Güçlü SQL, JSON, extension ekosistemi</td><td>MySQL'e göre biraz daha karmaşık ops</td><td>SaaS, raporlama, çok ilişkili veri</td></tr>
<tr><td>MongoDB</td><td>Esnek şema, hızlı iterasyon</td><td>Karmaşık ilişkilerde ekstra tasarım gerekir</td><td>Prototip, içerik, katalog, log</td></tr>
</tbody>
</table>
</div>

<h2>Seçim Kriterleri</h2>
<ul>
<li><strong>Veri yapısı:</strong> Sipariş–ürün–kullanıcı gibi net ilişkiler varsa SQL genelde daha doğrudur.</li>
<li><strong>Ölçek beklentisi:</strong> Başlangıçta küçük, ileride büyüyecek projelerde managed servis ve connection pooling planlayın.</li>
<li><strong>Deploy ortamı:</strong> Vercel gibi serverless platformlarda kalıcı bağlantı limitleri kritiktir; pooler kullanın.</li>
<li><strong>Ekip deneyimi:</strong> Ekibin bildiği teknoloji, bakım maliyetini düşürür.</li>
<li><strong>Maliyet:</strong> Ücretsiz tier limitleri, storage ve egress ücretlerini karşılaştırın.</li>
</ul>

<div class="blog-callout">
  <p class="blog-callout-title">Pratik ipucu</p>
  <p>Next.js projelerinde Prisma ORM kullanmak veritabanı sağlayıcısı değişse bile migration ve type-safe sorguları kolaylaştırır. MySQL'den PostgreSQL'e geçiş planlıyorsanız şemayı baştan modüler tasarlayın.</p>
</div>

<h2>Serverless ve Veritabanı</h2>
<p>Vercel üzerinde çalışan Next.js uygulamalarında her istek kısa ömürlü bir fonksiyon olarak açılır. Geleneksel "her istekte yeni DB connection" modeli connection limitlerini hızla doldurur. Çözüm:</p>
<ul>
<li>Neon veya Supabase gibi serverless-friendly PostgreSQL</li>
<li>PlanetScale (MySQL uyumlu, branching desteği)</li>
<li>Prisma Accelerate veya harici connection pooler</li>
<li>Mümkünse Railway gibi always-on backend ile API katmanı</li>
</ul>

<h2>Sık Yapılan Hatalar</h2>
<ul>
<li>Prototipte MongoDB seçip sonra ilişkisel ihtiyaçlarla SQL'e zorla migration yapmak</li>
<li>Production'da connection pool yapılandırmadan serverless deploy etmek</li>
<li>Yedekleme ve disaster recovery planını sonraya bırakmak</li>
<li>Index planlamadan büyük tablolarda sorgu çalıştırmak</li>
<li>ORM kullanıp N+1 sorgu problemini göz ardı etmek</li>
</ul>

<h2>Veltstack'te Veritabanı Yaklaşımımız</h2>
<p>Projelerimizde ihtiyaca göre MySQL, PostgreSQL veya MongoDB kullanıyor; Prisma ORM ile şema yönetimi, migration ve type-safe erişim sağlıyoruz. IQfinansAI ve kurumsal katalog projelerinde MySQL; e-ticaret ve içerik ağırlıklı işlerde MongoDB tercih ettik. Doğru veritabanı seçimi projenin ilk gününden itibaren mimari kararın parçasıdır.</p>

<h2>Sonuç</h2>
<p>Tek bir "en iyi veritabanı" yoktur; projenin veri modeli, trafik beklentisi ve deploy ortamına göre karar verilmelidir. Çoğu kurumsal web uygulaması için MySQL veya PostgreSQL güvenli bir başlangıçtır; esnek içerik ve hızlı iterasyon gerekiyorsa MongoDB değerlendirilebilir. Projeniz için mimari danışmanlık isterseniz bizimle iletişime geçin.</p>
`,
    en: `
<p>One of the most critical technical decisions when starting a web or mobile project is <strong>choosing a database</strong>. The wrong choice leads to performance issues, rising costs and painful migrations later. This guide covers SQL vs NoSQL, popular databases and how to decide for your project.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">SQL</span><span class="blog-stat-label">Relational data</span></div>
  <div class="blog-stat"><span class="blog-stat-value">NoSQL</span><span class="blog-stat-label">Flexible schema</span></div>
  <div class="blog-stat"><span class="blog-stat-value">Prisma</span><span class="blog-stat-label">Type-safe ORM</span></div>
</div>

<h2>What Is a Database and Why Does It Matter?</h2>
<p>A database is where application data lives permanently: users, orders, blog content, settings and more. The right choice directly affects data integrity, query speed, scalability and developer productivity.</p>

<h2>SQL vs NoSQL: Core Difference</h2>
<div class="blog-table-wrap blog-table-compare">
<table>
<colgroup>
  <col class="blog-table-compare-col-feature" />
  <col class="blog-table-compare-col-domain" />
  <col class="blog-table-compare-col-hosting" />
</colgroup>
<thead><tr><th>Feature</th><th>SQL (Relational)</th><th>NoSQL</th></tr></thead>
<tbody>
<tr><td>Data model</td><td>Tables, rows, relations</td><td>Document, key-value, graph, etc.</td></tr>
<tr><td>Schema</td><td>Fixed, predefined</td><td>Flexible, variable</td></tr>
<tr><td>JOIN / relations</td><td>Strong, native support</td><td>In app layer or limited</td></tr>
<tr><td>ACID</td><td>Generally strong</td><td>Varies by model</td></tr>
<tr><td>Typical use</td><td>E-commerce, finance, CRM</td><td>Logs, content, rapid prototypes</td></tr>
</tbody>
</table>
</div>

<h2>Popular Databases</h2>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>MySQL</h4>
    <p>Long-standing open-source SQL database. Reliable for shared hosting and corporate projects. We often pair it with Prisma ORM in Veltstack projects.</p>
  </div>
  <div class="blog-type-card">
    <h4>PostgreSQL</h4>
    <p>Advanced SQL features, JSON support and strong data integrity. Ideal for complex queries and analytics. Integrates easily with managed services like Supabase and Neon.</p>
  </div>
  <div class="blog-type-card">
    <h4>MongoDB</h4>
    <p>Document-based NoSQL. Strong for fast development, flexible schema and content-heavy apps. Used for e-commerce catalogs and dynamic form structures.</p>
  </div>
  <div class="blog-type-card">
    <h4>Managed services</h4>
    <p>Platforms like Neon, PlanetScale, Railway and Supabase handle backups, scaling and connection pooling. Must be considered with serverless deploys (Vercel).</p>
  </div>
</div>

<h2>MySQL vs PostgreSQL vs MongoDB</h2>
<div class="blog-table-wrap">
<table>
<thead><tr><th>Database</th><th>Strength</th><th>Weakness</th><th>When?</th></tr></thead>
<tbody>
<tr><td>MySQL</td><td>Simple setup, wide hosting support</td><td>Less flexible than PostgreSQL for advanced analytics</td><td>Corporate sites, admin panels, standard CRUD</td></tr>
<tr><td>PostgreSQL</td><td>Powerful SQL, JSON, extension ecosystem</td><td>Slightly more complex ops than MySQL</td><td>SaaS, reporting, highly relational data</td></tr>
<tr><td>MongoDB</td><td>Flexible schema, fast iteration</td><td>Complex relations need extra design</td><td>Prototypes, content, catalogs, logs</td></tr>
</tbody>
</table>
</div>

<h2>Selection Criteria</h2>
<ul>
<li><strong>Data shape:</strong> Clear relations like order–product–user usually favor SQL.</li>
<li><strong>Scale expectations:</strong> Plan managed services and pooling if you start small but expect growth.</li>
<li><strong>Deploy environment:</strong> Connection limits matter on serverless platforms like Vercel; use a pooler.</li>
<li><strong>Team experience:</strong> What the team knows reduces maintenance cost.</li>
<li><strong>Cost:</strong> Compare free tier limits, storage and egress fees.</li>
</ul>

<div class="blog-callout">
  <p class="blog-callout-title">Practical tip</p>
  <p>Using Prisma ORM in Next.js projects simplifies migrations and type-safe queries even if the provider changes. If you might move from MySQL to PostgreSQL, design the schema modularly from day one.</p>
</div>

<h2>Serverless and Databases</h2>
<p>Next.js apps on Vercel run each request as a short-lived function. Opening a new DB connection per request quickly hits connection limits. Solutions:</p>
<ul>
<li>Serverless-friendly PostgreSQL (Neon, Supabase)</li>
<li>PlanetScale (MySQL-compatible, branching support)</li>
<li>Prisma Accelerate or an external connection pooler</li>
<li>Always-on backend on Railway or similar when needed</li>
</ul>

<h2>Common Mistakes</h2>
<ul>
<li>Picking MongoDB for a prototype then forcing a painful SQL migration for relational needs</li>
<li>Serverless deploy without connection pooling in production</li>
<li>Deferring backup and disaster recovery planning</li>
<li>Running queries on large tables without index planning</li>
<li>Ignoring N+1 query problems when using an ORM</li>
</ul>

<h2>How We Approach Databases at Veltstack</h2>
<p>We use MySQL, PostgreSQL or MongoDB depending on the project, with Prisma ORM for schema management, migrations and type-safe access. MySQL for IQfinansAI and corporate catalogs; MongoDB for e-commerce and content-heavy work. Choosing the right database is an architectural decision from day one.</p>

<h2>Conclusion</h2>
<p>There is no single "best database"; the choice depends on data model, traffic expectations and deploy environment. MySQL or PostgreSQL is a safe start for most corporate web apps; MongoDB fits flexible content and fast iteration. Contact us if you need architecture guidance for your project.</p>
`,
  },
};
