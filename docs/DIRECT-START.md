# Direkter Sprachstart · 24.09.2026

Aktuelle Nutzerentscheidung: Klick auf den beschrifteten Orb startet unmittelbar die Sprachverbindung; kein zweiter Startbutton im Fenster. Erneuter Orb-Klick pausiert, ohne das Fenster zu schließen; nächster Klick setzt fort. Text bleibt über Nachrichten-Icon erreichbar. Das ersetzt alle früheren Vorgaben „Öffnen ohne Mikrofon“ und „Startbutton im Fenster“. Vor Tierauswahl weiterhin kein Assistent.

Katze verwendet einen männlichen KI-Kater; Hund einen KI-Hund. Name vorerst für beide Enzo. Name, Stimme und Persönlichkeit in content/assistant-personas.json getrennt konfigurierbar. Kein neuer Name vom Nutzer festgelegt. Kleine Sketch-Ohren unterscheiden Katze und Hund.

Veröffentlichung vom Nutzer gewünscht, noch nicht erfolgt: bestehender KI-Dienst ist ein lokaler Custom-Node-Server mit dauerhaftem WebSocket und global nur einer Sprachsitzung. Öffentliche Vercel-Website sperrt API-Routen; keine produktive KI-Anbindung vorhanden. Backend-Hosting-Zugang beim Nutzer angefragt. Vor Go-live Mehrbenutzer-Sitzungen, serverseitige Kostenlimits und Hosting-Anbindung implementieren; lokaler Schlüssel bleibt lokal. Kein bloßer Push als erfolgreiches Go-live ausgeben.

Grundlage: aktuelles Nutzerfeedback, scripts/preview-calculator.cjs, scripts/calculator-assistant.cjs und proxy.ts geprüft. Webpack-Build inklusive TypeScript bestanden. UI mit gemocktem Mikrofon prüfen; keine kostenpflichtigen Testgespräche erforderlich.

Betroffene Drive-Dateien: https://drive.google.com/file/d/1RGY8qYo8NOiOkD5uWR1yHa4A8i4QTguO/view und https://drive.google.com/file/d/1vUs2Z_6dp7ekqxyfRyiAWORtBl-GXPLv/view .

