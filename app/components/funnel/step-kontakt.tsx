"use client";

import { useState } from "react";
import { useFunnel } from "./FunnelContext";
import { FunnelNav } from "./FunnelNav";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEFON_REGEX = /^[0-9+\s\-/]{6,20}$/;

export function StepKontakt() {
  const { form, setForm, nextStep } = useFunnel();
  const [email, setEmail] = useState(form.email);
  const [telefon, setTelefon] = useState(form.telefon);
  const [name, setName] = useState(form.name);
  const [touched, setTouched] = useState({ email: false, telefon: false });

  const emailValid = EMAIL_REGEX.test(email.trim());
  const telefonValid = telefon.trim().length >= 6 && TELEFON_REGEX.test(telefon.replace(/\s/g, ""));
  const showEmailError = touched.email && !emailValid;
  const showTelefonError = touched.telefon && !telefonValid;
  const isValid = emailValid && telefonValid;

  const handleNext = () => {
    setTouched({ email: true, telefon: true });
    if (!isValid) return;
    setForm({ email: email.trim(), telefon: telefon.trim(), name: name.trim() });
    nextStep();
  };

  return (
    <section className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
        Wie können wir dich erreichen?
      </h1>
      <p className="mt-2 text-dark-slate/80">
        Deine Daten werden nur für die Tarifanfrage genutzt und nicht an Dritte weitergegeben.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <label htmlFor="funnel-email" className="block text-sm font-medium text-dark-slate/80">
            E-Mail *
          </label>
          <input
            id="funnel-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            placeholder="deine@email.de"
            className="mt-1.5 w-full min-h-[52px] rounded-xl border-2 border-dark-slate/15 bg-white px-4 py-3 focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:ring-offset-2"
            autoComplete="email"
          />
          {showEmailError && (
            <p className="mt-1.5 text-sm text-red-600">Bitte eine gültige E-Mail-Adresse eingeben.</p>
          )}
        </div>

        <div>
          <label htmlFor="funnel-telefon" className="block text-sm font-medium text-dark-slate/80">
            Telefon *
          </label>
          <input
            id="funnel-telefon"
            type="tel"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, telefon: true }))}
            placeholder="z. B. 0171 12345678"
            className="mt-1.5 w-full min-h-[52px] rounded-xl border-2 border-dark-slate/15 bg-white px-4 py-3 focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:ring-offset-2"
            autoComplete="tel"
          />
          {showTelefonError && (
            <p className="mt-1.5 text-sm text-red-600">Bitte eine gültige Telefonnummer eingeben.</p>
          )}
        </div>

        <div>
          <label htmlFor="funnel-name" className="block text-sm font-medium text-dark-slate/80">
            Name (optional)
          </label>
          <input
            id="funnel-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Vor- und Nachname"
            className="mt-1.5 w-full min-h-[52px] rounded-xl border-2 border-dark-slate/15 bg-white px-4 py-3 focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:ring-offset-2"
            autoComplete="name"
          />
        </div>
      </div>

      <FunnelNav onNext={handleNext} nextDisabled={!email.trim() || !telefon.trim()} />
    </section>
  );
}
