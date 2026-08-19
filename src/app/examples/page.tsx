'use client';

import styles from './examples.module.css';

export default function ExamplesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Navbar Variations</h1>
        <p>5 different navbar designs based on the current UDTR theme</p>
      </div>

      {/* Version 1: Modern Geometric */}
      <section className={styles.section}>
        <h2>Version 1: Modern Geometric</h2>
        <div className={styles.preview}>
          <header className={styles.header1}>
            <nav className={styles.nav}>
              <a href="#" className={styles.logo}>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.logoMark}>
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#0a0a0a" strokeWidth="2" />
                  <circle cx="32" cy="32" r="20" fill="none" stroke="#0a0a0a" strokeWidth="2" />
                  <circle cx="32" cy="32" r="12" fill="#0a0a0a" />
                </svg>
                <span className={styles.logoText}>UDTR</span>
              </a>
              <ul className={styles.links}>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#why-it-matters">Why it matters</a></li>
                <li><a href="#data-modalities">Data modalities</a></li>
                <li><a href="#get-started" className={styles.ctaLink}>Get started</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>

      {/* Version 2: Minimalist Lines */}
      <section className={styles.section}>
        <h2>Version 2: Minimalist Lines</h2>
        <div className={styles.preview}>
          <header className={styles.header2}>
            <nav className={styles.nav}>
              <a href="#" className={styles.logo}>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.logoMark}>
                  <line x1="16" y1="20" x2="48" y2="20" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
                  <line x1="16" y1="32" x2="48" y2="32" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
                  <line x1="16" y1="44" x2="48" y2="44" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <span className={styles.logoText}>UDTR</span>
              </a>
              <ul className={styles.links}>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#why-it-matters">Why it matters</a></li>
                <li><a href="#data-modalities">Data modalities</a></li>
                <li><a href="#get-started" className={styles.ctaLink}>Get started</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>

      {/* Version 3: Gradient Orb */}
      <section className={styles.section}>
        <h2>Version 3: Gradient Orb</h2>
        <div className={styles.preview}>
          <header className={styles.header3}>
            <nav className={styles.nav}>
              <a href="#" className={styles.logo}>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.logoMark}>
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#2a2a2a', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#0a0a0a', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="26" fill="url(#grad1)" />
                  <circle cx="24" cy="24" r="6" fill="rgba(255,255,255,0.4)" />
                </svg>
                <span className={styles.logoText}>UDTR</span>
              </a>
              <ul className={styles.links}>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#why-it-matters">Why it matters</a></li>
                <li><a href="#data-modalities">Data modalities</a></li>
                <li><a href="#get-started" className={styles.ctaLink}>Get started</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>

      {/* Version 4: Abstract Layers */}
      <section className={styles.section}>
        <h2>Version 4: Abstract Layers</h2>
        <div className={styles.preview}>
          <header className={styles.header4}>
            <nav className={styles.nav}>
              <a href="#" className={styles.logo}>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.logoMark}>
                  <path d="M 12 32 Q 32 16 52 32 Q 32 48 12 32" fill="none" stroke="#0a0a0a" strokeWidth="2.5" />
                  <path d="M 16 32 Q 32 22 48 32 Q 32 42 16 32" fill="none" stroke="#0a0a0a" strokeWidth="2.5" />
                  <circle cx="32" cy="32" r="3" fill="#0a0a0a" />
                </svg>
                <span className={styles.logoText}>UDTR</span>
              </a>
              <ul className={styles.links}>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#why-it-matters">Why it matters</a></li>
                <li><a href="#data-modalities">Data modalities</a></li>
                <li><a href="#get-started" className={styles.ctaLink}>Get started</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>

      {/* Version 5: Hexagon */}
      <section className={styles.section}>
        <h2>Version 5: Hexagon</h2>
        <div className={styles.preview}>
          <header className={styles.header5}>
            <nav className={styles.nav}>
              <a href="#" className={styles.logo}>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.logoMark}>
                  <polygon points="32,10 50,19 50,45 32,54 14,45 14,19" fill="none" stroke="#0a0a0a" strokeWidth="2" />
                  <circle cx="32" cy="32" r="8" fill="#0a0a0a" />
                </svg>
                <span className={styles.logoText}>UDTR</span>
              </a>
              <ul className={styles.links}>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#why-it-matters">Why it matters</a></li>
                <li><a href="#data-modalities">Data modalities</a></li>
                <li><a href="#get-started" className={styles.ctaLink}>Get started</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>
    </div>
  );
}
