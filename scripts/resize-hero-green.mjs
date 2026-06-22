import fs from "fs";
import path from "path";
import sharp from "sharp";

const assets = "C:/Users/omerh/.cursor/projects/d-Projects-veltstack/assets";
const outDir = path.join(process.cwd(), "public/images/hero");

const jobs = [
 {
  src: "mobile.png",
  dest: "mobile.png",
  width: 1792,
  height: 2400,
 },
 {
  src: "tablet.png",
  dest: "tablet.png",
  width: 2752,
  height: 1536,
 },
 {
  src: "desktop.png",
  dest: "desktop.png",
  width: 2752,
  height: 1536,
 },
 {
  src: "wide.png",
  dest: "wide.png",
  width: 3168,
  height: 1344,
 },
];

fs.mkdirSync(outDir, { recursive: true });

for (const job of jobs) {
 const input = path.join(assets, job.src);
 const output = path.join(outDir, job.dest);

 await sharp(input)
  .resize(job.width, job.height, {
   fit: "cover",
   position: "centre",
  })
  .png({ compressionLevel: 9 })
  .toFile(output);

 console.log(`wrote ${job.dest} (${job.width}x${job.height})`);
}

console.log("done");