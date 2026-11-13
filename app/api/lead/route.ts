import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const nome = String(data.nome || "").trim().slice(0, 100);
    const empresa = String(data.empresa || "").trim().slice(0, 100);
    const whatsapp = String(data.whatsapp || "").replace(/\D/g, "");
    const objetivo = String(data.objetivo || "").slice(0, 100);
    const detalhes = String(data.detalhes || "").slice(0, 500);

    const webhookUrl = process.env.CRM_WEBHOOK_DIAGNOSTICO_URL;
    if (webhookUrl && whatsapp) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: empresa ? `${nome} (${empresa})` : nome,
            phone: whatsapp,
            utm_source: "pre_formulario_site",
            utm_medium: "home_dark",
            utm_campaign: "contato_direto",
            pergunta_organizacao: objetivo,
            pergunta_perda: detalhes,
          }),
          signal: AbortSignal.timeout(5000),
        });
      } catch (err) {
        console.error("Falha ao registrar webhook CRM:", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro em /api/lead:", err);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
