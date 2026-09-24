"use client";

import { useEffect, useRef } from "react";
import styles from "./AmbientBackground.module.scss";

// Fundo da direção B: grade de pontos, brilho no topo e uma luz que acompanha o cursor
// e acende os pontos por onde passa. Em telas de toque ou com "reduzir movimento"
// ativado, fica só a parte estática.
export const AmbientBackground = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      root.style.setProperty("--cursor-x", `${x}px`);
      root.style.setProperty("--cursor-y", `${y}px`);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      root.dataset.active = "true";
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      root.dataset.active = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={styles.root} aria-hidden="true" data-testid="ambient-background">
      <div className={styles.glow} />
      <div className={styles.dots} />
      <div className={styles.spotlight} />
      <div className={styles.dotsLit} />
    </div>
  );
};
