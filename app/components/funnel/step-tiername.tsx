"use client";

import { useState } from "react";
import { useFunnel } from "./FunnelContext";
import { FunnelNav } from "./FunnelNav";

export function StepTiername() {
  const { form, setForm, nextStep } = useFunnel();
  const [value, setValue] = useState(form.tiername);
  const [touched, setTouched] = useState(false);

  const isValid = value.trim().length >= 2;
  const showError = touched && !isValid;

  const handleNext = () => {
    setTouched(true);
    if (!isValid) return;
    setForm({ tiername: value.trim() });
    nextStep();
  };

  return (
    <section className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
        Wie heißt dein {form.tierart === "Katze" ? "Kätzchen" : "Hund"}?
      </h1>
      <p className="mt-2 text-dark-slate/80">
        Wir nutzen den Namen in den nächsten Fragen.
      </p>
      <div className="mt-8">
        <label htmlFor="tiername" className="sr-only">
          Name des Tieres
        </label>
        <input
          id="tiername"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="z. B. Luna, Max"
          className="w-full min-h-[56px] rounded-xl border-2 border-dark-slate/15 bg-white px-4 py-3 text-lg placeholder:text-dark-slate/40 focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:ring-offset-2"
          autoComplete="off"
        />
        {showError && (
          <p className="mt-2 text-sm text-red-600">
            Bitte mindestens 2 Zeichen eingeben.
          </p>
        )}
      </div>
      <FunnelNav onNext={handleNext} nextDisabled={!value.trim()} />
    </section>
  );
}
