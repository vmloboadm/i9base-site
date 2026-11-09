# PENDÊNCIAS DO SITE (sem dado inventado, tudo registrado aqui)

## Assets aguardando o Vinicius
- [ ] Imagem real do case Panela da Roça (mockup do sistema de pedidos OU foto ambiente). Temporário: placeholder `PANELA_PLACEHOLDER` no ar.
- [ ] Vídeos reais de convites/festas em `public/convites/` (mp4 h264). Temporário: placeholders na página `/convites`.
- [ ] Fotos reais de convites/festas em `public/convites/` (jpg/png). Temporário: seção de fotos oculta até chegar.
- [ ] Depoimentos reais (nome + papel + texto). Temporário: seção não renderiza (`DEPOIMENTOS` vazio).

## Ações externas (fora do código)
- [ ] Apontar `i9base.com.br` para a Vercel (Hostinger: A `@` 76.76.21.21 ou nameservers da Vercel) quando o site principal for ao ar.
- [ ] Redirect 301 de `i9experience.netlify.app` para `https://i9base.com.br` (painel Netlify > Site settings > Redirects).
- [ ] Vídeo de preview no hover do card Convites (aguardando mp4; ver `Solution.video`, hoje `undefined`).

## Decidido e aplicado
- Conversão e LGPD (PR5): /diagnostico com aviso de consentimento + link da política; envio do lead não bloqueia mais o WhatsApp (fetch keepalive em background); página /privacidade publicada e linkada no rodapé; /privacidade no sitemap.
- Conteúdo (PR3): provas de clientes publicadas no site com fonte e data (GymFitness 65 alunos ativos; Jumper For Man 1.360 variações em 3 marketplaces) e status honesto nos cases (Rota Fácil = Proposta, Rancho da Ilha = Protótipo).
- Logos com transparência (PR2): `logo-dark.png` (azul para fundos escuros), `logo-slate.png` (slate empilhado para fundos claros), `logo-icon.png` (transparente). Originais em backup fora do repo.
- Preços fora do site (orçamento personalizado no WhatsApp).
- PT-BR em toda UI, sem travessão.
- SBC Digital fora do portfólio até ok explícito (vertical de apostas).
- Surprise Kids fora até existirem imagens.

## Decisões com o Vinicius (07/11/2026)
- Sem preço em página nenhuma (B2B e site): "orçamento pelo WhatsApp" em tudo. TODO: /pessoal (currículo, Quadro Netflix) decidir se usa "a partir de R$ X" (converte melhor em pessoa física).
- Cases com status honesto: RotaFácil e Rancho da Ilha = proposta/protótipo (não "em operação").
- Métricas autorizadas para publicar: GymFitness ~65 alunos ativos; Jumper For Man 1.360 variações no ERP + 3 marketplaces. Guardar em arquivo de dados com fonte e data de atualização (updatedAt).
- JSON-LD: sem aggregateRating e sem avaliações enquanto não existirem depoimentos reais.
- E-mail contato: manter Gmail por ora (TODO caixa no domínio no futuro).
- Visual "tudo claro" (base clara, azul só em CTAs), MAS capas e blocos de destaque podem manter o escuro do portfólio se o checkpoint de prints priorizar a identidade única. Checkpoint de prints antes de cada merge visual é obrigatório.
- LGPD (PR5): captura de lead antes do WhatsApp exige aviso de consentimento junto ao botão + página curta de privacidade; a chamada do Supabase não pode bloquear o redirect (sendBeacon/keepalive/fetch background).
- Imagens (PR1): limitar origem em 1600–2000 px máx, converter para webp/avif e mover originais para fora de `public/` (backup). `sizes`+`deviceSizes` sozinhos não resolvem.
- Sitemap expandido entra no PR1 (não no PR4).
- SBC Digital já decidido fora do portfólio; surtiu efeito (v26 no ar).
