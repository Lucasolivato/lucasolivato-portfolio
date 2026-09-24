import Image from "next/image";
import classNames from "classnames";

import { baseURL } from "@/app/resources";
import { about, home, person, social } from "@/app/resources/content";
import { Download } from "@/components/home/Icons";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: { title, description, type: "website", url: `https://${baseURL}/about`, images: [{ url: ogImage, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

const linkOf = (name: string) => social.find((item) => item.name === name)?.link ?? "";

type Experience = (typeof about.work.experiences)[number];

// Cargos consecutivos na mesma empresa viram um único cartão com a progressão.
const groupByCompany = (experiences: readonly Experience[]) =>
  experiences.reduce<{ company: string; roles: Experience[] }[]>((groups, experience) => {
    const last = groups[groups.length - 1];
    if (last && last.company === experience.company) last.roles.push(experience);
    else groups.push({ company: experience.company, roles: [experience] });
    return groups;
  }, []);

const sections = [
  { id: "quem-sou", title: about.intro.title },
  { id: "como-eu-trabalho", title: about.workflow.title },
  { id: "experiencia", title: about.work.title },
  { id: "formacao", title: about.studies.title },
  { id: "competencias", title: about.technical.title },
];

export default function About() {
  const companies = groupByCompany(about.work.experiences);

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.description,
            url: `https://${baseURL}/about`,
            image: `https://${baseURL}${person.avatar}`,
            sameAs: social.filter((item) => item.link && !item.link.startsWith("mailto:")).map((item) => item.link),
            worksFor: { "@type": "Organization", name: about.work.experiences[0]?.company || "" },
          }),
        }}
      />

      <aside className={styles.profile} aria-label="Perfil">
        <Image className={styles.avatar} src={person.avatar} alt={`Foto de ${person.name}`} width={128} height={128} priority />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h1 className={styles.name}>{person.name}</h1>
          <p className={styles.role}>{person.role}</p>
        </div>
        <ul className={styles.facts}>
          <li className={styles.label}>{home.location}</li>
          <li className={styles.label}>{person.languages.join(" · ")}</li>
          <li className={styles.label}>{home.availability}</li>
        </ul>
        <div className={styles.actions}>
          <a className={classNames(styles.button, styles.buttonAccent)} href={person.cv} download>
            <Download />
            Baixar currículo
          </a>
          <div className={styles.actionRow}>
            <a className={classNames(styles.button, styles.buttonGhost)} href={linkOf("LinkedIn")} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className={classNames(styles.button, styles.buttonGhost)} href={linkOf("GitHub")} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <nav className={styles.nav} aria-label="Seções da página">
          {sections.map((section) => (
            <a key={section.id} className={styles.navLink} href={`#${section.id}`}>
              {`// ${section.title.toLowerCase()}`}
            </a>
          ))}
        </nav>
      </aside>

      <div className={styles.content}>
        <section id="quem-sou" className={styles.section} aria-labelledby="quem-sou-title">
          <span className={styles.eyebrow}>{"// quem sou"}</span>
          <h2 id="quem-sou-title" className={styles.h2}>
            Qualidade e desenvolvimento, dos dois lados do código
          </h2>
          <div className={styles.bio}>{about.intro.description}</div>
        </section>

        <section id="como-eu-trabalho" className={styles.section} aria-labelledby="como-eu-trabalho-title">
          <h2 id="como-eu-trabalho-title" className={styles.h2}>
            {about.workflow.title}
          </h2>
          <ol className={styles.steps}>
            {about.workflow.steps.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.eyebrow}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.stepTitle}>{step.title}</span>
                <span className={styles.muted}>{step.description}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="experiencia" className={styles.section} aria-labelledby="experiencia-title">
          <h2 id="experiencia-title" className={styles.h2}>
            {about.work.title}
          </h2>
          <ol className={styles.jobs}>
            {companies.map((group) => (
              <li key={`${group.company}-${group.roles[0].timeframe}`} className={styles.job}>
                <h3 className={styles.company}>{group.company}</h3>
                <ol className={styles.roles}>
                  {group.roles.map((role) => (
                    <li key={role.role} className={styles.roleItem}>
                      <div className={styles.roleHeader}>
                        <h4 className={styles.roleTitle}>{role.role}</h4>
                        <span className={styles.label}>{role.period ?? role.timeframe}</span>
                      </div>
                      <ul className={styles.achievements}>
                        {role.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </section>

        <section id="formacao" className={styles.section} aria-labelledby="formacao-title">
          <h2 id="formacao-title" className={styles.h2}>
            {about.studies.title}
          </h2>
          <ul className={styles.grid}>
            {about.studies.institutions.map((institution, index) => (
              <li key={`${institution.name}-${index}`} className={styles.card}>
                <h3 className={styles.cardTitle}>{institution.description}</h3>
                <span className={styles.label}>{institution.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="competencias" className={styles.section} aria-labelledby="competencias-title">
          <h2 id="competencias-title" className={styles.h2}>
            {about.technical.title}
          </h2>
          <ul className={styles.grid}>
            {about.technical.skills.map((skill) => (
              <li key={skill.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{skill.title}</h3>
                <span className={styles.muted}>{skill.description}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
