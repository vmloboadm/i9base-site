import type { Metadata } from "next";
import { BackToTop, Footer, FloatWhats, Header } from "@/components/chrome";
import { CONTACT_EMAIL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Política de privacidade · i9BASE",
  description:
    "Como a i9BASE trata nome, WhatsApp e dados de navegação usados no site e no diagnóstico gratuito.",
  alternates: { canonical: "https://i9base.com.br/privacidade" },
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-i9-paper">
        <div className="mx-auto max-w-3xl px-4 pb-14 pt-28 sm:px-6 sm:pt-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-i9-blue">
            Privacidade
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-i9-ink sm:text-4xl">
            Como tratamos seus dados
          </h1>
          <p className="mt-3 text-i9-slate">
            Versão curta e direta: usamos o mínimo de dados para responder o que
            você pediu, não vendemos nada e você pode pedir a exclusão quando
            quiser. Última atualização: novembro de 2026.
          </p>

          <div className="mt-8 space-y-8 rounded-sm border border-i9-line bg-i9-paper2 p-6 text-sm leading-relaxed text-slate-700 sm:p-8">
            <section>
              <h2 className="font-display text-lg font-bold text-i9-ink">
                1. O que coletamos
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong>Diagnóstico gratuito:</strong> nome e WhatsApp que você
                  digita, mais as respostas do quiz.
                </li>
                <li>
                  <strong>Navegação:</strong> páginas vistas, cliques em botões e
                  origem da visita (sem dados sensíveis).
                </li>
                <li>
                  <strong>Contato direto:</strong> o que você envia no WhatsApp,
                  Instagram ou e-mail.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-i9-ink">
                2. Para que usamos
              </h2>
              <p className="mt-2">
                Responder seu diagnóstico e seu pedido de orçamento, entender
                quais páginas funcionam e melhorar o site. Não usamos seus dados
                para spam nem para venda de terceiros.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-i9-ink">
                3. Com quem compartilhamos
              </h2>
              <p className="mt-2">
                Apenas com as ferramentas que operam o atendimento: WhatsApp
                (Meta) quando você inicia a conversa, a plataforma de CRM usada
                para registrar o contato e o serviço de hospedagem do site. Ficam
                todas sob contrato e obrigação de sigilo.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-i9-ink">
                4. Por quanto tempo guardamos
              </h2>
              <p className="mt-2">
                Dados de contato ficam guardados enquanto a conversa e o
                relacionamento fizerem sentido comercial, e você pode pedir a
                exclusão antes disso. Dados de navegação são agregados.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-i9-ink">
                5. Seus direitos (LGPD)
              </h2>
              <p className="mt-2">
                Você pode pedir confirmação, acesso, correção ou exclusão dos seus
                dados, além de revogar o consentimento, escrevendo para{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-i9-blue underline"
                >
                  {CONTACT_EMAIL}
                </a>
                . Respondemos em até 15 dias.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-i9-ink">
                6. Cookies
              </h2>
              <p className="mt-2">
                Usamos apenas o necessário para o site funcionar e para medir
                audiência de forma simples. Não usamos cookies de publicidade.
              </p>
            </section>
          </div>

          <p className="mt-6 text-xs text-i9-slate">
            Dúvida sobre privacidade? Fale com a gente em{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
      <BackToTop />
      <FloatWhats />
    </>
  );
}
