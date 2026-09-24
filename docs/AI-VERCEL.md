# KI-Anbindung auf Vercel Hobby

Stand 24.09.2026. Nutzer entscheidet ausdrücklich, vorerst Hobby zu nutzen. Kein
Upgrade und kein zusätzlicher kostenpflichtiger Hostingvertrag. Versicherungsabschluss
und Übermittlung eines Antrags sind ausdrücklich außerhalb dieses Schritts.

## Konfiguration im vorhandenen Projekt

Projekt `nextjs-boilerplate`, Team `info-77071248s-projects`.
Für die erste Prüfung **Preview**, für die Freischaltung dieselben Variablen auch
in **Production** setzen. Neue Werte gelten erst nach neuem Deployment.

| Variable | Wert / Zweck |
| --- | --- |
| `OPENAI_API_KEY` | Secret, vom Nutzer eingetragen; niemals `NEXT_PUBLIC_` davor |
| `UPSTASH_REDIS_REST_URL` | URL aus der Upstash-Redis-Verknüpfung |
| `UPSTASH_REDIS_REST_TOKEN` | Secret aus der Verknüpfung |
| `PAWTRUST_AI_ENABLED` | Optional: `0` sperrt neue Gespräche; sonst aktiv, sobald Schlüssel und Speicher vorhanden sind |
| `NEXT_PUBLIC_CALCULATOR_ENABLED` | Optional: `0` blendet den Rechner aus; Standard `1` aktiviert Rechner und vorhandene CTAs |

Alternativ werden die automatisch erzeugten Namen `KV_REST_API_URL` und
`KV_REST_API_TOKEN` unterstützt. Keine Werte ins Repository/Drive kopieren.
Der kostenlose Upstash-Redis-Tarif reicht für den kleinen Nutzungszähler;
keine Vector-/QStash-Datenbank erforderlich. Ohne Speicher oder bei dessen Ausfall
werden **keine neuen kostenpflichtigen KI-Aufrufe** gestartet.

System Environment Variables eingeschaltet lassen: Vercel stellt so seine
Deployment-URL und Umgebung für die Originprüfung bereit. Zusätzliche eigene
Preview-Domains bei Bedarf explizit in `ASSISTANT_ALLOWED_ORIGINS` erlauben
(kommaseparierte HTTPS-Origins, kein Wildcard). Produktionsdomains sind fest
auf `https://www.pawtrust.de` und `https://pawtrust.de` begrenzt.

## Ablauf und Schutz

Der Browser erhält auf bewusste Aktivierung ein signiertes HttpOnly-/SameSite-Cookie
(24 Stunden, Secure in Vercel). Das ist eine anonyme Browseridentität, kein
Benutzerkonto und kein Beweis einer natürlichen Person. Originprüfung allein ist
keine Authentifizierung. Eine täglich wechselnde HMAC-IP-Kennung und globale
Kontingente begrenzen auch Anfragen mit neuen Cookies.

Ein Lua-Skript reserviert atomar alle Nutzungszähler und den parallelen Zugriff
des Browsers. Speicherung: nur Zähler, zufällige Kennungen und kurze Sperren,
keine Texte, Audioaufnahmen, SDP-Angebote oder Formularwerte. Zähler laufen
spätestens nach 86.500 Sekunden ab. Keine Erstattung von Kontingent bei
unklaren Provider-/Netzwerkfehlern.

| Aktion | Pro Browser/Stunde | Pro IP/Stunde | Gesamt/UTC-Tag |
| --- | ---: | ---: | ---: |
| Sprachstarts | 3 | 6 | 20 |
| Textantworten | 20 | 40 | 200 |
| Kontext-/Beenden-Anfragen | 120 | 240 | 2.000 |

Eine Textantwort hat maximal 550 Ausgabetokens, Historie maximal 12 kurze
Nachrichten. Modelle und Tools sind serverseitig festgelegt. Voice verwendet
`gpt-live-1`, Stimme `meridian`, delegierte Antworten und Chat `gpt-5.6-terra`.
Die WebRTC-Frontendverbindung darf nur schließen oder das Mikrofon umschalten.
Begrüßung und bereinigter Formularkontext gehen über besitzgeprüfte Serverrouten.

Die Sitzungserstellung liefert einen NDJSON-Stream mit SDP-Antwort und anschließend
Heartbeats. Der laufende HTTP-Aufruf hält die serverseitige Kontrollverbindung
am Leben. Next `after` hält die abschließende Arbeit auch beim Abbruch des
HTTP-Clients offen. Vier Minuten nach Beginn fordert der Server `session.close`
an, wartet auf `session.closed` und versucht bei Fehlern einmal erneut zu schließen.
Das liegt innerhalb des 300-Sekunden-Limits von Hobby mit Fluid Compute.
Pause/Minimieren/Seitenverlassen stoppen die lokalen Audiotracks und schicken
zusätzlich einen besitzgeprüften Schließauftrag. Mikrofon-/Tonstummschaltung
allein beendet keine Sitzung.

## Grenzen und Prüfung vor Freischaltung

Kontingente sind kein garantierter Euro-Höchstbetrag. Ein harter Provider-/Hosting-
Ausfall kann die bestätigte Finalisierung verhindern; dafür wird ausschließlich
ein inhaltsfreies Warnsignal protokolliert. Keine Garantie für genau vier Minuten
bei vollständigem Verlust aller serverseitigen Kontrollen. Missbrauch kann das
gemeinsame Kontingent erschöpfen. Für einen größeren Launch Bot-Schutz und ein
zusätzliches Provider-Ausgabenlimit separat konfigurieren und prüfen.

Lokale Node-Tests: Besitzprüfung, ungültige/zu große Anfragen, Limits vor
Provider-Aufruf, Parallelzugriff, feste Modell-/Toolkonfiguration, Streamabbruch,
Watchdog-Abschluss, paketweise Streamverarbeitung. Redis-Lua wurde noch nicht
gegen die vom Nutzer einzurichtende echte Datenbank geprüft. Echter öffentlicher
Sprachstart, Begrüßung, Pause und Wiederaufnahme müssen nach Verknüpfung in
Vercel geprüft werden. Erfolgreicher Build allein ist keine Live-Freigabe.

Die ursprüngliche lokale Vorschau unter 127.0.0.1:3106 bleibt unabhängig und
verwendet den lokalen Schlüssel. Ihre bisherigen Limits gelten nur dort.

Quellen: [Vercel-Laufzeit](https://vercel.com/docs/functions/configuring-functions/duration),
[OpenAI WebRTC](https://developers.openai.com/api/docs/guides/voice-webrtc),
[Serversteuerung](https://developers.openai.com/api/docs/guides/voice-server-controls),
[Upstash-Verknüpfung](https://upstash.com/docs/redis/howto/vercelintegration).
