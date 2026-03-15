# Rechtlicher Feinschliff – Soft-Launch (Kurzüberblick)

## 1. Wo der Text ergänzt wurde

**Datenschutzerklärung** (`app/datenschutz/page.tsx`):

- **Abschnitt 5 „Weitergabe an Versicherungspartner“**  
  Am Anfang des Abschnitts wurde ein neuer Absatz eingefügt:
  - *„Die im Anfrageformular eingegebenen Daten können zur Erstellung eines Angebots an ausgewählte Versicherungspartner weitergeleitet werden, die passende Tierkrankenversicherungen anbieten.“*
  - Der bestehende Text (Bearbeitung der Anfrage, Angebote unterbreiten, Kontaktaufnahme) bleibt unverändert darunter.

## 2. Consent-Text im Funnel

**Angepasst** in `app/components/funnel/step-consent.tsx`:

- Zusatz im Einwilligungstext: **„und an ausgewählte Versicherungspartner weitergeleitet werden können“**.
- Vollständiger Satz jetzt: *„Ich habe die Datenschutzerklärung gelesen und bin einverstanden, dass meine Angaben zur Kontaktaufnahme und zur Erstellung eines unverbindlichen Angebots verarbeitet und an ausgewählte Versicherungspartner weitergeleitet werden können. *“*
- Damit ist die mögliche Weitergabe an Partner auch im Funnel genannt und stimmt mit Abschnitt 5 der Datenschutzerklärung überein.

## 3. Technische Prüfung

| Prüfpunkt | Status |
|-----------|--------|
| **Datenschutz-Link im Funnel** | Link zu `/datenschutz` im Consent-Step vorhanden; öffnet in neuem Tab (`target="_blank"`, `rel="noopener noreferrer"`). |
| **Impressum-Link** | Impressum nur im Footer verlinkt (`/impressum`). Funnel-Seite rendert Footer – Link von dort aus erreichbar und funktionsfähig. |
| **Consent Pflichtfeld** | „Weiter“ ist ohne Haken deaktiviert (`nextDisabled={!form.consent}`); API prüft `consent` und liefert bei fehlender Einwilligung 400. |
| **Checkbox nicht vorausgewählt** | `initialLeadFormState` setzt `consent: false` – Checkbox ist initial nicht angehakt. |

---

*Stand: nach Umsetzung des rechtlichen Feinschliffs für den Soft-Launch.*
