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
};

export default function DiagnosticoPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-28 sm:pt-32">
        <Suspense fallback={<div className="h-64" />}>
          <Quiz />
        </Suspense>
      </main>
      <Footer />
      <FloatWhats />
      <BackToTop />
    </>
  );
}
