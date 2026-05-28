import Link from "next/link";

/* ── Placeholder articles (will come from Sanity) ── */
const READING_NOW = [
  {
    id: "1",
    tag: "Business Models",
    read: "8 min",
    title: "Why resale isn't the silver bullet brands hoped for",
  },
  {
    id: "2",
    tag: "Regulation",
    read: "6 min",
    title: "CSRD: what the first wave of reports actually revealed",
  },
  {
    id: "3",
    tag: "Consumer",
    read: "5 min",
    title: "The affordability ceiling and the sustainability premium",
  },
];

const FEATURED_ARTICLE = {
  title: "The secondhand market's unit economics problem",
  excerpt:
    "Resale platforms promised margin-positive circularity. Three years of data across six platforms shows the economics only work at scale — and most brands are not at scale.",
};

const FEATURED_COMPANY = {
  name: "Veja",
  node: "Brands",
  body: "Veja has built one of the most scrutinised supply chains in fashion. The brand publishes cost breakdowns that few others dare to share. We look at what the numbers reveal about the economics of radical transparency.",
};

const VALUE_CHAIN_NODES = [
  { num: "01", name: "Raw Materials",      slug: "rawmat" },
  { num: "02", name: "Yarn & Fabric",      slug: "spinmill" },
  { num: "03", name: "Manufacturing",      slug: "manufacturing" },
  { num: "04", name: "Brands",             slug: "brands" },
  { num: "05", name: "Logistics & Retail", slug: "retail" },
  { num: "06", name: "Consumer",           slug: "consumer" },
  { num: "07", name: "Secondary Market",   slug: "secondary" },
];

export default function HomePage() {
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
          <Link href="/about#contact" className="btn btn--ghost">Get in touch →</Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          READING NOW
      ══════════════════════════════════════════════════ */}
      <section className="section" aria-label="Reading now" style={{ borderBottom: "none" }}>
        <span className="section__label">Reading now</span>

        {/* Row 1: editorial intro (cols 1–2) + 3 article cards (cols 3–5) */}
        <div className="home-grid__row1">
          <div className="home-grid__intro">
            <p className="home-grid__intro-body">
              Analysis of business models, consumer behaviour, and the economic limits shaping sustainable fashion.
            </p>
            <Link href="/articles" className="home-grid__intro-cta link-u">
              View all →
            </Link>
          </div>

          <div id="reading-now-row1" style={{ display: "contents" }}>
            {READING_NOW.map((article) => (
              <article key={article.id} className="card" aria-label="Open article">
                <div className="card__img">
                  <div className="img-ph" />
                </div>
                <div className="card__body">
                  <div className="card__meta-row">
                    <span className="card__tag">{article.tag}</span>
                    <span className="card__time">{article.read}</span>
                  </div>
                  <h3 className="card__title">{article.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Row 2: large image (3fr) + featured text (2fr) */}
        <div className="home-grid__row2" id="reading-now-row2">
          <article className="card card--feat" aria-label="Open article">
            <div className="card__img">
              <div className="img-ph" />
            </div>
          </article>
          <div className="featured-text">
            <span className="featured-text__label">Featured</span>
            <h2 className="featured-text__title">{FEATURED_ARTICLE.title}</h2>
            <p className="featured-text__excerpt">{FEATURED_ARTICLE.excerpt}</p>
            <Link href="/articles" className="featured-text__cta link-u">
              Read article →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FEATURED COMPANY
      ══════════════════════════════════════════════════ */}
      <section
        className="section"
        aria-label="Featured company"
        style={{ borderBottom: "none", paddingTop: 48, paddingBottom: 48 }}
      >
        <p className="company-module__label">From the directory</p>
        <div className="company-module">
          <div className="company-module__text">
            <h2 className="company-module__name">{FEATURED_COMPANY.name}</h2>
            <p className="company-module__node">{FEATURED_COMPANY.node}</p>
            <p className="company-module__body">{FEATURED_COMPANY.body}</p>
            <Link href="/companies" className="btn btn--ghost">
              View in directory →
            </Link>
          </div>
          <div className="company-module__img">
            <div className="img-ph" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          REGULATION IN FOCUS
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
                <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>
                  Also in force
                </span>
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
                <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>
                  In preparation
                </span>
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
          VALUE CHAIN PREVIEW
      ══════════════════════════════════════════════════ */}
      <section className="section" aria-label="Value chain" style={{ borderBottom: "none" }}>
        <div className="vc-header">
          <div>
            <h2 className="section__heading section__heading--entity">
              The fashion value chain
            </h2>
            <p className="section__subhead">
              Six nodes from raw materials to the secondary market. Click any node to see the companies, regulations, and analysis that touch it.
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
              href={`/value-chain?node=${node.slug}`}
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
