type Variant = "general" | "dog";

const content = {
  general: [
    {
      title: "Experten statt Tarif-Dschungel",
      description:
        "Unsere Experten arbeiten mit renommierten Versicherungen und helfen dir, den passenden Schutz für dein Haustier zu finden.",
      icon: "expert",
    },
    {
      title: "In wenigen Minuten zum passenden Schutz",
      description:
        "Unser digitaler Prozess führt dich schnell zu passenden Angeboten.",
      icon: "speed",
    },
    {
      title: "Kostenlos & unverbindlich",
      description: "Du entscheidest selbst, ob du ein Angebot annimmst.",
      icon: "free",
    },
    {
      title: "Tarife passend zu deinem Haustier",
      description:
        "Angebote werden auf Alter, Rasse und Bedarf deines Haustiers abgestimmt.",
      icon: "dog",
    },
  ],
  dog: [
    {
      title: "Experten statt Tarif-Dschungel",
      description:
        "Unsere Experten arbeiten mit renommierten Versicherungen und helfen dir, den passenden Schutz für deinen Hund zu finden.",
      icon: "expert",
    },
    {
      title: "In wenigen Minuten zum passenden Schutz",
      description:
        "Unser digitaler Prozess führt dich schnell zu passenden Angeboten.",
      icon: "speed",
    },
    {
      title: "Kostenlos & unverbindlich",
      description: "Du entscheidest selbst, ob du ein Angebot annimmst.",
      icon: "free",
    },
    {
      title: "Tarife passend zu deinem Hund",
      description:
        "Angebote werden auf Alter, Rasse und Bedarf deines Hundes abgestimmt.",
      icon: "dog",
    },
  ],
};

const icons: Record<string, React.ReactNode> = {
  expert: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  speed: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  free: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  dog: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

export function BenefitsSection({ variant = "general" }: { variant?: Variant }) {
  const benefits = content[variant];

  return (
    <section
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="benefits-heading"
          className="text-2xl font-bold text-deep-trust-blue sm:text-3xl"
        >
          Warum PawTrust?
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
