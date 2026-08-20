'use client';

import styles from './examples.module.css';

const ModernGeometricLogo = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.logoMark}>
    <circle cx="32" cy="32" r="28" fill="none" stroke="#0a0a0a" strokeWidth="2" />
    <circle cx="32" cy="32" r="20" fill="none" stroke="#0a0a0a" strokeWidth="2" />
    <circle cx="32" cy="32" r="12" fill="#0a0a0a" />
  </svg>
);

export default function ExamplesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Navbar Variations</h1>
        <p>5 different navbar design approaches using the Modern Geometric logo</p>
      </div>

      {/* Version 1: Minimal Clean */}
      <section className={styles.section}>
        <h2>Version 1: Minimal Clean</h2>
        <div className={styles.preview}>
          <header className={styles.navbarMinimal}>
            <nav className={styles.navMinimal}>
              <a href="#" className={styles.logo}>
                <ModernGeometricLogo />
                <span className={styles.logoText}>UDTR</span>
              </a>
              <ul className={styles.linksMinimal}>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#why-it-matters">Why it matters</a></li>
                <li><a href="#data-modalities">Data modalities</a></li>
                <li><a href="#get-started" className={styles.ctaLink}>Get started</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>

      {/* Version 2: Bold Accent */}
      <section className={styles.section}>
        <h2>Version 2: Bold Accent</h2>
        <div className={styles.preview}>
          <header className={styles.navbarBold}>
            <nav className={styles.navBold}>
              <a href="#" className={styles.logo}>
                <ModernGeometricLogo />
                <span className={styles.logoTextBold}>UDTR</span>
              </a>
              <ul className={styles.linksBold}>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#why-it-matters">Why it matters</a></li>
                <li><a href="#data-modalities">Data modalities</a></li>
                <li><a href="#get-started" className={styles.ctaLinkBold}>Get started</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>

      {/* Version 3: Compact Dense */}
      <section className={styles.section}>
        <h2>Version 3: Compact Dense</h2>
        <div className={styles.preview}>
          <header className={styles.navbarCompact}>
            <nav className={styles.navCompact}>
              <a href="#" className={styles.logo}>
                <ModernGeometricLogo />
                <span className={styles.logoText}>UDTR</span>
              </a>
              <ul className={styles.linksCompact}>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#why-it-matters">Why it matters</a></li>
                <li><a href="#data-modalities">Data modalities</a></li>
                <li><a href="#get-started" className={styles.ctaLink}>Get started</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>

      {/* Version 4: Gradient Background */}
      <section className={styles.section}>
        <h2>Version 4: Gradient Background</h2>
        <div className={styles.preview}>
          <header className={styles.navbarGradient}>
            <nav className={styles.navGradient}>
              <a href="#" className={styles.logoGradient}>
                <ModernGeometricLogo />
                <span className={styles.logoTextGradient}>UDTR</span>
              </a>
              <ul className={styles.linksGradient}>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#why-it-matters">Why it matters</a></li>
                <li><a href="#data-modalities">Data modalities</a></li>
                <li><a href="#get-started" className={styles.ctaLinkGradient}>Get started</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>

      {/* Version 5: Dark Mode */}
      <section className={styles.section}>
        <h2>Version 5: Dark Mode</h2>
        <div className={styles.preview}>
          <header className={styles.navbarDark}>
            <nav className={styles.navDark}>
              <a href="#" className={styles.logoDark}>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.logoMark}>
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="32" cy="32" r="20" fill="none" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="32" cy="32" r="12" fill="#ffffff" />
                </svg>
                <span className={styles.logoTextDark}>UDTR</span>
              </a>
              <ul className={styles.linksDark}>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#why-it-matters">Why it matters</a></li>
                <li><a href="#data-modalities">Data modalities</a></li>
                <li><a href="#get-started" className={styles.ctaLinkDark}>Get started</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>

      {/* Carousel Variations */}
      <div style={{ marginTop: '5rem', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Carousel Variations</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>Swipe through all 10 carousel designs</p>
      </div>

      {/* Carousel Stack Container */}
      <div className={styles.carouselStack}>
        {/* Carousel 1: Horizontal Ticker */}
        <section className={styles.stackItem} style={{ position: 'relative' }}>
          <h2>Carousel 1: Horizontal Ticker</h2>
          <div className={styles.carouselPreview}>
          <div className={styles.carousel1}>
            <div className={styles.ticker1}>
              {[1, 2].map(i => (
                <div key={i} className={styles.tickerTrack1}>
                  {['AI Teams', 'Researchers', 'Enterprise', 'Data Scientists', 'Government Bodies', 'Healthcare Orgs', 'Financial Institutions', 'Startups'].map(name => (
                    <span key={name} className={styles.item1}>{name}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
