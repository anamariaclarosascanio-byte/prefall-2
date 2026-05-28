import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Value Chain — Prefall",
  description:
    "From raw materials to the secondary market: the fashion value chain mapped by economic activity, regulatory exposure, and sustainability implication.",
};

const VALUE_CHAIN_NODES = [
  {
    num: "01", slug: "rawmat", name: "Raw Materials",
    desc: "Cotton, wool, and synthetic fibres. The chain's biggest environmental cost, the smallest direct regulatory footprint.",
  },
  {
    num: "02", slug: "spinmill", name: "Yarn & Fabric",
    desc: "Spinning, weaving, dyeing. Where raw fibre becomes usable material — and where water pollution concentrates.",
  },
  {
    num: "03", slug: "manufacturing", name: "Manufacturing",
    desc: "The cut-make-trim supply chain. Multi-tier, mostly subcontracted, most visibility gaps, most compliance risk.",
  },
  {
    num: "04", slug: "brands", name: "Brands",
    desc: "Where the product brief is set and the regulatory obligation lands. The highest-margin, highest-obligation node.",
  },
  {
    num: "05", slug: "retail", name: "Logistics & Retail",
    desc: "Physical and digital channels to the first buyer. DPP display requirements and EPR collection duties land here.",
  },
  {
    num: "06", slug: "consumer", name: "Consumer",
    desc: "The end-user: the only actor whose behaviour determines whether the sustainability logic of the chain closes.",
  },
  {
    num: "07", slug: "secondary", name: "Secondary Market",
    desc: "Resale, rental, repair. The fastest-growing segment by transaction volume, and the hardest to make profitable.",
  },
];

export default function ValueChainPage() {
  return (
    <div className="vc-map-page">

      {/* Header */}
      <div className="vc-map-header">
        <div>
          <h1 className="page-header__heading">The fashion value chain</h1>
          <p className="page-header__subhead">
            From raw materials to the secondary market, the fashion industry operates as a long
            chain of distinct economic activities. Each node has its own cost structure, its own
            regulatory exposure, and its own role in whether the sector&apos;s transition is
            economically viable.
          </p>
          <p className="vc-map-header__hint">
            Click any node to open a full breakdown: companies, regulation, and Prefall analysis
            covering that stage.
          </p>
        </div>
        <div className="vc-map-layers">
          <button className="vc-map-layer ltog active" data-layer="physical">
            <span className="ltog__num">Layer 01</span>
            <span className="vc-map-layer__name">Physical Flow</span>
            <span className="vc-map-layer__desc">Circle size shows relative actor volume at each stage of the chain</span>
          </button>
          <button className="vc-map-layer ltog" data-layer="value">
            <span className="ltog__num">Layer 02</span>
            <span className="vc-map-layer__name">Value Capture</span>
            <span className="vc-map-layer__desc">Where margin is extracted and which actors absorb the cost of transition</span>
          </button>
          <button className="vc-map-layer ltog" data-layer="regulatory">
            <span className="ltog__num">Layer 03</span>
            <span className="vc-map-layer__name">Regulatory Exposure</span>
            <span className="vc-map-layer__desc">Which EU instruments apply to each actor, and the obligations they carry</span>
          </button>
          <button className="vc-map-layer ltog" data-layer="scope">
            <span className="ltog__num">Layer 04</span>
            <span className="vc-map-layer__name">Carbon Scope</span>
            <span className="vc-map-layer__desc">GHG responsibility by actor, Scope 1, 2, and 3 assignment across the chain</span>
          </button>
        </div>
      </div>

      {/* Nodes */}
      <section className="section" aria-label="Value chain nodes">
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

        {/* Descriptions */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 0,
            marginTop: 40,
            borderTop: "1px solid var(--sep)",
          }}
        >
          {VALUE_CHAIN_NODES.map((node) => (
            <div
              key={node.slug}
              style={{
                padding: "24px 20px 24px 0",
                borderRight: "1px solid var(--sep)",
                paddingRight: 20,
              }}
            >
              <p style={{ fontSize: 12, color: "var(--gray)", lineHeight: 1.65 }}>{node.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="vc-map-footer">
        <p className="vc-caption">
          The economics of the industry rarely sit inside a single node. The cost of a
          sustainability decision at one stage is often absorbed, or avoided, at another.
        </p>
      </div>

    </div>
  );
}
