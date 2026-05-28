import type { Metadata } from "next";
import { Figtree, Unbounded, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { InteractiveScript } from "@/components/InteractiveScript";
import { ArticleModal } from "@/components/ArticleModal";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-unbounded",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prefall — The business behind the next season of fashion",
  description:
    "Independent editorial intelligence on the business of sustainable fashion. Business models, regulation, and consumer behaviour that determine which propositions hold up commercially.",
  openGraph: {
    title: "Prefall",
    description:
      "Editorial intelligence on sustainable fashion economics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${unbounded.variable} ${playfair.variable}`}
      style={{ fontFamily: "var(--font-figtree, 'Figtree', sans-serif)" }}
    >
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ArticleModal />
        {/* Cookie banner */}
        <div className="cookie-banner" id="cookie-banner" role="dialog" aria-label="Cookie consent">
          <p className="cookie-banner__text">Prefall uses essential cookies to operate the site and optional analytics cookies to understand how the platform is used. We do not run advertising trackers.</p>
          <div className="cookie-banner__btns">
            <button className="cookie-btn cookie-btn--fill" id="cookie-accept">Accept analytics</button>
            <button className="cookie-btn cookie-btn--outline" id="cookie-essential">Essential only</button>
          </div>
        </div>
        <InteractiveScript />
      </body>
    </html>
  );
}
