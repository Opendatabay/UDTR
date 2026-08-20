import styles from "./WhyItMatters.module.css";

export default function WhyItMatters() {
  return (
    <section className={styles.section} id="why-it-matters">
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>Why it matters</p>
          <h2 className={styles.headline}>
            Bad data costs more than
            <br />
            you think
          </h2>
        </div>
        <div className={styles.right}>
          <p className={styles.body}>
            Every decision built on unverified data carries hidden risk. Missed
            signals, stale sources, and undocumented provenance erode the
            confidence your team needs to act fast and act right
          </p>
          <p className={styles.body}>
            UDTR gives every data source a score your organisation can stand
            behind,  auditable, consistent, and built on a universal standard
            that travels across teams, tools, and borders
          </p>
          <div className={styles.rule} />
          <p className={styles.closing}>
            One number,  total clarity
          </p>
        </div>
      </div>
      <span className={styles.label}>[WHY IT MATTERS]</span>
    </section>
  );
}
