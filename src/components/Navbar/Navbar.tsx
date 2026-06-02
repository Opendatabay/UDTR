import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>U</span>
          <span className={styles.logoText}>UDTR</span>
        </a>
        <ul className={styles.links}>
          <li><a href="#how-it-works">How it works</a></li>
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
