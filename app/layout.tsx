import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StickyCTA, CookieBanner } from "./components/ClientUI";

export const metadata: Metadata = {
  title: "Fortaleza Spotlight — Beaches, Botecos, Barracas & Parties | Brazil's #1 Travel Guide",
  description: "Your ultimate live guide to Fortaleza, Brazil. Find the best beaches, botecos, barracas, beach parties, seafood and what's happening RIGHT NOW in Ceará's most vibrant city.",
  robots: "index,follow,max-snippet:-1,max-image-preview:large",
  alternates: {
    canonical: "https://www.fortaleza-spotlight.com/",
    languages: {
      en: "https://www.fortaleza-spotlight.com/en/",
      "pt-BR": "https://www.fortaleza-spotlight.com/pt/",
      nl: "https://www.fortaleza-spotlight.com/nl/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Fortaleza Spotlight",
    title: "Fortaleza Spotlight — Sun, Beach, Caipirinha & Joy",
    description: "Live guide to Fortaleza beaches, botecos, barracas, parties and the best of Ceará, Brazil.",
    url: "https://www.fortaleza-spotlight.com/",
    images: [{
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      alt: "Fortaleza beaches Brazil — turquoise ocean, golden sand, coconut palms",
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"],
  },
  other: { "theme-color": "#0077A3" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fortaleza Spotlight",
  url: "https://www.fortaleza-spotlight.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.fortaleza-spotlight.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <StickyCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
