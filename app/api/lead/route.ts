import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/**
 * POST /api/lead
 * Speichert Lead-Daten in Supabase (Tabelle "leads").
 * Mapping: Funnel-Felder → DB-Spalten (siehe Dokumentation unten).
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      tierart,
      tiername,
      alter,
      geschlecht,
      rasse,
      gewicht,
      plz,
      vorerkrankung,
      email,
      telefon,
      name,
      consent,
    } = body;

    if (!tierart || !tiername || !alter || !plz || !email || !telefon) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen" },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Einwilligung erforderlich" },
        { status: 400 }
      );
    }

    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : request.headers.get("x-real-ip") ?? null;
    const userAgent = request.headers.get("user-agent") ?? null;
    const referrer = request.headers.get("referer") ?? null;

    const data = {
      tierart,
      tiername,
      alter_text: alter,
      geschlecht: geschlecht ?? "",
      rasse: rasse ?? "",
      gewicht: gewicht ?? "",
      vorerkrankung: vorerkrankung ?? "",
      plz,
      vorname: (name ?? "").trim() || "",
      nachname: "",
      email,
      telefon,
      consent: !!consent,
      consent_text_version: "v1",
      consent_timestamp: new Date().toISOString(),
      status: "new",
      ip,
      user_agent: userAgent,
      referrer,
      source: "funnel",
    };

    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
      console.error("[Lead] SUPABASE_URL oder SUPABASE_ANON_KEY fehlen. Lead nicht gespeichert.");
      return NextResponse.json(
        { error: "Konfiguration fehlt" },
        { status: 503 }
      );
    }

    const { error } = await supabase.from("leads").insert([data]);

    if (error) {
      console.error("[Lead] Supabase Insert-Fehler:", error.message, error.code, error.details);
      console.error("[Lead] Vollständiger Fehler:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Speicherung fehlgeschlagen" },
        { status: 500 }
      );
    }

    console.log("[Lead] Gespeichert:", { tierart, tiername, plz, email: email?.slice(0, 3) + "…" });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Lead] Serverfehler:", err);
    return NextResponse.json(
      { error: "Serverfehler" },
      { status: 500 }
    );
  }
}

/*
  Mapping Funnel → Supabase "leads":
  - alter (Funnel)     → alter_text (DB)
  - name (Funnel)      → vorname (DB), nachname = ''
  - Rest 1:1: tierart, tiername, geschlecht, rasse, gewicht, vorerkrankung, plz, email, telefon, consent
  - Serverseitig: consent_timestamp (now), consent_text_version ("v1"), status ("new"), ip, user_agent, referrer, source ("funnel")
*/
