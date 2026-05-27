import Link from "next/link";

/* ── Placeholder data (will be replaced with Sanity queries) ── */
const FEATURED_ARTICLES = [
  {
    id: "1",
    eyebrow: "Business Models · Apr 2026",
    title: "Why resale isn't the silver bullet brands hoped for",
    body: "Resale platforms promised margin-positive circularity. The unit economics say otherwise.",
    slug: "resale-economics",
  },
  {
    id: "2",
    eyebrow: "Regulation · Mar 2026",
    title: "CSRD: what the first wave of reports actually revealed",
    body: "Mandatory disclosure is here. The data quality gap between ambition and reality is wider than expected.",
    slug: "csrd-first-reports",
  },
  {
    id: "3",
    eyebrow: "Consumer · Mar 2026",
    title: "The affordability ceiling and the sustainability premium",
    body: "Willingness-to-pay research across seven markets shows the ceiling is lower than brands assume.",
    slug: "affordability-ceiling",
  },
];

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
      {/* ── HERO ── */}
      <section
        aria-labelledby="hero-heading"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "calc(var(--header-h) + 100px) var(--margin) 80px",
        }}
      >
        <p
          style={{
            fontSize: "var(--t-eyebrow)",
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--gray)",
            marginBottom: 36,
          }}
        >
          Independent editorial intelligence on the business of fashion
        </p>

        <h1
          id="hero-heading"
          style={{
            fontSize: "var(--t-hero)",
            fontWeight: 600,
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
            maxWidth: 1400,
            marginBottom: 40,
          }}
        >
          The business behind<br />
          the next season<br />
          of fashion.
        </h1>

        <p
          style={{
            fontSize: "var(--t-body)",
            fontWeight: 400,
            lineHeight: 1.55,
            color: "var(--subtle)",
            maxWidth: 780,
            letterSpacing: "-0.01em",
            marginBottom: 52,
          }}
        >
          Prefall analyses the economic viability of fashion&apos;s transition toward
          sustainability. We cover the business models, the regulation, and the consumer
          behaviour that determine which propositions hold up commercially and which do not.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <Link href="/articles" className="btn btn--primary">
            Read the latest →
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Get in touch →
          </Link>
        </div>
      </section>

      {/* ── READING NOW ── */}
      <section
        aria-label="Reading now"
        style={{ padding: "var(--section-py) var(--margin)", borderBottom: "none" }}
      >
        <span className="section__label">Reading now</span>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "var(--gutter)",
            alignItems: "start",
          }}
          className="home-grid"
        >
          {/* Editorial intro */}
          <div
            style={{
              paddingRight: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              height: "100%",
              paddingTop: 80,
            }}
          >
            <p
              style={{
                fontSize: 20,
                fontWeight: 300,
                lineHeight: 1.4,
                letterSpacing: "-0.015em",
                marginBottom: 24,
                color: "var(--subtle)",
              }}
            >
              Analysis of business models, consumer behaviour, and the economic limits
              shaping sustainable fashion.
            </p>
            <Link
              href="/articles"
              className="link-u"
              style={{ fontSize: 14, color: "var(--gray)" }}
            >
              View all →
            </Link>
          </div>

          {/* Article cards */}
          {FEATURED_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="card"
              style={{ borderTop: "1px solid var(--sep)", paddingTop: 20 }}
            >
              <div
                style={{
                  aspectRatio: "3/2",
                  background: "#E8E8E6",
                  marginBottom: 20,
                  overflow: "hidden",
                }}
              />
              <p className="card__eyebrow">{article.eyebrow}</p>
              <h3 className="card__title">{article.title}</h3>
              <p className="card__body">{article.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── REGULATION IN FOCUS ── */}
      <section
        aria-label="Regulation in focus"
        style={{ padding: "60px var(--margin)", borderBottom: "1px solid var(--sep)" }}
      >
        <span className="section__label">Regulation that matters now</span>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}
          className="reg-grid"
        >
          <div>
            <div className="status-badge status-badge--transit">
              <span className="status-badge__dot status-badge__dot--transit" />
              In transposition
            </div>
            <h2
              style={{
                fontSize: "clamp(44px, 6vw, 72px)",
                fontWeight: 600,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                marginBottom: 8,
              }}
            >
              CSRD
            </h2>
            <p style={{ fontSize: 14, color: "var(--gray)", marginBottom: 20 }}>
              Corporate Sustainability Reporting Directive
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--subtle)",
                maxWidth: 480,
                marginBottom: 32,
              }}
            >
              Requires large companies to disclose detailed information on how they manage
              social and environmental challenges. First reports due 2025 for large companies,
              with cascade through mid-size companies by 2027.
            </p>
            <Link href="/regulation" className="btn btn--ghost">
              View all regulation →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>
                Also in force
              </span>
              <div className="regulation-list">
                {[
                  { label: "ESPR: Ecodesign for Sustainable Products", status: "active" },
                  { label: "Digital Product Passport", status: "transit" },
                  { label: "Green Claims Directive", status: "transit" },
                ].map((r) => (
                  <span key={r.label} className="regulation-list__item">
                    <span
                      className={`status-badge__dot status-badge__dot--${r.status}`}
                      style={{ flexShrink: 0, marginTop: 6 }}
                    />
                    {r.label}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>
                In preparation
              </span>
              <div className="regulation-list">
                {["Extended Producer Responsibility", "Textile Waste Directive"].map((r) => (
                  <span key={r} className="regulation-list__item">
                    <span
                      className="status-badge__dot status-badge__dot--prep"
                      style={{ flexShrink: 0, marginTop: 6 }}
                    />
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE CHAIN PREVIEW ── */}
      <section
        aria-label="Value chain"
        style={{ padding: "var(--section-py) var(--margin)", borderBottom: "none" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 32,
            marginBottom: 52,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2 className="section__heading section__heading--entity">
              The fashion value chain
            </h2>
            <p className="section__subhead">
              Six nodes from raw materials to the secondary market. Click any node to see the
              companies, regulations, and analysis that touch it.
            </p>
          </div>
          <Link href="/value-chain" className="btn btn--ghost" style={{ flexShrink: 0 }}>
            Open the full map →
          </Link>
        </div>

        <nav
          aria-label="Value chain nodes"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            borderTop: "1px solid var(--sep)",
          }}
          className="vc-nodes-grid"
        >
          {VALUE_CHAIN_NODES.map((node) => (
            <Link
              key={node.slug}
              href={`/value-chain?node=${node.slug}`}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px 16px 20px 0",
                borderRight: "1px solid var(--sep)",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 9, letterSpacing: "0.14em", color: "var(--gray)" }}>
                {node.num}
              </span>
              <span style={{ fontSize: 13, fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                {node.name}
              </span>
              <span style={{ fontSize: 11, color: "var(--gray)" }}>↗</span>
            </Link>
          ))}
        </nav>

        <p
          style={{
            fontSize: 13,
            lineHeight: 1.6,
            color: "var(--gray)",
            maxWidth: 620,
            marginTop: 32,
            fontStyle: "italic",
          }}
        >
          The economics of the industry rarely sit inside a single node. The cost of a
          sustainability decision at one stage is often absorbed, or avoided, at another.
        </p>
      </section>

      <style>{`
        @media (max-width: 1100px) {
          .home-grid { grid-template-columns: 1fr 1fr !important; }
          .home-grid > div:first-child { grid-column: 1 / -1; padding-right: 0 !important; padding-top: 0 !important; }
          .reg-grid  { grid-template-columns: 1fr !important; }
          .vc-nodes-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .home-grid { grid-template-columns: 1fr !important; }
          .vc-nodes-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
