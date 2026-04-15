import {
  Plug,
  Bot,
  Cpu,
  Scaling,
  SlidersHorizontal,
  Layers3,
} from "lucide-react";
import ServiceCard from "@/components/service-card-s-link/ServiceCard";

const solutionsData = [
  {
    title: "Integração mais simples",
    description:
      "Conecte sistemas, módulos e serviços com mais agilidade e menos complexidade.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Plug,
  },
  {
    title: "Automação de processos",
    description:
      "Reduza tarefas manuais e torne a operação mais eficiente com fluxos automatizados.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Bot,
  },
  {
    title: "Mais eficiência operacional",
    description:
      "Otimize rotinas e acompanhe a operação com mais velocidade, clareza e controle.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Cpu,
  },
  {
    title: "Base tecnológica escalável",
    description:
      "Conte com uma estrutura preparada para acompanhar o crescimento da plataforma.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Scaling,
  },
  {
    title: "Mais controle sobre a estrutura",
    description:
      "Gerencie fluxos, integrações e recursos com mais autonomia e visão estratégica.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: SlidersHorizontal,
  },
  {
    title: "Sustentação para crescimento digital",
    description:
      "Tenha uma base robusta para expandir operações com mais consistência e segurança.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Layers3,
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