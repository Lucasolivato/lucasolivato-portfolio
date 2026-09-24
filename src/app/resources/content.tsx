import Link from "next/link";

const person = {
  firstName: "Lucas",
  lastName: "Santos Olivato",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "QA Automation Engineer & Desenvolvedor de IA",
  avatar: "/images/avatar.jpg",
  location: "America/Sao_Paulo",
  languages: ["Português nativo", "Inglês técnico"],
  cv: "/Curriculo_Lucas_Olivato.pdf",
};

const newsletter = { display: false, title: "Newsletter", description: "" };

const social = [
  { name: "GitHub", icon: "github", link: "https://github.com/LucasOlivato" },
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/lucas-olivato/" },
  { name: "WhatsApp", icon: "whatsapp", link: "https://wa.me/5514991993618" },
  { name: "Email", icon: "email", link: "mailto:lucasolivato@gmail.com" },
];

const home = {
  label: "Início",
  title: "Lucas Olivato — QA Automation Engineer & Desenvolvedor de IA",
  description:
    "Portfólio de Lucas Olivato, QA Automation Engineer e desenvolvedor de agentes de IA, com experiência em automação de testes, testes E2E e de API, LLMs e desenvolvimento de software.",
  availability: "Aberto a novas oportunidades",
  location: "Igaraçu do Tietê, SP",
  headline: "Transformo requisitos em",
  headlineAccent: "software confiável.",
  subline:
    "Automação de testes, qualidade de software e desenvolvimento web. Trabalho perto do código para encontrar riscos cedo, validar fluxos críticos e ajudar times a entregar com confiança.",
  // Resultados reais, conferidos nos repositórios e relatórios de cada projeto.
  report: [
    { context: "analytics com IA · vitest", result: "1.643 passed", detail: "0 failed", tone: "pass" },
    { context: "agente de IA · pytest", result: "229/229 passed", detail: "cobertura 90%", tone: "pass" },
    { context: "agente de IA · e2e na AWS", result: "38/38 asserções", detail: "", tone: "pass" },
    { context: "SAP · robot framework", result: "600+ pedidos", detail: "em 10 h", tone: "info" },
  ],
  stats: [
    { value: "3 anos", label: "em qualidade de software" },
    { value: "2 agentes", label: "de IA desenvolvidos para clientes" },
    { value: "4 produtos", label: "próprios, do código aos testes" },
    { value: "Web · API · E2E", label: "camadas que automatizo" },
  ],
  featuredProjectSlugs: ["vorcq", "agente-ia-educacao", "assistente-ia-analytics", "sap-automation"],
  tools: [
    { title: "qualidade e automação", items: ["Playwright", "Cypress", "Robot Framework", "Selenium", "Postman", "Pytest", "Vitest", "axe"] },
    { title: "desenvolvimento", items: ["TypeScript", "Python", "React", "Next.js", "Node.js"] },
    { title: "ia aplicada", items: ["LLMs", "Tool-calling", "Guardrails", "Amazon Bedrock", "Vercel AI SDK", "Ollama"] },
    { title: "dados e entrega", items: ["SQL", "PostgreSQL", "Supabase", "Docker", "AWS", "GitHub Actions"] },
  ],
  contact: {
    title: "Vamos conversar?",
    description: "Para vagas de QA, Quality Engineering ou times que precisam de alguém entre o teste e o código.",
  },
};

