import { useEffect, useRef, useState, type ReactNode } from "react";

export const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5527999552299&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAacFfi7LI8JzFPXkl0P-7poP3CPHP_ix5uPLnE3yJH6noXIJgoLshSRjDJfdOA_aem_lM6F6foncQsjT89V10o4UQ";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Rua Inácio Higino, 1170 - Praia da Costa, Vila Velha - ES");

export function CtaPrimary({
  children,
  className = "",
  href = WHATSAPP_URL,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`btn-base btn-primary ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function CtaSecondary({
  children,
  className = "",
  href = "#sobre",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`btn-base btn-secondary ${className}`}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

/** Placeholder editorial para fotografias reais ainda não fornecidas. */
export function PhotoPlaceholder({
  label,
  className = "",
  ratio = "4 / 5",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden bg-sage/60 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(120% 90% at 20% 0%, rgba(255,255,255,.85) 0%, rgba(255,255,255,0) 55%), radial-gradient(90% 80% at 100% 100%, rgba(124,177,189,.55) 0%, rgba(124,177,189,0) 60%)",
        }}
      />
      <div className="absolute inset-0 flex items-start p-6">
        <span className="max-w-[26ch] text-[13px] font-medium leading-relaxed text-primary/70">
          {label}
        </span>
      </div>
    </div>
  );
}
