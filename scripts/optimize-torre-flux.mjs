import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir =
  "C:/Users/i5/.cursor/projects/c-Users-i5-Desktop-ad-verify-hub-main/assets";
const outDir = join(root, "public", "images", "torre-flux");

const shots = [
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-31_at_16.02.01-eb473ff2-7638-4811-a89c-13f62997cae5.png",
    out: "cover.webp",
    w: 720,
    cover: true,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-31_at_16.01.58-2bb3ac61-0239-4c95-a91b-b3c86c8e7e58.png",
    out: "01-vitoria.webp",
    w: 420,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-31_at_16.01.59-588c4ea5-d1f3-40e0-a358-f6a41aed3338.png",
    out: "02-batalha.webp",
    w: 420,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-31_at_16.02.01__2_-60b61af0-bfcf-4db9-8424-d9d69fab885c.png",
    out: "03-deck.webp",
    w: 420,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-31_at_16.02.01__3_-cd8ae973-9075-4b3c-a879-89f37202ad36.png",
    out: "04-loja.webp",
    w: 420,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-31_at_16.02.02-cad42f8e-b1fd-4d80-add5-3399a7a613e0.png",
    out: "05-bau-diario.webp",
    w: 420,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-31_at_16.01.58__2_-bebf8cd0-c5c4-429b-9b94-13678df55834.png",
    out: "06-combo.webp",
    w: 420,
  },
];

mkdirSync(outDir, { recursive: true });

for (const { file, out, w, cover } of shots) {
  const src = join(assetsDir, file);
  const dest = join(outDir, out);
  await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(dest);
  const { size } = await import("node:fs").then((fs) => fs.promises.stat(dest));
  console.log(`${out} — ${Math.round(size / 1024)} KB`);
}

console.log("Torre Flux — imagens prontas.");
