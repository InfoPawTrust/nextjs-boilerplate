/**
 * Zentrale Prefill-Logik für den Lead-Funnel.
 * Liest Query-Parameter (pet_name, pet_type) und berechnet initialen State sowie Start-Step.
 */

import type { LeadFormState, Tierart } from "./funnel-types";
import { initialLeadFormState } from "./funnel-types";

const VALID_TIERART: Tierart[] = ["Hund", "Katze"];
const MIN_NAME_LENGTH = 2;

export type FunnelPrefillResult = {
  initialForm: LeadFormState;
  initialStep: number;
  skippedSteps: number[];
};

/**
 * Prüft, ob pet_type ein gültiger Wert ist (nur "Hund" oder "Katze").
 */
function parsePetType(value: string | null): Tierart | null {
  if (!value || typeof value !== "string") return null;
  const normalized = value.trim();
  if (VALID_TIERART.includes(normalized as Tierart)) return normalized as Tierart;
  return null;
}

/**
 * Prüft, ob pet_name valide ist (mind. 2 Zeichen, nicht nur Leerzeichen).
 */
function parsePetName(value: string | null): string | null {
  if (!value || typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length >= MIN_NAME_LENGTH ? trimmed : null;
}

/**
 * Liest URL-SearchParams (z. B. aus useSearchParams()) und berechnet:
 * - initialForm: State mit vorbelegten Werten
 * - initialStep: erster anzuzeigender Step (1 = Tierart, 2 = Tiername, 3 = Alter)
 * - skippedSteps: Steps die übersprungen werden (1 = Tierart, 2 = Tiername)
 *
 * Logik:
 * - Kein Type, kein Name => Start bei 1 (Tierart)
 * - Type, kein Name => Start bei 2 (Tiername), Step 1 überspringen
 * - Type + Name => Start bei 3 (Alter), Step 1 und 2 überspringen
 * - Nur Name (ohne Type) => Start bei 1 (Tierart), Tiername im State; Step 2 wird beim Weitergehen übersprungen
 */
export function getFunnelPrefillFromParams(
  params: URLSearchParams
): FunnelPrefillResult {
  const petType = parsePetType(params.get("pet_type"));
  const petName = parsePetName(params.get("pet_name"));

  const initialForm: LeadFormState = { ...initialLeadFormState };

  const skippedSteps: number[] = [];

  if (petType) {
    initialForm.tierart = petType;
    skippedSteps.push(1);
  }

  if (petName) {
    initialForm.tiername = petName;
    skippedSteps.push(2);
  }

  let initialStep: number;
  if (petType && petName) {
    initialStep = 3;
  } else if (petType) {
    initialStep = 2;
  } else {
    initialStep = 1;
  }

  return { initialForm, initialStep, skippedSteps };
}

/**
 * Baut die Funnel-URL mit optionalem Prefill (für Links aus Hero etc.).
 * - pet_type: "Hund" | "Katze"
 * - pet_name: string (wird nur mitgenommen wenn >= 2 Zeichen)
 */
export function buildFunnelUrl(options: {
  petType?: Tierart | null;
  petName?: string | null;
}): string {
  const search = new URLSearchParams();
  const type = options.petType && VALID_TIERART.includes(options.petType) ? options.petType : null;
  const name = parsePetName(options.petName ?? null);

  if (type) search.set("pet_type", type);
  if (name) search.set("pet_name", name);

  const query = search.toString();
  return query ? `/funnel?${query}` : "/funnel";
}
