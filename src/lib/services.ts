import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    slug: "conta-digital",
    title: "Conta Digital",
    shortDescription:
      "Movimente e acompanhe a rotina financeira com uma operação mais simples.",
    seoDescription:
      "Conheça a Conta Digital da Plug Go para pessoas e empresas, com movimentações e acompanhamento em um fluxo simples.",
    seoKeywords: [
      "conta digital",
      "conta digital empresa",
      "rotina financeira",
      "plug go conta digital",
    ],
    description:
      "A conta digital da Plug Go foi pensada para pessoas e empresas que precisam de agilidade nas movimentações, com visibilidade das entradas e saídas em um único fluxo.",
    highlights: [
      "Abertura e uso em uma jornada objetiva",
      "Acompanhamento de movimentações em tempo real",
      "Operação integrada com outras soluções da plataforma",
    ],
  },
  {
    slug: "cobrancas-integradas",
    title: "Cobrancas Integradas",
    shortDescription:
      "Receba de forma organizada com fluxos de cobrança conectados ao seu negócio.",
    seoDescription:
      "Entenda como as Cobrancas Integradas da Plug Go organizam recebimentos e tornam a operação financeira mais fluida.",
    seoKeywords: [
      "cobrancas integradas",
      "gestao de cobrancas",
      "recebimentos",
      "plug go cobrancas",
    ],
    description:
      "As cobranças integradas centralizam o processo de recebimento em uma experiência mais direta, reduzindo fricção operacional e melhorando a rotina financeira.",
    highlights: [
      "Gestão centralizada de cobranças",
      "Mais clareza sobre valores a receber",
      "Fluxo padronizado para pessoa física e jurídica",
    ],
  },
  {
    slug: "seguranca-financeira",
    title: "Seguranca Financeira",
    shortDescription:
      "Tenha mais confiança para operar com estrutura e processos consistentes.",
    seoDescription:
      "Veja como a Seguranca Financeira da Plug Go melhora previsibilidade, controle e confiabilidade no dia a dia.",
    seoKeywords: [
      "seguranca financeira",
      "controle financeiro",
      "gestao de risco",
      "plug go seguranca",
    ],
    description:
      "A Plug Go estrutura a experiência financeira com foco em proteção e confiabilidade, apoiando decisões com mais controle e previsibilidade operacional.",
    highlights: [
      "Processos desenhados para reduzir riscos",
      "Mais previsibilidade no dia a dia financeiro",
      "Ambiente preparado para crescimento sustentável",
    ],
  },
  {
    slug: "cripto",
    title: "Cripto",
    shortDescription:
      "Acesse possibilidades digitais com uma experiência integrada ao seu ecossistema.",
    seoDescription:
      "Conheça a frente de Cripto da Plug Go para acessar operações digitais com praticidade e experiência integrada.",
    seoKeywords: [
      "cripto",
      "ativos digitais",
      "servicos financeiros digitais",
      "plug go cripto",
    ],
    description:
      "A solução de cripto amplia as alternativas de operação dentro da plataforma, mantendo uma jornada consistente para quem busca inovação com praticidade.",
    highlights: [
      "Acesso simplificado a operações digitais",
      "Experiência conectada com os demais serviços",
      "Estrutura moderna para acompanhar o mercado",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}