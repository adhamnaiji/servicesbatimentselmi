import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.linaconstructions.com"),
  title: "LINA Constructions SARLS - Construction générale Strassen",
  description:
    "Lina Constructions - Services de construction professionnels au Luxembourg. Résidentiel, commercial et industriel. Qualité garantie, délais respectés, devis gratuit.",
  keywords: [
    "construction",
    "lina construction",
    "services de construction",
    "construction Tunis",
    "Luxembourg construction",
    "résidentiel",
    "commercial",
    "industriel",
  ],
  authors: [{ name: "Lina Constructions" }],
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website", // Changed from invalid "business.business" to valid "website"
    url: "https://www.linaconstructions.com",
    title: "Lina Constructions - Services de Construction au Luxembourg",
    description:
      "Construction professionnelle: résidentiel, commercial et industriel. Qualité garantie. Devis gratuit en 24h.",
    siteName: "Lina Constructions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lina Constructions - Services de Construction",
    description: "Construction professionnelle au Luxembourg: résidentiel, commercial, industriel.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.linaconstructions.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.linaconstructions.com",
              name: "Lina Constructions",
              image: "https://www.linaconstructions.com/logo.png",
              description:
                "Entreprise de construction professionnelle spécialisée dans les projets résidentiels, commerciaux et industriels au Luxembourg.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "44 rue de l'industrie",
                addressLocality: "LUXEMBOURG",
                addressRegion: "LUXEMBOURG",
                postalCode: "8069 Strassen",
                addressCountry: "LU",
              },
              telephone: "+352621633226",
              email: "info@linaconstructions.com",
              url: "https://www.linaconstructions.com",
              sameAs: ["https://www.facebook.com/profile.php?id=61583341880229", "https://www.instagram.com/lina_constructions_luxembourg"],
              priceRange: "$$",
              areaServed: ["Tunis", "Tunisia"],
              knowsAbout: [
                "Residential Construction",
                "Commercial Construction",
                "Industrial Construction",
                "Project Management",
                "Building Renovation",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "45",
              },
            }),
          }}
        />
      </head>
      <body className={geist.className}>{children}</body>
    </html>
  )
}
