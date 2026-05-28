/**
 * All GROQ queries for the Prefall site.
 * Import these into page files alongside the Sanity client.
 */

/* ── Article fields used across the site ────────────────── */
const ARTICLE_CARD_FIELDS = `
  _id,
  "slug": slug.current,
  title,
  tag,
  readTime,
  synopsis,
  publishedAt,
  filterCategory,
  valueChainNodes,
  keyTakeaways,
  sources,
  sectors,
  featured,
  "coverImage": coverImage.asset->url
`;

const ARTICLE_FULL_FIELDS = `
  ${ARTICLE_CARD_FIELDS},
  dek,
  body,
`;

/* ── Articles ────────────────────────────────────────────── */

/** All published articles, newest first */
export const ALL_ARTICLES_QUERY = `
  *[_type == "article"] | order(publishedAt desc) {
    ${ARTICLE_CARD_FIELDS}
  }
`;

/** Featured articles for homepage reading section */
export const FEATURED_ARTICLES_QUERY = `
  *[_type == "article" && featured == true] | order(publishedAt desc) {
    ${ARTICLE_CARD_FIELDS}
  }
`;

/** Single article by slug */
export const ARTICLE_BY_SLUG_QUERY = `
  *[_type == "article" && slug.current == $slug][0] {
    ${ARTICLE_FULL_FIELDS}
  }
`;

/** Articles slugs for generateStaticParams */
export const ARTICLE_SLUGS_QUERY = `
  *[_type == "article"] { "slug": slug.current }
`;

/** Articles for a specific value chain node */
export const ARTICLES_BY_NODE_QUERY = `
  *[_type == "article" && $nodeSlug in valueChainNodes] | order(publishedAt desc) {
    ${ARTICLE_CARD_FIELDS}
  }
`;

/* ── Companies ───────────────────────────────────────────── */

const COMPANY_CARD_FIELDS = `
  _id,
  "slug": slug.current,
  name,
  modelDescriptor,
  focus,
  valueChainNodes,
  hq,
  stage,
  "logo": logo.asset->url
`;

const COMPANY_FULL_FIELDS = `
  ${COMPANY_CARD_FIELDS},
  founded,
  revenue,
  employees,
  website,
  certifications,
  "galleryImages": galleryImages[].asset->url,
  businessModel,
  companySays,
  prefallAnalysis,
  regulatoryExposure,
  signals,
  sources
`;

/** All companies */
export const ALL_COMPANIES_QUERY = `
  *[_type == "company"] | order(name asc) {
    ${COMPANY_CARD_FIELDS}
  }
`;

/** Single company by slug */
export const COMPANY_BY_SLUG_QUERY = `
  *[_type == "company" && slug.current == $slug][0] {
    ${COMPANY_FULL_FIELDS}
  }
`;

/** Company slugs for generateStaticParams */
export const COMPANY_SLUGS_QUERY = `
  *[_type == "company"] { "slug": slug.current }
`;

/** Companies for a specific value chain node */
export const COMPANIES_BY_NODE_QUERY = `
  *[_type == "company" && $nodeSlug in valueChainNodes] | order(name asc) {
    ${COMPANY_CARD_FIELDS}
  }
`;

/* ── Jobs ────────────────────────────────────────────────── */

/** All active jobs, newest first */
export const ALL_JOBS_QUERY = `
  *[_type == "job" && active == true] | order(postedAt desc) {
    _id,
    role,
    company,
    location,
    type,
    seniority,
    valueChainNode,
    tags,
    applyUrl,
    postedAt
  }
`;

/* ── Regulations ─────────────────────────────────────────── */

/** All regulations ordered by display order */
export const ALL_REGULATIONS_QUERY = `
  *[_type == "regulation"] | order(order asc) {
    _id,
    "slug": slug.current,
    title,
    fullName,
    status,
    effectiveDate,
    jurisdiction,
    applies,
    summary,
    valueChainNodes,
    impactLevel
  }
`;

/** Single regulation by slug */
export const REGULATION_BY_SLUG_QUERY = `
  *[_type == "regulation" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    fullName,
    status,
    effectiveDate,
    jurisdiction,
    applies,
    summary,
    body,
    valueChainNodes,
    impactLevel
  }
`;

/** Regulations for a specific value chain node */
export const REGULATIONS_BY_NODE_QUERY = `
  *[_type == "regulation" && $nodeSlug in valueChainNodes] | order(order asc) {
    _id,
    "slug": slug.current,
    title,
    fullName,
    status,
    impactLevel
  }
`;
