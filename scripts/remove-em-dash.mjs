import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");

function walk(dir, acc = []) {
 for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
  if (ent.name === "node_modules" || ent.name === ".next" || ent.name === ".git") continue;
  const p = path.join(dir, ent.name);
  if (ent.isDirectory()) walk(p, acc);
  else if (/\.(ts|tsx)$/.test(ent.name)) acc.push(p);
 }
 return acc;
}

const files = walk(root).filter((f) => fs.readFileSync(f, "utf8").includes("—"));

function transform(content) {
 let s = content;
 s = s.replace(/(\{\/\*[^*]*?) — /g, "$1: ");
 s = s.replace(/\(([^)]*?) — ([^)]*?)\)/g, "($1, $2)");
 s = s.replace(/ — /g, ", ");
 s = s.replace(/—/g, ", ");
 s = s.replace(/, ,/g, ",");
 return s;
}

for (const file of files) {
 const orig = fs.readFileSync(file, "utf8");
 const next = transform(orig);
 if (next !== orig) {
  fs.writeFileSync(file, next);
  console.log("updated:", path.relative(root, file));
 }
}

console.log("done, files:", files.length);
