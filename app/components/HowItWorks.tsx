"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    icon: "paw",
    title: "Erzähl uns kurz von deinem Hund",
    description:
      "Ein paar kurze Fragen zu Alter, Rasse und Bedarf – dauert weniger als eine Minute.",
  },
  {
    number: "2",
    icon: "search",
    title: "Wir finden passende Tarife",
    description:
      "Du wirst von einem Experten kontaktiert und erhältst eine Übersicht passender Angebote von verschiedenen Versicherungen.",
  },
  {
    number: "3",
    icon: "check",
    title: "Du entscheidest in Ruhe",
    description:
      "Vergleiche die Optionen und wähle den Schutz, der zu dir und deinem Hund passt.",
  },
];

const icons: Record<string, React.ReactNode> = {
  paw: (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  search: (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  check: (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
};

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineFillPercent, setLineFillPercent] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const lineEl = lineRef.current;
    if (!section || !lineEl) return;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Line fills earlier: 0 when section enters view, 100% when section is ~50% scrolled through
      const triggerStart = viewportHeight * 0.5;
      const scrolled = triggerStart - sectionTop;
      const scrollable = viewportHeight * 0.35 + sectionHeight * 0.5;
      const raw = Math.max(0, Math.min(1, scrolled / scrollable));
      setLineFillPercent(raw * 100);

      // Which step is active – step 2 early, step 3 a bit later
      const activationLineStep2 = viewportHeight * 0.58 + 100;
      const activationLineStep3 = viewportHeight * 0.48 + 60;
      for (let i = stepRefs.current.length - 1; i >= 0; i--) {
        const stepEl = stepRefs.current[i];
        if (stepEl) {
          const stepRect = stepEl.getBoundingClientRect();
          const stepCenter = stepRect.top + stepRect.height / 2;
          const line = i === 2 ? activationLineStep3 : activationLineStep2;
          if (stepCenter <= line) {
            setActiveStep(i);
            break;
          }
        }
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-off-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="how-it-works-heading"
          className="text-2xl font-bold text-deep-trust-blue sm:text-3xl"
        >
          In 3 einfachen Schritten zum passenden Schutz
        </h2>
        <p className="mt-3 text-dark-slate/80">
          So findest du schnell die passende Hundekrankenversicherung.
        </p>

        <div className="relative mt-12 sm:mt-16">
          {/* Vertical line (background) */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5 bg-dark-slate/15 sm:left-5"
            aria-hidden
          />
          {/* Vertical line (filled by scroll) */}
          <div
            ref={lineRef}
            className="absolute left-5 top-0 w-0.5 bg-warm-gold transition-[height] duration-300 ease-out"
            style={{ height: `${lineFillPercent}%` }}
            aria-hidden
          />

          <ul className="relative space-y-0">
            {steps.map((step, index) => {
              const isActive = activeStep >= index;
              return (
                <li
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="relative flex gap-4 pb-10 last:pb-0 sm:pb-12 sm:gap-6"
                >
                  <div className="flex w-10 shrink-0 justify-center">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "border-warm-gold bg-warm-gold text-deep-trust-blue"
                          : "border-dark-slate/20 bg-white text-dark-slate/40"
                      }`}
                    >
                      {icons[step.icon]}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                        isActive ? "text-warm-gold" : "text-dark-slate/40"
                      }`}
                    >
                      Schritt {step.number}
                    </span>
                    <h3
                      className={`mt-1 text-base font-semibold transition-colors duration-300 sm:text-lg ${
                        isActive ? "text-deep-trust-blue" : "text-dark-slate/70"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-dark-slate/80">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
