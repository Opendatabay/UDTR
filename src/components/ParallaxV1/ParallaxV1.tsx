"use client";
import { useEffect, useRef } from "react";
import styles from "./ParallaxV1.module.css";

export default function ParallaxV1() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress = -rect.top;
      const vh = window.innerHeight;

      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${progress * 0.35}px)`;
      }

      // move the whole content block together at parallax rate
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${progress * 0.12}px)`;
      }

      // 0 when section just entering viewport bottom, 1 when section top hits viewport top
      const enterProgress = Math.max(0, Math.min(1, 1 - rect.top / vh));

      // scale only, no independent translateY so UDTR never drifts into the subtitle
      const scale = 0.8 + enterProgress * 0.2;
      if (textRef.current) {
        textRef.current.style.transform = `scale(${scale})`;
      }

      // subtitle rises up from 20vh below into its resting position
      const subOffset = (1 - enterProgress) * vh * 0.2;
      if (subRef.current) {
        subRef.current.style.transform = `translateY(${subOffset}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div ref={bgRef} className={styles.bg} />
      <div ref={contentRef} className={styles.content}>
        <div ref={textRef} className={styles.udtr}>UDTR</div>
        <p ref={subRef} className={styles.sub}>Universal Data Trust Rating</p>
      </div>
      <span className={styles.label}>01, GRID</span>
    </section>
  );
}
