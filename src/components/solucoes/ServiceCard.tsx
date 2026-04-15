import {
  Building2,
  Landmark,
  ShoppingCart,
  Store,
  Layers3,
  Repeat,
} from "lucide-react";
import ServiceCard from "@/components/service-card/ServiceCard";

const solutionsData = [
  {
    title: "Para Empresas",
    description:
      "Infraestrutura inteligente para empresas que buscam mais controle, agilidade e eficiência operacional.",
    href: "/solucoes/para-empresa",
    linkLabel: "Saiba Mais",
    icon: Building2,
  },
  {
    title: "Para Fintechs",
    description:
      "Escala com segurança, performance e flexibilidade para operações financeiras digitais.",
    href: "/solucoes/para-fintechs",
    linkLabel: "Saiba Mais",
    icon: Landmark,
  },
  {
    title: "Para E-commerce",
    description:
      "Mais conversão, menos fricção e uma experiência de pagamento mais eficiente.",
    href: "/solucoes/para-e-commerce",
    linkLabel: "Saiba Mais",
    icon: ShoppingCart,
  },
  {
    title: "Para Marketplaces",
    description:
      "Mais controle e fluidez para repasses, pagamentos e operações complexas.",
    href: "/solucoes/para-marketplaces",
    linkLabel: "Saiba Mais",
    icon: Store,
  },
  {
    title: "Para Plataformas Digitais",
    description:
      "Integração e automação para sustentar crescimento com mais eficiência.",
    href: "/solucoes/para-plataformas-digitais",
    linkLabel: "Saiba Mais",
    icon: Layers3,
  },
  {
    title: "Para Negócios Recorrentes",
    description:
      "Cobranças recorrentes com mais previsibilidade, automação e eficiência.",
    href: "/solucoes/para-negocios-recorrentes",
    linkLabel: "Saiba Mais",
    icon: Repeat,
  },
];

export default function Solutions() {
  return (
    <section className="solutions-grid-section">
      <div className="solutions-grid-container">
        <div className="solutions-grid-intro">
          <span className="solutions-grid-eyebrow">Segmentos</span>
          <h2 className="solutions-grid-title">
            Soluções para cada fase do seu negócio
          </h2>
          <p className="solutions-grid-description">
            Da empresa que está começando até operações digitais em escala, a
            Plug Go oferece infraestrutura financeira para diferentes modelos de
            negócio.
          </p>
        </div>

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
