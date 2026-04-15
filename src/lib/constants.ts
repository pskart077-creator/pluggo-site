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
      ],
    },
  },
  {
    label: "Recursos",
    href: "/recursos",
    dropdown: {
      simpleLinks: [
        { label: "News", href: "/news" },
      ],
    },
  },
  {
    label: "Empresa",
    href: "/empresa",
    dropdown: {
      simpleLinks: [
        { label: "Sobre a PlugGo", href: "/sobre" },
        { label: "Contato", href: "/contato" },
      ],
    },
  },
];