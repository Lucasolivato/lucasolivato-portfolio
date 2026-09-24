import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import { baseURL } from "@/app/resources";
import { about, home, person, social, work } from "@/app/resources/content";
import { QualityReport } from "@/components/home/QualityReport";
import { ArrowRight, Download } from "@/components/home/Icons";
import { ProjectRow } from "@/components/work/ProjectRow";
import styles from "@/components/home/Home.module.scss";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
      siteName: person.name,
      url: `https://${baseURL}`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

const linkOf = (name: string) => social.find((item) => item.name === name)?.link ?? "";

export default function Home() {
  const featuredProjects = home.featuredProjectSlugs
    .map((slug) => work.projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof work.projects)[number] => Boolean(project));
  const otherProjects = work.projects.filter((project) => !home.featuredProjectSlugs.includes(project.slug));
  const recentJobs = about.work.experiences.filter((experience) => experience.period);
  const degree = about.studies.institutions.find((institution) => institution.name === "Fatec Jaú");

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            publisher: { "@type": "Person", name: person.name, jobTitle: person.role },
          }),
        }}
      />

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroText}>
          <div className={styles.identity}>
            <Image className={styles.avatar} src={person.avatar} alt={`Foto de ${person.name}`} width={64} height={64} priority />
            <div>
              <p className={styles.name} style={{ margin: 0 }}>
                {person.name}
              </p>
              <p className={styles.label} style={{ margin: "4px 0 0" }}>
                {person.role}
              </p>
              <p className={styles.label} style={{ margin: "2px 0 0" }}>
                {home.location}
              </p>
            </div>
          </div>
          <p className={styles.availability}>
            <span className={styles.dot} aria-hidden="true" />
            {home.availability}
          </p>
          <h1 id="hero-title" className={styles.headline}>
            {home.headline} <span className={styles.accent}>{home.headlineAccent}</span>
          </h1>
          <p className={styles.subline}>{home.subline}</p>
          <div className={styles.actions}>
            <Link className={classNames(styles.button, styles.buttonPrimary)} href="/work">
              Ver projetos
              <ArrowRight />
            </Link>
            <a className={classNames(styles.button, styles.buttonAccent)} href={person.cv} download>
              <Download />
              Currículo
            </a>
            <a className={classNames(styles.button, styles.buttonGhost)} href={linkOf("WhatsApp")} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </div>
        </div>
        <QualityReport items={home.report} />
      </section>

      <dl className={styles.stats} aria-label="Resumo profissional">
        {home.stats.map((stat) => (
          <div key={stat.value} className={styles.stat}>
            <dt className={styles.statLabel}>{stat.label}</dt>
            <dd className={styles.statValue}>{stat.value}</dd>
          </div>
        ))}
      </dl>

      <section className={styles.section} aria-labelledby="projects-title">
        <div className={styles.sectionHeader}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span className={styles.eyebrow}>{"// projetos"}</span>
            <h2 id="projects-title" className={styles.h2}>
              O que construí e validei
            </h2>
          </div>
          <Link className={styles.textLink} href="/work">
            Ver todos →
          </Link>
        </div>
        {featuredProjects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
        <ul className={styles.tags} aria-label="Outros projetos">
          <li className={styles.label} style={{ alignSelf: "center" }}>
            Também:
          </li>
          {otherProjects.map((project) => (
            <li key={project.slug}>
              <Link className={styles.tag} href="/work" style={{ display: "inline-block", textDecoration: "none" }}>
                {project.name.split(" — ")[0]} — {project.kind.toLowerCase()}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.split}>
        <section className={styles.section} style={{ gap: 24 }} aria-labelledby="career-title">
          <div className={styles.sectionHeader}>
            <h2 id="career-title" className={styles.h3}>
              Trajetória
            </h2>
            <Link className={styles.textLink} href="/about">
              Completa em Sobre →
            </Link>
          </div>
          <ol className={styles.timeline}>
            {recentJobs.map((job) => (
              <li key={`${job.company}-${job.period}`} className={styles.timelineItem}>
                <span className={classNames(styles.label, styles.timelinePeriod)}>{job.period}</span>
                <div className={styles.timelineBody}>
                  <span className={styles.strong}>{job.company}</span>
                  <span className={styles.muted}>{job.role}</span>
                </div>
              </li>
            ))}
            {degree && (
              <li className={styles.timelineItem}>
                <span className={classNames(styles.label, styles.timelinePeriod)}>Formação</span>
                <div className={styles.timelineBody}>
                  <span className={styles.strong}>{degree.description}</span>
                  <span className={styles.muted}>{degree.name}</span>
                </div>
              </li>
            )}
          </ol>
        </section>

        <section className={styles.section} style={{ gap: 24 }} aria-labelledby="tools-title">
          <h2 id="tools-title" className={styles.h3}>
            Ferramentas
          </h2>
          <div className={styles.toolGroups}>
            {home.tools.map((group) => (
              <div key={group.title} className={styles.toolGroup}>
                <h3 className={styles.label} style={{ margin: 0, fontWeight: 400 }}>
                  {group.title}
                </h3>
                <ul className={styles.tags}>
                  {group.items.map((item) => (
                    <li key={item} className={styles.tag}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className={styles.contact} aria-labelledby="contact-title">
        <div className={styles.contactText}>
          <h2 id="contact-title" className={styles.h2}>
            {home.contact.title}
          </h2>
          <p className={styles.contactDescription}>{home.contact.description}</p>
        </div>
        <div className={styles.contactActions}>
          <a className={classNames(styles.button, styles.buttonAccent)} href={linkOf("WhatsApp")} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className={classNames(styles.button, styles.buttonGhost)} href={linkOf("Email")}>
            E-mail
          </a>
          <a className={classNames(styles.button, styles.buttonGhost)} href={linkOf("LinkedIn")} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
