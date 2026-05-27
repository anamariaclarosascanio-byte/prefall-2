import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Prefall",
  description:
    "Prefall is independent editorial intelligence on the business of sustainable fashion, founded by Ana Maria Claros.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div
        style={{
          padding: "80px var(--margin) 60px",
          borderBottom: "1px solid var(--sep)",
        }}
      >
        <p className="eyebrow" style={{ marginBottom: 20 }}>About Prefall</p>
        <h1
          style={{
            fontSize: "var(--t-display)",
            fontWeight: 600,
            lineHeight: 1.06,
            letterSpacing: "-0.025em",
            maxWidth: 800,
          }}
        >
          The business behind the next season of fashion.
        </h1>
      </div>

      {/* Mission section */}
      <section
        style={{ padding: "80px var(--margin)", borderBottom: "1px solid var(--sep)" }}
        aria-label="Mission"
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}
          className="about-grid"
        >
          <div>
            <p
              className="eyebrow"
              style={{ marginBottom: 0, position: "sticky", top: "calc(var(--header-h) + 24px)" }}
            >
              What we do
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 300,
                lineHeight: 1.6,
                letterSpacing: "-0.015em",
                marginBottom: 32,
              }}
            >
              Prefall is independent editorial intelligence on the economics of fashion&apos;s
              sustainability transition. We analyse the business models, the regulation, and
              the consumer behaviour that determine which propositions hold up commercially
              and which do not.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--subtle)", marginBottom: 24 }}>
              The fashion industry generates significant coverage of sustainability ambition.
              Prefall covers the economic reality that sits underneath. We are interested in
              whether things work — financially, operationally, at scale — not in whether
              they are well-intentioned.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--subtle)" }}>
              Our readers are professionals who need to understand the economics of the
              industry&apos;s transition: investors, executives, policymakers, and analysts.
            </p>
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section
        style={{ padding: "80px var(--margin)", borderBottom: "1px solid var(--sep)" }}
        aria-label="Founder"
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}
          className="about-grid"
        >
          <div>
            <p
              className="eyebrow"
              style={{ marginBottom: 0, position: "sticky", top: "calc(var(--header-h) + 24px)" }}
            >
              Founder
            </p>
          </div>
          <div>
            <div
              style={{
                width: "100%",
                maxWidth: 320,
                aspectRatio: "3/4",
                background: "#E8E8E6",
                marginBottom: 32,
              }}
            />
            <h2
              style={{
                fontSize: 26,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: 8,
              }}
            >
              Ana Maria Claros
            </h2>
            <p style={{ fontSize: 14, color: "var(--gray)", marginBottom: 24 }}>
              Founder &amp; Editor
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--subtle)", marginBottom: 24 }}>
              Ana Maria brings a background in fashion economics and sustainability strategy.
              She founded Prefall to close the gap between sustainability ambition and
              economic analysis in the fashion industry.
            </p>
            <a
              href="https://www.linkedin.com/in/ana-claros/"
              style={{ fontSize: 14, color: "var(--gray)" }}
              className="link-u"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* Editorial approach */}
      <section
        style={{ padding: "80px var(--margin)", borderBottom: "1px solid var(--sep)" }}
        aria-label="Approach"
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}
          className="about-grid"
        >
          <div>
            <p
              className="eyebrow"
              style={{ marginBottom: 0, position: "sticky", top: "calc(var(--header-h) + 24px)" }}
            >
              Our approach
            </p>
          </div>
          <div>
            {[
              {
                title: "Economic first",
                body: "Every piece of analysis starts from the question: does this work financially? Ambition without viability is not a business story.",
              },
              {
                title: "Independent",
                body: "Prefall is editorially independent. We do not accept sponsored content. Our analysis is not influenced by commercial relationships with the companies we cover.",
              },
              {
                title: "Primary sources",
                body: "We rely on company filings, regulatory documents, and original research. Where we use secondary sources, we say so.",
              },
            ].map((item) => (
              <div key={item.title} style={{ marginBottom: 40 }}>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--subtle)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        style={{ padding: "80px var(--margin)" }}
        aria-label="Contact"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="about-grid"
        >
          <div>
            <h2
              style={{
                fontSize: "var(--t-h2)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              Get in touch
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--subtle)", marginBottom: 32 }}>
              For editorial enquiries, partnerships, or research collaborations, reach out
              directly.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn--primary">
                Contact →
              </Link>
              <Link href="/newsletter" className="btn btn--ghost">
                Subscribe to the newsletter
              </Link>
            </div>
          </div>
          <div />
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  );
}
