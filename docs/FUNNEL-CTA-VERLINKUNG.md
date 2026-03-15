# Funnel & CTA-Verknüpfung – PawTrust

## 1. Welche CTAs zeigen auf /funnel?

| Ort | Ziel | Prefill |
|-----|------|--------|
| **Navbar** (Desktop + Mobile) | `/funnel` | Nein |
| **Hero Startseite** | `/funnel` oder `/funnel?pet_name=…` | Nur wenn Name eingegeben (min. 2 Zeichen) |
| **Hero Hundeseite** (`/hundekrankenversicherung`) | `/funnel?pet_type=Hund` oder `?pet_type=Hund&pet_name=…` | Tierart immer; Name optional |
| **Hero Katzenseite** (`/katzenkrankenversicherung`) | `/funnel?pet_type=Katze` oder `?pet_type=Katze&pet_name=…` | Tierart immer; Name optional |
| **CTASection** (general / dog / cat) | `/funnel` | Nein |
| **Ratgeber-Artikel** (Mid-CTA + Ende) | `/funnel` | Nein |
| **Angebots-/Danke-Seite** (`/angebot`) | `/funnel` (Haupt-CTA) + `/` (Zurück) | Nein |
| **Footer** | Kein CTA-Button (nur Nav-Links) | – |

Alle allgemeinen CTAs ohne Kontext (Navbar, CTA-Sections, FAQ, Ratgeber, Mobile-Menü, Danke-Seite) verlinken **ohne Prefill** auf `/funnel`.

---

## 2. Wo wird Prefill-Logik verwendet?

Nur an **drei Stellen** mit echtem Kontext:

1. **Startseite – Hero**  
   - Eingabefeld: Name des Vierbeiners  
   - Mit Name (≥ 2 Zeichen): Weiterleitung zu `/funnel?pet_name=…` → Tiername vorbelegt, Step „Tiername“ wird übersprungen, Start bei **Tierart**.  
   - Ohne Name: `/funnel` → normaler Start bei Tierart.

2. **Hundeseite – Hero** (`/hundekrankenversicherung`)  
   - Ohne Name: `/funnel?pet_type=Hund` → Tierart vorbelegt, Step „Tierart“ übersprungen, Start bei **Tiername**.  
   - Mit Name: `/funnel?pet_type=Hund&pet_name=…` → Tierart + Tiername vorbelegt, Start bei **Alter**.

3. **Katzenseite – Hero** (`/katzenkrankenversicherung`)  
   - Gleiche Logik wie Hundeseite, mit `pet_type=Katze`.

---

## 3. Query-Parameter / Routing-Methode

- **Methode:** Query-Parameter in der URL.
- **Parameter:**
  - `pet_type` – erlaubte Werte: `Hund`, `Katze` (exakt, Großschreibung).
  - `pet_name` – frei text, wird nur übernommen wenn mind. 2 Zeichen (nach Trim).
- **Beispiele:**
  - `/funnel` – Standard-Einstieg
  - `/funnel?pet_name=Luna`
  - `/funnel?pet_type=Hund`
  - `/funnel?pet_type=Katze&pet_name=Max`
- Ungültige oder leere Werte werden ignoriert; dann Fallback auf normalen Funnel-Start.

---

## 4. Zentrale Start-Step-Logik

Die Logik liegt in **einer** Stelle: `app/components/funnel/funnel-prefill.ts` → `getFunnelPrefillFromParams(searchParams)`.

- **Eingabe:** `URLSearchParams` (z. B. von `useSearchParams()` auf `/funnel`).
- **Ausgabe:**
  - `initialForm`: State mit gesetzten Feldern `tierart` und/oder `tiername`.
  - `initialStep`: 1, 2 oder 3 (erster angezeigter Step).
  - `skippedSteps`: `[1]` und/oder `[2]` (Steps die beim Vor/Zurück übersprungen werden).

**Regeln:**

| Tierart aus URL | Tiername aus URL | initialStep | skippedSteps |
|-----------------|------------------|-------------|--------------|
| nein            | nein             | 1           | []           |
| nein            | ja               | 1           | [2]          |
| ja              | nein             | 2           | [1]          |
| ja              | ja               | 3           | [1, 2]       |

- **nextStep() / prevStep()** im `FunnelContext` springen über alle in `skippedSteps` enthaltenen Steps (z. B. von 1 direkt zu 3, wenn 2 übersprungen wird).
- Prefill-Werte stehen von Anfang an im globalen Funnel-State; Tiername erscheint z. B. in Formulierungen wie „Wie alt ist Luna?“.

---

## 5. State-Konsistenz & Validierung

- Vorbelegte Werte werden wie Nutzereingaben behandelt (Progress, Zurück/Weiter, API-Submission).
- **Validierung Prefill:**
  - `pet_name`: nur übernehmen wenn `trim().length >= 2`.
  - `pet_type`: nur `Hund` oder `Katze` (exakt).
- Fehlerhafte oder fehlende Parameter führen zu normalem Funnel-Start ohne Fehlermeldung.
