import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — Prefall",
};

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight: "calc(100vh - var(--header-h))",
        padding: "0 var(--margin)",
      }}
    >
      <span className="eyebrow" style={{ marginBottom: 24 }}>404</span>
      <h1
        style={{
          fontSize: "var(--t-display)",
          fontWeight: 300,
          lineHeight: 1.06,
          letterSpacing: "-0.03em",
          marginBottom: 20,
        }}
      >
        Page not found.
      </h1>
      <p
        style={{
          fontSize: "var(--t-body)",
          color: "var(--subtle)",
          lineHeight: 1.6,
          maxWidth: 540,
          marginBottom: 40,
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has moved.
        Use the navigation above or return to the homepage.
      </p>
      <Link href="/" className="btn btn--ghost">← Back to homepage</Link>
    </div>
  );
}
