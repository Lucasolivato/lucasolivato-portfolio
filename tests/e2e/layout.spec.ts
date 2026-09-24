import { expect, test } from "@playwright/test";
import { routes } from "./routes";

for (const route of routes) {
  test(`${route} não gera rolagem horizontal`, async ({ page }) => {
    await page.goto(route);
    const overflow = await page.evaluate(() => {
      const root = document.documentElement;
      return root.scrollWidth - root.clientWidth;
    });
    expect(overflow).toBeLessThanOrEqual(1);
  });
}

test("botões da Home têm área de toque de pelo menos 44px", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator("section").filter({ has: page.getByRole("heading", { level: 1 }) });
  for (const name of ["Ver projetos", "Currículo", "Falar no WhatsApp"]) {
    const box = await hero.getByRole("link", { name }).boundingBox();
    expect(box?.height, name).toBeGreaterThanOrEqual(44);
  }
});

test("fundo decorativo não bloqueia cliques nem aparece para leitores de tela", async ({ page }) => {
  await page.goto("/");
  const background = page.getByTestId("ambient-background");
  await expect(background).toHaveAttribute("aria-hidden", "true");
  await expect(background).toHaveCSS("pointer-events", "none");
});
