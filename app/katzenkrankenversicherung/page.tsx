import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Katzenkrankenversicherung | PawTrust",
  description:
    "Katzenkrankenversicherung vergleichen – passender Schutz für deine Katze. In Kürze verfügbar.",
};

export default function KatzenkrankenversicherungPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
            Katzenkrankenversicherung
          </h1>
          <p className="mt-6 text-dark-slate/90">
            Diese Seite wird in Kürze mit passenden Informationen und
            Vergleichsmöglichkeiten für die Katzenkrankenversicherung
            bereitgestellt.
          </p>
          <p className="mt-4 text-sm text-dark-slate/80">
            Bis dahin findest du unter{" "}
            <a
              href="/hundekrankenversicherung"
              className="text-deep-trust-blue underline hover:text-warm-gold"
            >
              Hundekrankenversicherung
            </a>{" "}
            unser Angebot für Hunde.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
