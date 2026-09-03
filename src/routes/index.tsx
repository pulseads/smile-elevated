import { createFileRoute } from "@tanstack/react-router";
import type { MouseEvent } from "react";
import { Header } from "@/components/landing/Header";
import { FaqAccordion } from "@/components/landing/Faq";
import { VideoShort } from "@/components/landing/VideoShort";
import {
  ClinicalFrame,
  CtaPrimary,
  CtaSecondary,
  MAPS_URL,
  Reveal,
  WHATSAPP_URL,
} from "@/components/landing/primitives";
import drIgorPhoto from "@/assets/dr-igor-consultorio.webp.asset.json";
import caso01 from "@/assets/10-facetas-em-resina-arcada-superior.jpg.asset.json";
import caso02 from "@/assets/caso-clinico-estetico-nao-identificado-01.jpg.asset.json";
import caso03 from "@/assets/facetas-em-resina-composta-tecnica-mao-livre.jpg.asset.json";
import caso04 from "@/assets/caso-estetico-com-selecao-de-cor-nao-identificado-03.jpg.asset.json";
import caso05 from "@/assets/caso-clinico-estetico-nao-identificado-02.jpg.asset.json";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=igor+lopardi&oq=igor&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBwgCEAAYjwIyBwgDEAAYjwIyBwgEEAAYjwIyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxMDIyajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0xb83f97e79f6429:0xa9072bdc6936f674,1,,,,";
const INSTAGRAM_URL = "https://www.instagram.com/dentistaigorlopardi/";
const PHONE_DISPLAY = "(27) 99955-2299";
const PHONE_SCHEMA = "+5527999552299";

const CASES = [
  {
    n: "01",
    src: caso01.url,
    alt: "Antes e depois: 10 facetas em resina na arcada superior",
    label: "10 facetas em resina — arcada superior",
  },
  {
    n: "02",
    src: caso03.url,
    alt: "Antes e depois: facetas em resina composta em técnica mão livre",
    label: "Facetas em resina composta — técnica mão livre",
  },
  {
    n: "03",
    src: caso02.url,
    alt: "Antes e depois: fechamento de diastema e harmonização do sorriso",
    label: "Fechamento de diastema e harmonização do sorriso",
  },
  {
    n: "04",
    src: caso04.url,
    alt: "Caso estético com seleção de cor e resultado final do sorriso",
    label: "Caso estético com seleção de cor",
  },
  {
    n: "05",
    src: caso05.url,
    alt: "Antes e depois: reabilitação estética em vista lateral",
    label: "Reabilitação estética — vista lateral",
  },
];

const TITLE = "Dr. Igor Lopardi | Dentista em Vila Velha — ES";
const DESCRIPTION =
  "Odontologia estética e reabilitação oral em Vila Velha — ES. Tratamentos planejados por Dr. Igor Lopardi, cirurgião-dentista na Praia da Costa. Agende sua avaliação.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const TREATMENTS = [
  {
    n: "01",
    title: "ESTÉTICA DO SORRISO",
    desc: "Para quem deseja melhorar a aparência dos dentes, corrigir pequenas alterações e conquistar um sorriso mais harmônico.",
    tags: "Clareamento • Restaurações estéticas • Tratamentos estéticos",
    cta: "CONHECER ESTÉTICA",
    image: caso01.url,
    imageAlt: "Resultado estético do sorriso com facetas em resina",
    span: true,
  },
  {
    n: "02",
    title: "REABILITAÇÃO ORAL",
    desc: "Para recuperar dentes comprometidos e devolver ao sorriso mais equilíbrio, conforto e função.",
    tags: "Planejamento reabilitador • Recuperação funcional • Reabilitação estética",
    cta: "CONHECER REABILITAÇÃO",
    image: caso05.url,
    imageAlt: "Reabilitação estética do sorriso em vista lateral",
    span: false,
  },
  {
    n: "03",
    title: "PRÓTESES",
    desc: "Soluções planejadas para substituir dentes ausentes ou recuperar dentes comprometidos, buscando devolver estética e função.",
    tags: "Próteses dentárias • Reabilitação protética",
    cta: "CONHECER PRÓTESES",
    image: caso04.url,
    imageAlt: "Seleção de cor durante planejamento estético do sorriso",
    span: false,
  },
  {
    n: "04",
    title: "CLÍNICA GERAL",
    desc: "O cuidado essencial para manter a saúde bucal, tratar problemas e evitar que pequenos sinais se transformem em grandes problemas.",
    tags: "Avaliação • Prevenção • Restaurações • Cuidados gerais",
    cta: "CONHECER TRATAMENTOS",
    image: caso03.url,
    imageAlt: "Detalhe de facetas em resina composta finalizadas",
    span: true,
  },
];

