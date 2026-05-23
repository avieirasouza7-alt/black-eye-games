import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "public", "images");

const jobs = [
  { in: "logo-mark.png", out: "logo-mark.webp", w: 144, q: 85 },
  { in: "illuminati-control-cover.png", out: "illuminati-control-cover.webp", w: 960, q: 82 },
  { in: "illuminati-control-screens.png", out: "illuminati-control-screens.webp", w: 1200, q: 82 },
];

mkdirSync(dir, { recursive: true });

for (const { in: input, out, w, q } of jobs) {
  const src = join(dir, input);
  const dest = join(dir, out);
  await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: q }).toFile(dest);
  const { size } = await import("node:fs").then((fs) => fs.promises.stat(dest));
  console.log(`${out} — ${Math.round(size / 1024)} KB`);
}

console.log("Imagens otimizadas.");
