import type { Metadata } from "next";
import { Figtree, Unbounded, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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
      </body>
    </html>
  );
}
