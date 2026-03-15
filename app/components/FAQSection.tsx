"use client";

import { useState } from "react";

type FAQVariant = "general" | "dog" | "cat" | "full";

type AnswerBlock =
  | { type: "text"; content: string }
  | { type: "list"; items: string[] };

type FAQItem = {
  id: string;
  question: string;
  answer: AnswerBlock[];
};

type FAQCategory = {
  id: string;
  title: string;
  items: FAQItem[];
};

const FAQ_DATA: Record<string, FAQCategory> = {
  dog: {
    id: "dog",
    title: "Hundekrankenversicherung",
    items: [
      {
        id: "dog-1",
        question: "Was deckt eine Hundekrankenversicherung ab?",
        answer: [
          {
            type: "text",
            content:
              "Eine Hundekrankenversicherung kann viele Tierarztkosten übernehmen – je nach Tarif zum Beispiel:",
          },
          {
            type: "list",
            items: [
              "Operationen",
              "Diagnostik wie Röntgen oder MRT",
              "Medikamente",
              "stationäre Behandlungen",
              "Nachsorge und Therapien",
            ],
          },
          {
            type: "text",
            content:
              "Je nach Anbieter werden bis zu 100 % der Kosten übernommen.",
          },
        ],
      },
      {
        id: "dog-2",
        question: "Wie teuer ist eine Hundekrankenversicherung?",
        answer: [
          {
            type: "text",
            content: "Die Kosten hängen vor allem ab von:",
          },
          {
            type: "list",
            items: [
              "Alter des Hundes",
              "Rasse",
              "gewünschtem Leistungsumfang",
              "Selbstbeteiligung",
            ],
          },
          {
            type: "text",
            content: "Viele Tarife beginnen bereits ab ca. 20–30 € pro Monat.",
          },
        ],
      },
      {
        id: "dog-3",
        question: "Kann ich jeden Tierarzt wählen?",
        answer: [
          {
            type: "text",
            content:
              "Ja. Die meisten Hundekrankenversicherungen ermöglichen eine freie Tierarztwahl.",
          },
          {
            type: "text",
            content:
              "Du kannst also in der Regel zu jeder Tierarztpraxis oder Tierklinik gehen.",
          },
        ],
      },
      {
        id: "dog-4",
        question: "Gibt es Wartezeiten bei einer Hundekrankenversicherung?",
        answer: [
          {
            type: "text",
            content:
              "Bei vielen Versicherungen gibt es eine Wartezeit von etwa 1–3 Monaten, bevor bestimmte Leistungen übernommen werden.",
          },
          {
            type: "text",
            content: "Unfälle sind häufig sofort versichert.",
          },
        ],
      },
      {
        id: "dog-5",
        question:
          "Was ist der Unterschied zwischen OP-Versicherung und Vollversicherung?",
        answer: [
          {
            type: "text",
            content:
              "Eine OP-Versicherung übernimmt nur Operationen und ist meist günstiger.",
          },
          {
            type: "text",
            content:
              "Eine Vollversicherung übernimmt zusätzlich auch Diagnostik, Medikamente und Behandlungen und bietet damit einen umfassenderen Schutz.",
          },
        ],
      },
    ],
  },
  cat: {
    id: "cat",
    title: "Katzenkrankenversicherung",
    items: [
      {
        id: "cat-1",
        question: "Was deckt eine Katzenkrankenversicherung ab?",
        answer: [
          {
            type: "text",
            content:
              "Eine Katzenkrankenversicherung kann unter anderem übernehmen:",
          },
          {
            type: "list",
            items: [
              "Operationen",
              "Behandlungen bei Krankheiten",
              "Diagnostik wie Röntgen oder Ultraschall",
              "Medikamente",
              "Nachsorge",
            ],
          },
          {
            type: "text",
            content:
              "Je nach Tarif werden bis zu 100 % der Tierarztkosten erstattet.",
          },
        ],
      },
      {
        id: "cat-2",
        question: "Für welche Katzen lohnt sich eine Versicherung?",
        answer: [
          {
            type: "text",
            content:
              "Grundsätzlich kann eine Versicherung für jede Katze sinnvoll sein, besonders aber für:",
          },
          {
            type: "list",
            items: [
              "junge Katzen",
              "Wohnungskatzen mit langer Lebenserwartung",
              "Katzen mit erhöhtem Krankheitsrisiko",
            ],
          },
          {
            type: "text",
            content:
              "Auch kleinere Behandlungen können schnell mehrere hundert Euro kosten.",
          },
        ],
      },
      {
        id: "cat-3",
        question:
          "Kann ich mit meiner Katze zu jeder Tierarztpraxis gehen?",
        answer: [
          {
            type: "text",
            content:
              "Ja. In den meisten Tarifen besteht freie Tierarztwahl.",
          },
          {
            type: "text",
            content:
              "Du kannst deine Katze also in der Praxis oder Klinik deiner Wahl behandeln lassen.",
          },
        ],
      },
      {
        id: "cat-4",
        question: "Wie teuer ist eine Katzenkrankenversicherung?",
        answer: [
          {
            type: "text",
            content:
              "Viele Tarife beginnen bereits ab etwa 15–25 € monatlich.",
          },
          {
            type: "text",
            content: "Der Beitrag hängt ab von:",
          },
          {
            type: "list",
            items: [
              "Alter der Katze",
              "Rasse",
              "Leistungsumfang",
              "Selbstbeteiligung",
            ],
          },
        ],
      },
    ],
  },
  pawtrust: {
    id: "pawtrust",
    title: "PawTrust & Vergleich",
    items: [
      {
        id: "pt-1",
        question: "Was ist PawTrust eigentlich?",
        answer: [
          {
            type: "text",
            content:
              "PawTrust ist eine Informations- und Vergleichsplattform für Tierkrankenversicherungen.",
          },
          {
            type: "text",
            content:
              "Wir helfen Tierbesitzern dabei, passende Versicherungen für Hunde und Katzen zu finden, ohne sich durch komplizierte Tarife arbeiten zu müssen.",
          },
        ],
      },
      {
        id: "pt-2",
        question: "Wie funktioniert der Vergleich bei PawTrust?",
        answer: [
          {
            type: "text",
            content: "Der Ablauf ist ganz einfach:",
          },
          {
            type: "list",
            items: [
              "Du gibst einige Informationen zu deinem Tier an",
              "Ein Versicherungsexperte sucht passende Tarife",
              "Du erhältst eine Übersicht möglicher Angebote",
            ],
          },
          {
            type: "text",
            content:
              "Danach entscheidest du ganz in Ruhe, ob du eines der Angebote nutzen möchtest.",
          },
        ],
      },
      {
        id: "pt-3",
        question: "Werde ich nach meiner Anfrage kontaktiert?",
        answer: [
          {
            type: "text",
            content: "Ja.",
          },
          {
            type: "text",
            content:
              "Nachdem du eine Anfrage gestellt hast, wird sich in der Regel ein Versicherungsexperte per Telefon oder E-Mail bei dir melden, um dir passende Angebote zu erklären.",
          },
          {
            type: "text",
            content:
              "Du kannst dabei jederzeit entscheiden, ob du ein Angebot annehmen möchtest oder nicht.",
          },
        ],
      },
      {
        id: "pt-4",
        question: "Ist der Vergleich wirklich kostenlos?",
        answer: [
          {
            type: "text",
            content: "Ja.",
          },
          {
            type: "text",
            content:
              "Der Vergleich über PawTrust ist kostenlos und unverbindlich.",
          },
          {
            type: "text",
            content: "Für dich entstehen keine zusätzlichen Kosten.",
          },
        ],
      },
      {
        id: "pt-5",
        question: "Was passiert mit meinen Daten?",
        answer: [
          {
            type: "text",
            content:
              "Deine Daten werden ausschließlich verwendet, um passende Versicherungsangebote für dein Tier zu finden.",
          },
          {
            type: "text",
            content:
              "Dafür können deine Angaben an Versicherungspartner oder Experten weitergegeben werden, die dich anschließend kontaktieren.",
          },
          {
            type: "text",
            content:
              "Wir verkaufen keine Daten für Werbung außerhalb dieses Zwecks.",
          },
        ],
      },
      {
        id: "pt-6",
        question: "Muss ich eine Versicherung abschließen?",
        answer: [
          {
            type: "text",
            content: "Nein.",
          },
          {
            type: "text",
            content: "Der Vergleich ist unverbindlich.",
          },
          {
            type: "text",
            content:
              "Du kannst dir Angebote anschauen und frei entscheiden, ob du eines davon nutzen möchtest.",
          },
        ],
      },
      {
        id: "pt-7",
        question: "Wer erstellt die Angebote?",
        answer: [
          {
            type: "text",
            content:
              "Die Angebote werden von Versicherungsexperten und Partnern aus der Versicherungsbranche zusammengestellt.",
          },
          {
            type: "text",
            content:
              "Sie arbeiten mit verschiedenen Versicherern zusammen und helfen dabei, passende Tarife zu finden.",
          },
        ],
      },
      {
        id: "pt-8",
        question: "Wie schnell bekomme ich Angebote?",
        answer: [
          {
            type: "text",
            content:
              "In vielen Fällen erhältst du innerhalb weniger Minuten oder Stunden eine erste Rückmeldung.",
          },
        ],
      },
      {
        id: "pt-9",
        question: "Muss ich viele Angaben machen?",
        answer: [
          {
            type: "text",
            content: "Nein.",
          },
          {
            type: "text",
            content:
              "Für eine erste Einschätzung reichen meist schon wenige Angaben zu deinem Tier, zum Beispiel:",
          },
          {
            type: "list",
            items: ["Alter", "Rasse", "gewünschter Schutz"],
          },
        ],
      },
    ],
  },
};

