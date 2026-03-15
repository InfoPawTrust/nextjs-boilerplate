"use client";

import { useEffect, useState } from "react";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const main = document.querySelector("main");
      if (!main) return;
      const rect = main.getBoundingClientRect();
      const mainHeight = rect.height;
      if (mainHeight <= 0) {
        setProgress(0);
        return;
      }
      // Anteil des Artikels, der am oberen Viewport „vorbeigescrollt“ ist
      const readAmount =
        rect.top <= 0 ? Math.min(mainHeight, -rect.top) : 0;
      const percent = Math.min(100, Math.round((readAmount / mainHeight) * 100));
      setProgress(percent);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed left-0 right-0 top-0 z-50 h-1 bg-dark-slate/10"
      aria-hidden
    >
      <div
        className="h-full bg-warm-gold transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
