import type { Metadata } from "next";
import Link from "next/link";
import { LifecycleMapScript } from "@/components/LifecycleMapScript";

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

      {/* Full lifecycle map */}
      <div className="pill-tooltip" id="pill-tt"></div>
      <div className="lc-wrap">
        <div className="lc-svg-wrap">
          <nav className="vc-nodes lc-nodes-desktop" aria-label="Value chain nodes">
            {VALUE_CHAIN_NODES.map((node) => (
              <Link
                key={node.slug}
                href={`/value-chain/${node.slug}`}
                className="vc-node"
              >
                <span className="vc-node__num">{node.num}</span>
                <span className="vc-node__name">{node.name}</span>
                <span className="vc-node__arr">↗</span>
                <span className="vc-node__desc">{node.desc}</span>
              </Link>
            ))}
          </nav>
          <div className="lc-fade" id="lc-fade">
            <svg id="lc-svg" viewBox="-28 0 1496 620" width="100%" preserveAspectRatio="xMidYMid meet" style={{ minWidth: "1440px" }}></svg>
          </div>
        </div>
        <div className="lc-legend-wrap" id="lc-legend"></div>
      </div>

      <LifecycleMapScript />
      <div className="vc-map-footer">
        <p className="vc-caption">
          The economics of the industry rarely sit inside a single node. The cost of a
          sustainability decision at one stage is often absorbed, or avoided, at another.
        </p>
      </div>

    </div>
  );
}
