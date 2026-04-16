import {
  MousePointerClick,
  ShoppingCart,
  ArrowLeftRight,
  Smile,
  Zap,
  BadgeDollarSign,
} from "lucide-react";
import ServiceCard from "@/components/service-card-s-link/ServiceCard";

const productsData = [
  {
    title: "Mais conversão no checkout",
    description:
      "Aumente o potencial de finalização com uma jornada de pagamento mais eficiente e orientada à conversão.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: ShoppingCart,
  },
  {
    title: "Menos abandono na compra",
    description:
      "Reduza barreiras na etapa final com uma experiência mais fluida, objetiva e preparada para converter melhor.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: MousePointerClick,
  },
  {
    title: "Jornada mais fluida",
    description:
      "Ofereça um processo de pagamento mais simples, rápido e intuitivo do início ao fim da experiência.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: ArrowLeftRight,
  },
  {
    title: "Melhor experiência do cliente",
    description:
      "Entregue uma navegação mais agradável, confiável e preparada para aumentar a satisfação do usuário.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Smile,
  },
  {
    title: "Mais agilidade no pagamento",
    description:
      "Ganhe velocidade no fluxo de checkout e torne a operação mais eficiente em cada transação.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Zap,
  },
  {
    title: "Menos fricção na jornada",
    description:
      "Elimine etapas desnecessárias e facilite a decisão de compra com uma experiência mais direta.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: BadgeDollarSign,
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