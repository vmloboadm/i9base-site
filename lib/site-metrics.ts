import { createClient } from "@supabase/supabase-js";

// Métricas do site (painel /metricas). Tudo server-side: as chaves nunca
// aparecem no navegador. Sem as variáveis, os eventos são ignorados e a
// página informa que falta configurar.
const URL = process.env.SUPABASE_URL ?? "";
const CHAVE = process.env.SUPABASE_SERVICE_KEY ?? "";

export function metricasAtivas() {
  return URL.startsWith("http") && CHAVE.length > 20;
}

export function clienteMetricas() {
  return createClient(URL, CHAVE, { auth: { persistSession: false } });
}

export type EventoSite = {
  evento: string;
  pagina: string;
  origem: string;
  dados?: Record<string, string>;
};

export async function registrarEvento(e: EventoSite) {
  if (!metricasAtivas()) return;
  try {
    await clienteMetricas().from("site_eventos").insert({
      evento: e.evento.slice(0, 60),
      pagina: e.pagina.slice(0, 200),
      origem: e.origem.slice(0, 60),
      dados: e.dados ?? {},
    });
  } catch {
    /* métrica nunca pode quebrar a página */
  }
}

export function origemDe(url: string, dados: Record<string, string>): string {
  const deDados =
    dados.origem ?? dados.utm_source ?? dados.from ?? "";
  if (deDados) return String(deDados).slice(0, 60);
  const query = url.split("?")[1] ?? "";
  for (const parte of query.split("&")) {
    const [k, v] = parte.split("=");
    if ((k === "origem" || k === "utm_source") && v) {
      try {
        return decodeURIComponent(v).slice(0, 60);
      } catch {
        return v.slice(0, 60);
      }
    }
  }
  return "direto";
}
