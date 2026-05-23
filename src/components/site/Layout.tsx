import { Link } from "@tanstack/react-router";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/contact";
import { STUDIO_NAME, STUDIO_SHORT } from "@/lib/site";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/game", label: "Jogo" },
  { to: "/privacy", label: "Privacidade" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link to="/" className="group flex items-center gap-2.5">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-sm"
            aria-hidden
          >
            {STUDIO_SHORT}
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground group-hover:text-primary sm:text-base">
            {STUDIO_NAME}
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Principal">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:px-3 sm:text-sm [&.active]:bg-accent [&.active]:text-foreground"
              activeProps={{ className: "active" }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-foreground">{STUDIO_NAME}</p>
            <p className="mt-1 text-sm text-muted-foreground">Indie Game Studio · Jogos mobile</p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Rodapé">
            <Link to="/game" className="text-muted-foreground hover:text-foreground">
              Illuminati Control Game
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
              Política de Privacidade
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {CONTACT_EMAIL}
            </a>
            <a href={CONTACT_PHONE_TEL} className="text-muted-foreground hover:text-foreground">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </nav>
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground sm:text-left">
          © {year} {STUDIO_NAME}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
