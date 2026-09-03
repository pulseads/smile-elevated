import { useEffect, useState } from "react";
import { CtaPrimary, WHATSAPP_URL } from "./primitives";

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
        scrolled || open
          ? "border-b border-[color-mix(in_oklch,var(--color-primary)_10%,transparent)] bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-500 ${
          scrolled ? "h-[66px]" : "h-[92px]"
        }`}
      >
        <a
          href="#inicio"
          className="flex min-w-0 flex-col leading-none"
          aria-label="Dr. Igor Lopardi — início"
        >
          <span
            className={`truncate font-bold tracking-[-0.02em] text-primary transition-all duration-500 ${
              scrolled ? "text-[16px]" : "text-[18px]"
            }`}
          >
            Dr. Igor Lopardi
          </span>
          <span className="mt-1.5 truncate text-[10px] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
            Cirurgião-Dentista
          </span>
        </a>

        <div className="flex items-center gap-8">
          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative inline-flex items-center py-2 text-[14px] font-medium text-foreground/75 transition-colors hover:text-primary"
                  >
                    {item.label}
                    <span className="absolute bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <CtaPrimary className="!min-h-[46px] !px-6 !text-[14px]">Agendar avaliação</CtaPrimary>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary !min-h-[44px] !px-5 !text-[14px]"
            >
              Agendar
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                {open ? (
                  <path
                    d="M4 4l12 12M16 4L4 16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    fill="none"
                  />
                ) : (
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" fill="none" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`grid overflow-hidden bg-background/95 backdrop-blur-xl transition-[grid-template-rows,opacity] duration-400 lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Navegação mobile" className="container-page overflow-hidden">
          <ul className="flex flex-col divide-y divide-[color-mix(in_oklch,var(--color-primary)_8%,transparent)] py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[56px] items-center justify-between text-[17px] font-medium text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-muted-foreground">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-2 pb-7">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="btn-base btn-primary w-full"
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
