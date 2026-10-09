import { Suspense } from "react";
import { clienteMetricas, metricasAtivas } from "@/lib/site-metrics";

export const dynamic = "force-dynamic";
export const metadata = { title: "Métricas do site · i9BASE", robots: { index: false } };

type Linha = { created_at: string; evento: string; pagina: string; origem: string };

function diaDe(iso: string) {
  return iso.slice(0, 10);
}

function ultimosDias(n: number): string[] {
  const dias: string[] = [];
  const hoje = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(hoje);
    d.setDate(d.getDate() - i);
    dias.push(d.toISOString().slice(0, 10));
  }
  return dias;
}

async function carregar(): Promise<Linha[]> {
  if (!metricasAtivas()) return [];
  const desde = new Date();
  desde.setDate(desde.getDate() - 30);
  const { data } = await clienteMetricas()
    .from("site_eventos")
    .select("created_at, evento, pagina, origem")
    .gte("created_at", desde.toISOString())
    .order("created_at", { ascending: false })
    .limit(5000);
  return (data ?? []) as Linha[];
}

function Card({ titulo, valor, detalhe }: { titulo: string; valor: string; detalhe?: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{titulo}</p>
      <p className="font-display mt-1 text-3xl font-bold text-i9-ink">{valor}</p>
      {detalhe && <p className="mt-1 text-xs text-slate-500">{detalhe}</p>}
    </div>
  );
}

async function Painel() {
  const linhas = await carregar();
  if (linhas.length === 0) {
    return (
      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6 text-sm text-amber-900">
        Sem dados ainda. Ou o site ainda não recebeu visitas após a configuração,
        ou faltam as variáveis SUPABASE_URL e SUPABASE_SERVICE_KEY no deploy.
      </div>
    );
  }
  const visitas = linhas.filter((l) => l.evento === "page_view");
  const whats = linhas.filter((l) => l.evento === "whatsapp_click");
  const diagStart = linhas.filter((l) => l.evento === "diagnostico_start").length;
  const diagDone = linhas.filter((l) => l.evento === "diagnostico_done").length;

  const porOrigem = new Map<string, number>();
  for (const l of visitas) porOrigem.set(l.origem, (porOrigem.get(l.origem) ?? 0) + 1);
  const topOrigens = [...porOrigem.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);

  const porDia = new Map<string, number>();
  for (const l of visitas) {
    const d = diaDe(l.created_at);
    porDia.set(d, (porDia.get(d) ?? 0) + 1);
  }
  const dias = ultimosDias(14);
  const maxDia = Math.max(1, ...dias.map((d) => porDia.get(d) ?? 0));

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card titulo="Visitas (30d)" valor={String(visitas.length)} />
        <Card titulo="Cliques WhatsApp" valor={String(whats.length)} detalhe={`${visitas.length ? Math.round((whats.length / visitas.length) * 100) : 0}% das visitas`} />
        <Card titulo="Diagnósticos iniciados" valor={String(diagStart)} />
        <Card titulo="Diagnósticos concluídos" valor={String(diagDone)} detalhe={diagStart ? `${Math.round((diagDone / diagStart) * 100)}% concluem` : undefined} />
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Visitas por dia (14 dias)</p>
        <div className="mt-3 flex h-28 items-end gap-1.5">
          {dias.map((d) => {
            const v = porDia.get(d) ?? 0;
            return (
              <div key={d} className="flex flex-1 flex-col items-center gap-1" title={`${d}: ${v}`}>
                <div className="w-full rounded-sm bg-i9-blue" style={{ height: `${Math.max(3, (v / maxDia) * 100)}%` }} />
                <span className="text-[9px] text-slate-400">{d.slice(8)}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">De onde vem (origem)</p>
        <table className="mt-3 w-full text-sm">
          <tbody>
            {topOrigens.map(([origem, n]) => (
              <tr key={origem} className="border-t border-slate-100">
                <td className="py-2 font-medium text-i9-ink">{origem}</td>
                <td className="py-2 text-right">
                  <span className="mr-2 inline-block h-2 rounded-full bg-i9-blue align-middle" style={{ width: `${Math.max(8, (n / (topOrigens[0]?.[1] ?? 1)) * 120)}px` }} />
                  {n}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default async function MetricasPage({ searchParams }: { searchParams: Promise<{ k?: string }> }) {
  const { k } = await searchParams;
  if (!process.env.METRICAS_TOKEN || k !== process.env.METRICAS_TOKEN) {
    return (
      <main className="mx-auto max-w-md px-5 py-24 text-center">
        <h1 className="font-display text-2xl font-bold text-i9-ink">Acesso restrito</h1>
        <p className="mt-2 text-sm text-slate-500">Esta página é interna. Use o link com a chave.</p>
      </main>
    );
  }
  return (
    <main className="mx-auto w-full max-w-5xl bg-i9-paper px-4 py-10 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-widest text-i9-blue">Interno i9BASE</p>
      <h1 className="font-display mt-1 text-3xl font-bold text-i9-ink">Métricas do site</h1>
      <p className="mt-1 text-sm text-slate-500">Visitas, WhatsApp e diagnóstico por origem. Para medir panfleto, use ?origem=panfleto-local no QR.</p>
      <div className="mt-6">
        <Suspense fallback={<p className="text-sm text-slate-500">Carregando...</p>}>
          <Painel />
        </Suspense>
      </div>
    </main>
  );
}
