"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

const OBJETIVOS = [
  { id: "sistemas", label: "Sistemas & Web Apps", desc: "Plataformas sob medida, dashboards e portais operacionais" },
  { id: "ia-whatsapp", label: "Automação & IA no WhatsApp", desc: "Triagem 24/7, integração CRM e agentes autônomos" },
  { id: "catalogo", label: "Catálogo & Cardápio PWA", desc: "Pedidos mobile-first sem intermediários nem comissão" },
  { id: "convites", label: "Convites Interativos", desc: "Confirmação em tempo real e mural de fotos no telão" },
  { id: "parceria", label: "Parceria Técnica B2B", desc: "Overflow e capacidade de engenharia para agências" },
  { id: "outro", label: "Outro Projeto Sob Medida", desc: "Solução arquitetada para o seu fluxo específico" },
];

export function PreContactForm() {
  const [objetivo, setObjetivo] = useState(OBJETIVOS[0].id);
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [detalhes, setDetalhes] = useState("");
  const [enviando, setEnviando] = useState(false);

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 6) {
      v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    } else if (v.length > 2) {
      v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    }
    setWhatsapp(v);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !whatsapp.trim()) {
      alert("Por favor, preencha pelo menos seu nome e WhatsApp.");
      return;
    }

    setEnviando(true);
    const objSelecionado = OBJETIVOS.find((o) => o.id === objetivo)?.label || "Projeto";

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          empresa,
          whatsapp,
          objetivo: objSelecionado,
          detalhes,
          origem: "pre_formulario_home",
        }),
      });
    } catch {
      // Continua para abrir WhatsApp mesmo se houver falha de rede
    }

    track("lead_pre_form_submitted", { objetivo, has_empresa: empresa ? "sim" : "nao" });

    const msg = [
      `Oi Vinicius! Meu nome é ${nome.trim()}${empresa.trim() ? ` da ${empresa.trim()}` : ""}.`,
      `Vim pelo site e quero conversar sobre: *${objSelecionado}*.`,
      detalhes.trim() ? `Resumo da necessidade: "${detalhes.trim()}".` : "",
      "Podemos alinhar os detalhes?",
    ]
      .filter(Boolean)
      .join("\n\n");

    const waUrl = `https://wa.me/5521998351729?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setEnviando(false);
  }

  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
      <div className="mb-6">
        <span className="inline-block font-mono text-[11px] font-semibold uppercase tracking-wider text-i9-blue-soft">
          Briefing Rápido
        </span>
        <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
          Conte sobre a sua demanda
        </h3>
        <p className="mt-1 text-sm text-slate-300">
          Preencha os campos abaixo para iniciar a conversa com o contexto pré-formatado.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* 1. Seleção de Objetivo */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-200">
            1. Qual é o foco da sua necessidade?
          </label>
          <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
            {OBJETIVOS.map((item) => {
              const selecionado = objetivo === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setObjetivo(item.id)}
                  className={`flex flex-col rounded-lg border p-3 text-left transition-colors ${
                    selecionado
                      ? "border-i9-blue bg-i9-blue/20 text-white"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span className="text-sm font-semibold text-white">{item.label}</span>
                  <span className="mt-0.5 text-xs text-slate-400">{item.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Dados de Contato */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-200">
            2. Seus dados de contato
          </label>
          <div className="mt-2.5 grid gap-3 sm:grid-cols-3">
            <div>
              <input
                type="text"
                required
                placeholder="Seu nome *"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full rounded-md border border-white/15 bg-i9-ink px-3 py-2 text-sm text-white placeholder-slate-500 transition focus:border-i9-blue focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Empresa (opcional)"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                className="w-full rounded-md border border-white/15 bg-i9-ink px-3 py-2 text-sm text-white placeholder-slate-500 transition focus:border-i9-blue focus:outline-none"
              />
            </div>
            <div>
              <input
                type="tel"
                required
                placeholder="WhatsApp com DDD *"
                value={whatsapp}
                onChange={handlePhoneChange}
                className="w-full rounded-md border border-white/15 bg-i9-ink px-3 py-2 text-sm text-white placeholder-slate-500 transition focus:border-i9-blue focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* 3. Detalhes */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-200">
            3. Resumo da demanda (opcional)
          </label>
          <textarea
            rows={2}
            placeholder="Ex: precisamos integrar atendimento automático com nosso banco de dados..."
            value={detalhes}
            onChange={(e) => setDetalhes(e.target.value)}
            className="mt-2 w-full rounded-md border border-white/15 bg-i9-ink px-3 py-2 text-sm text-white placeholder-slate-500 transition focus:border-i9-blue focus:outline-none"
          />
        </div>

        {/* Botão de Envio */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={enviando}
            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-i9-blue px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-i9-blue-deep disabled:opacity-50"
          >
            <span>{enviando ? "Abrindo WhatsApp..." : "Continuar no WhatsApp"}</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <p className="mt-2.5 text-center text-xs text-slate-400">
            Atendimento direto com o desenvolvedor responsável. Sem intermediários.
          </p>
        </div>
      </form>
    </div>
  );
}
