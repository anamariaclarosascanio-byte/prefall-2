import type { Metadata } from "next";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { ALL_ARTICLES_QUERY } from "@/sanity/lib/queries";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Articles — Prefall",
  description:
    "Long-form analytical work on the economics of fashion's transition. Business models, regulation, and consumer behaviour.",
};

type SanityArticle = {
  _id: string;
  slug: string;
  title: string;
  tag: string;
  readTime?: string;
  synopsis: string;
  publishedAt: string;
  filterCategory?: string;
  keyTakeaways?: string[];
  sources?: string[];
  sectors?: string[];
  coverImage?: string;
};

function articleToModalData(a: SanityArticle) {
  return {
    slug: a.slug,
    title: a.title,
    tag: a.tag,
    date: a.publishedAt ? format(new Date(a.publishedAt), "d MMM yyyy") : "",
    readTime: a.readTime ?? "",
    synopsis: a.synopsis ?? "",
    takeaways: a.keyTakeaways ?? [],
    sources: a.sources ?? [],
    sectors: a.sectors ?? [],
  };
}

export default async function ArticlesPage() {
  let articles: SanityArticle[] = [];

  if (isSanityConfigured()) {
    articles = await client.fetch<SanityArticle[]>(ALL_ARTICLES_QUERY);
  }

  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <h1 className="page-header__heading">Articles</h1>
        <p className="page-header__subhead">
          Long-form analytical work on the economics of fashion&apos;s transition. Each piece applies
          the same lens: whether the proposition under examination holds up commercially, and what
          determines that.
        </p>
      </div>

      <section className="section" aria-label="All articles">

        {/* Filter + sort controls */}
        <div className="issues-controls">
          <div className="filter-bar" aria-label="Filter articles">
            <span className="eyebrow" style={{ marginRight: 6 }}>Filter by</span>
            <button className="filter-btn is-active" data-filter="all">All</button>
            <button className="filter-btn" data-filter="business-models">Business models</button>
            <button className="filter-btn" data-filter="regulation">Regulation</button>
            <button className="filter-btn" data-filter="consumer-behaviour">Consumer behaviour</button>
            <button className="filter-btn" data-filter="capital">Capital</button>
            <button className="filter-btn" data-filter="manufacturing">Manufacturing</button>
            <button className="filter-btn" data-filter="resale">Resale</button>
            <button className="filter-btn" data-filter="rental">Rental</button>
            <button className="filter-btn" data-filter="new-technologies">New technologies</button>
            <button className="filter-btn" data-filter="brands">Brands</button>
          </div>
          <div className="sort-bar">
            <span className="sort-bar__label">Sort</span>
            <button className="sort-btn is-active">Newest</button>
            <button className="sort-btn">Oldest</button>
          </div>
        </div>

        {articles.length === 0 ? (
          /* Empty state — no articles published yet */
          <div className="articles-empty">
            <p className="articles-empty__text">No articles published yet.</p>
          </div>
        ) : (
          /* Article grid — renders once articles exist in Sanity */
          <div className="articles-grid">
            {articles.map((a, i) => (
              <article
                key={a._id}
                className={`card${i === 0 || i === 3 ? " card--big" : ""}`}
                data-category={a.filterCategory ?? ""}
                data-article={JSON.stringify(articleToModalData(a))}
              >
                <div className="card__img">
                  {a.coverImage
                    ? <img src={a.coverImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    : <div className="img-ph" />
                  }
                </div>
                <div className="card__body">
                  <div className="card__meta-row">
                    <span className="card__tag">{a.tag}</span>
                    {a.readTime && <span className="card__read-time">{a.readTime}</span>}
                  </div>
                  <h3 className="card__title">{a.title}</h3>
                </div>
              </article>
            ))}
          </div>
        )}

      </section>
    </>
  );
}
