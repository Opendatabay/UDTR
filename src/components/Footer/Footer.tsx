import styles from "./Footer.module.css";

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.logoMark}>
            <rect width="64" height="64" rx="14" fill="white" />
            <rect x="1.5" y="1.5" width="61" height="61" rx="12.5" fill="none" stroke="#0a0a0a" strokeWidth="2" />
            <text
              x="32" y="34"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily={FONT}
              fontWeight="900"
              fontSize="44"
              fill="#0a0a0a"
            >U</text>
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
