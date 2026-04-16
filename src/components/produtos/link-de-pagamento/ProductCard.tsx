import {
  Link2,
  Send,
  Smartphone,
  Wallet,
  Clock3,
  CircleDollarSign,
} from "lucide-react";
import ServiceCard from "@/components/service-card-s-link/ServiceCard";

const productsData = [
  {
    title: "Cobrança mais rápida",
    description:
      "Envie links de pagamento com mais agilidade e facilite o processo de cobrança no dia a dia.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Link2,
  },
  {
    title: "Envio simplificado",
    description:
      "Compartilhe cobranças com mais praticidade por diferentes canais e acelere a conversão.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Send,
  },
  {
    title: "Pagamento em qualquer lugar",
    description:
      "Permita que o cliente pague com mais comodidade, onde estiver e no momento mais conveniente.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Smartphone,
  },
  {
    title: "Mais praticidade para vender",
    description:
      "Simplifique a jornada de cobrança com uma solução direta, acessível e fácil de usar.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Wallet,
  },
  {
    title: "Agilidade na operação",
    description:
      "Reduza etapas manuais e torne a rotina de vendas e recebimentos mais eficiente.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Clock3,
  },
  {
    title: "Mais eficiência nos recebimentos",
    description:
      "Ganhe mais velocidade para cobrar e receber com uma experiência simples para o cliente.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: CircleDollarSign,
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