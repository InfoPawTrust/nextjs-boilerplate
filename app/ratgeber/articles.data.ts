/**
 * Ratgeber-Artikel – leicht erweiterbar.
 * Später können weitere Artikel ergänzt oder ein CMS angebunden werden.
 */

export const CATEGORIES = {
  hund: "Hund",
  katze: "Katze",
  kosten: "Kosten",
  vergleich: "Vergleich",
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

export type Article = {
  id: string;
  slug: string;
  title: string;
  category: CategoryKey;
  teaser: string;
  /** Platzhalter: null = Platzhalterdarstellung, später echte URL */
  image: string | null;
};

export const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "tierkrankenversicherung-kosten",
    title:
      "Was kostet eine Tierkrankenversicherung für Hunde und Katzen wirklich?",
    category: "kosten",
    teaser:
      "Monatliche Beiträge, Selbstbeteiligung und Leistungsumfang – ein Überblick über die Kostenfaktoren und typische Preisspannen.",
    image: "/images/hund-katze-tierarzt.png",
  },
  {
    id: "2",
    slug: "hundekrankenversicherung-lohnt-sich",
    title: "Hundekrankenversicherung: Lohnt sich das wirklich?",
    category: "hund",
    teaser:
      "Wann sich eine Versicherung für deinen Hund rechnet und worauf du achten solltest.",
    image: null,
  },
  {
    id: "3",
    slug: "katzenkrankenversicherung-wann-sinnvoll",
    title: "Katzenkrankenversicherung: Wann ist sie sinnvoll?",
    category: "katze",
    teaser:
      "Für welche Katzen sich eine Krankenversicherung besonders lohnt und was gute Tarife auszeichnet.",
    image: null,
  },
  {
    id: "4",
    slug: "op-versicherung-hunde",
    title: "OP-Versicherung für Hunde: Wann reicht sie aus?",
    category: "hund",
    teaser:
      "Der Unterschied zwischen OP-Versicherung und Vollversicherung – und wann welche Variante passt.",
    image: null,
  },
  {
    id: "5",
    slug: "tierarztkosten-hund",
    title: "Tierarztkosten beim Hund: Mit diesen Preisen musst du rechnen",
    category: "kosten",
    teaser:
      "Typische Behandlungen, Operationen und Diagnostik – mit realistischen Kostenbeispielen.",
    image: null,
  },
  {
    id: "6",
    slug: "tierarztkosten-katzen",
    title: "Tierarztkosten bei Katzen: Typische Behandlungen und Kosten",
    category: "kosten",
    teaser:
      "Von der Vorsorge bis zur Notfall-OP: was Katzenbesitzer finanziell erwarten können.",
    image: null,
  },
  {
    id: "7",
    slug: "hundekrankenversicherung-ohne-wartezeit",
    title: "Hundekrankenversicherung ohne Wartezeit – geht das?",
    category: "hund",
    teaser:
      "Wartezeiten bei Versicherungen verstehen und Optionen ohne oder mit kurzer Wartezeit kennenlernen.",
    image: null,
  },
  {
    id: "8",
    slug: "beste-hundekrankenversicherung",
    title: "Welche Hundekrankenversicherung ist die beste?",
    category: "vergleich",
    teaser:
      "Kriterien für einen guten Tarif und wie du Angebote sinnvoll vergleichst.",
    image: null,
  },
  {
    id: "9",
    slug: "katzenkrankenversicherung-sinnvoll",
    title: "Welche Katzenkrankenversicherung ist sinnvoll?",
    category: "katze",
    teaser:
      "Leistungen, Kosten und Besonderheiten – worauf du bei der Auswahl achten solltest.",
    image: null,
  },
];

/** Erster Artikel = Spotlight, Rest = Grid */
export const SPOTLIGHT_ARTICLE = ARTICLES[0];
export const GRID_ARTICLES = ARTICLES.slice(1);
