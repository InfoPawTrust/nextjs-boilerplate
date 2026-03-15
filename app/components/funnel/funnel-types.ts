/**
 * Lead-Funnel State – zentraler Typ für alle Steps.
 * Später an API /api/lead und Supabase angepasst.
 */

export type Tierart = "Hund" | "Katze";

export type Geschlecht = "männlich" | "weiblich";

export interface LeadFormState {
  tierart: Tierart | "";
  tiername: string;
  alter: string;
  geschlecht: Geschlecht | "";
  rasse: string;
  gewicht: string;
  plz: string;
  vorerkrankung: string;
  email: string;
  telefon: string;
  name: string;
  consent: boolean;
}

export const initialLeadFormState: LeadFormState = {
  tierart: "",
  tiername: "",
  alter: "",
  geschlecht: "",
  rasse: "",
  gewicht: "",
  plz: "",
  vorerkrankung: "",
  email: "",
  telefon: "",
  name: "",
  consent: false,
};

export const TOTAL_STEPS = 10;
