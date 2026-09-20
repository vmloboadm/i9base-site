import { NextResponse } from "next/server";

// Eventos do site (page_view, whatsapp_click, case_view...).
// Hoje: registra no log do servidor. Próximo passo: gravar no Supabase
// e espelhar no CRM via webhook.
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(
      JSON.stringify({ scope: "site-track", ...body })
    );
  } catch {
    /* ignora payload inválido */
  }
  return NextResponse.json({ ok: true });
}
