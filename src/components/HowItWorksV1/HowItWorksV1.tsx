"use client";
import { useEffect, useRef } from "react";
import styles from "./HowItWorksV1.module.css";

const STEPS = [
  { num: "01", title: "Connect your data source", desc: "Link any data source — databases, APIs, data lakes, or third-party feeds — through our universal connector layer." },
  { num: "02", title: "Automated trust analysis", desc: "UDTR's engine evaluates provenance, completeness, consistency, and freshness across every dimension of your data." },
  { num: "03", title: "Receive your Trust Rating", desc: "Get a clear, auditable score from 0–100 with a detailed breakdown so your team knows exactly where to invest confidence." },
];

export default function HowItWorksV1() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (bgRef.current) bgRef.current.style.transform = `translateY(${-rect.top * 0.22}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add(styles.visible); }),
      { threshold: 0.15 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="how-it-works">
      <div ref={bgRef} className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>How it works</p>
          <h2 className={styles.title}>A rating you can act on, in three steps.</h2>
          <p className={styles.sub}>From raw data to an auditable trust score in minutes, not months.</p>
        </div>
        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => { stepRefs.current[i] = el; }}
              className={styles.step}
              style={{ transitionDelay: `${i * 0.16}s` }}
            >
              <span className={styles.num}>{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <span className={styles.label}>V1 / GRID</span>
    </section>
  );
}
