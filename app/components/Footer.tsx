import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/hundekrankenversicherung", label: "Hundekrankenversicherung" },
  { href: "/faq", label: "FAQ" },
  { href: "/ueber-pawtrust", label: "Über PawTrust" },
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
                src="/pawtrust-logo.png"
                alt="PawTrust"
                width={140}
                height={38}
                className="h-8 w-auto object-contain brightness-0 invert opacity-95"
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
                href="mailto:kontakt@pawtrust.de"
                className="transition-colors hover:text-white"
              >
                kontakt@pawtrust.de
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-off-white/20 pt-8">
          <p className="text-xs text-off-white/70 max-w-2xl">
            PawTrust stellt Informationen bereit und kann Anfragen an passende
            Versicherungspartner weiterleiten.
          </p>
        </div>
      </div>
    </footer>
  );
}
