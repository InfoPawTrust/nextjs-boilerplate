"use client";

import Link from "next/link";
import { useFunnel } from "./FunnelContext";
import { FunnelNav } from "./FunnelNav";

export function StepConsent() {
  const { form, setForm, nextStep } = useFunnel();
  const handleNext = () => {
    if (form.consent) nextStep();
  };

  return (
    <section className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
        Noch ein letzter Schritt
      </h1>
      <p className="mt-2 text-dark-slate/80">
        Bitte bestätige, dass du mit der Verarbeitung deiner Daten einverstanden bist.
      </p>

      <div className="mt-8">
        <label className="flex min-h-[56px] cursor-pointer items-start gap-3 rounded-xl border-2 border-dark-slate/15 bg-white p-4 transition-colors has-[:checked]:border-warm-gold has-[:checked]:bg-warm-gold/5">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm({ consent: e.target.checked })}
            className="mt-1 h-5 w-5 rounded border-dark-slate/30 text-warm-gold focus:ring-warm-gold"
          />
          <span className="text-sm text-dark-slate/90">
            Ich habe die{" "}
            <Link
              href="/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-deep-trust-blue underline hover:no-underline"
              aria-label="Datenschutzerklärung (öffnet in neuem Tab)"
            >
              Datenschutzerklärung
            </Link>{" "}
            gelesen und bin einverstanden, dass meine Angaben zur Kontaktaufnahme und zur Erstellung eines unverbindlichen Angebots verarbeitet und an ausgewählte Versicherungspartner weitergeleitet werden können. *
          </span>
        </label>
        {!form.consent && (
          <p className="mt-2 text-sm text-dark-slate/60">
            Bitte akzeptiere die Datenschutzerklärung, um fortzufahren.
          </p>
        )}
      </div>

      <FunnelNav
        onNext={handleNext}
        nextDisabled={!form.consent}
        nextLabel="Weiter zum Tarifvergleich"
      />
    </section>
  );
}
