import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Connect your data source",
    description:
      "Link any data source — databases, APIs, data lakes, or third-party feeds — through our universal connector layer.",
  },
  {
    number: "02",
    title: "Automated trust analysis",
    description:
      "UDTR's engine evaluates provenance, completeness, consistency, and freshness across every dimension of your data.",
  },
  {
    number: "03",
    title: "Receive your Trust Rating",
    description:
      "Get a clear, auditable score from 0–100 with a detailed breakdown, so your team knows exactly where to invest confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>How it works</p>
          <h2 className={styles.title}>
            A rating you can act on — in three steps.
          </h2>
          <p className={styles.subtitle}>
            From raw data to an auditable trust score in minutes, not months.
          </p>
        </div>
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              {i < steps.length - 1 && <div className={styles.connector} />}
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
