import type { Metadata } from "next";
import { Suspense } from "react";
import { BackToTop, Footer, FloatWhats, Header } from "@/components/chrome";
import { Quiz } from "./quiz";

export const metadata: Metadata = {
  title: "Diagnóstico gratuito em 2 minutos · i9BASE",
  description:
    "Responda 4 perguntas rápidas e descubra o que a tecnologia pode destravar no seu negócio: site, atendimento, automação ou sistema.",
  alternates: { canonical: "https://i9base.com.br/diagnostico" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Diagnóstico digital gratuito · i9BASE",
    description:
      "Em 2 minutos, descubra o que a tecnologia pode destravar no seu negócio.",
    url: "https://i9base.com.br/diagnostico",
    siteName: "i9BASE",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnóstico digital gratuito · i9BASE",
    description:
      "Em 2 minutos, descubra o que a tecnologia pode destravar no seu negócio.",
  },
};

export default function DiagnosticoPage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="blueprint mx-auto w-full max-w-3xl px-5 pb-24 pt-28 outline-none sm:pt-32">
        <Suspense fallback={<div className="min-h-[34rem]" />}>
          <Quiz />
        </Suspense>
      </main>
      <Footer />
      <FloatWhats />
      <BackToTop />
    </>
  );
}
