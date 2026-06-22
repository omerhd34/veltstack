import sharp from "sharp";
import { join } from "path";
import { rename } from "fs/promises";

const HERO_DIR = "public/images/hero";
const FILES = [
 "desktop.blue.png",
 "mobile.blue.png",
 "tablet.blue.png",
 "wide.blue.png",
];

const CONFIG = {
 "desktop.blue.png": { patchW: 68, patchH: 68, cloneShiftX: 110 },
 "mobile.blue.png": { patchW: 52, patchH: 52, cloneShiftX: 130 },
 "tablet.blue.png": { patchW: 68, patchH: 68, cloneShiftX: 110 },
 "wide.blue.png": { patchW: 72, patchH: 72, cloneShiftX: 120 },
};

async function removeWatermark(filename) {
 const inputPath = join(HERO_DIR, filename);
 const { patchW, patchH, cloneShiftX } = CONFIG[filename];
 const meta = await sharp(inputPath).metadata();
 const width = meta.width;
 const height = meta.height;

 const left = width - patchW;
 const top = height - patchH;
 const sourceLeft = left - cloneShiftX;

 const patch = await sharp(inputPath)
  .extract({ left: sourceLeft, top, width: patchW, height: patchH })
  .toBuffer();

 const tempPath = `${inputPath}.tmp`;
 await sharp(inputPath)
  .composite([{ input: patch, left, top }])
  .png()
  .toFile(tempPath);
 await rename(tempPath, inputPath);

 console.log(`Updated ${filename} (${width}x${height})`);
}

for (const file of FILES) {
 await removeWatermark(file);
}
