"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type HeroVariant = "general" | "dog";

const content = {
  general: {
    benefitBullets: [
      "💰 Bis zu 100 % Kostenübernahme",
      "🐾 Freie Tierarztwahl",
      "🩺 Schutz bei Operationen & Krankheiten",
      "🏛️ Angebote von Experten renommierter Versicherungen",
    ],
    trustStatements: [
      "🐾 Schutz für deinen Liebling",
      "⭐ Top Tarife für Tierkrankenversicherung",
      "❤️ Bis zu 100 % Kostenübernahme",
    ],
    heroTrustBullets: [
      "✓ Kostenlos & unverbindlich",
      "✓ Angebote in wenigen Minuten",
      "✓ Für viele Haustiere geeignet",
    ],
    headline: "Schütze dein Haustier vor hohen Tierarztkosten.",
    subheadline:
      "Vergleiche Tierkrankenversicherungen mit bis zu 100 % Kostenübernahme, freier Tierarztwahl und umfassendem Schutz.",
    validationError: "Bitte gib einen Namen ein.",
    imageAlt: "Haustiere – gut versichert mit der passenden Tierkrankenversicherung",
    ctaTarget: "/hundekrankenversicherung#vergleich",
  },
  dog: {
    benefitBullets: [
      "💰 Bis zu 100 % Kostenübernahme",
      "🐾 Freie Tierarztwahl",
      "🩺 Schutz bei Operationen & Krankheiten",
      "🏛️ Angebote von Experten renommierter Versicherungen",
    ],
    trustStatements: [
      "🐶 Schutz für deinen Liebling",
      "⭐ Top Tarife für Hundekrankenversicherung",
      "❤️ Bis zu 100 % Kostenübernahme",
    ],
    heroTrustBullets: [
      "✓ Kostenlos & unverbindlich",
      "✓ Angebote in wenigen Minuten",
      "✓ Für alle Hunderassen geeignet",
    ],
    headline: "Schütze deinen Hund vor hohen Tierarztkosten.",
    subheadline:
      "Vergleiche Hundekrankenversicherungen mit bis zu 100 % Kostenübernahme, freier Tierarztwahl und umfassendem Schutz.",
    validationError: "Bitte gib den Namen deines Hundes ein.",
    imageAlt: "Hunde – gut versichert mit der passenden Hundekrankenversicherung",
    ctaTarget: "/hundekrankenversicherung#vergleich",
  },
};

export function HeroSection({ variant = "general" }: { variant?: HeroVariant }) {
  const [petName, setPetName] = useState("");
  const [validationError, setValidationError] = useState("");
  const router = useRouter();
  const c = content[variant];
  const heroImageSrc = variant === "dog" ? "/hero-hunde.png" : "/hero-haustiere.png";

  function handleHeroCtaClick(e: React.MouseEvent) {
    e.preventDefault();
    const trimmed = petName.trim();
    if (!trimmed) {
      setValidationError(c.validationError);
      return;
    }
    setValidationError("");
    router.push(c.ctaTarget);
  }

  const alertBox = (
    <p
      className="inline-flex items-center gap-2 rounded-lg bg-dark-slate/10 px-3 py-1.5 text-sm font-medium text-dark-slate ring-1 ring-dark-slate/15"
      role="status"
    >
      ⚠️ Eine Operation beim Tierarzt kann schnell 3.000–4.000 € kosten!
    </p>
  );

  const headline = (
    <h1
      id="hero-heading"
      className="mt-4 text-3xl font-bold tracking-tight text-deep-trust-blue sm:text-4xl lg:text-5xl"
    >
      {c.headline}
    </h1>
  );

  const subheadline = (
    <p className="mt-5 max-w-xl text-lg text-dark-slate/90">{c.subheadline}</p>
  );

  const heroImage = (
    <div className="relative aspect-[4/3] w-full max-w-[280px] min-w-0 overflow-hidden rounded-xl mx-auto md:mx-0 md:max-w-none">
      <Image
        src={heroImageSrc}
        alt={c.imageAlt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 767px) 280px, 50vw"
        priority
      />
    </div>
  );

  const inputBlock = (
    <div className="mt-8 flex max-w-sm flex-col items-stretch gap-4">
      <label htmlFor="hero-pet-name" className="sr-only">
        Name deines Vierbeiners
      </label>
      <input
        id="hero-pet-name"
        type="text"
        value={petName}
        onChange={(e) => {
          setPetName(e.target.value);
          if (validationError) setValidationError("");
        }}
        placeholder="🐶 Wie heißt dein Vierbeiner?"
        className="w-full rounded-lg border border-dark-slate/20 bg-white px-4 py-3 text-base text-dark-slate placeholder:text-dark-slate/50 focus:border-deep-trust-blue focus:outline-none focus:ring-2 focus:ring-deep-trust-blue/20"
        aria-invalid={!!validationError}
        aria-describedby={validationError ? "hero-name-error" : undefined}
      />
      {validationError && (
        <p id="hero-name-error" className="text-sm text-red-600" role="alert">
          {validationError}
        </p>
      )}
      <button
        type="button"
        onClick={handleHeroCtaClick}
        className="w-full rounded-lg bg-gradient-to-bl from-warm-gold-light via-warm-gold to-warm-gold-dark px-6 py-3.5 text-base font-semibold text-deep-trust-blue shadow-md shadow-warm-gold-dark/30 transition-all hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2"
      >
        Kostenlosen Tarifvergleich anfordern
      </button>
      <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-dark-slate/80" aria-label="Vorteile">
        {c.heroTrustBullets.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );

  const badges = (
    <div className="flex flex-wrap gap-3 text-sm text-dark-slate/70">
      {c.trustStatements.map((line) => (
        <span
          key={line}
          className="rounded-full bg-off-white px-3 py-1.5 ring-1 ring-dark-slate/5"
        >
          {line}
        </span>
      ))}
    </div>
  );

  const benefitList = (
    <ul className="mt-6 space-y-2" aria-label="Vorteile">
      {c.benefitBullets.map((line) => (
        <li key={line} className="flex items-center gap-2 text-base text-dark-slate/90">
          {line}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      className="relative overflow-hidden bg-white px-4 pt-8 pb-12 sm:px-6 md:py-16 lg:px-8 lg:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:hidden">
          {alertBox}
          {headline}
          <div className="mt-4">{badges}</div>
          <div className="mt-4">{heroImage}</div>
          {inputBlock}
          <div className="mt-6">{benefitList}</div>
        </div>

        <div className="hidden md:grid md:grid-cols-1 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            {alertBox}
            {headline}
            {subheadline}
            {benefitList}
            {inputBlock}
          </div>
          <div className="relative flex flex-col justify-center gap-4 lg:justify-end">
            {badges}
            <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-xl">
              <Image
                src={heroImageSrc}
                alt={c.imageAlt}
                fill
                className="object-cover object-center"
                sizes="50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
