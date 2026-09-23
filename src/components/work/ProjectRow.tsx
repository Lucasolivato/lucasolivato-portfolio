import Link from "next/link";
import classNames from "classnames";
import styles from "./ProjectRow.module.scss";

export type Project = {
  slug: string;
  name: string;
  kind: string;
  tone: string;
  context: string;
  description: string;
  highlights: string[];
  tags: string[];
  caseStudy?: string;
  externalLink?: string;
};

type ProjectRowProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
};

export const ProjectRow = ({ project, headingLevel = "h3" }: ProjectRowProps) => {
  const Heading = headingLevel;
  const titleId = `project-${project.slug}`;

  return (
    <article className={styles.row} aria-labelledby={titleId} data-testid="project-row">
      <div className={styles.main}>
        <div className={styles.meta}>
          <span className={classNames(styles.kind, project.tone === "ai" && styles.kindAi)}>
            {project.kind}
          </span>
          <span className={styles.context}>{project.context}</span>
        </div>
        <Heading id={titleId} className={styles.title}>
          {project.name}
        </Heading>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.tags} aria-label="Tecnologias">
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.side}>
        <ul className={styles.highlights} aria-label="Evidências">
          {project.highlights.map((item) => (
            <li key={item}>
              <span className={styles.check} aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        {(project.caseStudy || project.externalLink) && (
          <div className={styles.links}>
            {project.caseStudy && (
              <Link className={styles.link} href={project.caseStudy}>
                Estudo de caso →
              </Link>
            )}
            {project.externalLink && (
              <a className={styles.link} href={project.externalLink} target="_blank" rel="noreferrer">
                Repositório ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
