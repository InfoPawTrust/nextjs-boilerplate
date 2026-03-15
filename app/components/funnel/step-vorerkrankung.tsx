"use client";

import { useFunnel } from "./FunnelContext";
import { FunnelNav } from "./FunnelNav";

const OPTIONS = [
  { value: "nein", label: "Nein, keine bekannten Vorerkrankungen" },
  { value: "ja", label: "Ja, es gibt Vorerkrankungen" },
];

export function StepVorerkrankung() {
  const { form, setForm, nextStep } = useFunnel();
  const tiername = form.tiername || (form.tierart === "Katze" ? "das Tier" : "der Hund");

  const handleNext = () => {
    if (form.vorerkrankung) nextStep();
  };

  return (
    <section className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
        Hat {tiername} bekannte Vorerkrankungen?
      </h1>
      <p className="mt-2 text-dark-slate/80">
        Das kann die Tarifauswahl beeinflussen. Alle Angaben bleiben vertraulich.
      </p>
      <div className="mt-8 flex flex-col gap-3">
        {OPTIONS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setForm({ vorerkrankung: value })}
            className={`min-h-[56px] rounded-xl border-2 px-6 py-4 text-left text-base font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 ${
              form.vorerkrankung === value
                ? "border-warm-gold bg-warm-gold/10 text-deep-trust-blue"
                : "border-dark-slate/15 bg-white text-dark-slate hover:border-dark-slate/30"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <FunnelNav onNext={handleNext} nextDisabled={!form.vorerkrankung} />
    </section>
  );
}
