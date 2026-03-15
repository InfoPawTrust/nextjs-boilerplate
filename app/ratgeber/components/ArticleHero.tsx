type Props = {
  title: string;
  subtitle: string;
  image: string | null;
};

const HERO_ASPECT = "aspect-[16/10] sm:aspect-[2/1]";

function PlaceholderHeroImage() {
  return (
    <div
      className={`flex w-full items-center justify-center bg-dark-slate/10 text-dark-slate/30 ${HERO_ASPECT}`}
      aria-hidden
    >
      <svg
        className="h-20 w-20 sm:h-24 sm:w-24"
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

export function ArticleHero({ title, subtitle, image }: Props) {
  return (
    <header className="overflow-hidden bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className={`w-full overflow-hidden rounded-xl ${image ? "" : "bg-dark-slate/5"}`}>
          {image ? (
            <img
              src={image}
              alt=""
              className={`${HERO_ASPECT} w-full object-cover object-left-top`}
            />
          ) : (
            <PlaceholderHeroImage />
          )}
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 pt-8 pb-6 sm:px-6 lg:px-8 lg:pt-10 lg:pb-8">
        <h1 className="text-2xl font-bold text-deep-trust-blue sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-lg text-dark-slate/80">{subtitle}</p>
      </div>
    </header>
  );
}
