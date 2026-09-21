import { LegalLayout } from '../components/ComingSoon';
export const metadata = { title: 'Impressum', robots: { index: false, follow: true } };
export default function Impressum() {
  return <LegalLayout title="Impressum"><section><h2>Angaben gemäß § 5 DDG</h2><p>Marvin Matteo Billig<br />Am Vorgebirgstor 41<br />50969 Köln<br />Deutschland</p></section><section><h2>Kontakt</h2><p>E-Mail: <a href="mailto:info@pawtrust.de">info@pawtrust.de</a></p></section><section><h2>Über diese Website</h2><p>PawTrust befindet sich im Aufbau. Diese Website informiert über den bevorstehenden Start. Aktuell werden über diese Website keine Versicherungsanfragen entgegengenommen oder Verträge abgeschlossen.</p></section></LegalLayout>;
}
