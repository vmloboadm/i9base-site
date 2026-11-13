"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  ARTES,
  CASES,
  CONTACT_EMAIL,
  DIFERENCIAL,
  ESCADA,
  INSTAGRAM_URL,
  INVITES,
  METHOD,
  PROVAS,
  PROVAS_NOTA,
  SOLUTIONS,
  STATS,
  TECHS,
  TRACKS,
  WHATSAPP_URL,
  waLink,
  type CaseImage,
  type Arte,
} from "@/lib/data";
import { track } from "@/lib/analytics";
import { VideoTile } from "@/components/video-tile";
import { PreContactForm } from "@/components/pre-contact-form";

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

export function Wave({ fill, flip }: { fill: string; flip?: boolean }) {
  return (
    <div aria-hidden className="overflow-hidden leading-none" style={flip ? { transform: 'scaleY(-1)' } : undefined}>
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="block h-[42px] w-full sm:h-[64px]">
        <path
          d="M0,42 C240,72 480,8 720,28 C960,48 1200,12 1440,38 L1440,70 L0,70 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-scroll ${visible ? "reveal-scroll-on" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHead({
  index,
  label,
  title,
  sub,
  dark,
  labelTone,
}: {
  index?: string;
  label: string;
  title: string;
  sub: string;
  dark?: boolean;
  labelTone?: "default" | "deep";
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className={`h-2 w-2 shrink-0 ${dark ? "bg-i9-signal" : "bg-i9-blue"}`}
        />
        <p
          className={`label-eyebrow ${
            dark ? "text-i9-blue-soft" : labelTone === "deep" ? "text-i9-blue-deep" : "text-i9-blue"
          }`}
        >
          {index ? `${index} — ` : ""}
          {label}
        </p>
        <span
          aria-hidden
          className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-i9-line"}`}
        />
      </div>
      <h2
        className={`mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-i9-ink"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-3 max-w-2xl text-base ${dark ? "text-slate-300" : "text-i9-slate"}`}>
        {sub}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="topo"
      className="blueprint relative overflow-hidden border-b border-i9-line bg-i9-paper"
    >
      <div className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 sm:pt-28">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-i9-line pb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-i9-slate">
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden className="h-1.5 w-1.5 bg-emerald-600" />
            Atendimento 24/7
          </span>
          <span aria-hidden className="hidden text-i9-concrete sm:inline">/</span>
          <span className="hidden sm:inline">Campos dos Goytacazes, RJ</span>
          <span aria-hidden className="hidden text-i9-concrete sm:inline">/</span>
          <span>Resposta em minutos</span>
          <span className="ml-auto hidden sm:inline">Ficha 2026.11</span>
        </div>

        <div className="grid items-start gap-12 pb-14 pt-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:pt-14">
          <div>
            <p className="label-eyebrow flex items-center gap-2 text-i9-blue">
              <span aria-hidden className="h-2 w-2 bg-i9-signal" />
              01 — base operacional
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-i9-ink sm:text-5xl lg:text-6xl">
              A <span className="marker">base</span> de tecnologia
              <br className="hidden sm:block" /> para o seu negócio
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-i9-slate sm:text-lg">
              Sites, sistemas, automação e inteligência artificial para negócios
              locais. Uma base só para vender, atender e crescer.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="/diagnostico"
                onClick={() => track("diagnostico_start", { origem: "hero" })}
                className="rounded-md bg-i9-blue px-6 py-3.5 text-center font-semibold text-white transition hover:bg-i9-blue-deep"
              >
                Fazer diagnóstico gratuito
              </a>
              <a
                href={waLink(
                  "Oi! Vim pelo site da i9BASE e quero estruturar meu negócio."
                )}
                target="_blank"
                rel="noopener"
                onClick={() => track("whatsapp_click", { from: "hero" })}
                className="rounded-md border border-i9-ink px-6 py-3.5 text-center font-semibold text-i9-ink transition hover:bg-i9-ink hover:text-i9-paper"
              >
                Chamar no WhatsApp
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-px border border-i9-line bg-i9-line">
              {[
                { n: String(CASES.length), l: "cases entregues" },
                { n: String(ARTES.length), l: "artes para clientes" },
                { n: "24/7", l: "atendimento no WhatsApp" },
              ].map((s) => (
                <div key={s.l} className="bg-i9-paper px-4 py-4">
                  <dt className="font-display text-2xl font-bold text-i9-ink">
                    {s.n}
                  </dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase leading-tight tracking-[0.1em] text-i9-slate">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-i9-ink" />
            <div aria-hidden className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-i9-ink" />
            <div className="border border-i9-ink bg-i9-paper2 p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-i9-line pb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-i9-slate">
                <span>i9base / ficha do projeto</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-700">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  online
                </span>
              </div>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-i9-slate">
                O que montamos na sua base
              </p>
              <ul className="mt-2 divide-y divide-i9-line">
                {[
                  "Sites e landing pages",
                  "Sistemas e CRM",
                  "Automação no WhatsApp",
                  "IA no atendimento",
                ].map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-4 py-2.5 text-sm font-medium text-i9-ink"
                  >
                    <span>{item}</span>
                    <span
                      aria-hidden
                      className="font-mono text-[10px] text-i9-slate"
                    >
                      0{i + 1}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-i9-ink p-5 text-i9-paper">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-i9-blue-soft">
                  diagnóstico gratuito
                </p>
                <p className="mt-1 font-display text-xl font-bold leading-snug">
                  4 perguntas, plano na hora
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Descubra o que destrava o seu negócio antes de gastar.
                </p>
                <a
                  href="/diagnostico"
                  onClick={() =>
                    track("diagnostico_start", { origem: "hero_card" })
                  }
                  className="mt-4 inline-block bg-i9-signal px-5 py-2.5 font-display text-sm font-bold text-i9-ink transition hover:bg-i9-paper2"
                >
                  Começar agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Solutions() {
  const [active, setActive] = useState(TRACKS[0].id);

  return (
    <section id="solucoes" className="bg-i9-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          dark
          index="02"
          label="Soluções"
          title="Escolha por onde começar"
          sub="Quatro trilhas, um destino: seu negócio rodando numa base só. Toque numa trilha para explorar."
        />
        <ol className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300">
          <li className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5">1 · Escolha a trilha</li>
          <li aria-hidden>→</li>
          <li className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5">2 · Toque na solução</li>
          <li aria-hidden>→</li>
          <li className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5">3 · Chame no WhatsApp</li>
        </ol>
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Trilhas de soluções">
          {TRACKS.map((t) => {
            const count = SOLUTIONS.filter((s) => s.track === t.id).length;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setActive(t.id);
                  track("solution_track", { track: t.id });
                }}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={active === t.id}
                aria-controls={`panel-${t.id}`}
                className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                  active === t.id
                    ? "bg-i9-signal text-i9-ink"
                    : "border border-white/15 bg-white/5 text-slate-200 hover:border-i9-signal hover:text-white"
                }`}
              >
                {t.name}
                <span className="ml-2 text-xs opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
        {TRACKS.map((t) => {
          const itens = SOLUTIONS.filter((s) => s.track === t.id);
          return (
            <div
              key={t.id}
              role="tabpanel"
              id={`panel-${t.id}`}
              aria-labelledby={`tab-${t.id}`}
              hidden={active !== t.id}
            >
              <div
                key={active === t.id ? t.id : `hidden-${t.id}`}
                className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${
                  active === t.id ? "animate-panel" : ""
                }`}
              >
                {itens.map((s) => {
                  const featured = s.name === 'Convites Interativos';
                  return (
                    <div
                      key={s.name}
                      className={`group relative flex flex-col overflow-hidden rounded-sm border bg-i9-paper2 p-5 transition ${featured ? 'border-i9-ink sm:col-span-2 lg:col-span-2' : 'border-i9-line hover:border-i9-ink'}`}
                    >
                      {featured && (
                        <span className="absolute right-4 top-4 bg-i9-signal px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-i9-ink">
                          Destaque
                        </span>
                      )}
                      <h3 className="font-display text-base font-bold text-i9-ink group-hover:text-i9-blue">
                        {s.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-i9-slate">
                        {TRACKS.find((tk) => tk.id === s.track)?.name}
                      </p>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-i9-slate">{s.desc}</p>
                      <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-i9-paper px-2.5 py-1 text-xs font-bold text-i9-blue">
                        {s.badge}
                      </p>
                      <div className="mt-4 flex gap-2">
                        <a
                          href={waLink('Oi! Vi no site e quero saber sobre: ' + s.name + '.')}
                          target="_blank"
                          rel="noopener"
                          onClick={() => track('whatsapp_click', { from: 'solution_card', solution: s.name })}
                          className="mt-1 inline-flex items-center gap-1.5 self-start rounded-md border border-i9-ink px-3.5 py-2 text-sm font-semibold text-i9-ink transition hover:bg-i9-ink hover:text-i9-paper"
                        >
                          Quero essa solução
                        </a>
                        {featured && (
                          <a
                            href="/convites"
                            onClick={() => track('cta_click', { from: 'solution_card', to: 'convites_page' })}
                            className="rounded-md border border-i9-blue px-4 py-2.5 text-center text-sm font-semibold text-i9-blue hover:bg-i9-blue hover:text-white"
                          >
                            Ver página completa →
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <p className="mt-6 text-sm text-slate-400">
          Orçamento sempre personalizado após entender o seu caso, e parceria é
          sempre conversável.
        </p>
      </div>
    </section>
  );
}

export function InvitePhone() {
  const [rsvp, setRsvp] = useState<"none" | "yes" | "no">("none");
  return (
    <div className="mx-auto w-full max-w-[300px] rounded-[2rem] border-8 border-i9-ink bg-i9-ink p-1">
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

export function CrmSection() {
  const checks = [
    'Cada conversa vira lead no funil, sem digitar nada',
    'Follow-up em 24h e 48h para quem esfriou',
    'Histórico completo por cliente e por atendente',
    'A IA atende e chama gente quando precisa',
  ];
  const cols = [
    {
      name: 'Novo contato',
      cards: [
        { n: 'Dono de lanchonete', tag: 'Site', hot: false },
        { n: 'Mãe da debutante', tag: 'Convite', hot: false },
      ],
    },
    {
      name: 'Qualificando',
      cards: [{ n: 'Dono de lanchonete', tag: 'Proposta', hot: true }],
    },
    {
      name: 'Proposta',
      cards: [{ n: 'Padaria no centro', tag: 'Aguardando', hot: false }],
    },
  ];
  return (
    <section id="crm" className="border-y border-i9-line bg-i9-paper2">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          index="03"
          label="CRM para empresas"
          labelTone="deep"
          title="Atendimento que vira gestão"
          sub="O WhatsApp atende e o CRM organiza. Sua equipe abre o dia sabendo quem chamar, o que oferecer e o que fechou."
        />
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <ul className="space-y-3">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-2.5 rounded-sm border border-i9-line bg-i9-paper2 px-4 py-3 text-sm font-medium text-i9-slate">
                  <span className="mt-0.5 text-emerald-500">
                    <CheckIcon />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <a
              href={waLink('Oi! Quero um CRM com WhatsApp para a minha empresa.')}
              target="_blank"
              rel="noopener"
              onClick={() => track('whatsapp_click', { from: 'crm_section' })}
              className="mt-6 inline-block rounded-md bg-i9-blue px-6 py-3 font-semibold text-white hover:bg-i9-blue-deep"
            >
              Quero CRM na minha empresa
            </a>
          </div>
          <div aria-label="Exemplo de funil do CRM" className="overflow-hidden rounded-sm border border-i9-line bg-i9-paper2">
            <div className="flex items-center justify-between border-b border-i9-line bg-i9-ink px-4 py-3">
              <p className="font-display text-sm font-bold text-white">Funil · Orçamentos</p>
              <span className="rounded-md bg-emerald-400 px-2 py-0.5 text-[11px] font-bold text-i9-ink">
                4 leads
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 p-3">
              {cols.map((col) => (
                <div key={col.name} className="rounded-lg bg-i9-paper p-2">
                  <p className="px-1 text-[11px] font-bold uppercase tracking-wide text-i9-slate">
                    {col.name}
                  </p>
                  <div className="mt-2 space-y-2">
                    {col.cards.map((card) => (
                      <div key={card.n} className="rounded-md border border-i9-line bg-i9-paper2 p-2">
                        <p className="text-xs font-bold text-i9-ink">{card.n}</p>
                        <div className="mt-1.5 flex items-center justify-between">
                          <span className="rounded bg-i9-paper px-1.5 py-0.5 text-[10px] font-semibold text-i9-blue">
                            {card.tag}
                          </span>
                          {card.hot && (
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InviteEnvelope() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto w-full max-w-[320px]">
      <button
        onClick={() => {
          setOpen((v) => !v);
          track("envelope_demo", { open: open ? "close" : "open" });
        }}
        aria-expanded={open}
        className="relative block aspect-[4/3] w-full [perspective:800px]"
      >
        <span className="sr-only">
          {open ? "Fechar" : "Abrir"} a carta de convite
        </span>
        <span
          aria-hidden
          className={`absolute inset-x-6 top-2 bottom-6 rounded-lg bg-i9-paper2 transition-all duration-700 ${
            open ? "translate-y-[-38%]" : "translate-y-[-6%]"
          }`}
        >
          <span className="flex h-full flex-col items-center justify-center px-6 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-600">
              Convite especial
            </span>
            <span className="mt-2 font-display text-xl font-bold leading-tight text-i9-ink">
              Você foi convidado!
            </span>
            <span className="mt-2 rounded-md bg-i9-blue px-3 py-1.5 text-xs font-bold text-white">
              Confirmar presença
            </span>
          </span>
        </span>
        <span aria-hidden className="absolute inset-0 rounded-sm bg-[#1d4ed8] shadow-2xl" />
        <span
          aria-hidden
          className={`absolute inset-x-0 top-0 h-1/2 origin-top transition-transform duration-500 ${
            open ? "[transform:rotateX(180deg)] opacity-90" : ""
          }`}
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)", background: "#2563eb" }}
        />
        <span
          aria-hidden
          className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 font-display text-lg font-bold text-[#5b3a00] transition-all duration-500 ${
            open ? "scale-90 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          i9
        </span>
      </button>
      <p className="mt-3 text-center text-xs text-blue-100">
        {open ? "Toque no selo para fechar" : "Toque no selo para abrir"}
      </p>
    </div>
  );
}

export function Convites() {
  return (
    <>
    <div className="bg-i9-ink">
      <Wave fill="#101315" />
    </div>
    <section id="convites" className="bg-i9-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          dark
          index="04"
          label="Convites interativos"
          title="A festa começa no convite"
          sub="Convite digital para aniversário, 15 anos, casamento e eventos da família: confirmação de presença em 1 toque, mapa e mural de fotos ao vivo no telão."
        />
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ul className="space-y-4 text-sm leading-relaxed text-blue-50">
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                <strong className="font-display text-base font-bold text-white">
                  Para os anfitriões e família
                </strong>
                <p className="mt-1 text-slate-300">
                  Confirmação organizada em tempo real, sem planilhas confusas e sem correria no WhatsApp. Você sabe exatamente a lista de convidados confirmados antes do evento.
                </p>
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                <strong className="font-display text-base font-bold text-white">
                  Para o convidado
                </strong>
                <p className="mt-1 text-slate-300">
                  Abertura animada direto no celular, confirmação de presença com 1 toque, localização com traçado de rota e acesso rápido às informações da festa.
                </p>
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                <strong className="font-display text-base font-bold text-white">
                  Na festa física: Telão e QR na mesa
                </strong>
                <p className="mt-1 text-slate-300">
                  Displays acrílicos de mesa com QR Code integrado. Os convidados tiram fotos com seus próprios celulares e elas aparecem na hora no telão do evento.
                </p>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/convites"
                onClick={() => track("cta_click", { from: "convites_teaser", to: "convites_page" })}
                className="rounded-md bg-i9-signal px-6 py-3 text-center font-semibold text-i9-ink hover:bg-white transition"
              >
                Ver demonstração completa
              </a>
              <a
                href={waLink("Oi! Quero um convite interativo para o meu evento.")}
                target="_blank"
                rel="noopener"
                onClick={() => track("whatsapp_click", { from: "convites" })}
                className="rounded-md border border-white/40 px-6 py-3 text-center font-semibold text-white hover:border-white hover:bg-white/10 transition"
              >
                Solicitar orçamento no WhatsApp
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {INVITES.map((inv) => (
                <a
                  key={inv.url}
                  href={inv.url}
                  target="_blank"
                  rel="noopener"
                  onClick={() => track("cta_click", { from: "convites", to: inv.name })}
                  className="rounded-md border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:border-white/40 hover:bg-white/10 transition"
                >
                  Exemplo: {inv.name}
                </a>
              ))}
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-slate-400">
              Exemplos reais de festas realizadas com nossa stack interativa.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="mx-auto max-w-[280px] sm:max-w-[300px]">
              <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-slate-700 bg-i9-ink p-2 shadow-2xl ring-1 ring-white/15">
                <div className="absolute left-1/2 top-3 z-30 flex h-4 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-slate-900/90">
                  <div className="mr-2 h-2 w-2 rounded-full bg-slate-950" />
                  <div className="h-1 w-8 rounded-full bg-slate-700" />
                </div>
                <div className="relative overflow-hidden rounded-[2rem] bg-black">
                  <VideoTile
                    src="/convites/festa.mp4"
                    poster="/convites/festa-poster.webp"
                    alt="Vídeo demonstração do convite interativo abrindo"
                    className="aspect-[9/16] w-full object-cover"
                    playLabel="Reproduzir vídeo do convite"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-xs text-slate-400">
                Toque no vídeo para ver a animação de abertura
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="overflow-hidden rounded-lg border border-white/15 bg-slate-950">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src="/convites/festa-01.webp"
                      alt=""
                      fill
                      aria-hidden
                      className="scale-125 object-cover opacity-25 blur-lg"
                    />
                    <Image
                      src="/convites/festa-01.webp"
                      alt="Display físico com QR Code na mesa da festa"
                      fill
                      sizes="120px"
                      className="relative z-10 object-contain p-1"
                    />
                  </div>
                  <p className="p-1 text-center text-[9px] font-medium text-slate-300">Display na mesa</p>
                </div>
                <div className="overflow-hidden rounded-lg border border-white/15 bg-slate-950">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src="/convites/festa-02.webp"
                      alt="Confirmação de presença no smartphone"
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                  <p className="p-1 text-center text-[9px] font-medium text-slate-300">Confirmação</p>
                </div>
                <div className="overflow-hidden rounded-lg border border-white/15 bg-slate-950">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src="/convites/festa-04.webp"
                      alt="Mural ao vivo no telão da festa"
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                  <p className="p-1 text-center text-[9px] font-medium text-slate-300">Mural no telão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-i9-paper">
      <Wave flip fill="#101315" />
    </div>
    </>
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
      <div className="group/car relative aspect-[4/3] overflow-hidden bg-i9-ink2">
        <Image
          src={im.src}
          alt=""
          fill
          aria-hidden
          className="scale-110 object-cover opacity-25 blur-xl"
        />
        <Image
          src={im.src}
          alt={im.alt || name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="relative z-10 object-contain p-2.5 sm:p-3 transition duration-500 group-hover/car:scale-[1.02]"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="group/car relative aspect-[4/3] overflow-hidden bg-i9-ink2">
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
          <div key={im.src} className="relative h-full w-full shrink-0 snap-center overflow-hidden">
            <Image
              src={im.src}
              alt=""
              fill
              aria-hidden
              className="scale-110 object-cover opacity-25 blur-xl"
            />
            <Image
              src={im.src}
              alt={im.alt || name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="relative z-10 object-contain p-2.5 sm:p-3 transition duration-500 group-hover/car:scale-[1.02]"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => go(index - 1)}
        aria-label="Foto anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-i9-ink/80 px-3 py-2 text-base font-bold text-white opacity-0 transition group-hover/car:opacity-100 focus:opacity-100"
      >
        ‹
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="Próxima foto"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-i9-ink/80 px-3 py-2 text-base font-bold text-white opacity-0 transition group-hover/car:opacity-100 focus:opacity-100"
      >
        ›
      </button>
      <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center gap-1.5">
        {images.map((im, i) => (
          <button
            key={im.src}
            onClick={() => go(i)}
            aria-label={`Ver foto ${i + 1} de ${images.length}`}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span
              aria-hidden
              className={`h-1.5 rounded-full transition ${
                i === index ? "inline-block w-5 bg-white" : "inline-block w-1.5 bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
      <span className="absolute right-2 top-2 z-20 rounded-md bg-i9-ink/80 px-2 py-0.5 text-[11px] font-semibold text-white">
        {index + 1}/{images.length}
      </span>
    </div>
  );
}

const FILTERS = ["Todos", "Sites", "Sistemas", "Branding", "Experiências", "Materiais"] as const;

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
          index="05"
          label="Cases"
          title="Projetos que viraram resultado"
          sub="Uma seleção do que já entregamos. Cases com várias fotos têm carrossel, toque num case para abrir os detalhes."
        />
        <div className="mb-6 grid gap-4 rounded-sm border border-i9-line bg-i9-paper2 p-4 sm:grid-cols-2 sm:p-5">
          {PROVAS.map((p) => (
            <div key={p.name}>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-i9-slate">
                Cliente ativo
              </p>
              <p className="mt-1 font-display text-lg font-bold text-i9-ink">{p.name}</p>
              <p className="text-sm text-i9-slate">{p.metric}</p>
            </div>
          ))}
          <p className="text-xs text-i9-slate sm:col-span-2">{PROVAS_NOTA}</p>
        </div>
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
                  : "border border-i9-line bg-i9-paper2 text-i9-slate hover:border-i9-blue hover:text-i9-blue"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        {list.length === 0 ? (
          <div className="flex flex-col items-center rounded-sm border border-dashed border-slate-300 bg-i9-paper2 py-12 text-center">
            <Image
              src="/logo-icon.png"
              alt="Nenhum case aqui ainda"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
            <p className="mt-4 text-sm text-i9-slate">
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
                  className={`overflow-hidden rounded-sm border bg-i9-paper2 transition ${
                    isOpen
                      ? "border-i9-blue shadow-[0_10px_32px_rgba(16,19,21,0.10)]"
                      : "border-i9-line hover:border-i9-blue hover:shadow-[0_10px_32px_rgba(16,19,21,0.08)]"
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
                        {c.status && (
                          <span className="ml-2 inline-block rounded border border-slate-300 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-i9-slate">
                            {c.status}
                          </span>
                        )}
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
                          : "border-i9-line text-i9-slate"
                      }`}
                    >
                      <Chevron />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-i9-line px-5 py-4">
                      <p className="text-sm leading-relaxed text-i9-slate">{c.desc}</p>
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
                        className="mt-4 block rounded-md bg-i9-blue px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-i9-blue-deep"
                      >
                        Quero um projeto como esse
                      </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 8.5 6.5 12.5 13.5 3.5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
      <path d="M3.5 3.5l9 9 M12.5 3.5l-9 9" />
    </svg>
  );
}

export function Artes() {
  const [selectedArte, setSelectedArte] = useState<Arte | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedArte(null);
    };
    if (selectedArte) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedArte]);

  return (
    <section id="artes" className="border-y border-i9-line bg-i9-paper2">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          index="06"
          label="Artes e peças"
          title="Design que destaca no feed e no mundo real"
          sub="Uma seleção padronizada de peças criadas para clientes: de identidades visuais e uniformes a materiais físicos de ponto de venda."
        />
        <Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {ARTES.map((a) => (
              <figure
                key={a.src}
                onClick={() => setSelectedArte(a)}
                className="group flex flex-col overflow-hidden rounded-xl border border-i9-line bg-white shadow-xs transition hover:border-i9-blue hover:shadow-md cursor-pointer"
                title={`Clique para ampliar ${a.alt}`}
              >
                <div className="relative aspect-square w-full overflow-hidden bg-i9-ink2">
                  {/* Fundo ambiente desfocado das cores da arte para preenchimento harmônico */}
                  <Image
                    src={a.src}
                    alt=""
                    fill
                    aria-hidden
                    className="scale-125 object-cover opacity-25 blur-xl"
                  />
                  {/* Arte principal 100% enquadrada com object-contain - sem nenhum corte de logo, texto ou borda */}
                  <Image
                    src={a.src}
                    alt={a.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="relative z-10 object-contain p-3 transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Ícone sutil de zoom no hover */}
                  <span className="absolute bottom-2 right-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition group-hover:opacity-100 shadow-sm">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </span>
                </div>
                <figcaption className="flex items-center justify-between p-3 text-xs font-medium text-i9-slate">
                  <span className="truncate">{a.alt}</span>
                  <span className="shrink-0 text-[10px] font-semibold text-i9-blue opacity-0 transition group-hover:opacity-100">
                    Ampliar ↗
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        {/* Modal Lightbox para visualização completa em alta definição */}
        {selectedArte && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedArte(null)}
          >
            <div
              className="relative flex max-h-[95vh] max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-i9-ink2 p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedArte(null)}
                aria-label="Fechar visualização"
                className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white/40"
              >
                ✕
              </button>
              <div className="relative h-[65vh] w-[85vw] max-w-3xl sm:h-[75vh]">
                <Image
                  src={selectedArte.src}
                  alt={selectedArte.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3 sm:flex-row sm:items-center sm:justify-between text-white">
                <div>
                  <p className="text-sm font-semibold">{selectedArte.alt}</p>
                  <p className="text-xs text-slate-400">Design criado pela equipe da i9BASE</p>
                </div>
                <a
                  href={waLink(`Oi! Vi o design "${selectedArte.alt}" no site e quero um projeto de design e artes para a minha marca.`)}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center rounded-lg bg-i9-blue px-4 py-2 text-xs font-bold text-white transition hover:bg-i9-blue-deep"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Diferencial() {
  return (
    <section id="diferencial" className="bg-i9-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          index="09"
          label="Diferencial"
          title="Por que a i9BASE é diferente"
          sub="A maioria vende peça. A gente entrega a base funcionando."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-sm border border-i9-line bg-i9-paper2 p-6">
            <p className="font-display text-base font-bold text-i9-slate">
              A maioria das agências
            </p>
            <ul className="mt-4 space-y-3">
              {DIFERENCIAL.map((d) => (
                <li key={d.ruim} className="flex items-start gap-2.5 text-sm text-i9-slate">
                  <span className="mt-0.5 text-slate-300">
                    <CrossIcon />
                  </span>
                  {d.ruim}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm border border-i9-blue bg-i9-ink p-6 text-white">
            <p className="font-display text-base font-bold text-white">A i9BASE</p>
            <ul className="mt-4 space-y-3">
              {DIFERENCIAL.map((d) => (
                <li key={d.bom} className="flex items-start gap-2.5 text-sm text-slate-100">
                  <span className="mt-0.5 text-emerald-400">
                    <CheckIcon />
                  </span>
                  {d.bom}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Reveal>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {STATS.map(([n, label]) => (
            <div
              key={label}
              className="rounded-sm border border-i9-line bg-i9-paper2 px-4 py-5 text-center"
            >
              <p className="font-mono text-2xl font-bold text-i9-ink">{n}</p>
              <p className="mt-1 text-sm text-i9-slate">{label}</p>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Method() {
  return (
    <section id="metodo" className="border-y border-i9-line bg-i9-paper2">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          index="07"
          label="Método"
          title="O método que organiza o crescimento"
          sub="Antes de vender qualquer peça, entendemos o negócio. Oito passos, do diagnóstico à fidelização."
        />
        <Reveal>
        <ol className="divide-y divide-slate-200 border-y border-i9-line">
          {METHOD.map((m) => (
            <li
              key={m.n}
              className="grid gap-1 py-5 sm:grid-cols-[80px_220px_1fr] sm:items-baseline sm:gap-6"
            >
              <span className="font-display text-2xl font-bold text-i9-blue">{m.n}</span>
              <h3 className="font-display text-base font-bold text-i9-ink">{m.name}</h3>
              <p className="text-sm leading-relaxed text-i9-slate">{m.desc}</p>
            </li>
          ))}
        </ol>
        </Reveal>
      </div>
    </section>
  );
}

export function Escada() {
  return (
    <section id="como-trabalhamos" className="bg-i9-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          dark
          index="08"
          label="Como trabalhamos"
          title="Cinco portas de entrada, um caminho só"
          sub="Você entra pelo que dói hoje e cresce dentro da mesma base. Sem trocar de fornecedor a cada fase."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ESCADA.map((e, i) => (
            <div
              key={e.name}
              className="rounded-sm border border-white/15 bg-white/5 p-6"
            >
              <p className="font-display text-sm font-bold text-i9-blue-soft">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-1 text-lg font-bold text-white">
                {e.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {e.desc}
              </p>
            </div>
          ))}
          <a
            href="/diagnostico"
            onClick={() => track("diagnostico_start", { origem: "escada" })}
            className="flex flex-col justify-between rounded-sm bg-i9-signal p-6 transition hover:brightness-95"
          >
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-i9-ink/80">
                2 min
              </p>
              <h3 className="font-display mt-2 text-lg font-bold text-i9-ink">
                Não sabe por onde entrar?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-i9-ink/80">
                Responda 4 perguntas e receba o plano certo para o seu momento.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 font-display text-sm font-bold text-i9-ink">
              Fazer diagnóstico gratuito
              <span aria-hidden>→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function TechStrip() {
  return (
    <section aria-label="Tecnologia" className="border-b border-i9-line bg-i9-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-4 py-5 sm:px-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-i9-slate">
          Nossa base de tecnologia
        </span>
        {TECHS.map((t) => (
          <span
            key={t.name}
            title={t.name}
            className="flex items-center gap-1.5 text-i9-slate transition hover:text-slate-900"
          >
            <Image
              src={t.logo}
              alt={t.name}
              width={20}
              height={20}
              loading="lazy"
              className="h-[18px] w-auto"
            />
            <span className="text-sm font-medium">{t.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section className="bg-i9-paper">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="label-eyebrow text-i9-slate">Parceria de indicação cruzada</p>
        <div className="mt-4 flex flex-col gap-4 rounded-sm border border-i9-line bg-i9-paper2 p-5 sm:flex-row sm:items-center sm:gap-6">
          <Image
            src="/parceiros/pecatech.png"
            alt="Peça Tech, gráfica, tecnologia e soluções digitais"
            width={800}
            height={800}
            sizes="(max-width: 640px) 50vw, 180px"
            className="h-28 w-28 shrink-0 rounded-sm border border-i9-line bg-i9-paper2 object-contain p-1"
            loading="lazy"
          />
          <div className="flex-1">
            <p className="font-display text-lg font-bold text-i9-ink">Peça Tech</p>
            <p className="mt-1 text-sm text-i9-slate">
              Papelaria, informática e lan house. A gente se indica de verdade:
              quem chega lá conhece o digital, quem chega aqui resolve o físico.
              Sem vínculo oficial, com confiança de vizinho.
            </p>
          </div>
          <a
            href={waLink('Oi! Quero saber sobre produção física com a parceira de vocês.')}
            target="_blank"
            rel="noopener"
            onClick={() => track('whatsapp_click', { from: 'partners' })}
            className="shrink-0 rounded-md border border-i9-blue px-4 py-2 text-center text-sm font-semibold text-i9-blue hover:bg-i9-blue hover:text-white"
          >
            Pedir produção física
          </a>
        </div>
        <p className="mt-3 text-xs text-i9-slate">
          Gráfica, tecnologia e soluções digitais. Parceira de balcão e de bairro.
        </p>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contato" className="border-t border-i9-line bg-i9-paper text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grain relative rounded-2xl bg-i9-ink p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl">
          <SectionHead
            dark
            index="10"
            label="Contato & Diagnóstico"
            title="Vamos tirar o seu projeto do papel?"
            sub="Fale diretamente com quem projeta e desenvolve. Sem intermediários, com alinhamento técnico ágil e foco no resultado da sua empresa."
          />
          <div className="grid items-start gap-8 lg:grid-cols-12">
            {/* Coluna Esquerda: Informações B2B institucionais */}
            <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-i9-blue-soft">
                  Atendimento Técnico Direto
                </span>
                <p className="mt-1 font-display text-lg font-bold text-white">
                  Vinicius Lobo
                </p>
                <p className="text-xs text-slate-300">
                  Engenharia de Software & Soluções Digitais
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Sem intermediários ou atendentes sem conhecimento técnico. Você conversa diretamente com o desenvolvedor responsável pela arquitetura e entrega do seu projeto.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                onClick={() => track("whatsapp_click", { from: "contact_left_wa" })}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-i9-blue hover:bg-white/10"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    WhatsApp Direto
                  </p>
                  <p className="mt-0.5 font-display text-base font-bold text-white">
                    (21) 99835-1729
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-400">
                  Disponível
                </span>
              </a>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  E-mail Institucional
                </p>
                <p className="mt-0.5 font-display text-base font-bold text-white">
                  {CONTACT_EMAIL}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Localização & Atendimento
                </p>
                <p className="mt-0.5 font-display text-base font-bold text-white">
                  Campos dos Goytacazes — RJ
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Atendimento presencial na região e remoto em todo o Brasil.
                </p>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                onClick={() => track("cta_click", { from: "contact_left_ig", to: "instagram" })}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-i9-blue hover:bg-white/10"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Instagram
                  </p>
                  <p className="mt-0.5 font-display text-base font-bold text-white">
                    @i9base
                  </p>
                </div>
                <span className="text-xs font-semibold text-i9-blue-soft">
                  Acompanhar ↗
                </span>
              </a>
            </div>

            {/* Coluna Direita: Pré-formulário de contato estruturado */}
            <div className="lg:col-span-7">
              <PreContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferDot() {
  return (
    <span
      aria-hidden
      className="flex h-6 w-6 shrink-0 items-center justify-center bg-i9-signal"
    >
      <svg viewBox="0 0 12 12" className="h-3 w-3 fill-i9-ink" aria-hidden>
        <path d="M6.5 1 11 6.5 6.5 12 5 10.5 8 7.5H1V5.5h7L5 2.5Z" />
      </svg>
    </span>
  );
}

export function OfferStrip() {
  const row = (items: string[], reverse: boolean, label: string) => (
    <div className="flex overflow-hidden py-2.5" aria-label={label}>
      <div
        className={`flex shrink-0 items-center gap-6 pr-6 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee-slow"
        } hover:[animation-play-state:paused]`}
      >
        {[...items, ...items].map((n, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-6 whitespace-nowrap"
          >
            <span className="flex items-center gap-2.5">
              <OfferDot />
              <span className="text-sm font-semibold text-slate-100">{n}</span>
            </span>
            <span aria-hidden className="text-xs font-bold text-i9-signal">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
  return (
    <section
      aria-label="Nossas ofertas"
      className="border-y border-[rgba(37,99,235,0.2)] bg-[#121820]"
    >
      <div className="border-b border-[rgba(37,99,235,0.12)]">
        {row(
          ["Sites e Landing Pages", "Sistemas e CRM", "Automação WhatsApp", "QR e NFC", "Identidade Visual"],
          false,
          "Ofertas, linha um"
        )}
      </div>
      {row(
        ["IA para Conteúdo", "Convites Interativos", "Cardápio Digital", "Gestão de Academias", "Integração ERP"],
        true,
        "Ofertas, linha dois"
      )}
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "Vocês atendem 24h mesmo?",
    a: "Sim. O WhatsApp da i9BASE tem atendimento automático todos os dias, a qualquer hora. O que precisa de gente cai para a equipe.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Todo orçamento é personalizado depois de entender o caso. Chama no WhatsApp, conta o que você precisa e recebe a proposta.",
  },
  {
    q: "Vocês atendem só em Campos dos Goytacazes?",
    a: "A base é em Campos dos Goytacazes e região, e atendemos projetos remotos de qualquer lugar do Brasil.",
  },
  {
    q: "Vocês fazem parceria?",
    a: "Sim. Temos parceria oficial de produção física com a Peça Tech e modelo B2B para gráficas, lojas e profissionais que querem oferecer digital.",
  },
  {
    q: "Com quanto tempo de antecedência peço meu convite?",
    a: "Quanto antes, melhor. Chama no WhatsApp com a data da festa que a gente confirma o prazo na hora.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-i9-line bg-i9-paper2">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <SectionHead
          index="11"
          label="Dúvidas frequentes"
          title="Perguntas de quem chega"
          sub="O que todo mundo pergunta antes de chamar. Não achou a sua? Chama no WhatsApp."
        />
        <div className="divide-y divide-slate-200 rounded-sm border border-i9-line">
          {FAQ_ITEMS.map((f) => (
            <details key={f.q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-i9-ink">
                {f.q}
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-i9-line text-i9-blue transition group-open:rotate-45"
                >
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <path d="M6 1v10 M1 6h10" />
                  </svg>
                </span>
              </summary>
              <p className="mt-2 pr-10 text-sm leading-relaxed text-i9-slate">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-i9-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <p className="label-eyebrow text-i9-blue-soft">Próximo passo</p>
        <h2 className="mx-auto mt-3 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Seu negócio pode ser o próximo
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-slate-300">
          Site, sistema, automação ou convite: conta o que trava o seu dia que
          a gente responde 24h.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={waLink("Oi! Vim pelo site da i9BASE e quero um orçamento.")}
            target="_blank"
            rel="noopener"
            onClick={() => track("whatsapp_click", { from: "final_cta" })}
            className="rounded-md bg-i9-signal px-8 py-3.5 font-semibold text-i9-ink hover:bg-white"
          >
            Quero um orçamento
          </a>
          <a
            href="/diagnostico"
            onClick={() => track("diagnostico_start", { origem: "final_cta" })}
            className="rounded-md border border-white/25 px-8 py-3.5 font-semibold text-white hover:border-white hover:text-white"
          >
            Fazer diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
