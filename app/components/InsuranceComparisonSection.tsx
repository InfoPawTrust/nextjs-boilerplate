const rows = [
  { leistung: "Operationen", mit: true, ohne: false },
  { leistung: "Diagnostik (z. B. Röntgen)", mit: true, ohne: false },
  { leistung: "Medikamente", mit: true, ohne: false },
  { leistung: "Stationäre Behandlung", mit: true, ohne: false },
  { leistung: "Therapien", mit: true, ohne: false },
  { leistung: "Nachsorge", mit: true, ohne: false },
];

export function InsuranceComparisonSection() {
  return (
    <section
      className="bg-off-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="comparison-heading"
          className="text-2xl font-bold text-deep-trust-blue sm:text-3xl"
        >
          Warum eine Hundekrankenversicherung sinnvoll ist
        </h2>
        <p className="mt-3 max-w-2xl text-dark-slate/80">
          Ein Überblick, was mit und ohne Versicherung möglich ist.
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-dark-slate/5">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-left">
              <thead>
                <tr className="border-b border-dark-slate/10 bg-deep-trust-blue/5">
                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-semibold text-deep-trust-blue sm:px-6"
                  >
                    Leistung
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-center text-sm font-semibold text-deep-trust-blue sm:px-6"
                  >
                    Mit Versicherung
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-center text-sm font-semibold text-dark-slate/80 sm:px-6"
                  >
                    Ohne Versicherung
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ leistung, mit, ohne }) => (
                  <tr
                    key={leistung}
                    className="border-b border-dark-slate/5 last:border-b-0"
                  >
                    <td className="px-5 py-4 text-sm text-dark-slate sm:px-6">
                      {leistung}
                    </td>
                    <td className="px-5 py-4 text-center sm:px-6">
                      {mit ? (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-soft-teal/20 text-soft-teal" aria-hidden>
                          ✓
                        </span>
                      ) : (
                        <span className="text-dark-slate/30">—</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-center sm:px-6">
                      {ohne ? (
                        <span className="text-dark-slate/30">—</span>
                      ) : (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-dark-slate/10 text-dark-slate/50" aria-hidden>
                          ✕
                        </span>
                      )}
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