const EMOJI_BY_CATEGORY: Record<string, string> = {
  dog: "🐶",
  cat: "🐱",
  pawtrust: "🐾",
};

function getCategoriesForVariant(variant: FAQVariant): FAQCategory[] {
  const dog = FAQ_DATA.dog;
  const cat = FAQ_DATA.cat;
  const pawtrust = FAQ_DATA.pawtrust;

  switch (variant) {
    case "general":
      return [
        {
          ...pawtrust,
          items: pawtrust.items.slice(0, 6),
        },
        { ...dog, items: dog.items.slice(0, 2) },
        { ...cat, items: cat.items.slice(0, 2) },
      ];
    case "dog":
      return [dog, pawtrust];
    case "cat":
      return [cat, pawtrust];
    case "full":
      return [dog, cat, pawtrust];
    default:
      return [pawtrust, dog, cat];
  }
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
  emoji,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  emoji: string;
}) {
  return (
    <div className="border-b border-dark-slate/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-deep-trust-blue"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
      >
        <span className="text-base font-medium text-dark-slate pr-8">
          <span aria-hidden>{emoji} </span>
          {item.question}
        </span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dark-slate/5 text-dark-slate transition-transform duration-200"
          aria-hidden
        >
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        className="grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out [&>div]:min-h-0"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="min-h-0">
          <div className="pb-4 pr-10 text-sm leading-relaxed text-dark-slate/90">
            {item.answer.map((block, i) =>
              block.type === "text" ? (
                <p key={i} className="mb-3 last:mb-0">
                  {block.content}
                </p>
              ) : (
                <ul
                  key={i}
                  className="mb-3 list-inside list-disc space-y-1 last:mb-0"
                >
                  {block.items.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQSection({
  variant = "general",
  background = "default",
}: {
  variant?: FAQVariant;
  background?: "default" | "white";
}) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const categories = getCategoriesForVariant(variant);

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section
      className={`px-4 py-16 sm:px-6 lg:px-8 lg:py-20 ${background === "white" ? "bg-white" : "bg-off-white"}`}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="text-2xl font-bold text-deep-trust-blue sm:text-3xl"
        >
          Häufige Fragen
        </h2>
        <p className="mt-3 text-dark-slate/80">
          Kurze Antworten zu Tierkrankenversicherung und dem Vergleich bei
          PawTrust.
        </p>

        <div className="mt-10 space-y-12">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-deep-trust-blue">
                <span aria-hidden>
                  {EMOJI_BY_CATEGORY[category.id] ?? "🐾"}
                </span>
                {category.title}
              </h3>
              <div className="rounded-2xl border border-dark-slate/10 bg-white px-4 shadow-sm">
                {category.items.map((item) => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openIds.has(item.id)}
                    onToggle={() => toggle(item.id)}
                    emoji={EMOJI_BY_CATEGORY[category.id] ?? "🐾"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
