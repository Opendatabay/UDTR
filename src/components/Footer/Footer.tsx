import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>U</span>
          <span className={styles.logoText}>UDTR</span>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} UDTR. Universal Data Trust Rating.
        </p>
      </div>
    </footer>
  );
}
