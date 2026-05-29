import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const siteUrl = "https://conus.liberators-alliance.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saving Arrows | Anti-Trafficking Nonprofit | Healing for Child Survivors",
    template: "%s | Saving Arrows",
  },
  description:
    "Saving Arrows is an anti-trafficking nonprofit providing equestrian therapy, trauma-informed care, and clinical treatment for child survivors of trafficking and trauma. 40-acre farm in Castle Rock, Colorado.",
  openGraph: {
    type: "website",
    siteName: "Saving Arrows",
    locale: "en_US",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saving Arrows — Restoring direction. Rebuilding futures. Anti-trafficking healing program in Castle Rock, Colorado.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saving Arrows | Anti-Trafficking Nonprofit | Healing for Child Survivors",
    description:
      "Equestrian therapy, trauma-informed care, and clinical treatment for child survivors of trafficking and trauma. Castle Rock, Colorado.",
    images: [{ url: "/og-image.png", alt: "Saving Arrows — Restoring direction. Rebuilding futures." }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteUrl}/#organization`,
  name: "Saving Arrows",
  alternateName: [
    "Saving Arrows Program",
    "Saving Arrows — A Liberators Alliance Program",
    "Liberators Alliance CONUS",
  ],
  description:
    "Saving Arrows is an anti-trafficking nonprofit providing equestrian therapy, trauma-informed care, and licensed clinical treatment for child survivors of trafficking and exploitation.",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.png`,
  email: "contactus@liberators-alliance.org",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Castle Rock",
    addressRegion: "CO",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.3722,
    longitude: -104.8561,
  },
  areaServed: {
    "@type": "State",
    name: "Colorado",
  },
  parentOrganization: {
    "@type": "NGO",
    name: "Liberators Alliance",
    url: "https://liberators-alliance.org",
  },
  nonprofitStatus: "Nonprofit501c3",
  knowsAbout: [
    "Child sex trafficking",
    "Anti-trafficking",
    "Equestrian-assisted therapy",
    "Trauma-informed care",
    "Clinical treatment for trauma",
    "Child survivors of trafficking",
    "Complex PTSD treatment",
    "TF-CBT",
    "EMDR therapy",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Saving Arrows",
  url: siteUrl,
  description:
    "Anti-trafficking nonprofit providing healing for child survivors through equestrian therapy and clinical treatment in Castle Rock, Colorado.",
  publisher: { "@id": `${siteUrl}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Performance: preconnect to image CDN */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1a1a2e]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
