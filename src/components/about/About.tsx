import {
  Wallet,
  ShoppingCart,
  RefreshCcw,
  Split,
  ShieldCheck,
  PlugZap,
} from "lucide-react";

const productItems = [
  {
    icon: Wallet,
    title: "Infraestrutura de Pagamentos",
    description:
      "Centralize fluxos financeiros com mais controle, flexibilidade e inteligência para a sua operação digital.",
  },
  {
    icon: ShoppingCart,
    title: "Checkout Inteligente",
    description:
      "Ofereça uma experiência de pagamento mais fluida, responsiva e pensada para elevar a conversão.",
  },
  {
    icon: RefreshCcw,
    title: "Pagamentos Recorrentes",
    description:
      "Gerencie assinaturas e cobranças programadas com mais previsibilidade, automação e eficiência operacional.",
  },
  {
    icon: Split,
    title: "Split de Pagamentos",
    description:
      "Automatize repasses entre múltiplos recebedores com mais organização, precisão e escalabilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Antifraude e Proteção",
    description:
      "Reduza riscos com uma camada de segurança voltada à proteção de dados e à confiança das transações.",
  },
  {
    icon: PlugZap,
    title: "Integrações e Conexões",
    description:
      "Conecte sistemas, parceiros e módulos da operação em um ambiente mais integrado, robusto e funcional.",
  },
];

export default function Products() {
  return (
    <section id="produtos" className="about-section section-anchor">
      <div className="about-section-header">
        <h2 className="about-section-title">
          Produtos que impulsionam
          <br />
          sua operação digital
        </h2>

        <p className="about-section-subtitle">
          A Plug Go reúne produtos pensados para dar mais controle, segurança e
          eficiência à sua operação. Da jornada de pagamento às integrações e à
          proteção de dados, tudo em uma experiência mais robusta e escalável.
        </p>
      </div>

      <div className="about-cards-grid">
        {productItems.map((item) => {
          const Icon = item.icon;

          return (
            <article key={item.title} className="about-card">
              <div className="about-card-icon">
                <Icon size={34} strokeWidth={2.1} />
              </div>

              <div className="about-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}