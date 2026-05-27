import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles — Prefall",
  description:
    "Editorial intelligence on sustainable fashion economics — business models, regulation, and consumer behaviour.",
};

const CATEGORIES = ["All", "Business Models", "Regulation", "Consumer", "Supply Chain", "Finance"];

const ARTICLES = [
  {
    id: "1", eyebrow: "Business Models", date: "Apr 2026",
    title: "Why resale isn't the silver bullet brands hoped for",
    body: "Resale platforms promised margin-positive circularity. The unit economics say otherwise. We model the numbers across five platform archetypes.",
    slug: "resale-economics",
  },
  {
    id: "2", eyebrow: "Regulation", date: "Mar 2026",
    title: "CSRD: what the first wave of reports actually revealed",
    body: "Mandatory disclosure is here. The data quality gap between ambition and reality is wider than expected.",
    slug: "csrd-first-reports",
  },
  {
    id: "3", eyebrow: "Consumer", date: "Mar 2026",
    title: "The affordability ceiling and the sustainability premium",
    body: "Willingness-to-pay research across seven markets shows the ceiling is lower than brands assume.",
    slug: "affordability-ceiling",
  },
  {
    id: "4", eyebrow: "Supply Chain", date: "Feb 2026",
    title: "Nearshoring the seams: what the shift to European manufacturing actually costs",
    body: "The politics of nearshoring are simple. The economics are not. We break down labour cost differentials across five sourcing regions.",
    slug: "nearshoring-costs",
  },
  {
    id: "5", eyebrow: "Finance", date: "Feb 2026",
    title: "Green bonds, greenwashing, and the capital market's patience",
    body: "Sustainable finance instruments are proliferating. Accountability frameworks are not keeping pace.",
    slug: "green-bonds",
  },
  {
    id: "6", eyebrow: "Business Models", date: "Jan 2026",
    title: "Rental fashion's missing middle: between luxury and fast fashion",
    body: "Rental works at the luxury end and shows promise for occasionwear. Between those poles, the model hasn't found its footing.",
    slug: "rental-missing-middle",
  },
];

export default function ArticlesPage() {
  return (
    <>
      {/* Page header */}
      <div
        style={{
          padding: "52px var(--margin) 40px",
          borderBottom: "1px solid var(--sep)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Intelligence</p>
          <h1
            style={{
              fontSize: "var(--t-h2)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Articles
          </h1>
        </div>

        {/* Sort */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            height: 40,
            padding: "0 20px",
            fontSize: 13,
            fontWeight: 400,
            color: "var(--gray)",
            background: "transparent",
            border: "1px solid var(--sep)",
            cursor: "pointer",
          }}
        >
          Sort: Latest ↕
        </button>
      </div>

      {/* Category filter */}
      <div
        style={{
          padding: "0 var(--margin)",
          borderBottom: "1px solid var(--sep)",
          display: "flex",
          gap: 0,
          overflowX: "auto",
        }}
      >
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat}
            style={{
              padding: "16px 20px",
              fontSize: 13,
              fontWeight: 400,
              color: i === 0 ? "#282828" : "var(--gray)",
              background: "transparent",
              border: "none",
              borderBottom: i === 0 ? "2px solid #282828" : "2px solid transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "color 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article grid */}
      <section
        style={{ padding: "40px var(--margin) var(--section-py)" }}
        aria-label="Articles"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px var(--gutter)",
          }}
          className="articles-grid"
        >
          {ARTICLES.map((article) => (
            <article key={article.id} className="card">
              <div
                style={{
                  aspectRatio: "3/2",
                  background: "#E8E8E6",
                  marginBottom: 20,
                  overflow: "hidden",
                }}
              />
              <p className="card__eyebrow">
                {article.eyebrow}
                <span className="card__dot" />
                {article.date}
              </p>
              <h2 className="card__title" style={{ fontSize: 18 }}>
                {article.title}
              </h2>
              <p className="card__body">{article.body}</p>
              <Link
                href={`/articles/${article.slug}`}
                style={{
                  display: "inline-block",
                  fontSize: 13,
                  color: "var(--gray)",
                  marginTop: 16,
                }}
                className="link-u"
              >
                Read →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) {
          .articles-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .articles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
