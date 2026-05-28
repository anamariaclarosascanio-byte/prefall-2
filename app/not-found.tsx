import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — Prefall",
};

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found__inner">
        <span className="not-found__num">404</span>
        <div className="not-found__text">
          <p className="not-found__label">Page not found</p>
          <h1 className="not-found__heading">
            This page didn&apos;t make<br />it to the next season.
          </h1>
          <p className="not-found__body">
            The link may have changed or the page no longer exists. Try starting from the beginning.
          </p>
          <Link href="/" className="not-found__cta">Back to Prefall →</Link>
        </div>
      </div>
    </div>
  );
}
