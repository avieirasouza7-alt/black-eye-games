import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/contact";
import { STUDIO_NAME } from "@/lib/site";

/** Substitua pela URL real da listagem na Google Play quando publicar. */
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.blackeyegames.illuminaticontrol";

export const Route = createFileRoute("/game")({
  head: () => ({
    meta: [
      { title: `Illuminati Control Game | ${STUDIO_NAME}` },
      {
        name: "description",
        content: `Illuminati Control Game — jogo mobile de estratégia e arcade da ${STUDIO_NAME}.`,
      },
    ],
  }),
  component: GamePage,
});

function GamePage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm font-medium uppercase tracking-wider text-primary">Jogo mobile</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Illuminati Control Game
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Controle a rede nas sombras. Illuminati Control Game combina estratégia rápida com ação arcade
        em partidas curtas, ideais para jogar no celular — expanda influência, desbloqueie upgrades e
        supere desafios progressivos.
      </p>

      <section className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-foreground">Recursos</h2>
        <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 sm:text-base">
          <li className="flex gap-2">
            <span className="text-primary" aria-hidden>
              •
            </span>
            Gameplay de estratégia e arcade em sessões rápidas
          </li>
          <li className="flex gap-2">
            <span className="text-primary" aria-hidden>
              •
            </span>
            Progressão com desafios e melhorias
          </li>
          <li className="flex gap-2">
            <span className="text-primary" aria-hidden>
              •
            </span>
            Otimizado para dispositivos Android
          </li>
          <li className="flex gap-2">
            <span className="text-primary" aria-hidden>
              •
            </span>
            Desenvolvido por {STUDIO_NAME}
          </li>
        </ul>
      </section>

      <section className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href={GOOGLE_PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
        >
          <GooglePlayIcon />
          Baixar na Google Play
        </a>
        <Link
          to="/privacy"
          className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          Política de Privacidade
        </Link>
      </section>

      <p className="mt-6 text-xs text-muted-foreground">
        Dúvidas ou suporte:{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-foreground underline-offset-2 hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        {" · "}
        <a href={CONTACT_PHONE_TEL} className="text-foreground underline-offset-2 hover:underline">
          {CONTACT_PHONE_DISPLAY}
        </a>
      </p>
    </article>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.004 1.004 0 0 1-.61-.92V2.734a1.004 1.004 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333a1.004 1.004 0 0 1-.445-.106l8.08-8.529zm3.45-3.45l2.548 1.472a1.004 1.004 0 0 1 0 1.74l-2.548 1.472-2.648-2.648 2.648-2.036zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 2.658z" />
    </svg>
  );
}
