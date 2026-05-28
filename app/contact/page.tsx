import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Prefall",
  description: "Get in touch with Prefall.",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-page__inner">

        <div className="contact-page__left">
          <h1 className="contact-page__heading">Get in touch.</h1>
          <p className="contact-page__desc">
            For press inquiries, interview requests, or partnership conversations, reach out below or write directly to{" "}
            <a href="mailto:anamaria@pre-fall.com">anamaria@pre-fall.com</a>.
          </p>
        </div>

        <div className="contact-page__right">
          <p className="contact-form-v2__title">Send a message</p>
          <p className="contact-form-v2__sub">We read every message and reply within one business day.</p>
          <form className="contact-form-v2__form" data-contact noValidate>
            <div className="form-field">
              <label className="form-field__label" htmlFor="contact-name">Name</label>
              <input className="form-field__input" type="text" id="contact-name" placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label className="form-field__label" htmlFor="contact-email">Email</label>
              <input className="form-field__input" type="email" id="contact-email" placeholder="your@email.com" required />
            </div>
            <div className="form-field">
              <label className="form-field__label" htmlFor="contact-subject">Subject</label>
              <select className="form-field__select" id="contact-subject">
                <option value="" disabled>Select a subject</option>
                <option value="press">Press inquiry</option>
                <option value="interview">Interview request</option>
                <option value="partnership">Partnership</option>
                <option value="tip">Pitch a tip</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-field">
              <label className="form-field__label" htmlFor="contact-message">Message</label>
              <textarea className="form-field__textarea" id="contact-message" placeholder="Your message" required />
            </div>
            <button className="btn-contact-submit" type="submit">Send message →</button>
          </form>
          <div className="form-success" aria-live="polite">
            <div className="form-success__icon">✓</div>
            <p className="form-success__title">Message sent.</p>
            <p className="form-success__body">Thank you — we&apos;ll be in touch within one business day.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
