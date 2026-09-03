import { useState } from "react";

const VIDEO_ID = "nul6p4jNyKU";

/**
 * Facade leve para o vídeo do Dr. Igor no YouTube (formato vertical).
 * O iframe só é carregado após o clique, preservando a performance da página.
 */
export function VideoShort({
  className = "",
  ratio = "9 / 16",
  caption = "Assista ao Dr. Igor falando sobre planejamento e cuidado com o sorriso.",
}: {
  className?: string;
  ratio?: string;
  caption?: string | null;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-primary shadow-[0_28px_80px_rgba(21,58,58,0.16)] ring-1 ring-[color-mix(in_oklch,var(--color-primary)_12%,transparent)] ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&playsinline=1`}
          title="Vídeo do Dr. Igor Lopardi"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Reproduzir vídeo do Dr. Igor Lopardi"
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <img
            src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt="Dr. Igor Lopardi falando sobre o cuidado com o sorriso"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(21,58,58,.18) 0%, rgba(21,58,58,0) 38%, rgba(21,58,58,.78) 100%)",
            }}
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-[84px] w-[84px] items-center justify-center rounded-full bg-background/94 shadow-[0_18px_44px_rgba(21,58,58,0.3)] transition-transform duration-300 group-hover:scale-[1.06]">
              <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-primary" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          {caption ? (
            <span className="absolute right-7 bottom-7 left-7 text-left text-[14px] leading-[1.55] font-medium text-background">
              {caption}
            </span>
          ) : null}
        </button>
      )}
    </div>
  );
}
