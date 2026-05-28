import type { Metadata } from "next";

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

        {/* Block B1: 1fr | 2fr | 1fr */}
        <div className="block-b1" style={{ marginBottom: 20 }}>
          <article className="card" data-category="business-models">
            <div className="card__img"><div className="img-ph" style={{ background: "linear-gradient(135deg,#141414,#202020)" }} /></div>
            <div className="card__body">
              <div className="card__meta-row">
                <span className="card__tag">Business models</span>
                <span className="card__read-time">8 min read</span>
              </div>
              <h3 className="card__title">Resale platforms and the unit economics that determine whether the model works at scale</h3>
            </div>
          </article>

          <article className="card card--big" data-category="regulation">
            <div className="card__img"><div className="img-ph" style={{ background: "linear-gradient(135deg,#0a0a0a,#1e1e1e)" }} /></div>
            <div className="card__body">
              <div className="card__meta-row">
                <span className="card__tag">Regulation</span>
                <span className="card__read-time">15 min read</span>
              </div>
              <h3 className="card__title">The CSRD reporting burden and what it actually costs a mid-size fashion brand to comply</h3>
            </div>
          </article>

          <article className="card" data-category="consumer-behaviour">
            <div className="card__img"><div className="img-ph" style={{ background: "linear-gradient(135deg,#0e0e0e,#1a1a1a)" }} /></div>
            <div className="card__body">
              <div className="card__meta-row">
                <span className="card__tag">Consumer behaviour</span>
                <span className="card__read-time">14 min read</span>
              </div>
              <h3 className="card__title">The gap between stated intention and purchasing behaviour in sustainable fashion</h3>
            </div>
          </article>
        </div>

        {/* Block B2: 1fr | 1fr | 2fr */}
        <div className="block-b2" style={{ marginBottom: 20 }}>
          <article className="card" data-category="capital">
            <div className="card__img"><div className="img-ph" style={{ background: "linear-gradient(135deg,#131313,#1d1d1d)" }} /></div>
            <div className="card__body">
              <div className="card__meta-row">
                <span className="card__tag">Capital</span>
                <span className="card__read-time">12 min read</span>
              </div>
              <h3 className="card__title">The valuation correction in sustainable fashion</h3>
            </div>
          </article>

          <article className="card" data-category="manufacturing">
            <div className="card__img"><div className="img-ph" style={{ background: "linear-gradient(135deg,#111,#1c1c1c)" }} /></div>
            <div className="card__body">
              <div className="card__meta-row">
                <span className="card__tag">Manufacturing</span>
                <span className="card__read-time">7 min read</span>
              </div>
              <h3 className="card__title">Nearshoring costs and the speed-to-market trade-off</h3>
            </div>
          </article>

          <article className="card card--big" data-category="business-models">
            <div className="card__img"><div className="img-ph" style={{ background: "linear-gradient(135deg,#090909,#181818)" }} /></div>
            <div className="card__body">
              <div className="card__meta-row">
                <span className="card__tag">Business models</span>
                <span className="card__read-time">9 min read</span>
              </div>
              <h3 className="card__title">Rental fashion platforms rebuilding their unit economics after the post-pandemic contraction</h3>
            </div>
          </article>
        </div>

        {/* Block B3: 4 equal */}
        <div className="block-b3">
          <article className="card" data-category="regulation">
            <div className="card__img"><div className="img-ph" style={{ background: "linear-gradient(135deg,#121212,#1e1e1e)" }} /></div>
            <div className="card__body">
              <div className="card__meta-row">
                <span className="card__tag">Regulation</span>
                <span className="card__read-time">11 min read</span>
              </div>
              <h3 className="card__title">What ESPR means for brands that built their model on fast product cycles</h3>
            </div>
          </article>

          <article className="card" data-category="consumer-behaviour">
            <div className="card__img"><div className="img-ph" style={{ background: "linear-gradient(135deg,#101010,#1b1b1b)" }} /></div>
            <div className="card__body">
              <div className="card__meta-row">
                <span className="card__tag">Consumer behaviour</span>
                <span className="card__read-time">10 min read</span>
              </div>
              <h3 className="card__title">Greenwashing exposure and the litigation risk building in EU markets</h3>
            </div>
          </article>

          <article className="card" data-category="business-models">
            <div className="card__img"><div className="img-ph" style={{ background: "linear-gradient(135deg,#0d0d0d,#191919)" }} /></div>
            <div className="card__body">
              <div className="card__meta-row">
                <span className="card__tag">Business models</span>
                <span className="card__read-time">6 min read</span>
              </div>
              <h3 className="card__title">Subscription models in fashion and the retention problem</h3>
            </div>
          </article>

          <article className="card" data-category="manufacturing">
            <div className="card__img"><div className="img-ph" style={{ background: "linear-gradient(135deg,#0b0b0b,#161616)" }} /></div>
            <div className="card__body">
              <div className="card__meta-row">
                <span className="card__tag">Manufacturing</span>
                <span className="card__read-time">8 min read</span>
              </div>
              <h3 className="card__title">Deadstock and the economics of overproduction</h3>
            </div>
          </article>
        </div>

      </section>
    </>
  );
}
