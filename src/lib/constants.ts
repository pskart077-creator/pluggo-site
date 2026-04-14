import type { NavItem } from "@/types";

export const HOME_MAIN_CLASS_NAME = "site-main site-main-home";

export const MOBILE_MENU_BREAKPOINT = 920;

export const HEADER_SCROLL_THRESHOLD = 10;
export const HEADER_SCROLL_DELTA = 4;

export const BACK_TO_TOP_VISIBLE_OFFSET = 420;
export const BACK_TO_TOP_FOOTER_OFFSET = 180;

export const SITE_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solucoes",
    href: "/solucoes",
    dropdown: {
      leadCards: [
        {
          title: "Para Voce",
          description:
            "Solucoes digitais simples e seguras para facilitar sua rotina financeira.",
          href: "/para-voce",
        },
        {
          title: "Para Empresas",
          description:
            "Infraestrutura inteligente para mais controle, escala e eficiencia operacional.",
          href: "/para-sua-empresa",
        },
      ],
      quickLinks: [
        {
          label: "PARA FINTECHS",
          description: "Escala com seguranca e performance.",
          href: "/para-sua-empresa",
        },
        {
          label: "PARA E-COMMERCE",
          description: "Mais conversao e menos friccao.",
          href: "/para-sua-empresa",
        },
        {
          label: "PARA MARKETPLACES",
          description: "Mais controle para operacoes complexas.",
          href: "/para-sua-empresa",
        },
        {
          label: "PARA PLATAFORMAS DIGITAIS",
          description: "Integracao e automacao para crescer.",
          href: "/para-sua-empresa",
        },
      ],
      feature: {
        title: "Solucoes PlugGo",
        description:
          "Conheca as solucoes da PlugGo para diferentes perfis e necessidades.",
        href: "/solucoes",
        imageSrc: "/assets/img/home/img-06.png",
        imageAlt: "Solucoes PlugGo para pessoas e empresas",
      },
    },
  },
  { label: "Produtos", href: "/segmentos" },
  { label: "Plataforma", href: "/para-sua-empresa" },
  { label: "Desenvolvedores", href: "/news" },
  { label: "Recursos", href: "/news" },
  { label: "Empresa", href: "/sobre" },
];
