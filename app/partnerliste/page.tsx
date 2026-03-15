import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Partnerliste | PawTrust",
  description:
    "Übersicht der Versicherungsanbieter und Vermittler, an die PawTrust Anfragen weiterleiten kann.",
};

// Liste der Partner, an die Leads/Anfragen weitergeleitet werden können – bitte mit konkreten Namen pflegen
const PARTNER_LISTE: string[] = [
  "– [Name Versicherer oder Makler 1 eintragen]",
  "– [Name Versicherer oder Makler 2 eintragen]",
  "– Weitere Partner werden bei Aufnahme in die Vermittlung hier ergänzt.",
];

export default function PartnerlistePage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
            Partnerliste
          </h1>

          <p className="mt-6 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
            Wenn Sie über unsere Website eine Anfrage für einen Tarifvergleich
            stellen, können Ihre Angaben an ausgewählte Versicherungsanbieter
            oder Vermittler weitergeleitet werden. Die Weitergabe erfolgt nur mit
            Ihrer Einwilligung.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-deep-trust-blue sm:text-xl">
            Versicherungsanbieter und Vermittler
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
            An folgende Partner können wir Ihre Anfrage weiterleiten (Stand der
            Liste: fortlaufend aktualisiert):
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
            {PARTNER_LISTE.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-dark-slate/80 sm:text-base">
            Änderungen an der Partnerliste werden hier zeitnah abgebildet. Bei
            Fragen wenden Sie sich an{" "}
            <a
              href="mailto:info@pawtrust.de"
              className="text-deep-trust-blue underline transition-colors hover:text-warm-gold"
            >
              info@pawtrust.de
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
