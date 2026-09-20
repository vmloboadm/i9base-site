import type { Metadata } from "next";
import Image from "next/image";
import { BackToTop, Footer, FloatWhats, Header } from "@/components/chrome";
import { InvitePhone } from "@/components/sections";
import { CONVITE_FEATURES, DEPOIMENTOS, INVITES, PACOTES, waLink } from "@/lib/data";
import { CONVITE_FOTOS, CONVITE_VIDEOS } from "@/lib/convites-media";
import { track } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Convites interativos · i9BASE",
  description:
    "Convite digital para aniversário, 15 anos e casamento: confirmação, mapa e galeria em tempo real.",
  alternates: { canonical: "https://i9base.com.br/convites" },
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 8.5 6.5 12.5 13.5 3.5" />
    </svg>
  );
}

function VideoHero() {
  if (CONVITE_VIDEOS.length === 0) {
    return (
      <div className="frame-corners relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-i9-ink2">
        <div className="px-6 text-center">
          <p className="font-display text-lg font-bold text-white">
            Vídeo da festa aqui
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Vinicius: jogue os vídeos reais dos convites em public/convites/
            que eles entram em loop nesta tela.
          </p>
        </div>
      </div>
    );
  }
  const v = CONVITE_VIDEOS[0];
  return (
    <div className="frame-corners relative overflow-hidden rounded-2xl border border-white/15">
      <video
        src={v.src}
        muted
        autoPlay
        loop
        playsInline
        className="aspect-video w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-i9-ink/40" />
    </div>
  );
}

