import {
  Split,
  GitBranch,
  Wallet,
  Shuffle,
  Scale,
  BadgePercent,
} from "lucide-react";
import ServiceCard from "@/components/service-card-s-link/ServiceCard";

const productsData = [
  {
    title: "Divisão automática de valores",
    description:
      "Distribua pagamentos com mais praticidade e organize repasses de forma automática na operação.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Split,
  },
  {
    title: "Mais controle nos repasses",
    description:
      "Gerencie a divisão de valores com mais clareza e acompanhe melhor cada regra da operação.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: GitBranch,
  },
  {
    title: "Pagamentos para múltiplos recebedores",
    description:
      "Facilite operações com diferentes participantes e distribua valores com mais eficiência.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Wallet,
  },
  {
    title: "Mais flexibilidade operacional",
    description:
      "Adapte a lógica de divisão conforme o modelo da operação e as necessidades do negócio.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Shuffle,
  },
  {
    title: "Mais organização financeira",
    description:
      "Estruture repasses com mais precisão para trazer mais ordem e segurança ao fluxo financeiro.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Scale,
  },
  {
    title: "Gestão mais eficiente da distribuição",
    description:
      "Otimize o processo de divisão de pagamentos e reduza fricções em operações mais complexas.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: BadgePercent,
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