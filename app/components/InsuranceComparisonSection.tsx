const rows = [
  {
    leistung: "Operation (z. B. Bandscheibe, Kreuzband)",
    mit: "✔️ versicherbar",
    ohne: "❌ 3.000–4.500 €",
  },
  {
    leistung: "Diagnostik (Röntgen/MRT)",
    mit: "✔️ versicherbar",
    ohne: "❌ 400–1.200 €",
  },
  {
    leistung: "Medikamente",
    mit: "✔️ versicherbar",
    ohne: "❌ 50–300 €",
  },
  {
    leistung: "Stationäre Behandlung",
    mit: "✔️ versicherbar",
    ohne: "❌ 500–2.000 €",
  },
  {
    leistung: "Therapien",
    mit: "✔️ versicherbar",
    ohne: "❌ 200–1.000 €",
  },
  {
    leistung: "Nachsorge",
    mit: "✔️ versicherbar",
    ohne: "❌ zusätzliche Kosten",
  },
];

export function InsuranceComparisonSection() {
  return (
    <section
      id="vergleich"
      className="bg-off-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="comparison-heading"
          className="text-2xl font-bold text-deep-trust-blue sm:text-3xl"
        >
          Was der Tierarzt wirklich kosten kann
        </h2>
        <p className="mt-3 max-w-2xl text-dark-slate/80">
          Ein Überblick über typische Tierarztkosten mit und ohne
          Tierkrankenversicherung.
        </p>
        <div className="mt-10 w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-dark-slate/5">
          <div className="min-w-0 overflow-hidden">
            <table className="w-full min-w-0 table-fixed border-collapse text-left">
              <colgroup>
                <col className="w-[38%] sm:w-[45%]" />
                <col className="w-[31%] sm:w-[27%]" />
                <col className="w-[31%] sm:w-[28%]" />
              </colgroup>
              <thead>
                <tr className="border-b border-dark-slate/10 bg-deep-trust-blue/5">
                  <th
                    scope="col"
                    className="min-w-0 px-2 py-3 text-xs font-semibold text-deep-trust-blue sm:px-5 sm:py-4 sm:text-sm"
                  >
                    Leistung
                  </th>
                  <th
                    scope="col"
                    className="min-w-0 px-1 py-3 text-center text-xs font-semibold text-deep-trust-blue sm:px-5 sm:py-4 sm:text-sm"
                  >
                    <span className="sm:contents">🛡️ </span>
                    <span className="hidden sm:inline">Mit Versicherung</span>
                    <span className="sm:hidden">Mit Vers.</span>
                  </th>
                  <th
                    scope="col"
                    className="min-w-0 px-1 py-3 text-center text-xs font-semibold text-dark-slate/80 sm:px-5 sm:py-4 sm:text-sm"
                  >
                    <span className="sm:contents">⚠️ </span>
                    <span className="hidden sm:inline">Ohne Versicherung</span>
                    <span className="sm:hidden">Ohne Vers.</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ leistung, mit, ohne }) => (
                  <tr
                    key={leistung}
                    className="border-b border-dark-slate/5 last:border-b-0"
                  >
                    <td className="min-w-0 overflow-hidden px-2 py-2.5 text-xs text-dark-slate sm:px-5 sm:py-4 sm:text-sm">
                      <span className="block break-words">{leistung}</span>
                    </td>
                    <td className="min-w-0 overflow-hidden px-1 py-2.5 sm:px-5 sm:py-4">
                      <span className="flex min-w-0 max-w-full flex-wrap items-center justify-center gap-1 rounded-md bg-emerald-50 px-1.5 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200 sm:gap-2 sm:rounded-lg sm:px-3 sm:py-1.5 sm:text-sm">
                        <span className="text-emerald-600 shrink-0" aria-hidden>✔</span>
                        <span className="break-words text-center">versicherbar</span>
                      </span>
                    </td>
                    <td className="min-w-0 overflow-hidden px-1 py-2.5 sm:px-5 sm:py-4">
                      <span className="flex min-w-0 max-w-full flex-wrap items-center justify-center gap-1 rounded-md bg-red-50 px-1.5 py-1 text-xs font-medium text-red-800 ring-1 ring-red-200 sm:gap-2 sm:rounded-lg sm:px-3 sm:py-1.5 sm:text-sm">
                        <span className="shrink-0" aria-hidden>❌</span>
                        <span className="break-words text-center">{ohne.replace(/^❌\s*/, "")}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
