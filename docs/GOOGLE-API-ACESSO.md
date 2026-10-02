# Passo a passo: dar acesso de API do Google ao OpenCode

Objetivo: gerar `client_id`, `client_secret` e `refresh_token` para que eu possa
verificar o site, enviar o sitemap e ler os relatorios de busca do Search Console
sem depender de voce toda vez.

Tempo: ~5 minutos. Tudo com a conta `i9base.tech@gmail.com`.

---

## PARTE 1 - Criar o projeto e as APIs no Google Cloud

1. Abra https://console.cloud.google.com/ e entre com `i9base.tech@gmail.com`
2. No topo, clique no seletor de projeto e em **Novo projeto**
   - Nome: `i9base-seo`
   - Criar (espere uns segundos e selecione o projeto no topo)
3. Menu lateral: **APIs e servicos > Biblioteca**
   - Busque `Google Search Console API` > **Ativar**
   - Volte a Biblioteca, busque `Site Verification API` > **Ativar**

## PARTE 2 - Tela de consentimento

4. Menu lateral: **APIs e servicos > Tela de permissao OAuth**
   - Tipo de usuario: **Externo** > Criar
   - Nome do app: `i9base SEO`
   - E-mail de suporte: `i9base.tech@gmail.com`
   - E-mail do desenvolvedor: `i9base.tech@gmail.com`
   - Salvar e continuar
   - Escopos: nao precisa adicionar nada, so **Salvar e continuar**
   - Usuarios de teste: adicione `i9base.tech@gmail.com` > Salvar
5. Ainda na tela de permissao, clique em **Publicar app** (isso evita que o
   acesso expire em 7 dias). Se aparecer aviso de app nao verificado, pode seguir:
   o aviso e para terceiros, nao para voce.

## PARTE 3 - Criar as credenciais

6. Menu lateral: **APIs e servicos > Credenciais**
   - **Criar credenciais > ID do cliente OAuth**
   - Tipo de aplicativo: **App para computador (Desktop)**
   - Nome: `i9base-seo-desktop` > Criar
   - Copie e guarde: **ID do cliente** e **Chave secreta do cliente**

## PARTE 4 - Gerar o refresh token (OAuth Playground)

7. Abra https://developers.google.com/oauthplayground/
8. Clique na engrenagem (canto superior direito)
   - Marque **Use your own OAuth credentials**
   - Cole o Client ID e o Client secret da Parte 3
   - Feche o painel
9. No campo **Step 1**, cole os dois escopos (um por linha ou separados por espaco):
   `https://www.googleapis.com/auth/webmasters`
   `https://www.googleapis.com/auth/siteverification`
10. Clique em **Authorize APIs** > entre com `i9base.tech@gmail.com` > Permitir
    (se aparecer "app nao verificado": Avancado > Acessar i9base SEO)
11. No **Step 2**, clique em **Exchange authorization code for tokens**
12. Copie o valor de **Refresh token**

## PARTE 5 - Me enviar

Cole no chat exatamente estes tres valores:

```
client_id=
client_secret=
refresh_token=
```

---

## O que eu faco com isso

1. Peco o token de verificacao do dominio pela API
2. Adiciono o TXT no DNS da Hostinger (ja tenho acesso)
3. Confirmo a verificacao e crio a propriedade no Search Console
4. Envio o sitemap e o `IndexNow`
5. Leio relatorios de busca e te aviso o que esta performando

## Se preferir o caminho curto (sem API)

Abra https://search.google.com/search-console > **Adicionar propriedade > Dominio**
> digite `i9base.com.br` > copie o TXT que aparecer e me mande.
Eu ponho no DNS e o Google verifica sozinho. A diferenca e que ai eu nao consigo
enviar sitemap nem puxar relatorio por API.