const DIFFERENTIALS = [
  {
    n: "01",
    title: "PLANEJAMENTO INDIVIDUALIZADO",
    desc: "Cada caso começa com uma avaliação para compreender as necessidades e objetivos de cada paciente.",
  },
  {
    n: "02",
    title: "ESTÉTICA COM NATURALIDADE",
    desc: "Um sorriso bonito não precisa parecer artificial. O objetivo é buscar harmonia e equilíbrio.",
  },
  {
    n: "03",
    title: "SAÚDE E FUNÇÃO",
    desc: "A estética é importante, mas um tratamento odontológico também precisa considerar saúde, conforto e função.",
  },
  {
    n: "04",
    title: "ATENDIMENTO HUMANIZADO",
    desc: "Você entende o que está sendo feito, por que está sendo feito e quais são as possibilidades para o seu caso.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "AVALIAÇÃO",
    desc: "Conversamos sobre o que incomoda você, avaliamos sua saúde bucal e entendemos seus objetivos.",
  },
  {
    n: "02",
    title: "PLANEJAMENTO",
    desc: "A partir da avaliação, analisamos as possibilidades e definimos o caminho mais adequado para o seu caso.",
  },
  {
    n: "03",
    title: "TRATAMENTO",
    desc: "Com o planejamento definido, você inicia seu tratamento acompanhando cada etapa do processo.",
  },
];

const TESTIMONIALS = [
  {
    name: "Saionara Herminio",
    quote:
      "Excelente profissional! Super recomendo! O Dr. Igor nos passa uma tranquilidade, segurança muito grande. Só tenho a agradecer por tê-lo como meu dentista.",
  },
  {
    name: "Ricardo Fialho",
    quote:
      "Fui atendido em uma emergência fora da hora. Eram 21h, falei da minha situação. Me atendeu da melhor forma possível. Saí de lá outro, sorrindo e me sentindo muito bem com o ótimo atendimento do Dr. Igor. Obrigado.",
  },
  {
    name: "Lucas Franco",
    quote:
      "Excelente profissional. Consultório com infraestrutura moderna e um trabalho de qualidade ímpar. Recomendo!!!",
  },
  {
    name: "Lucas Lemos",
    quote: "Tratamento perfeito e resultados incríveis, muita qualidade!",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr. Igor Lopardi Leite",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Inácio Higino, 1170",
    addressLocality: "Vila Velha",
    addressRegion: "ES",
    addressCountry: "BR",
  },
  telephone: PHONE_SCHEMA,
  areaServed: "Vila Velha — ES",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "19:00",
    },
  ],
  medicalSpecialty: ["Odontologia estética", "Reabilitação oral", "Próteses", "Clínica geral"],
};

