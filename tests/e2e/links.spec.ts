import { expect, test } from "@playwright/test";
import { routes } from "./routes";

test("nenhum link interno está quebrado", async ({ page, request }) => {
  const internalLinks = new Set<string>();

  for (const route of routes) {
    await page.goto(route);
    const hrefs = await page.locator("a[href]").evaluateAll((anchors) =>
      anchors.map((anchor) => anchor.getAttribute("href") ?? ""),
    );
    for (const href of hrefs) {
      if (href.startsWith("/") && !href.startsWith("//")) {
        internalLinks.add(href.split("#")[0]);
      }
    }
  }

  const broken: string[] = [];
  for (const href of internalLinks) {
    const response = await request.get(href);
    if (response.status() >= 400) broken.push(`${href} → ${response.status()}`);
  }

  expect(internalLinks.size).toBeGreaterThan(5);
  expect(broken).toEqual([]);
});
