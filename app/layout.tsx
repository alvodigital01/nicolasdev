import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Plus_Jakarta_Sans, Sora } from "next/font/google";
import { BackToTopFab } from "@/components/ui/back-to-top-fab";
import { WhatsAppFab } from "@/components/ui/whatsapp-fab";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"]
});

export const metadata: Metadata = {
  title: "Nicolas Lucas | Desenvolvimento Web Premium",
  description:
    "Desenvolvimento de landing pages, sites comerciais e páginas de venda para negócios que querem mais pedidos de orçamento e mais autoridade.",
  keywords: ["desenvolvimento web", "landing page", "site profissional", "sites para empresas", "Nicolas Lucas", "NicolasDev"],
  authors: [{ name: "Nicolas Lucas" }],
  creator: "Nicolas Lucas",
  metadataBase: new URL("https://www.nicolasdev.online"),
  alternates: {
    canonical: "https://www.nicolasdev.online"
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.nicolasdev.online",
    siteName: "NicolasDev",
    title: "Nicolas Lucas | Desenvolvimento Web Premium",
    description: "Sites estratégicos que aumentam sua autoridade e geram mais pedidos de orçamento para o seu negócio.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nicolas Lucas - Desenvolvimento Web Premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Lucas | Desenvolvimento Web Premium",
    description: "Sites estratégicos que aumentam sua autoridade e geram mais pedidos de orçamento.",
    images: ["/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/icon.svg"
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nicolas Lucas",
  url: "https://www.nicolasdev.online",
  jobTitle: "Desenvolvedor Web",
  description:
    "Desenvolvimento de landing pages e sites comerciais estratégicos para negócios que querem mais pedidos de orçamento.",
  sameAs: ["https://instagram.com/nicolasdev_oficial"],
  offers: {
    "@type": "Offer",
    name: "Desenvolvimento de Sites e Landing Pages",
    description: "Landing pages para anúncios, sites comerciais para serviços e páginas de vendas e captura.",
    url: "https://www.nicolasdev.online/#cta"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${sora.variable} ${jakarta.variable} ${playfair.variable} bg-background font-body text-white antialiased`}>
        {children}
        <BackToTopFab />
        <WhatsAppFab />
      </body>
    </html>
  );
}
