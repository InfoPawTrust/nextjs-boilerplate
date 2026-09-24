# Tarifrechner – erster Entwurf, 24.09.2026

Lokale Vorschau: http://127.0.0.1:3106/tarifrechner . Direkter Katzenstart: http://127.0.0.1:3106/tarifrechner?tier=katze . Hund entsprechend ?tier=hund. Live-Produktseite unverändert; nicht gepusht/veröffentlicht.

## Ablauf und Architektur

Eine Frage je Ansicht: Tierart, Name, Geschlecht, Geburtstag (alternativ ungefährer Monat), Rasse mit Suche, Gesundheit einschließlich Unsicher-Option, weitere Tiere inline, Katzentarifwahl und Zusammenfassung. Vier übergeordnete Phasen: Dein Tier, Dein Tarif, Deine Daten, Abschluss. Nur erste zwei umgesetzt. Keine Kontaktdaten/Bezahlung/Annahmeprüfung/Beitragsberechnung. Hunde-Einstieg vorbereitet, konkrete Hundetarifdarstellung folgt. Weitere Tiere vorgemerkt, nicht automatisch mitversichert, keine Rabattzusage.

app/tarifrechner/model.ts hält Datenmodell, Schrittfolge, Datumsprüfung und explizite Kontextauswahl. Calculator.tsx verwaltet gemeinsamen Formularstand, Rücknavigation erhält Eingaben. BreedPicker ist wiederverwendbar. Cat-Tarife werden aus content/cat.ts geladen, derselben Quelle wie die Produktseite. Keine duplizierte Tarifpflege. Keine lokalen Speicher- oder CRM-Übertragungen; Reload verwirft den Entwurf.

EnzoAssistant.tsx und useEnzoVoice.ts sind getrennt vom Formular. Orb öffnet ohne API/Mikrofon. Sprache und Text sind bewusst aktivierbar. Sprechen verwendet GPT-Live gpt-live-1, männliche Stimme meridian, Responses-Delegation gpt-5.6-terra. Schreiben verwendet Responses ohne Mikrofon. Prompt: männlicher KI-Kater im Katzenzweig, warm, kurze Antworten, gelegentlich Katzenperspektive; keine erfundenen Leistungen/Preise/Rabatte, keine automatische Formänderung. Ausgewählter Kontext wird bei Aktivierung mitgesendet und bei laufender Stimme aktualisiert. Offizielle API-Referenzen: https://developers.openai.com/api/docs/guides/live-conversations und https://developers.openai.com/api/docs/guides/voice-webrtc .

## Lokaler Betrieb

Build mit NEXT_PUBLIC_CALCULATOR_PREVIEW=1 und PAWTRUST_CALCULATOR_PREVIEW=1: node node_modules/next/dist/bin/next build --webpack. Anschließend node scripts/preview-calculator.cjs. Windows-User-Umgebungsvariable OPENAI_API_KEY nur in den Serverprozess übernehmen, niemals ausgeben oder committen. Server bindet ausschließlich 127.0.0.1:3106, prüft Host und Origin. Ohne PAWTRUST_CALCULATOR_PREVIEW ist die Route nicht verfügbar. Ohne öffentlichen Build-Schalter bleiben bestehende CTAs unverändert deaktiviert bzw. am Homepage-Anker. API-Proxy der Live-Seite bleibt unverändert gesperrt; nur der lokale Custom-Server bedient /api/assistant/*.

Lokale Grenzen: eine aktive Sprachsitzung, zehn Minuten, zwölf Starts/Stunde; vierzig Textantworten/Stunde, eine parallele Antwort, begrenzte Eingabelängen und Ausgabetoken. Pause/Minimieren sendet session.close und stoppt Mikrofon/Peer; Mikrofon oder Lautsprecher stumm ist keine Sitzungspause. Keine produktionsreife Authentifizierung, verteilte Limits oder Kostenbudgets: vor öffentlicher Aktivierung separat entwickeln. store:false bedeutet keine persistierte Conversation im verwendeten API-Workflow, nicht pauschal keine Anbieterlogs.

## Verifizierung

Produktionsbuild/TypeScript und ESLint bestanden. Automatisierter Katzenablauf mit Vorerkrankung und zusätzlichem Tier, Suchauswahl, Tarif/Budget, Rücknavigation, direkter Produkteinstieg, keine automatischen API-Aufrufe; 320/390/768/1440 ohne Seitenüberlauf. Echter kurzer Texttest erfolgreich. Sprachtest mit synthetischem Mikrofon außerhalb des eingeschränkten Browsers: API200, session.started und Pause erfolgreich; Stimme meridian akzeptiert. Natürliche deutsche Klangwirkung noch vom Nutzer anzuhören. Testskripte/Screenshots unter artifacts/. Keine privaten Test-Audiodaten verwendet.

## Avatar

Built-in image_gen, ein Motiv für alle Katzen im Entwurf. Datei public/images/calculator-cat.png. Kein Rassenkatalog, keine Behauptung einer belegten Häufigkeitsrangliste. Prompt:

Create one premium tiny avatar for PawTrust pet insurance form: head and upper chest of a friendly ordinary European domestic short-haired tabby-and-white male cat, looking front, natural amber green eyes, warm attentive expression, realistic soft fur with subtly illustrated editorial finish. Actual transparent PNG background alpha, no colored disk, no room, no text, no collar, no logos. Symmetric near-front face, large ears and cheeks, cropped below chest, fills 85 percent of square. Palette natural brown-grey tabby, white muzzle/chest, warm gentle light. Must be recognizable at 40px, elegant not emoji, no oversized cartoon eyes. One single cat only.
