import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma avaliação com o Dr. Igor Lopardi.";

export const WHATSAPP_URL = `https://wa.me/5527999552299?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
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
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as ElementType;
  return (
    <Comp
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

/** Moldura padronizada para fotografia clínica — mesmo ratio, radius e tratamento. */
export function ClinicalFrame({
  src,
  alt,
  ratio = "4 / 5",
  className = "",
  objectPosition = "center",
  fit = "cover",
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  objectPosition?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <div className={`frame ${className}`} style={{ aspectRatio: ratio }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="frame-img"
        style={{ objectPosition, objectFit: fit }}
      />
    </div>
  );
}

