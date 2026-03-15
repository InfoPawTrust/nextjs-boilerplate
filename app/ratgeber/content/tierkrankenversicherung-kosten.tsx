import { ArticleMidCTA } from "../components/ArticleMidCTA";

function Table({
  headers,
  rows,
}: {
  headers: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-dark-slate/10">
      <table className="w-full min-w-[280px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-dark-slate/10 bg-dark-slate/5">
            <th className="px-4 py-3 font-semibold text-deep-trust-blue">
              {headers[0]}
            </th>
            <th className="px-4 py-3 font-semibold text-deep-trust-blue">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-dark-slate/5 last:border-0"
            >
              <td className="px-4 py-3 text-dark-slate/90">{row[0]}</td>
              <td className="px-4 py-3 text-dark-slate/90">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TierkrankenversicherungKostenContent() {
  return (
    <div className="article-prose">
      <p className="lead text-lg leading-relaxed text-dark-slate/90">
        Tierarztkosten können schnell mehrere hundert oder sogar mehrere
        tausend Euro betragen. Viele Tierhalter fragen sich deshalb früher
        oder später: Lohnt sich eine Tierkrankenversicherung für meinen Hund
        oder meine Katze?
      </p>
      <p className="mt-4 text-dark-slate/90">
        <strong>Die kurze Antwort:</strong> In vielen Fällen ja – vor allem
        bei Operationen oder längeren Behandlungen.
      </p>
      <p className="mt-4 text-dark-slate/90">
        In diesem Ratgeber erfährst du:
      </p>
      <ul className="mt-3 list-inside list-disc space-y-1 text-dark-slate/90">
        <li>welche Kosten eine Tierkrankenversicherung hat</li>
        <li>wovon der Beitrag abhängt</li>
        <li>wann sich eine Versicherung wirklich lohnt</li>
        <li>worauf du bei der Auswahl achten solltest</li>
      </ul>

      <h2 className="mt-12 text-xl font-bold text-deep-trust-blue sm:text-2xl">
        💰 Wie teuer ist eine Tierkrankenversicherung?
      </h2>
      <p className="mt-4 text-dark-slate/90">
        Die monatlichen Beiträge hängen von mehreren Faktoren ab. Typische
        Preise:
      </p>
      <Table
        headers={["Tier", "Monatlicher Beitrag"]}
        rows={[
          ["Katze", "ca. 15–35 €"],
          ["Hund", "ca. 20–60 €"],
        ]}
      />
      <p className="mt-4 text-dark-slate/90">
        Der genaue Preis hängt vor allem von folgenden Punkten ab:
      </p>
      <ul className="mt-3 list-inside list-disc space-y-1 text-dark-slate/90">
        <li>Alter des Tieres</li>
        <li>Rasse</li>
        <li>gewünschter Leistungsumfang</li>
        <li>Höhe der Selbstbeteiligung</li>
      </ul>
      <p className="mt-4 text-dark-slate/90">
        Je umfassender der Schutz, desto höher ist meist der Beitrag.
      </p>

      <h2 className="mt-12 text-xl font-bold text-deep-trust-blue sm:text-2xl">
        🩺 Warum Tierarztkosten so schnell teuer werden
      </h2>
      <p className="mt-4 text-dark-slate/90">
        Viele Tierhalter unterschätzen, wie schnell Tierarztkosten steigen
        können. Einige typische Beispiele:
      </p>
      <Table
        headers={["Behandlung", "Kosten"]}
        rows={[
          ["Kreuzband-OP beim Hund", "2.500–4.500 €"],
          ["Bandscheiben-OP", "bis zu 5.000 €"],
          ["MRT-Untersuchung", "400–1.200 €"],
          ["stationäre Behandlung", "mehrere hundert Euro"],
        ]}
      />
      <p className="mt-4 text-dark-slate/90">
        Gerade bei Operationen kann eine Versicherung daher schnell mehrere
        tausend Euro sparen.
      </p>

      <h2 className="mt-12 text-xl font-bold text-deep-trust-blue sm:text-2xl">
        🐶 Hund vs. 🐱 Katze – Unterschiede bei den Kosten
      </h2>
      <p className="mt-4 text-dark-slate/90">
        Hunde sind im Durchschnitt etwas teurer zu versichern als Katzen. Das
        liegt unter anderem daran, dass:
      </p>
      <ul className="mt-3 list-inside list-disc space-y-1 text-dark-slate/90">
        <li>Operationen häufiger vorkommen</li>
        <li>größere Tiere oft höhere Behandlungskosten verursachen</li>
        <li>einige Hunderassen ein erhöhtes Risiko für bestimmte Erkrankungen haben</li>
      </ul>
      <p className="mt-4 text-dark-slate/90">
        Katzen dagegen verursachen häufiger Kosten durch:
      </p>
      <ul className="mt-3 list-inside list-disc space-y-1 text-dark-slate/90">
        <li>Zahnbehandlungen</li>
        <li>chronische Erkrankungen</li>
        <li>Verletzungen bei Freigängern</li>
      </ul>

      <h2 className="mt-12 text-xl font-bold text-deep-trust-blue sm:text-2xl">
        🛡️ Welche Leistungen übernehmen Tierkrankenversicherungen?
      </h2>
      <p className="mt-4 text-dark-slate/90">
        Je nach Tarif können Versicherungen zum Beispiel übernehmen:
      </p>
      <ul className="mt-3 list-inside list-disc space-y-1 text-dark-slate/90">
        <li>Operationen</li>
        <li>Diagnostik (Röntgen, MRT, Ultraschall)</li>
        <li>Medikamente</li>
        <li>stationäre Behandlungen</li>
        <li>Nachsorge und Therapien</li>
      </ul>
      <p className="mt-4 text-dark-slate/90">
        Viele Tarife übernehmen bis zu 100 % der Tierarztkosten.
      </p>

      <h2 className="mt-12 text-xl font-bold text-deep-trust-blue sm:text-2xl">
        📊 Vollversicherung oder OP-Versicherung?
      </h2>
      <p className="mt-4 text-dark-slate/90">
        Es gibt zwei Hauptarten von Versicherungen.
      </p>
      <p className="mt-4 text-dark-slate/90">
        <strong>OP-Versicherung</strong>
      </p>
      <ul className="mt-2 list-inside list-disc space-y-1 text-dark-slate/90">
        <li>deckt nur Operationen</li>
        <li>deutlich günstiger</li>
        <li>sinnvoll bei begrenztem Budget</li>
      </ul>
      <p className="mt-4 text-dark-slate/90">
        <strong>Vollversicherung</strong>
      </p>
      <ul className="mt-2 list-inside list-disc space-y-1 text-dark-slate/90">
        <li>übernimmt auch Diagnostik und Behandlungen</li>
        <li>umfassender Schutz</li>
        <li>höhere monatliche Beiträge</li>
      </ul>
      <p className="mt-4 text-dark-slate/90">
        Welche Variante sinnvoll ist, hängt stark von deinem Tier und deinem
        Budget ab.
      </p>

      <ArticleMidCTA
        title="Finde passende Tierkrankenversicherungen"
        text="Vergleiche Tarife für Hunde und Katzen und finde heraus, welcher Schutz zu deinem Tier passt."
        buttonLabel="Kostenlosen Tarifvergleich anfordern"
        href="/funnel"
      />

      <h2 className="mt-12 text-xl font-bold text-deep-trust-blue sm:text-2xl">
        🐾 Wann lohnt sich eine Tierkrankenversicherung?
      </h2>
      <p className="mt-4 text-dark-slate/90">
        Eine Versicherung lohnt sich besonders, wenn:
      </p>
      <ul className="mt-3 list-inside list-disc space-y-1 text-dark-slate/90">
        <li>dein Tier noch jung ist</li>
        <li>du unerwartete hohe Kosten vermeiden möchtest</li>
        <li>dein Tier einer risikoreicheren Rasse angehört</li>
      </ul>
      <p className="mt-4 text-dark-slate/90">
        Viele Tierhalter entscheiden sich vor allem wegen der hohen Kosten von
        Operationen für eine Versicherung.
      </p>

      <h2 className="mt-12 text-xl font-bold text-deep-trust-blue sm:text-2xl">
        🔍 Wie findet man die passende Tierkrankenversicherung?
      </h2>
      <p className="mt-4 text-dark-slate/90">
        Der Markt für Tierkrankenversicherungen ist inzwischen sehr groß. Die
        Unterschiede liegen vor allem bei:
      </p>
      <ul className="mt-3 list-inside list-disc space-y-1 text-dark-slate/90">
        <li>Leistungsumfang</li>
        <li>Selbstbeteiligung</li>
        <li>jährlichen Höchstgrenzen</li>
        <li>Wartezeiten</li>
      </ul>
      <p className="mt-4 text-dark-slate/90">
        Deshalb lohnt es sich, verschiedene Tarife miteinander zu vergleichen.
      </p>

      <h2 className="mt-12 text-xl font-bold text-deep-trust-blue sm:text-2xl">
        🐶🐱 Tierkrankenversicherung vergleichen
      </h2>
      <p className="mt-4 text-dark-slate/90">
        Wenn du wissen möchtest, welche Versicherung zu deinem Hund oder
        deiner Katze passt, kannst du verschiedene Tarife vergleichen. Dabei
        werden unter anderem berücksichtigt:
      </p>
      <ul className="mt-3 list-inside list-disc space-y-1 text-dark-slate/90">
        <li>Alter des Tieres</li>
        <li>Rasse</li>
        <li>gewünschter Schutz</li>
      </ul>
      <p className="mt-4 text-dark-slate/90">
        👉 So erhältst du eine Übersicht über mögliche
        Versicherungsangebote und kannst anschließend entscheiden, welcher
        Tarif am besten passt.
      </p>

      <h2 className="mt-12 text-xl font-bold text-deep-trust-blue sm:text-2xl">
        Fazit
      </h2>
      <p className="mt-4 text-dark-slate/90">
        Tierarztkosten können schnell sehr hoch werden – besonders bei
        Operationen oder komplexeren Behandlungen. Eine
        Tierkrankenversicherung kann dabei helfen, finanzielle Risiken zu
        reduzieren und deinem Tier im Ernstfall die bestmögliche Behandlung
        zu ermöglichen. Ein Vergleich verschiedener Tarife hilft dabei, den
        passenden Schutz zu finden.
      </p>
    </div>
  );
}
