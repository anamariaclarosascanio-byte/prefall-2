import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — Prefall",
  description:
    "An analytical letter on the economics of fashion's transition. One question, every issue.",
};

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <div className="nl-hero">
        <div className="nl-hero__kicker">
          <span className="eyebrow">The Prefall newsletter</span>
        </div>
        <div className="nl-hero__content">
          <div>
            <h1 className="newsletter-heading">
              One question.<br />
              Every issue.
            </h1>
            <p className="newsletter-body" style={{ marginTop: 28 }}>
              An analytical letter on the economics of fashion&apos;s transition. Each issue takes
              one question shaping the sector and works through it with evidence and commercial
              reasoning. No digest. No recap.
            </p>
          </div>
          <div className="nl-hero__right">
            <form className="nl-form" noValidate>
              <div className="nl-form__field">
                <input
                  className="nl-form__input"
                  type="email"
                  placeholder="your@email.com"
                  aria-label="Email address"
                  required
                />
              </div>
              <button className="nl-form__submit" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div className="nl-features">
        <div className="nl-feature">
          <span className="nl-feature__num">01</span>
          <p className="nl-feature__text">A single analytical piece each issue. One question, worked through properly.</p>
        </div>
        <div className="nl-feature">
          <span className="nl-feature__num">02</span>
          <p className="nl-feature__text">Regulatory coverage as it happens, with analytical reading on commercial impact.</p>
        </div>
        <div className="nl-feature">
          <span className="nl-feature__num">03</span>
          <p className="nl-feature__text">Pointers to material developments in the directory and the value chain map.</p>
        </div>
        <div className="nl-feature">
          <span className="nl-feature__num">04</span>
          <p className="nl-feature__text">Early or extended access to platform content for subscribers.</p>
        </div>
      </div>
    </>
  );
}
