"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/articles",    label: "Articles" },
  { href: "/companies",   label: "Companies" },
  { href: "/regulation",  label: "Regulation" },
  { href: "/value-chain", label: "Value Chain" },
  { href: "/jobs",        label: "Jobs" },
  { href: "/newsletter",  label: "Newsletter" },
  { href: "/about",       label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header" role="banner">
        <div className="site-header__inner">
          {/* Logo */}
          <Link href="/" className="site-logo" aria-label="Prefall home">
            PREFALL
          </Link>

          {/* Desktop nav */}
          <nav className="site-nav" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="site-nav__link"
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="site-header__menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger__line" />
            <span className="hamburger__line" />
            <span className="hamburger__line" />
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <nav
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-nav"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-nav__link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
