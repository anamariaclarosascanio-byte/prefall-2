import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs — Prefall",
  description:
    "Sustainability-focused roles across the fashion value chain — from raw materials to resale.",
};

const SENIORITY_FILTERS = ["All", "Senior", "Mid", "Junior", "Executive"];
const FUNCTION_FILTERS  = ["All Functions", "Strategy", "Operations", "Technology", "Finance", "Policy", "Communications"];

const JOBS = [
  {
    id: "1",
    role: "Head of Sustainability Reporting",
    company: "Zalando", location: "Berlin, Germany", type: "Full-time",
    seniority: "Senior", posted: "3d ago",
    tags: ["CSRD", "ESG", "Reporting"],
  },
  {
    id: "2",
    role: "Circular Economy Lead",
    company: "H&M Group", location: "Stockholm, Sweden", type: "Full-time",
    seniority: "Senior", posted: "5d ago",
    tags: ["Circular", "Strategy", "Innovation"],
  },
  {
    id: "3",
    role: "Supply Chain Sustainability Analyst",
    company: "Inditex", location: "Remote (EU)", type: "Full-time",
    seniority: "Mid", posted: "1w ago",
    tags: ["Supply Chain", "Due Diligence"],
  },
  {
    id: "4",
    role: "Product Sustainability Manager",
    company: "Patagonia", location: "Ventura, CA", type: "Full-time",
    seniority: "Mid", posted: "1w ago",
    tags: ["LCA", "Materials", "Product"],
  },
  {
    id: "5",
    role: "Policy Affairs Manager — Textiles",
    company: "Euratex", location: "Brussels, Belgium", type: "Full-time",
    seniority: "Senior", posted: "2w ago",
    tags: ["Policy", "Regulation", "EU"],
  },
  {
    id: "6",
    role: "ESG Investment Analyst",
    company: "Permira", location: "London, UK", type: "Full-time",
    seniority: "Mid", posted: "2w ago",
    tags: ["ESG", "Finance", "Due Diligence"],
  },
];

const SENIORITY_COLOURS: Record<string, string> = {
  Senior:    "#059669",
  Mid:       "#2563EB",
  Junior:    "#D97706",
  Executive: "#7C3AED",
};

export default function JobsPage() {
  return (
    <>
      {/* Page header */}
      <div
        style={{
          padding: "52px var(--margin) 40px",
          borderBottom: "none",
        }}
      >
        <p className="eyebrow" style={{ marginBottom: 14 }}>Opportunities</p>
        <h1
          style={{
            fontSize: "var(--t-h2)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Jobs
        </h1>
        <p style={{ fontSize: 16, color: "var(--gray)", maxWidth: 560 }}>
          Sustainability-focused roles across the fashion value chain — from raw materials to resale.
        </p>
      </div>

      {/* Filters */}
      <div
        style={{
          padding: "0 var(--margin)",
          borderTop: "1px solid var(--sep)",
          borderBottom: "1px solid var(--sep)",
          display: "flex",
          gap: 0,
          overflowX: "auto",
        }}
      >
        {SENIORITY_FILTERS.map((f, i) => (
          <button
            key={f}
            style={{
              padding: "16px 20px",
              fontSize: 13,
              color: i === 0 ? "#282828" : "var(--gray)",
              background: "transparent",
              border: "none",
              borderBottom: i === 0 ? "2px solid #282828" : "2px solid transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {f}
          </button>
        ))}
        <div style={{ marginLeft: "auto", display: "flex" }}>
          {FUNCTION_FILTERS.slice(0, 3).map((f) => (
            <button
              key={f}
              style={{
                padding: "16px 16px",
                fontSize: 12,
                color: "var(--gray)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Job list */}
      <section style={{ padding: "0 var(--margin) var(--section-py)" }} aria-label="Jobs">
        {JOBS.map((job) => (
          <div
            key={job.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: 24,
              padding: "24px 0",
              borderBottom: "1px solid var(--sep)",
              cursor: "pointer",
            }}
            className="job-row"
          >
            <div>
              {/* Title row */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                <h2 style={{ fontSize: 17, fontWeight: 400, letterSpacing: "-0.01em" }}>
                  {job.role}
                </h2>
              </div>

              {/* Meta row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "var(--gray)",
                  flexWrap: "wrap",
                }}
              >
                {/* Seniority badge */}
                <span
                  style={{
                    fontSize: 11,
                    padding: "3px 8px",
                    border: `1px solid ${SENIORITY_COLOURS[job.seniority] || "#999"}`,
                    color: SENIORITY_COLOURS[job.seniority] || "#999",
                    borderRadius: 2,
                  }}
                >
                  {job.seniority}
                </span>
                <span>{job.company}</span>
                <span style={{ opacity: 0.35 }}>·</span>
                <span>{job.location}</span>
                <span style={{ opacity: 0.35 }}>·</span>
                <span>{job.type}</span>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      padding: "3px 8px",
                      background: "var(--off-white)",
                      color: "var(--gray)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Posted */}
            <span style={{ fontSize: 12, color: "var(--gray)", whiteSpace: "nowrap" }}>
              {job.posted}
            </span>
          </div>
        ))}
      </section>
    </>
  );
}
