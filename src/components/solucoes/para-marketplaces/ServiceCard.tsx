import {
  Split,
  Waypoints,
  GitBranch,
  Scaling,
  Wallet,
  ShieldCheck,
} from "lucide-react";
import ServiceCard from "@/components/service-card-s-link/ServiceCard";

const solutionsData = [
  {
    title: "Mais controle sobre repasses",
    description:
      "Gerencie divisões e repasses com mais clareza, segurança e organização operacional.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Split,
  },
  {
    title: "Gestão mais eficiente da operação",
    description:
      "Centralize fluxos e acompanhe a operação com mais eficiência e visibilidade.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Waypoints,
  },
  {
    title: "Fluidez em fluxos complexos",
    description:
      "Simplifique jornadas operacionais com uma estrutura preparada para múltiplos cenários.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: GitBranch,
  },
  {
    title: "Mais escalabilidade para crescer",
    description:
      "Conte com uma base preparada para sustentar expansão com estabilidade e performance.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Scaling,
  },
  {
    title: "Melhor organização financeira",
    description:
      "Tenha mais controle sobre movimentações, repasses e gestão financeira da operação.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Wallet,
  },
  {
    title: "Mais segurança nas transações",
    description:
      "Proteja operações e movimentações com uma estrutura mais confiável e segura.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: ShieldCheck,
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