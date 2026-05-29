const siteUrl = "https://conus.liberators-alliance.org";

interface PageSchemaProps {
  /** Page name as it appears in breadcrumbs and WebPage schema */
  pageName: string;
  /** One-sentence description of this specific page */
  pageDescription: string;
  /** Absolute URL of this page */
  pageUrl: string;
  /** Additional JSON-LD schemas to include on this page */
  additionalSchemas?: object[];
}

export default function PageSchema({
  pageName,
  pageDescription,
  pageUrl,
  additionalSchemas = [],
}: PageSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: pageUrl,
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: pageName,
    description: pageDescription,
    url: pageUrl,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {additionalSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
