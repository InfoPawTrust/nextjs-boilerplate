import Link from 'next/link';
import { LegalLayout } from './components/ComingSoon';
export default function NotFound() {
  return <LegalLayout title="Hier geht’s bald weiter."><p>Diese Seite ist aktuell nicht verfügbar.</p><p><Link href="/">Zur PawTrust-Startseite →</Link></p></LegalLayout>;
}
