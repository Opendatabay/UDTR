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
  const [out, setOut] = useState(TEXT); // real text on server; animation starts after mount

  useEffect(() => {
    const LOCK_EVERY = 3;
    const PAUSE = 14;
    const CYCLE = TEXT.length * LOCK_EVERY + PAUSE;

    const id = setInterval(() => {
      frameRef.current++;
      const cycle = frameRef.current % CYCLE;
      const locked = Math.min(Math.floor(cycle / LOCK_EVERY), TEXT.length);
      setOut(
        TEXT.split("").map((c, i) => {
          if (c === " ") return " ";
          return i < locked ? c : rnd(ALPHA);
        }).join("")
      );
    }, 56);

    return () => clearInterval(id);
  }, []);

  return <div className={styles.badge}>{out}</div>;
}
