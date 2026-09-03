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
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/92 shadow-[0_8px_30px_rgba(21,58,58,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`container-page flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-[68px]" : "h-[88px]"
        }`}
      >
        <a href="#inicio" className="flex flex-col leading-tight" aria-label="Dr. Igor Lopardi — início">
          <span className="text-[17px] font-bold tracking-tight text-primary">Dr. Igor Lopardi</span>
          <span className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Cirurgião-Dentista
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative text-[15px] font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <CtaPrimary className="!min-h-[48px] !px-6 !text-[15px]">Agendar avaliação</CtaPrimary>
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
            aria-label={open ? "Fechar menu" : "Menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-primary"
          >
            <span className="sr-only">{open ? "Fechar" : "Menu"}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" fill="none" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" fill="none" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav aria-label="Navegação mobile" className="container-page py-6">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[12px] px-3 py-3 text-[17px] font-medium text-foreground transition-colors hover:bg-sage/40"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
