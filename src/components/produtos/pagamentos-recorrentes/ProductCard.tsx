import {
  RefreshCcw,
  CalendarDays,
  CircleDollarSign,
  Clock3,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import ServiceCard from "@/components/service-card-s-link/ServiceCard";

const productsData = [
  {
    title: "Cobranças automatizadas",
    description:
      "Automatize pagamentos recorrentes com mais praticidade e menos esforço operacional no dia a dia.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: RefreshCcw,
  },
  {
    title: "Mais previsibilidade financeira",
    description:
      "Organize receitas recorrentes com mais clareza e acompanhe melhor a entrada de pagamentos.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: CalendarDays,
  },
  {
    title: "Recebimentos mais consistentes",
    description:
      "Estruture cobranças recorrentes de forma mais eficiente para manter a operação mais estável.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: CircleDollarSign,
  },
  {
    title: "Menos tarefas manuais",
    description:
      "Reduza atividades repetitivas e torne a rotina de cobrança mais ágil e organizada.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Clock3,
  },
  {
    title: "Mais controle da operação",
    description:
      "Tenha uma gestão mais segura e estruturada sobre ciclos de cobrança e recorrência.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: ShieldCheck,
  },
  {
    title: "Melhor acompanhamento de resultados",
    description:
      "Visualize melhor o desempenho das cobranças e evolua a eficiência da operação recorrente.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: BarChart3,
  },
];

export default function Products() {
  return (
    <section className="solutions-grid-section">
      <div className="solutions-grid-container">
        <div className="solutions-grid">
          {productsData.map((item, index) => (
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