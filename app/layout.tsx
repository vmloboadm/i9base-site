import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { JSON_LD } from "@/lib/jsonld";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "i9BASE · Sua base de tecnologia e inovação",
  description:
    "Sites, sistemas, automação e atendimento com IA para negócios locais. Estruture, automatize e evolua com a i9BASE.",
  metadataBase: new URL("https://i9base.com.br"),
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png' }],
  },
  alternates: { canonical: "https://i9base.com.br" },
  openGraph: {
    title: "i9BASE · Sua base de tecnologia e inovação",
    description:
      "Estruture. Automatize. Evolua. Sites, sistemas, automação e IA para o seu negócio.",
    url: "https://i9base.com.br",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <noscript>
          <style>{`.reveal-scroll{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </head>
      <body
        className={`${display.variable} ${body.variable} flex min-h-full flex-col font-body`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
