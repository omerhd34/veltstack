import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "../components/pages/blog");
const articlesPath = path.join(root, "blog-articles.ts");
const dataPath = path.join(root, "blog-data.ts");
const postsDir = path.join(root, "posts");

const articlesFile = fs.readFileSync(articlesPath, "utf8");
const dataFile = fs.readFileSync(dataPath, "utf8");
const lines = articlesFile.split(/\r?\n/);

const slugLineRegex = /^  "([a-z0-9-]+)": \{$/;
const articleStarts = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(slugLineRegex);
  if (m) articleStarts.push({ slug: m[1], line: i });
}

function extractArticleBlock(startLine) {
  let i = startLine + 1;
  if (!lines[i].trim().startsWith("tr:")) {
    throw new Error(`no tr at ${i + 1}`);
  }
  i++;
  const trLines = [];
  while (i < lines.length) {
    if (lines[i].trim() === "`,") {
      i++;
      break;
    }
    trLines.push(lines[i]);
    i++;
  }
  if (!lines[i].trim().startsWith("en:")) {
    throw new Error(`no en at ${i + 1}`);
  }
  i++;
  const enLines = [];
  while (i < lines.length) {
    if (lines[i].trim() === "`,") {
      i++;
      break;
    }
    enLines.push(lines[i]);
    i++;
  }
  return { tr: trLines.join("\n"), en: enLines.join("\n") };
}

const articles = {};
for (const { slug, line } of articleStarts) {
  articles[slug] = extractArticleBlock(line);
}

const slugOrder = [];
const metaBySlug = {};
const postBlockRegex = /\{\s*slug: "([^"]+)",[\s\S]*?\n  \},/g;
let match;
while ((match = postBlockRegex.exec(dataFile)) !== null) {
  const block = match[0];
  const slug = match[1];
  slugOrder.push(slug);

  const get = (key) => {
    const multiline = block.match(
      new RegExp(`${key}:\\s*\\n\\s*"([\\s\\S]*?)",`),
    );
    if (multiline) return multiline[1];
    const single = block.match(new RegExp(`${key}: "([^"]*)"`));
    if (single) return single[1];
    const other = block.match(new RegExp(`${key}: (true|false|\\d+)`));
    return other ? other[1] : undefined;
  };

  metaBySlug[slug] = {
    slug,
    titleTr: get("titleTr"),
    titleEn: get("titleEn"),
    excerptTr: get("excerptTr"),
    excerptEn: get("excerptEn"),
    category: get("category"),
    categoryEn: get("categoryEn"),
    imageUrl: get("imageUrl"),
    readingTime: Number(get("readingTime")),
    publishedAt: get("publishedAt"),
    featured: get("featured") === "true" ? true : undefined,
  };
}

function neededImports(content) {
  const imports = [];
  if (content.includes("BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER")) {
    imports.push(
      'import { BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER } from "@/components/pages/blog-detail/domain-extensions-data";',
    );
  }
  if (content.includes("BLOG_FREELANCER_PLATFORMS_PLACEHOLDER")) {
    imports.push(
      'import { BLOG_FREELANCER_PLATFORMS_PLACEHOLDER } from "@/components/pages/blog-detail/freelancer-platforms-data";',
    );
  }
  return imports;
}

function escapeTsString(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

fs.mkdirSync(postsDir, { recursive: true });

for (const slug of slugOrder) {
  const meta = metaBySlug[slug];
  const article = articles[slug];

  const contentBlock = article
    ? `\n  content: {\n    tr: \`\n${article.tr}\n\`,\n    en: \`\n${article.en}\n\`,\n  },`
    : "";

  const imports = article
    ? [
        ...new Set([
          ...neededImports(article.tr),
          ...neededImports(article.en),
        ]),
      ].join("\n")
    : "";

  const featuredLine = meta.featured ? "\n  featured: true," : "";

  const fileContent = `${imports ? `${imports}\n` : ""}import type { BlogPostEntry } from "./types";

export const blogPostEntry: BlogPostEntry = {
  slug: "${meta.slug}",
  titleTr: "${escapeTsString(meta.titleTr)}",
  titleEn: "${escapeTsString(meta.titleEn)}",
  excerptTr:
    "${escapeTsString(meta.excerptTr)}",
  excerptEn:
    "${escapeTsString(meta.excerptEn)}",
  category: "${escapeTsString(meta.category)}",
  categoryEn: "${escapeTsString(meta.categoryEn)}",
  imageUrl: "${meta.imageUrl}",
  readingTime: ${meta.readingTime},
  publishedAt: "${meta.publishedAt}",${featuredLine}${contentBlock}
};
`;

  fs.writeFileSync(path.join(postsDir, `${slug}.ts`), fileContent, "utf8");
  console.log("wrote", slug, article ? "with content" : "meta only");
}

console.log("done:", slugOrder.length, "posts,", Object.keys(articles).length, "articles");
