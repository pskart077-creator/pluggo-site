"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const paymentFaqItems = [
  {
    id: 1,
    question: "Which Device Can I Use To Enter Your Service?",
    answer:
      "Aenean porta, eros lacus congue lorem, samet mollis magna velit ac erat. Donec ut interdum arcu, egestas liber. Etiam condimentum aliquam accumsan. Morbi accumsan purus nec vehicula ornare.",
  },
  {
    id: 2,
    question: "What's Your Very First Memory?",
    answer:
      "You can adapt this content with your real text. This area supports a short explanatory paragraph for each item.",
  },
  {
    id: 3,
    question: "If You Could Visit One Planet, Which Would It Be?",
    answer:
      "Use this block to describe the answer with the same visual pattern as the first expanded card.",
  },
  {
    id: 4,
    question: "What Do You Want To Be When You Grow Up?",
    answer:
      "Replace this text with your real content and keep the visual structure clean and readable.",
  },
];

export default function PaymentsAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className="payments-faq-section">
      <div className="payments-faq-container">
        <h2 className="payments-faq-title">Payments</h2>

        <div className="payments-faq-list">
          {paymentFaqItems.map((item) => {
            const isOpen = openItem === item.id;

            return (
              <div
                key={item.id}
                className={`payments-faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="payments-faq-trigger"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`payments-faq-content-${item.id}`}
                >
                  <span className="payments-faq-question">{item.question}</span>

                  <span className="payments-faq-icon" aria-hidden="true">
                    {isOpen ? <Minus size={18} strokeWidth={2.2} /> : <Plus size={18} strokeWidth={2.2} />}
                  </span>
                </button>

                <div
                  id={`payments-faq-content-${item.id}`}
                  className="payments-faq-content"
                >
                  <div className="payments-faq-content-inner">
                    <div className="payments-faq-divider" />
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
