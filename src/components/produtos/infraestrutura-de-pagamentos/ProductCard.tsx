import {
  ShieldCheck,
  Gauge,
  Network,
  BarChart3,
  RefreshCw,
  Layers3,
} from "lucide-react";
import ServiceCard from "@/components/service-card-s-link/ServiceCard";

const productsData = [
  {
    title: "Mais segurança nas transações",
    description:
      "Fortaleça a operação com uma base preparada para processar pagamentos com mais proteção e confiabilidade.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: ShieldCheck,
  },
  {
    title: "Mais estabilidade operacional",
    description:
      "Conte com uma estrutura sólida para manter a operação mais estável e preparada para diferentes volumes.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Gauge,
  },
  {
    title: "Escala para crescer",
    description:
      "Sustente o crescimento da operação com uma infraestrutura pensada para acompanhar novas demandas.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Network,
  },
  {
    title: "Mais visibilidade da operação",
    description:
      "Acompanhe melhor o desempenho dos pagamentos com uma estrutura mais organizada e eficiente.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: BarChart3,
  },
  {
    title: "Fluxos mais eficientes",
    description:
      "Otimize o processamento das transações com mais agilidade e menos fricções no dia a dia operacional.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: RefreshCw,
  },
  {
    title: "Base robusta e integrada",
    description:
      "Tenha uma infraestrutura preparada para conectar processos, sustentar jornadas e evoluir com consistência.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Layers3,
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