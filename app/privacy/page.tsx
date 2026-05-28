import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Prefall",
  description: "Privacy policy, cookie policy, and terms of use for Prefall.",
};

export default function PrivacyPage() {
  return (
    <div className="prose-page">

      <div className="prose-hero" style={{ paddingBottom: 64 }}>
        <p className="eyebrow" style={{ marginBottom: 32 }}>Legal</p>
        <h1 className="prose-hero__heading">Privacy Policy</h1>
        <p className="prose-hero__sub" style={{ marginTop: 20 }}>Last updated: May 2026</p>
      </div>

      <div className="prose-section" style={{ maxWidth: 760 }}>

        <div className="prose-section__block">
          <h2 className="prose-section__heading">1. Who we are</h2>
          <p className="prose-section__body">Prefall is a media and intelligence platform covering the economics of the fashion industry. We are operated by Ana Maria Claros. You can reach us at <a href="mailto:contact@pre-fall.com" className="link-u" style={{ color: "inherit" }}>contact@pre-fall.com</a>.</p>
        </div>

        <div className="prose-section__block">
          <h2 className="prose-section__heading">2. What data we collect</h2>
          <p className="prose-section__body">We collect only what is necessary to operate the platform:</p>
          <ul className="prose-section__list">
            <li><strong>Email address</strong> — when you subscribe to the newsletter via Substack.</li>
            <li><strong>Name and message content</strong> — when you contact us through the site form.</li>
          </ul>
          <p className="prose-section__body" style={{ marginTop: 16 }}>We do not collect payment data, location data, behavioral data, or any sensitive personal information. We do not use analytics tracking tools.</p>
        </div>

        <div className="prose-section__block">
          <h2 className="prose-section__heading">3. How we use your data</h2>
          <ul className="prose-section__list">
            <li>To send you the Prefall newsletter through Substack, if you have subscribed.</li>
            <li>To respond to messages you send us directly.</li>
          </ul>
          <p className="prose-section__body" style={{ marginTop: 16 }}>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
        </div>

        <div className="prose-section__block">
          <h2 className="prose-section__heading">4. Cookies</h2>
          <p className="prose-section__body">We use only essential cookies required for the site to function — for example, to remember your cookie consent choice. We do not use advertising or analytics cookies.</p>
        </div>

        <div className="prose-section__block">
          <h2 className="prose-section__heading">5. Newsletter and Substack</h2>
          <p className="prose-section__body">The Prefall newsletter is distributed via Substack. When you subscribe, your email address is stored and processed by Substack in accordance with their own <a href="https://substack.com/privacy" target="_blank" rel="noopener" className="link-u" style={{ color: "inherit" }}>Privacy Policy</a>. We recommend reviewing it. You can unsubscribe at any time using the link at the bottom of any issue.</p>
        </div>

        <div className="prose-section__block">
          <h2 className="prose-section__heading">6. Data retention</h2>
          <p className="prose-section__body">Newsletter subscriptions are managed by Substack and retained until you unsubscribe. Contact form submissions are retained by us for up to 12 months and then deleted.</p>
        </div>

        <div className="prose-section__block">
          <h2 className="prose-section__heading">7. Your rights</h2>
          <p className="prose-section__body">Under GDPR and applicable data protection law, you have the right to access, correct, or delete any personal data we hold about you. To make a request, write to us at <a href="mailto:contact@pre-fall.com" className="link-u" style={{ color: "inherit" }}>contact@pre-fall.com</a>. We will respond within 30 days.</p>
        </div>

        <div className="prose-section__block">
          <h2 className="prose-section__heading">8. Changes to this policy</h2>
          <p className="prose-section__body">We may update this policy as the platform evolves. Material changes will be communicated via the newsletter. The date at the top of this page reflects the most recent revision.</p>
        </div>

        <div className="prose-section__block">
          <h2 className="prose-section__heading">9. Contact</h2>
          <p className="prose-section__body">Questions about this policy? Write to <a href="mailto:contact@pre-fall.com" className="link-u" style={{ color: "inherit" }}>contact@pre-fall.com</a>.</p>
        </div>

      </div>
    </div>
  );
}
