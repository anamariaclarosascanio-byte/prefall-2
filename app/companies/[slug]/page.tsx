import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

/* ── Company data ─────────────────────────────────────────────────── */
const COMPANIES: Record<string, {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  meta: { label: string; value: string }[];
  vcNode: { label: string; slug: string };
  sectionPrefix: string;
  businessModel: string[];
  companySays: string;
  analysis: string[];
  regulatory: { badge: string; badgeClass: string; label: string; body: string }[];
  signals: { tag: string; text: string }[];
  articleSection: string | null;
  sources: string[];
}> = {
  "vestiaire-collective": {
    slug: "vestiaire-collective",
    name: "Vestiaire Collective",
    tagline: "Global resale marketplace for pre-owned premium and luxury fashion. Asset-light model: no inventory, no production. Commission and authentication fees. Founded Paris, 2009.",
    tags: ["Secondary Market", "Re-commerce", "B Corp"],
    meta: [
      { label: "Headquarters", value: "Paris, France" },
      { label: "Founded", value: "2009, by Fanny Moizant and Sophie Hersan" },
      { label: "Ownership", value: "Private. Eurazeo ~25%; Vitruvian, Condé Nast, Bpifrance, SoftBank 5–10% each; Kering ~5%" },
      { label: "Leadership", value: "Bernard Osta, CEO (appt. Oct 2025)" },
      { label: "Approx. size", value: "~600 employees, 100+ in authentication" },
      { label: "Website", value: "vestiairecollective.com" },
    ],
    vcNode: { label: "Secondary Market", slug: "secondary" },
    sectionPrefix: "co-section",
    businessModel: [
      "Asset-light marketplace. Sellers list pre-owned items; the platform takes a commission and a buyer-protection fee; an in-house team authenticates products before dispatch. The company does not produce, own, or hold inventory. Geography: Europe ~70%, US ~20% (following the 2022 Tradesy acquisition), Asia the remainder.",
      "2025 GMV: just under €1 billion. Revenue: ~€200 million. Take rate: low twenties as a percentage of GMV. Gross margin: stated above 50%. Third-party only. Effectively all GMV flows through individual sellers. Positive EBITDA reported in the 2025 year-end shopping season.",
    ],
    companySays: "Presents as the leading global platform for pre-owned premium and luxury fashion and a sustainable alternative to fast fashion. Certified B Corp. Frames authentication capability and curated catalogue as the basis for its commercial position and its sustainability claim.",
    analysis: [
      "The question this company answers is whether resale is a good business. Founded 2009. Raised over $700M USD. Targeting first annual profit in 2026, more than fifteen years after launch. A gross margin above 50% that takes fifteen years to convert to profit isolates a single cost: authentication and trust.",
      "Every additional item is a physical object requiring individual inspection. This cost does not fall with scale the way software cost does. Valuation declined from ~$1.7B USD in 2021 to ~€1–1.1B in 2024. The 2026 profit target is the test: if it slips, the question becomes whether authenticated luxury resale is an inherently thin-margin business needing permanent scale subsidy.",
    ],
    regulatory: [
      { badge: "Medium", badgeClass: "badge--transpos", label: "Waste Framework Directive & EPR, net positive", body: "Extended Producer Responsibility schemes increase the cost of disposal for new goods, reinforcing the value proposition of the secondary market. Medium materiality, net positive." },
      { badge: "Medium", badgeClass: "badge--transpos", label: "Green Claims Directive", body: "Resale's claim that it displaces new production faces substantiation scrutiny under the GCD. The platform's environmental narrative will require evidential support to meet the directive's requirements." },
    ],
    signals: [
      { tag: "Funding", text: "Total raised: reported above $700M USD. Investors include Eurazeo (~25%), Vitruvian Partners, Condé Nast, Bpifrance, SoftBank (5–10% each), Kering (~5%, since 2021)." },
      { tag: "Valuation", text: "~$1.7B USD (2021) → ~€1–1.1B (2024). Decline reflects broader correction in consumer marketplace valuations." },
      { tag: "Scale", text: "2025 GMV just under €1B; revenue ~€200M; gross margin stated above 50%; ~600 employees, 100+ in product authentication." },
      { tag: "Acquisition", text: "Acquired US resale platform Tradesy, March 2022." },
      { tag: "Certification", text: "Certified B Corp. First full-year profit targeted for 2026 (company statement, not audited)." },
    ],
    articleSection: "resale-platforms-unit-economics",
    sources: [
      "FashionNetwork, February 2026",
      "Modaes Global, February 2026",
      "Just-Style, January 2024",
      "FashionUnited, 2021 and 2023",
      "CB Insights and PitchBook",
      "Vestiaire Collective investor pitch material 2024",
      "Prism News, February 2026",
    ],
  },

  "veja": {
    slug: "veja",
    name: "Veja",
    tagline: "Sneaker brand that routes advertising spend directly into fair-trade raw materials and production. No paid media. Founded Paris, 2004.",
    tags: ["Brands", "Fair Trade", "No Ads"],
    meta: [
      { label: "Headquarters", value: "Paris, France" },
      { label: "Founded", value: "2004, by Sébastien Kopp and François-Ghislain Morillion" },
      { label: "Ownership", value: "Privately held by founders. No outside venture or PE ownership disclosed." },
      { label: "Leadership", value: "Sébastien Kopp and François-Ghislain Morillion, co-founders" },
      { label: "Approx. size", value: "~600+ employees in Europe and Latin America. ~€250M turnover (2024)" },
      { label: "Website", value: "veja-store.com" },
    ],
    vcNode: { label: "Brands", slug: "brands" },
    sectionPrefix: "veja-section",
    businessModel: [
      "Veja sells sneakers at price points comparable to mainstream premium athletic brands while running a more expensive supply chain by design. It buys organic and fair-trade cotton and wild Amazonian rubber on multi-year contracts at prices set in advance and above market, and manufactures in Brazil under publicly documented conditions.",
      "The defining choice is the elimination of paid advertising and marketing. In athletic footwear that line can run a large share of product cost. Veja redirects that spend into raw materials and production, bringing its total cost base roughly level with competitors that advertise heavily but source conventionally. Distribution leans on wholesale and selective owned retail, including repair and resale services in some stores.",
    ],
    companySays: "Veja describes itself as a project as much as a company, designed from the start around fair pay to producers and lower environmental impact at each stage of production. It frames the no-advertising decision as the mechanism that funds fair prices upstream, and publishes its limitations openly, including conventional dyes within EU REACH compliance, non-proprietary eyelets, and ocean freight from Brazil it has not replaced with a lower-impact alternative.",
    analysis: [
      "Veja is the inverse of the cases Prefall usually examines. Most sustainability propositions struggle because the green choice adds cost the model cannot recover. Veja found one specific place where a large conventional cost can be removed, advertising, and rerouted into the part of the chain that carries the sustainability claim, arriving at a cost base close to conventional competitors. What makes this work is narrow: footwear marketing budgets are unusually large as a share of product cost, which makes the substitution available in this category in a way it is not in most others.",
      "Two conditions hold the model up. First, demand has to be generated without paid media, which Veja has achieved through editorial coverage, retailer placement and design. That is a function of taste and timing that is hard to manufacture and harder to sustain across cycles. Second, the founders have to be willing to cap growth. A no-advertising model loses its cost advantage the moment it has to buy demand to grow, because the redirected budget is finite and the upstream contracts are fixed commitments. The company states it prioritises profitability over scale. The 2018 figures, €33.9M turnover and €4.2M net profit, show the model can be profitable at small scale. The 2024 figure of ~€250M shows it has scaled sevenfold without abandoning the principle. Whether it holds at the next order of magnitude is the open question.",
    ],
    regulatory: [
      { badge: "Low-Medium", badgeClass: "badge--transpos", label: "Green Claims Directive, net positive", body: "Veja's documented limitations and verified sourcing position it better than competitors with looser claims. Materiality: low to medium, net positive." },
      { badge: "Medium", badgeClass: "badge--transpos", label: "ESPR & Digital Product Passport, net positive", body: "Traceability and material disclosure requirements favour a company already sourcing on documented multi-year contracts. Materiality: medium, net positive." },
      { badge: "Medium", badgeClass: "badge--transpos", label: "CSRD", body: "Direct obligations depend on size thresholds, but supply-chain reporting pressure from larger wholesale partners is the more material channel. Materiality: medium." },
    ],
    signals: [
      { tag: "Scale", text: "2024: ~€250M turnover, 600+ employees in Europe and Latin America (company statement and GIZ)." },
      { tag: "Profitability", text: "2018: €33.9M turnover, €4.2M net profit, ~150 employees: evidence the model can be profitable at smaller scale." },
      { tag: "Distribution", text: "3.5M+ pairs sold across 2,000+ retailers in ~60 countries." },
      { tag: "Supply chain", text: "Production cost 5–7× conventional competitors at factory stage, offset by zero advertising spend. Multi-year contracts with Brazilian cotton cooperatives and Amazonian rubber associations at above-market prices." },
      { tag: "Ownership", text: "Founder-held. No outside venture or private equity investment disclosed. Prioritises profitability over scale by stated policy." },
    ],
    articleSection: null,
    sources: [
      "GIZ, \"Maximising profit at the expense of everything else is harmful\", February 2026",
      "Euromonitor, \"Sustainability in Action: Lessons Learnt From the Success of Allbirds and Veja\", 2023",
      "Altermaker, \"Example of eco-design: Veja sneakers\" (2018 financial figures)",
      "Lampoon Magazine, profile of Veja and its founders, updated June 2025",
      "Veja company website, \"No ads\" and project documentation, accessed May 2026",
      "Statista, Veja brand profile in the United States, May 2024",
    ],
  },

  "circulose": {
    slug: "circulose",
    name: "Circulose",
    tagline: "Produces dissolving pulp from cotton-rich textile waste as a substitute for virgin wood pulp in viscose and lyocell production. Formerly Renewcell. Stockholm, 2012.",
    tags: ["Yarn & Fabric", "Textile Recycling", "B2B"],
    meta: [
      { label: "Headquarters", value: "Stockholm, Sweden. Production in Sundsvall (Ortviken)" },
      { label: "Founded", value: "2012, by researchers from KTH Royal Institute of Technology" },
      { label: "Ownership", value: "Acquired from bankruptcy by Altor Equity Partners, June 2024. Privately held." },
      { label: "Leadership", value: "Jonatan Janmark, CEO. Helena Helmersson, Chair (former H&M Group CEO)" },
      { label: "Approx. size", value: "~130 employees at peak pre-bankruptcy. Current headcount not published." },
      { label: "Website", value: "circulose.com" },
    ],
    vcNode: { label: "Yarn & Fabric", slug: "spinmill" },
    sectionPrefix: "circ-section",
    businessModel: [
      "Circulose recovers cellulose from discarded cotton textiles and production scraps, removes dyes, trims and synthetic content, and processes the material into sheets of pulp that substitute for virgin wood pulp in viscose, lyocell and modal production. Under the original Renewcell model, the pulp was sold into the fibre market and depended on downstream brands and producers choosing to buy it.",
      "After the 2024 relaunch, Altor changed the commercial model. Circulose now operates a split pricing structure that separates the physical cost of the pulp from a licence and service fee. Brands sign volume commitments and pay a licence fee covering integration support, traceability tools and use of the Circulose trademark. The stated purpose is to stop the price premium compounding at each step of the supply chain, which it did under the old model. The company describes the shift as moving from a pulp supplier to a solutions partner.",
    ],
    companySays: "Circulose positions itself as the only closed-loop recycled textile player at commercial scale, operating the world's first industrial-scale chemical textile-to-textile recycling plant. It states that its pricing model, developed with Canopy and Fashion for Good, removes the price friction that slows adoption of next-generation materials, and that its production restart is aligned with confirmed demand from named brand partners.",
    analysis: [
      "Renewcell is the clearest recent case in fashion of a sustainability proposition that the technology delivered and the economics did not. The plant performed and the material was rated highly, yet the company went bankrupt within roughly 18 months of opening its industrial plant, after producing far below the volume needed to reach breakeven and recording a Q3 2023 net loss of SEK 94.5M on top of a SEK 105.4M loss the quarter before.",
      "The failure sat in the structure of how the material reached a garment. Brands do not buy pulp. The pulp had to pass through fibre producers, spinners, fabric mills and manufacturers before it reached a product, and at each step the recycled input carried a premium over virgin pulp. Renewcell built supply ahead of committed demand and ran out of liquidity before the market organised itself to absorb the volume.",
      "The relaunched model answers that specific failure. By charging brands a corporate-level licence fee separated from the per-unit pulp price, Circulose moves the buying decision up to brand head offices and works to stop the premium compounding downstream. The restart is staged behind volume commitments secured before production resumes, the reverse of the sequence that sank Renewcell. This is the correct lesson drawn from the bankruptcy. Whether it is sufficient remains open: the model now depends on brands honouring multi-year commitments through price and demand cycles, and the original failure included brands that walked away from earlier offtake agreements. The test is the production restart scheduled for Q4 2026.",
    ],
    regulatory: [
      { badge: "High", badgeClass: "badge--transpos", label: "ESPR & Digital Product Passport, net positive", body: "As recycled content and traceability move toward product requirements, demand for verified recycled cellulose with chain-of-custody documentation rises. Materiality: high, as a demand driver." },
      { badge: "Medium", badgeClass: "badge--transpos", label: "Waste Framework Directive & Textile EPR, net positive", body: "Extended producer responsibility raises the cost of textile waste and improves feedstock economics for textile-to-textile recyclers. Materiality: medium, net positive." },
      { badge: "Medium", badgeClass: "badge--transpos", label: "Green Claims Directive, net positive", body: "Tighter rules on unsubstantiated environmental claims raise the value of independently verifiable materials, which the company offers through its traceability tools. Materiality: medium, as a demand driver." },
    ],
    signals: [
      { tag: "Investment", text: "Total investment into Renewcell before bankruptcy: ~$140M USD. H&M Group provided ~$29M USD (nearly SEK 300M) over seven years." },
      { tag: "Bankruptcy", text: "Listed on Nasdaq First North, November 2020. Filed for bankruptcy at Stockholm District Court, February 2024." },
      { tag: "Capacity", text: "Sundsvall plant nameplate capacity: ~60,000 tonnes/year. Previously stated 2030 target: 360,000 tonnes." },
      { tag: "Acquisition", text: "Acquired by Altor Equity Partners, June 2024. Altor had recently raised ~€3B for green businesses." },
      { tag: "Restart", text: "Production restart targeted Q4 2026, behind long-term volume commitments from 11 brands including H&M, Mango, M&S, Bestseller, C&A and Reformation." },
    ],
    articleSection: null,
    sources: [
      "Business of Fashion, \"Renewcell Was Poised to Lead Fashion's Recycling Revolution. How Did It Fail?\", March 2024",
      "Business of Fashion, \"Exclusive: Textile Recycler Circulose Is Restarting Its Recycling Plant\", March 2026",
      "WWD, \"Textile Recycler Renewcell to Declare Bankruptcy\", February 2024",
      "WWD, \"As Circulose Emerges From Bankruptcy With New Leaders, Its CEO and Chair Unveil Strategy\", November 2024",
      "Trellis, \"Circular textile phoenix Renewcell is bought out of bankruptcy\", June 2024, updated February 2026",
      "Stanford Social Innovation Review, \"What Renewcell's Former CCO Learned From Bankruptcy\", July 2024",
      "Impact Loop, \"Altor-backed Circulose lands new deals with fashion brands\", December 2025",
      "Circulose company website, FAQ and pricing model, accessed May 2026",
      "Altor Equity Partners, Circulose company page, accessed May 2026",
    ],
  },
};

