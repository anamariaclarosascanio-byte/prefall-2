import Link from "next/link";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { FEATURED_ARTICLES_QUERY, ALL_COMPANIES_QUERY } from "@/sanity/lib/queries";
import { format } from "date-fns";

/* ── Fixed value chain nodes (structure never changes) ── */
const VALUE_CHAIN_NODES = [
  { num: "01", name: "Raw Materials",      slug: "raw-materials" },
  { num: "02", name: "Yarn & Fabric",      slug: "yarn-fabric" },
  { num: "03", name: "Manufacturing",      slug: "manufacturing" },
  { num: "04", name: "Brands",             slug: "brands" },
  { num: "05", name: "Logistics & Retail", slug: "logistics-retail" },
  { num: "06", name: "Consumer",           slug: "consumer" },
  { num: "07", name: "Secondary Market",   slug: "secondary-market" },
];

type SanityArticle = {
  _id: string;
  slug: string;
  title: string;
  tag: string;
  readTime?: string;
  synopsis: string;
  publishedAt: string;
  keyTakeaways?: string[];
  sources?: string[];
  sectors?: string[];
  coverImage?: string;
};

type SanityCompany = {
  _id: string;
  slug: string;
  name: string;
  modelDescriptor?: string;
  focus?: string;
  valueChainNodes?: string[];
  logo?: string;
};

function formatArticleForModal(a: SanityArticle) {
  return {
    slug: a.slug,
    title: a.title,
    tag: a.tag,
    date: a.publishedAt
      ? format(new Date(a.publishedAt), "d MMM yyyy")
      : "",
    readTime: a.readTime ?? "",
    synopsis: a.synopsis ?? "",
    takeaways: a.keyTakeaways ?? [],
    sources: a.sources ?? [],
    sectors: a.sectors ?? [],
  };
}

