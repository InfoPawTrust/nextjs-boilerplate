"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/hundekrankenversicherung", label: "Hund" },
  { href: "/katzenkrankenversicherung", label: "Katze" },
  { href: "/faq", label: "FAQ" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/ueber-uns", label: "Über uns" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [panelEntered, setPanelEntered] = useState(false);
  const [closing, setClosing] = useState(false);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Entrance: panel slides in after mount
  useEffect(() => {
    if (!mobileOpen) return;
    setPanelEntered(false);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setPanelEntered(true));
    });
    return () => cancelAnimationFrame(frame);
  }, [mobileOpen]);

  // Closing: animate out then unmount
  useEffect(() => {
    if (!closing) return;
    const t = setTimeout(() => {
      setMobileOpen(false);
      setClosing(false);
    }, 300);
    return () => clearTimeout(t);
  }, [closing]);

  // Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen && !closing) {
        setClosing(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen, closing]);

  function openMenu() {
    setClosing(false);
    setMobileOpen(true);
  }

  function requestClose() {
    if (mobileOpen && !closing) setClosing(true);
  }

  return (
    <>
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
                href="/funnel"
                className="hidden whitespace-nowrap rounded-lg bg-gradient-to-bl from-warm-gold-light via-warm-gold to-warm-gold-dark px-5 py-2.5 text-base font-semibold text-deep-trust-blue shadow-md shadow-warm-gold-dark/30 transition-all hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 sm:inline-flex sm:items-center sm:justify-center"
              >
                Kostenlosen Tarifvergleich anfordern
              </Link>
              <button
                type="button"
                onClick={mobileOpen ? requestClose : openMenu}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-dark-slate hover:bg-dark-slate/5 md:hidden"
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
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
      </header>

      {/* Mobile: fixed off-canvas overlay – not in document flow, no layout shift */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] md:hidden"
          aria-modal="true"
          role="dialog"
          aria-label="Menü"
        >
          {/* Backdrop: click to close, slight darkening */}
          <button
            type="button"
            onClick={requestClose}
            className="absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out"
            style={{
              opacity: panelEntered && !closing ? 1 : 0,
            }}
            aria-label="Menü schließen"
          />

          {/* Panel: slides in from right, 75vw, max-width so left edge of content stays visible */}
          <div
            className="absolute top-0 right-0 h-full w-[75vw] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out"
            style={{
              transform: panelEntered && !closing ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div className="flex h-full flex-col pt-6 pb-8 pl-6 pr-4">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={requestClose}
                  className="flex shrink-0 rounded focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 [&_img]:block"
                  aria-label="PawTrust Startseite"
                >
                  <Image
                    src="/pawtrust-logo.svg"
                    alt="PawTrust"
                    width={160}
                    height={44}
                    className="h-9 w-auto object-contain object-left"
                  />
                </Link>
                <button
                  type="button"
                  onClick={requestClose}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-dark-slate hover:bg-dark-slate/5"
                  aria-label="Menü schließen"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="mt-4 flex flex-col gap-1">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={requestClose}
                      className="block rounded-lg py-3 px-3 text-base font-medium text-dark-slate hover:bg-off-white hover:text-deep-trust-blue"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="mt-4">
                  <Link
                    href="/funnel"
                    onClick={requestClose}
                    className="block rounded-lg bg-gradient-to-bl from-warm-gold-light via-warm-gold to-warm-gold-dark py-3 px-4 text-center text-base font-semibold text-deep-trust-blue shadow-md"
                  >
                    Kostenlosen Tarifvergleich anfordern
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
