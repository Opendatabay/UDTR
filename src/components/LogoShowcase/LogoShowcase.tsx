import styles from "./LogoShowcase.module.css";

/* ── V1: Bold block — thick filled stroke, square caps, rounded square bg ── */
function Logo1() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <rect width="64" height="64" rx="10" fill="#0a0a0a" />
      <path
        d="M 16,13 L 16,40 A 16,16 0 0 1 48,40 L 48,13"
        fill="none"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="square"
      />
    </svg>
  );
}

/* ── V2: Circle — thin round stroke inside a circular badge ── */
function Logo2() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <circle cx="32" cy="32" r="30" fill="#0a0a0a" />
      <path
        d="M 19,13 L 19,38 A 13,13 0 0 1 45,38 L 45,13"
        fill="none"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── V3: Nodes — thin U stroke with data-node dots at the two openings ── */
function Logo3() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <rect width="64" height="64" rx="10" fill="#0a0a0a" />
      <path
        d="M 21,20 L 21,40 A 11,11 0 0 1 43,40 L 43,20"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="butt"
      />
      {/* endpoint nodes */}
      <circle cx="21" cy="14" r="5.5" fill="white" />
      <circle cx="43" cy="14" r="5.5" fill="white" />
      {/* base node */}
      <circle cx="32" cy="51" r="3" fill="white" fillOpacity="0.45" />
      {/* connecting lines from top nodes down */}
      <line x1="21" y1="19" x2="21" y2="20" stroke="white" strokeWidth="2.5" />
      <line x1="43" y1="19" x2="43" y2="20" stroke="white" strokeWidth="2.5" />
    </svg>
  );
}

/* ── V4: Sharp — geometric filled U, all hard corners, no curves ── */
function Logo4() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <rect width="64" height="64" fill="#0a0a0a" />
      {/*
        Outer U outline (clockwise):
        Top-left → down left leg → across bottom → up right leg → top-right
        Then cut back along inner path
      */}
      <path
        d="M 10,8 L 10,48 L 20,58 L 44,58 L 54,48 L 54,8 L 43,8 L 43,46 L 37,53 L 27,53 L 21,46 L 21,8 Z"
        fill="white"
      />
    </svg>
  );
}

/* ── V5: Double — two concentric U strokes suggesting depth/layers ── */
function Logo5() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <rect width="64" height="64" rx="10" fill="#0a0a0a" />
      {/* outer U — faint */}
      <path
        d="M 10,10 L 10,40 A 22,22 0 0 1 54,40 L 54,10"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeOpacity="0.25"
      />
      {/* inner U — solid */}
      <path
        d="M 19,14 L 19,40 A 13,13 0 0 1 45,40 L 45,14"
        fill="none"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const LOGOS = [
  { id: "01", name: "BLOCK", element: <Logo1 /> },
  { id: "02", name: "CIRCLE", element: <Logo2 /> },
  { id: "03", name: "NODES", element: <Logo3 /> },
  { id: "04", name: "SHARP", element: <Logo4 /> },
  { id: "05", name: "DOUBLE", element: <Logo5 /> },
];

export default function LogoShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Select a logo</p>
        <div className={styles.grid}>
          {LOGOS.map(({ id, name, element }) => (
            <div key={id} className={styles.card}>
              <div className={styles.preview}>{element}</div>
              <div className={styles.previewSmall}>{element}</div>
              <p className={styles.cardLabel}>
                <span className={styles.cardId}>{id}</span> {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
