"use client";

import { useState } from "react";
import { useFunnel } from "./FunnelContext";
import { FunnelNav } from "./FunnelNav";

const PLZ_REGEX = /^[0-9]{5}$/;

export function StepPlz() {
  const { form, setForm, nextStep } = useFunnel();
  const [value, setValue] = useState(form.plz);
  const [touched, setTouched] = useState(false);

  const normalized = value.replace(/\s/g, "");
  const isValid = PLZ_REGEX.test(normalized);
  const showError = touched && value.length > 0 && !isValid;

  const handleNext = () => {
    setTouched(true);
    if (!isValid) return;
    setForm({ plz: normalized });
    nextStep();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, "").slice(0, 5);
    setValue(v);
  };

  return (
    <section className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
        In welcher Region wohnst du?
      </h1>
      <p className="mt-2 text-dark-slate/80">
        Postleitzahl eingeben – so finden wir passende Anbieter in deiner Nähe.
      </p>
      <div className="mt-8">
        <label htmlFor="plz" className="sr-only">
          Postleitzahl
        </label>
        <input
          id="plz"
          type="text"
          inputMode="numeric"
          value={value}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          placeholder="12345"
          className="w-full min-h-[56px] rounded-xl border-2 border-dark-slate/15 bg-white px-4 py-3 text-lg placeholder:text-dark-slate/40 focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:ring-offset-2"
          autoComplete="postal-code"
        />
        {showError && (
          <p className="mt-2 text-sm text-red-600">
            Bitte eine gültige 5-stellige Postleitzahl eingeben.
          </p>
        )}
      </div>
      <FunnelNav onNext={handleNext} nextDisabled={value.length !== 5} />
    </section>
  );
}
