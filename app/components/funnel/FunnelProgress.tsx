"use client";

import { useFunnel } from "./FunnelContext";
import { TOTAL_STEPS } from "./funnel-types";

export function FunnelProgress() {
  const { step } = useFunnel();
  const current = step <= TOTAL_STEPS ? step : TOTAL_STEPS;
  const percent = (current / TOTAL_STEPS) * 100;

  return (
    <div className="w-full px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-lg">
        <p className="text-sm font-medium text-dark-slate/80">
          Schritt {current} von {TOTAL_STEPS}
        </p>
        <p className="mt-0.5 text-xs text-dark-slate/60">
          Dauert nur ca. 2 Minuten
        </p>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-dark-slate/10">
          <div
            className="h-full rounded-full bg-warm-gold transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
