"use client";

import { useState } from "react";
import { useFunnel } from "./FunnelContext";
import { FunnelNav } from "./FunnelNav";

export function StepGewicht() {
  const { form, setForm, nextStep } = useFunnel();
  const [value, setValue] = useState(form.gewicht);
  const [touched, setTouched] = useState(false);

  const num = value.replace(",", ".");
  const parsed = parseFloat(num);
  const isValid = !Number.isNaN(parsed) && parsed > 0 && parsed < 200;
  const showError = touched && (!value.trim() || !isValid);

  const handleNext = () => {
    setTouched(true);
    if (!isValid) return;
    setForm({ gewicht: value.trim().replace(",", ".") });
    nextStep();
  };

  const tiername = form.tiername || (form.tierart === "Katze" ? "deine Katze" : "dein Hund");

  return (
    <section className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
        Wie schwer ist {tiername}?
      </h1>
      <p className="mt-2 text-dark-slate/80">
        Angabe in Kilogramm (kg).
      </p>
      <div className="mt-8">
        <label htmlFor="gewicht" className="sr-only">
          Gewicht in kg
        </label>
        <input
          id="gewicht"
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="z. B. 12,5"
          className="w-full min-h-[56px] rounded-xl border-2 border-dark-slate/15 bg-white px-4 py-3 text-lg placeholder:text-dark-slate/40 focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:ring-offset-2"
          autoComplete="off"
        />
        {showError && (
          <p className="mt-2 text-sm text-red-600">
            Bitte ein gültiges Gewicht eingeben (z. B. 5 oder 12,5).
          </p>
        )}
      </div>
      <FunnelNav onNext={handleNext} nextDisabled={!value.trim()} />
    </section>
  );
}
