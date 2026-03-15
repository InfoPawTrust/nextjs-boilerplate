const benefits = [
  {
    title: "Passende Tarife statt langem Suchen",
    description: "In wenigen Minuten passende Angebote.",
    icon: "search",
  },
  {
    title: "Schnell & unkompliziert",
    description: "Vergleich in wenigen Minuten.",
    icon: "clock",
  },
  {
    title: "Kostenlos & unverbindlich",
    description: "Die Anfrage ist komplett kostenlos.",
    icon: "check",
  },
  {
    title: "Für deinen Hund gemacht",
    description: "Tarife passend zu Alter, Rasse und Bedarf.",
    icon: "paw",
  },
];

const icons: Record<string, React.ReactNode> = {
  search: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  clock: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  check: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  paw: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

export function BenefitsSection() {
  return (
    <section
      className="bg-off-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, description, icon }) => (
            <article
              key={title}
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-dark-slate/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-deep-trust-blue/10 text-deep-trust-blue">
                {icons[icon]}
              </div>
              <h3 className="mt-5 text-base font-semibold text-deep-trust-blue">
                {title}
              </h3>
              <p className="mt-3 text-sm text-dark-slate/80">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
