import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/contact";
import { PRIVACY_UPDATED, SITE_HOST, STUDIO_NAME } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Política de Privacidade | ${STUDIO_NAME}` },
      {
        name: "description",
        content: `Política de Privacidade da ${STUDIO_NAME} — coleta de dados, AdMob e uso dos aplicativos mobile.`,
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const updated = PRIVACY_UPDATED;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-muted-foreground">Última atualização: {updated}</p>

      <div className="prose-policy mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Introdução</h2>
          <p className="mt-3">
            A <strong className="text-foreground">{STUDIO_NAME}</strong> (“nós”, “nosso”) respeita sua
            privacidade. Esta Política de Privacidade descreve como tratamos informações quando você usa
            nosso site (<strong className="text-foreground">{SITE_HOST}</strong> ou domínios associados) e
            nossos aplicativos mobile, incluindo{" "}
            <strong className="text-foreground">Illuminati Control Game</strong>, disponíveis na Google
            Play.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. Dados que coletamos</h2>
          <p className="mt-3">Podemos coletar ou processar os seguintes tipos de informação:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">Dados técnicos e de uso:</strong> identificadores de
              dispositivo, modelo, sistema operacional, idioma, versão do app, eventos de jogo e dados de
              diagnóstico (crashes, desempenho).
            </li>
            <li>
              <strong className="text-foreground">Dados de publicidade:</strong> quando exibimos anúncios
              via Google AdMob, o SDK pode coletar dados como ID de publicidade (Advertising ID), endereço
              IP aproximado, interações com anúncios e informações necessárias para medição, fraude e
              personalização conforme suas preferências no dispositivo.
            </li>
            <li>
              <strong className="text-foreground">Contato:</strong> se você nos enviar e-mail para{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-foreground underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              , armazenamos o conteúdo da mensagem e seu endereço de e-mail para responder.
            </li>
          </ul>
          <p className="mt-3">
            Não vendemos seus dados pessoais. Não solicitamos login obrigatório em nossos jogos para jogar
            a experiência básica.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. Anúncios (Google AdMob)</h2>
          <p className="mt-3">
            Nossos aplicativos podem exibir anúncios fornecidos pelo{" "}
            <strong className="text-foreground">Google AdMob</strong>. O AdMob e parceiros de publicidade
            podem usar cookies, identificadores de dispositivo e tecnologias similares para exibir,
            medir e personalizar anúncios, sujeito às configurações do seu dispositivo e à política do
            Google.
          </p>
          <p className="mt-3">
            Para mais informações sobre como o Google usa dados em apps e sites de parceiros, consulte:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline-offset-2 hover:underline"
            >
              Como o Google usa informações de sites ou apps que usam nossos serviços
            </a>
            .
          </p>
          <p className="mt-3">
            Você pode limitar anúncios personalizados nas configurações de anúncios do Android ou redefinir
            seu ID de publicidade nas preferências do sistema.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. Finalidade do tratamento</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Operar, manter e melhorar nossos jogos e site;</li>
            <li>Exibir anúncios e analisar desempenho de monetização;</li>
            <li>Prevenir fraudes, abusos e erros técnicos;</li>
            <li>Cumprir obrigações legais e requisitos da Google Play Console.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. Compartilhamento com terceiros</h2>
          <p className="mt-3">
            Podemos compartilhar dados com prestadores de serviços que nos auxiliam na operação do app e
            do site, incluindo <strong className="text-foreground">Google LLC</strong> (Google Play,
            AdMob, Firebase/analytics quando aplicável), hospedagem e ferramentas de análise, apenas na
            medida necessária e sob contratos ou políticas de privacidade desses provedores.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. Retenção e segurança</h2>
          <p className="mt-3">
            Mantemos dados apenas pelo tempo necessário para as finalidades descritas ou conforme exigido
            por lei. Adotamos medidas técnicas e organizacionais razoáveis para proteger informações, sem
            garantir segurança absoluta em ambientes online.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">7. Crianças</h2>
          <p className="mt-3">
            Nossos jogos não são direcionados a menores de 13 anos. Se acreditarmos que coletamos dados de
            uma criança sem consentimento parental adequado, tomaremos medidas para excluir essas
            informações. Pais ou responsáveis podem contactar-nos pelo e-mail abaixo.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">8. Seus direitos</h2>
          <p className="mt-3">
            Dependendo da sua região (por exemplo, LGPD no Brasil ou GDPR na UE), você pode solicitar
            acesso, correção, exclusão ou oposição ao tratamento de dados pessoais. Envie pedidos para{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-foreground underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            . Responderemos em prazo razoável.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">9. Alterações</h2>
          <p className="mt-3">
            Podemos atualizar esta política periodicamente. A data no topo indica a versão vigente.
            Alterações relevantes podem ser comunicadas na loja ou no app.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">10. Contato</h2>
          <p className="mt-3">
            <strong className="text-foreground">{STUDIO_NAME}</strong>
            <br />
            E-mail:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-foreground underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            <br />
            Telefone:{" "}
            <a
              href={CONTACT_PHONE_TEL}
              className="text-foreground underline-offset-2 hover:underline"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </section>
      </div>

      <p className="mt-10">
        <Link
          to="/"
          className="text-sm font-medium text-primary underline-offset-2 hover:underline"
        >
          ← Voltar ao início
        </Link>
      </p>
    </article>
  );
}
