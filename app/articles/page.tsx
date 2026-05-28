import type { Metadata } from "next";

/* ── Shared article data for modal ── */
const ARTICLES = [
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
    gradient: "linear-gradient(135deg,#141414,#202020)",
    category: "business-models",
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
    category: "regulation",
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
    category: "consumer-behaviour",
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
    category: "regulation",
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
    category: "capital",
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
    category: "manufacturing",
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
    category: "business-models",
  },
];

export const metadata: Metadata = {
  title: "Articles — Prefall",
  description:
    "Long-form analytical work on the economics of fashion's transition. Business models, regulation, and consumer behaviour.",
};

export default function ArticlesPage() {
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

        {/* Block B1: articles[0] | articles[3]--big | articles[2] */}
        <div className="block-b1" style={{ marginBottom: 20 }}>
          {[ARTICLES[0], ARTICLES[3], ARTICLES[2]].map((a, i) => (
            <article
              key={a.id}
              className={`card${i === 1 ? " card--big" : ""}`}
              data-category={a.category}
              data-article={JSON.stringify(a)}
            >
              <div className="card__img"><div className="img-ph" style={{ background: a.gradient }} /></div>
              <div className="card__body">
                <div className="card__meta-row">
                  <span className="card__tag">{a.tag}</span>
                  <span className="card__read-time">{a.read}</span>
                </div>
                <h3 className="card__title">{a.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* Block B2: articles[4] | articles[5] | articles[6]--big */}
        <div className="block-b2" style={{ marginBottom: 20 }}>
          {[ARTICLES[4], ARTICLES[5], ARTICLES[6]].map((a, i) => (
            <article
              key={a.id}
              className={`card${i === 2 ? " card--big" : ""}`}
              data-category={a.category}
              data-article={JSON.stringify(a)}
            >
              <div className="card__img"><div className="img-ph" style={{ background: a.gradient }} /></div>
              <div className="card__body">
                <div className="card__meta-row">
                  <span className="card__tag">{a.tag}</span>
                  <span className="card__read-time">{a.read}</span>
                </div>
                <h3 className="card__title">{a.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* Block B3: articles[1] | articles[2] | articles[0] | articles[5] */}
        <div className="block-b3">
          {[ARTICLES[1], ARTICLES[2], ARTICLES[0], ARTICLES[5]].map((a) => (
            <article
              key={`b3-${a.id}`}
              className="card"
              data-category={a.category}
              data-article={JSON.stringify(a)}
            >
              <div className="card__img"><div className="img-ph" style={{ background: a.gradient }} /></div>
              <div className="card__body">
                <div className="card__meta-row">
                  <span className="card__tag">{a.tag}</span>
                  <span className="card__read-time">{a.read}</span>
                </div>
                <h3 className="card__title">{a.title}</h3>
              </div>
            </article>
          ))}
        </div>

      </section>
    </>
  );
}
