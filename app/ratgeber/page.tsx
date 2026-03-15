import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/CTASection";
import { ArticleGridWithLoadMore, SpotlightArticle } from "./ArticleGrid";

export const metadata = {
  title: "Ratgeber | Tierkrankenversicherung – Guides & Tipps | PawTrust",
  description:
    "Verständliche Guides zu Tierarztkosten, Versicherungen für Hunde und Katzen sowie Tipps rund um die Gesundheit deines Haustiers.",
};

export default function RatgeberPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <main>
        {/* 1. Hero / Intro */}
        <section
          className="bg-white px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-20 lg:pb-16"
          aria-labelledby="ratgeber-heading"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1
              id="ratgeber-heading"
              className="text-2xl font-bold text-deep-trust-blue sm:text-3xl lg:text-4xl"
            >
              Ratgeber rund um Tierkrankenversicherungen
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-dark-slate/90">
              Hier findest du verständliche Guides zu Tierarztkosten,
              Versicherungen für Hunde und Katzen sowie Tipps rund um die
              Gesundheit deines Haustiers.
            </p>
          </div>
        </section>

        {/* 2. Spotlight + 3. Artikel-Grid + 4. Load More */}
        <section
          className="border-t border-dark-slate/10 bg-off-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
          aria-labelledby="artikel-heading"
        >
          <div className="mx-auto max-w-6xl">
            <h2 id="artikel-heading" className="sr-only">
              Artikel & Guides
            </h2>

            <div className="mb-14">
              <SpotlightArticle />
            </div>

            <ArticleGridWithLoadMore />
          </div>
        </section>

        {/* 8. CTA am Seitenende */}
        <CTASection variant="general" />
      </main>
      <Footer />
    </div>
  );
}
