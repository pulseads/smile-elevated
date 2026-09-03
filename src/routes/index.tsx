import { createFileRoute } from "@tanstack/react-router";
import type { MouseEvent } from "react";
import { Header } from "@/components/landing/Header";
import { FaqAccordion } from "@/components/landing/Faq";
import { VideoShort } from "@/components/landing/VideoShort";
import {
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
  { src: caso01.url, alt: "Antes e depois: 10 facetas em resina na arcada superior", ratio: "4 / 5" as const },
  { src: caso03.url, alt: "Antes e depois: facetas em resina composta em técnica mão livre", ratio: "1 / 1" as const },
  { src: caso02.url, alt: "Antes e depois: fechamento de diastema e harmonização do sorriso", ratio: "1 / 1" as const },
  { src: caso04.url, alt: "Caso estético com seleção de cor e resultado final do sorriso", ratio: "1 / 1" as const },
  { src: caso05.url, alt: "Antes e depois: reabilitação estética em vista lateral", ratio: "1 / 1" as const },
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
    title: "ESTÉTICA DO SORRISO",
    desc: "Para quem deseja melhorar a aparência dos dentes, corrigir pequenas alterações e conquistar um sorriso mais harmônico.",
    tags: "Clareamento • Restaurações estéticas • Tratamentos estéticos",
    cta: "CONHECER ESTÉTICA",
  },
  {
    title: "REABILITAÇÃO ORAL",
    desc: "Para recuperar dentes comprometidos e devolver ao sorriso mais equilíbrio, conforto e função.",
    tags: "Planejamento reabilitador • Recuperação funcional • Reabilitação estética",
    cta: "CONHECER REABILITAÇÃO",
  },
  {
    title: "PRÓTESES",
    desc: "Soluções planejadas para substituir dentes ausentes ou recuperar dentes comprometidos, buscando devolver estética e função.",
    tags: "Próteses dentárias • Reabilitação protética",
    cta: "CONHECER PRÓTESES",
  },
  {
    title: "CLÍNICA GERAL",
    desc: "O cuidado essencial para manter a saúde bucal, tratar problemas e evitar que pequenos sinais se transformem em grandes problemas.",
    tags: "Avaliação • Prevenção • Restaurações • Cuidados gerais",
    cta: "CONHECER TRATAMENTOS",
  },
];

