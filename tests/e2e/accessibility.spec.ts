import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { routes } from "./routes";

for (const route of routes) {
  test(`${route} não tem violações de acessibilidade graves`, async ({ page }) => {
    await page.goto(route);
    // Espera as animações de entrada terminarem para o axe medir o contraste final.
    await page.waitForTimeout(1500);

    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    const serious = results.violations
      .filter((violation) => violation.impact === "serious" || violation.impact === "critical")
      .map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        alvos: violation.nodes.map((node) => node.target.join(" ")).slice(0, 5),
      }));

    expect(serious).toEqual([]);
  });
}
