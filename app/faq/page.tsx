import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "FAQ | PawTrust",
  description: "Häufige Fragen zu Tierkrankenversicherung und PawTrust.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
            Häufig gestellte Fragen
          </h1>
          <p className="mt-6 text-dark-slate/90">
            Die FAQ werden in Kürze ergänzt.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
