import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs — Prefall",
  description:
    "A curated selection of open roles in sustainability, ESG, circularity, regulation, and impact functions across the fashion industry.",
};

export default function JobsPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header" style={{ borderBottom: "none", paddingBottom: 32 }}>
        <h1 className="page-header__heading">Jobs</h1>
        <p className="page-header__subhead">
          A curated selection of open roles in sustainability, ESG, circularity, regulation, and
          impact functions across the fashion industry. Browse, filter, and apply directly through
          the listing company.
        </p>
        <p style={{ fontSize: "var(--t-small)", color: "var(--gray)", marginTop: 16 }}>
          Prefall does not handle applications.
        </p>
        {/* Mobile filter — hidden on desktop, shown ≤768px */}
        <div className="co-filter-wrap">
          <button className="co-filter-trigger" id="job-filter-trigger">
            <span id="job-filter-label">All categories</span>
            <span className="co-filter-icon">+</span>
          </button>
          <div className="co-filter-panel" id="job-filter-panel">
            <button className="co-filter-option is-active" data-filter="all">All</button>
            <button className="co-filter-option" data-filter="esg">ESG &amp; Compliance</button>
            <button className="co-filter-option" data-filter="sustainability">Sustainability</button>
            <button className="co-filter-option" data-filter="regulation">Regulation</button>
            <button className="co-filter-option" data-filter="circularity">Circularity</button>
          </div>
        </div>
      </div>

      <section className="section" aria-label="Job listings" style={{ paddingTop: 28 }}>

        {/* Filter + sort controls */}
        <div className="issues-controls">
          <div className="filter-bar">
            <span className="eyebrow" style={{ marginRight: 6 }}>Filter by</span>
            <button className="filter-btn is-active">All</button>
            <button className="filter-btn">ESG &amp; Compliance</button>
            <button className="filter-btn">Sustainability</button>
            <button className="filter-btn">Regulation</button>
            <button className="filter-btn">Circularity</button>
          </div>
          <div className="sort-bar">
            <span className="sort-bar__label">Sort</span>
            <button className="sort-btn is-active">Newest</button>
            <button className="sort-btn">Expiring soon</button>
          </div>
        </div>

        {/* Job listings */}
        <div className="jobs-grid">
          <a className="job-item" href="#">
            <div>
              <div className="job-item__title-row">
                <p className="job-item__role">Head of Sustainability Reporting</p>
                <span className="seniority-tag seniority-tag--senior">Senior</span>
              </div>
              <div className="job-item__meta">
                <span>Zalando</span>
                <span className="card__dot" />
                <span>Berlin, Germany</span>
              </div>
            </div>
            <div className="job-item__right">Posted 10 May 2026<br />Expires 10 Jun 2026</div>
          </a>

          <a className="job-item" href="#">
            <div>
              <div className="job-item__title-row">
                <p className="job-item__role">ESG Analyst: Fashion &amp; Luxury</p>
                <span className="seniority-tag seniority-tag--mid">Mid-level</span>
              </div>
              <div className="job-item__meta">
                <span>Kering</span>
                <span className="card__dot" />
                <span>Paris, France</span>
              </div>
            </div>
            <div className="job-item__right">Posted 8 May 2026<br />Expires 8 Jun 2026</div>
          </a>

          <a className="job-item" href="#">
            <div>
              <div className="job-item__title-row">
                <p className="job-item__role">Circular Economy Lead</p>
                <span className="seniority-tag seniority-tag--senior">Senior</span>
              </div>
              <div className="job-item__meta">
                <span>H&amp;M Group</span>
                <span className="card__dot" />
                <span>Stockholm, Sweden</span>
              </div>
            </div>
            <div className="job-item__right">Posted 3 May 2026<br />Expires 3 Jun 2026</div>
          </a>

          <a className="job-item" href="#">
            <div>
              <div className="job-item__title-row">
                <p className="job-item__role">Regulatory Affairs Manager: EU Textiles</p>
                <span className="seniority-tag seniority-tag--mid">Mid-level</span>
              </div>
              <div className="job-item__meta">
                <span>PVH Corp</span>
                <span className="card__dot" />
                <span>Amsterdam, Netherlands</span>
              </div>
            </div>
            <div className="job-item__right">Posted 28 Apr 2026<br />Expires 28 May 2026</div>
          </a>

          <a className="job-item" href="#">
            <div>
              <div className="job-item__title-row">
                <p className="job-item__role">Sustainability Strategy Consultant</p>
                <span className="seniority-tag seniority-tag--senior">Senior</span>
              </div>
              <div className="job-item__meta">
                <span>McKinsey &amp; Co</span>
                <span className="card__dot" />
                <span>Remote / London</span>
              </div>
            </div>
            <div className="job-item__right">Posted 20 Apr 2026<br />Expires 20 May 2026</div>
          </a>

          <a className="job-item" href="#">
            <div>
              <div className="job-item__title-row">
                <p className="job-item__role">Product Lifecycle Analyst</p>
                <span className="seniority-tag seniority-tag--junior">Junior</span>
              </div>
              <div className="job-item__meta">
                <span>Inditex</span>
                <span className="card__dot" />
                <span>A Coruña, Spain</span>
              </div>
            </div>
            <div className="job-item__right">Posted 14 Apr 2026<br />Expires 14 May 2026</div>
          </a>
        </div>

      </section>
    </>
  );
}
