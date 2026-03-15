import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Ratgeber | PawTrust",
  description:
    "Ratgeber zu Tierkrankenversicherung und Versicherungsschutz für Haustiere.",
};

export default function RatgeberPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
            Ratgeber
          </h1>
          <p className="mt-6 text-dark-slate/90">
            Hier findest du in Kürze hilfreiche Artikel und Tipps rund um
            Tierkrankenversicherung und den passenden Schutz für dein Haustier.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
