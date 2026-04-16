"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const showcaseTabs = [
  {
    id: "infraestrutura",
    label: "Infraestrutura",
    title: "Pagamentos com mais escala",
    description:
      "A Plug Go entrega uma infraestrutura de pagamentos preparada para sustentar operações com mais segurança, estabilidade, performance e eficiência em diferentes modelos de negócio.",
    image: "/assets/img/home/img-03.jpg",
    points: [
      "Processamento com mais segurança e estabilidade",
      "Estrutura preparada para crescer com a operação",
      "Base confiável para diferentes jornadas de pagamento",
    ],
  },
  {
    id: "checkout",
    label: "Checkout",
    title: "Checkout mais fluido",
    description:
      "Com um checkout pensado para reduzir fricções, a Plug Go ajuda a melhorar a experiência de pagamento, aumentar conversões e tornar cada etapa mais simples para o usuário.",
    image: "/assets/img/home/img-05.png",
    points: [
      "Experiência mais rápida e intuitiva",
      "Mais conversão com menos fricção",
      "Fluxo otimizado para diferentes perfis de cliente",
    ],
  },
  {
    id: "gestao",
    label: "Gestão",
    title: "Mais controle da operação",
    description:
      "Além de processar pagamentos, a Plug Go oferece recursos para acompanhar indicadores, automatizar rotinas e criar uma operação mais eficiente, segura e orientada por dados.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    points: [
      "Mais visibilidade sobre resultados e desempenho",
      "Automação para rotinas operacionais",
      "Recursos para segurança, controle e evolução contínua",
    ],
  },
];

const showcaseStats = [
  { value: "09", label: "produtos no portfólio" },
  { value: "01", label: "ecossistema integrado" },
  { value: "24/7", label: "operação em movimento" },
  { value: "+", label: "segurança, escala e performance" },
];

export default function ProductsShowcase() {
  const [activeTab, setActiveTab] = useState(showcaseTabs[0].id);

  const activeContent =
    showcaseTabs.find((item) => item.id === activeTab) ?? showcaseTabs[0];

  return (
    <section id="produtos" className="financial-showcase section-anchor">
      <div className="financial-showcase-shell">
        <div className="financial-showcase-top">
          <div className="financial-showcase-media">
            <Image
              src={activeContent.image}
              alt={activeContent.title}
              fill
              className="financial-showcase-image"
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          </div>

          <div className="financial-showcase-content">
            <h2 className="financial-showcase-title">{activeContent.title}</h2>

            <div
              className="financial-showcase-tabs"
              role="tablist"
              aria-label="Abas de produtos da Plug Go"
            >
              {showcaseTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={cn(
                    "financial-showcase-tab",
                    activeTab === tab.id && "is-active",
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <p className="financial-showcase-description">
              {activeContent.description}
            </p>

            <div className="financial-showcase-points">
              {activeContent.points.map((point) => (
                <div key={point} className="financial-showcase-point">
                  <CheckCircle2 size={18} strokeWidth={2.4} />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <Link href="/contato" className="financial-showcase-button">
              Fale conosco
            </Link>
          </div>
        </div>

        <div className="financial-showcase-stats">
          {showcaseStats.map((item) => (
            <article key={item.label} className="financial-showcase-stat">
              <p className="financial-showcase-stat-value">{item.value}</p>
              <p className="financial-showcase-stat-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}