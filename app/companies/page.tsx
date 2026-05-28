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
          An analytical directory of companies operating across the fashion value chain. Each entry describes the business model, sets out the economic logic it runs on, and maps the regulatory exposure that shapes its future.
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
                <div className="company-card__logo-wrap">
                  {c.logo
                    ? <img src={c.logo} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    : <div className="img-ph" />
                  }
                </div>
                <div className="company-card__body">
                  <p className="company-card__name">{c.name}</p>
                  {c.focus && <p className="company-card__meta">{c.focus}</p>}
                  {c.modelDescriptor && (
                    <p className="company-card__model">{c.modelDescriptor}</p>
                  )}
                  {c.valueChainNodes && c.valueChainNodes.length > 0 && (
                    <>
                      {c.valueChainNodes.map((n) => (
                        <span key={n} className="node-tag" data-node={n}>
                          {NODE_LABELS[n] ?? n}
                        </span>
                      ))}
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="method-note">
          <p className="method-note__heading">How this directory works</p>
          <p className="method-note__body">Inclusion is an editorial decision based on a company&apos;s relevance to the transition of the fashion industry. We do not score, rank, or rate companies on sustainability performance. We describe how their business model works, what the company says about itself, what we make of the economics of the model, and the publicly verifiable signals available. Each entry is updated when material changes happen.</p>
        </div>

      </section>
    </>
  );
}
