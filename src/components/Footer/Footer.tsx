import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2>Ready to trust your data?</h2>
            <p>Get started with UDTR today</p>
          </div>
          <button className={styles.ctaButton}>Get Started</button>
        </div>

        <div className={styles.grid}>
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#security">Security</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#docs">Docs</a>
            <a href="#api">API</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} UDTR, Inc. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
