"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./BadgeShowcase.module.css";

const TEXT = "Universal Data Trust Rating";
const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function rnd(set: string) {
  return set[Math.floor(Math.random() * set.length)];
}

export default function BadgeShowcase() {
  const frameRef = useRef(0);
  const [, tick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      frameRef.current++;
      tick((n) => n + 1);
    }, 56); // 40ms * 1.4 = 56ms (40% slower)
    return () => clearInterval(id);
  }, []);

  const LOCK_EVERY = 3;
  const PAUSE = 14;
  const cycle = frameRef.current % (TEXT.length * LOCK_EVERY + PAUSE);
  const locked = Math.min(Math.floor(cycle / LOCK_EVERY), TEXT.length);

  const out = TEXT.split("").map((c, i) => {
    if (c === " ") return " ";
    return i < locked ? c : rnd(ALPHA);
  }).join("");

  return <div className={styles.badge}>{out}</div>;
}
