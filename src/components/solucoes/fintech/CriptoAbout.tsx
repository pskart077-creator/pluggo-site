import {
  Wallet,
  ReceiptText,
  ShieldCheck,
  UserRound,
  Building2,
  Bitcoin,
} from "lucide-react";

const aboutItems = [
  {
    icon: Wallet,
    title: "Conta Digital",
    description:
      "Movimente, acompanhe e organize sua rotina financeira em uma experiência mais simples e funcional.",
  },
  {
    icon: ReceiptText,
    title: "Cobranças Integradas",
    description:
      "Receba com mais praticidade e traga mais fluidez para sua operação com soluções pensadas para o dia a dia.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Financeira",
    description:
      "Uma jornada com mais confiança, clareza e proteção para pessoas e empresas em cada etapa da experiência.",
  },
  {
    icon: UserRound,
    title: "Soluções Para Você",
    description:
      "Recursos pensados para trazer mais controle, praticidade e organização para sua rotina financeira pessoal.",
  },
  {
    icon: Building2,
    title: "Soluções Para Empresas",
    description:
      "Mais eficiência para receber, acompanhar processos e conduzir a operação com mais fluidez.",
  },
  {
    icon: Bitcoin,
    title: "Cripto",
    description:
      "Acesso a novas possibilidades em uma experiência integrada, moderna e alinhada à evolução do mercado.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="about-section section-anchor">
      <div className="about-section-header">
        <h2 className="about-section-title">
          Soluções Que Conectam
          <br />
          Sua Rotina Financeira
        </h2>

        <p className="about-section-subtitle">
          A Plug Go reúne soluções essenciais para pessoas e empresas em uma
          experiência mais simples, segura e funcional. Mais praticidade para
          movimentar, receber e organizar a vida financeira no dia a dia.
        </p>
      </div>

      <div className="about-cards-grid">
        {aboutItems.map((item) => {
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
