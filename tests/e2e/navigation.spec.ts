import { expect, test } from "@playwright/test";
import { routes } from "./routes";

for (const route of routes) {
  test(`${route} responde 200 e tem um único h1`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  });
}

test("o menu leva às páginas principais", async ({ page }) => {
  await page.goto("/");
  const menu = page.locator("header");

  await menu.getByRole("link", { name: "Projetos", exact: true }).click();
  await expect(page).toHaveURL(/\/work$/);

  await menu.getByRole("link", { name: "Sobre", exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);

  await menu.getByRole("link", { name: "Contato", exact: true }).click();
  await expect(page).toHaveURL(/\/contact$/);
});

test("página inexistente responde 404 em português", async ({ page }) => {
  const response = await page.goto("/pagina-que-nao-existe");
  expect(response?.status()).toBe(404);
  await expect(page.getByText("Página não encontrada")).toBeVisible();
});

// Regressão: páginas de demonstração do template estavam publicadas com o meu nome.
for (const slug of [
  "building-once-ui-a-customizable-design-system",
  "simple-portfolio-builder",
  "automate-design-handovers-with-a-figma-to-code-pipeline",
]) {
  test(`página do template /work/${slug} não existe`, async ({ request }) => {
    const response = await request.get(`/work/${slug}`);
    expect(response.status()).toBe(404);
  });
}

test("página Sobre mostra a progressão de QA para desenvolvimento na NuageIT", async ({ page }) => {
  await page.goto("/about");
  const nuageit = page.getByRole("listitem").filter({ has: page.getByRole("heading", { name: "NuageIT", level: 3 }) });
  const roles = nuageit.getByRole("heading", { level: 4 });
  await expect(roles).toHaveCount(2);
  await expect(roles.first()).toContainText("Desenvolvedor");
  await expect(roles.last()).toContainText("Analista de Garantia de Qualidade");
});

// Regressão: o MDX dos estudos de caso não interpreta tabelas em Markdown e as mostraria como texto cru.
for (const route of routes.filter((route) => route.startsWith("/work/"))) {
  test(`${route} não exibe Markdown cru`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("article")).not.toContainText(/\|\s*-{3,}\s*\|/);
    await expect(page.locator("article")).not.toContainText("**");
  });
}
