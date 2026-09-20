import type { Metadata } from "next";
import { BackToTop, Footer, FloatWhats, Header } from "@/components/chrome";
import { InvitePhone } from "@/components/sections";
import { INVITES, waLink } from "@/lib/data";

export const metadata: Metadata = {
  title: "Convites interativos · i9BASE",
  description:
    "Convite digital para aniversário, 15 anos e casamento: confirmação, mapa e galeria em tempo real.",
};

const FLOW = [
  {
    n: "01",
    name: "QR no impresso",
    desc: "Centro de mesa, cardápio e tag com QR levam o convidado ao convite digital.",
  },
  {
    n: "02",
    name: "Confirmação em 1 toque",
    desc: "O convidado abre no celular e confirma presença. Você acompanha tudo sem planilha.",
  },
  {
    n: "03",
    name: "Galeria ao vivo",
    desc: "Na festa, as fotos dos convidados entram na galeria em tempo real para todos verem.",
  },
];

const FAQ = [
  {
    q: "Em quanto tempo fica pronto?",
    a: "Convite digital a partir de poucos dias, conforme personalização e quantidade de fotos e textos.",
  },
  {
    q: "Serve para qualquer evento?",
    a: "Aniversário, 15 anos, casamento, chá, formatura e eventos da família ou da empresa.",
  },
  {
    q: "E a parte impressa?",
    a: "Centro de mesa, cardápio, tag e convite impresso com a parceira Peça Tech, tudo combinando com o digital.",
  },
];

export default function ConvitesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-i9-ink text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="label-eyebrow text-i9-blue-soft">Convites interativos</p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              A festa começa no convite
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Convite digital para celebrar com quem você ama: confirmação de
              presença, mapa e galeria de fotos em tempo real durante o evento.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Oi! Quero um convite como esse para meu evento.")}
                target="_blank"
                rel="noopener"
                className="rounded-lg bg-i9-blue px-6 py-3 text-center font-semibold text-white hover:bg-i9-blue-deep"
              >
                Quero um convite como esse
              </a>
              {INVITES.map((inv) => (
                <a
                  key={inv.url}
                  href={inv.url}
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg border border-white/25 px-6 py-3 text-center font-semibold text-white hover:border-i9-blue-soft hover:text-i9-blue-soft"
                >
                  Ver exemplo: {inv.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-i9-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
            <InvitePhone />
            <div>
              <h2 className="font-display text-2xl font-bold text-i9-ink sm:text-3xl">
                Teste como o convidado vive
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Toque em Vou ou Não vou ao lado. É assim que a confirmação
                chega para a família: simples, na hora, sem aplicativo.
              </p>
              <ol className="mt-6 space-y-4">
                {FLOW.map((f) => (
                  <li key={f.n} className="flex gap-4">
                    <span className="font-display text-xl font-bold text-i9-blue">
                      {f.n}
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-i9-ink">
                        {f.name}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-i9-ink sm:text-3xl">
              Perguntas de quem vai festejar
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {FAQ.map((f) => (
                <div
                  key={f.q}
                  className="rounded-xl border border-slate-200 bg-i9-paper p-5"
                >
                  <p className="font-display text-base font-bold text-i9-ink">{f.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </div>
              ))}
            </div>
            <a
              href={waLink("Oi! Quero um convite para minha festa. Me conta como funciona.")}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-block rounded-lg bg-i9-blue px-6 py-3 font-semibold text-white hover:bg-i9-blue-deep"
            >
              Falar sobre meu evento
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatWhats />
      <BackToTop />
    </>
  );
}
