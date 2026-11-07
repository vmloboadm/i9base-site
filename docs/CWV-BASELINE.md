# Baseline de CWV — 07/11/2026 (antes dos PRs de limpeza)

Medido com Lighthouse 12 (Chrome headless na VPS Power) contra o site ao vivo.
Original `/` reports: JSON completo em `/root/reports/i9site/baseline-home-*.json` (fora do repo).

## Home / (ao vivo)

| Métrica | Mobile | Desktop |
|---|---|---|
| Performance | 0.86 | 1.00 |
| Acessibilidade | 0.92 | 0.92 |
| Best Practices | 1.00 | 1.00 |
| SEO | 1.00 | 1.00 |
| FCP | 1.3 s | 0.3 s |
| LCP | 3.2 s | 0.5 s |
| TBT | 330 ms | 20 ms |
| CLS | 0 | 0.002 |
| Speed Index | 2.9 s | 0.6 s |
| Peso total | 375 KiB | 557 KiB |
| Interactive | 3.7 s | 0.6 s |

## /convites (mobile)

- Performance 0.79 · Acessibilidade 0.96
- LCP 2.8 s · TBT 100 ms
- Peso total: **6.627 KiB** (gargalo confirmado)

## Evidências coletadas no HTML ao vivo (07/11)

- `og:title` e `og:url` da home vazam para `/convites` e `/diagnostico`
  (confirma MetaP0.3: gerar metadata por rota).
- `/convites`: 32 `<img>` no HTML, 46 ocorrências de `_next/image?...w=3840`.
- Home: 85 `<img>`, 68 com `sizes`. `w=3840` em 136 ocorrências (inclui logo).
- O texto `?pacote=` **não aparece mais** nos CTAs de WhatsApp do /convites
  (item P0.6 do levantamento já foi resolvido na série v21–v26).
- `festa.mp4` hoje: poster + aria-label + `preload="metadata"` + autoplay em loop
  (falta: respeitar `prefers-reduced-motion`; revisar `preload="none"`).
- `public/` tem 74 MB de origem (cases 41 MB, artes 24 MB, convites 8 MB) e
  `next.config.ts` não define `deviceSizes`/`imageSizes` — qualquer `<img>` pode
  pedir variantes de até 3840 px.
- robots.txt e sitemap.xml respondem 200; sitemap lista apenas `/` e `/convites`
  (falta `/diagnostico`, `/metricas` quando público, rotas novas).

## O que já mudou no repo desde o levantamento (v21–v26)

`/diagnostico` + quiz + QRs, `/metricas` (painel interno), track com origem,
faixa de tecnologia com SVGs locais (cdn.simpleicons eliminado),
logos oficiais na faixa. O TODO de PR abaixo já vem recalibrado.

## Base de comparação nos próximos PRs

Cada PR de código re-medido com o mesmo comando contra o preview da Vercel.

| PR | Meta de melhoria |
|---|---|
| PR1 (bugs+peso) | `/convites` mobile ≤ 2.500 KiB peso total; LCP home ≤ 2.5 s; a11y ≥ 0.95 |
| PR2 (visual) | Performance não regressar; CLS 0; nitidez dos tokens |
| PR3–PR5 | Manter os números, foco em conteúdo/conversão |
