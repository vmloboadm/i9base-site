import { NextResponse } from "next/server";

// Recebe o diagnóstico preenchido no site e registra o lead no CRM.
// O destino é configurado por variável de ambiente (nunca no código):
//   CRM_WEBHOOK_DIAGNOSTICO_URL=https://crm.i9base.com.br/api/v1/webhooks/in/<token>
// Sem a variável, a página segue funcionando (o botão de WhatsApp leva o
// código de origem [dk1:...] e a atribuição acontece na conversa).
export async function POST(req: Request) {
  let corpo: {
    nome?: string;
    telefone?: string;
    respostas?: Record<string, string>;
    origem?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
  } | null = null;
  try {
    corpo = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const destino = process.env.CRM_WEBHOOK_DIAGNOSTICO_URL;
  if (corpo && destino) {
    const nome = String(corpo.nome ?? "").slice(0, 120);
    const telefone = String(corpo.telefone ?? "").replace(/\D/g, "");
    const origem = String(corpo.origem ?? "direto").slice(0, 60);
    const respostas = corpo.respostas ?? {};
    try {
      await fetch(destino, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nome,
          phone: telefone,
          utm_source: origem,
          utm_medium: String(corpo.utm_medium || "site").slice(0, 60),
          utm_campaign: String(corpo.utm_campaign || "diagnostico").slice(
            0,
            60,
          ),
          utm_content: String(corpo.utm_content || "").slice(0, 60),
          ponto_fisico: origem,
          pergunta_site: String(respostas.site ?? ""),
          pergunta_chegada: String(respostas.chegada ?? ""),
          pergunta_organizacao: String(respostas.organizacao ?? ""),
          pergunta_perda: String(respostas.perda ?? ""),
        }),
        signal: AbortSignal.timeout(8000),
      });
    } catch {
      console.log(
        JSON.stringify({ scope: "diagnostico-webhook-falhou", origem }),
      );
    }
  }
  return NextResponse.json({ ok: true });
}
