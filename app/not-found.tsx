import Link from "next/link";
import { BackToTop, Footer, FloatWhats, Header } from "@/components/chrome";
import { WHATSAPP_URL } from "@/lib/data";

export const metadata = {
  title: "Página não encontrada · i9BASE",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header tone="light" />
      <main className="flex flex-1 items-center bg-i9-paper">
        <div className="mx-auto w-full max-w-2xl px-4 py-20 text-center sm:px-6">
          <p className="font-display text-6xl font-bold text-i9-blue">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-i9-ink sm:text-4xl">
            Essa página saiu do ar ou nunca existiu
          </h1>
          <p className="mt-4 text-slate-600">
            Confere o endereço ou volta para o início. Se você chegou aqui por um
            link nosso, avisa a gente no WhatsApp que a gente arruma.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-lg bg-i9-blue px-5 py-3 text-sm font-semibold text-white hover:bg-i9-blue-deep"
            >
              Voltar ao início
            </Link>
            <Link
              href="/convites"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-i9-ink hover:border-i9-blue hover:text-i9-blue"
            >
              Ver convites interativos
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-i9-ink hover:border-i9-blue hover:text-i9-blue"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
      <FloatWhats />
    </>
  );
}
