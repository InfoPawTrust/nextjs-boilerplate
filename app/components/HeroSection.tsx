import Image from "next/image";
import Link from "next/link";

const benefitBullets = [
  "💰 Bis zu 100 % Kostenübernahme",
  "🐾 Freie Tierarztwahl",
  "🩺 Schutz bei Operationen & Krankheiten",
  "👨‍⚕️ Angebote von Experten renommierter Versicherungen",
];

const trustStatements = [
  "🐶 Schutz für deinen Liebling",
  "⭐ Top Tarife für Hundekrankenversicherung",
  "❤️ Bis zu 100 % Kostenübernahme",
];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h1
              id="hero-heading"
              className="text-3xl font-bold tracking-tight text-deep-trust-blue sm:text-4xl lg:text-5xl"
            >
              Schütze deinen Hund vor hohen Tierarztkosten.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-dark-slate/90">
              Vergleiche Hundekrankenversicherungen mit bis zu 100 %
              Kostenübernahme, freier Tierarztwahl und umfassendem Schutz.
            </p>
            <ul className="mt-6 space-y-2" aria-label="Vorteile">
              {benefitBullets.map((line) => (
                <li key={line} className="flex items-center gap-2 text-base text-dark-slate/90">
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-start gap-4">
              <Link
                href="/hundekrankenversicherung#vergleich"
                className="inline-flex items-center justify-center rounded-lg bg-warm-gold px-6 py-3.5 text-base font-semibold text-deep-trust-blue shadow-md transition-colors hover:bg-warm-gold/90 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2"
              >
                Kostenlosen Tarifvergleich anfordern
              </Link>
              <p className="text-sm text-dark-slate/70">
                Kostenlos & unverbindlich
              </p>
            </div>
          </div>
          <div className="relative flex flex-col justify-center gap-4 lg:justify-end">
            <div className="flex flex-wrap gap-3 text-sm text-dark-slate/70">
              {trustStatements.map((line) => (
                <span
                  key={line}
                  className="rounded-full bg-off-white px-3 py-1.5 ring-1 ring-dark-slate/5"
                >
                  {line}
                </span>
              ))}
            </div>
            <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-off-white shadow-lg ring-1 ring-dark-slate/5">
              <Image
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80"
                alt="Hund – gut versichert mit der passenden Hundekrankenversicherung"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,  min(600px, 50vw)"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
