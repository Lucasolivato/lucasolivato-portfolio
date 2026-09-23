import { expect, test } from "@playwright/test";

test.describe("Home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("apresenta nome, cargo e proposta de valor na primeira dobra", async ({ page }) => {
    await expect(page).toHaveTitle(/QA Automation Engineer/);
    await expect(page.getByText("Lucas Santos Olivato", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toContainText("software confiável");
    await expect(page.getByRole("img", { name: /Foto de Lucas/ })).toBeVisible();
  });

  test("oferece os caminhos de contato principais", async ({ page, request }) => {
    const hero = page.locator("section").filter({ has: page.getByRole("heading", { level: 1 }) });

    const cv = hero.getByRole("link", { name: "Currículo" });
    const cvHref = await cv.getAttribute("href");
    expect(cvHref).toMatch(/\.pdf$/);
    const cvResponse = await request.get(cvHref!);
    expect(cvResponse.status()).toBe(200);
    expect(cvResponse.headers()["content-type"]).toContain("application/pdf");

    await expect(hero.getByRole("link", { name: "Falar no WhatsApp" })).toHaveAttribute("href", /^https:\/\/wa\.me\//);
  });

  test("mostra os quatro estudos de caso em destaque", async ({ page }) => {
    const featured = page.locator("section", { has: page.getByRole("heading", { name: "O que construí e validei" }) });
    await expect(featured.getByTestId("project-row")).toHaveCount(4);
  });

  test("leva ao estudo de caso do VORCQ", async ({ page }) => {
    await page.getByRole("article", { name: /VORCQ/ }).getByRole("link", { name: /Estudo de caso/ }).click();
    await expect(page).toHaveURL(/\/work\/vorcq$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("VORCQ");
  });

  // Regressão: a Home antiga exibia um painel com números fixos como se fossem "tempo real".
  test("não simula dados ao vivo", async ({ page }) => {
    const body = page.locator("body");
    await expect(body).not.toContainText(/status de automação/i);
    await expect(body).not.toContainText(/métricas de execução em tempo real/i);
    await expect(body).not.toContainText(/sistemas operacionais/i);
  });
});
