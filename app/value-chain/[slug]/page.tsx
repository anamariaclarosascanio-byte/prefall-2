import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ── Company name → slug lookup (known directory entries) ─────────────────────
const COMPANY_SLUG: Record<string, string> = {
  "Vestiaire Collective": "vestiaire-collective",
  "Veja": "veja",
  "Circulose": "circulose",
};

// ── Node data (exact copy of prototype NODE_DETAIL) ──────────────────────────
interface NodeReg { name: string; summary: string; badge: string; status: string; }
interface NodeCompany { name: string; meta: string; model: string; tag: string; }
interface NodeArticle { tag: string; title: string; meta: string; }
interface NodeDetail {
  num: string; name: string; summary: string;
  what: string; economics: string; tensions: string;
  companies: NodeCompany[]; regs: NodeReg[]; articles: NodeArticle[];
  prev?: { slug: string; name: string }; next?: { slug: string; name: string };
}

const NODE_DETAIL: Record<string, NodeDetail> = {
  rawmat: {
    num: "Node 01", name: "Raw Materials",
    summary: "Cotton, wool, and synthetic fibres. The chain's largest environmental footprint (water, land, and upstream emissions) concentrated in actors who carry the smallest direct regulatory obligation.",
    what: `<p class="detail-body__prose">Raw material extraction and processing spans the full fibre spectrum: petrochemical synthetics (polyester, nylon, acrylic), natural cellulosics (cotton, linen, hemp), protein fibres (wool, silk, cashmere), and emerging alternative materials (bio-based nylons, mycelium leather, algae-derived textiles). Petrochemical synthetics now account for over 65% of global fibre production by volume, with polyester alone at roughly 54%. The environmental costs — water consumption, land use, pesticide application, and GHG emissions from both agriculture and petrochemical feedstocks — are more concentrated here than anywhere else in the chain.</p><p class="detail-body__prose">Cotton cultivation illustrates the structural problem clearly: it uses approximately 10,000 litres of water per kilogram of fibre, occupies 2.5% of global agricultural land, and accounts for 16% of pesticide sales. Synthetic alternatives carry different costs: microplastic shedding (an estimated 700,000 fibres released per domestic wash), dependency on crude oil feedstocks, and end-of-life inertia in mechanical recycling streams. The transition to lower-impact fibres (recycled polyester, organic or regenerative cotton, Lyocell/Tencel) is technically available but not yet economically self-sustaining. Each alternative carries a 20–60% price premium over conventional equivalents, a premium the rest of the chain has consistently declined to absorb at volume.</p>`,
    economics: `<p class="detail-body__prose">Raw material suppliers are commodity price-takers, not setters. Synthetic fibre producers (Toray, Indorama, Reliance Industries) benefit from vertical integration with petrochemical feedstocks and operate at scale; natural fibre farmers (particularly cotton smallholders in West Africa, India, and Central Asia) operate in fragmented markets exposed to weather, currency volatility, and commodity cycles. Gross margins in commodity fibres are structurally low: 5–15% for synthetics, often lower for smallholder cotton.</p><p class="detail-body__prose">EUDR and CSDDD impose traceability obligations upstream, but these flow through brand due diligence requirements; they create data and audit burdens on fibre suppliers without compensating them for compliance costs.</p>`,
    tensions: `<p class="detail-body__prose">The sustainability burden (water, land, and upstream emissions) concentrates here, but the financial incentive to change does not. Regulation arrives indirectly: brands are obligated under CSDDD and EUDR to audit their supply chains, which creates data requests and audit pressure on raw material suppliers without compensating them for the cost of compliance.</p><p class="detail-body__prose">The market premium for certified sustainable fibres has not historically been passed back to the farm or mill. The gap between the certified-sustainable product retail price and the farm-gate price for certified cotton has been documented consistently over two decades of certification programme growth. Whether DPP and CSRD reporting requirements change that dynamic is the open structural question that no current regulation resolves.</p>`,
    companies: [
      { name: "Renewlane", meta: "Amsterdam, Netherlands", model: "Recycled cotton sourcing platform connecting mills to verified post-consumer feedstock for closed-loop production.", tag: "Raw Materials" },
      { name: "Fibertrace", meta: "Gold Coast, Australia", model: "Embedded tracer technology in fibre enabling automated supply chain verification and Scope 3 mapping.", tag: "Raw Materials" },
      { name: "Bolt Threads", meta: "San Francisco, USA", model: "Bioengineered material developer: Mylo (mycelium leather) and Microsilk, positioned as alternatives to animal-derived materials.", tag: "Raw Materials" },
    ],
    regs: [
      { name: "EUDR", summary: "Brands must demonstrate no deforestation for cotton, leather, and rubber sourcing; the due diligence obligation flows to fibre origin.", badge: "badge--preparation", status: "In force" },
      { name: "CSDDD", summary: "Brand supply chain due diligence on human rights and environmental impacts reaches fibre suppliers at Tier 2 and beyond.", badge: "badge--transpos", status: "Amended" },
      { name: "ESPR", summary: "Ecodesign requirements for textile products will set minimum recycled content thresholds, affecting material sourcing decisions.", badge: "badge--preparation", status: "In force" },
    ],
    articles: [
      { tag: "Business models", title: "The price premium for certified sustainable fibres has not reached the farm", meta: "7 min read · 3 Mar 2026" },
      { tag: "Regulation", title: "What EUDR means for fashion brands sourcing cotton and leather in deforestation-risk geographies", meta: "6 min read · 14 Jan 2026" },
      { tag: "Analysis", title: "Microplastic shedding from synthetic textiles: what the science says and what regulation does not yet address", meta: "8 min read · 27 Feb 2026" },
    ],
    next: { slug: "spinmill", name: "Yarn & Fabric" },
  },
  spinmill: {
    num: "Node 02", name: "Yarn & Fabric",
    summary: "Spinning, weaving, dyeing, and finishing. Where raw fibre becomes usable material, and where the industry's chemical pollution and water contamination problems concentrate.",
    what: `<p class="detail-body__prose">The yarn and fabric stage covers spinning (converting staple fibre or filament into yarn), weaving or knitting (producing greige fabric), wet processing (dyeing, bleaching, printing), and finishing (softening, water repellency coatings, antimicrobial treatments). Each sub-stage typically involves distinct actors: yarn spinners, fabric mills, dyehouses, and finishing houses are often separate businesses in a subcontracted chain, with each handoff creating a visibility gap.</p><p class="detail-body__prose">The sector is geographically concentrated in South and East Asia: China accounts for roughly 50% of global fabric production. Wet processing is the industry's primary water pollution source: dyehouses use approximately 200 litres of water per kilogram of fabric, and an estimated 20% of global industrial freshwater pollution comes from textile dyeing and treatment. PFAS used in durable water repellency (DWR) coatings are in the process of being broadly restricted under REACH — the alternatives (silicon-based and wax-based DWR treatments) underperform on durability, and no broadly adopted replacement technology exists at volume.</p>`,
    economics: `<p class="detail-body__prose">Margins at this stage are thin and contract-dependent. Volume fabric mills in China, India, and Bangladesh compete primarily on price, with gross margins of 5–12%. Specialist mills with proprietary fabric technologies or recognised certifications (GRS, OEKO-TEX, Bluesign) can extract modest premiums in the premium and performance apparel segment.</p><p class="detail-body__prose">DPP will require mills to provide primary sustainability data (fibre composition, chemical inputs, water and energy consumption, and certification status), which creates a new compliance infrastructure cost. This burden falls on the mill, not on the brand that uses the data, and no mechanism currently compensates mills for the cost of becoming DPP-compliant data providers.</p>`,
    tensions: `<p class="detail-body__prose">Mills sit between brands demanding more sustainable fabrics and procurement teams that won't pay the premium those fabrics require. A brand may have a stated commitment to Bluesign-certified fabrics while its pricing model makes Bluesign certification economically untenable for most of its Tier 2 mill base.</p><p class="detail-body__prose">The DPP data obligation lands here with significant weight: mills must generate, verify, and transmit traceability records that brands use for their own compliance filings. The cost of creating those records is a new uncompensated obligation on actors operating at very low margins.</p>`,
    companies: [
      { name: "Manteco", meta: "Prato, Italy", model: "Certified recycled wool fabric mill. Supplies luxury and premium brands from post-consumer Italian wool stock.", tag: "Yarn & Fabric" },
      { name: "Arvind Limited", meta: "Ahmedabad, India", model: "One of the world's largest denim fabric producers. Invested in waterless dyeing and recycled cotton programmes.", tag: "Yarn & Fabric" },
      { name: "Coats Group", meta: "London, UK", model: "World's largest industrial thread manufacturer. Significant sustainability infrastructure including recycled thread lines and supply chain traceability services.", tag: "Yarn & Fabric" },
    ],
    regs: [
      { name: "DPP (Digital Product Passport)", summary: "Mills are the primary data source for fibre composition, processing inputs, and certification records required at product level.", badge: "badge--preparation", status: "Enforcement pending" },
      { name: "CSDDD", summary: "Brand supply chain due diligence on human rights and environmental impacts reaches Tier 2 suppliers including fabric and yarn mills.", badge: "badge--transpos", status: "Amended" },
      { name: "REACH", summary: "Chemical substances used in dyeing and finishing are regulated under REACH; restricted substances cannot enter the EU market as part of finished textiles.", badge: "badge--enforced", status: "In force" },
    ],
    articles: [
      { tag: "Business models", title: "The compliance cost of DPP falls on mills that cannot afford to absorb it", meta: "8 min read · 25 Feb 2026" },
      { tag: "Regulation", title: "Wet processing and the limits of voluntary water stewardship in fashion's supply chain", meta: "7 min read · 10 Dec 2025" },
      { tag: "Analysis", title: "PFAS in durable water repellency: the textile industry's most expensive unsolved chemistry problem", meta: "9 min read · 22 Jan 2026" },
    ],
    prev: { slug: "rawmat", name: "Raw Materials" },
    next: { slug: "manufacturing", name: "Manufacturing" },
  },
  manufacturing: {
    num: "Node 03", name: "Manufacturing",
    summary: "The cut-make-trim supply chain. Multi-tier, mostly subcontracted, predominantly located in Asia, where most of the industry's labour rights violations and supply chain visibility gaps concentrate.",
    what: `<p class="detail-body__prose">Manufacturing covers the cutting, sewing, and assembly of fabric into finished garments. The structure is almost universally subcontracted: brands establish relationships with Tier 1 manufacturers who hold the primary commercial contract, but those Tier 1 suppliers routinely subcontract embroidery, printing, cutting, and finishing to Tier 2, 3, and 4 operators. A brand's stated supplier list may cover 200–400 Tier 1 factories; the full supply chain beneath those factories can involve thousands of additional facilities.</p><p class="detail-body__prose">Manufacturing is geographically concentrated in Bangladesh, Cambodia, Vietnam, Myanmar, India, and China, with nearshoring growth in Morocco, Turkey, and Portugal. The sector employs an estimated 75 million people in garment manufacturing globally; the ILO estimates that roughly 85% of garment workers are women, concentrated in countries where labour protections are structurally weaker than in brand headquarter markets. The social compliance audit industry that grew to address supply chain accountability is itself structurally compromised: audits are typically announced, short, and conducted by auditors whose fees are paid by the factory being audited.</p>`,
    economics: `<p class="detail-body__prose">Manufacturing is the most labour-intensive and structurally lowest-margin stage in the chain. Brands use competitive bidding to compress CMT (cut-make-trim) costs, and the real price-per-piece has declined consistently over two decades. Gross margins for Tier 1 manufacturers range from 8–18%, depending on product complexity, order stability, and geographic location.</p><p class="detail-body__prose">The incoming regulatory compliance burden (CSDDD due diligence documentation, DPP primary data provision, and ESPR design-for-repair requirements) falls on an industry segment operating at margins that cannot absorb new uncompensated compliance costs. Brands have historically responded to compliance requirements by adding obligations to supplier contracts without adjusting payment terms.</p>`,
    tensions: `<p class="detail-body__prose">The core structural tension is between brands' sustainability commitments and the pricing model that makes those commitments structurally impossible. A brand can publish a CSRD disclosure describing its supply chain oversight programme while its CMT pricing simultaneously creates conditions that make meaningful oversight unachievable.</p><p class="detail-body__prose">Living wage remains the most contested issue at this node. The gap between legal minimum wages and independently calculated living wages in major garment-producing countries is substantial: in Bangladesh, the legal minimum wage was increased to roughly $113/month in 2024 following worker strikes, still estimated to be approximately 40–50% of a living wage by the Asia Floor Wage Alliance.</p>`,
    companies: [
      { name: "Crystal Group", meta: "Hong Kong, China", model: "Vertically integrated manufacturer. Owns spinning, dyeing, and sewing operations. Supplies major EU and US mass-market brands.", tag: "Manufacturing" },
      { name: "Naveena Group", meta: "Karachi, Pakistan", model: "Pakistan's largest denim manufacturer. Vertically integrated from spinning to finishing. Supplies European and North American brands.", tag: "Manufacturing" },
      { name: "Higg Co", meta: "San Francisco, USA", model: "Supply chain measurement platform. The Higg FEM (Facility Environmental Module) is widely used by Tier 1 manufacturers to report environmental performance to brands.", tag: "Manufacturing" },
    ],
    regs: [
      { name: "CSDDD", summary: "Brands must conduct and publish human rights and environmental due diligence across their supply chains; Tier 1 mandatory, deeper tiers where risk is identified.", badge: "badge--transpos", status: "Amended" },
      { name: "DPP (Digital Product Passport)", summary: "Manufacturers are the primary data source for production inputs, processing certifications, and Scope 3 traceability records required in the passport.", badge: "badge--preparation", status: "Enforcement pending" },
      { name: "ESPR", summary: "Repairability, disassembly design, and durability requirements flow back into manufacturing specification and construction methods.", badge: "badge--preparation", status: "In force" },
    ],
    articles: [
      { tag: "Regulation", title: "What CSDDD actually requires from fashion brands, and why the supply chain audit industry cannot deliver it", meta: "9 min read · 18 Feb 2026" },
      { tag: "Business models", title: "Nearshoring in European manufacturing: the economics behind the narrative", meta: "6 min read · 5 Nov 2025" },
      { tag: "Analysis", title: "Living wage in garment supply chains: the gap between CSDDD's due diligence requirements and measurable worker outcomes", meta: "10 min read · 9 Apr 2026" },
    ],
    prev: { slug: "spinmill", name: "Yarn & Fabric" },
    next: { slug: "brands", name: "Brands" },
  },
  brands: {
    num: "Node 04", name: "Brands",
    summary: "Where the product brief is set and the regulatory obligation lands. The highest-margin, highest-obligation node, and the actor whose strategic choices determine whether the sustainability logic of the chain holds.",
    what: `<p class="detail-body__prose">Brands control the product brief, the supply chain structure, the retail price, and increasingly the direct consumer relationship. They do not manufacture, spin, or grow; they coordinate. This is structurally significant: brands extract the majority of value from the chain while externalising the majority of its environmental and labour costs to nodes upstream. The regulatory system is increasingly designed to close this gap. CSRD, CSDDD, DPP, ECGT, and ESPR all designate the brand as the primary obligated actor precisely because it is the first point of market entry and the entity with both the margin and the market power to force change upstream.</p><p class="detail-body__prose">The brand universe is structurally varied. Mass-market operators (Inditex, H&M Group, Primark) compete on speed, volume, and price. Premium brands compete on perceived quality. Luxury houses compete on scarcity and brand equity. Each faces the same incoming regulatory framework with very different financial capacity to absorb compliance costs.</p>`,
    economics: `<p class="detail-body__prose">Brands capture the majority of value in the fashion chain. Gross margins range from 40–55% at mass market to 60–75% in the premium segment, to above 70% at luxury. This margin structure makes brands the only actors with sufficient capital to invest in supply chain compliance, circular product design, and sustainability data infrastructure.</p><p class="detail-body__prose">CSRD sustainability reporting at scale costs an estimated €1–5 million annually in data collection, audit, and disclosure infrastructure for large operators. None of these costs individually threatens the margin structure, but together they compete with capital allocated to marketing, growth, and product development.</p>`,
    tensions: `<p class="detail-body__prose">The central structural tension is between volume growth — which remains the primary commercial imperative at most brands — and the regulatory trajectory toward durability, repairability, and circularity, which reduces volume. ESPR's ban on the destruction of unsold goods targets the excess production model directly. ECGT restricts the green claim vocabulary that brands use to manage reputational risk. CSRD makes the volume-sustainability gap visible in public disclosures for the first time in a standardised, audited format.</p><p class="detail-body__prose">Collection take-back programmes represent a case study in the gap between sustainability communication and systemic impact. Independent analysis has consistently found that the volumes collected represent a fraction of annual production, and that a significant share of collected items is not recycled but downcycled or exported.</p>`,
    companies: [
      { name: "Inditex", meta: "Arteixo, Spain", model: "Largest fashion group by revenue. Owns Zara, Pull&Bear, Massimo Dutti. CSRD in scope from FY2024. CSDDD primary target.", tag: "Brands" },
      { name: "Patagonia", meta: "Ventura, USA", model: "Mission-driven outdoor brand. B Corp. Transferred ownership to environmental trust (Holdfast Collective) in 2022. Worn Wear repair programme is commercially operated.", tag: "Brands" },
      { name: "Veja", meta: "Paris, France", model: "Sneaker brand built on transparent sourcing from Amazonian rubber tappers and organic cotton cooperatives. No conventional advertising spend.", tag: "Brands" },
    ],
    regs: [
      { name: "CSRD", summary: "Brands above the threshold must publish ESRS-compliant sustainability reports. First mandatory reports due FY2027.", badge: "badge--enforced", status: "Amended" },
      { name: "CSDDD", summary: "Brands must conduct and publish human rights and environmental due diligence across their supply chains.", badge: "badge--transpos", status: "Amended" },
      { name: "ECGT", summary: "Green claims must be substantiated against independently verified criteria before use in marketing. Enforcement from 27 September 2026.", badge: "badge--enforced", status: "In force" },
      { name: "DPP (Digital Product Passport)", summary: "Brands are the first-in-market obligated party for product passport data. Textiles enforcement expected mid-2028 under ESPR delegated act.", badge: "badge--preparation", status: "Enforcement pending" },
      { name: "ESPR", summary: "Unsold goods destruction ban, minimum recycled content requirements, repairability design obligations, and extended producer responsibility.", badge: "badge--preparation", status: "In force" },
    ],
    articles: [
      { tag: "Regulation", title: "CSRD for fashion brands: what the first wave of sustainability reports actually disclosed", meta: "11 min read · 8 Apr 2026" },
      { tag: "Business models", title: "The margin maths of sustainability investment: where do brands actually absorb the cost?", meta: "9 min read · 12 Mar 2026" },
      { tag: "Analysis", title: "Take-back programmes as brand equity: what the evidence says about collection schemes and circular outcomes", meta: "8 min read · 1 Mar 2026" },
    ],
    prev: { slug: "manufacturing", name: "Manufacturing" },
    next: { slug: "retail", name: "Logistics & Retail" },
  },
  retail: {
    num: "Node 05", name: "Logistics & Retail",
    summary: "Freight, warehousing, and the channels to the first buyer. Logistics generates significant Scope 3 emissions that CSRD now makes visible; retail carries DPP display obligations, EPR collection duties, and an unresolved return-rate problem.",
    what: `<p class="detail-body__prose">This node encompasses the physical movement of goods from factory to consumer, and the retail channels through which garments are sold for the first time. Logistics covers ocean freight (the dominant mode for finished garment imports from Asia), air freight, warehousing and distribution centre operations, and last-mile parcel delivery. Retail covers physical stores, online marketplaces, direct-to-consumer brand channels, and wholesale distribution to multi-brand retailers.</p><p class="detail-body__prose">Ocean freight from Bangladesh or Vietnam to European ports generates roughly 2–5 kg of CO₂ per kilogram of garment, a Scope 3 Category 4 emission that brands must now account for under CSRD. Fashion return rates of 25–40% for online purchases inflate logistics emissions, generate warehouse processing costs, and create waste from items that cannot be economically restocked after return.</p>`,
    economics: `<p class="detail-body__prose">Logistics costs represent 10–20% of fashion retail prices and are rising. E-commerce growth has increased the per-unit logistics cost relative to physical retail, because individual parcel fulfilment is structurally more expensive than store replenishment. The cost of a fashion return is estimated at €10–20 per item in Europe. Returns are not priced into fashion retail economics; they are absorbed by margin.</p><p class="detail-body__prose">DPP point-of-sale display requirements add a compliance infrastructure cost (QR code integration into product pages, digital label systems, and data synchronisation) that physical and online retailers have not yet priced into their operating models.</p>`,
    tensions: `<p class="detail-body__prose">Marketplaces face a defining structural tension: they benefit from the volume of fast fashion listings while their platforms distance them from the supply chain behind those listings. ECGT's co-liability provisions, which hold marketplace operators responsible for green claims displayed on their platforms, begin to close that gap.</p><p class="detail-body__prose">The return rate problem is structurally underaddressed by regulation. No EU instrument currently restricts free return policies, despite the documented environmental cost. Several brands (Zara, H&M) have introduced return fees on some channels, but adoption is partial.</p>`,
    companies: [
      { name: "Zalando", meta: "Berlin, Germany", model: "Europe's largest fashion marketplace. In scope for CSRD from FY2024. ECGT co-liability applies to claims displayed on platform. Building DPP display infrastructure.", tag: "Logistics & Retail" },
      { name: "About You", meta: "Hamburg, Germany", model: "Data-driven fashion marketplace. CSRD reporter from FY2025. EPR textile collection infrastructure under development.", tag: "Logistics & Retail" },
      { name: "DHL Supply Chain", meta: "Bonn, Germany", model: "Largest fashion logistics operator in Europe. Carbon-neutral logistics services offered to fashion clients under GoGreen Plus programme.", tag: "Logistics & Retail" },
    ],
    regs: [
      { name: "ECGT", summary: "Retail platforms that host or amplify brand green claims share liability for claims that cannot be substantiated. Enforcement from 27 September 2026.", badge: "badge--enforced", status: "In force" },
      { name: "DPP (Digital Product Passport)", summary: "Sustainability data must be displayed at the point of sale: both physical (QR code on label) and digital (product page).", badge: "badge--preparation", status: "Enforcement pending" },
      { name: "EU Textile EPR", summary: "Retailers (physical and online) must provide or fund textile take-back collection points under Extended Producer Responsibility.", badge: "badge--preparation", status: "In force" },
    ],
    articles: [
      { tag: "Business models", title: "The return rate problem: why online fashion's structural waste cannot be solved by individual actors", meta: "8 min read · 14 Apr 2026" },
      { tag: "Regulation", title: "Marketplace liability under ECGT: when the platform becomes responsible for the brand's claim", meta: "7 min read · 28 Jan 2026" },
      { tag: "Analysis", title: "Logistics emissions in CSRD Scope 3 disclosures: what the first reports revealed about freight mode dependency", meta: "9 min read · 6 May 2026" },
    ],
    prev: { slug: "brands", name: "Brands" },
    next: { slug: "consumer", name: "Consumer" },
  },
  consumer: {
    num: "Node 06", name: "Consumer",
    summary: "The end-user: the only actor whose behaviour determines whether the sustainability logic of the chain closes. Shaped by price, availability, and social context, not primarily by sustainability signals.",
    what: `<p class="detail-body__prose">The consumer node represents the individual at the point of purchase and throughout the use phase. Fashion consumption is driven primarily by price, trend, social context, and convenience — not sustainability signals — and a persistent gap exists between stated consumer preferences for sustainable products and actual purchasing behaviour. Multiple academic studies tracking this intention–action gap find it has not narrowed materially over a decade of growing sustainability awareness.</p><p class="detail-body__prose">Consumer behaviour also determines use-phase impacts, which are larger than most consumers estimate. The estimated average number of times a garment is worn before discard has declined, driven by fast fashion price dynamics and accelerated trend cycles. How long items are kept and how they are cared for are the two highest-leverage variables at this node.</p>`,
    economics: `<p class="detail-body__prose">The relevant economic question is how price sensitivity and disposable income interact with sustainability preferences across different consumer segments. The current evidence: willingness to pay a premium for certified sustainable products is real in luxury, limited in premium, and negligible in volume fashion, where price remains the dominant decision variable.</p><p class="detail-body__prose">The growth of the secondary market represents a structural shift in how consumers relate to fashion economics: buying used primarily as a price-efficiency strategy, with sustainability as secondary benefit or post-rationalisation.</p>`,
    tensions: `<p class="detail-body__prose">The central structural tension is between individual behaviour and systemic constraint. Sustainable consumption is being asked to occur inside a system optimised for volume and frequency, where the cheapest, most convenient, and most trend-responsive option is also the least sustainable.</p><p class="detail-body__prose">The DPP transparency premise rests on an assumption that requires scrutiny: that making environmental performance data visible at point of sale will change purchasing decisions at scale. Consumer-facing eco-labels in food have had mixed results in changing behaviour at the population level. DPP interface design will be critical to whether the data functions as a genuine decision signal or as compliance noise.</p>`,
    companies: [
      { name: "Good On You", meta: "Sydney, Australia", model: "Consumer-facing brand sustainability rating platform. Translates supply chain audit and certification data into accessible A–E scores. Used by 7 million consumers monthly.", tag: "Consumer" },
      { name: "Remass", meta: "Berlin, Germany", model: "Secondhand fashion discovery aggregator. Aggregates listings across resale platforms to improve consumer discovery of secondhand alternatives at the point of intent to purchase.", tag: "Consumer" },
      { name: "Fibretrace", meta: "Gold Coast, Australia", model: "Embedded fibre tracer enabling consumers to scan garments and trace origin claims, the consumer-facing end of supply chain traceability infrastructure.", tag: "Consumer" },
    ],
    regs: [
      { name: "DPP (Digital Product Passport)", summary: "Sustainability data (fibre content, country of origin, carbon footprint, and repairability) must be accessible to consumers at point of sale via QR code.", badge: "badge--preparation", status: "Enforcement pending" },
      { name: "ECGT", summary: "Prohibits vague or unsubstantiated green claims in consumer-facing communications. Requires quantified, independently verified evidence for sustainability claims.", badge: "badge--enforced", status: "In force" },
      { name: "EU Textile EPR", summary: "EPR take-back schemes will give consumers a mandated route to dispose of garments responsibly; effectiveness depends on infrastructure proximity and awareness.", badge: "badge--preparation", status: "In force" },
    ],
    articles: [
      { tag: "Analysis", title: "The intention–action gap: what the evidence says about consumer sustainability behaviour in fashion", meta: "9 min read · 3 Mar 2026" },
      { tag: "Regulation", title: "DPP at point of sale: what information consumers will actually see and whether it will change behaviour", meta: "7 min read · 15 Feb 2026" },
      { tag: "Analysis", title: "Use-phase impacts: why how consumers care for clothes matters as much as what they buy", meta: "6 min read · 4 Apr 2026" },
    ],
    prev: { slug: "retail", name: "Logistics & Retail" },
    next: { slug: "secondary", name: "Secondary Market" },
  },
  secondary: {
    num: "Node 07", name: "Secondary Market",
    summary: "Resale, rental, repair, and recycling: the end-of-life infrastructure for fashion. The fastest-growing segment by transaction volume, but with unit economics that are structurally difficult below luxury price points.",
    what: `<p class="detail-body__prose">The secondary market covers every channel through which fashion items re-enter circulation after their first retail sale. This includes peer-to-peer resale platforms (Vinted, Depop), curated resale (Vestiaire Collective, The RealReal), brand-operated take-back and resale, rental and subscription services (Hurr, By Rotation), repair and alteration services, and the industrial sorter-and-exporter network that handles donated and collected garments at scale.</p><p class="detail-body__prose">The node is growing faster than primary fashion retail by transaction volume. The global secondhand apparel market was estimated at $227 billion in 2025 and is projected to reach $350 billion by 2028. Repair represents the highest-value circular intervention (extending garment life is more emissions-efficient than any end-of-life recycling process), but the economics of professional repair are structurally challenging: labour costs for repair in EU markets exceed the original manufacturing cost of a fast fashion garment.</p>`,
    economics: `<p class="detail-body__prose">Margin structure in the secondary market varies sharply by model and price segment. Platform marketplace models (Vinted, Depop) extract a take-rate of 5–15% of transaction value. Managed resale models (Vestiaire Collective, The RealReal) with in-house authentication and fulfilment extract 15–30% take-rates, with higher unit economics but significant fixed cost. Platform profitability at scale has been demonstrated only in the volume peer-to-peer segment.</p><p class="detail-body__prose">The volume of collected textiles that reaches genuine recycling (fibre-to-fibre, not downcycling) is estimated at less than 1% globally: a structural gap between the volume of EPR collection and the availability of recycling infrastructure that the EU's Extended Producer Responsibility framework must create incentives to close.</p>`,
    tensions: `<p class="detail-body__prose">The core sustainability tension is between the narrative promise (that secondhand is inherently more sustainable than new) and the empirical question of whether secondhand transactions substitute for new purchases or add to total consumption. The substitution hypothesis is foundational to secondhand sustainability claims, and the evidence on it is genuinely mixed.</p><p class="detail-body__prose">Brand-operated resale programmes can create a secondary market channel for brand products and generate sustainability credentials, but they require investment in logistics and quality control infrastructure that competes with primary market investment. Several programmes launched between 2020–2023 have been scaled back.</p>`,
    companies: [
      { name: "Vestiaire Collective", meta: "Paris, France", model: "Curated luxury resale platform with in-house item authentication. One of the few secondary market operators to achieve sustained gross margin above 30%.", tag: "Secondary Market" },
      { name: "Vinted", meta: "Vilnius, Lithuania", model: "Europe's largest peer-to-peer fashion marketplace. Volume model shifting authentication risk to buyers. Achieved operating profitability at scale in 2023.", tag: "Secondary Market" },
      { name: "The RealReal", meta: "San Francisco, USA", model: "US luxury consignment platform with authenticated physical stores and online channel. First large resale operator to attempt the fully managed luxury model at scale.", tag: "Secondary Market" },
    ],
    regs: [
      { name: "ESPR", summary: "Right-to-repair obligations require brands and retailers to provide repair services and spare parts information for textile products in scope of the delegated act.", badge: "badge--preparation", status: "In force" },
      { name: "EU Textile EPR", summary: "EPR collection schemes will generate significant garment volumes requiring sorting and secondary market processing infrastructure. Scope of EPR obligations for resale platforms under review.", badge: "badge--preparation", status: "In force" },
    ],
    articles: [
      { tag: "Business models", title: "Why resale isn't the silver bullet brands hoped for", meta: "8 min read · 2 Mar 2026" },
      { tag: "Analysis", title: "The unit economics of secondhand: when platform scale does and doesn't solve the margin problem", meta: "9 min read · 14 Feb 2026" },
      { tag: "Regulation", title: "EU Textile EPR and the industrial sorting gap: what the regulation requires and what the infrastructure cannot yet deliver", meta: "7 min read · 19 Jan 2026" },
    ],
    prev: { slug: "consumer", name: "Consumer" },
  },
};

