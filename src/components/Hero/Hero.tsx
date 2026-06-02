import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section} id="get-started">
      <div className={styles.container}>
        <div className={styles.badge}>Universal Data Trust Rating</div>
        <h1 className={styles.headline}>
          Know exactly how much to
          <br />
          <span className={styles.accent}>trust your data.</span>
        </h1>
        <p className={styles.subtext}>
          UDTR provides a universal standard for rating the trustworthiness of
          data sources — so organisations can make confident, data-driven
          decisions without second-guessing their inputs.
        </p>
        <div className={styles.actions}>
          <a href="#how-it-works" className={styles.primaryBtn}>
            See how it works
          </a>
          <a href="#" className={styles.secondaryBtn}>
            Request a demo
          </a>
        </div>
        <div className={styles.trustBar}>
          <span className={styles.trustLabel}>Trusted by data teams at</span>
          <div className={styles.trustLogos}>
            {["Acme Corp", "DataHive", "Veridian", "Nexus Analytics"].map(
              (name) => (
                <span key={name} className={styles.trustLogo}>
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
