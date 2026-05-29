import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const siteUrl = "https://conus.liberators-alliance.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saving Arrows | Restoring direction. Rebuilding futures.",
    template: "%s | Saving Arrows",
  },
  description:
    "Saving Arrows is a structured day program providing equestrian therapy, trauma-informed care, and clinical treatment for children under 18 who have survived trafficking and trauma. Based on a 40-acre farm in Castle Rock, Colorado.",
  openGraph: {
    type: "website",
    siteName: "Saving Arrows",
    locale: "en_US",
    url: siteUrl,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Saving Arrows — A Liberators Alliance Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saving Arrows | Restoring direction. Rebuilding futures.",
    description:
      "Trauma-informed healing for child survivors of trafficking and trauma. Equestrian therapy, clinical treatment, and trauma-informed care on a 40-acre farm in Castle Rock, Colorado.",
    images: ["/logo.png"],
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
  alternateName: "Saving Arrows — A Liberators Alliance Program",
  description:
    "Saving Arrows is a structured day program providing equestrian therapy, trauma-informed care, and clinical treatment for children under 18 who have survived trafficking and trauma.",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  email: "contactus@liberators-alliance.org",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Castle Rock",
    addressRegion: "CO",
    addressCountry: "US",
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
  sameAs: [],
  nonprofitStatus: "Nonprofit501c3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#1a1a2e]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
