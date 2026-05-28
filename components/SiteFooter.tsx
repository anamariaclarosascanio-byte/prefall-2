import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">

      {/* CTA headline — Playfair italic accent */}
      <h2 className="footer__cta-title">
        Let&apos;s talk about the<br />
        business of <em className="footer-accent">fashion&apos;s</em><br />
        next chapter.
      </h2>

      {/* CTA buttons */}
      <div className="footer__cta-row">
        <Link href="/newsletter" className="footer-cta-btn">
          Subscribe to the newsletter
        </Link>
        <Link href="/about#contact" className="footer-cta-btn">
          Get in touch →
        </Link>
      </div>

      {/* Footer grid */}
      <div className="footer__grid">
        {/* Brand col */}
        <div>
          <Link href="/" className="footer-logo">PREFALL</Link>
          <p className="footer-tagline">
            The business behind the next season of fashion. Editorial intelligence on sustainable fashion economics.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/ana-claros/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#">Twitter/X</a>
            <a href="#">Substack</a>
          </div>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link href="/articles">Articles</Link></li>
            <li><Link href="/companies">Companies</Link></li>
            <li><Link href="/regulation">Regulation</Link></li>
            <li><Link href="/value-chain">Value Chain</Link></li>
            <li><Link href="/jobs">Jobs</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/methodology">Methodology</Link></li>
            <li><Link href="/newsletter">Newsletter</Link></li>
            <li><Link href="/about#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Prefall. All rights reserved.</span>
      </div>

    </footer>
  );
}
