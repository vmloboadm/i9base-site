"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  CASES,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  METHOD,
  NICHES,
  SOLUTIONS,
  TECHS,
  TRACKS,
  WHATSAPP_URL,
  waLink,
  type CaseImage,
} from "@/lib/data";
import { track } from "@/lib/analytics";
import { HeroCanvas } from "@/components/hero-canvas";
import { ChatDemo } from "@/components/chat-demo";

function Chevron() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3.5 10.5 8 6 12.5" />
    </svg>
  );
}

function SectionHead({
  label,
  title,
  sub,
  dark,
}: {
  label: string;
  title: string;
  sub: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-8">
      <p className={`label-eyebrow ${dark ? "text-i9-blue-soft" : "text-i9-blue"}`}>
        {label}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-i9-ink"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-3 max-w-2xl text-base ${dark ? "text-slate-300" : "text-slate-600"}`}>
        {sub}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-i9-ink text-white">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0b0f14 0%, #0a1a33 48%, #123063 76%, #f5f6fb 100%)",
        }}
      />
      <HeroCanvas />
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-xl">
          <Image
            src="/logo-dark.png"
            alt="i9BASE, sua base de tecnologia e inovação"
            width={1420}
            height={371}
            priority
            sizes="(max-width: 768px) 100vw, 576px"
            className="h-auto w-full"
          />
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Estruture. Automatize. Evolua.
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-200 sm:text-lg">
              Sites, sistemas, automação e atendimento com IA para negócios
              locais. Do QR ao pedido, sua operação conectada em uma única base.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Oi! Vim pelo site da i9BASE e quero estruturar meu negócio.")}
                target="_blank"
                rel="noopener"
                onClick={() => track("whatsapp_click", { from: "hero" })}
                className="rounded-lg bg-i9-blue px-6 py-3 text-center font-semibold text-white hover:bg-i9-blue-deep"
              >
                Chamar no WhatsApp
              </a>
              <a
                href="#cases"
                onClick={() => track("cta_click", { from: "hero", to: "cases" })}
                className="rounded-lg border border-white/25 px-6 py-3 text-center font-semibold text-white hover:border-i9-blue-soft hover:text-i9-blue-soft"
              >
                Ver cases
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-300">Construído com</span>
              {TECHS.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-medium text-slate-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <ChatDemo />
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-white/5 py-3 backdrop-blur-sm">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
            {[...NICHES, ...NICHES].map((n, i) => (
              <span key={i} className="whitespace-nowrap text-sm font-medium text-slate-200">
                {n} <span className="ml-8 text-i9-blue-soft">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Strip() {
  const items = [
    [`${CASES.length}`, "cases em destaque"],
    ["4", "trilhas de solução"],
    ["24/7", "atendimento no WhatsApp"],
  ];
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6">
        {items.map(([n, label]) => (
          <div key={label} className="flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-i9-blue">{n}</span>
            <span className="text-sm text-slate-600">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Solutions() {
  const [active, setActive] = useState(TRACKS[0].id);
  const trackInfo = TRACKS.find((t) => t.id === active) ?? TRACKS[0];
  const items = useMemo(
    () => SOLUTIONS.filter((s) => s.track === active),
    [active]
  );

  return (
    <section id="solucoes" className="bg-i9-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          dark
          label="Soluções"
          title="Escolha por onde começar"
          sub="Quatro trilhas, um destino: seu negócio rodando numa base só. Toque numa trilha para explorar."
        />
        <div className="mb-6 flex flex-wrap gap-2">
          {TRACKS.map((t) => {
            const count = SOLUTIONS.filter((s) => s.track === t.id).length;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setActive(t.id);
                  track("solution_track", { track: t.id });
                }}
                aria-pressed={active === t.id}
                className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                  active === t.id
                    ? "bg-i9-blue text-white"
                    : "border border-white/15 bg-white/5 text-slate-200 hover:border-i9-blue-soft hover:text-white"
                }`}
              >
                {t.name}
                <span className="ml-2 text-xs opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
        <div
          key={active}
          className="overflow-hidden rounded-xl border border-white/10 bg-white text-i9-ink"
        >
          <div className="border-b border-slate-200 bg-i9-paper px-5 py-4 sm:px-6">
            <p className="font-display text-lg font-bold text-i9-ink">{trackInfo.name}</p>
            <p className="mt-1 text-sm text-slate-600">{trackInfo.desc}</p>
          </div>
          <ul className="divide-y divide-slate-100">
            {items.map((s) => (
              <li key={s.name}>
                <a
                  href={waLink(`Oi! Vi no site e quero saber sobre: ${s.name}.`)}
                  target="_blank"
                  rel="noopener"
                  onClick={() =>
                    track("whatsapp_click", { from: "solution_row", solution: s.name })
                  }
                  className="group flex items-center gap-4 px-5 py-4 transition hover:bg-i9-paper sm:px-6"
                >
                  <div className="flex-1">
                    <p className="font-display text-base font-bold text-i9-ink group-hover:text-i9-blue">
                      {s.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  </div>
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-i9-slate transition group-hover:border-i9-blue group-hover:bg-i9-blue group-hover:text-white"
                  >
                    <Chevron />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Orçamento sempre personalizado após entender o seu caso, e parceria é
          sempre conversável.
        </p>
      </div>
    </section>
  );
}

function InvitePhone() {
  const [rsvp, setRsvp] = useState<"none" | "yes" | "no">("none");
  return (
    <div className="mx-auto w-full max-w-[300px] rounded-[2rem] border-8 border-i9-ink bg-i9-ink p-1 shadow-xl">
      <div className="overflow-hidden rounded-[1.6rem] bg-[#17102b] text-center">
        <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-white/20" aria-hidden />
        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300">
          Convite especial
        </p>
        <p className="mt-2 px-4 font-display text-2xl font-bold leading-tight text-white">
          Você foi convidado!
        </p>
        <p className="mt-2 px-4 text-xs text-slate-300">
          Toque abaixo para confirmar sua presença na festa
        </p>
        <div className="mt-4 flex justify-center gap-2 px-4">
          <button
            onClick={() => {
              setRsvp("yes");
              track("rsvp_demo", { choice: "yes" });
            }}
            aria-pressed={rsvp === "yes"}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-bold ${
              rsvp === "yes" ? "bg-emerald-400 text-i9-ink" : "bg-white/10 text-white"
            }`}
          >
            Vou
          </button>
          <button
            onClick={() => {
              setRsvp("no");
              track("rsvp_demo", { choice: "no" });
            }}
            aria-pressed={rsvp === "no"}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-bold ${
              rsvp === "no" ? "bg-rose-400 text-i9-ink" : "bg-white/10 text-white"
            }`}
          >
            Não vou
          </button>
        </div>
        <p className="mt-3 h-5 px-4 text-xs font-medium text-emerald-300" role="status">
          {rsvp === "yes" && "Presença confirmada. Demonstração."}
          {rsvp === "no" && "Que pena. Demonstração registrada."}
        </p>
        <div className="mt-2 border-t border-white/10 bg-white/5 px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
            Galeria ao vivo da festa
          </p>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {["#2563eb", "#7c3aed", "#db2777"].map((c) => (
              <div
                key={c}
                style={{ background: c }}
                className="flex aspect-square items-center justify-center rounded-md opacity-80"
              >
                <svg viewBox="0 0 16 16" className="h-5 w-5" aria-hidden fill="none" stroke="white" strokeWidth="1.2">
                  <path d="M2 3h12v10H2z M2 11l3.5-3.5 2.5 2.5 2-2L14 12 M5.5 6.5a1 1 0 1 0 0-.01" />
                </svg>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[11px] text-slate-400">
            Escaneie o QR na festa e suas fotos entram aqui na hora
          </p>
        </div>
      </div>
    </div>
  );
}

export function Convites() {
  return (
    <section
      id="convites"
      className="text-white"
      style={{
        background: "linear-gradient(160deg, #1e40af 0%, #2563eb 55%, #1d4ed8 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          dark
          label="Convites interativos"
          title="Convites que vendem por você"
          sub="Convite digital com confirmação de presença, mapa e galeria de fotos em tempo real. Teste aqui como o convidado vive a experiência."
        />
        <div className="grid items-center gap-8 md:grid-cols-2">
          <InvitePhone />
          <div>
            <ul className="space-y-4 text-sm leading-relaxed text-blue-50">
              <li>
                <strong className="font-display text-base font-bold text-white">
                  Para o anfitrião
                </strong>
                <p className="mt-1">
                  Confirmação organizada, sem planilha e sem correria no
                  WhatsApp. Você sabe quem vem antes da festa começar.
                </p>
              </li>
              <li>
                <strong className="font-display text-base font-bold text-white">
                  Para o convidado
                </strong>
                <p className="mt-1">
                  Abre no celular, confirma com um toque, vê mapa e participa
                  da galeria ao vivo durante o evento.
                </p>
              </li>
              <li>
                <strong className="font-display text-base font-bold text-white">
                  No impresso também
                </strong>
                <p className="mt-1">
                  Centro de mesa, cardápio e tag com QR que leva à galeria,
                  com a parceira Peça Tech.
                </p>
              </li>
            </ul>
            <a
              href={waLink("Oi! Quero um convite como esse para meu evento.")}
              target="_blank"
              rel="noopener"
              onClick={() => track("whatsapp_click", { from: "convites" })}
              className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-i9-blue hover:bg-i9-paper"
            >
              Quero um convite como esse
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseCarousel({ images, name }: { images: CaseImage[]; name: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = (i: number) => {
    const n = (i + images.length) % images.length;
    setIndex(n);
    trackRef.current?.scrollTo({
      left: n * (trackRef.current.clientWidth || 0),
      behavior: "smooth",
    });
  };

  if (images.length === 1) {
    const im = images[0];
    return (
      <div className="relative aspect-[4/3]">
        <Image
          src={im.src}
          alt={im.alt || name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="group/car relative aspect-[4/3] overflow-hidden bg-i9-paper">
      <div
        ref={trackRef}
        onScroll={(e) => {
          const el = e.currentTarget;
          const n = Math.round(el.scrollLeft / (el.clientWidth || 1));
          if (n !== index) setIndex(n);
        }}
        className="flex h-full snap-x snap-mandatory overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((im) => (
          <div key={im.src} className="relative h-full w-full shrink-0 snap-center">
            <Image
              src={im.src}
              alt={im.alt || name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => go(index - 1)}
        aria-label="Foto anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-i9-ink/70 px-2.5 py-1.5 text-sm font-bold text-white opacity-0 transition group-hover/car:opacity-100 focus:opacity-100"
      >
        ‹
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="Próxima foto"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-i9-ink/70 px-2.5 py-1.5 text-sm font-bold text-white opacity-0 transition group-hover/car:opacity-100 focus:opacity-100"
      >
        ›
      </button>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
        {images.map((im, i) => (
          <button
            key={im.src}
            onClick={() => go(i)}
            aria-label={`Ver foto ${i + 1} de ${images.length}`}
            className={`h-1.5 rounded-full transition ${
              i === index ? "w-5 bg-white" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
      <span className="absolute right-2 top-2 rounded-md bg-i9-ink/70 px-2 py-0.5 text-[11px] font-semibold text-white">
        {index + 1}/{images.length}
      </span>
    </div>
  );
}

const FILTERS = ["Todos", "Sites", "Sistemas", "Branding", "Experiências"] as const;

export function Cases() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todos");
  const [expanded, setExpanded] = useState<string | null>(null);
  const list = useMemo(
    () => (filter === "Todos" ? CASES : CASES.filter((c) => c.category === filter)),
    [filter]
  );

  return (
    <section id="cases" className="bg-i9-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          label="Cases"
          title="Projetos que viraram resultado"
          sub="Uma seleção do que já entregamos. Cases com várias fotos têm carrossel, toque num case para abrir os detalhes."
        />
        <div className="mb-6 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setExpanded(null);
                track("case_filter", { filter: f });
              }}
              aria-pressed={filter === f}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                filter === f
                  ? "bg-i9-ink text-white"
                  : "border border-slate-200 bg-white text-i9-slate hover:border-i9-blue hover:text-i9-blue"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        {list.length === 0 ? (
          <div className="flex flex-col items-center rounded-xl border border-dashed border-slate-300 bg-white py-12 text-center">
            <Image
              src="/fantasma.png"
              alt="Nenhum case aqui ainda"
              width={72}
              height={72}
            />
            <p className="mt-4 text-sm text-slate-500">
              Nenhum case nessa categoria ainda. Chama no WhatsApp e seja o próximo.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((c) => {
              const isOpen = expanded === c.slug;
              return (
                <article
                  key={c.slug}
                  className={`overflow-hidden rounded-xl border bg-white transition ${
                    isOpen ? "border-i9-blue shadow-lg" : "border-slate-200 hover:border-i9-blue"
                  }`}
                >
                  <CaseCarousel images={c.images} name={c.name} />
                  <button
                    onClick={() => {
                      setExpanded(isOpen ? null : c.slug);
                      if (!isOpen) track("case_view", { case: c.slug });
                    }}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3 p-5 text-left"
                  >
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-i9-blue">
                        {c.category} · {c.niche}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold text-i9-ink">
                        {c.name}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${
                        isOpen
                          ? "rotate-90 border-i9-blue bg-i9-blue text-white"
                          : "border-slate-200 text-i9-slate"
                      }`}
                    >
                      <Chevron />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 py-4">
                      <p className="text-sm leading-relaxed text-slate-600">{c.desc}</p>
                      {c.result && (
                        <p className="mt-3 rounded-lg bg-i9-paper px-3 py-2 text-sm font-semibold text-i9-blue">
                          {c.result}
                        </p>
                      )}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-i9-paper px-2 py-1 text-xs font-medium text-i9-slate"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={waLink(`Oi! Vi o case ${c.name} no site e quero um projeto como esse.`)}
                        target="_blank"
                        rel="noopener"
                        onClick={() =>
                          track("whatsapp_click", { from: "case_open", solution: c.slug })
                        }
                        className="mt-4 block rounded-lg bg-i9-blue px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-i9-blue-deep"
                      >
                        Quero um projeto como esse
                      </a>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export function Method() {
  return (
    <section id="metodo" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          label="Método"
          title="O método que organiza o crescimento"
          sub="Antes de vender qualquer peça, entendemos o negócio. Oito passos, do diagnóstico à fidelização."
        />
        <ol className="divide-y divide-slate-200 border-y border-slate-200">
          {METHOD.map((m) => (
            <li
              key={m.n}
              className="grid gap-1 py-5 sm:grid-cols-[80px_220px_1fr] sm:items-baseline sm:gap-6"
            >
              <span className="font-display text-2xl font-bold text-i9-blue">{m.n}</span>
              <h3 className="font-display text-base font-bold text-i9-ink">{m.name}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{m.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section className="bg-i9-paper">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="label-eyebrow text-slate-400">Parceira oficial de produção física</p>
        <div className="mt-4 flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-i9-ink">Peça Tech</p>
            <p className="mt-1 text-sm text-slate-600">
              Papelaria, convites, adesivos e personalizados com produção parceira.
              Do digital ao físico sem você procurar fornecedor.
            </p>
          </div>
          <a
            href={waLink("Oi! Quero saber sobre produção física com a parceira de vocês.")}
            target="_blank"
            rel="noopener"
            onClick={() => track("whatsapp_click", { from: "partners" })}
            className="mt-3 shrink-0 rounded-lg border border-i9-blue px-4 py-2 text-center text-sm font-semibold text-i9-blue hover:bg-i9-blue hover:text-white sm:mt-0"
          >
            Pedir produção física
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [msg, setMsg] = useState("");
  return (
    <section
      id="contato"
      className="text-white"
      style={{ background: "linear-gradient(180deg, #f5f6fb 0%, #dbe4f5 30%, #0b0f14 78%)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl bg-i9-ink p-6 sm:p-10">
          <SectionHead
            dark
            label="Contato"
            title="Seu negócio pode ser o próximo"
            sub="Conta o que trava o seu dia no WhatsApp. A gente responde 24h e vê o que dá pra automatizar."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <label
                htmlFor="cta-msg"
                className="text-sm font-semibold text-white"
              >
                O que você precisa?
              </label>
              <textarea
                id="cta-msg"
                rows={4}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Ex: preciso de um site para minha lanchonete e quero atender pelo WhatsApp"
                className="mt-2 w-full rounded-lg border border-white/15 bg-i9-ink px-3 py-2.5 text-sm text-white placeholder:text-slate-500"
              />
              <a
                href={waLink(
                  msg.trim()
                    ? `Oi! Vim pelo site da i9BASE. ${msg.trim()}`
                    : "Oi! Vim pelo site da i9BASE e quero conversar sobre meu negócio."
                )}
                target="_blank"
                rel="noopener"
                onClick={() => track("whatsapp_click", { from: "contact_form" })}
                className="mt-4 block rounded-lg bg-[#25d366] px-6 py-3 text-center font-semibold text-white hover:brightness-95"
              >
                Enviar pelo WhatsApp
              </a>
              <p className="mt-3 text-xs text-slate-400">
                Cai direto na nossa conversa, com atendimento automático 24h.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                onClick={() => track("whatsapp_click", { from: "contact_card" })}
                className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-i9-blue-soft"
              >
                <p className="font-display text-base font-bold text-white">WhatsApp</p>
                <p className="mt-1 text-sm text-slate-300">
                  Atendimento automático 24h, todos os dias. Orçamento base na hora.
                </p>
                <p className="mt-2 text-sm font-semibold text-i9-blue-soft">Chamar agora</p>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                onClick={() => track("cta_click", { from: "contact_card", to: "instagram" })}
                className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-i9-blue-soft"
              >
                <p className="font-display text-base font-bold text-white">Instagram @i9base</p>
                <p className="mt-1 text-sm text-slate-300">
                  Bastidores, cases e novidades da base.
                </p>
                <p className="mt-2 text-sm font-semibold text-i9-blue-soft">Seguir</p>
              </a>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="font-display text-base font-bold text-white">E-mail</p>
                <p className="mt-1 text-sm text-slate-300">{CONTACT_EMAIL}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