function Gallery() {
  const hasVideo = CONVITE_VIDEOS.length > 1;
  const videos = CONVITE_VIDEOS.slice(1);
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-i9-ink sm:text-3xl">
        Da festa, na hora
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-600">
        Trechos reais de convites e festas. Toque para abrir.
      </p>
      {hasVideo ? (
        <div className="mt-6 columns-2 gap-4 md:columns-3">
          {videos.map((v) => (
            <figure
              key={v.src}
              className="frame-corners mb-4 overflow-hidden rounded-xl border border-slate-200 break-inside-avoid"
            >
              <video
                src={v.src}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                className="h-auto w-full"
              />
              <figcaption className="px-3 py-2 text-xs font-medium text-slate-500">
                {v.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="frame-corners flex aspect-[3/4] items-center justify-center rounded-xl bg-[#121820] px-6 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Vídeo {i} da festa aqui
              </p>
            </div>
          ))}
        </div>
      )}
      {CONVITE_FOTOS.length > 0 && (
        <>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm font-semibold text-i9-slate">Fotos reais</p>
            <p className="font-display text-sm font-bold text-i9-blue">01 / 12</p>
          </div>
          <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
            {CONVITE_FOTOS.map((f) => (
              <div
                key={f.src}
                className="relative h-44 w-36 shrink-0 snap-center overflow-hidden rounded-xl border border-slate-200"
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="144px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ConvitesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-i9-ink text-white">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #0b0f14 0%, #0a1a33 60%, #123063 100%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="label-eyebrow text-i9-blue-soft">Convites interativos</p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Convites que ninguém esquece
            </h1>
            <div className="mt-8">
              <VideoHero />
            </div>
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
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <Gallery />
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-i9-ink sm:text-3xl">
              O que vem no convite
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CONVITE_FEATURES.map((f) => (
                <div
                  key={f.name}
                  className="rounded-xl border border-slate-200 bg-i9-paper p-5"
                >
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-i9-blue"
                  >
                    <span className="flex h-4 w-4 items-center justify-center text-white">
                      <CheckIcon />
                    </span>
                  </span>
                  <p className="mt-3 font-display text-base font-bold text-i9-ink">
                    {f.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-i9-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
            <InvitePhone />
            <div>
              <h2 className="font-display text-2xl font-bold text-i9-ink sm:text-3xl">
                Como funciona
              </h2>
              <ol className="mt-6 space-y-5">
                {[
                  {
                    n: "01",
                    name: "QR no impresso",
                    desc: "Centro de mesa, cardápio e tag com QR levam ao convite digital.",
                  },
                  {
                    n: "02",
                    name: "Confirmação em 1 toque",
                    desc: "O convidado abre no celular e confirma. Você acompanha sem planilha.",
                  },
                  {
                    n: "03",
                    name: "Galeria ao vivo",
                    desc: "Na festa, as fotos entram na galeria em tempo real para todos verem.",
                  },
                ].map((f) => (
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

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="grid items-center gap-8 rounded-2xl border border-i9-blue bg-i9-ink p-6 text-white sm:p-10 md:grid-cols-2">
              <div>
                <p className="label-eyebrow text-i9-blue-soft">Upsell</p>
                <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                  Centro de mesa com QR e NFC
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Na festa, cada mesa vira um ponto de entrada: o convidado
                  aproxima o celular ou escaneia e cai direto na galeria e na
                  confirmação. Peça física com a parceira Peça Tech, na
                  identidade do evento.
                </p>
                <a
                  href={waLink("Oi! Quero adicionar centro de mesa com QR no meu convite.")}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-i9-blue hover:bg-i9-paper"
                >
                  Quero adicionar
                </a>
              </div>
              <div className="frame-corners flex aspect-square items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                <div className="text-center">
                  <p className="font-display text-5xl font-bold text-white">NFC</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Aproxime e caia na festa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-i9-paper">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-i9-ink sm:text-3xl">
              Pacotes para a sua festa
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  id: "essencial",
                  name: "Essencial",
                  desc: "O convite digital para celebrar sem complicação.",
                  features: [
                    "Convite digital personalizado",
                    "Confirmação de presença",
                    "Mapa e informações do evento",
                    "Link direto no WhatsApp",
                  ],
                  destaque: false,
                },
                {
                  id: "completo",
                  name: "Completo",
                  desc: "A experiência que o convidado vive do início ao fim.",
                  features: [
                    "Tudo do Essencial",
                    "Música e contagem regressiva",
                    "Galeria de fotos em tempo real",
                    "Lista de presentes e PIX",
                  ],
                  destaque: true,
                },
                {
                  id: "premium",
                  name: "Premium",
                  desc: "Do digital ao impresso, a festa inteira na mesma identidade.",
                  features: [
                    "Tudo do Completo",
                    "Centro de mesa com QR",
                    "Tag NFC da festa",
                    "Impressos combinando",
                  ],
                  destaque: false,
                },
              ].map((p) => (
                <div
                  key={p.id}
                  className={`flex flex-col rounded-xl border bg-white p-6 ${
                    p.destaque
                      ? "border-i9-blue shadow-[0_0_40px_rgba(37,99,235,0.25)]"
                      : "border-slate-200"
                  }`}
                >
                  {p.destaque && (
                    <span className="mb-3 w-fit rounded-md bg-i9-blue px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      Mais pedido
                    </span>
                  )}
                  <p className="font-display text-xl font-bold text-i9-ink">{p.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-0.5 text-i9-blue">
                          <CheckIcon />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(
                      `Oi! Quero o pacote ${p.name} de convite para minha festa. ?pacote=${p.id}`
                    )}
                    target="_blank"
                    rel="noopener"
                    className={`mt-5 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold ${
                      p.destaque
                        ? "bg-i9-blue text-white hover:bg-i9-blue-deep"
                        : "border border-i9-blue text-i9-blue hover:bg-i9-blue hover:text-white"
                    }`}
                  >
                    Quero o {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {DEPOIMENTOS.length > 0 && (
          <section className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
              <h2 className="font-display text-2xl font-bold text-i9-ink sm:text-3xl">
                Quem festejou com a gente
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {DEPOIMENTOS.map((d) => (
                  <figure
                    key={d.nome}
                    className="rounded-xl border border-slate-200 bg-i9-paper p-5"
                  >
                    <blockquote className="text-sm text-slate-600">
                      {d.texto}
                    </blockquote>
                    <figcaption className="mt-3 text-sm font-bold text-i9-ink">
                      {d.nome}
                      <span className="block text-xs font-medium text-slate-500">
                        {d.papel}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-i9-blue text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="frame-corners rounded-2xl border border-white/60 p-8 text-center sm:p-12">
              <h2 className="mx-auto max-w-xl font-display text-3xl font-bold sm:text-4xl">
                Sua festa merece um convite à altura
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-blue-50">
                Chama no WhatsApp, conta a data e o estilo. A gente cuida do resto.
              </p>
              <a
                href={waLink("Oi! Quero um convite para minha festa. Me conta como funciona.")}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-i9-blue hover:bg-i9-paper"
              >
                Falar sobre meu evento
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatWhats />
      <BackToTop />
    </>
  );
}
