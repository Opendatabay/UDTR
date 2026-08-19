import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.logoMark}>
            <circle cx="32" cy="32" r="28" fill="none" stroke="#ffffff" strokeWidth="2" />
            <circle cx="32" cy="32" r="20" fill="none" stroke="#ffffff" strokeWidth="2" />
            <circle cx="32" cy="32" r="12" fill="#ffffff" />
          </svg>
          <span className={styles.logoText}>UDTR</span>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} UDTR,  Universal Data Trust Rating
        </p>
      </div>
    </footer>
  );
}
