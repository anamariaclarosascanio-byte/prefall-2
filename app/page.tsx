import Link from "next/link";

/* ── Article modal data (matches prototype articles array) ── */
const ARTICLES_DATA = [
  {
    id: "0", slug: "resale-platforms-unit-economics",
    tag: "Business models", read: "8 min read", date: "12 May 2026",
    title: "Resale platforms and the unit economics that determine whether the model works at scale",
    impact: "medium", impactLabel: "Medium regulatory impact",
    metric: "Key metric: Authentication cost as % of GMV in luxury resale: 12–18%",
    synopsis: "Peer-to-peer resale platforms for luxury goods have demonstrated product-market fit in the upper segment. The question is whether the cost structure, particularly authentication, scales into lower-margin categories without destroying the economics.",
    takeaways: ["Authentication overhead is fixed per item, making margin compression severe at lower price points.", "Platforms entering the mid-market face a cost structure mismatch the luxury segment does not.", "Network effects accumulate on the supply side; demand-side retention is the unsolved problem.", "Revenue mix between take-rate and fulfilment services determines long-run profitability."],
    sources: ["Vestiaire Collective, Annual disclosure 2024", "Vinted, investor presentation 2025", "BCG, The Recommerce Opportunity report", "Euromonitor, Secondhand Apparel 2025"],
    sectors: ["Secondary Market", "Brands", "Retail", "Consumer", "Capital"],
    gradient: "linear-gradient(135deg,#141414,#222)",
  },
  {
    id: "1", slug: "espr-fast-product-cycles",
    tag: "Regulation", read: "11 min read", date: "5 May 2026",
    title: "What ESPR means for brands that built their model on fast product cycles",
    impact: "high", impactLabel: "High regulatory impact",
    metric: "Key metric: Estimated redesign cost per SKU under ESPR durability requirements: €8k–€24k",
    synopsis: "The Ecodesign for Sustainable Products Regulation imposes minimum durability, repairability, and recyclability requirements that are structurally incompatible with high-volume, low-cost product development.",
    takeaways: ["ESPR's durability standards require minimum component lifespans incompatible with current fast-fashion lead times.", "Repairability requirements will raise unit costs for brands whose margins depend on non-serviceable construction.", "Non-compliant products face market withdrawal: a binary outcome, not a fine.", "Compliance timeline varies by product category; phased exposure is the real planning challenge."],
    sources: ["European Commission — ESPR Regulation text (EU) 2024/1781", "EURATEX — Industry impact assessment 2025", "H&M Group — Sustainability report 2024", "Zara / Inditex — Annual report 2024"],
    sectors: ["Brands", "Manufacturing", "Retail", "Regulation"],
    gradient: "linear-gradient(135deg,#121212,#1e1e1e)",
  },
  {
    id: "2", slug: "consumer-behaviour-gap",
    tag: "Consumer behaviour", read: "14 min read", date: "28 Apr 2026",
    title: "The gap between stated intention and purchasing behaviour in sustainable fashion",
    impact: "medium", impactLabel: "Medium commercial impact",
    metric: "Key metric: Willingness-to-pay premium for verified sustainability credentials: 7–12% (vs stated 28%)",
    synopsis: "Consumer surveys consistently overstate willingness to pay for sustainable products. The purchasing data tells a different story. This piece analyses the gap between stated and revealed preference.",
    takeaways: ["The intention-action gap in sustainable fashion purchasing is structurally larger than in food or personal care.", "Price sensitivity at checkout erodes the stated 28% premium to an observed 7–12%.", "Verification and certification labels increase conversion marginally but do not close the gap.", "Segment analysis shows the gap narrows significantly in professional, high-income demographics."],
    sources: ["McKinsey — State of Fashion 2025", "GreenPrint — Consumer sustainability survey 2025", "Nielsen — Sustainability Purchase Behaviour Report", "Kantar — Purpose 2025 study"],
    sectors: ["Consumer", "Brands", "Retail", "ESG & Compliance"],
    gradient: "linear-gradient(135deg,#0e0e0e,#1a1a1a)",
  },
  {
    id: "3", slug: "csrd-reporting-burden",
    tag: "Regulation", read: "15 min read", date: "5 May 2026",
    title: "The CSRD reporting burden and what it actually costs a mid-size fashion brand to comply",
    impact: "high", impactLabel: "High regulatory impact",
    metric: "Key metric: First-year compliance cost for a mid-size brand without existing infrastructure: €300k–€800k",
    synopsis: "The CSRD creates a two-speed market inside fashion: incumbents with existing NFRD infrastructure absorb it at marginal cost, while mid-size brands face a step-change in fixed overhead.",
    takeaways: ["First-year compliance costs for mid-size brands without existing infrastructure range €300k–€800k.", "The burden concentrates in data collection and third-party verification, not the report itself.", "Brands without CSRD-grade supplier visibility face secondary exposure through large customer obligations.", "Compliance creates a structural cost advantage for large players over the medium term."],
    sources: ["European Commission, CSRD Directive", "EFRAG — ESRS sector-specific standards", "PwC, CSRD readiness survey 2025", "Company disclosures: H&M Group, Inditex, Zalando"],
    sectors: ["Brands", "Retail", "Manufacturing", "ESG & Compliance", "Capital allocation"],
    gradient: "linear-gradient(135deg,#0a0a0a,#1e1e1e)",
  },
  {
    id: "4", slug: "valuation-correction",
    tag: "Capital", read: "12 min read", date: "14 Apr 2026",
    title: "The valuation correction in sustainable fashion and what it reveals about investor assumptions",
    impact: "medium", impactLabel: "Medium capital impact",
    metric: "Key metric: Median EV/Revenue multiple decline for sustainability-positioned fashion companies, 2022–2025: −61%",
    synopsis: "The valuation correction in sustainable fashion between 2022 and 2025 was not a sector-wide collapse. It was a recalibration of assumptions about consumer transition pace.",
    takeaways: ["Median EV/Revenue multiples for sustainability-positioned fashion fell 61% from 2022 peak to 2025.", "The correction was sharpest in companies with high customer acquisition costs and low retention.", "Investors are repricing growth assumptions where consumer adoption lags the business plan.", "B2B sustainability services have held valuation better."],
    sources: ["PitchBook — Fashion Tech & Sustainability sector data 2025", "Crunchbase — Funding rounds tracker", "Bloomberg — Sector multiples analysis", "Company filings: Pangaia, Allbirds, Renewlane"],
    sectors: ["Capital", "Brands", "Consumer", "ESG & Compliance"],
    gradient: "linear-gradient(135deg,#131313,#1d1d1d)",
  },
  {
    id: "5", slug: "nearshoring-costs",
    tag: "Manufacturing", read: "7 min read", date: "8 Apr 2026",
    title: "Nearshoring costs and the trade-off between speed-to-market and carbon footprint at scale",
    impact: "low", impactLabel: "Low regulatory impact",
    metric: "Key metric: Nearshored production cost premium vs. Southeast Asia sourcing: 22–40% depending on category",
    synopsis: "Nearshoring to Southern Europe and North Africa reduces Scope 3 transport emissions and cuts lead times. It also costs significantly more. This piece maps the cost structure and conditions where the economics work.",
    takeaways: ["Nearshoring premium of 22–40% over Southeast Asia is category-dependent.", "Speed-to-market gains are real: 6–8 week lead time reduction vs. offshore sourcing.", "Brands can justify the premium in high-turn, low-volume categories; not in commodity basics.", "Carbon reduction claims require Scope 3 verification; most brands currently cannot supply this."],
    sources: ["McKinsey — Reshaping the Supply Chain report 2024", "UNCTAD — Near-shoring and trade report", "ILO — Manufacturing wage benchmarks 2025", "Brand interviews and sourcing data"],
    sectors: ["Manufacturing", "Brands", "Regulation", "Capital"],
    gradient: "linear-gradient(135deg,#111,#1c1c1c)",
  },
  {
    id: "6", slug: "rental-fashion-platforms",
    tag: "Business models", read: "9 min read", date: "20 Apr 2026",
    title: "Rental fashion platforms rebuilding their unit economics after the post-pandemic contraction",
    impact: "low", impactLabel: "Low regulatory impact",
    metric: "Key metric: Rental platform average items-per-subscriber needed to break even: 4.2 items/month",
    synopsis: "Rental fashion platforms entered the pandemic with growth-stage unit economics and exited it with a retention crisis. The ones still operating have rebuilt their models around a narrower, higher-engagement customer profile.",
    takeaways: ["Post-pandemic rental platforms average 4.2 items/subscriber/month to reach contribution margin break-even.", "Customer lifetime value models have been rebuilt around subscription tenure, not acquisition volume.", "Platforms that survived exited mass-market positioning and moved upmarket.", "Logistics remains the primary cost lever; platforms without proprietary cleaning infrastructure are at structural disadvantage."],
    sources: ["Rent the Runway — 10-K filings 2023–2025", "Hirestreet — investor update 2025", "Company interviews", "Euromonitor — Fashion rental market report 2025"],
    sectors: ["Business models", "Consumer", "Capital", "Retail"],
    gradient: "linear-gradient(135deg,#090909,#181818)",
  },
];

const READING_NOW = ARTICLES_DATA.slice(0, 3);

const FEATURED_ARTICLE = ARTICLES_DATA[3];

const FEATURED_COMPANY = {
  slug: "veja",
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
              <article
                key={article.id}
                className="card"
                aria-label="Open article"
                data-article={JSON.stringify(article)}
              >
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
          <article
            className="card card--feat"
            aria-label="Open article"
            data-article={JSON.stringify(FEATURED_ARTICLE)}
          >
            <div className="card__img">
              <div className="img-ph" />
            </div>
          </article>
          <div className="featured-text">
            <span className="featured-text__label">Featured</span>
            <h2 className="featured-text__title">{FEATURED_ARTICLE.title}</h2>
            <p className="featured-text__excerpt">{FEATURED_ARTICLE.synopsis}</p>
            <Link href={`/articles/${FEATURED_ARTICLE.slug}`} className="featured-text__cta link-u">
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
            <Link href={`/companies/${FEATURED_COMPANY.slug}`} className="btn btn--ghost">
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
