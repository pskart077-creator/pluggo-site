import {
  ShoppingCart,
  MousePointerClick,
  ArrowLeftRight,
  Smile,
  Zap,
  BadgeDollarSign,
} from "lucide-react";
import ServiceCard from "@/components/service-card-s-link/ServiceCard";

const solutionsData = [
  {
    title: "Mais conversão nas vendas",
    description:
      "Aumente o potencial de compra com uma jornada mais eficiente e orientada à conversão.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: ShoppingCart,
  },
  {
    title: "Menos abandono no checkout",
    description:
      "Reduza barreiras na finalização da compra com uma experiência mais fluida e objetiva.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: MousePointerClick,
  },
  {
    title: "Jornada de pagamento mais fluida",
    description:
      "Ofereça um processo mais simples, rápido e intuitivo do início ao fim da compra.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: ArrowLeftRight,
  },
  {
    title: "Melhor experiência para o cliente",
    description:
      "Entregue uma navegação mais agradável, confiável e preparada para gerar satisfação.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Smile,
  },
  {
    title: "Mais agilidade na operação",
    description:
      "Ganhe velocidade no fluxo de pagamento e mais eficiência na rotina do e-commerce.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Zap,
  },
  {
    title: "Redução de fricções na compra",
    description:
      "Elimine etapas desnecessárias e facilite a decisão do cliente em cada transação.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: BadgeDollarSign,
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