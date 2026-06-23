import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://shubh-dev.vercel.app";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Shubh Rathore | Backend Developer",
  description:
    "Portfolio of Shubh Rathore — Backend Developer building scalable APIs and production systems with Node.js, TypeScript, PostgreSQL, and MongoDB.",
  keywords: [
    "Backend Developer",
    "Node.js",
    "TypeScript",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "Blockchain",
    "Solana",
    "Solidity",
    "FastAPI",
    "Python",
  ],
  authors: [{ name: "Shubh Rathore" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Shubh Rathore | Backend Developer",
    description:
      "Scalable APIs, real-time backends, and production-grade systems — Node.js, TypeScript, and data stores you can ship on.",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Shubh Rathore | Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubh Rathore | Backend Developer",
    description:
      "Scalable APIs, real-time backends, and production-grade systems — Node.js, TypeScript, and data stores you can ship on.",
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shubh Rathore",
  jobTitle: "Backend Developer",
  url: SITE_URL,
  sameAs: [
    "https://linkedin.com/in/shubh-rathore-845577214",
    "https://github.com/Shubhr457",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=(t?t:(d?'dark':'light'));}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
