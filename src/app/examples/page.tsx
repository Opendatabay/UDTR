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

      {/* Footer Variations */}
      <div style={{ marginTop: '8rem', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Footer Variations</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>5 unique footer designs</p>
      </div>

      {/* Footer 1: Minimal Clean */}
      <section className={styles.section}>
        <h2>Footer 1: Minimal Clean</h2>
        <div className={styles.footerPreview}>
          <footer className={styles.footerMinimal}>
            <div className={styles.footerContent1}>
              <div className={styles.footerBrand}>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.footerLogo}>
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="32" cy="32" r="20" fill="none" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="32" cy="32" r="12" fill="#ffffff" />
                </svg>
                <span className={styles.footerBrandText}>UDTR</span>
              </div>
              <div className={styles.footerLinks1}>
                <a href="#">About</a>
                <a href="#">Docs</a>
                <a href="#">Contact</a>
                <a href="#">Privacy</a>
              </div>
              <p className={styles.footerCopy}>© 2026 UDTR</p>
            </div>
          </footer>
        </div>
      </section>

      {/* Footer 2: Multi-Column */}
      <section className={styles.section}>
        <h2>Footer 2: Multi-Column</h2>
        <div className={styles.footerPreview}>
          <footer className={styles.footerMultiCol}>
            <div className={styles.footerContent2}>
              <div className={styles.footerCol}>
                <h4>Product</h4>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Security</a>
                <a href="#">Roadmap</a>
              </div>
              <div className={styles.footerCol}>
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
              </div>
              <div className={styles.footerCol}>
                <h4>Resources</h4>
                <a href="#">Docs</a>
                <a href="#">API</a>
                <a href="#">Support</a>
                <a href="#">Community</a>
              </div>
              <div className={styles.footerCol}>
                <h4>Legal</h4>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Cookie Policy</a>
                <a href="#">License</a>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>© 2026 UDTR. All rights reserved.</p>
              <div className={styles.socialLinks}>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          </footer>
        </div>
      </section>

      {/* Footer 3: Newsletter */}
      <section className={styles.section}>
        <h2>Footer 3: Newsletter Signup</h2>
        <div className={styles.footerPreview}>
          <footer className={styles.footerNewsLetter}>
            <div className={styles.footerContent3}>
              <div className={styles.newsletterSection}>
                <h3>Stay Updated</h3>
                <p>Get the latest UDTR news and updates delivered to your inbox</p>
                <div className={styles.newsLetterForm}>
                  <input type="email" placeholder="Enter your email" />
                  <button>Subscribe</button>
                </div>
              </div>
              <div className={styles.footerDivider}></div>
              <div className={styles.footerInfo}>
                <div className={styles.footerBrandBox}>
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.footerLogo}>
                    <circle cx="32" cy="32" r="28" fill="none" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="32" cy="32" r="20" fill="none" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="32" cy="32" r="12" fill="#ffffff" />
                  </svg>
                  <span>UDTR</span>
                </div>
                <div className={styles.footerLinks3}>
                  <a href="#">Home</a>
                  <a href="#">Docs</a>
                  <a href="#">Contact</a>
                  <a href="#">Privacy</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>

      {/* Footer 4: Dark Accent */}
      <section className={styles.section}>
        <h2>Footer 4: Dark Accent</h2>
        <div className={styles.footerPreview}>
          <footer className={styles.footerDarkAccent}>
            <div className={styles.footerContent4}>
              <div className={styles.footerHeader}>
                <div>
                  <h2>Ready to trust your data?</h2>
                  <p>Get started with UDTR today</p>
                </div>
                <button className={styles.ctaButtonFooter}>Get Started</button>
              </div>
              <div className={styles.footerGrid}>
                <div>
                  <h4>Product</h4>
                  <a href="#">Features</a>
                  <a href="#">Pricing</a>
                  <a href="#">Security</a>
                </div>
                <div>
                  <h4>Company</h4>
                  <a href="#">About</a>
                  <a href="#">Blog</a>
                  <a href="#">Careers</a>
                </div>
                <div>
                  <h4>Support</h4>
                  <a href="#">Docs</a>
                  <a href="#">API</a>
                  <a href="#">Contact</a>
                </div>
              </div>
              <div className={styles.footerDivider2}></div>
              <div className={styles.footerFinance}>
                <p>© 2026 UDTR, Inc. All rights reserved.</p>
                <div className={styles.footerLegalLinks}>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">Cookie Policy</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>

      {/* Footer 5: Compact Single Row */}
      <section className={styles.section}>
        <h2>Footer 5: Compact Single Row</h2>
        <div className={styles.footerPreview}>
          <footer className={styles.footerCompact}>
            <div className={styles.footerContent5}>
              <div className={styles.footerLeft}>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.footerLogoSmall}>
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="32" cy="32" r="20" fill="none" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="32" cy="32" r="12" fill="#ffffff" />
                </svg>
                <span className={styles.compactBrand}>UDTR</span>
                <span className={styles.year}>© 2026</span>
              </div>
              <div className={styles.footerCenter}>
                <a href="#">About</a>
                <span>·</span>
                <a href="#">Docs</a>
                <span>·</span>
                <a href="#">API</a>
                <span>·</span>
                <a href="#">Status</a>
                <span>·</span>
                <a href="#">Privacy</a>
              </div>
              <div className={styles.footerRight}>
                <button className={styles.footerBtn}>Request Demo</button>
              </div>
            </div>
          </footer>
        </div>
      </section>

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
