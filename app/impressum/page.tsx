import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Impressum | PawTrust",
  description: "Impressum und rechtliche Angaben zu PawTrust.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
            Impressum
          </h1>

          <div className="mt-10 space-y-10 sm:mt-12">
            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Marvin Matteo Billig
                <br />
                Am Vorgebirgstor 41
                <br />
                50969 Köln
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                Kontakt
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                E-Mail:{" "}
                <a
                  href="mailto:info@pawtrust.de"
                  className="text-deep-trust-blue underline transition-colors hover:text-warm-gold"
                >
                  info@pawtrust.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Marvin Matteo Billig
                <br />
                Am Vorgebirgstor 41
                <br />
                50969 Köln
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                Hinweis zur Plattform
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                PawTrust ist eine unabhängige Informations- und
                Vergleichsplattform für Tierkrankenversicherungen.
                <br />
                PawTrust ist keine Versicherungsgesellschaft. Es erfolgt keine
                Versicherungsberatung. Über die Plattform können Anfragen an
                passende Versicherungsanbieter oder Vermittler weitergeleitet
                werden.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
