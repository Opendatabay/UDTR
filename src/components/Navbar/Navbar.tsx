import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.logoMark}>
            <circle cx="32" cy="32" r="28" fill="none" stroke="#ffffff" strokeWidth="2" />
            <circle cx="32" cy="32" r="20" fill="none" stroke="#ffffff" strokeWidth="2" />
            <circle cx="32" cy="32" r="12" fill="#ffffff" />
          </svg>
          <span className={styles.logoText}>UDTR</span>
        </a>
        <ul className={styles.links}>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#why-it-matters">Why it matters</a></li>
          <li><a href="#data-modalities">Data modalities</a></li>
          <li>
            <a href="#get-started" className={styles.ctaLink}>
              Get started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
