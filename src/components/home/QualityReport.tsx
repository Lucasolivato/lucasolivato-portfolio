import styles from "./Home.module.scss";

type ReportItem = {
  context: string;
  result: string;
  detail: string;
  tone: string;
};

// Resultados de suítes reais dos projetos. Não é um painel ao vivo: os números
// são fixos e vêm dos relatórios de cada repositório.
export const QualityReport = ({ items }: { items: ReportItem[] }) => (
  <section className={styles.report} aria-label="Resultados reais de testes">
    <div className={styles.reportHeader}>
      <span className={styles.label}>quality-report.txt</span>
      <span className={styles.reportTag}>resultados reais</span>
    </div>
    <ul className={styles.reportList}>
      {items.map((item) => (
        <li key={item.context} className={styles.reportItem}>
          <span className={styles.label} style={{ fontSize: 14 }}>
            {item.context}
          </span>
          <span>
            <span className={item.tone === "pass" ? styles.pass : styles.info}>
              {item.tone === "pass" ? "✓ " : ""}
              {item.result}
            </span>
            {item.detail && ` · ${item.detail}`}
          </span>
        </li>
      ))}
    </ul>
  </section>
);
