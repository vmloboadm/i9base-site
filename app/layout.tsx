import type { Metadata, Viewport } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { JSON_LD } from "@/lib/jsonld";

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
  twitter: {
    card: "summary_large_image",
    title: "i9BASE · Sua base de tecnologia e inovação",
    description:
      "Estruture. Automatize. Evolua. Sites, sistemas, automação e IA para o seu negócio.",
  },
  openGraph: {
    title: "i9BASE · Sua base de tecnologia e inovação",
    description:
      "Estruture. Automatize. Evolua. Sites, sistemas, automação e IA para o seu negócio.",
    url: "https://i9base.com.br",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f14",
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
        className={`${display.variable} ${body.variable} ${mono.variable} flex min-h-full flex-col font-body`}
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
