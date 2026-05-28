import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Prefall",
  description:
    "Prefall is independent editorial intelligence on the business of sustainable fashion, founded by Ana Maria Claros.",
};

export default function AboutPage() {
  return (
    <div className="prose-page">

      {/* Hero */}
      <div className="prose-hero">
        <h1 className="prose-hero__heading">
          The business behind<br />
          fashion&apos;s transition.
        </h1>
        <p className="prose-hero__subhead">
          Prefall is an editorial intelligence platform. We analyse the economic viability of
          sustainable fashion and examine whether the business models built around it hold up
          commercially.
        </p>
      </div>

      {/* What we do */}
      <div className="prose-section">
        <p className="prose-section__label">What we do</p>
        <div className="prose-section__content">
          <p className="prose-section__body">
            Trade press reports on what brands do. Activist platforms examine the industry through
            a moral frame. B2B intelligence tools sell operational data to compliance functions.
            Academic research moves at academic speed. None of them brings rigorous economic
            analysis of fashion&apos;s transition to a professional audience, at the tempo the work
            demands.
          </p>
          <p className="prose-section__body" style={{ marginTop: 16 }}>
            Prefall does. We examine whether the models hold up commercially, what determines their
            viability, and how regulation, capital allocation, and consumer behaviour are reshaping
            the sector over the next decade.
          </p>
        </div>
      </div>

      {/* What we cover */}
      <div className="prose-section">
        <p className="prose-section__label">What we cover</p>
        <div className="prose-section__content">
          <p className="prose-section__body">
            Six themes organise our work: the economic viability of sustainable business models, the
            consumer behaviour that supports or contradicts them, the structures of revenue and unit
            economics across the industry, the gap between sustainability narratives and commercial
            reality, the EU regulatory framework reshaping the sector, and the emerging technologies
            that change the economics of the models they touch.
          </p>
        </div>
      </div>

      {/* Founded by */}
      <div className="prose-section">
        <p className="prose-section__label">Founded by</p>
        <div className="prose-section__content">
          <p className="prose-section__body" style={{ marginBottom: 24 }}>Ana Maria Claros</p>
          <p className="prose-section__body">
            &ldquo;I started this platform because I kept reading about sustainable fashion and not
            finding what I was looking for. Existing coverage split between moral advocacy and
            brand-led press, and almost no one was looking at the concrete economics that decide
            which sustainable propositions get to survive. The question I wanted answered, what
            holds up the models that work and what is closing the ones that do not, was not being
            asked anywhere I could find.
          </p>
          <p className="prose-section__body" style={{ marginTop: 16 }}>
            That is the question Prefall exists to ask. I read the sector from an angle few
            publications cover: not what brands should do, but what their economics actually allow
            them to do. I am drawn to sustainable propositions that look admirable on paper and
            become fragile in the income statement, and to the ones that look commercial until a
            closer look reveals a structuring decision other companies have not been willing to
            take.&rdquo;
          </p>
        </div>
      </div>

      {/* Author portrait */}
      <div className="company-gallery">
        <div className="company-gallery__main">
          <div className="img-ph" />
        </div>
      </div>

      {/* Contact */}
      <div className="about-contact" id="about-contact">
        <div className="about-contact__left">
          <p className="prose-section__label" style={{ marginBottom: 32 }}>Get in touch</p>
          <p className="prose-section__body" style={{ marginBottom: 12 }}>
            For press inquiries, interview requests, or partnership conversations:
          </p>
          <p className="prose-section__body">
            <a href="mailto:anamaria@pre-fall.com" className="link-u" style={{ color: "inherit" }}>
              anamaria@pre-fall.com
            </a>
          </p>
          <p className="prose-section__body" style={{ marginTop: 28, marginBottom: 12 }}>
            Tips on companies, regulations, or industry developments:
          </p>
          <p className="prose-section__body">
            <a href="mailto:contact@pre-fall.com" className="link-u" style={{ color: "inherit" }}>
              contact@pre-fall.com
            </a>
          </p>
        </div>

        <div className="about-contact__right" id="about-contact-card">
          <div className="about-form__head" id="about-form-head">
            <p className="about-form__title">Send a message</p>
            <p className="about-form__sub">We read every message and reply within one business day.</p>
          </div>
          <form className="about-contact-form" id="about-contact-form" noValidate>
            <div className="form-field">
              <label className="form-field__label" htmlFor="about-contact-name">Name</label>
              <input className="form-field__input" type="text" id="about-contact-name" placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label className="form-field__label" htmlFor="about-contact-email">Email</label>
              <input className="form-field__input" type="email" id="about-contact-email" placeholder="your@email.com" required />
            </div>
            <div className="form-field">
              <label className="form-field__label" htmlFor="about-contact-subject">Subject</label>
              <input className="form-field__input" type="text" id="about-contact-subject" placeholder="What is this about?" />
            </div>
            <div className="form-field">
              <label className="form-field__label" htmlFor="about-contact-message">Message</label>
              <textarea className="form-field__textarea" id="about-contact-message" placeholder="Your message" required />
            </div>
            <button className="btn-contact-submit" type="submit">Send message →</button>
          </form>
          <div className="form-success" id="about-form-success" aria-live="polite">
            <div className="form-success__icon">✓</div>
            <p className="form-success__title">Message sent.</p>
            <p className="form-success__body">Thank you — we&apos;ll be in touch within one business day.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
