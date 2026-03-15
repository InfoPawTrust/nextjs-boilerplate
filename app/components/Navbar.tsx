"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/hundekrankenversicherung", label: "Hundekrankenversicherung" },
  { href: "/faq", label: "FAQ" },
  { href: "/ueber-pawtrust", label: "Über PawTrust" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-slate/10 bg-off-white/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Hauptnavigation"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center rounded focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 [&_img]:block [&_img]:bg-transparent"
        >
          <Image
            src="/pawtrust-logo.png"
            alt="PawTrust"
            width={160}
            height={44}
            priority
            className="h-9 w-auto max-h-9 object-contain object-left"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-dark-slate transition-colors hover:text-deep-trust-blue"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/hundekrankenversicherung#vergleich"
            className="hidden items-center justify-center rounded-lg bg-warm-gold px-5 py-2.5 text-sm font-semibold text-deep-trust-blue shadow-sm transition-colors hover:bg-warm-gold/90 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 sm:inline-flex"
          >
            Kostenlosen Tarifvergleich anfordern
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-dark-slate hover:bg-dark-slate/5 md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="border-t border-dark-slate/10 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg py-2.5 text-sm font-medium text-dark-slate hover:bg-off-white hover:text-deep-trust-blue"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/hundekrankenversicherung#vergleich"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-lg bg-warm-gold py-2.5 text-center text-sm font-semibold text-deep-trust-blue"
              >
                Kostenlosen Tarifvergleich anfordern
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
