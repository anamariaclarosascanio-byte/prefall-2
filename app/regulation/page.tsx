import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulation — Prefall",
  description:
    "The EU regulatory framework reshaping the fashion sector: disclosure, product design, claims, and producer responsibility.",
};

export default function RegulationPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header reg-page-header">
        <div>
          <h1 className="page-header__heading">Regulation</h1>
          <p className="page-header__subhead">
            The European Union is reshaping the fashion sector through a coordinated framework of
            regulation on disclosure, product design, claims, and producer responsibility. This
            section is the analytical reference: what each regulation does, who it affects, what
            its economic implications are, and where the sector stands on each.
          </p>
        </div>
        <div className="ca-stats">
          <div className="ca-stat">
            <div className="ca-sn">14</div>
            <div className="ca-sl">Instruments</div>
          </div>
          <div className="ca-stat">
            <div className="ca-sn">9</div>
            <div className="ca-sl">In force / amended</div>
          </div>
          <div className="ca-stat">
            <div className="ca-sn">2</div>
            <div className="ca-sl">Pending</div>
          </div>
        </div>
      </div>

      <section className="section" aria-label="Regulation index" style={{ borderBottom: "none", borderTop: "none" }}>

        {/* In force */}
        <div className="reg-status-group">
          <p className="reg-status-group__heading">
            <span className="badge badge--in-force">In force</span>
          </p>
          <a className="reg-item" href="#">
            <div>
              <p className="reg-item__name">ECGT</p>
              <p className="reg-item__full">Empowering Consumers for Green Transition Directive</p>
              <p className="reg-item__summary">Bans vague environmental claims in consumer communications. Generic terms such as &ldquo;eco-friendly&rdquo; or &ldquo;sustainable&rdquo; are prohibited without specific, verified evidence. Applies from 27 September 2026.</p>
            </div>
            <span className="badge badge--in-force">In force</span>
          </a>
          <a className="reg-item" href="#">
            <div>
              <p className="reg-item__name">EUDR</p>
              <p className="reg-item__full">EU Deforestation Regulation</p>
              <p className="reg-item__summary">Requires traceability and deforestation-free evidence for cattle leather and rubber entering the EU market. Large operators must comply from 30 December 2026.</p>
            </div>
            <span className="badge badge--in-force">In force</span>
          </a>
          <a className="reg-item" href="#">
            <div>
              <p className="reg-item__name">ESPR</p>
              <p className="reg-item__full">Ecodesign for Sustainable Products Regulation</p>
              <p className="reg-item__summary">In force July 2024. Bans destruction of unsold apparel and footwear for large companies from 19 July 2026. Enables Digital Product Passport requirements via delegated acts.</p>
            </div>
            <span className="badge badge--in-force">In force</span>
          </a>
          <a className="reg-item" href="#">
            <div>
              <p className="reg-item__name">EU Textile EPR</p>
              <p className="reg-item__full">Extended Producer Responsibility — Textiles (Directive 2025/1892)</p>
              <p className="reg-item__summary">Requires producers to fund collection, sorting, and recycling of post-consumer textiles. National EPR schemes must be operational across all member states by April 2028.</p>
            </div>
            <span className="badge badge--in-force">In force</span>
          </a>
          <a className="reg-item" href="#">
            <div>
              <p className="reg-item__name">PPWR</p>
              <p className="reg-item__full">Packaging and Packaging Waste Regulation</p>
              <p className="reg-item__summary">Applies to all packaging including e-commerce parcels and garment bags. Empty space in parcels must not exceed 40% from 12 August 2026. No exemption for SMEs.</p>
            </div>
            <span className="badge badge--in-force">In force</span>
          </a>
        </div>

        {/* Amended */}
        <div className="reg-status-group">
          <p className="reg-status-group__heading">
            <span className="badge badge--amended">Amended</span>
          </p>
          <a className="reg-item" href="#">
            <div>
              <p className="reg-item__name">CSRD</p>
              <p className="reg-item__full">Corporate Sustainability Reporting Directive</p>
              <p className="reg-item__summary">Omnibus I (March 2026) narrowed scope to companies with more than 1,000 employees AND more than €450M net turnover. First mandatory reports due 2028 for FY2027.</p>
            </div>
            <span className="badge badge--amended">Amended</span>
          </a>
          <a className="reg-item" href="#">
            <div>
              <p className="reg-item__name">CSDDD</p>
              <p className="reg-item__full">Corporate Sustainability Due Diligence Directive</p>
              <p className="reg-item__summary">Omnibus I narrowed scope to companies with more than 5,000 employees AND more than €1.5B worldwide net turnover. Civil liability regime removed. Compliance required from July 2029.</p>
            </div>
            <span className="badge badge--amended">Amended</span>
          </a>
        </div>

        {/* Enforcement pending */}
        <div className="reg-status-group">
          <p className="reg-status-group__heading">
            <span className="badge badge--transpos">Enforcement pending</span>
          </p>
          <a className="reg-item" href="#">
            <div>
              <p className="reg-item__name">ESRS</p>
              <p className="reg-item__full">European Sustainability Reporting Standards</p>
              <p className="reg-item__summary">Defines the content requirements for CSRD reports. A simplified version reducing required datapoints by 61% must be adopted by delegated act by 18 September 2026.</p>
            </div>
            <span className="badge badge--transpos">Enforcement pending</span>
          </a>
          <a className="reg-item" href="#">
            <div>
              <p className="reg-item__name">DPP</p>
              <p className="reg-item__full">Digital Product Passport (Textiles)</p>
              <p className="reg-item__summary">Mandatory product-level data disclosure via QR/NFC for all textiles sold in the EU. Textile delegated act expected 2027; enforcement anticipated mid-2028.</p>
            </div>
            <span className="badge badge--transpos">Enforcement pending</span>
          </a>
        </div>

        {/* Proposed */}
        <div className="reg-status-group">
          <p className="reg-status-group__heading">
            <span className="badge badge--preparation">Proposed</span>
          </p>
          <a className="reg-item" href="#">
            <div>
              <p className="reg-item__name">Textile labelling revision</p>
              <p className="reg-item__full">EU Textile Labelling Regulation Revision</p>
              <p className="reg-item__summary">Proposal to add sustainability and origin information to physical product labels. Indefinitely delayed; likely to be absorbed into DPP delegated act scope.</p>
            </div>
            <span className="badge badge--preparation">Proposed</span>
          </a>
          <a className="reg-item" href="#">
            <div>
              <p className="reg-item__name">Green Claims Directive</p>
              <p className="reg-item__full">EU Green Claims Directive</p>
              <p className="reg-item__summary">Would have required independent pre-verification of all explicit environmental claims. Legislative process suspended June 2025; no confirmed revival date.</p>
            </div>
            <span className="badge badge--preparation">Proposed</span>
          </a>
        </div>

      </section>
    </>
  );
}
