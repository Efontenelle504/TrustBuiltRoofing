import { mkdir, copyFile, cp } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

await mkdir(dist, { recursive: true });
await copyFile(join(root, "simple.html"), join(dist, "index.html"));
await cp(join(root, "assets"), join(dist, "assets"), { recursive: true, force: true });
await cp(join(root, "public"), dist, { recursive: true, force: true });

console.log("Synced simple.html, assets, robots.txt, sitemap.xml, and llms.txt to dist/");
