import {
  CalendarSync,
  Bot,
  SlidersHorizontal,
  ShieldAlert,
  Gauge,
  SmilePlus,
} from "lucide-react";
import ServiceCard from "@/components/service-card-s-link/ServiceCard";

const solutionsData = [
  {
    title: "Mais previsibilidade financeira",
    description:
      "Tenha mais clareza sobre cobranças, recorrências e estabilidade no fluxo da operação.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: CalendarSync,
  },
  {
    title: "Automação de cobranças",
    description:
      "Reduza tarefas manuais com fluxos automáticos mais práticos e eficientes.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Bot,
  },
  {
    title: "Melhor controle da recorrência",
    description:
      "Gerencie planos, cobranças e ciclos com mais organização e autonomia.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: SlidersHorizontal,
  },
  {
    title: "Redução de falhas operacionais",
    description:
      "Evite gargalos e inconsistências com uma estrutura mais estável e confiável.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: ShieldAlert,
  },
  {
    title: "Mais eficiência na gestão",
    description:
      "Otimize a operação recorrente com mais agilidade, controle e performance.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Gauge,
  },
  {
    title: "Melhor experiência para o cliente",
    description:
      "Ofereça jornadas mais fluidas, simples e seguras em cada ciclo de cobrança.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: SmilePlus,
  },
];

export default function Solutions() {
  return (
    <section className="solutions-grid-section">
      <div className="solutions-grid-container">
        <div className="solutions-grid">
          {solutionsData.map((item, index) => (
            <ServiceCard
              key={`${item.title}-${index}`}
              number={String(index + 1).padStart(2, "0")}
              title={item.title}
              description={item.description}
              href={item.href}
              linkLabel={item.linkLabel}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}