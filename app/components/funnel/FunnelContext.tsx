"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  initialLeadFormState,
  type LeadFormState,
  TOTAL_STEPS,
} from "./funnel-types";
import type { FunnelPrefillResult } from "./funnel-prefill";

type FunnelContextValue = {
  step: number;
  form: LeadFormState;
  setForm: (updates: Partial<LeadFormState>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (s: number) => void;
  isLastStep: boolean;
  isFirstStep: boolean;
  submit: () => Promise<void>;
  isSubmitting: boolean;
};

const FunnelContext = createContext<FunnelContextValue | null>(null);

type FunnelProviderProps = {
  children: ReactNode;
  prefill?: FunnelPrefillResult | null;
};

export function FunnelProvider({ children, prefill }: FunnelProviderProps) {
  const { initialForm, initialStep, skippedSteps } = prefill ?? {
    initialForm: initialLeadFormState,
    initialStep: 1,
    skippedSteps: [] as number[],
  };

  const [step, setStepState] = useState(initialStep);
  const [form, setFormState] = useState<LeadFormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const skippedRef = useRef<number[]>(skippedSteps);
  skippedRef.current = skippedSteps;

  const setForm = useCallback((updates: Partial<LeadFormState>) => {
    setFormState((prev) => ({ ...prev, ...updates }));
  }, []);

  const nextStep = useCallback(() => {
    setStepState((s) => {
      let next = s + 1;
      while (next <= TOTAL_STEPS && skippedRef.current.includes(next)) {
        next += 1;
      }
      return Math.min(next, TOTAL_STEPS + 1);
    });
  }, []);

  const prevStep = useCallback(() => {
    setStepState((s) => {
      let prev = s - 1;
      while (prev >= 1 && skippedRef.current.includes(prev)) {
        prev -= 1;
      }
      return Math.max(prev, 1);
    });
  }, []);

  const goToStep = useCallback((s: number) => {
    setStepState(Math.max(1, Math.min(s, TOTAL_STEPS + 1)));
  }, []);

  const submit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Lead konnte nicht gesendet werden");
      window.location.href = "/angebot";
    } catch {
      setIsSubmitting(false);
    }
  }, [form]);

  const value = useMemo<FunnelContextValue>(
    () => ({
      step,
      form,
      setForm,
      nextStep,
      prevStep,
      goToStep,
      isLastStep: step === TOTAL_STEPS,
      isFirstStep: step === 1,
      submit,
      isSubmitting,
    }),
    [step, form, setForm, nextStep, prevStep, goToStep, submit, isSubmitting]
  );

  return (
    <FunnelContext.Provider value={value}>{children}</FunnelContext.Provider>
  );
}

export function useFunnel() {
  const ctx = useContext(FunnelContext);
  if (!ctx) throw new Error("useFunnel must be used within FunnelProvider");
  return ctx;
}
