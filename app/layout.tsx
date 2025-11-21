import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.servicesbatimentselmi.com"),
  title: "Services Batiment Selmi SARLS - Construction générale Strassen",
  description:
    "Services Batiment Selmi - Services de construction professionnels En France. Résidentiel, commercial et industriel. Qualité garantie, délais respectés, devis gratuit.",
  keywords: [
    "construction",
    "Services Batiment Selmi",
    "services de construction",
    "construction Tunis",
    "Luxembourg construction",
    "résidentiel",
    "batiment",
    "commercial",
    "industriel",
  ],
  authors: [{ name: "Services Batiment Selmi" }],
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    url: "https://www.linaconstructions.com",
    title: "Services Batiment Selmi - Services Batiment Selmi En France",
    description:
      "Services Batiment Selmi: résidentiel, commercial et industriel. Qualité garantie. Devis gratuit en 24h.",
    siteName: "Services Batiment Selmi",
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
    title: "Services Batiment Selmi - Services de Construction",
    description: "Construction professionnelle En France: résidentiel, commercial, industriel.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.ServicesBatimentSelmi.com",
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
    <html lang="fr">
      <head>
        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.ServicesBatimentSelmi.com",
              name: "Lina Constructions",
              image: "https://www.ServicesBatimentSelmi.com/logo.png",
              description:
                "Entreprise de construction professionnelle spécialisée dans les projets résidentiels, commerciaux et industriels au Luxembourg.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "44 rue de l'industrie",
                addressLocality: "France",
                addressRegion: "France",
                postalCode: " Metz",
                addressCountry: "FR",
              },
              telephone: "+352621633226",
              email: "info@linaconstructions.com",
              url: "https://www.linaconstructions.com",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61583341880229",
                "https://www.instagram.com/lina_constructions_luxembourg",
              ],
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
