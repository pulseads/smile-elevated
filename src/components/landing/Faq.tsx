import { useState } from "react";

const ITEMS = [
  {
    q: "Como funciona a primeira consulta?",
    a: "A primeira consulta é o momento de conhecer você, entender suas principais queixas, avaliar sua saúde bucal e identificar as possibilidades de tratamento para o seu caso.",
  },
  {
    q: "O tratamento é definido na primeira consulta?",
    a: "Cada caso é diferente. Após a avaliação, você recebe orientações sobre as possibilidades de tratamento e os próximos passos.",
  },
  {
    q: "Preciso saber qual tratamento quero antes de agendar?",
    a: "Não. Você não precisa chegar ao consultório sabendo qual procedimento realizar. A avaliação existe justamente para entender o que você precisa.",
  },
  {
    q: "O Dr. Igor atende tratamentos estéticos?",
    a: "Sim. O consultório oferece tratamentos voltados à estética do sorriso, além de soluções para saúde bucal e reabilitação oral.",
  },
  {
    q: "Onde fica o consultório?",
    a: "O consultório está localizado na Praia da Costa, em Vila Velha — ES.",
  },
  {
    q: "Como posso agendar?",
    a: "Entre em contato pelo WhatsApp e solicite seu atendimento.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="card-surface overflow-hidden"
            style={{ borderRadius: 20 }}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-[17px] font-semibold text-primary md:px-8 md:py-6 md:text-[19px]"
              >
                {item.q}
                <span
                  aria-hidden="true"
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border transition-transform duration-300 ${
                    isOpen ? "rotate-45 bg-sage/60" : ""
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" fill="none" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              hidden={!isOpen}
              className="px-6 pb-6 text-[16px] leading-[1.6] text-muted-foreground md:px-8 md:pb-8 md:pr-16"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
