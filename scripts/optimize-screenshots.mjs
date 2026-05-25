import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir =
  "C:/Users/i5/.cursor/projects/c-Users-i5-Desktop-ad-verify-hub-main/assets";
const outDir = join(root, "public", "images", "screenshots");
const coverOut = join(root, "public", "images", "illuminati-control-cover.webp");

const sources = [
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-04-19_at_17.27.29__3_-6f7997dd-92b6-44b6-aebf-3cab9434d967.png",
    out: "01-splash.webp",
    alt: "Tela inicial — Protocolo Oculto",
    cover: true,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-04-19_at_17.27.29__2_-ec75e2ff-cecf-46fe-9a9e-0f8248b56fe0.png",
    out: "02-redes.webp",
    alt: "Redes e influência global",
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-04-19_at_17.27.30__3_-5c4b4b83-63ab-48fe-8e34-e025398f1bc7.png",
    out: "03-contratos.webp",
    alt: "Contratos disponíveis",
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-04-19_at_17.27.28-429af2a6-9c69-4b57-b922-c678e5ec4c59.png",
    out: "04-clones.webp",
    alt: "Sistema de clones",
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-04-19_at_17.27.30__1_-123d4920-2adc-4823-9ec8-4fac488370eb.png",
    out: "05-chefao-missao.webp",
    alt: "Missão do Chefão",
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-04-19_at_17.27.29__1_-d9fbf56d-0a3f-464d-a43e-9862c7a0cd48.png",
    out: "06-chefao-telefone.webp",
    alt: "Telefone do Chefão",
  },
];

mkdirSync(outDir, { recursive: true });

const manifest = [];

for (const { file, out, alt, cover } of sources) {
  const src = join(assetsDir, file);
  const dest = join(outDir, out);
  const pipeline = sharp(src).resize({ width: 420, withoutEnlargement: true }).webp({
    quality: 78,
    effort: 6,
  });
  await pipeline.toFile(dest);
  const { size } = await import("node:fs").then((fs) => fs.promises.stat(dest));
  console.log(`${out} — ${Math.round(size / 1024)} KB`);
  manifest.push({ src: `/images/screenshots/${out}`, alt });

  if (cover) {
    await sharp(src)
      .resize({ width: 720, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(coverOut);
    const { size: coverSize } = await import("node:fs").then((fs) =>
      fs.promises.stat(coverOut),
    );
    console.log(`illuminati-control-cover.webp — ${Math.round(coverSize / 1024)} KB`);
  }
}

await import("node:fs").then((fs) =>
  fs.promises.writeFile(
    join(outDir, "manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf8",
  ),
);

console.log("Capturas otimizadas.");
