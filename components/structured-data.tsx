import Script from "next/script";

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TON Portal",
  description: "Intelligent TON Ecosystem Gateway providing AI-powered assistance, analytics, and blockchain tools",
  url: "https://tonportal.xyz",
  logo: "https://tonportal.xyz/logo.png",
  sameAs: [
    "https://twitter.com/tonblockchain",
    "https://t.me/toncoin",
    "https://github.com/ton-org",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Technical Support",
    areaServed: "Worldwide",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TON Portal",
  description: "Your unified entry point to the TON ecosystem",
  url: "https://tonportal.xyz",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://tonportal.xyz/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TON Portal",
  description: "Intelligent TON Ecosystem Gateway with AI assistant, analytics, and blockchain tools",
  applicationCategory: "WebApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
};