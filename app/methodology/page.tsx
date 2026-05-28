import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology — Prefall",
  description: "How Prefall produces what it publishes.",
};

export default function MethodologyPage() {
  return (
    <div className="prose-page">

      <div className="prose-hero">
        <h1 className="prose-hero__heading">Methodology</h1>
        <p className="prose-hero__subhead">How Prefall produces what it publishes.</p>
      </div>

      <div className="prose-section">
        <p className="prose-section__label">Editorial standard</p>
        <div className="prose-section__content">
          <p className="prose-section__body">Every claim we publish is supported by data, sourced methodology, or documented industry practice. Where something is interpretation, we say so. Where evidence is contested, we say so. The analytical frame is always economic: we examine the logic a proposition runs on and the conditions that shape whether it holds.</p>
        </div>
      </div>

      <div className="prose-section">
        <p className="prose-section__label">How articles are produced</p>
        <div className="prose-section__content">
          <p className="prose-section__body">Articles are written by Prefall&apos;s editorial team. Each piece goes through research, drafting, internal review, and a final audit before publication. The audit checks evidence, sources, and editorial voice. Articles are not published until the audit is closed.</p>
        </div>
      </div>

      <div className="prose-section">
        <p className="prose-section__label">How the directory is built</p>
        <div className="prose-section__content">
          <p className="prose-section__body">Inclusion in the directory is an editorial decision. We select companies based on their relevance to fashion&apos;s transition, their position in the value chain, and whether their model offers something worth analysing. We do not score or rank. We describe how the business model works, what the company says about itself, what we make of the economics, and the regulatory exposure that shapes the company&apos;s future.</p>
          <p className="prose-section__body" style={{ marginTop: 16 }}>Entries draw on publicly available information: company disclosures, regulatory filings, audited statements, certifications, funding rounds, and reporting in the trade and business press. We do not publish information we cannot verify in public sources. Where the company has provided a statement directly, we cite it as such.</p>
          <p className="prose-section__body" style={{ marginTop: 16 }}>Each entry is reviewed at least once a year, and updated when a material change occurs. Removals happen only when a company ceases operations or when the editorial relevance no longer justifies inclusion.</p>
        </div>
      </div>

      <div className="prose-section">
        <p className="prose-section__label">Conflict of interest</p>
        <div className="prose-section__content">
          <p className="prose-section__body">Prefall does not accept advertising or sponsored content from companies it covers. No company in the directory pays for inclusion or for any specific editorial treatment. Where derivative services exist for institutional subscribers, those services do not influence the public editorial output. Any commercial relationship that could be material to a piece of coverage is disclosed in the piece itself.</p>
        </div>
      </div>

      <div className="prose-section">
        <p className="prose-section__label">Corrections</p>
        <div className="prose-section__content">
          <p className="prose-section__body">If we get something wrong, we correct it. Substantive corrections are noted at the bottom of the page with the date and the nature of the correction. Minor edits are made silently. If you find an error, please write to us at <a href="mailto:contact@pre-fall.com" className="link-u" style={{ color: "inherit" }}>contact@pre-fall.com</a>.</p>
        </div>
      </div>

      <div className="prose-section">
        <p className="prose-section__label">Sources we use</p>
        <div className="prose-section__content">
          <p className="prose-section__body">Company disclosures, regulatory filings, financial statements, certified audits, trade and business press, academic research, NGO reports, and direct exchanges with industry sources. Every entry and every article lists the sources it draws on.</p>
        </div>
      </div>

    </div>
  );
}