const about = {
  label: "Sobre",
  title: "Sobre mim",
  description: `Conheça ${person.name}, ${person.role} que escreve os testes e também constrói o que eles validam.`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "" },
  intro: {
    display: true,
    title: "Quem sou",
    description: (
      <>
        <p>
          Sou <strong>QA Automation Engineer e desenvolvedor de IA</strong>: trabalho dos dois lados do código, escrevendo os testes e também construindo o que eles validam.
        </p>
        <p>
          Antes de TI, trabalhei com instalação de sistemas de energia solar e suporte técnico em eletrônica. Em 2023 entrei em qualidade de software na <strong>Tecnologia Única</strong>, automatizando testes de interface e API com Robot Framework e Python e validando sistemas SAP. Foi lá que automatizei a criação de mais de 600 pedidos em 10 horas para destravar um teste de carga.
        </p>
        <p>
          Entrei na <strong>NuageIT</strong> em junho de 2025 como Analista de Garantia de Qualidade. Ainda como QA, já trabalhava perto das iniciativas de IA da empresa e, em junho de 2026, recebi o convite para migrar para o desenvolvimento. Desde então, trabalho na criação de <strong>agentes de IA com LLMs</strong>: desenvolvi dois para clientes da empresa, validados por centenas de testes automatizados. Em paralelo, desenvolvo produtos próprios, como o <strong>VORCQ</strong>, sistema que substituiu a planilha operacional de uma locadora e roda com quality gates a cada entrega.
        </p>
        <p>
          Meu diferencial é levar o olhar de QA para dentro do desenvolvimento: pensar em risco, regra de negócio e regressão desde a primeira linha.
        </p>
      </>
    ),
  },
  workflow: {
    display: true,
    title: "Como eu trabalho",
    steps: [
      { title: "Entender", description: "O problema, o comportamento esperado e quem depende dele." },
      { title: "Mapear riscos", description: "Regras de negócio, fluxos críticos e o que custa caro se quebrar." },
      { title: "Definir cenários", description: "Casos de teste e as evidências que provam que funciona." },
      { title: "Automatizar", description: "O que precisa de repetição e feedback rápido: UI, API e E2E." },
      { title: "Acompanhar", description: "A entrega com o time, registrando aprendizados e regressões." },
    ],
  },
  work: {
    display: true,
    title: "Experiência profissional",
    experiences: [
      {
        company: "NuageIT",
        id: "NuageIT-desenvolvimento",
        timeframe: "Jun 2026 - Atual",
        period: "jun. 2026 — hoje",
        role: "Desenvolvedor · agentes de IA e LLMs",
        achievements: [
          <>Convidado a migrar da área de Qualidade para Desenvolvimento após atuar perto das iniciativas de IA da empresa. Levo para o código a mesma disciplina de testes automatizados e quality gates.</>,
          <>Agente conversacional pedagógico para um cliente do setor de educação: persona histórica com guardrails contra prompt injection, arquitetura serverless na AWS (Lambda, API Gateway WebSocket e Bedrock), autenticação JWT e perfis de acesso. 229/229 testes unitários, 90% de cobertura no backend e 38/38 asserções E2E no ambiente AWS.</>,
          <>Plataforma de analytics com assistente de IA para um cliente corporativo: respostas em linguagem natural fundamentadas apenas em dados reais do banco, via tool-calling e sem SQL arbitrário, com isolamento entre clientes validado por uma suíte adversarial. 1.643 testes aprovados.</>,
          <>Stack: Next.js, React, TypeScript, Python, PostgreSQL, Docker e AWS.</>,
        ],
        images: [],
      },
      {
        company: "NuageIT",
        id: "NuageIT-qualidade",
        timeframe: "Jun 2025 - Jun 2026",
        period: "jun. 2025 — jun. 2026",
        role: "Analista de Garantia de Qualidade Jr",
        achievements: [
          <>Implementação de estratégias de teste para aplicações web e APIs, utilizando Cypress, Playwright e Postman para automação de testes.</>,
          <>Desenvolvimento de frameworks de teste escaláveis com integração contínua via GitHub Actions e Jenkins.</>,
          <>Elaboração de GMUDs e handovers para implantações em produção, com foco em transições seguras e rastreabilidade.</>,
          <>Colaboração com desenvolvimento e produto em práticas de Shift-Left Testing e BDD.</>,
          <>Criação e manutenção de documentação técnica de testes e gerenciamento de casos de teste no ClickUp.</>,
        ],
        images: [],
      },
      {
        company: "Tecnologia Única",
        timeframe: "2023 - 2025 (1 ano e 6 meses)",
        period: "2023 — 2025",
        role: "Analista de Garantia de Qualidade Jr",
        achievements: [
          <>Automação de testes funcionais e de API com Robot Framework, Selenium, Postman e Python para sistemas críticos e fluxos de pedidos.</>,
          <>Execução e análise de testes de carga e performance para avaliar escalabilidade e estabilidade.</>,
          <>Atuação em qualidade para SAP, incluindo análise de dados, validações com SQL e colaboração em regras fiscais e integrações.</>,
          <>Elaboração de casos de teste, planos de teste e documentação técnica.</>,
          <>
            <strong>Resultado comprovado:</strong> automação de criação de mais de 600 pedidos via UI em 10 horas para viabilizar testes de carga críticos.
            <br />
            <Link href="/work/sap-automation">Ver estudo técnico →</Link>
          </>,
        ],
        images: [],
      },
      {
        company: "Zella Sistemas",
        timeframe: "2019 - 2020 (1 ano)",
        role: "Assistente Técnico Eletrônico",
        achievements: [<>Suporte técnico e manutenção de sistemas e equipamentos eletrônicos.</>],
        images: [],
      },
      {
        company: "L&L Tecnologia",
        timeframe: "2010 - 2018",
        role: "Instalador e Técnico de Sistemas de Energia Solar",
        achievements: [<>Planejamento, instalação e manutenção de sistemas de energia solar.</>],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formação acadêmica",
    institutions: [
      { name: "Etec Comendador João Rays", description: <>Técnico em Desenvolvimento de Sistemas — 2024</> },
      { name: "Fatec Jaú", description: <>Bacharelado em Gestão de Tecnologia da Informação — 2022</> },
      { name: "Etec Comendador João Rays", description: <>Técnico em Informática — 2013</> },
    ],
  },
  technical: {
    display: true,
    title: "Competências técnicas",
    skills: [
      {
        title: "Qualidade e automação",
        description: <>Playwright, Cypress, Robot Framework, Selenium, Postman, testes funcionais, testes de API, regressão, performance e acessibilidade.</>,
        images: [],
      },
      {
        title: "Desenvolvimento",
        description: <>TypeScript, JavaScript, Python, React, Next.js, Node.js, HTML e CSS aplicados em aplicações web e automações.</>,
        images: [],
      },
      {
        title: "IA aplicada",
        description: <>Agentes com LLMs, tool-calling, guardrails contra prompt injection, Amazon Bedrock, Vercel AI SDK e Ollama.</>,
        images: [],
      },
      {
        title: "Dados, integrações e entrega",
        description: <>SQL, SAP Business One, APIs REST, Supabase, PostgreSQL, Docker, GitHub Actions e Jenkins.</>,
        images: [],
      },
      {
        title: "Práticas de trabalho",
        description: <>BDD, Shift-Left Testing, CI/CD, documentação técnica, GMUDs, handovers, casos de teste e colaboração em times ágeis.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Contato",
  title: "Entre em contato",
  description: `Converse com ${person.name} sobre qualidade de software, automação de testes e desenvolvimento.`,
};

const work = {
  label: "Projetos",
  title: "Projetos e estudos de caso",
  description:
    "Produtos que construí e sistemas que ajudei a validar — com os testes, as decisões e os resultados de cada um.",
  groups: [
    { id: "destaque", title: "Estudos de caso", description: "Qualidade, automação e desenvolvimento aplicados em produtos reais." },
    { id: "proprios", title: "Outros produtos próprios", description: "Aplicações que desenvolvi do código aos testes." },
    { id: "estudos", title: "Este portfólio", description: "O próprio site também é testado." },
  ],
  projects: [
    {
      slug: "vorcq",
      group: "destaque",
      name: "VORCQ — gestão de locação de caçambas",
      kind: "Produto próprio",
      tone: "brand",
      context: "Dev + QA",
      description:
        "Substituiu a planilha operacional de uma locadora por um sistema com rastreabilidade total: prazo em dias úteis, três perfis de acesso e quarentena de 180 dias antes de qualquer exclusão.",
      highlights: ["RBAC com 3 perfis", "trilha de auditoria", "exclusão só lógica"],
      tags: ["Next.js", "Supabase · RLS", "Vitest", "Playwright"],
      caseStudy: "/work/vorcq",
    },
    {
      slug: "agente-ia-educacao",
      group: "destaque",
      name: "Agente pedagógico com persona histórica",
      kind: "Agente de IA",
      tone: "ai",
      context: "Cliente corporativo · educação",
      description:
        "Chat em tempo real para alunos e professores, com guardrails contra prompt injection e respostas que separam fato documentado de inferência.",
      highlights: ["229/229 unitários", "38/38 E2E", "1º trecho em 2,15 s"],
      tags: ["AWS Lambda", "Bedrock", "WebSocket", "Pytest"],
      caseStudy: "/work/agente-ia-educacao",
    },
    {
      slug: "assistente-ia-analytics",
      group: "destaque",
      name: "Assistente que só responde com dados reais",
      kind: "Agente de IA",
      tone: "ai",
      context: "Projeto corporativo · analytics",
      description:
        "Responde em linguagem natural sem inventar números nem executar SQL arbitrário. Isolamento entre clientes provado por uma suíte adversarial.",
      highlights: ["1.643 testes", "0 falhas", "multi-tenant"],
      tags: ["Next.js", "PostgreSQL", "Tool-calling", "Docker"],
      caseStudy: "/work/assistente-ia-analytics",
    },
    {
      slug: "sap-automation",
      group: "destaque",
      name: "600 pedidos em SAP para destravar um teste de carga",
      kind: "Automação",
      tone: "brand",
      context: "Tecnologia Única",
      description:
        "Com a API de pedidos instável, automatizei a criação pela interface e gerei a massa de dados que o teste de carga precisava.",
      highlights: ["600+ pedidos", "em 10 horas"],
      tags: ["Robot Framework", "Python", "SAP Business One"],
      caseStudy: "/work/sap-automation",
    },
    {
      slug: "clinicflow",
      group: "proprios",
      name: "ClinicFlow",
      kind: "Produto próprio",
      tone: "brand",
      context: "SaaS",
      description:
        "CRM multi-tenant para clínicas médicas e odontológicas: agenda, pacientes, financeiro, atendimento via WhatsApp e automações com IA.",
      highlights: ["isolamento via RLS", "fluxos E2E"],
      tags: ["Next.js", "TypeScript", "Supabase", "Playwright"],
    },
    {
      slug: "plantaofarma",
      group: "proprios",
      name: "PlantãoFarma",
      kind: "App mobile",
      tone: "brand",
      context: "Projeto acadêmico",
      description:
        "Aplicativo para localizar farmácias de plantão próximas, com navegação direta pelo Google Maps ou Waze.",
      highlights: ["React Native", "API em Node.js"],
      tags: ["React Native", "Node.js", "MongoDB"],
      externalLink: "https://github.com/Heloisa-Moraes/PlantaoFarma",
    },
    {
      slug: "portfolio-automation",
      group: "estudos",
      name: "Qualidade aplicada a este portfólio",
      kind: "Estudo técnico",
      tone: "brand",
      context: "Playwright + axe no CI",
      description:
        "Testes E2E, acessibilidade, SEO e layout mobile rodando no GitHub Actions a cada push.",
      highlights: ["axe sem violações graves", "desktop e mobile"],
      tags: ["Playwright", "axe-core", "GitHub Actions"],
      caseStudy: "/work/portfolio-automation",
    },
  ],
};

const gallery = {
  label: "Galeria",
  title: "Galeria",
  description: `Imagens de ${person.name}`,
  images: [
    { src: "/images/gallery/img-01.jpg", alt: "Imagem de galeria", orientation: "portrait" },
    { src: "/images/gallery/img-02.jpg", alt: "Imagem de galeria", orientation: "landscape" },
    { src: "/images/gallery/img-03.jpg", alt: "Imagem de galeria", orientation: "portrait" },
    { src: "/images/gallery/img-04.jpg", alt: "Imagem de galeria", orientation: "landscape" },
    { src: "/images/gallery/img-05.jpg", alt: "Imagem de galeria", orientation: "landscape" },
    { src: "/images/gallery/img-06.jpg", alt: "Imagem de galeria", orientation: "portrait" },
    { src: "/images/gallery/img-07.jpg", alt: "Imagem de galeria", orientation: "landscape" },
    { src: "/images/gallery/img-08.jpg", alt: "Imagem de galeria", orientation: "portrait" },
    { src: "/images/gallery/img-09.jpg", alt: "Imagem de galeria", orientation: "landscape" },
    { src: "/images/gallery/img-10.jpg", alt: "Imagem de galeria", orientation: "landscape" },
    { src: "/images/gallery/img-11.jpg", alt: "Imagem de galeria", orientation: "portrait" },
    { src: "/images/gallery/img-12.jpg", alt: "Imagem de galeria", orientation: "landscape" },
    { src: "/images/gallery/img-13.jpg", alt: "Imagem de galeria", orientation: "landscape" },
    { src: "/images/gallery/img-14.jpg", alt: "Imagem de galeria", orientation: "landscape" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