const BG_GRADS = [
  "linear-gradient(135deg,#0e0e0e,#1c1c1c)",
  "linear-gradient(135deg,#131313,#1d1d1d)",
  "linear-gradient(135deg,#090909,#181818)",
];

export async function generateStaticParams() {
  return Object.keys(NODE_DETAIL).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const node = NODE_DETAIL[slug];
  if (!node) return { title: "Not found — Prefall" };
  return {
    title: `${node.name} — Value Chain — Prefall`,
    description: node.summary,
  };
}

export default async function ValueChainNodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const node = NODE_DETAIL[slug];
  if (!node) notFound();

  return (
    <>
      <div className="detail-header detail-header--no-border">
        <div className="detail-header__label">
          <Link href="/value-chain" className="detail-header__back">← Value Chain</Link>
          <span className="eyebrow">{node.num}</span>
        </div>
        <h1 className="detail-header__heading">{node.name}</h1>
        <p className="detail-header__summary">{node.summary}</p>
      </div>

      <div className="detail-wrap">
        <div className="detail-layout">

          {/* Sidebar */}
          <nav className="detail-sidebar">
            <div className="detail-sidebar__section">
              <button className="detail-sidebar__trigger">
                On this page<span className="detail-sidebar__icon">+</span>
              </button>
              <div className="detail-sidebar__panel">
                <a className="detail-sidebar__link" href="#vn-what">What happens here</a>
                <a className="detail-sidebar__link" href="#vn-economics">The economics</a>
                <a className="detail-sidebar__link" href="#vn-tensions">Tensions</a>
                <a className="detail-sidebar__link" href="#vn-companies">Companies</a>
                <a className="detail-sidebar__link" href="#vn-regulation">Regulation</a>
                <a className="detail-sidebar__link" href="#vn-articles">Articles</a>
              </div>
            </div>
            {(node.prev || node.next) && (
              <div className="detail-sidebar__section">
                <button className="detail-sidebar__trigger">
                  Adjacent nodes<span className="detail-sidebar__icon">+</span>
                </button>
                <div className="detail-sidebar__panel">
                  {node.prev && <Link className="detail-sidebar__link" href={`/value-chain/${node.prev.slug}`}>← {node.prev.name}</Link>}
                  {node.next && <Link className="detail-sidebar__link" href={`/value-chain/${node.next.slug}`}>{node.next.name} →</Link>}
                </div>
              </div>
            )}
          </nav>

          {/* Body */}
          <div>
            <div className="detail-body__section" id="vn-what">
              <p className="detail-body__section-head">What happens at this node</p>
              <div dangerouslySetInnerHTML={{ __html: node.what }} />
            </div>

            <div className="detail-body__section" id="vn-economics">
              <p className="detail-body__section-head">The economics of this node</p>
              <div dangerouslySetInnerHTML={{ __html: node.economics }} />
            </div>

            <div className="detail-body__section" id="vn-tensions">
              <p className="detail-body__section-head">Tensions in view</p>
              <div dangerouslySetInnerHTML={{ __html: node.tensions }} />
            </div>

            <div className="detail-body__section" id="vn-companies">
              <p className="detail-body__section-head">Companies operating here</p>
              <div className="companies-grid">
                {node.companies.map(c => (
                  <Link key={c.name} href={COMPANY_SLUG[c.name] ? `/companies/${COMPANY_SLUG[c.name]}` : "/companies"} className="company-card">
                    <div className="company-card__logo-wrap"><div className="img-ph" /></div>
                    <div className="company-card__body">
                      <p className="company-card__name">{c.name}</p>
                      <p className="company-card__meta">{c.meta}</p>
                      <p className="company-card__model">{c.model}</p>
                      <span className="node-tag">{c.tag}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="detail-body__section" id="vn-regulation">
              <p className="detail-body__section-head">Regulation applicable here</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {node.regs.map(r => (
                  <Link key={r.name} href="/regulation" className="reg-item" style={{ padding: "16px 0" }}>
                    <div>
                      <p className="reg-item__name">{r.name}</p>
                      <p className="reg-item__summary">{r.summary}</p>
                    </div>
                    <span className={`badge ${r.badge}`}>{r.status}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="detail-body__section" id="vn-articles">
              <p className="detail-body__section-head">Prefall analysis covering this node</p>
              <div className="related-carousel">
                <div className="related-grid">
                  {node.articles.map((a, ai) => (
                    <Link key={a.title} href="/articles" className="card" style={{ textDecoration: "none" }}>
                      <div className="card__img"><div className="img-ph" style={{ background: BG_GRADS[ai % BG_GRADS.length] }} /></div>
                      <div className="card__body">
                        <div className="card__meta-row">
                          <span className="card__tag">{a.tag}</span>
                          <span className="card__time">{a.meta.split(" · ")[0]}</span>
                        </div>
                        <h3 className="card__title">{a.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
