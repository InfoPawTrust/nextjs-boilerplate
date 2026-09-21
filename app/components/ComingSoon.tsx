import Image from 'next/image';
import Link from 'next/link';
export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return <div className={`brand-logo${compact ? ' brand-logo--small' : ''}`}><Image src="/pawtrust-wordmark.png" alt="pawtrust" width={2172} height={724} priority={!compact} sizes={compact ? '180px' : '(max-width: 700px) 95vw, 880px'} /></div>;
}
export function QuietFooter() {
  return <footer className="quiet-footer"><span className="footer-signoff">Mit Vorfreude. Und Schwanzwedeln.</span><nav aria-label="Kontakt und rechtliche Informationen"><a href="mailto:info@pawtrust.de">Kontakt</a><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></nav></footer>;
}
export function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="legal-page"><header className="legal-header"><Link href="/" aria-label="PawTrust – zurück zur Startseite"><BrandLogo compact /></Link><Link className="back-link" href="/">← Zur Startseite</Link></header><main id="inhalt" className="legal-content"><p className="legal-eyebrow">Gut zu wissen</p><h1>{title}</h1>{children}</main><QuietFooter /></div>;
}
