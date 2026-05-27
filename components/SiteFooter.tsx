import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: "#0d0d0d",
        color: "#FEFEFD",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(24px, 3vw, 40px)",
        paddingInline: "var(--margin)",
      }}
    >
      {/* CTA headline */}
      <h2
        style={{
          fontSize: "clamp(36px, 5vw, 68px)",
          fontWeight: 600,
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          marginBottom: "clamp(32px, 4vw, 56px)",
          maxWidth: 900,
        }}
      >
        Let&apos;s talk about the<br />
        business of{" "}
        <em style={{ fontStyle: "italic", color: "#8B5CF6" }}>fashion&apos;s</em>
        <br />
        next chapter.
      </h2>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: "clamp(60px, 8vw, 100px)" }}>
        <Link
          href="/newsletter"
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: 44,
            padding: "0 28px",
            fontSize: 14,
            fontWeight: 400,
            color: "#FEFEFD",
            border: "1px solid rgba(255,255,255,0.25)",
            transition: "border-color 0.2s, color 0.2s",
          }}
        >
          Subscribe to the newsletter
        </Link>
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: 44,
            padding: "0 28px",
            fontSize: 14,
            fontWeight: 400,
            color: "#FEFEFD",
            border: "1px solid rgba(255,255,255,0.25)",
            transition: "border-color 0.2s, color 0.2s",
          }}
        >
          Get in touch →
        </Link>
      </div>

      {/* Footer grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "clamp(32px, 4vw, 60px)",
          paddingTop: "clamp(40px, 5vw, 60px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginBottom: "clamp(32px, 4vw, 48px)",
        }}
        className="footer-grid"
      >
        {/* Brand col */}
        <div>
          <Link
            href="/"
            style={{
              display: "block",
              fontFamily: "var(--font-unbounded, 'Unbounded', sans-serif)",
              fontSize: "var(--logo-size-ftr)",
              fontWeight: 500,
              letterSpacing: "var(--logo-ls-ftr)",
              color: "#FEFEFD",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            PREFALL
          </Link>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", maxWidth: 280, marginBottom: 24 }}>
            The business behind the next season of fashion. Editorial intelligence on sustainable fashion economics.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/ana-claros/" },
              { label: "Twitter/X", href: "#" },
              { label: "Substack", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", transition: "color 0.2s" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <FooterCol
          title="Explore"
          links={[
            { label: "Articles",    href: "/articles" },
            { label: "Companies",   href: "/companies" },
            { label: "Regulation",  href: "/regulation" },
            { label: "Value Chain", href: "/value-chain" },
            { label: "Jobs",        href: "/jobs" },
          ]}
        />

        {/* Company */}
        <FooterCol
          title="Company"
          links={[
            { label: "About",       href: "/about" },
            { label: "Methodology", href: "/methodology" },
            { label: "Newsletter",  href: "/newsletter" },
            { label: "Contact",     href: "/contact" },
          ]}
        />

        {/* Legal */}
        <FooterCol
          title="Legal"
          links={[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Cookie Policy",  href: "#" },
            { label: "Terms of Use",   href: "#" },
          ]}
        />
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.30)" }}>
          © 2026 Prefall. All rights reserved.
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-grid > div:first-child { text-align: center; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4
        style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          marginBottom: 20,
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", transition: "color 0.2s" }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
