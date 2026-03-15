"use client";

import { useFunnel } from "./FunnelContext";
import { FunnelNav } from "./FunnelNav";

export function StepSubmit() {
  const { form } = useFunnel();

  return (
    <section className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
        Fast geschafft!
      </h1>
      <p className="mt-2 text-dark-slate/80">
        Wir erstellen dir ein unverbindliches Angebot für {form.tiername || (form.tierart === "Katze" ? "deine Katze" : "deinen Hund")}. Du erhältst eine Übersicht passender Tarife – kostenlos und ohne Verpflichtung.
      </p>
      <FunnelNav isSubmit hideBack={false} />
    </section>
  );
}
