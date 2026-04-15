import type { NavItem } from "@/types";

export const HOME_MAIN_CLASS_NAME = "site-main site-main-home";

export const MOBILE_MENU_BREAKPOINT = 920;

export const HEADER_SCROLL_THRESHOLD = 10;
export const HEADER_SCROLL_DELTA = 4;

export const BACK_TO_TOP_VISIBLE_OFFSET = 420;
export const BACK_TO_TOP_FOOTER_OFFSET = 180;

export const SITE_NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "/" },
  {
    label: "Soluções",
    href: "/solucoes",
    dropdown: {
      leadCards: [
        {
          title: "Para você",
          description:
            "Soluções digitais simples e seguras para facilitar sua rotina financeira.",
          href: "/solucoes/para-voce",
        },
        {
          title: "Para empresas",
          description:
            "Infraestrutura inteligente para garantir mais controle, escala e eficiência operacional.",
          href: "/solucoes/para-empresa",
        },
      ],
      quickLinks: [
        {
          label: "Para fintechs",
          description: "Escala com segurança e performance.",
          href: "/solucoes/para-fintechs",
        },
        {
          label: "Para e-commerce",
          description: "Mais conversão e menos fricção.",
          href: "/solucoes/para-e-commerce",
        },
        {
          label: "Para marketplaces",
          description: "Mais controle para operações complexas.",
          href: "/solucoes/para-marketplaces",
        },
        {
          label: "Para plataformas digitais",
          description: "Integração e automação para crescer.",
          href: "/solucoes/para-plataformas-digitais",
        },
        {
          label: "Para negócios recorrentes",
          description: "Mais previsibilidade para receitas recorrentes.",
          href: "/solucoes/para-negocios-recorrentes",
        },
      ],
      feature: {
        title: "Soluções PlugGo",
        description:
          "Conheça as soluções da PlugGo para diferentes perfis e necessidades.",
        href: "/solucoes",
        imageSrc: "/assets/img/patterns/icon-people.svg",
        imageAlt: "Soluções PlugGo para pessoas e empresas",
      },
    },
  },
  {
    label: "Produtos",
    href: "/produtos",
    dropdown: {
      leadCards: [
        {
          title: "Infraestrutura de pagamentos",
          description:
            "Base robusta para processar pagamentos com segurança e escala.",
          href: "/produtos/infraestrutura-de-pagamentos",
        },
        {
          title: "Checkout inteligente",
          description:
            "Converta mais com uma jornada de pagamento fluida e otimizada.",
          href: "/produtos/checkout-inteligente",
        },
      ],
      quickLinks: [
        {
          label: "Link de pagamento",
          description: "Cobre rapidamente com links prontos para envio.",
          href: "/produtos/link-de-pagamento",
        },
        {
          label: "Pagamentos recorrentes",
          description: "Gestão automatizada para assinaturas e recorrência.",
          href: "/produtos/pagamentos-recorrentes",
        },
        {
          label: "Split de pagamentos",
          description: "Distribua valores com regras flexíveis por operação.",
          href: "/produtos/split-de-pagamentos",
        },
        {
          label: "Antifraude",
          description: "Previna riscos com regras e inteligência em tempo real.",
          href: "/produtos/antifraude",
        },
        {
          label: "Tokenização e proteção de dados",
          description: "Proteja dados sensíveis com padrões avançados.",
          href: "/produtos/tokenizacao-e-protecao-de-dados",
        },
        {
          label: "Performance e analytics",
          description: "Acompanhe indicadores para evoluir a operação.",
          href: "/produtos/performance-e-analytics",
        },
        {
          label: "Conexões e integrações",
          description: "Conecte seu ecossistema com menos fricção técnica.",
          href: "/produtos/conexoes-e-integracoes",
        },
      ],
      feature: {
        title: "Produtos PlugGo",
        description:
          "Conheça o portfólio de produtos para acelerar pagamentos e operações.",
        href: "/produtos",
        imageSrc: "/assets/img/patterns/business-outline.svg",
        imageAlt: "Produtos PlugGo",
      },
    },
  },
  /*{
    label: "Plataforma",
    href: "/plataforma",
    dropdown: {
      leadCards: [
        {
          title: "Como funciona",
          description: "Entenda o fluxo ponta a ponta da plataforma.",
          href: "/plataforma/como-funciona",
        },
        {
          title: "Arquitetura",
          description: "Conheça a base técnica por trás da operação.",
          href: "/plataforma/arquitetura",
        },
      ],
      quickLinks: [
        {
          label: "Segurança e compliance",
          description: "Padrões de segurança e conformidade regulatória.",
          href: "/plataforma/seguranca-e-compliance",
        },
        {
          label: "Dashboard",
          description: "Visão centralizada para acompanhar sua operação.",
          href: "/plataforma/dashboard",
        },
        {
          label: "Automação operacional",
          description: "Automatize tarefas e escale com eficiência.",
          href: "/plataforma/automacao-operacional",
        },
        {
          label: "Monitoramento e status",
          description: "Acompanhe disponibilidade e desempenho em tempo real.",
          href: "/plataforma/monitoramento-e-status",
        },
      ],
      feature: {
        title: "Plataforma PlugGo",
        description: "Conheça os recursos da plataforma para operar com escala.",
        href: "/plataforma",
        imageSrc: "/assets/img/patterns/people-outline.svg",
        imageAlt: "Plataforma PlugGo",
      },
    },
  }*/,
  {
    label: "Desenvolvedores",
    href: "/desenvolvedores",
    dropdown: {
      simpleLinks: [
        {
          label: "Documentação",
          href: "https://docs.pluggo.io/",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        /*  { label: "API Reference", href: "/news" },
        { label: "SDKs e plugins", href: "/news" },
        { label: "Guias de integração", href: "/news" },
        { label: "Ambiente de testes", href: "/seguranca" },
        { label: "Release notes", href: "/news" },
        { label: "Status page", href: "/seguranca" }*/,
      ],
    },
  },
  {
    label: "Recursos",
    href: "/recursos",
    dropdown: {
      simpleLinks: [
        { label: "News", href: "/news" },
        /* { label: "Cases de sucesso", href: "/segmentos" },
{ label: "Conteúdos educativos", href: "/news" },
{ label: "Central de ajuda", href: "/contato/suporte" },
{ label: "Calculadora de potencial", href: "/segmentos" },
{ label: "Materiais ricos", href: "/news" }, */,
      ],
    },
  },
  {
    label: "Empresa",
    href: "/empresa",
    dropdown: {
      simpleLinks: [
        { label: "Sobre a PlugGo", href: "/sobre" },
        /* { label: "Nossa tecnologia", href: "/sobre/hub-financeiro" },
        { label: "Diferenciais", href: "/sobre/visao" },
        { label: "Parceiros", href: "/contato/parcerias" },
        { label: "Carreiras", href: "/sobre/missao" }*/,
        { label: "Contato", href: "/contato" },
      ],
    },
  },
];