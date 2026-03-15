const steps = [
  {
    number: "1",
    title: "Angaben zu deinem Hund machen",
    description: "Ein paar kurze Fragen zu deinem Hund – Alter, Rasse und Bedarf.",
  },
  {
    number: "2",
    title: "Passende Versicherungsangebote erhalten",
    description: "Du erhältst eine Übersicht passender Tarife zum Vergleichen.",
  },
  {
    number: "3",
    title: "Angebote prüfen",
    description: "Vergleiche in Ruhe und wähle das passende Angebot.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="how-it-works-heading"
          className="text-2xl font-bold text-deep-trust-blue sm:text-3xl"
        >
          So funktioniert PawTrust
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {steps.map(({ number, title, description }) => (
            <article key={number} className="relative flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warm-gold/20 text-lg font-bold text-deep-trust-blue">
                {number}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-deep-trust-blue">
                {title}
              </h3>
              <p className="mt-2 text-dark-slate/80">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
