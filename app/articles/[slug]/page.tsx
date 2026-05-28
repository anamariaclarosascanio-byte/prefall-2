import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { ARTICLE_BY_SLUG_QUERY, ARTICLE_SLUGS_QUERY, ALL_ARTICLES_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import Link from "next/link";

type Params = { params: Promise<{ slug: string }> };

type SanityArticle = {
  _id: string;
  slug: string;
  title: string;
  tag: string;
  readTime?: string;
  dek?: string;
  synopsis?: string;
  publishedAt: string;
  body?: unknown[];
  keyTakeaways?: string[];
  sources?: string[];
  sectors?: string[];
  coverImage?: string;
  valueChainNodes?: string[];
};

export async function generateStaticParams() {
  if (!isSanityConfigured()) return [];
  const slugs = await client.fetch<{ slug: string }[]>(ARTICLE_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  if (!isSanityConfigured()) return { title: "Article — Prefall" };
  const article = await client.fetch<SanityArticle | null>(ARTICLE_BY_SLUG_QUERY, { slug });
  return {
    title: article ? `${article.title} — Prefall` : "Article — Prefall",
    description: article?.synopsis ?? "",
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;

  if (!isSanityConfigured()) notFound();

  const [article, allArticles] = await Promise.all([
    client.fetch<SanityArticle | null>(ARTICLE_BY_SLUG_QUERY, { slug }),
    client.fetch<SanityArticle[]>(ALL_ARTICLES_QUERY),
  ]);

  if (!article) notFound();

  const related = allArticles.filter((a) => a.slug !== slug).slice(0, 4);
  const pubDate = article.publishedAt
    ? format(new Date(article.publishedAt), "d MMMM yyyy")
    : "";

  return (
    <article className="article-page">

      {/* ── Header ── */}
      <div className="article-page__header">
        <div className="article-header__meta">
          <span className="card__tag">{article.tag}</span>
          {article.readTime && <span className="article-header__read">{article.readTime}</span>}
        </div>
        <h1 className="article-page__title">{article.title}</h1>
        {article.dek && <p className="article-page__dek">{article.dek}</p>}
        <div className="article-header__byline">
          <span>By Ana Maria Claros</span>
          {pubDate && <span className="article-header__date">{pubDate}</span>}
        </div>
      </div>

      {/* ── Hero image ── */}
      <div className="article-page__figure">
        {article.coverImage
          ? <img src={article.coverImage} alt="" />
          : <div className="img-ph" style={{ height: 480 }} />
        }
      </div>

      {/* ── Body + sidebar ── */}
      <div className="article-page__body-wrap">
        <div className="article-page__body prose">
          {article.body && (
            <PortableText value={article.body as Parameters<typeof PortableText>[0]["value"]} />
          )}
        </div>

        <aside className="article-page__sidebar">
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="article-sidebar__block">
              <p className="article-sidebar__label">Key takeaways</p>
              <ul className="article-sidebar__list">
                {article.keyTakeaways.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          )}

          {article.sources && article.sources.length > 0 && (
            <div className="article-sidebar__block">
              <button className="sources-toggle" id="article-sources-btn" type="button">
                <span>Sources</span>
                <span className="sources-toggle__icon">+</span>
              </button>
              <ul className="sources-body" id="article-sources">
                {article.sources.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {/* ── Related articles ── */}
      {related.length > 0 && (
        <div className="related-section">
          <div className="related-section__head">
            <p className="related-section__label">Related</p>
            <div className="related-nav">
              <button className="related-nav-btn" aria-label="Scroll left">←</button>
              <button className="related-nav-btn" aria-label="Scroll right">→</button>
            </div>
          </div>
          <div className="related-grid" id="related-grid">
            {related.map((a) => (
              <Link key={a._id} href={`/articles/${a.slug}`} className="card">
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
              </Link>
            ))}
          </div>
        </div>
      )}

    </article>
  );
}
