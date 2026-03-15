import Image from "next/image";
import Link from "next/link";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const navLinks = [
  { href: "/hundekrankenversicherung", label: "Hund" },
  { href: "/katzenkrankenversicherung", label: "Katze" },
  { href: "/faq", label: "FAQ" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/ueber-uns", label: "Über uns" },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/cookie-einstellungen", label: "Cookie-Einstellungen" },
];

export function Footer() {
  return (
    <footer className="border-t border-dark-slate/10 bg-deep-trust-blue text-off-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-deep-trust-blue rounded">
              <Image
                src="/pawtrust-logo-footer.svg"
                alt="PawTrust"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-gold">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-off-white/90 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-gold">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-off-white/90 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-gold">
              Kontakt
            </h3>
            <p className="mt-4 text-sm text-off-white/90">
              <a
                href="mailto:info@pawtrust.de"
                className="transition-colors hover:text-white"
              >
                info@pawtrust.de
              </a>
            </p>
            <div className="mt-4 flex items-center gap-3" aria-label="Soziale Medien">
              <a
                href="https://www.instagram.com/pawtrustde/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PawTrust auf Instagram"
                className="text-off-white/80 transition-all duration-200 hover:scale-110 hover:text-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-deep-trust-blue rounded"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@pawtrustde?lang=de-DE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PawTrust auf TikTok"
                className="text-off-white/80 transition-all duration-200 hover:scale-110 hover:text-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-deep-trust-blue rounded"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580710171982"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PawTrust auf Facebook"
                className="text-off-white/80 transition-all duration-200 hover:scale-110 hover:text-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-deep-trust-blue rounded"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-off-white/20 pt-8">
          <p className="text-xs text-off-white/70 max-w-2xl">
            PawTrust ist eine Informations- und Vergleichsplattform für
            Tierkrankenversicherungen und kann Anfragen an passende
            Versicherungspartner weiterleiten.
          </p>
        </div>
      </div>
    </footer>
  );
}
