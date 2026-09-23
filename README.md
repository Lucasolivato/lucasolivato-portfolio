# lucasolivato.com

[![CI](https://github.com/Lucasolivato/magic-portfolio-for-next-js/actions/workflows/ci.yml/badge.svg)](https://github.com/Lucasolivato/magic-portfolio-for-next-js/actions/workflows/ci.yml)

Portfólio de **Lucas Santos Olivato**, QA Automation Engineer. No ar em [www.lucasolivato.com](https://www.lucasolivato.com).

Este site é tratado como produto: tem requisitos, testes automatizados e um pipeline que bloqueia regressões.

## Qualidade

A suíte roda com **Playwright** em dois perfis — desktop (Chrome) e celular (Pixel 7) — a cada push, no GitHub Actions.

| Suíte | O que garante |
|---|---|
| [`home.spec.ts`](tests/e2e/home.spec.ts) | Nome, cargo e proposta de valor na primeira dobra; currículo em PDF acessível; WhatsApp; estudos de caso em destaque. |
| [`navigation.spec.ts`](tests/e2e/navigation.spec.ts) | Toda página responde 200 com um único `h1`; o menu funciona; rotas inexistentes respondem 404 em português. |
| [`accessibility.spec.ts`](tests/e2e/accessibility.spec.ts) | Nenhuma violação séria ou crítica do **axe-core** (WCAG 2.1 A e AA) em nenhuma página. |
| [`layout.spec.ts`](tests/e2e/layout.spec.ts) | Nenhuma rolagem horizontal; botões principais com área de toque de 44 px ou mais. |
| [`seo.spec.ts`](tests/e2e/seo.spec.ts) | `lang`, descrição e Open Graph com o domínio real; `sitemap.xml` e `robots.txt` válidos. |
| [`links.spec.ts`](tests/e2e/links.spec.ts) | Nenhum link interno quebrado. |

Alguns testes são regressões de bugs reais encontrados no site — páginas de demonstração do template publicadas, sitemap respondendo 404, um "soft 404" em `/work/*` e um painel que simulava dados ao vivo. A história está no estudo de caso [Qualidade aplicada a este portfólio](https://www.lucasolivato.com/work/portfolio-automation).

## Rodando localmente

Requer Node.js 20.

```bash
npm install
npm run dev          # http://localhost:3000
```

Testes:

```bash
npm run build
npx playwright install chromium
npm run test:e2e     # sobe o build de produção e roda a suíte
```

Para testar um ambiente já publicado: `PLAYWRIGHT_BASE_URL=https://www.lucasolivato.com npm run test:e2e`.

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · SCSS Modules · MDX para os estudos de caso · Playwright · axe-core · GitHub Actions · Vercel.

A base de componentes vem do [Magic Portfolio / Once UI](https://github.com/once-ui-system/magic-portfolio), sob a licença CC BY-NC 4.0 (veja [LICENSE](LICENSE)).

## Onde editar

- Conteúdo (textos, projetos, experiência): [`src/app/resources/content.tsx`](src/app/resources/content.tsx)
- Estudos de caso: [`src/app/work/projects/*.mdx`](src/app/work/projects)
- Home: [`src/app/page.tsx`](src/app/page.tsx) e [`src/components/home/`](src/components/home)
