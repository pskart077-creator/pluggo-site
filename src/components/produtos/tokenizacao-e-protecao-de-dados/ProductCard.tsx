import {
  LockKeyhole,
  Shield,
  Database,
  Fingerprint,
  ScanLine,
  FileLock2,
} from "lucide-react";
import ServiceCard from "@/components/service-card-s-link/ServiceCard";

const productsData = [
  {
    title: "Mais proteção para dados sensíveis",
    description:
      "Reforce a segurança da operação com uma camada extra de proteção para informações críticas e dados sensíveis.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: LockKeyhole,
  },
  {
    title: "Mais segurança na operação",
    description:
      "Fortaleça processos e jornadas com mecanismos que ajudam a reduzir a exposição de informações importantes.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Shield,
  },
  {
    title: "Menor exposição de dados",
    description:
      "Reduza riscos no tratamento de informações ao proteger dados com mais inteligência e confiabilidade.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Database,
  },
  {
    title: "Mais confiança para o usuário",
    description:
      "Crie uma experiência mais segura para clientes e parceiros em fluxos que envolvem dados sensíveis.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: Fingerprint,
  },
  {
    title: "Proteção contínua da informação",
    description:
      "Mantenha um padrão mais alto de segurança ao longo de toda a jornada de pagamento e operação.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: ScanLine,
  },
  {
    title: "Mais controle sobre a segurança",
    description:
      "Tenha mais previsibilidade e controle na proteção de dados com uma estrutura preparada para operar com segurança.",
    href: "#",
    linkLabel: "Saiba mais",
    icon: FileLock2,
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