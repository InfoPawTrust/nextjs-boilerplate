import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Dein Angebot | PawTrust",
  description: "Dein unverbindliches Angebot für die Tierkrankenversicherung.",
};

export default function AngebotPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
          Vielen Dank für deine Anfrage
        </h1>
        <p className="mt-4 text-lg text-dark-slate/80">
          Wir haben deine Angaben erhalten und bereiten dein unverbindliches Angebot vor. Du erhältst in Kürze eine Übersicht passender Tarife per E-Mail.
        </p>
        <p className="mt-6 text-dark-slate/70">
          Bei Fragen erreichst du uns jederzeit.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/funnel"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-bl from-warm-gold-light via-warm-gold to-warm-gold-dark px-6 py-3.5 text-base font-semibold text-deep-trust-blue shadow-md transition-all hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2"
          >
            Kostenlosen Tarifvergleich anfordern
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border-2 border-dark-slate/20 bg-white px-6 py-3.5 text-base font-semibold text-dark-slate transition-colors hover:border-dark-slate/40 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
