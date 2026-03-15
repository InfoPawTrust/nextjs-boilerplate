/**
 * Registry: Welche Slugs haben vollständigen Artikel-Inhalt?
 * Erweiterung: Neue Artikel hier eintragen und Content-Komponente anlegen.
 */

import type { ComponentType } from "react";
import { TierkrankenversicherungKostenContent } from "./tierkrankenversicherung-kosten";

export const fullArticleContent: Record<string, ComponentType> = {
  "tierkrankenversicherung-kosten": TierkrankenversicherungKostenContent,
};

export function getFullArticleContent(
  slug: string
): ComponentType | null {
  return fullArticleContent[slug] ?? null;
}