export default async function HomePage() {
  let featuredArticles: SanityArticle[] = [];
  let companies: SanityCompany[] = [];

  if (isSanityConfigured()) {
    [featuredArticles, companies] = await Promise.all([
      client.fetch<SanityArticle[]>(FEATURED_ARTICLES_QUERY),
      client.fetch<SanityCompany[]>(ALL_COMPANIES_QUERY),
    ]);
  }

  const readingNow   = featuredArticles.slice(0, 3);
  const featuredArticle = featuredArticles[3] ?? featuredArticles[0] ?? null;
  const featuredCompany = companies[0] ?? null;

  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="hero" aria-labelledby="hero-heading">
        <p className="hero__label">
          Independent editorial intelligence on the business of fashion
        </p>
        <h1 className="hero__heading" id="hero-heading">
          The business behind<br />
          the next season<br />
          of fashion.
        </h1>
        <p className="hero__body">
          Prefall analyses the economic viability of fashion&apos;s transition toward
          sustainability. We cover the business models, the regulation, and the consumer
          behaviour that determine which propositions hold up commercially and which do not.
        </p>
        <div className="hero__ctas">
          <Link href="/articles" className="btn btn--primary">Read the latest →</Link>
          <Link href="/contact" className="btn btn--ghost">Get in touch →</Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          READING NOW — only renders if articles exist
      ══════════════════════════════════════════════════ */}
      {readingNow.length > 0 && (
        <section className="section" aria-label="Reading now" style={{ borderBottom: "none" }}>
          <span className="section__label">Reading now</span>

          {/* Row 1: editorial intro + article cards */}
          <div className="home-grid__row1">
            <div className="home-grid__intro">
              <p className="home-grid__intro-body">
                Analysis of business models, consumer behaviour, and the economic limits shaping sustainable fashion.
              </p>
              <Link href="/articles" className="home-grid__intro-cta link-u">
                View all →
              </Link>
            </div>

            <div style={{ display: "contents" }}>
              {readingNow.map((article) => (
                <article
                  key={article._id}
                  className="card"
                  aria-label="Open article"
                  data-article={JSON.stringify(formatArticleForModal(article))}
                >
                  <div className="card__img">
                    {article.coverImage
                      ? <img src={article.coverImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      : <div className="img-ph" />
                    }
                  </div>
                  <div className="card__body">
                    <div className="card__meta-row">
                      <span className="card__tag">{article.tag}</span>
                      {article.readTime && <span className="card__time">{article.readTime}</span>}
                    </div>
                    <h3 className="card__title">{article.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Row 2: featured article — only if more than 3 exist */}
          {featuredArticle && (
            <div className="home-grid__row2">
              <article
                className="card card--feat"
                aria-label="Open article"
                data-article={JSON.stringify(formatArticleForModal(featuredArticle))}
              >
                <div className="card__img">
                  {featuredArticle.coverImage
                    ? <img src={featuredArticle.coverImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    : <div className="img-ph" />
                  }
                </div>
              </article>
              <div className="featured-text">
                <span className="featured-text__label">Featured</span>
                <h2 className="featured-text__title">{featuredArticle.title}</h2>
                <p className="featured-text__excerpt">{featuredArticle.synopsis}</p>
                <Link href={`/articles/${featuredArticle.slug}`} className="featured-text__cta link-u">
                  Read article →
                </Link>
              </div>
            </div>
          )}
        </section>
      )}

      {/* ══════════════════════════════════════════════════
          FEATURED COMPANY — only renders if companies exist
      ══════════════════════════════════════════════════ */}
      {featuredCompany && (
        <section
          className="section"
          aria-label="Featured company"
          style={{ borderBottom: "none", paddingTop: 48, paddingBottom: 48 }}
        >
          <p className="company-module__label">From the directory</p>
          <div className="company-module">
            <div className="company-module__text">
              <h2 className="company-module__name">{featuredCompany.name}</h2>
              {featuredCompany.focus && (
                <p className="company-module__node">{featuredCompany.focus}</p>
              )}
              {featuredCompany.modelDescriptor && (
                <p className="company-module__body">{featuredCompany.modelDescriptor}</p>
              )}
              <Link href={`/companies/${featuredCompany.slug}`} className="btn btn--ghost">
                View in directory →
              </Link>
            </div>
            <div className="company-module__img">
              {featuredCompany.logo
                ? <img src={featuredCompany.logo} alt={featuredCompany.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                : <div className="img-ph" />
              }
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════
          REGULATION IN FOCUS — real static content
      ══════════════════════════════════════════════════ */}
      <section
        className="section"
        aria-label="Regulation in focus"
        style={{ paddingTop: 40, borderBottom: "none" }}
      >
        <span className="section__label">Regulation that matters now</span>

        <div className="regulation-module">
          <div>
            <div className="status-badge status-badge--transit">
              <span className="status-badge__dot status-badge__dot--transit" />
              In transposition
            </div>
            <h2 className="regulation-module__name">CSRD</h2>
            <p className="regulation-module__full">Corporate Sustainability Reporting Directive</p>
            <p className="regulation-module__summary">
              Requires large companies to disclose detailed information on how they manage social and
              environmental challenges. First reports due 2025 for large companies, with cascade through
              mid-size companies by 2027.
            </p>
            <Link href="/regulation" className="btn btn--ghost">
              View all regulation →
            </Link>
          </div>

          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <div>
                <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>Also in force</span>
                <div className="regulation-list">
                  <span className="regulation-list__item">
                    <span className="status-badge__dot status-badge__dot--active" style={{ flexShrink: 0, marginTop: 6 }} />
                    ESPR: Ecodesign for Sustainable Products
                  </span>
                  <span className="regulation-list__item">
                    <span className="status-badge__dot status-badge__dot--transit" style={{ flexShrink: 0, marginTop: 6 }} />
                    Digital Product Passport
                  </span>
                  <span className="regulation-list__item">
                    <span className="status-badge__dot status-badge__dot--transit" style={{ flexShrink: 0, marginTop: 6 }} />
                    Green Claims Directive
                  </span>
                </div>
              </div>
              <div>
                <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>In preparation</span>
                <div className="regulation-list">
                  <span className="regulation-list__item">
                    <span className="status-badge__dot status-badge__dot--prep" style={{ flexShrink: 0, marginTop: 6 }} />
                    Extended Producer Responsibility
                  </span>
                  <span className="regulation-list__item">
                    <span className="status-badge__dot status-badge__dot--prep" style={{ flexShrink: 0, marginTop: 6 }} />
                    Textile Waste Directive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FULL-WIDTH IMAGE
      ══════════════════════════════════════════════════ */}
      <div className="home-fullwidth-img">
        <div className="img-ph" />
      </div>

      {/* ══════════════════════════════════════════════════
          VALUE CHAIN PREVIEW — fixed structure, always shows
      ══════════════════════════════════════════════════ */}
      <section className="section" aria-label="Value chain" style={{ borderBottom: "none" }}>
        <div className="vc-header">
          <div>
            <h2 className="section__heading section__heading--entity">
              The fashion value chain
            </h2>
            <p className="section__subhead">
              Seven nodes from raw materials to the secondary market. Click any node to see the companies, regulations, and analysis that touch it.
            </p>
          </div>
          <Link href="/value-chain" className="btn btn--ghost" style={{ flexShrink: 0 }}>
            Open the full map →
          </Link>
        </div>

        <nav className="vc-nodes" aria-label="Value chain nodes">
          {VALUE_CHAIN_NODES.map((node) => (
            <Link
              key={node.slug}
              href={`/value-chain/${node.slug}`}
              className="vc-node"
            >
              <span className="vc-node__num">{node.num}</span>
              <span className="vc-node__name">{node.name}</span>
              <span className="vc-node__arr">↗</span>
            </Link>
          ))}
        </nav>

        <p className="vc-caption">
          The economics of the industry rarely sit inside a single node. The cost of a sustainability decision at one stage is often absorbed, or avoided, at another.
        </p>
      </section>
    </>
  );
}
