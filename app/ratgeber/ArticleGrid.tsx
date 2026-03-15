"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CATEGORIES,
  GRID_ARTICLES,
  SPOTLIGHT_ARTICLE,
  type Article,
} from "./articles.data";

const INITIAL_VISIBLE = 3;

function ArticlePlaceholderImage({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-dark-slate/10 text-dark-slate/30 ${className}`}
      aria-hidden
    >
      <svg
        className="h-12 w-12 sm:h-16 sm:w-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
}

function ArticleCard({
  article,
  size = "default",
}: {
  article: Article;
  size?: "default" | "spotlight";
}) {
  const categoryLabel = CATEGORIES[article.category];
  const href = `/ratgeber/${article.slug}`;

  if (size === "spotlight") {
    return (
      <article className="overflow-hidden rounded-2xl border border-dark-slate/10 bg-white shadow-sm transition-shadow hover:shadow-md">
        <Link href={href} className="block">
          <div className="aspect-[16/10] w-full sm:aspect-[2/1]">
            {article.image ? (
              <img
                src={article.image}
                alt=""
                className="h-full w-full object-cover object-left-top"
              />
            ) : (
              <ArticlePlaceholderImage className="h-full w-full" />
            )}
          </div>
          <div className="p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-warm-gold">
              {categoryLabel}
            </span>
            <h2 className="mt-2 text-xl font-bold text-deep-trust-blue sm:text-2xl">
              {article.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-dark-slate/80">
              {article.teaser}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-deep-trust-blue">
              Artikel lesen →
            </span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-dark-slate/10 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={href} className="flex flex-1 flex-col">
        <div className="aspect-[16/10] w-full">
          {article.image ? (
            <img
              src={article.image}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <ArticlePlaceholderImage className="h-full w-full" />
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-warm-gold">
            {categoryLabel}
          </span>
          <h3 className="mt-2 text-lg font-bold text-deep-trust-blue line-clamp-2">
            {article.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-dark-slate/80 line-clamp-3">
            {article.teaser}
          </p>
          <span className="mt-3 text-sm font-semibold text-deep-trust-blue">
            Artikel lesen →
          </span>
        </div>
      </Link>
    </article>
  );
}

export function ArticleGridWithLoadMore() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const visible = GRID_ARTICLES.slice(0, visibleCount);
  const hasMore = visibleCount < GRID_ARTICLES.length;

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount(GRID_ARTICLES.length)}
            className="rounded-lg border-2 border-deep-trust-blue bg-transparent px-8 py-3 text-base font-semibold text-deep-trust-blue transition-colors hover:bg-deep-trust-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2"
          >
            Mehr Artikel anzeigen
          </button>
        </div>
      )}
    </>
  );
}

export function SpotlightArticle() {
  return (
    <section aria-labelledby="spotlight-heading">
      <h2 id="spotlight-heading" className="sr-only">
        Spotlight-Artikel
      </h2>
      <ArticleCard article={SPOTLIGHT_ARTICLE} size="spotlight" />
    </section>
  );
}
