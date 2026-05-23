import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Black Eye Games | Indie Game Studio" },
      {
        name: "description",
        content:
          "Black Eye Games — estúdio indie focado em jogos mobile. Conheça Illuminati Control Game.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,oklch(0.35_0.08_265_/_0.45),transparent)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Indie Game Studio</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Black Eye Games
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Estúdio independente focado em jogos mobile — experiências rápidas, viciantes e feitas para
            jogar em qualquer lugar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/game"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
            >
              Conhecer o jogo
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Destaque</h2>
            <p className="mt-1 text-muted-foreground">Nosso título em foco na Google Play</p>
          </div>
          <Link
            to="/game"
            className="text-sm font-medium text-primary underline-offset-2 hover:underline"
          >
            Ver detalhes →
          </Link>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col justify-center bg-primary/10 p-8 sm:p-10 lg:min-h-[220px]">
              <span className="text-5xl font-black tracking-tighter text-primary/80 sm:text-6xl" aria-hidden>
                IC
              </span>
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">Illuminati Control Game</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Estratégia e arcade no bolso: controle a rede, evolua seu poder e enfrente desafios em
                partidas intensas para Android.
              </p>
              <Link
                to="/game"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Página do jogo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Contato</h2>
          <p className="mt-2 text-muted-foreground">
            Parcerias, imprensa, suporte ou dúvidas sobre privacidade e anúncios.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-lg font-medium text-primary underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={CONTACT_PHONE_TEL}
              className="text-lg font-medium text-primary underline-offset-2 hover:underline"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
