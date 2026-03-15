# Fix: useSearchParams() und Suspense auf /funnel (Next.js 16)

## 1. Wo useSearchParams() bisher lag

- **Datei:** `app/funnel/page.tsx`
- Die gesamte Seite war eine Client Component (`"use client"`) und hat direkt `useSearchParams()` aus `next/navigation` aufgerufen.
- In Next.js 16 (App Router) verlangt die Dokumentation, dass Komponenten, die `useSearchParams()` nutzen, innerhalb einer **Suspense Boundary** gerendert werden, damit beim Build/SSR kein Fehler entsteht und das Streaming-Verhalten korrekt ist.

## 2. Wie es umgebaut wurde

- **Neue Datei:** `app/funnel/FunnelPageClient.tsx`
  - Markiert mit `"use client"`.
  - Enthält **nur hier** den Aufruf von `useSearchParams()` sowie die bestehende Prefill-Logik (`getFunnelPrefillFromParams(searchParams)`) und das komplette Funnel-UI (FunnelProvider, Steps, Navbar, Footer).

- **Angepasst:** `app/funnel/page.tsx`
  - Ist wieder eine **Server Component** (kein `"use client"`).
  - Rendert `<Suspense fallback={<FunnelFallback />}><FunnelPageClient /></Suspense>`.
  - Der Fallback zeigt dieselbe Grundstruktur (Navbar, Footer) und „Laden …“ im Hauptbereich, damit es keinen groben Layout-Sprung gibt.

- **Ergebnis:** Nur die Client-Komponente `FunnelPageClient` nutzt `useSearchParams()`; sie wird ausschließlich innerhalb von `<Suspense>` gerendert.

## 3. Warum der Build jetzt funktioniert

- Next.js 16 erwartet für dynamische Client-Hooks wie `useSearchParams()` eine Suspense-Grenze. Ohne diese kann der Build (z. B. auf Vercel) mit einem Fehler wie „useSearchParams() should be wrapped in a suspense boundary“ abbrechen.
- Durch die Aufteilung in eine Server Page mit Suspense und eine Client-Komponente, die ausschließlich innerhalb dieser Grenze läuft, erfüllt die Route die Anforderung. Die Prefill-Logik und die Start-Step-Logik bleiben unverändert in `FunnelPageClient` und funktionieren weiter wie zuvor (Query-Parameter werden beim Client-Render ausgelesen).
