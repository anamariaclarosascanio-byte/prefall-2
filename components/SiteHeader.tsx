"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/articles",  label: "Articles" },
  { href: "/companies", label: "Companies" },
  { href: "/regulation",label: "Regulation" },
  { href: "/value-chain",label: "Value Chain" },
  { href: "/jobs",      label: "Jobs" },
  { href: "/newsletter",label: "Newsletter" },
  { href: "/about",     label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        role="banner"
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 100,
          height: "var(--header-h)",
          display: "flex",
          alignItems: "center",
          padding: "0 var(--margin)",
          background: "rgba(0,0,0,0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Prefall home"
            style={{
              fontFamily: "var(--font-unbounded, 'Unbounded', sans-serif)",
              fontSize: "var(--logo-size-hdr)",
              fontWeight: 500,
              letterSpacing: "var(--logo-ls-hdr)",
              color: "#FEFEFD",
              textDecoration: "none",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            PREFALL
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            style={{ display: "flex", alignItems: "center", gap: 28 }}
            className="hidden-mobile"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                style={{
                  fontSize: "var(--t-nav)",
                  fontWeight: 400,
                  color: "#FEFEFD",
                  letterSpacing: "-0.014rem",
                  opacity: pathname === link.href ? 1 : 0.75,
                  transition: "opacity 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              gap: 5,
              width: 36,
              height: 36,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px 4px",
            }}
            className="show-mobile"
          >
            <span style={{ display: "block", width: 22, height: 2, background: "#FEFEFD", flexShrink: 0 }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#FEFEFD", flexShrink: 0 }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#FEFEFD", flexShrink: 0 }} />
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          style={{
            position: "fixed",
            inset: "var(--header-h) 0 0 0",
            background: "rgba(254,254,253,0.97)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            padding: "40px var(--margin)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: "var(--t-body)",
                fontWeight: 400,
                color: pathname === link.href ? "#282828" : "var(--gray)",
                padding: "14px 0",
                borderBottom: "1px solid var(--sep-light)",
                width: "100%",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      {/* Spacer so content clears fixed header */}
      <div style={{ height: "var(--header-h)", flexShrink: 0 }} aria-hidden="true" />

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
