import { Metadata } from "next";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
}

const baseUrl = "https://tonportal.xyz";
const defaultImage = "/og-image.png"; // We'll create this later

export function generateSEO({
  title,
  description,
  keywords = [],
  path = "",
  image = defaultImage,
}: SEOProps): Metadata {
  const url = `${baseUrl}${path}`;
  const fullTitle = `${title} | TON Portal`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "TON Blockchain",
      "The Open Network",
      "TON Ecosystem",
      "Blockchain Tools",
      "Cryptocurrency",
      "DeFi",
      "Web3",
      ...keywords,
    ].join(", "),
    authors: [{ name: "TON Portal Team" }],
    creator: "TON Portal",
    publisher: "TON Portal",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: "TON Portal",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tonblockchain",
      creator: "@tonblockchain",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code", // Add your actual verification code
    },
  };
}

export const defaultSEO = generateSEO({
  title: "Intelligent TON Ecosystem Gateway",
  description: "Your unified entry point to the TON ecosystem. AI-powered assistance, real-time analytics, essential tools, and community resources all in one place.",
  keywords: ["TON Portal", "TON Gateway", "Blockchain Analytics", "AI Assistant"],
});