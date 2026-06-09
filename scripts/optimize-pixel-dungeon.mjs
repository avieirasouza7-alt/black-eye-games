import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir =
  "C:/Users/i5/.cursor/projects/c-Users-i5-Desktop-ad-verify-hub-main/assets";
const outDir = join(root, "public", "images", "pixel-dungeon-quest");

const shots = [
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-17_at_12.35.30__2_-b02b6f34-3032-4514-8d52-4b7e238bba48.png",
    out: "cover.webp",
    w: 720,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-17_at_12.34.14-56ab914a-0c0d-4a66-9a37-9efe66720790.png",
    out: "01-exploracao.webp",
    w: 420,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-17_at_12.34.15__3_-1b529873-37c5-465d-abfe-d90fb52bd2ca.png",
    out: "02-rei-goblin.webp",
    w: 420,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-17_at_12.34.15__2_-04aaff2f-0093-44a7-bd40-1b01b9efd1f8.png",
    out: "03-objetivos.webp",
    w: 420,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-17_at_12.34.15__1_-3ce949c9-6214-4214-b815-109d9ae42158.png",
    out: "04-loot.webp",
    w: 420,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-17_at_12.34.14__1_-f31902ba-f06a-4cb9-b764-de0ff6dec61e.png",
    out: "05-tesouros.webp",
    w: 420,
  },
  {
    file: "c__Users_i5_AppData_Roaming_Cursor_User_workspaceStorage_a1ba35b5b1942756b41ed298f1c089b6_images_WhatsApp_Image_2026-05-17_at_12.34.15__4_-aa703c3d-a827-4f26-9570-2d69d99c0100.png",
    out: "06-combate.webp",
    w: 420,
  },
];

mkdirSync(outDir, { recursive: true });

for (const { file, out, w } of shots) {
  const src = join(assetsDir, file);
  const dest = join(outDir, out);
  await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(dest);
  const { size } = await import("node:fs").then((fs) => fs.promises.stat(dest));
  console.log(`${out} — ${Math.round(size / 1024)} KB`);
}

console.log("Pixel Dungeon Quest — imagens prontas.");
