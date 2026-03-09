import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"]
});

export const metadata: Metadata = {
  title: "Nicolas Lucas | Desenvolvimento Web Premium",
  description:
    "Sites profissionais para marcas e empresas que querem fortalecer presença digital, transmitir autoridade e vender mais.",
  openGraph: {
    title: "Nicolas Lucas | Desenvolvimento Web Premium",
    description:
      "Criação de landing pages, sites institucionais e experiências digitais modernas para negócios que querem crescer.",
    type: "website",
    locale: "pt_BR"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${sora.variable} ${jakarta.variable} ${playfair.variable} bg-background font-body text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
