import { expect, test } from "@playwright/test";
import { productionHost, routes } from "./routes";

test("metadados apontam para o domínio real e estão em português", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /QA Automation Engineer/);
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", new RegExp(productionHost));
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute("content", "pt_BR");
});

// Regressão: o sitemap respondia 404 e o domínio apontava para a demo do template.
test("sitemap lista as páginas públicas no domínio real", async ({ request }) => {
  const response = await request.get("/sitemap.xml");
  expect(response.status()).toBe(200);
  const xml = await response.text();

  for (const route of routes.filter((route) => route !== "/")) {
    expect(xml).toContain(`https://${productionHost}${route}`);
  }
  expect(xml).not.toContain("magic-portfolio");
  expect(xml).not.toContain("once-ui");
});

test("robots.txt aponta para o sitemap com https", async ({ request }) => {
  const response = await request.get("/robots.txt");
  expect(response.status()).toBe(200);
  expect(await response.text()).toContain(`https://${productionHost}/sitemap.xml`);
});

test("ícones e manifest do site estão disponíveis", async ({ page, request }) => {
  for (const asset of ["/favicon.ico", "/favicon.svg", "/apple-touch-icon.png", "/manifest.webmanifest"]) {
    const response = await request.get(asset);
    expect(response.status(), asset).toBe(200);
  }

  await page.goto("/");
  await expect(page.locator('link[rel="icon"][type="image/svg+xml"]')).toHaveAttribute("href", /favicon\.svg/);
  await expect(page.locator('link[rel="apple-touch-icon"]')).toHaveAttribute("href", /apple-touch-icon\.png/);
  // Regressão: o favicon da joaninha herdado do template.
  expect(await page.content()).not.toContain("ladybug");
});

test("imagem de compartilhamento é gerada", async ({ request }) => {
  const response = await request.get("/og?title=Teste");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("image/png");
});
