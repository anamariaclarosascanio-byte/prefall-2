import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Companies — Prefall",
  description:
    "An analytical directory of companies across the fashion value chain — business models, economics, and regulatory exposure.",
};

export default function CompaniesPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <h1 className="page-header__heading">Companies</h1>
        <p className="page-header__subhead">
          An analytical directory of companies operating across the fashion value chain. Each entry
          describes the business model, sets out the economic logic it runs on, and maps the
          regulatory exposure that shapes its future.
        </p>
      </div>

      <section className="section" aria-label="Company directory">

        {/* Filter controls */}
        <div className="issues-controls">
          <div className="filter-bar">
            <span className="eyebrow" style={{ marginRight: 6 }}>Filter by</span>
            <button className="filter-btn is-active">All</button>
            <button className="filter-btn">Raw Materials</button>
            <button className="filter-btn">Yarn &amp; Fabric</button>
            <button className="filter-btn">Manufacturing</button>
            <button className="filter-btn">Brands</button>
            <button className="filter-btn">Retail</button>
            <button className="filter-btn">Secondary Market</button>
          </div>
        </div>

        {/* Company grid */}
        <div className="companies-grid">

          {/* Vestiaire Collective */}
          <a className="company-card" href="#" data-node="secondary-market">
            <div className="company-card__logo-wrap">
              <div className="img-ph" />
            </div>
            <div className="company-card__body">
              <p className="company-card__name">Vestiaire Collective</p>
              <p className="company-card__meta">Paris, France · Secondary Market</p>
              <p className="company-card__model">
                Global resale marketplace for pre-owned premium and luxury fashion. Asset-light:
                earns commission and authentication fees without holding inventory. Founded 2009,
                raised over $700M USD, targeting first annual profit in 2026.
              </p>
              <span className="node-tag" data-node="secondary-market">Secondary Market</span>
            </div>
          </a>

          {/* Veja */}
          <a className="company-card" href="#" data-node="brands">
            <div className="company-card__logo-wrap">
              <div className="img-ph" />
            </div>
            <div className="company-card__body">
              <p className="company-card__name">Veja</p>
              <p className="company-card__meta">Paris, France · Brands</p>
              <p className="company-card__model">
                Sneaker brand that routes advertising spend directly into fair-trade raw materials.
                No paid media. Production costs 5–7× conventional competitors at factory stage,
                offset by the absence of marketing. ~€250M turnover in 2024.
              </p>
              <span className="node-tag" data-node="brands">Brands</span>
            </div>
          </a>

          {/* Circulose */}
          <a className="company-card" href="#" data-node="yarn-fabric">
            <div className="company-card__logo-wrap">
              <div className="img-ph" />
            </div>
            <div className="company-card__body">
              <p className="company-card__name">Circulose</p>
              <p className="company-card__meta">Stockholm, Sweden · Yarn &amp; Fabric</p>
              <p className="company-card__model">
                Produces dissolving pulp from cotton-rich textile waste as a substitute for virgin
                wood pulp in viscose and lyocell production. Formerly Renewcell, acquired out of
                bankruptcy in 2024 by Altor Equity Partners. Production restart Q4 2026.
              </p>
              <span className="node-tag" data-node="yarn-fabric">Yarn &amp; Fabric</span>
            </div>
          </a>

        </div>

        {/* Methodology note */}
        <div className="method-note">
          <p className="method-note__heading">How this directory works</p>
          <p className="method-note__body">
            Inclusion is an editorial decision based on a company&apos;s relevance to the transition
            of the fashion industry. We do not score, rank, or rate companies on sustainability
            performance. We describe how their business model works, what the company says about
            itself, what we make of the economics of the model, and the publicly verifiable signals
            available. Each entry is updated when material changes happen.
          </p>
        </div>

      </section>
    </>
  );
}