/* ── Static params ─────────────────────────────────────────────────── */
export function generateStaticParams() {
  return Object.keys(COMPANIES).map((slug) => ({ slug }));
}

/* ── Metadata ──────────────────────────────────────────────────────── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const company = COMPANIES[slug];
  if (!company) return { title: "Company not found — Prefall" };
  return {
    title: `${company.name} — Prefall`,
    description: company.tagline,
  };
}

/* ── Page ──────────────────────────────────────────────────────────── */
export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = COMPANIES[slug];
  if (!company) notFound();

  const p = company.sectionPrefix;

  return (
    <div className="company-profile">
      {/* Hero */}
      <div className="company-profile__hero">
        <div>
          <div className="company-profile__identity-row">
            <Link className="detail-header__back" href="/companies">← Companies</Link>
          </div>
          <h1 className="company-profile__name">{company.name}</h1>
          <p className="company-profile__tagline">{company.tagline}</p>
          <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
            {company.tags.map((t) => (
              <span key={t} className="node-tag">{t}</span>
            ))}
          </div>
        </div>
        <div className="company-profile__meta-box">
          {company.meta.map((m) => (
            <div key={m.label} className="company-profile__meta-item">
              <p className="company-profile__meta-label">{m.label}</p>
              <p className="company-profile__meta-value">{m.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="company-gallery">
        <div className="company-gallery__main">
          <div className="img-ph" style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#111,#1c1c1c)" }} />
        </div>
      </div>

      {/* Body */}
      <div className="detail-wrap">
        <div className="detail-layout">
          {/* Sidebar */}
          <nav className="detail-sidebar">
            <div className="detail-sidebar__section">
              <button className="detail-sidebar__trigger">
                On this page<span className="detail-sidebar__icon">+</span>
              </button>
              <div className="detail-sidebar__panel">
                <a className="detail-sidebar__link" href={`#${p}-business-model`}>Business model</a>
                <a className="detail-sidebar__link" href={`#${p}-company-says`}>What the company says</a>
                <a className="detail-sidebar__link" href={`#${p}-analysis`}>Prefall&apos;s analysis</a>
                <a className="detail-sidebar__link" href={`#${p}-regulatory`}>Regulatory exposure</a>
                <a className="detail-sidebar__link" href={`#${p}-signals`}>Verifiable signals</a>
                <a className="detail-sidebar__link" href={`#${p}-articles`}>Prefall articles</a>
                <a className="detail-sidebar__link" href={`#${p}-sources`}>Sources</a>
              </div>
            </div>
            <div className="detail-sidebar__section">
              <button className="detail-sidebar__trigger">
                Value chain position<span className="detail-sidebar__icon">+</span>
              </button>
              <div className="detail-sidebar__panel">
                <Link className="detail-sidebar__link" href={`/value-chain/${company.vcNode.slug}`}>
                  {company.vcNode.label} →
                </Link>
              </div>
            </div>
          </nav>

          {/* Main body */}
          <div>
            {/* Business model */}
            <div className="detail-body__section" id={`${p}-business-model`}>
              <p className="detail-body__section-head">Business model</p>
              {company.businessModel.map((para, i) => (
                <p key={i} className="detail-body__prose">{para}</p>
              ))}
            </div>

            {/* What the company says */}
            <div className="detail-body__section" id={`${p}-company-says`}>
              <p className="detail-body__section-head">What the company says about itself</p>
              <p className="detail-body__prose">{company.companySays}</p>
            </div>

            {/* Analysis */}
            <div className="detail-body__section" id={`${p}-analysis`}>
              <p className="detail-body__section-head">Prefall&apos;s analysis</p>
              {company.analysis.map((para, i) => (
                <p key={i} className="detail-body__prose">{para}</p>
              ))}
            </div>

            {/* Regulatory */}
            <div className="detail-body__section" id={`${p}-regulatory`}>
              <p className="detail-body__section-head">EU regulatory exposure</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {company.regulatory.map((r, i) => (
                  <div key={i}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                      <span className={`badge ${r.badgeClass}`}>{r.badge}</span>
                      <span style={{ fontSize: 13, color: "var(--gray)" }}>{r.label}</span>
                    </div>
                    <p className="detail-body__prose" style={{ fontSize: 14 }}>{r.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Signals */}
            <div className="detail-body__section" id={`${p}-signals`}>
              <p className="detail-body__section-head">Publicly verifiable signals</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {company.signals.map((s, i) => (
                  <div key={i} className="article-row" style={{ padding: "16px 0", cursor: "default", borderTop: i === 0 ? "none" : undefined }}>
                    <div>
                      <p className="article-row__tag">{s.tag}</p>
                      <p className="article-row__title" style={{ fontSize: 14 }}>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prefall articles */}
            <div className="detail-body__section" id={`${p}-articles`}>
              <p className="detail-body__section-head">Prefall on this company</p>
              {company.articleSection ? (
                <Link href={`/articles/${company.articleSection}`} className="card" style={{ textDecoration: "none" }}>
                  <div className="card__body">
                    <div className="card__meta-row">
                      <span className="card__tag">Business models</span>
                      <span className="card__time">8 min read</span>
                    </div>
                    <h3 className="card__title">Resale platforms and the unit economics that determine whether the model works at scale</h3>
                  </div>
                </Link>
              ) : (
                <p className="detail-body__prose" style={{ color: "var(--subtle)" }}>
                  No Prefall articles yet. This section will populate when the platform publishes analysis that references {company.name}.
                </p>
              )}
            </div>

            {/* Sources */}
            <div className="detail-body__section" id={`${p}-sources`}>
              <p className="detail-body__section-head">Sources</p>
              <ul className="modal__list">
                {company.sources.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
