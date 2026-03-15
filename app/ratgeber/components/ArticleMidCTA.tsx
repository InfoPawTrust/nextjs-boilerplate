import Link from "next/link";

type Props = {
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
};

export function ArticleMidCTA({
  title,
  text,
  buttonLabel,
  href,
}: Props) {
  return (
    <aside
      className="my-12 rounded-2xl border border-warm-gold/30 bg-warm-gold/5 p-6 sm:p-8"
      aria-labelledby="mid-cta-heading"
    >
      <h2
        id="mid-cta-heading"
        className="text-xl font-bold text-deep-trust-blue sm:text-2xl"
      >
        {title}
      </h2>
      <p className="mt-3 text-dark-slate/90">{text}</p>
      <div className="mt-6">
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-bl from-warm-gold-light via-warm-gold to-warm-gold-dark px-6 py-3 text-base font-semibold text-deep-trust-blue shadow-md shadow-warm-gold-dark/20 transition-all hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2"
        >
          {buttonLabel}
        </Link>
      </div>
    </aside>
  );
}
