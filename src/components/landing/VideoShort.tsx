import { useState } from "react";

const VIDEO_ID = "nul6p4jNyKU";

/**
 * Facade leve para o vídeo do Dr. Igor no YouTube (formato vertical).
 * O iframe só é carregado após o clique, preservando a performance da página.
 */
export function VideoShort({ className = "" }: { className?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-[32px] bg-primary shadow-[0_20px_60px_rgba(21,58,58,0.10)] ${className}`}
      style={{ aspectRatio: "9 / 16" }}
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
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(21,58,58,0) 40%, rgba(21,58,58,.72) 100%)",
            }}
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-background/92 shadow-[0_14px_38px_rgba(21,58,58,0.28)] transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-primary" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute right-6 bottom-6 left-6 text-left text-[14px] leading-[1.5] font-medium text-background">
            Assista ao Dr. Igor falando sobre planejamento e cuidado com o sorriso.
          </span>
        </button>
      )}
    </div>
  );
}
