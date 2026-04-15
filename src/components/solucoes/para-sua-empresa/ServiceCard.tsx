import {
  Blocks,
  Wallet,
  FileCode2,
  ShieldCheck,
  Activity,
  BadgeCheck,
} from "lucide-react";
import ServiceCard from "@/components/service-card/ServiceCard";

const solutionsData = [
  {
    title: "Infraestrutura Digital",
    description:
      "Estruture operações empresariais com uma base tecnológica segura, escalável e preparada para suportar crescimento, integração e alta performance.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Blocks,
  },
  {
    title: "Pagamentos Corporativos",
    description:
      "Otimize fluxos financeiros com soluções de pagamento mais rápidas, modernas e confiáveis para a rotina da sua empresa.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Wallet,
  },
  {
    title: "Automação De Processos",
    description:
      "Reduza etapas manuais, aumente a produtividade e torne a operação mais eficiente com automações inteligentes para o dia a dia do negócio.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: FileCode2,
  },
  {
    title: "Segurança Operacional",
    description:
      "Proteja dados, acessos e transações com camadas avançadas de segurança para garantir mais controle e confiabilidade empresarial.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: ShieldCheck,
  },
  {
    title: "Monitoramento Inteligente",
    description:
      "Acompanhe indicadores, fluxos e operações em tempo real para tomar decisões mais rápidas e manter controle estratégico sobre a empresa.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Activity,
  },
  {
    title: "Compliance E Governança",
    description:
      "Fortaleça a gestão com processos mais organizados, rastreáveis e alinhados às boas práticas de conformidade e governança corporativa.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: BadgeCheck,
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