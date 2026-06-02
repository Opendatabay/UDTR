"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./HowItWorksV5.module.css";

const STEPS = [
  {
    num: "01",
    title: "AI Training Data",
    desc: "Model quality starts with data quality,  UDTR rates the provenance, labelling consistency, and representational balance of datasets before they enter your training pipeline, so you know exactly what you are teaching your models",
  },
  {
    num: "02",
    title: "Research Data",
    desc: "Academic and scientific datasets demand rigorous sourcing,  UDTR evaluates methodology transparency, peer-review lineage, and reproducibility standards, giving institutions a defensible trust score for every dataset they publish or consume",
  },
  {
    num: "03",
    title: "Commercial & Market Data",
    desc: "Financial signals, pricing feeds, and third-party market datasets carry real business risk when unverified,  UDTR applies freshness, coverage, and vendor-reliability checks to give trading and analytics teams a single auditable confidence rating",
  },
];

const LINE_TOTAL = 420; // approximate SVG path length

export default function HowItWorksV5() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (bgRef.current) bgRef.current.style.transform = `translateY(${-rect.top * 0.2}px)`;

      // 0 when section bottom enters viewport, 1 when section top reaches viewport top (stays 1 after)
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / vh));
      setLineProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add(styles.visible); }),
      { threshold: 0.25 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const dashOffset = LINE_TOTAL * (1 - lineProgress);

  return (
    <section ref={sectionRef} className={styles.section} id="data-modalities">
      <div ref={bgRef} className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Data modalities</p>
          <h2 className={styles.title}>Every kind of data,  one universal standard</h2>
        </div>
        <div className={styles.timeline}>
          {/* SVG vertical line */}
          <svg className={styles.lineSvg} viewBox="0 0 2 420" preserveAspectRatio="none">
            <line x1="1" y1="0" x2="1" y2="420" stroke="#e0e0e0" strokeWidth="2" />
            <line
              x1="1" y1="0" x2="1" y2="420"
              stroke="#0a0a0a"
              strokeWidth="2"
              strokeDasharray={LINE_TOTAL}
              strokeDashoffset={dashOffset}
            />
          </svg>
          <div className={styles.steps}>
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => { stepRefs.current[i] = el; }}
                className={styles.step}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={styles.dot} style={{ opacity: Math.min(1, Math.max(0.15, (lineProgress - i / 3) * 6)) }} />
                <div className={styles.content}>
                  <span className={styles.num}>{step.num}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className={styles.label}>DATA MODALITIES</span>
    </section>
  );
}
