import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.logoMark}>
            <rect width="64" height="64" rx="14" fill="none" />
            <rect x="1.5" y="1.5" width="61" height="61" rx="12.5" fill="none" stroke="#0a0a0a" strokeWidth="2" />
            <text
              x="32" y="34"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
              fontWeight="900"
              fontSize="44"
              fill="#0a0a0a"
            >U</text>
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