function smoothScrollToSection(e: MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;

  const headerOffset = 96;
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - headerOffset;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetY);
    return;
  }

  const distance = targetY - startY;
  const duration = 900;
  let startTime: number | null = null;

  const step = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutCubic — desacelera suavemente perto do destino
    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />

      <main>
        {/* 01 HERO — composição editorial assimétrica */}
        <section
          id="inicio"
          className="relative overflow-hidden pt-[120px] pb-20 md:pt-[168px] md:pb-28 xl:pt-[196px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-56 -right-40 h-[720px] w-[720px] rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(179,220,194,.7) 0%, rgba(179,220,194,0) 66%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full opacity-50"
            style={{
              background: "radial-gradient(circle, rgba(124,177,189,.35) 0%, rgba(124,177,189,0) 68%)",
            }}
          />

          <div className="container-page relative grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20 xl:gap-24">
            <div className="max-w-[640px]">
              <Reveal>
                <p className="eyebrow-rule">
                  Odontologia estética e reabilitação oral | Vila Velha — ES
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="display-xl mt-7 text-primary">
                  Seu sorriso pode mudar a forma como você se sente.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="body-lg mt-7 text-muted-foreground">
                  Tratamentos odontológicos planejados para cuidar da sua saúde, recuperar sua função
                  e transformar a estética do seu sorriso com naturalidade.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <CtaPrimary>Agendar minha avaliação</CtaPrimary>
                  <CtaSecondary href="#sobre" onClick={(e) => smoothScrollToSection(e, "sobre")}>
                    Conhecer o Dr. Igor
                  </CtaSecondary>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                  <span>CRO-ES 7007</span>
                  <span aria-hidden="true" className="text-primary/30">
                    ·
                  </span>
                  <span>Praia da Costa</span>
                  <span aria-hidden="true" className="text-primary/30">
                    ·
                  </span>
                  <span>Vila Velha</span>
                </p>
              </Reveal>
            </div>

            {/* Fotografia — recorte editorial, não um card retangular */}
            <Reveal delay={140} className="relative lg:pl-6">
              <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -top-6 -right-4 hidden h-24 w-24 rounded-full border border-[color-mix(in_oklch,var(--color-primary)_18%,transparent)] lg:block"
                />
                <div
                  className="relative overflow-hidden bg-sage/40"
                  style={{
                    aspectRatio: "4 / 5",
                    borderRadius: "220px 220px 32px 32px",
                  }}
                >
                  <img
                    src={drIgorPhoto.url}
                    alt="Dr. Igor Lopardi Leite em seu consultório em Vila Velha, ES"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "50% 22%" }}
                  />
                </div>

                <div className="mt-6 flex items-end justify-between gap-6 border-t border-[color-mix(in_oklch,var(--color-primary)_14%,transparent)] pt-6">
                  <div>
                    <p className="text-[16px] font-semibold text-primary">Dr. Igor Lopardi Leite</p>
                    <p className="mt-1 text-[14px] text-muted-foreground">
                      Cirurgião-Dentista • CRO-ES 7007
                    </p>
                  </div>
                  <p className="text-right text-[12px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Praia da Costa
                    <br />
                    Vila Velha — ES
                  </p>
                </div>
                <p className="mt-5 text-[12px] font-semibold tracking-[0.18em] text-accent-foreground/70 uppercase">
                  Estética • Reabilitação Oral • Próteses • Clínica Geral
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 02 CONEXÃO */}
        <section id="conexao" className="section-xy tone-deep relative overflow-hidden">
          <div className="container-page relative grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="display-lg max-w-[18ch]">
                Talvez você não precise apenas de um tratamento.
                <span className="mt-5 block text-sage">
                  Precise voltar a sorrir sem pensar duas vezes.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 text-[18px] leading-[1.7] text-primary-foreground/80">
                <p className="max-w-[56ch] text-[20px] leading-[1.55] text-primary-foreground">
                  Existem situações que vão muito além da aparência.
                </p>
                <div
                  aria-hidden="true"
                  className="h-px w-full max-w-[220px] bg-primary-foreground/20"
                />
                <p className="max-w-[58ch]">
                  Um dente desgastado, um sorriso que já não agrada, dentes ausentes, desconforto ao
                  mastigar ou até mesmo a vontade de esconder o sorriso em fotos podem afetar a forma
                  como você se sente no dia a dia.
                </p>
                <p className="max-w-[58ch]">
                  A odontologia pode ajudar a recuperar muito mais do que dentes.
                </p>
                <p className="max-w-[52ch] text-[20px] leading-[1.5] font-semibold text-primary-foreground">
                  Pode devolver saúde, função, harmonia e confiança.
                </p>
                <p className="max-w-[58ch]">O primeiro passo é entender o que o seu sorriso precisa.</p>
              </div>
              <div className="pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base bg-sage text-sage-foreground hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
                >
                  Quero cuidar do meu sorriso
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 03 POSICIONAMENTO — manifesto de marca */}
        <section id="posicionamento" className="section-xy relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 -right-32 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[color-mix(in_oklch,var(--color-primary)_10%,transparent)]"
          />
          <div className="container-page relative">
            <Reveal>
              <p className="eyebrow-rule">Posicionamento</p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="display-xl mt-8 max-w-[22ch] text-primary">
                Odontologia pensada para você — e não para um padrão.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
              <Reveal delay={140} className="hidden lg:block">
                <div className="hairline" />
                <p className="mt-6 text-[13px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Dr. Igor Lopardi Leite
                  <br />
                  CRO-ES 7007
                </p>
              </Reveal>
              <Reveal delay={180} className="flex flex-col gap-7 text-[18px] leading-[1.7] text-muted-foreground">
                <p className="max-w-[56ch]">Cada sorriso possui características únicas.</p>
                <p className="max-w-[58ch]">
                  Por isso, o tratamento deve levar em consideração não apenas o que precisa ser
                  corrigido, mas também a sua anatomia, suas necessidades, seus objetivos e o
                  resultado que você deseja alcançar.
                </p>
                <p className="max-w-[58ch]">
                  No consultório do Dr. Igor Lopardi, o cuidado começa com uma avaliação
                  individualizada para entender o seu caso e definir as possibilidades de tratamento.
                </p>
                <p className="mt-2 max-w-[40ch] border-l-2 border-sage pl-7 text-[22px] leading-[1.4] font-semibold text-primary md:text-[26px]">
                  Porque um bom resultado não começa no procedimento. Começa no planejamento.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 04 TRATAMENTOS — cards editoriais */}
        <section id="tratamentos" className="section-xy bg-surface">
          <div className="container-page">
            <Reveal className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
              <div>
                <p className="eyebrow-rule">Tratamentos</p>
                <h2 className="display-lg mt-7 max-w-[18ch] text-primary">
                  O cuidado que o seu sorriso precisa, em diferentes momentos da sua vida.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-16 grid gap-6 md:grid-cols-6 lg:gap-8">
              {TREATMENTS.map((t, i) => (
                <Reveal
                  as="li"
                  key={t.title}
                  delay={i * 80}
                  className={t.span ? "md:col-span-4" : "md:col-span-2"}
                >
                  <article className="panel flex h-full flex-col overflow-hidden bg-background">
                    <div
                      className="frame !rounded-none !border-0"
                      style={{ aspectRatio: t.span ? "16 / 9" : "4 / 3" }}
                    >
                      <img
                        src={t.image}
                        alt={t.imageAlt}
                        loading="lazy"
                        className="frame-img"
                        style={{ objectPosition: "center" }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-5 p-7 md:p-9">
                      <div className="flex items-baseline gap-5">
                        <span aria-hidden="true" className="num-index">
                          {t.n}
                        </span>
                        <h3 className="text-[20px] leading-[1.2] font-semibold tracking-[0.02em] text-primary uppercase md:text-[24px]">
                          {t.title}
                        </h3>
                      </div>
                      <div className="hairline" />
                      <p className="max-w-[52ch] text-[16px] leading-[1.7] text-muted-foreground">
                        {t.desc}
                      </p>
                      <p className="text-[13px] leading-[1.6] font-semibold tracking-[0.04em] text-accent-foreground/70">
                        {t.tags}
                      </p>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow mt-auto w-fit"
                      >
                        {t.cta}
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* 05 DIFERENCIAIS — sistema de princípios */}
        <section id="diferenciais" className="section-xy">
          <div className="container-page">
            <Reveal>
              <p className="eyebrow-rule">Diferenciais</p>
              <h2 className="display-lg mt-7 max-w-[20ch] text-primary">
                Mais do que tratar dentes. Planejar cada detalhe do seu sorriso.
              </h2>
            </Reveal>

            <ul className="mt-16 border-t border-[color-mix(in_oklch,var(--color-primary)_12%,transparent)]">
              {DIFFERENTIALS.map((d, i) => (
                <Reveal
                  as="li"
                  key={d.title}
                  delay={i * 70}
                  className="group border-b border-[color-mix(in_oklch,var(--color-primary)_12%,transparent)]"
                >
                  <div className="grid gap-4 py-8 transition-colors duration-300 md:grid-cols-[auto_0.42fr_0.58fr] md:items-baseline md:gap-10 md:py-11">
                    <span
                      aria-hidden="true"
                      className="num-index transition-colors duration-300 group-hover:text-primary/60 md:w-[92px]"
                    >
                      {d.n}
                    </span>
                    <h3 className="text-[16px] leading-[1.3] font-semibold tracking-[0.1em] text-primary uppercase md:text-[18px]">
                      {d.title}
                    </h3>
                    <p className="max-w-[54ch] text-[16px] leading-[1.7] text-muted-foreground">
                      {d.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* 06 VÍDEO + SOBRE */}
        <section id="sobre" className="section-xy bg-sage/30">
          <div className="container-page">
            <div className="grid items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
              <Reveal className="order-2 lg:order-1">
                <div className="mx-auto w-full max-w-[380px] lg:max-w-none">
                  <VideoShort />
                  <p className="mt-5 text-[12px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Vídeo — Dr. Igor Lopardi
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100} className="order-1 lg:order-2">
                <p className="eyebrow-rule">Sobre</p>
                <h2 className="display-lg mt-7 text-primary">Conheça o Dr. Igor Lopardi</h2>
                <h3 className="mt-7 max-w-[30ch] text-[22px] leading-[1.35] font-semibold text-primary/85 md:text-[28px]">
                  Cuidar de um sorriso também é cuidar da forma como uma pessoa se enxerga.
                </h3>
                <div className="mt-7 flex flex-col gap-5 text-[18px] leading-[1.7] text-muted-foreground">
                  <p className="max-w-[58ch]">
                    O Dr. Igor Lopardi Leite é cirurgião-dentista e atua em Vila Velha, oferecendo
                    tratamentos voltados à saúde bucal, estética e reabilitação oral.
                  </p>
                  <p className="max-w-[58ch]">Sua abordagem parte de um princípio simples:</p>
                  <p className="max-w-[48ch] text-[20px] leading-[1.5] font-semibold text-primary">
                    cada paciente merece um tratamento pensado para a sua realidade.
                  </p>
                  <p className="max-w-[58ch]">
                    Mais do que buscar mudanças estéticas, o objetivo é construir um planejamento que
                    faça sentido para cada caso, equilibrando saúde, função, estética e naturalidade.
                  </p>
                </div>

                <ul className="mt-9 flex flex-wrap gap-3">
                  {["CRO-ES 7007", "Vila Velha — ES", "Estética e Reabilitação Oral"].map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[color-mix(in_oklch,var(--color-primary)_16%,transparent)] px-5 py-2.5 text-[12px] font-semibold tracking-[0.14em] text-primary uppercase"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <CtaSecondary href={WHATSAPP_URL}>Conhecer o Dr. Igor</CtaSecondary>
                </div>
                <div className="mt-9 border-t border-[color-mix(in_oklch,var(--color-primary)_14%,transparent)] pt-6">
                  <p className="text-[16px] font-semibold text-primary">Dr. Igor Lopardi Leite</p>
                  <p className="mt-1 text-[14px] text-muted-foreground">CRO-ES 7007</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 07 PROCESSO — jornada visual */}
        <section id="processo" className="section-xy">
          <div className="container-page">
            <Reveal>
              <p className="eyebrow-rule">Processo</p>
              <h2 className="display-lg mt-7 max-w-[20ch] text-primary">
                Seu tratamento começa antes da cadeira odontológica.
              </h2>
            </Reveal>

            <div className="relative mt-16 md:mt-20">
              <div
                aria-hidden="true"
                className="absolute top-[13px] right-0 left-0 hidden h-px bg-[color-mix(in_oklch,var(--color-primary)_14%,transparent)] md:block"
              />
              <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
                {STEPS.map((s, i) => (
                  <Reveal as="li" key={s.n} delay={i * 110} className="group relative">
                    <div
                      aria-hidden="true"
                      className="absolute top-0 bottom-0 left-[13px] w-px bg-[color-mix(in_oklch,var(--color-primary)_14%,transparent)] md:hidden"
                    />
                    <div className="relative flex gap-6 md:block">
                      <span
                        aria-hidden="true"
                        className="relative z-10 mt-0 grid h-[27px] w-[27px] shrink-0 place-items-center rounded-full border border-[color-mix(in_oklch,var(--color-primary)_25%,transparent)] bg-background transition-colors duration-300 group-hover:bg-sage"
                      >
                        <span className="h-[7px] w-[7px] rounded-full bg-primary" />
                      </span>
                      <div className="pb-2 md:pt-9">
                        <p className="num-index !text-[28px] group-hover:!text-primary/60 md:!text-[34px]">
                          {s.n}
                        </p>
                        <h3 className="mt-4 text-[19px] font-semibold tracking-[0.08em] text-primary uppercase">
                          {s.title}
                        </h3>
                        <p className="mt-4 max-w-[42ch] text-[16px] leading-[1.7] text-muted-foreground">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

            <Reveal delay={120} className="mt-14">
              <CtaPrimary>Agendar minha avaliação</CtaPrimary>
            </Reveal>
          </div>
        </section>

        {/* 08 PROVA SOCIAL */}
        <section id="depoimentos" className="section-xy bg-surface">
          <div className="container-page">
            <Reveal>
              <p className="eyebrow-rule">Prova social</p>
              <h2 className="display-lg mt-7 max-w-[22ch] text-primary">
                Quem cuida do sorriso também transforma a forma de viver cada momento.
              </h2>
            </Reveal>

            <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
              {TESTIMONIALS.map((t, i) => (
                <Reveal as="li" key={t.name} delay={i * 80}>
                  <figure className="flex h-full flex-col justify-between gap-8 rounded-[28px] border border-[color-mix(in_oklch,var(--color-primary)_10%,transparent)] bg-background p-8 transition-colors duration-300 hover:border-[color-mix(in_oklch,var(--color-primary)_20%,transparent)] md:p-10">
                    <blockquote className="max-w-[46ch] text-[18px] leading-[1.6] font-medium text-primary md:text-[19px]">
                      <span aria-hidden="true" className="mr-1 text-sage">
                        “
                      </span>
                      {t.quote}
                      <span aria-hidden="true" className="text-sage">
                        ”
                      </span>
                    </blockquote>
                    <figcaption className="flex items-center gap-4 border-t border-[color-mix(in_oklch,var(--color-primary)_10%,transparent)] pt-6 text-[14px] font-semibold tracking-[0.06em] text-primary">
                      <span aria-hidden="true" className="h-8 w-px bg-sage" />
                      {t.name}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* 09 CASOS REAIS — portfólio clínico */}
        <section id="casos" className="section-xy">
          <div className="container-page">
            <Reveal className="grid gap-8 lg:grid-cols-[0.5fr_0.5fr] lg:items-end">
              <div>
                <p className="eyebrow-rule">Casos reais</p>
                <h3 className="display-md mt-7 max-w-[24ch] text-primary">
                  Resultados planejados, executados e acompanhados de perto.
                </h3>
              </div>
              <p className="text-[13px] font-semibold tracking-[0.16em] text-muted-foreground uppercase lg:text-right">
                {CASES.length} casos · Estética e reabilitação
              </p>
            </Reveal>

            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
              {CASES.map((c, i) => (
                <Reveal
                  as="li"
                  key={c.src}
                  delay={i * 70}
                  className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
                >
                  <figure className="panel group h-full overflow-hidden bg-background">
                    <ClinicalFrame
                      src={c.src}
                      alt={c.alt}
                      ratio={i < 2 ? "4 / 3" : "4 / 5"}
                      className="!rounded-none !border-0"
                    />
                    <figcaption className="flex items-baseline gap-4 p-6">
                      <span
                        aria-hidden="true"
                        className="text-[12px] font-bold tracking-[0.16em] text-primary/35"
                      >
                        CASO {c.n}
                      </span>
                      <span className="text-[14px] leading-[1.5] font-semibold text-primary">
                        {c.label}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>

            <Reveal
              delay={120}
              className="mt-14 flex flex-col gap-8 border-t border-[color-mix(in_oklch,var(--color-primary)_12%,transparent)] pt-10 md:flex-row md:items-center md:justify-between"
            >
              <h3 className="max-w-[32ch] text-[22px] leading-[1.35] font-semibold text-primary md:text-[26px]">
                Resultados que você pode conferir por quem viveu a experiência.
              </h3>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CtaSecondary href={GOOGLE_REVIEWS_URL}>Ver mais depoimentos</CtaSecondary>
                <CtaSecondary href={INSTAGRAM_URL}>Ver resultados</CtaSecondary>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 10 FAQ */}
        <section id="faq" className="section-xy bg-surface">
          <div className="container-page grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow-rule">FAQ</p>
              <h2 className="display-lg mt-7 text-primary">Ainda tem dúvidas?</h2>
              <div className="mt-9 hidden lg:block">
                <CtaPrimary>Falar com a clínica</CtaPrimary>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <FaqAccordion />
              <div className="mt-10 lg:hidden">
                <CtaPrimary className="w-full sm:w-auto">Falar com a clínica</CtaPrimary>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 11 CTA FINAL */}
        <section id="agendar" className="section-xy tone-deep relative overflow-hidden">
          <div className="container-page relative max-w-[900px] text-center">
            <Reveal>
              <h2 className="display-xl mx-auto max-w-[24ch]">
                Está na hora de cuidar do sorriso que você vem adiando.
              </h2>
            </Reveal>
            <Reveal delay={100} className="mx-auto mt-10 flex max-w-[60ch] flex-col gap-4 text-[18px] leading-[1.7] text-primary-foreground/80">
              <p>Seu sorriso merece mais do que uma solução genérica.</p>
              <p>Merece avaliação, planejamento e um tratamento pensado para você.</p>
              <p className="text-[20px] font-semibold text-sage">
                Agende sua avaliação com o Dr. Igor Lopardi.
              </p>
            </Reveal>
            <Reveal delay={180} className="mt-12 flex flex-col items-center gap-7">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base w-full max-w-[420px] bg-sage !text-[17px] text-sage-foreground hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.2)] sm:w-auto sm:px-12"
              >
                Agendar minha avaliação
              </a>
              <p className="text-[14px] text-primary-foreground/70">
                Atendimento odontológico em Vila Velha — ES.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 12 LOCALIZAÇÃO */}
        <section id="contato" className="section-xy">
          <div className="container-page grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow-rule">Localização</p>
              <h2 className="display-lg mt-7 text-primary">Estamos em Vila Velha.</h2>

              <dl className="mt-12 border-t border-[color-mix(in_oklch,var(--color-primary)_12%,transparent)]">
                <div className="grid gap-2 border-b border-[color-mix(in_oklch,var(--color-primary)_12%,transparent)] py-7 md:grid-cols-[150px_1fr] md:gap-8">
                  <dt className="text-[12px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    Endereço
                  </dt>
                  <dd>
                    <p className="text-[18px] font-semibold text-primary">Rua Inácio Higino, 1170</p>
                    <p className="mt-1 text-[16px] text-muted-foreground">
                      Praia da Costa — Vila Velha/ES
                    </p>
                  </dd>
                </div>
                <div className="grid gap-2 border-b border-[color-mix(in_oklch,var(--color-primary)_12%,transparent)] py-7 md:grid-cols-[150px_1fr] md:gap-8">
                  <dt className="text-[12px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    WhatsApp
                  </dt>
                  <dd>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center text-[18px] font-semibold text-primary transition-colors hover:text-primary/70"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div className="grid gap-2 border-b border-[color-mix(in_oklch,var(--color-primary)_12%,transparent)] py-7 md:grid-cols-[150px_1fr] md:gap-8">
                  <dt className="text-[12px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    Horário
                  </dt>
                  <dd>
                    <p className="text-[18px] font-semibold text-primary">Segunda a sexta</p>
                    <p className="mt-1 text-[16px] text-muted-foreground">14h às 19h</p>
                  </dd>
                </div>
              </dl>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <CtaSecondary href={MAPS_URL}>Como chegar</CtaSecondary>
                <CtaPrimary>Falar no WhatsApp</CtaPrimary>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="overflow-hidden rounded-[28px] border border-[color-mix(in_oklch,var(--color-primary)_10%,transparent)] shadow-[0_18px_50px_rgba(21,58,58,0.08)]">
                <iframe
                  title="Mapa do consultório na Praia da Costa, Vila Velha — ES"
                  src="https://www.google.com/maps?q=Rua%20In%C3%A1cio%20Higino%2C%201170%20-%20Praia%20da%20Costa%2C%20Vila%20Velha%20-%20ES&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[360px] w-full border-0 md:h-[520px]"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* 13 FOOTER */}
      <footer className="tone-deep relative overflow-hidden">
        <div className="container-page relative grid gap-10 py-16 md:grid-cols-3 md:py-20">
          <div>
            <p className="text-[20px] font-bold tracking-[-0.02em]">Dr. Igor Lopardi Leite</p>
            <p className="mt-2 text-[13px] font-semibold tracking-[0.14em] text-primary-foreground/60 uppercase">
              Cirurgião-Dentista • CRO-ES 7007
            </p>
          </div>
          <div className="text-[15px] leading-[1.8] text-primary-foreground/80">
            <p>Rua Inácio Higino, 1170 — Praia da Costa</p>
            <p>Vila Velha — ES</p>
            <p className="mt-3">WhatsApp: {PHONE_DISPLAY}</p>
            <p>Segunda a sexta, das 14h às 19h.</p>
          </div>
          <nav aria-label="Links de contato">
            <ul className="flex flex-col gap-2 text-[15px] font-semibold">
              {[
                { label: "Instagram", href: INSTAGRAM_URL },
                { label: "WhatsApp", href: WHATSAPP_URL },
                { label: "Localização", href: MAPS_URL },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    className="inline-flex min-h-[44px] items-center gap-2 transition-colors hover:text-sage"
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}
                    <span aria-hidden="true" className="text-primary-foreground/40">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="relative border-t border-white/10">
          <div className="container-page flex flex-col gap-3 py-6 text-[13px] text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Dr. Igor Lopardi. Todos os direitos reservados.</p>
            <a
              href="#inicio"
              className="inline-flex min-h-[44px] items-center transition-colors hover:text-sage"
            >
              Voltar ao topo
            </a>
          </div>
        </div>
      </footer>

      {/* CTA flutuante mobile */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_14px_38px_rgba(21,58,58,0.28)] transition-transform duration-300 hover:-translate-y-0.5 lg:hidden"
        style={{ bottom: "calc(20px + env(safe-area-inset-bottom))" }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 18.06h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.15.82.84-3.07-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.25-8.22 8.25Zm4.52-6.17c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.26 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
        </svg>
      </a>
    </>
  );
}
