/**
 * Meta-Daten für Ratgeber-Artikel mit vollständigem Inhalt.
 * Slug → Meta; für generateMetadata und Layout.
 */

export type FullArticleMeta = {
  subtitle: string;
  readTimeMinutes: number;
  /** Platzhalter: null = Platzhalterdarstellung */
  heroImage: string | null;
  /** SEO: falls nicht gesetzt, werden Titel/Teaser aus articles.data genutzt */
  metaTitle?: string;
  metaDescription?: string;
};

export const fullArticleMeta: Record<string, FullArticleMeta> = {
  "tierkrankenversicherung-kosten": {
    subtitle:
      "Ein Überblick über Beiträge, Kostenfaktoren und typische Tierarztkosten.",
    readTimeMinutes: 6,
    heroImage: "/images/hund-katze-tierarzt.png",
    metaTitle: "Was kostet eine Tierkrankenversicherung? | PawTrust",
    metaDescription:
      "Wie viel kostet eine Tierkrankenversicherung für Hunde und Katzen? Erfahre typische Beiträge, Kostenfaktoren und wann sich eine Versicherung lohnt.",
  },
};

export function getFullArticleMeta(slug: string): FullArticleMeta | null {
  return fullArticleMeta[slug] ?? null;
}
