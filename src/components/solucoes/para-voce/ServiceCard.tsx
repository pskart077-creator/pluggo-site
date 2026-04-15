import {
  SlidersHorizontal,
  Zap,
  FolderKanban,
  BriefcaseBusiness,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import ServiceCard from "@/components/service-card-s-link/ServiceCard";

const solutionsData = [
  {
    title: "Mais controle operacional",
    description:
      "Tenha mais visibilidade, organização e domínio sobre cada etapa da operação.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: SlidersHorizontal,
  },
  {
    title: "Ganho de eficiência",
    description:
      "Otimize processos e reduza atritos com uma operação mais ágil e inteligente.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Zap,
  },
  {
    title: "Processos mais organizados",
    description:
      "Estruture fluxos com mais clareza, consistência e facilidade de acompanhamento.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: FolderKanban,
  },
  {
    title: "Melhor gestão da operação",
    description:
      "Centralize informações e tome decisões com mais controle e visão estratégica.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: BriefcaseBusiness,
  },
  {
    title: "Mais segurança nas transações",
    description:
      "Proteja operações e dados com uma base mais confiável e preparada para crescer.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: ShieldCheck,
  },
  {
    title: "Estrutura pronta para crescer",
    description:
      "Conte com uma base escalável para acompanhar a evolução da sua empresa.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: TrendingUp,
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