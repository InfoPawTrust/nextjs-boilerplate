const values = [
  {
    emoji: "🐶",
    title: "Verantwortung für deinen Hund",
    text: "Für viele Menschen ist ihr Hund ein Familienmitglied. Deshalb glauben wir, dass jeder Hund den bestmöglichen Schutz verdient – und dass Hundebesitzer einfache Wege brauchen, diesen Schutz zu finden.",
  },
  {
    emoji: "🔍",
    title: "Transparenz statt Tarif-Dschungel",
    text: "Versicherungen können kompliziert sein. PawTrust hat das Ziel, Angebote verständlich aufzubereiten, Unterschiede sichtbar zu machen und dir eine klare Entscheidungsgrundlage zu geben.",
  },
  {
    emoji: "🛡️",
    title: "Vertrauen und Sicherheit",
    text: "Bei Versicherungen geht es um Vertrauen. Deshalb legen wir großen Wert auf seriöse Partner, nachvollziehbare Informationen und einen transparenten Vergleich.",
  },
];

export function AboutPawTrustSection() {
  return (
    <section
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      aria-labelledby="about-pawtrust-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="about-pawtrust-heading"
          className="text-center text-2xl font-bold text-deep-trust-blue sm:text-3xl"
        >
          Über PawTrust
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-dark-slate/90">
          PawTrust hilft Hundebesitzerinnen und Hundebesitzern dabei, schnell und
          unkompliziert passende Hundekrankenversicherungen zu finden. Unser Ziel
          ist es, den Vergleich verschiedener Tarife einfach, transparent und
          verständlich zu machen – damit du die beste Entscheidung für deinen
          Vierbeiner treffen kannst.
        </p>

        <div className="mt-12 grid gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
              Unsere Mission
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
              Wir möchten Hundebesitzern dabei helfen, ihre Tiere bestmöglich
              abzusichern, ohne sich durch unübersichtliche Tarife und
              komplizierte Versicherungsbedingungen kämpfen zu müssen. PawTrust
              macht den Vergleich einfach, verständlich und schnell – damit du
              dich auf das konzentrieren kannst, was wirklich zählt: das Wohl
              deines Hundes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
              Unsere Vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
              Unsere Vision ist eine Welt, in der sich kein Hundebesitzer
              zwischen der Gesundheit seines Tieres und hohen Tierarztkosten
              entscheiden muss. PawTrust möchte langfristig die erste Anlaufstelle
              für Hundebesitzer werden, wenn es um transparente und
              verständliche Versicherungsvergleiche geht.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ emoji, title, text }) => (
            <article
              key={title}
              className="rounded-2xl bg-off-white/80 p-6 shadow-sm ring-1 ring-dark-slate/5 sm:p-7"
            >
              <span className="text-3xl" role="img" aria-hidden>
                {emoji}
              </span>
              <h4 className="mt-4 text-base font-semibold text-warm-gold sm:text-lg">
                {title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
