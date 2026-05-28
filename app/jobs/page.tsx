import type { Metadata } from "next";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { ALL_JOBS_QUERY } from "@/sanity/lib/queries";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Jobs — Prefall",
  description:
    "Roles at the intersection of fashion and sustainability. Curated listings from companies operating across the value chain.",
};

type SanityJob = {
  _id: string;
  role: string;
  company: string;
  location?: string;
  type?: string;
  seniority?: string;
  valueChainNode?: string;
  tags?: string[];
  applyUrl?: string;
  postedAt: string;
};

export default async function JobsPage() {
  let jobs: SanityJob[] = [];

  if (isSanityConfigured()) {
    jobs = await client.fetch<SanityJob[]>(ALL_JOBS_QUERY);
  }

  return (
    <>
      <div className="page-header" style={{ borderBottom: "none", paddingBottom: 32 }}>
        <h1 className="page-header__heading">Jobs</h1>
        <p className="page-header__subhead">
          A curated selection of open roles in sustainability, ESG, circularity, regulation, and impact functions across the fashion industry. Browse, filter, and apply directly through the listing company.
        </p>
        <p style={{ fontSize: "var(--t-small)", color: "var(--gray)", marginTop: 16 }}>Prefall does not handle applications.</p>
      </div>

      <section className="section" aria-label="Job listings" style={{ paddingTop: 28 }}>
        <div className="issues-controls">
          <div className="filter-bar" aria-label="Filter by category">
            <span className="eyebrow" style={{ marginRight: 6 }}>Filter by</span>
            <button className="filter-btn is-active" data-filter="all">All</button>
            <button className="filter-btn" data-filter="esg">ESG &amp; Compliance</button>
            <button className="filter-btn" data-filter="sustainability">Sustainability</button>
            <button className="filter-btn" data-filter="regulation">Regulation</button>
            <button className="filter-btn" data-filter="circularity">Circularity</button>
          </div>
          <div className="sort-bar">
            <span className="sort-bar__label">Sort</span>
            <button className="sort-btn is-active">Newest</button>
            <button className="sort-btn">Expiring soon</button>
          </div>
        </div>

        {jobs.length === 0 ? (
          <div className="jobs-empty">
            <p className="jobs-empty__text">No active listings at the moment.</p>
            <p className="jobs-empty__sub">
              Check back soon — or{" "}
              <a href="/newsletter" className="link-u">subscribe to the newsletter</a>
              {" "}to be notified when roles are added.
            </p>
          </div>
        ) : (
          <div className="jobs-grid">
            {jobs.map((job) => (
              <a
                key={job._id}
                href={job.applyUrl ?? "#"}
                target={job.applyUrl ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="job-item"
                data-category={job.tags?.[0] ?? ""}
              >
                <div>
                  <div className="job-item__title-row">
                    <p className="job-item__role">{job.role}</p>
                    {job.seniority && (
                      <span className={`seniority-tag seniority-tag--${job.seniority === "Senior" ? "senior" : job.seniority === "Junior" ? "junior" : "mid"}`}>
                        {job.seniority}
                      </span>
                    )}
                  </div>
                  <div className="job-item__meta">
                    <span>{job.company}</span>
                    {job.location && (
                      <>
                        <span className="card__dot"></span>
                        <span>{job.location}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="job-item__right">
                  Posted {format(new Date(job.postedAt), "d MMM yyyy")}
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
