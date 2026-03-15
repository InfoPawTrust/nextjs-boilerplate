import Link from "next/link";

type Variant = "general" | "dog" | "cat";

const content = {
  general: {
    heading: "Finde jetzt die passende Tierkrankenversicherung.",
    ctaHref: "/funnel",
  },
  dog: {
    heading: "Finde jetzt die passende Hundekrankenversicherung.",
    ctaHref: "/funnel",
  },
  cat: {
    heading: "Finde jetzt die passende Katzenkrankenversicherung.",
    ctaHref: "/funnel",
  },
};

export function CTASection({ variant = "general" }: { variant?: Variant }) {
  const c = content[variant];

  return (
    <section
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="cta-heading"
          className="text-2xl font-bold text-deep-trust-blue sm:text-3xl"
        >
          {c.heading}
        </h2>
        <p className="mt-4 text-dark-slate/80">
          Kostenlos & unverbindlich
        </p>
        <div className="mt-8">
          <Link
            href={c.ctaHref}
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-bl from-warm-gold-light via-warm-gold to-warm-gold-dark px-8 py-3.5 text-base font-semibold text-deep-trust-blue shadow-md shadow-warm-gold-dark/30 transition-all hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2"
          >
            Kostenlosen Tarifvergleich anfordern
          </Link>
        </div>
      </div>
    </section>
  );
}
