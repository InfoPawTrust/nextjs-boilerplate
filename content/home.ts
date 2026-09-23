// Editorial content is independent of components; replace this adapter with a CMS later.
export const home = {
  pets: [
    {id:'hund',name:'Hund',title:'Für deinen besten Freund.',text:'Für die großen Abenteuer. Und für alles, was dazwischenkommt.',image:'/images/hund-wohnen.webp'},
    {id:'katze',name:'Katze',title:'Für deinen kleinen Eigensinn.',text:'Für neugierige Entdecker. Und die Könige des Sofas.',image:'/images/katze-wohnen.webp'}
  ],
  steps: [{title:'Tarif finden',text:'Wähle Krankenversicherung oder OP-Schutz und vergleiche die Leistungen für dein Tier.'},{title:'Vertrag abschließen',text:'Prüfe deine Angaben und die Vertragsunterlagen. Entscheide dich für den Schutz, der zu euch passt.'},{title:'Rechnung einreichen',text:'Reiche deine Tierarztrechnung digital beim Versicherer ein – mit den erforderlichen Unterlagen.'},{title:'Erstattung erhalten',text:'Der Versicherer prüft die Rechnung und erstattet die versicherten Kosten gemäß deinem Vertrag.'}],
  faqs: [
    {q:'OP-Schutz oder Krankenversicherung – was passt zu uns?',a:'Eine OP-Versicherung konzentriert sich auf versicherte Operationen und die damit verbundenen Leistungen. Eine Krankenversicherung kann zusätzlich Behandlungen ohne Operation abdecken. Welche Leistungen enthalten sind, hängt vom gewählten Tarif ab.'},
    {q:'Ab wann ist mein Tier versichert?',a:'Entscheidend sind der vereinbarte Versicherungsbeginn und die Bedingungen des gewählten Tarifs. Wartezeiten und Ausschlüsse können gelten. Diese Angaben gehören vor dem Abschluss klar auf den Tisch.'},
    {q:'Was bedeutet Selbstbeteiligung?',a:'Das ist der Anteil einer versicherten Rechnung, den du selbst übernimmst. Je nach Tarif kann das ein Prozentsatz oder ein fester Betrag sein. Eine Selbstbeteiligung kann den Beitrag beeinflussen.'},
    {q:'Wovon hängt der Beitrag ab?',a:'Unter anderem können Tierart, Alter, Rasse und der gewünschte Leistungsumfang eine Rolle spielen. Einen verbindlichen Beitrag erhältst du erst nach Eingabe der notwendigen Angaben im Tarifrechner.'},
    {q:'Wer steht hinter dem Versicherungsschutz?',a:'Für das geplante Angebot setzt PawTrust auf Tarife von BarmeniaGothaer. PawTrust ist dabei nicht der Versicherer. Welches Versicherungsunternehmen deinen Vertrag übernimmt, steht in den jeweiligen Vertragsunterlagen.'},
    {q:'Wie funktioniert die Erstattung?',a:'Du reichst die Rechnung beim Versicherer ein. Er prüft, welche Kosten nach deinem Vertrag erstattungsfähig sind. Selbstbeteiligung, Leistungsgrenzen und Ausschlüsse können die Erstattung beeinflussen.'}
  ],
  proof: {grade:'1,3',product:'Barmenia Hunde-OP: Premium OP SB 0',source:'https://www.barmenia-firmenloesungen.de/deu/barmenia_ausgezeichnet/auszeichnungen/siegel-detailseite_41408.xhtml',checked:'2026-09-23'}
} as const;
