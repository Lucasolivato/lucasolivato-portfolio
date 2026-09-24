// Gera public/Curriculo_Lucas_Olivato.pdf a partir de docs/curriculo/curriculo.html.
// Uso: npm run cv
import { chromium } from "@playwright/test";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = pathToFileURL(join(root, "docs", "curriculo", "curriculo.html")).href;
const output = join(root, "public", "Curriculo_Lucas_Olivato.pdf");

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(source, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: output, format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();

console.log(`Currículo gerado em ${output}`);
