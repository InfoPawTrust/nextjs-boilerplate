"use client";

import { useFunnel } from "./FunnelContext";
import { FunnelNav } from "./FunnelNav";

const ALTER_OPTIONS = [
  "unter 1 Jahr",
  "1 Jahr",
  "2 Jahre",
  "3 Jahre",
  "4 Jahre",
  "5 Jahre",
  "6 Jahre",
  "7 Jahre",
  "8 Jahre",
  "9 Jahre",
  "10 Jahre und älter",
];

export function StepAlter() {
  const { form, setForm, nextStep } = useFunnel();
  const tiername = form.tiername || (form.tierart === "Katze" ? "deine Katze" : "dein Hund");

  const handleNext = () => {
    if (form.alter) nextStep();
  };

  return (
    <section className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
        Wie alt ist {tiername}?
      </h1>
      <div className="mt-8 flex flex-col gap-2">
        {ALTER_OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setForm({ alter: option })}
            className={`min-h-[52px] rounded-xl border-2 px-6 py-3 text-left text-base font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 ${
              form.alter === option
                ? "border-warm-gold bg-warm-gold/10 text-deep-trust-blue"
                : "border-dark-slate/15 bg-white text-dark-slate hover:border-dark-slate/30"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <FunnelNav onNext={handleNext} nextDisabled={!form.alter} />
    </section>
  );
}
