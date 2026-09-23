import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";
import { ProjectRow } from "@/components/work/ProjectRow";
import styles from "@/components/home/Home.module.scss";

export async function generateMetadata() {
  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: { title, description, type: "website", url: `https://${baseURL}/work/`, images: [{ url: ogImage, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export default function Work() {
  return (
    <div className={styles.page} style={{ gap: 88 }}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/work`,
            author: { "@type": "Person", name: person.name },
            hasPart: work.projects.map((project) => ({ "@type": "CreativeWork", headline: project.name, description: project.description })),
          }),
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 48 }}>
        <span className={styles.eyebrow}>{"// projetos"}</span>
        <h1 className={styles.headline} style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>
          {work.title}
        </h1>
        <p className={styles.subline}>{work.description}</p>
      </div>

      {work.groups.map((group) => {
        const projects = work.projects.filter((project) => project.group === group.id);
        return (
          <section key={group.id} className={styles.section} aria-labelledby={`${group.id}-title`}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <h2 id={`${group.id}-title`} className={styles.h2}>
                {group.title}
              </h2>
              <p className={styles.muted} style={{ margin: 0, fontSize: 16 }}>
                {group.description}
              </p>
            </div>
            {projects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </section>
        );
      })}
    </div>
  );
}
