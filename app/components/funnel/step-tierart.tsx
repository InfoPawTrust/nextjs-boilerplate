"use client";

import { useFunnel } from "./FunnelContext";
import { FunnelNav } from "./FunnelNav";
import type { Tierart } from "./funnel-types";

const OPTIONS: Tierart[] = ["Hund", "Katze"];

export function StepTierart() {
  const { form, setForm, nextStep } = useFunnel();

  const handleNext = () => {
    if (form.tierart) nextStep();
  };

  return (
    <section className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
        Für welches Tier möchtest du eine Versicherung?
      </h1>
      <div className="mt-8 flex flex-col gap-3">
        {OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setForm({ tierart: option })}
            className={`min-h-[56px] rounded-xl border-2 px-6 py-4 text-left text-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 ${
              form.tierart === option
                ? "border-warm-gold bg-warm-gold/10 text-deep-trust-blue"
                : "border-dark-slate/15 bg-white text-dark-slate hover:border-dark-slate/30"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <FunnelNav onNext={handleNext} nextDisabled={!form.tierart} />
    </section>
  );
}
