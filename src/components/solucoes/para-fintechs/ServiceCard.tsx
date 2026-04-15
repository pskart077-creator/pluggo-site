import {
  ShieldCheck,
  Gauge,
  Workflow,
  SlidersHorizontal,
  Unplug,
  Landmark,
} from "lucide-react";
import ServiceCard from "@/components/service-card-s-link/ServiceCard";

const solutionsData = [
  {
    title: "Escalabilidade com segurança",
    description:
      "Cresça com uma estrutura preparada para ampliar operações com estabilidade e proteção.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: ShieldCheck,
  },
  {
    title: "Alta performance operacional",
    description:
      "Mantenha operações mais rápidas, eficientes e preparadas para ambientes de alta demanda.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Gauge,
  },
  {
    title: "Integrações mais flexíveis",
    description:
      "Conecte sistemas, fluxos e parceiros com mais liberdade e adaptação à sua operação.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Workflow,
  },
  {
    title: "Mais autonomia sobre a operação",
    description:
      "Ganhe mais controle sobre regras, processos e decisões estratégicas da sua estrutura.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: SlidersHorizontal,
  },
  {
    title: "Redução de gargalos técnicos",
    description:
      "Simplifique a operação com uma base mais fluida, organizada e menos dependente de retrabalho.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Unplug,
  },
  {
    title: "Base robusta para crescer",
    description:
      "Conte com uma infraestrutura sólida para sustentar expansão com mais confiança.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Landmark,
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