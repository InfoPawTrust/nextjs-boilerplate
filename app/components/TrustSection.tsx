const trustItems = [
  {
    title: "Kostenlos",
    description: "Die Nutzung ist für dich kostenfrei.",
    icon: "wallet",
  },
  {
    title: "Unverbindlich",
    description: "Du entscheidest selbst, ob du ein Angebot annimmst.",
    icon: "hand",
  },
  {
    title: "Digitaler Prozess",
    description: "Alles online – schnell und unkompliziert.",
    icon: "device",
  },
  {
    title: "Schnell",
    description: "In wenigen Minuten zum Vergleich.",
    icon: "lightning",
  },
];

const trustIcons: Record<string, React.ReactNode> = {
  wallet: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  hand: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>
  ),
  device: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  lightning: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

export function TrustSection() {
  return (
    <section
      className="bg-off-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ title, description, icon }) => (
            <article
              key={title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-dark-slate/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-soft-teal/15 text-soft-teal">
                {trustIcons[icon]}
              </div>
              <h3 className="mt-4 text-base font-semibold text-deep-trust-blue">
                {title}
              </h3>
              <p className="mt-2 text-sm text-dark-slate/80">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
