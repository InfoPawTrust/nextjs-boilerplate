"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/hundekrankenversicherung", label: "Hund" },
  { href: "/katzenkrankenversicherung", label: "Katze" },
  { href: "/faq", label: "FAQ" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/ueber-uns", label: "Über uns" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-slate/10 bg-off-white/95 backdrop-blur-sm">
      <nav
        className="px-4 py-5 sm:px-6 sm:py-5 lg:px-8"
        aria-label="Hauptnavigation"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 [&_img]:block [&_img]:bg-transparent"
        >
          <Image
            src="/pawtrust-logo.svg"
            alt="PawTrust"
            width={480}
            height={132}
            priority
            className="h-12 w-auto object-contain object-left sm:h-14 min-[900px]:h-16"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-medium text-dark-slate transition-colors hover:text-deep-trust-blue"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <Link
            href="/hundekrankenversicherung#vergleich"
            className="hidden whitespace-nowrap rounded-lg bg-gradient-to-bl from-warm-gold-light via-warm-gold to-warm-gold-dark px-5 py-2.5 text-base font-semibold text-deep-trust-blue shadow-md shadow-warm-gold-dark/30 transition-all hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 sm:inline-flex sm:items-center sm:justify-center"
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
                className="mt-2 block rounded-lg bg-gradient-to-bl from-warm-gold-light via-warm-gold to-warm-gold-dark py-2.5 text-center text-base font-semibold text-deep-trust-blue shadow-md"
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
