import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Datenschutzerklärung | PawTrust",
  description: "Datenschutzerklärung und Informationen zur Datenverarbeitung bei PawTrust.",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl">
            Datenschutzerklärung
          </h1>

          <div className="mt-10 space-y-10 sm:mt-12">
            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                1. Verantwortlicher
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Marvin Matteo Billig
                <br />
                Am Vorgebirgstor 41
                <br />
                50969 Köln
                <br />
                Deutschland
                <br />
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
                2. Rechtsgrundlagen der Verarbeitung
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage
                der Datenschutz-Grundverordnung (DSGVO). Für die auf dieser
                Website vorgenommenen Verarbeitungen gelten insbesondere
                folgende Rechtsgrundlagen:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                <li>
                  <strong>Hosting und Server-Logdateien:</strong> Art. 6 Abs. 1
                  lit. f DSGVO (berechtigtes Interesse an stabiler und sicherer
                  Website).
                </li>
                <li>
                  <strong>Kontaktformular / Anfrage:</strong> Art. 6 Abs. 1 lit. b
                  DSGVO (Verarbeitung zur Durchführung vorvertraglicher
                  Maßnahmen).
                </li>
                <li>
                  <strong>Weitergabe an Versicherungspartner:</strong> Art. 6
                  Abs. 1 lit. a DSGVO (Einwilligung des Nutzers).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                3. Hosting
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Diese Website wird bei Vercel Inc. gehostet.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Anbieter:
                <br />
                Vercel Inc.
                <br />
                340 S Lemon Ave #4133
                <br />
                Walnut, CA 91789
                <br />
                USA
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Beim Aufruf unserer Website werden durch den Hostinganbieter
                automatisch Informationen erfasst und in sogenannten
                Server-Log-Dateien gespeichert. Rechtsgrundlage: Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse an stabiler und sicherer
                Website).
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Hierzu gehören insbesondere:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Diese Daten dienen ausschließlich der technischen Bereitstellung
                der Website. Wir haben mit dem Anbieter einen Vertrag zur
                Auftragsverarbeitung (AVV) abgeschlossen.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                <strong>Datenübermittlung in die USA:</strong> Bei der Nutzung
                bestimmter Dienste kann eine Übermittlung personenbezogener Daten
                in die USA erfolgen. Soweit erforderlich erfolgt dies auf
                Grundlage der Standardvertragsklauseln der Europäischen Kommission
                oder im Rahmen des EU-US Data Privacy Framework.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                4. Datenerfassung über das Formular
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Wenn Sie über unsere Website eine Anfrage stellen (z. B. für
                einen Tarifvergleich), erheben wir personenbezogene Daten, die Sie
                in das Formular eingeben. Rechtsgrundlage: Art. 6 Abs. 1 lit. b
                DSGVO (Verarbeitung zur Durchführung vorvertraglicher
                Maßnahmen).
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Folgende Daten können dabei erhoben werden:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Postleitzahl</li>
                <li>Geburtsdatum</li>
                <li>
                  Angaben zum Haustier (z. B. Rasse, Alter, Gesundheitszustand)
                </li>
                <li>weitere freiwillige Angaben</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Diese Daten werden verwendet, um passende Versicherungsangebote
                zu ermitteln und Ihre Anfrage zu bearbeiten.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                5. Weitergabe an Versicherungspartner
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Zur Bearbeitung Ihrer Anfrage können Ihre Angaben an ausgewählte
                Versicherungsanbieter oder Vermittler weitergeleitet werden.
                Diese können Ihnen daraufhin passende Angebote unterbreiten oder
                Sie kontaktieren.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Eine aktuelle Übersicht unserer Partner finden Sie in unserer{" "}
                <a
                  href="/partnerliste"
                  className="text-deep-trust-blue underline transition-colors hover:text-warm-gold"
                >
                  Partnerliste
                </a>
                .
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Die Weitergabe erfolgt ausschließlich, wenn Sie hierzu zuvor
                aktiv Ihre Einwilligung erteilt haben. Rechtsgrundlage: Art. 6
                Abs. 1 lit. a DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                6. Cookies
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Unsere Website verwendet Cookies. Cookies sind kleine
                Textdateien, die auf Ihrem Endgerät gespeichert werden.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Ein Teil der Cookies ist technisch notwendig, um die Website
                bereitzustellen. Andere Cookies dienen Analyse- und
                Marketingzwecken.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Sie können Ihre Einwilligung über das Cookie-Banner verwalten
                und dort auswählen, welche Cookies gesetzt werden dürfen. Ihre
                Einstellungen können Sie jederzeit über das Cookie-Banner bzw.
                die Cookie-Einstellungen anpassen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                7. Analyse- und Trackingtools
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Wir nutzen Analyse- und Marketingtools, um die Nutzung unserer
                Website zu analysieren, die Wirksamkeit von Werbemaßnahmen zu
                messen und anonymisierte Statistiken zu erstellen. Diese Dienste
                können Ihr Nutzungsverhalten erfassen, Cookies setzen und
                Daten an Drittanbieter übermitteln.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Verwendet werden können unter anderem:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                <li>
                  <strong>Google Analytics</strong> – Analyse des
                  Nutzerverhaltens, anonymisierte Auswertungen. Die
                  IP-Anonymisierung ist bei Google Analytics 4 (GA4)
                  standardmäßig aktiviert.
                </li>
                <li>
                  <strong>Meta Pixel (Facebook / Instagram)</strong> – Messung
                  von Werbewirkung, Auswertung von Nutzungsverhalten. Daten
                  können in die USA übertragen werden; die Übermittlung erfolgt
                  auf Basis Ihrer Einwilligung.
                </li>
                <li>
                  <strong>TikTok Pixel</strong> – Messung von Werbewirkung,
                  Auswertung von Nutzungsverhalten. Daten können in die USA
                  übertragen werden; die Übermittlung erfolgt auf Basis Ihrer
                  Einwilligung.
                </li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Diese Dienste werden ausschließlich aktiviert, wenn Sie über das
                Cookie-Banner Ihre Einwilligung erteilt haben.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                8. Widerruf Ihrer Einwilligung
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Sie können eine erteilte Einwilligung zur Verarbeitung oder
                Weitergabe Ihrer Daten jederzeit mit Wirkung für die Zukunft
                widerrufen. Der Widerruf kann formlos per E-Mail an{" "}
                <a
                  href="mailto:info@pawtrust.de"
                  className="text-deep-trust-blue underline transition-colors hover:text-warm-gold"
                >
                  info@pawtrust.de
                </a>{" "}
                erfolgen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                9. Speicherdauer
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Personenbezogene Daten werden nur so lange gespeichert, wie dies
                zur Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                10. Rechte der Nutzer
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Sie haben jederzeit das Recht auf:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                <li>Auskunft über Ihre gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Hierzu können Sie sich jederzeit an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-deep-trust-blue sm:text-xl">
                11. Beschwerderecht
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dark-slate/90 sm:text-base">
                Sie haben das Recht, sich bei einer
                Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten zu beschweren.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
