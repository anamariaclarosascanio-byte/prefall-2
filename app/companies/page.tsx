import type { Metadata } from "next";
import Link from "next/link";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { ALL_COMPANIES_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Companies — Prefall",
  description:
    "The Prefall directory. Companies operating across the fashion value chain, profiled for their business model, economics, and regulatory exposure.",
};

type SanityCompany = {
  _id: string;
  slug: string;
  name: string;
  modelDescriptor?: string;
  focus?: string;
  valueChainNodes?: string[];
  logo?: string;
};

/* Map node slug → display label for filter buttons */
const NODE_LABELS: Record<string, string> = {
  "raw-materials":    "Raw Materials",
  "yarn-fabric":      "Yarn & Fabric",
  "manufacturing":    "Manufacturing",
  "brands":           "Brands",
  "logistics-retail": "Logistics & Retail",
  "consumer":         "Consumer",
  "secondary-market": "Secondary Market",
};

export default async function CompaniesPage() {
  let companies: SanityCompany[] = [];

  if (isSanityConfigured()) {
    companies = await client.fetch<SanityCompany[]>(ALL_COMPANIES_QUERY);
  }

  return (
    <>
      <div className="page-header">
        <h1 className="page-header__heading">Companies</h1>
        <p className="page-header__subhead">
          Companies operating across fashion&apos;s value chain, profiled for their business model,
          the economics behind it, and the regulatory exposure that shapes their future.
        </p>
      </div>

      <section className="section" aria-label="Company directory">

        {/* Filters */}
        <div className="issues-controls">
          <div className="filter-bar" aria-label="Filter by node">
            <span className="eyebrow" style={{ marginRight: 6 }}>Filter by</span>
            <button className="filter-btn is-active" data-filter="all">All</button>
            {Object.entries(NODE_LABELS).map(([slug, label]) => (
              <button key={slug} className="filter-btn" data-filter={slug}>{label}</button>
            ))}
          </div>
        </div>

        {companies.length === 0 ? (
          <div className="companies-empty">
            <p className="companies-empty__text">No companies in the directory yet.</p>
          </div>
        ) : (
          <div className="companies-grid" id="companies-grid">
            {companies.map((c) => (
              <Link
                key={c._id}
                href={`/companies/${c.slug}`}
                className="company-card"
                data-node={c.valueChainNodes?.[0] ?? ""}
              >
                <div className="company-card__logo">
                  {c.logo
                    ? <img src={c.logo} alt={c.name} />
                    : <div className="company-card__logo-ph">{c.name[0]}</div>
                  }
                </div>
                <div className="company-card__body">
                  <p className="company-card__name">{c.name}</p>
                  {c.focus && <p className="company-card__focus">{c.focus}</p>}
                  {c.modelDescriptor && (
                    <p className="company-card__desc">{c.modelDescriptor}</p>
                  )}
                </div>
                {c.valueChainNodes && c.valueChainNodes.length > 0 && (
                  <div className="company-card__nodes">
                    {c.valueChainNodes.map((n) => (
                      <span key={n} className="company-card__node-tag">
                        {NODE_LABELS[n] ?? n}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}

      </section>
    </>
  );
}
