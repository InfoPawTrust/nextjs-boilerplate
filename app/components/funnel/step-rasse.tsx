"use client";

import { useState } from "react";
import { useFunnel } from "./FunnelContext";
import { FunnelNav } from "./FunnelNav";

const RASSEN_HUND = [
  "Deutscher Schäferhund",
  "Golden Retriever",
  "Labrador",
  "Französische Bulldogge",
  "Australian Shepherd",
  "Dackel",
  "Jack Russell Terrier",
  "Border Collie",
  "Mischling",
  "Andere",
];

const RASSEN_KATZE = [
  "Europäisch Kurzhaar",
  "Britisch Kurzhaar",
  "Maine Coon",
  "Ragdoll",
  "Perser",
  "Siam",
  "Bengal",
  "Mischling",
  "Andere",
];

export function StepRasse() {
  const { form, setForm, nextStep } = useFunnel();
  const [otherValue, setOtherValue] = useState(
    form.rasse && ![...RASSEN_HUND, ...RASSEN_KATZE].includes(form.rasse)
      ? form.rasse
      : ""
  );

  const options = form.tierart === "Katze" ? RASSEN_KATZE : RASSEN_HUND;
  const isOther = form.rasse === "Andere";
  const isValid = form.rasse && (form.rasse !== "Andere" || otherValue.trim().length >= 2);

  const handleSelect = (value: string) => {
    setForm({ rasse: value });
    if (value !== "Andere") setOtherValue("");
  };

  const handleNext = () => {
    if (form.rasse === "Andere" && otherValue.trim()) {
      setForm({ rasse: otherValue.trim() });
    }
    if (isValid) nextStep();
  };

  return (
    <section className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
        Welche Rasse hat {form.tiername || (form.tierart === "Katze" ? "deine Katze" : "dein Hund")}?
      </h1>
      <p className="mt-2 text-dark-slate/80">
        Falls Mischling oder nicht gelistet, wähle „Mischling“ bzw. „Andere“.
      </p>
      <div className="mt-8 flex flex-col gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleSelect(option)}
            className={`min-h-[52px] rounded-xl border-2 px-6 py-3 text-left text-base font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 ${
              form.rasse === option
                ? "border-warm-gold bg-warm-gold/10 text-deep-trust-blue"
                : "border-dark-slate/15 bg-white text-dark-slate hover:border-dark-slate/30"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {isOther && (
        <div className="mt-4">
          <label htmlFor="rasse-other" className="sr-only">
            Rasse angeben
          </label>
          <input
            id="rasse-other"
            type="text"
            value={otherValue}
            onChange={(e) => setOtherValue(e.target.value)}
            placeholder="Rasse eintragen"
            className="w-full min-h-[48px] rounded-xl border-2 border-dark-slate/15 bg-white px-4 py-3 focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:ring-offset-2"
            autoComplete="off"
          />
        </div>
      )}
      <FunnelNav onNext={handleNext} nextDisabled={!isValid} />
    </section>
  );
}
