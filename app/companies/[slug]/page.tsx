import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { COMPANY_BY_SLUG_QUERY, COMPANY_SLUGS_QUERY, ARTICLES_BY_NODE_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";

type Params = { params: Promise<{ slug: string }> };

type SanityCompany = {
  _id: string;
  slug: string;
  name: string;
  modelDescriptor?: string;
  focus?: string;
  valueChainNodes?: string[];
  founded?: string;
  hq?: string;
  revenue?: string;
  employees?: string;
  stage?: string;
  website?: string;
  certifications?: string[];
  galleryImages?: string[];
  businessModel?: unknown[];
  companySays?: string;
  prefallAnalysis?: unknown[];
  regulatoryExposure?: unknown[];
  signals?: string[];
  sources?: string[];
  logo?: string;
};

type SanityArticle = {
  _id: string;
  slug: string;
  title: string;
  tag: string;
  readTime?: string;
  synopsis?: string;
  publishedAt: string;
  coverImage?: string;
};

const NODE_LABELS: Record<string, string> = {
  "raw-materials":    "Raw Materials",
  "yarn-fabric":      "Yarn & Fabric",
  "manufacturing":    "Manufacturing",
  "brands":           "Brands",
  "logistics-retail": "Logistics & Retail",
  "consumer":         "Consumer",
  "secondary-market": "Secondary Market",
};

export async function generateStaticParams() {
  if (!isSanityConfigured()) return [];
  const slugs = await client.fetch<{ slug: string }[]>(COMPANY_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  if (!isSanityConfigured()) return { title: "Company — Prefall" };
  const company = await client.fetch<SanityCompany | null>(COMPANY_BY_SLUG_QUERY, { slug });
  return {
    title: company ? `${company.name} — Prefall` : "Company — Prefall",
    description: company?.modelDescriptor ?? "",
  };
}

export default async function CompanyPage({ params }: Params) {
  const { slug } = await params;

  if (!isSanityConfigured()) notFound();

  const company = await client.fetch<SanityCompany | null>(COMPANY_BY_SLUG_QUERY, { slug });
  if (!company) notFound();

  /* Articles related to this company's first node */
  let relatedArticles: SanityArticle[] = [];
  if (company.valueChainNodes && company.valueChainNodes.length > 0) {
    relatedArticles = await client.fetch<SanityArticle[]>(ARTICLES_BY_NODE_QUERY, {
      nodeSlug: company.valueChainNodes[0],
    });
  }

  const primaryNode = company.valueChainNodes?.[0];
  const primaryNodeLabel = primaryNode ? (NODE_LABELS[primaryNode] ?? primaryNode) : null;

  return (
    <div className="company-profile">

      {/* ── Hero ── */}
      <div className="company-profile__hero">
        <div className="company-profile__hero-text">
          <div className="company-profile__breadcrumb">
            <Link href="/companies">Companies</Link>
            <span> / </span>
            <span>{company.name}</span>
          </div>
          {company.focus && (
            <p className="company-profile__tag eyebrow">{company.focus}</p>
          )}
          <h1 className="company-profile__name">{company.name}</h1>
          {company.modelDescriptor && (
            <p className="company-profile__descriptor">{company.modelDescriptor}</p>
          )}

          {/* Meta grid */}
          <div className="company-profile__meta-grid">
            {company.founded && (
              <div className="company-profile__meta-item">
                <span className="company-profile__meta-label">Founded</span>
                <span className="company-profile__meta-value">{company.founded}</span>
              </div>
            )}
            {company.hq && (
              <div className="company-profile__meta-item">
                <span className="company-profile__meta-label">HQ</span>
                <span className="company-profile__meta-value">{company.hq}</span>
              </div>
            )}
            {company.revenue && (
              <div className="company-profile__meta-item">
                <span className="company-profile__meta-label">Revenue</span>
                <span className="company-profile__meta-value">{company.revenue}</span>
              </div>
            )}
            {company.employees && (
              <div className="company-profile__meta-item">
                <span className="company-profile__meta-label">Employees</span>
                <span className="company-profile__meta-value">{company.employees}</span>
              </div>
            )}
            {company.stage && (
              <div className="company-profile__meta-item">
                <span className="company-profile__meta-label">Stage</span>
                <span className="company-profile__meta-value">{company.stage}</span>
              </div>
            )}
            {company.certifications && company.certifications.length > 0 && (
              <div className="company-profile__meta-item">
                <span className="company-profile__meta-label">Certifications</span>
                <span className="company-profile__meta-value">
                  {company.certifications.join(", ")}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Gallery */}
        <div className="company-gallery">
          {company.galleryImages && company.galleryImages.length > 0
            ? company.galleryImages.slice(0, 1).map((img, i) => (
                <img key={i} src={img} alt="" className="company-gallery__main" />
              ))
            : <div className="company-gallery__main img-ph" />
          }
        </div>
      </div>

      {/* ── Body + sidebar ── */}
      <div className="company-profile__body-wrap">
        <div className="company-profile__body">

          {company.businessModel && (
            <section className="company-profile__section">
              <h2 className="company-profile__section-head">How the model works</h2>
              <div className="prose">
                <PortableText value={company.businessModel as Parameters<typeof PortableText>[0]["value"]} />
              </div>
            </section>
          )}

          {company.companySays && (
            <section className="company-profile__section">
              <h2 className="company-profile__section-head">The company says</h2>
              <blockquote className="company-profile__quote">{company.companySays}</blockquote>
            </section>
          )}

          {company.prefallAnalysis && (
            <section className="company-profile__section">
              <h2 className="company-profile__section-head">Prefall analysis</h2>
              <div className="prose">
                <PortableText value={company.prefallAnalysis as Parameters<typeof PortableText>[0]["value"]} />
              </div>
            </section>
          )}

          {company.regulatoryExposure && (
            <section className="company-profile__section">
              <h2 className="company-profile__section-head">Regulatory exposure</h2>
              <div className="prose">
                <PortableText value={company.regulatoryExposure as Parameters<typeof PortableText>[0]["value"]} />
              </div>
            </section>
          )}

          {company.signals && company.signals.length > 0 && (
            <section className="company-profile__section">
              <h2 className="company-profile__section-head">Signals</h2>
              <ul className="company-profile__signals">
                {company.signals.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </section>
          )}

          {relatedArticles.length > 0 && (
            <section className="company-profile__section">
              <h2 className="company-profile__section-head">Prefall on this</h2>
              <div className="company-profile__articles">
                {relatedArticles.slice(0, 3).map((a) => (
                  <Link key={a._id} href={`/articles/${a.slug}`} className="card">
                    <div className="card__img">
                      {a.coverImage
                        ? <img src={a.coverImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        : <div className="img-ph" />
                      }
                    </div>
                    <div className="card__body">
                      <div className="card__meta-row">
                        <span className="card__tag">{a.tag}</span>
                      </div>
                      <h3 className="card__title">{a.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {company.sources && company.sources.length > 0 && (
            <section className="company-profile__section">
              <h2 className="company-profile__section-head">Sources</h2>
              <ul className="modal__list">
                {company.sources.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </section>
          )}

        </div>

        {/* Sidebar */}
        <aside className="company-profile__sidebar">
          <div className="detail-sidebar">
            <button className="detail-sidebar__trigger">On this page</button>
            <nav className="detail-sidebar__panel">
              {company.businessModel && <a href="#model">How the model works</a>}
              {company.companySays && <a href="#says">The company says</a>}
              {company.prefallAnalysis && <a href="#analysis">Prefall analysis</a>}
              {company.regulatoryExposure && <a href="#regulatory">Regulatory exposure</a>}
              {company.signals && company.signals.length > 0 && <a href="#signals">Signals</a>}
              {relatedArticles.length > 0 && <a href="#articles">Prefall on this</a>}
            </nav>
          </div>

          {primaryNodeLabel && (
            <div className="detail-sidebar" style={{ marginTop: 24 }}>
              <p className="detail-sidebar__trigger" style={{ cursor: "default" }}>Value chain position</p>
              <div className="detail-sidebar__panel is-open">
                <Link href={`/value-chain/${primaryNode}`} className="link-u">
                  {primaryNodeLabel}
                </Link>
              </div>
            </div>
          )}

          {company.website && (
            <a href={company.website} target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ marginTop: 24, display: "block" }}>
              Visit website →
            </a>
          )}
        </aside>
      </div>

    </div>
  );
}
