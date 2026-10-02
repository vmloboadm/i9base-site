"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { WHATSAPP_NUMBER, waLink } from "@/lib/data";
import { track } from "@/lib/analytics";

const PERGUNTAS = [
  {
    id: "site",
    texto: "Seu negócio já tem site ou página própria?",
    opcoes: ["Sim, tenho site", "Só redes sociais", "Não tenho nada ainda"],
  },
  {
    id: "chegada",
    texto: "Como chega a maioria dos seus clientes hoje?",
    opcoes: ["WhatsApp", "Instagram", "Indicação", "Passam na porta"],
  },
  {
    id: "organizacao",
    texto: "Orçamentos e agendamentos hoje são...",
    opcoes: [
      "Tudo manual no WhatsApp",
      "Planilha ou caderno",
      "Tenho um sistema",
      "Não faço isso ainda",
    ],
  },
  {
    id: "perda",
    texto: "Você já perdeu venda por demora ou bagunça no atendimento?",
    opcoes: ["Sim, várias vezes", "Acho que sim", "Não, está sob controle"],
  },
] as const;

type Respostas = Record<string, string>;

function codigoDeOrigem(params: {
  origem: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
}) {
  const carga: Record<string, string> = {};
  if (params.origem) carga.utm_source = params.origem.slice(0, 200);
  if (params.utm_medium) carga.utm_medium = params.utm_medium.slice(0, 200);
  if (params.utm_campaign)
    carga.utm_campaign = params.utm_campaign.slice(0, 200);
  if (params.utm_content) carga.utm_content = params.utm_content.slice(0, 200);
  const json = JSON.stringify(carga);
  const b64 = btoa(
    encodeURIComponent(json).replace(/%([0-9A-F]{2})/g, (_, h) =>
      String.fromCharCode(parseInt(h, 16)),
    ),
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
  return `[dk1:${b64}]`;
}

function recomendacao(respostas: Respostas) {
  let presenca = 0;
  let atendimento = 0;
  if (respostas.site !== "Sim, tenho site") presenca += 2;
  if (respostas.chegada === "Instagram" || respostas.chegada === "Indicação")
    presenca += 1;
  if (respostas.organizacao === "Tudo manual no WhatsApp") atendimento += 2;
  if (respostas.organizacao === "Planilha ou caderno") atendimento += 1;
  if (respostas.perda === "Sim, várias vezes") atendimento += 2;
  if (respostas.perda === "Acho que sim") atendimento += 1;
  if (atendimento >= presenca && atendimento > 0) {
    return {
      titulo: "Atendimento e automação",
      texto:
        "Seu gargalo está na operação: organizar o WhatsApp, responder rápido e acompanhar cada contato. É aqui que venda se perde todo dia.",
    };
  }
  if (presenca > 0) {
    return {
      titulo: "Presença digital",
      texto:
        "Seu negócio precisa de uma vitrine própria: página, Google e WhatsApp conectados para o cliente te achar e te chamar.",
    };
  }
  return {
    titulo: "Sistema sob medida",
    texto:
      "Você já tem o básico. O próximo nível é um sistema que organiza tudo: clientes, agenda, vendas e rotina no mesmo lugar.",
  };
}

export function Quiz() {
  const params = useSearchParams();
  const origem = (params.get("origem") ?? "").trim().slice(0, 60);
  const utm_medium = (params.get("utm_medium") ?? "").trim().slice(0, 60);
  const utm_campaign = (params.get("utm_campaign") ?? "").trim().slice(0, 60);
  const utm_content = (params.get("utm_content") ?? "").trim().slice(0, 60);

  const [etapa, setEtapa] = useState(0);
  const [respostas, setRespostas] = useState<Respostas>({});
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");

  const terminou = etapa >= PERGUNTAS.length;
  const resultado = useMemo(
    () => (terminou ? recomendacao(respostas) : null),
    [terminou, respostas],
  );

  function responder(opcao: string) {
    const pergunta = PERGUNTAS[etapa];
    if (!pergunta) return;
    if (etapa === 0)
      track("diagnostico_start", { origem: origem || "direto" });
    track("diagnostico_step", { pergunta: pergunta.id });
    setRespostas((r) => ({ ...r, [pergunta.id]: opcao }));
    setEtapa((e) => e + 1);
  }

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    const digitos = telefone.replace(/\D/g, "");
    if (nome.trim().length < 2) {
      setErro("Conta pra gente seu nome para continuar.");
      return;
    }
    if (digitos.length < 10) {
      setErro("Confere o WhatsApp com DDD, só números já vale.");
      return;
    }
    setEnviando(true);
    try {
      await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nome.trim(),
          telefone: digitos,
          respostas,
          origem: origem || "direto",
          utm_medium,
          utm_campaign,
          utm_content,
        }),
      });
    } catch {
      /* a conversa segue no WhatsApp mesmo se o registro falhar */
    }
    track("diagnostico_done", { origem: origem || "direto" });
    setEnviando(false);
    setEnviado(true);
  }

  const linkWhats =
    resultado && enviado
      ? waLink(
          `Olá! Fiz o diagnóstico no site da i9BASE. Meu foco: ${resultado.titulo}. Me chamo ${nome.trim()}. ${codigoDeOrigem({ origem: origem || "site-diagnostico", utm_medium: utm_medium || "site", utm_campaign: utm_campaign || "diagnostico", utm_content })}`,
        )
      : `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section aria-label="Diagnóstico gratuito">
      <p className="text-sm font-semibold uppercase tracking-widest text-i9-blue">
        Diagnóstico gratuito
      </p>
      <h1 className="font-display mt-2 text-3xl font-bold text-i9-ink sm:text-4xl">
        Descubra em 2 minutos o que dá para melhorar
      </h1>
      <p className="mt-3 text-i9-slate">
        4 perguntas rápidas sobre o seu negócio. No fim, um plano direto e a
        opção de falar com a gente no WhatsApp.
      </p>

      {!terminou && (
        <div className="mt-8">
          <div
            className="h-2 overflow-hidden rounded-full bg-i9-concrete/60"
            role="progressbar"
            aria-valuenow={etapa}
            aria-valuemin={0}
            aria-valuemax={PERGUNTAS.length}
          >
            <div
              className="h-full rounded-full bg-i9-blue transition-all"
              style={{
                width: `${(etapa / PERGUNTAS.length) * 100}%`,
              }}
            />
          </div>
          <p className="mt-2 text-sm text-i9-slate">
            Pergunta {etapa + 1} de {PERGUNTAS.length}
          </p>
          <div
            key={etapa}
            className="mt-4 rounded-2xl border border-i9-concrete bg-white p-6 shadow-sm"
          >
            <h2 className="font-display text-xl font-bold text-i9-ink">
              {PERGUNTAS[etapa]?.texto}
            </h2>
            <div className="mt-5 grid gap-3">
              {PERGUNTAS[etapa]?.opcoes.map((opcao) => (
                <button
                  key={opcao}
                  type="button"
                  onClick={() => responder(opcao)}
                  className="rounded-xl border border-i9-concrete bg-i9-paper px-5 py-4 text-left font-medium text-i9-ink transition hover:border-i9-blue hover:bg-white"
                >
                  {opcao}
                </button>
              ))}
            </div>
            {etapa > 0 && (
              <button
                type="button"
                onClick={() => setEtapa((e) => e - 1)}
                className="mt-4 text-sm font-medium text-i9-slate underline"
              >
                Voltar
              </button>
            )}
          </div>
        </div>
      )}

      {terminou && resultado && !enviado && (
        <div className="mt-8 rounded-2xl border border-i9-concrete bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-i9-blue">
            Seu retrato
          </p>
          <h2 className="font-display mt-1 text-2xl font-bold text-i9-ink">
            {resultado.titulo}
          </h2>
          <p className="mt-2 text-i9-slate">{resultado.texto}</p>
          <form onSubmit={enviar} className="mt-6 grid gap-3">
            <label className="grid gap-1 text-sm font-medium text-i9-ink">
              Seu nome
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Como podemos te chamar?"
                autoComplete="name"
                className="rounded-xl border border-i9-concrete bg-i9-paper px-4 py-3 font-normal outline-none focus:border-i9-blue"
              />
            </label>
            <label className="grid gap-1 text-sm font-medium text-i9-ink">
              Seu WhatsApp com DDD
              <input
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="21999999999"
                inputMode="tel"
                autoComplete="tel"
                className="rounded-xl border border-i9-concrete bg-i9-paper px-4 py-3 font-normal outline-none focus:border-i9-blue"
              />
            </label>
            {erro && <p className="text-sm text-red-600">{erro}</p>}
            <button
              type="submit"
              disabled={enviando}
              className="rounded-xl bg-i9-blue px-5 py-4 font-display font-bold text-white transition hover:bg-i9-blue-deep disabled:opacity-60"
            >
              {enviando ? "Enviando..." : "Ver meu plano"}
            </button>
          </form>
        </div>
      )}

      {terminou && resultado && enviado && (
        <div className="mt-8 rounded-2xl border border-i9-concrete bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-i9-blue">
            Pronto, {nome.trim().split(" ")[0]}
          </p>
          <h2 className="font-display mt-1 text-2xl font-bold text-i9-ink">
            Seu foco: {resultado.titulo}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-i9-slate">
            Registramos seu diagnóstico. Chama a gente no WhatsApp para receber
            o plano e o orçamento.
          </p>
          <a
            href={linkWhats}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track("whatsapp_click", {
                from: "diagnostico",
                origem: origem || "direto",
              })
            }
            className="font-display mt-6 inline-block rounded-xl bg-[#25d366] px-8 py-4 font-bold text-white transition hover:brightness-95"
          >
            Receber meu plano no WhatsApp
          </a>
        </div>
      )}
    </section>
  );
}
