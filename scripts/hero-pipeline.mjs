import fs from "fs";
import path from "path";
import sharp from "sharp";

const heroDir = path.join(process.cwd(), "public/images/hero");
const mastersDir = path.join(process.cwd(), "scripts/hero-masters");

const LANDSCAPE_MASTER = path.join(mastersDir, "landscape.png");
const PORTRAIT_MASTER = path.join(mastersDir, "portrait.png");

/** Unified green grade — same curve on every hero asset */
function grade(buffer) {
  return sharp(buffer)
    .gamma(1.04)
    .modulate({ brightness: 0.96, saturation: 1.1 })
    .linear(1.03, -4)
    .png({ compressionLevel: 6, quality: 100 });
}

const masters = [
  {
    file: "tablet.png",
    input: LANDSCAPE_MASTER,
    width: 2752,
    height: 1536,
    position: "centre",
  },
  {
    file: "mobile.png",
    input: PORTRAIT_MASTER,
    width: 1792,
    height: 2400,
    position: "centre",
  },
];

const variants = [
  {
    file: "mobile-sm.png",
    width: 1080,
    height: 1920,
    source: "mobile.png",
    position: "centre",
  },
  {
    file: "mobile-md.png",
    width: 1200,
    height: 1600,
    source: "mobile.png",
    position: "centre",
  },
  {
    file: "tablet-portrait.png",
    width: 1120,
    height: 1280,
    source: "mobile.png",
    position: "top",
  },
  {
    file: "tablet-landscape.png",
    width: 1600,
    height: 1280,
    source: "tablet.png",
    position: "centre",
  },
  {
    file: "laptop.png",
    width: 1920,
    height: 1200,
    source: "tablet.png",
    position: "centre",
  },
  {
    file: "desktop.png",
    width: 2560,
    height: 1440,
    source: "tablet.png",
    position: "centre",
  },
  {
    file: "wide.png",
    width: 2880,
    height: 1234,
    source: "tablet.png",
    position: "centre",
  },
  {
    file: "ultrawide.png",
    width: 3840,
    height: 1440,
    source: "tablet.png",
    position: "centre",
  },
];

fs.mkdirSync(heroDir, { recursive: true });

for (const master of masters) {
  if (!fs.existsSync(master.input)) {
    throw new Error(`Missing master: ${master.input}`);
  }

  const buffer = await sharp(master.input)
    .resize(master.width, master.height, {
      fit: "cover",
      position: master.position,
    })
    .toBuffer();

  await grade(buffer).toFile(path.join(heroDir, master.file));
  console.log(`master ${master.file} (${master.width}x${master.height})`);
}

for (const variant of variants) {
  const input = path.join(heroDir, variant.source);
  const output = path.join(heroDir, variant.file);

  const buffer = await sharp(input)
    .resize(variant.width, variant.height, {
      fit: "cover",
      position: variant.position,
    })
    .toBuffer();

  await grade(buffer).toFile(output);
  console.log(`variant ${variant.file} (${variant.width}x${variant.height})`);
}

console.log("done: hero pipeline");