const DIFFERENTIALS = [
  {
    title: "PLANEJAMENTO INDIVIDUALIZADO",
    desc: "Cada caso começa com uma avaliação para compreender as necessidades e objetivos de cada paciente.",
  },
  {
    title: "ESTÉTICA COM NATURALIDADE",
    desc: "Um sorriso bonito não precisa parecer artificial. O objetivo é buscar harmonia e equilíbrio.",
  },
  {
    title: "SAÚDE E FUNÇÃO",
    desc: "A estética é importante, mas um tratamento odontológico também precisa considerar saúde, conforto e função.",
  },
  {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <main>
        {/* 02 HERO */}
        <section id="inicio" className="relative overflow-hidden pt-[112px] pb-16 md:pt-[150px] md:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(179,220,194,.75) 0%, rgba(179,220,194,0) 68%)",
            }}
          />
          <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="eyebrow">
                  Odontologia estética e reabilitação oral | Vila Velha — ES
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-[42px] leading-[1.05] font-bold tracking-[-0.02em] text-primary md:text-[56px] xl:text-[64px]">
                  Seu sorriso pode mudar a forma como você se sente.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-[54ch] text-[18px] leading-[1.6] text-muted-foreground">
                  Tratamentos odontológicos planejados para cuidar da sua saúde, recuperar sua função
                  e transformar a estética do seu sorriso com naturalidade.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <CtaPrimary>Agendar minha avaliação</CtaPrimary>
                  <CtaSecondary href="#sobre" onClick={(e) => smoothScrollToSection(e, "sobre")}>
                    Conhecer o Dr. Igor
                  </CtaSecondary>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8">
                  <div>
                    <p className="text-[16px] font-semibold text-primary">Dr. Igor Lopardi Leite</p>
                    <p className="text-[14px] text-muted-foreground">
                      Cirurgião-Dentista • CRO-ES 7007
                    </p>
                  </div>
                  <p className="text-[13px] font-semibold tracking-[0.12em] text-accent-foreground/70 uppercase">
                    Estética • Reabilitação Oral • Próteses • Clínica Geral
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120} className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(21,58,58,0.10)]">
                <img
                  src={drIgorPhoto.url}
                  alt="Dr. Igor Lopardi Leite em seu consultório em Vila Velha, ES"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "1 / 1" }}
                />
              </div>

              <div className="card-surface absolute -bottom-6 left-4 max-w-[240px] px-6 py-5 md:left-auto md:-left-8">
                <p className="text-[13px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Praia da Costa
                </p>
                <p className="mt-1 text-[15px] font-semibold text-primary">Vila Velha — ES</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 02 CONEXÃO */}
        <section id="conexao" className="section-y bg-primary text-primary-foreground">
          <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <h2 className="text-[32px] leading-[1.15] font-semibold tracking-[-0.01em] md:text-[42px]">
                Talvez você não precise apenas de um tratamento.
                <span className="mt-4 block text-sage">
                  Precise voltar a sorrir sem pensar duas vezes.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="flex flex-col gap-6 text-[18px] leading-[1.6] text-primary-foreground/80">
              <p>Existem situações que vão muito além da aparência.</p>
              <p>
                Um dente desgastado, um sorriso que já não agrada, dentes ausentes, desconforto ao
                mastigar ou até mesmo a vontade de esconder o sorriso em fotos podem afetar a forma
                como você se sente no dia a dia.
              </p>
              <p>A odontologia pode ajudar a recuperar muito mais do que dentes.</p>
              <p className="font-semibold text-primary-foreground">
                Pode devolver saúde, função, harmonia e confiança.
              </p>
              <p>O primeiro passo é entender o que o seu sorriso precisa.</p>
              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base bg-sage text-sage-foreground hover:-translate-y-0.5"
                >
                  Quero cuidar do meu sorriso
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 03 POSICIONAMENTO */}
        <section id="posicionamento" className="section-y">
          <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow">Posicionamento</p>
              <h2 className="mt-5 text-[32px] leading-[1.15] font-semibold tracking-[-0.01em] text-primary md:text-[42px]">
                Odontologia pensada para você — e não para um padrão.
              </h2>
            </Reveal>
            <Reveal delay={100} className="flex flex-col gap-6 text-[18px] leading-[1.6] text-muted-foreground">
              <p>Cada sorriso possui características únicas.</p>
              <p>
                Por isso, o tratamento deve levar em consideração não apenas o que precisa ser
                corrigido, mas também a sua anatomia, suas necessidades, seus objetivos e o resultado
                que você deseja alcançar.
              </p>
              <p>
                No consultório do Dr. Igor Lopardi, o cuidado começa com uma avaliação individualizada
                para entender o seu caso e definir as possibilidades de tratamento.
              </p>
              <p className="rounded-[24px] bg-sage/50 p-8 text-[20px] leading-[1.4] font-semibold text-primary">
                Porque um bom resultado não começa no procedimento. Começa no planejamento.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 04 TRATAMENTOS */}
        <section id="tratamentos" className="section-y bg-surface">
          <div className="container-page">
            <Reveal>
              <p className="eyebrow">Tratamentos</p>
              <h2 className="mt-5 max-w-[20ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.01em] text-primary md:text-[42px]">
                O cuidado que o seu sorriso precisa, em diferentes momentos da sua vida.
              </h2>
            </Reveal>

            <ul className="mt-14 grid gap-6 md:grid-cols-2">
              {TREATMENTS.map((t, i) => (
                <Reveal as="li" key={t.title} delay={i * 90}>
                  <article className="card-surface flex h-full flex-col gap-5 bg-background p-8 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(21,58,58,0.09)]">
                    <span
                      aria-hidden="true"
                      className="h-10 w-10 rounded-full bg-sage/70 ring-8 ring-sage/20"
                    />
                    <h3 className="text-[22px] font-semibold tracking-[-0.01em] text-primary md:text-[26px]">
                      {t.title}
                    </h3>
                    <p className="text-[16px] leading-[1.6] text-muted-foreground">{t.desc}</p>
                    <p className="text-[14px] font-medium text-accent-foreground/75">{t.tags}</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-auto inline-flex w-fit items-center gap-2 pt-2 text-[14px] font-semibold tracking-[0.1em] text-primary uppercase"
                    >
                      {t.cta}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* 05 DIFERENCIAL */}
        <section id="diferenciais" className="section-y">
          <div className="container-page">
            <Reveal>
              <p className="eyebrow">Diferenciais</p>
              <h2 className="mt-5 max-w-[22ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.01em] text-primary md:text-[42px]">
                Mais do que tratar dentes. Planejar cada detalhe do seu sorriso.
              </h2>
            </Reveal>
            <ul className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
              {DIFFERENTIALS.map((d, i) => (
                <Reveal as="li" key={d.title} delay={i * 80} className="border-t border-border pt-6">
                  <h3 className="text-[15px] leading-[1.3] font-semibold tracking-[0.08em] text-primary uppercase">
                    {d.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-[1.6] text-muted-foreground">{d.desc}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* 06 SOBRE */}
        <section id="sobre" className="section-y bg-sage/35">
          <div className="container-page grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <VideoShort />
              <p className="mt-4 text-[13px] font-medium tracking-[0.06em] text-muted-foreground">
                Vídeo — Dr. Igor Lopardi
              </p>
            </Reveal>

            <Reveal delay={100} className="order-1 lg:order-2">
              <p className="eyebrow">Sobre</p>
              <h2 className="mt-5 text-[32px] leading-[1.15] font-semibold tracking-[-0.01em] text-primary md:text-[42px]">
                Conheça o Dr. Igor Lopardi
              </h2>
              <h3 className="mt-6 text-[22px] leading-[1.35] font-semibold text-primary/85 md:text-[26px]">
                Cuidar de um sorriso também é cuidar da forma como uma pessoa se enxerga.
              </h3>
              <div className="mt-6 flex flex-col gap-5 text-[18px] leading-[1.6] text-muted-foreground">
                <p>
                  O Dr. Igor Lopardi Leite é cirurgião-dentista e atua em Vila Velha, oferecendo
                  tratamentos voltados à saúde bucal, estética e reabilitação oral.
                </p>
                <p>Sua abordagem parte de um princípio simples:</p>
                <p className="font-semibold text-primary">
                  cada paciente merece um tratamento pensado para a sua realidade.
                </p>
                <p>
                  Mais do que buscar mudanças estéticas, o objetivo é construir um planejamento que
                  faça sentido para cada caso, equilibrando saúde, função, estética e naturalidade.
                </p>
              </div>
              <div className="mt-9">
                <CtaSecondary href={WHATSAPP_URL}>Conhecer o Dr. Igor</CtaSecondary>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-[16px] font-semibold text-primary">Dr. Igor Lopardi Leite</p>
                <p className="text-[14px] text-muted-foreground">CRO-ES 7007</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 07 PROCESSO */}
        <section id="processo" className="section-y">
          <div className="container-page">
            <Reveal>
              <p className="eyebrow">Processo</p>
              <h2 className="mt-5 max-w-[22ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.01em] text-primary md:text-[42px]">
                Seu tratamento começa antes da cadeira odontológica.
              </h2>
            </Reveal>
            <ol className="mt-14 grid gap-6 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 100}>
                  <div className="card-surface h-full p-8">
                    <span className="text-[13px] font-semibold tracking-[0.14em] text-accent-foreground/70">
                      {s.n} —
                    </span>
                    <h3 className="mt-3 text-[20px] font-semibold tracking-[0.04em] text-primary uppercase">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[16px] leading-[1.6] text-muted-foreground">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={120} className="mt-12">
              <CtaPrimary>Agendar minha avaliação</CtaPrimary>
            </Reveal>
          </div>
        </section>

        {/* 08 PROVA SOCIAL */}
        <section id="depoimentos" className="section-y bg-surface">
          <div className="container-page">
            <Reveal>
              <p className="eyebrow">Prova social</p>
              <h2 className="mt-5 max-w-[24ch] text-[32px] leading-[1.15] font-semibold tracking-[-0.01em] text-primary md:text-[42px]">
                Quem cuida do sorriso também transforma a forma de viver cada momento.
              </h2>
            </Reveal>
            <ul className="mt-14 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t, i) => (
                <Reveal as="li" key={t.name} delay={i * 90}>
                  <figure className="card-surface flex h-full flex-col justify-between gap-8 bg-background p-8">
                    <blockquote className="text-[18px] leading-[1.55] font-semibold text-primary">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="text-[14px] font-medium text-muted-foreground">
                      — {t.name}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={100} className="mt-16">
              <p className="eyebrow">Casos reais</p>
              <h3 className="mt-4 max-w-[30ch] text-[22px] leading-[1.35] font-semibold text-primary md:text-[26px]">
                Resultados planejados, executados e acompanhados de perto.
              </h3>
            </Reveal>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CASES.map((c, i) => (
                <Reveal as="li" key={c.src} delay={i * 70}>
                  <figure className="overflow-hidden rounded-[24px] border border-border bg-background shadow-[0_4px_20px_rgba(21,58,58,0.05)]">
                    <img
                      src={c.src}
                      alt={c.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ aspectRatio: c.ratio }}
                    />
                  </figure>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120} className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <h3 className="max-w-[34ch] text-[22px] leading-[1.35] font-semibold text-primary">
                Resultados que você pode conferir por quem viveu a experiência.
              </h3>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CtaSecondary href={GOOGLE_REVIEWS_URL}>Ver mais depoimentos</CtaSecondary>
                <CtaSecondary href={INSTAGRAM_URL}>Ver resultados</CtaSecondary>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 09 FAQ */}
        <section id="faq" className="section-y">
          <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-5 text-[32px] leading-[1.15] font-semibold tracking-[-0.01em] text-primary md:text-[42px]">
                Ainda tem dúvidas?
              </h2>
              <div className="mt-8 hidden lg:block">
                <CtaPrimary>Falar com a clínica</CtaPrimary>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <FaqAccordion />
              <div className="mt-8 lg:hidden">
                <CtaPrimary>Falar com a clínica</CtaPrimary>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 10 CTA FINAL */}
        <section id="agendar" className="section-y bg-primary text-primary-foreground">
          <div className="container-page max-w-[860px] text-center">
            <Reveal>
              <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.01em] md:text-[46px]">
                Está na hora de cuidar do sorriso que você vem adiando.
              </h2>
            </Reveal>
            <Reveal delay={100} className="mt-8 flex flex-col gap-4 text-[18px] leading-[1.6] text-primary-foreground/80">
              <p>Seu sorriso merece mais do que uma solução genérica.</p>
              <p>Merece avaliação, planejamento e um tratamento pensado para você.</p>
              <p className="font-semibold text-sage">
                Agende sua avaliação com o Dr. Igor Lopardi.
              </p>
            </Reveal>
            <Reveal delay={180} className="mt-10 flex flex-col items-center gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base bg-sage text-sage-foreground hover:-translate-y-0.5"
              >
                Agendar minha avaliação
              </a>
              <p className="text-[14px] text-primary-foreground/70">
                Atendimento odontológico em Vila Velha — ES.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 11 LOCALIZAÇÃO */}
        <section id="contato" className="section-y">
          <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow">Localização</p>
              <h2 className="mt-5 text-[32px] leading-[1.15] font-semibold tracking-[-0.01em] text-primary md:text-[42px]">
                Estamos em Vila Velha.
              </h2>
              <div className="mt-8 flex flex-col gap-7">
                <div>
                  <p className="text-[18px] font-semibold text-primary">Rua Inácio Higino, 1170</p>
                  <p className="text-[16px] text-muted-foreground">Praia da Costa — Vila Velha/ES</p>
                </div>
                <p className="text-[16px] text-muted-foreground">
                  <span className="font-semibold text-primary">WhatsApp:</span> {PHONE_DISPLAY}
                </p>
                <div>
                  <p className="text-[16px] font-semibold text-primary">Horário de atendimento:</p>
                  <p className="text-[16px] text-muted-foreground">Segunda a sexta</p>
                  <p className="text-[16px] text-muted-foreground">14h às 19h</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <CtaSecondary href={MAPS_URL}>Abrir no mapa</CtaSecondary>
                  <CtaPrimary>Falar no WhatsApp</CtaPrimary>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-[32px] border border-border shadow-[0_8px_30px_rgba(21,58,58,0.06)]">
                <iframe
                  title="Mapa do consultório na Praia da Costa, Vila Velha — ES"
                  src="https://www.google.com/maps?q=Rua%20In%C3%A1cio%20Higino%2C%201170%20-%20Praia%20da%20Costa%2C%20Vila%20Velha%20-%20ES&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[420px] w-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* 12 FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container-page grid gap-10 py-16 md:grid-cols-3">
          <div>
            <p className="text-[18px] font-bold">Dr. Igor Lopardi Leite</p>
            <p className="mt-1 text-[14px] text-primary-foreground/70">
              Cirurgião-Dentista • CRO-ES 7007
            </p>
          </div>
          <div className="text-[15px] leading-[1.7] text-primary-foreground/80">
            <p>Rua Inácio Higino, 1170 — Praia da Costa</p>
            <p>Vila Velha — ES</p>
            <p className="mt-3">WhatsApp: {PHONE_DISPLAY}</p>
            <p>Segunda a sexta, das 14h às 19h.</p>
          </div>
          <nav aria-label="Links de contato">
            <ul className="flex flex-col gap-3 text-[15px] font-semibold">
              <li>
                <a
                  className="transition-colors hover:text-sage"
                  href="https://www.instagram.com/dentistaigorlopardi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-sage"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-sage"
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Localização
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-white/10">
          <div className="container-page flex flex-col gap-3 py-6 text-[13px] text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Dr. Igor Lopardi. Todos os direitos reservados.</p>
            <a href="#inicio" className="transition-colors hover:text-sage">
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
        className="fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_14px_38px_rgba(21,58,58,0.28)] transition-transform hover:-translate-y-0.5 lg:hidden"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 18.06h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.15.82.84-3.07-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.25-8.22 8.25Zm4.52-6.17c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.26 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
        </svg>
      </a>
    </>
  );
}
