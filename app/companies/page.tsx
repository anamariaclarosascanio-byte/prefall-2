import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Companies — Prefall",
  description:
    "A curated directory of companies across the fashion value chain — tracked for commercial viability and sustainability positioning.",
};

const FILTERS = ["All", "Raw Materials", "Yarn & Fabric", "Manufacturing", "Brands", "Retail", "Secondary Market"];

const COMPANIES = [
  { id: "1", name: "Renewlane", node: "Raw Materials", hq: "Amsterdam", stage: "Series B", tag: "Bio-based fibres" },
  { id: "2", name: "Circulose", node: "Yarn & Fabric", hq: "Stockholm", stage: "Series A", tag: "Cellulosic recycling" },
  { id: "3", name: "Re&Up", node: "Manufacturing", hq: "Barcelona", stage: "Seed", tag: "Cotton recycling" },
  { id: "4", name: "Patagonia", node: "Brands", hq: "Ventura CA", stage: "Private", tag: "Repair & longevity" },
  { id: "5", name: "Vestiaire Collective", node: "Secondary Market", hq: "Paris", stage: "Late-stage", tag: "Luxury resale" },
  { id: "6", name: "Vinted", node: "Secondary Market", hq: "Vilnius", stage: "Late-stage", tag: "P2P resale" },
  { id: "7", name: "Renewlane", node: "Raw Materials", hq: "London", stage: "Series A", tag: "Traceable wool" },
  { id: "8", name: "Inditex", node: "Brands", hq: "Arteixo", stage: "Public", tag: "Scale & circularity" },
  { id: "9", name: "Fibertrace", node: "Manufacturing", hq: "Sydney", stage: "Series A", tag: "Fibre traceability" },
];

export default function CompaniesPage() {
  return (
    <>
      {/* Page header */}
      <div
        style={{
          padding: "52px var(--margin) 40px",
          borderBottom: "none",
        }}
      >
        <p className="eyebrow" style={{ marginBottom: 14 }}>Directory</p>
        <h1
          style={{
            fontSize: "var(--t-h2)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Companies
        </h1>
        <p style={{ fontSize: 16, color: "var(--gray)", maxWidth: 560 }}>
          A curated directory of companies across the fashion value chain, tracked for
          commercial viability and sustainability positioning.
        </p>
      </div>

      {/* Filter bar */}
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
        {FILTERS.map((f, i) => (
          <button
            key={f}
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
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Company list */}
      <section style={{ padding: "0 var(--margin) var(--section-py)" }} aria-label="Companies">
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: 16,
            padding: "16px 0",
            borderBottom: "1px solid var(--sep)",
          }}
          className="company-row"
        >
          {["Company", "Node", "HQ", "Stage", "Focus"].map((h) => (
            <span
              key={h}
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gray)",
              }}
            >
              {h}
            </span>
          ))}
        </div>

        {COMPANIES.map((co) => (
          <div
            key={co.id}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
              gap: 16,
              padding: "20px 0",
              borderBottom: "1px solid var(--sep)",
              alignItems: "center",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            className="company-row company-list-row"
          >
            <span style={{ fontSize: 16, fontWeight: 400, letterSpacing: "-0.01em" }}>
              {co.name}
            </span>
            <span style={{ fontSize: 13, color: "var(--gray)" }}>{co.node}</span>
            <span style={{ fontSize: 13, color: "var(--gray)" }}>{co.hq}</span>
            <span style={{ fontSize: 13, color: "var(--gray)" }}>{co.stage}</span>
            <span
              style={{
                display: "inline-block",
                fontSize: 11,
                padding: "4px 10px",
                background: "var(--off-white)",
                color: "var(--gray)",
                letterSpacing: "0.04em",
              }}
            >
              {co.tag}
            </span>
          </div>
        ))}
      </section>

      <style>{`
        @media (max-width: 768px) {
          .company-row { grid-template-columns: 1fr 1fr !important; }
          .company-row span:nth-child(3),
          .company-row span:nth-child(4) { display: none; }
        }
      `}</style>
    </>
  );
}
