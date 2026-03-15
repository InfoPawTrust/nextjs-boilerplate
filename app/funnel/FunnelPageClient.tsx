"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { FunnelProvider, useFunnel } from "../components/funnel/FunnelContext";
import { FunnelProgress } from "../components/funnel/FunnelProgress";
import { getFunnelPrefillFromParams } from "../components/funnel/funnel-prefill";
import { StepTierart } from "../components/funnel/step-tierart";
import { StepTiername } from "../components/funnel/step-tiername";
import { StepAlter } from "../components/funnel/step-alter";
import { StepGeschlecht } from "../components/funnel/step-geschlecht";
import { StepRasse } from "../components/funnel/step-rasse";
import { StepGewicht } from "../components/funnel/step-gewicht";
import { StepPlz } from "../components/funnel/step-plz";
import { StepVorerkrankung } from "../components/funnel/step-vorerkrankung";
import { StepKontakt } from "../components/funnel/step-kontakt";
import { StepConsent } from "../components/funnel/step-consent";
import { StepSubmit } from "../components/funnel/step-submit";
import { TOTAL_STEPS } from "../components/funnel/funnel-types";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const STEPS = [
  StepTierart,
  StepTiername,
  StepAlter,
  StepGeschlecht,
  StepRasse,
  StepGewicht,
  StepPlz,
  StepVorerkrankung,
  StepKontakt,
  StepConsent,
];

function FunnelSteps() {
  const { step } = useFunnel();

  if (step > TOTAL_STEPS) {
    return <StepSubmit />;
  }

  const CurrentStep = STEPS[step - 1];
  return <CurrentStep />;
}

export function FunnelPageClient() {
  const searchParams = useSearchParams();

  const prefill = useMemo(
    () => getFunnelPrefillFromParams(searchParams),
    [searchParams]
  );

  return (
    <FunnelProvider prefill={prefill}>
      <div className="min-h-screen bg-off-white">
        <Navbar />
        <main className="min-h-[60vh] pb-16 pt-4">
          <FunnelProgress />
          <FunnelSteps />
        </main>
        <Footer />
      </div>
    </FunnelProvider>
  );
}
