import { NextResponse } from "next/server";
import { origemDe, registrarEvento } from "@/lib/site-metrics";

// Eventos do site (page_view, whatsapp_click, diagnostico_start...).
// Persiste no Supabase (tabela site_eventos) para o painel /metricas.
// Sem as variáveis de ambiente, só responde ok (modo degradado).
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const evento = String(body?.event ?? "page_view");
    const pagina = String(body?.url ?? body?.pagina ?? "/");
    const dados =
      body?.data && typeof body.data === "object" ? body.data : {};
    const dadosStr: Record<string, string> = {};
    for (const [k, v] of Object.entries(dados)) {
      if (typeof v === "string") dadosStr[k] = v.slice(0, 200);
    }
    registrarEvento({
      evento,
      pagina,
      origem: origemDe(pagina, dadosStr),
      dados: dadosStr,
    });
  } catch {
    /* ignora payload inválido */
  }
  return NextResponse.json({ ok: true });
}
