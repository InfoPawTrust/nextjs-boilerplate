"use client";

import { useFunnel } from "./FunnelContext";

type Props = {
  onNext?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  hideBack?: boolean;
  isSubmit?: boolean;
};

export function FunnelNav({
  onNext,
  nextLabel = "Weiter",
  nextDisabled = false,
  hideBack = false,
  isSubmit = false,
}: Props) {
  const { prevStep, isFirstStep, submit, isSubmitting } = useFunnel();

  return (
    <div className="mt-10 flex w-full flex-col gap-3 px-4 sm:px-6 sm:flex-row sm:justify-between">
      {!hideBack && !isFirstStep && (
        <button
          type="button"
          onClick={prevStep}
          className="order-2 min-h-[48px] rounded-xl border-2 border-dark-slate/20 bg-white px-6 py-3 text-base font-semibold text-dark-slate transition-colors hover:border-dark-slate/40 hover:bg-dark-slate/5 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 sm:order-1"
        >
          Zurück
        </button>
      )}
      <button
        type="button"
        onClick={isSubmit ? submit : onNext}
        disabled={nextDisabled || isSubmitting}
        className="order-1 min-h-[48px] flex-1 rounded-xl bg-gradient-to-bl from-warm-gold-light via-warm-gold to-warm-gold-dark px-6 py-3.5 text-base font-semibold text-deep-trust-blue shadow-md shadow-warm-gold-dark/25 transition-all hover:brightness-105 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 sm:order-2 sm:max-w-xs"
      >
        {isSubmitting ? "Wird gesendet…" : isSubmit ? "Kostenlosen Tarifvergleich anfordern" : nextLabel}
      </button>
    </div>
  );
}
