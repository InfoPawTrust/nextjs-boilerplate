import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CTASection } from "../../components/CTASection";
import { ARTICLES, CATEGORIES } from "../articles.data";
import { getFullArticleMeta } from "../content/full-article-meta";
import { getFullArticleContent } from "../content";
import { ArticleHero } from "../components/ArticleHero";
import { ReadingProgressBar } from "../components/ReadingProgressBar";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Artikel | PawTrust" };

  const fullMeta = getFullArticleMeta(slug);
  if (fullMeta) {
    return {
      title: fullMeta.metaTitle ?? `${article.title} | PawTrust`,
      description: fullMeta.metaDescription ?? article.teaser,
    };
  }

  return {
    title: `${article.title} | PawTrust`,
    description: article.teaser,
  };
}

export default async function RatgeberArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const fullMeta = getFullArticleMeta(slug);
  const Content = getFullArticleContent(slug);
  const hasFullContent = fullMeta && Content;

  const categoryLabel = CATEGORIES[article.category];

  if (hasFullContent && fullMeta && Content) {
    const readTimeLabel =
      fullMeta.readTimeMinutes === 1
        ? "1 Minute Lesezeit"
        : `${fullMeta.readTimeMinutes} Minuten Lesezeit`;

    return (
      <div className="min-h-screen bg-off-white">
        <ReadingProgressBar />
        <Navbar />
        <main>
          <div className="border-b border-dark-slate/10 bg-white">
            <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
              <nav aria-label="Breadcrumb" className="text-sm">
                <ol className="flex flex-wrap items-center gap-x-2 text-dark-slate/80">
                  <li>
                    <Link
                      href="/ratgeber"
                      className="hover:text-deep-trust-blue hover:underline"
                    >
                      Ratgeber
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li className="text-dark-slate/90">Artikel</li>
                </ol>
              </nav>
            </div>
          </div>

          <ArticleHero
            title={article.title}
            subtitle={fullMeta.subtitle}
            image={fullMeta.heroImage}
          />

          <div className="border-b border-dark-slate/10 bg-white">
            <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-dark-slate/80">
                <span className="font-semibold uppercase tracking-wider text-warm-gold">
                  {categoryLabel}
                </span>
                <span>{readTimeLabel}</span>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <article>
              <Content />
            </article>
          </div>

          <CTASection variant="general" />
        </main>
        <Footer />
      </div>
    );
  }

  // Platzhalter für Artikel ohne vollständigen Inhalt
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href="/ratgeber"
            className="text-sm font-medium text-deep-trust-blue hover:underline"
          >
            ← Ratgeber
          </Link>
        </nav>
        <article>
          <span className="text-xs font-semibold uppercase tracking-wider text-warm-gold">
            {categoryLabel}
          </span>
          <h1 className="mt-2 text-2xl font-bold text-deep-trust-blue sm:text-3xl">
            {article.title}
          </h1>
          <p className="mt-6 text-dark-slate/90">
            Dieser Artikel wird in Kürze mit vollständigem Inhalt ergänzt.
          </p>
          <p className="mt-4">
            <Link
              href="/ratgeber"
              className="font-semibold text-deep-trust-blue hover:underline"
            >
              Zurück zur Ratgeber-Übersicht
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
