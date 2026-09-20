"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  CASES,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  METHOD,
  NICHES,
  SOLUTIONS,
  TECHS,
  WHATSAPP_URL,
  waLink,
} from "@/lib/data";
import { track } from "@/lib/analytics";
import { HeroCanvas } from "@/components/hero-canvas";

function SectionHead({
  index,
  title,
  sub,
  dark,
}: {
  index: string;
  title: string;
  sub: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-8">
      <p className={`label-eyebrow ${dark ? "text-i9-blue-soft" : "text-i9-blue"}`}>
        {index}
      </p>
      <h2
        className={`mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
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
        <div className="frame-corners overflow-hidden rounded-2xl border border-white/15 bg-i9-ink/70 backdrop-blur-sm">
          <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
            <Image
              src="/logo.png"
              alt="i9BASE, sua base de tecnologia e inovação"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
              style={{ objectPosition: "37% 52%" }}
            />
          </div>
        </div>

        <h1 className="mt-8 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Estruture. Automatize. Evolua.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">
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
            href="#convites"
            onClick={() => track("cta_click", { from: "hero", to: "convites" })}
            className="rounded-lg border border-white/25 px-6 py-3 text-center font-semibold text-white hover:border-i9-blue-soft hover:text-i9-blue-soft"
          >
            Ver convites interativos
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
    ["15", "cases em destaque"],
    ["12", "soluções para o seu negócio"],
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
  return (
    <section id="solucoes" className="bg-i9-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          index="01 · Soluções"
          title="Tudo que o seu negócio precisa, num só lugar"
          sub="Cada solução resolve uma parte da operação. Juntas, viram a base que o seu negócio roda em cima. Toque numa solução e chame direto sobre ela."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <a
              key={s.name}
              href={waLink(`Oi! Vi no site e quero saber sobre: ${s.name}.`)}
              target="_blank"
              rel="noopener"
              onClick={() => track("whatsapp_click", { from: "solution_card", solution: s.name })}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:border-i9-blue"
            >
              <h3 className="font-display text-base font-bold text-i9-ink group-hover:text-i9-blue">
                {s.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              <p className="mt-4 text-sm font-semibold text-i9-blue">
                Quero essa solução
              </p>
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Orçamento sempre personalizado após entender o seu caso, e parceria é
          sempre conversável.
        </p>
      </div>
    </section>
  );
}

export function Convites() {
  return (
    <section id="convites" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          index="02 · Convites interativos"
          title="Convites que vendem por você"
          sub="Convite digital com confirmação de presença, mapa e galeria de fotos em tempo real. Na festa, o convidado escaneia o QR e as fotos aparecem na hora para todo mundo acompanhar."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { src: "/cases/convite-ana.jpg", alt: "Convite digital de 15 anos da Ana Carolina" },
            { src: "/cases/convite-vicente.jpg", alt: "Convite digital de 1 ano do Vicente" },
          ].map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-xl border border-slate-200"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
          ))}
        </div>
        <div className="mt-6 grid gap-3 rounded-xl border border-slate-200 bg-i9-paper p-5 text-sm text-slate-600 sm:grid-cols-3">
          <p>
            <strong className="text-i9-ink">Para o anfitrião:</strong> confirmação
            organizada, sem planilha e sem correria no WhatsApp.
          </p>
          <p>
            <strong className="text-i9-ink">Para o convidado:</strong> abre no
            celular, confirma, vê mapa e participa da galeria ao vivo.
          </p>
          <p>
            <strong className="text-i9-ink">No impresso também:</strong> centro
            de mesa, cardápio e tag com QR, com a parceira Peça Tech.
          </p>
        </div>
        <a
          href={waLink("Oi! Quero um convite como esse para meu evento.")}
          target="_blank"
          rel="noopener"
          onClick={() => track("whatsapp_click", { from: "convites" })}
          className="mt-6 inline-block rounded-lg bg-i9-blue px-6 py-3 font-semibold text-white hover:bg-i9-blue-deep"
        >
          Quero um convite como esse
        </a>
      </div>
    </section>
  );
}

const FILTERS = ["Todos", "Sites", "Sistemas", "Branding", "Experiências"] as const;

export function Cases() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todos");
  const list = useMemo(
    () => (filter === "Todos" ? CASES : CASES.filter((c) => c.category === filter)),
    [filter]
  );

  return (
    <section id="cases" className="bg-i9-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          index="03 · Cases"
          title="Projetos que viraram resultado"
          sub="Uma seleção do que já entregamos: sites, sistemas, marcas e experiências para negócios reais."
        />
        <div className="mb-6 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                track("case_filter", { filter: f });
              }}
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
            {list.map((c) => (
              <article
                key={c.slug}
                onClick={() => track("case_view", { case: c.slug })}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={c.image}
                    alt={`${c.name}: ${c.desc}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-i9-blue">
                    {c.category} · {c.niche}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-i9-ink">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
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
                </div>
              </article>
            ))}
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
          index="04 · Método"
          title="O método que organiza o crescimento"
          sub="Antes de vender qualquer peça, entendemos o negócio. O método tem 8 passos, do diagnóstico à fidelização."
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METHOD.map((m) => (
            <li
              key={m.n}
              className="rounded-xl border border-slate-200 bg-i9-paper p-5"
            >
              <p className="font-display text-sm font-bold text-i9-blue">{m.n}</p>
              <h3 className="mt-1 font-display text-base font-bold text-i9-ink">
                {m.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.desc}</p>
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
    <section id="contato" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          index="05 · Contato"
          title="Seu negócio pode ser o próximo"
          sub="Conta o que trava o seu dia no WhatsApp. A gente responde 24h e vê o que dá pra automatizar."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-i9-paper p-6">
            <label
              htmlFor="cta-msg"
              className="text-sm font-semibold text-i9-ink"
            >
              O que você precisa?
            </label>
            <textarea
              id="cta-msg"
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Ex: preciso de um site para minha lanchonete e quero atender pelo WhatsApp"
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white p-3 text-sm text-i9-ink placeholder:text-slate-400"
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
            <p className="mt-3 text-xs text-slate-500">
              Cai direto na nossa conversa, com atendimento automático 24h.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              onClick={() => track("whatsapp_click", { from: "contact_card" })}
              className="rounded-xl border border-slate-200 bg-i9-paper p-6 hover:border-i9-blue"
            >
              <p className="font-display text-base font-bold text-i9-ink">WhatsApp</p>
              <p className="mt-1 text-sm text-slate-600">
                Atendimento automático 24h, todos os dias. Orçamento base na hora.
              </p>
              <p className="mt-2 text-sm font-semibold text-i9-blue">Chamar agora</p>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener"
              onClick={() => track("cta_click", { from: "contact_card", to: "instagram" })}
              className="rounded-xl border border-slate-200 bg-i9-paper p-6 hover:border-i9-blue"
            >
              <p className="font-display text-base font-bold text-i9-ink">Instagram @i9base</p>
              <p className="mt-1 text-sm text-slate-600">
                Bastidores, cases e novidades da base.
              </p>
              <p className="mt-2 text-sm font-semibold text-i9-blue">Seguir</p>
            </a>
            <div className="rounded-xl border border-slate-200 bg-i9-paper p-6">
              <p className="font-display text-base font-bold text-i9-ink">E-mail</p>
              <p className="mt-1 text-sm text-slate-600">{CONTACT_EMAIL}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
