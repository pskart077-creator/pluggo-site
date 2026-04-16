import {
  CreditCard,
  ShoppingBag,
  Link2,
  RefreshCcw,
  Split,
  ShieldCheck,
  LockKeyhole,
  BarChart3,
  Plug,
} from "lucide-react";
import ServiceCard from "@/components/service-card/ServiceCard";

const productsData = [
  {
    title: "Infraestrutura de pagamentos",
    description:
      "Base robusta para processar pagamentos com mais segurança, estabilidade e escala.",
    href: "/produtos/infraestrutura-de-pagamentos",
    linkLabel: "Saiba mais",
    icon: CreditCard,
  },
  {
    title: "Checkout inteligente",
    description:
      "Uma jornada de pagamento mais fluida para aumentar conversões e reduzir fricções.",
    href: "/produtos/checkout-inteligente",
    linkLabel: "Saiba mais",
    icon: ShoppingBag,
  },
  {
    title: "Link de pagamento",
    description:
      "Cobre com mais agilidade por meio de links prontos para envio e compartilhamento.",
    href: "/produtos/link-de-pagamento",
    linkLabel: "Saiba mais",
    icon: Link2,
  },
  {
    title: "Pagamentos recorrentes",
    description:
      "Automatize cobranças recorrentes com mais previsibilidade, controle e eficiência.",
    href: "/produtos/pagamentos-recorrentes",
    linkLabel: "Saiba mais",
    icon: RefreshCcw,
  },
  {
    title: "Split de pagamentos",
    description:
      "Distribua valores com regras flexíveis para operações com múltiplos recebedores.",
    href: "/produtos/split-de-pagamentos",
    linkLabel: "Saiba mais",
    icon: Split,
  },
  {
    title: "Antifraude",
    description:
      "Previna riscos com mais inteligência, monitoramento e proteção em tempo real.",
    href: "https://identiq.com.br/",
    linkLabel: "Saiba mais",
    icon: ShieldCheck,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "Tokenização e proteção de dados",
    description:
      "Proteja dados sensíveis com mais segurança e padrões avançados de proteção.",
    href: "/produtos/tokenizacao-e-protecao-de-dados",
    linkLabel: "Saiba mais",
    icon: LockKeyhole,
  },
  {
    title: "Performance e analytics",
    description:
      "Acompanhe indicadores estratégicos para evoluir a performance da operação.",
    href: "/produtos/performance-e-analytics",
    linkLabel: "Saiba mais",
    icon: BarChart3,
  },
  {
    title: "Conexões e integrações",
    description:
      "Conecte sistemas, fluxos e parceiros com mais agilidade e menos fricção técnica.",
    href: "/produtos/conexoes-e-integracoes",
    linkLabel: "Saiba mais",
    icon: Plug,
  },
];

export default function Products() {
  return (
    <section className="solutions-grid-section">
      <div className="solutions-grid-container">
        <div className="solutions-grid-intro">
          <span className="solutions-grid-eyebrow">Produtos</span>
          <h2 className="solutions-grid-title">
            Produtos para acelerar sua operação
          </h2>
          <p className="solutions-grid-description">
            A Plug Go oferece um portfólio de produtos pensado para estruturar
            pagamentos, aumentar a segurança e dar mais eficiência para
            diferentes operações digitais.
          </p>
        </div>

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