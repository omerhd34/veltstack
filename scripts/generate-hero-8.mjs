import fs from "fs";
import path from "path";
import sharp from "sharp";

const heroDir = path.join(process.cwd(), "public/images/hero");

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

for (const variant of variants) {
 const input = path.join(heroDir, variant.source);
 const output = path.join(heroDir, variant.file);

 if (!fs.existsSync(input)) {
  throw new Error(`Missing source: ${input}`);
 }

 const buffer = await sharp(input)
  .resize(variant.width, variant.height, {
   fit: "cover",
   position: variant.position,
  })
  .png({ compressionLevel: 9 })
  .toBuffer();

 await sharp(buffer).toFile(output);

 console.log(
  `wrote ${variant.file} (${variant.width}x${variant.height}) from ${variant.source}`,
 );
}

console.log("done: 8 hero variants");
