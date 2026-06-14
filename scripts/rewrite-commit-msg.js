#!/usr/bin/env node
"use strict";

const fs = require("fs");

const msg = fs.readFileSync(0, "utf8").trim();

const special = {
  "Initial commit from Create Next App": "Next.js projesi oluşturuldu",
  "chore: rename project to veltstack": "Proje adı veltstack olarak değiştirildi",
  "chore: add shadcn components config": "Shadcn bileşen yapılandırması eklendi",
  "chore: stop tracking AGENTS.md, CLAUDE.md and hero.mp4":
    "AGENTS.md, CLAUDE.md ve hero.mp4 takibi kaldırıldı",
  "config: update Next.js configuration": "Next.js yapılandırması güncellendi",
  "style: update global styles": "Global stiller güncellendi",
  "docs: update AGENTS.md": "AGENTS.md güncellendi",
  "feat: update root layout with Veltstack metadata":
    "Kök layout Veltstack meta verileriyle güncellendi",
  "feat: add i18n middleware": "i18n middleware eklendi",
  "feat: add i18n configuration": "i18n yapılandırması eklendi",
  "feat: add Prisma database schema": "Prisma veritabanı şeması eklendi",
  "feat: add database seed script": "Veritabanı seed scripti eklendi",
  "feat: add web app manifest": "Web app manifest eklendi",
  "feat: add Open Graph image generator": "Open Graph görsel oluşturucu eklendi",
  "feat: add robots.txt generator": "robots.txt oluşturucu eklendi",
  "feat: add sitemap generator": "Sitemap oluşturucu eklendi",
};

function translate(message) {
  if (special[message]) return special[message];

  let match;

  match = message.match(/^chore: update (.+)$/);
  if (match) return `${match[1]} güncellendi`;

  match = message.match(/^refactor: remove (.+)$/);
  if (match) return `${match[1]} kaldırıldı`;

  match = message.match(/^feat\(i18n\): add global messages - (.+)$/);
  if (match) return `Global mesajlar ${match[1]} eklendi`;

  match = message.match(/^feat: add type definition (.+)$/);
  if (match) return `${match[1]} tip tanımı eklendi`;

  match = message.match(/^feat: add hook (.+)$/);
  if (match) return `${match[1]} hook eklendi`;

  match = message.match(/^feat(?:\([^)]+\))?: add (.+)$/);
  if (match) return `${match[1]} eklendi`;

  match = message.match(/^assets: add (.+)$/);
  if (match) return `${match[1]} eklendi`;

  return message;
}

process.stdout.write(translate(msg));
