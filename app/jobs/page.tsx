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

const NODE_LABELS: Record<string, string> = {
  "raw-materials":    "Raw Materials",
  "yarn-fabric":      "Yarn & Fabric",
  "manufacturing":    "Manufacturing",
  "brands":           "Brands",
  "logistics-retail": "Logistics & Retail",
  "consumer":         "Consumer",
  "secondary-market": "Secondary Market",
};

export default async function JobsPage() {
  let jobs: SanityJob[] = [];

  if (isSanityConfigured()) {
    jobs = await client.fetch<SanityJob[]>(ALL_JOBS_QUERY);
  }

  return (
    <>
      <div className="page-header">
        <h1 className="page-header__heading">Jobs</h1>
        <p className="page-header__subhead">
          Roles at the intersection of fashion and sustainability. Curated listings from companies
          operating across the value chain.
        </p>
      </div>

      <section className="section" aria-label="Job listings">
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
          <div className="jobs-list">
            {jobs.map((job) => (
              <a
                key={job._id}
                href={job.applyUrl ?? "#"}
                target={job.applyUrl ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="job-item"
              >
                <div className="job-item__main">
                  <p className="job-item__role">{job.role}</p>
                  <p className="job-item__company">{job.company}</p>
                  {job.location && (
                    <p className="job-item__location">{job.location}</p>
                  )}
                </div>
                <div className="job-item__meta">
                  {job.type && <span className="job-item__tag">{job.type}</span>}
                  {job.seniority && <span className="job-item__tag">{job.seniority}</span>}
                  {job.valueChainNode && (
                    <span className="job-item__tag job-item__tag--node">
                      {NODE_LABELS[job.valueChainNode] ?? job.valueChainNode}
                    </span>
                  )}
                  <span className="job-item__date">
                    {format(new Date(job.postedAt), "d MMM yyyy")}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
