import type { Metadata } from "next";
import type { Service, SlugPageDetail } from "@/types";

export const SITE_NAME = "Plug Go";
export const SITE_URL = "https://pluggocapital.com";

const COMMON_KEYWORDS = [
  "plug go",
  "hub financeiro",
  "soluções financeiras",
  "pessoas e empresas",
];

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export type StaticPageSlug =
  | "sobre"
  | "contato"
  | "solucoes"
  | "segmentos"
  | "news"
  | "seguranca"
  | "pf"
  | "pj"
  | "solucoesParaVoce"
  | "solucoesParaEmpresas"
  | "solucoesParaFintechs"
  | "solucoesParaEcommerce"
  | "solucoesParaMarketplaces"
  | "solucoesParaPlataformasDigitais"
  | "solucoesParaNegociosRecorrentes"
  | "termsOfServices"
  | "privacyPolicy"
  | "cookiePolicy";

export const HOME_SEO: PageSeo = {
  title: "Hub financeiro para pessoas e empresas",
  description:
    "A Plug Go conecta soluções financeiras para pessoas e empresas em uma experiência mais simples, segura e funcional.",
  path: "/",
  keywords: [
    ...COMMON_KEYWORDS,
    "conta digital",
    "cobranças",
    "segurança financeira",
    "cripto",
  ],
};

export const STATIC_PAGE_SEO: Record<StaticPageSlug, PageSeo> = {
  sobre: {
    title: "Sobre a Plug Go",
    description:
      "Conheça a proposta da Plug Go e como conectamos soluções financeiras para simplificar a rotina de pessoas e empresas.",
    path: "/sobre",
    keywords: [...COMMON_KEYWORDS, "sobre a Plug Go", "empresa financeira"],
  },
  contato: {
    title: "Contato",
    description:
      "Fale com o time da Plug Go para entender quais soluções financeiras se encaixam no seu momento.",
    path: "/contato",
    keywords: [
      ...COMMON_KEYWORDS,
      "contato Plug Go",
      "atendimento financeiro",
    ],
  },
  solucoes: {
    title: "Soluções",
    description:
      "Explore os serviços da Plug Go e veja como nossas soluções atendem pessoas e empresas com mais praticidade, segurança e eficiência.",
    path: "/solucoes",
    keywords: [
      ...COMMON_KEYWORDS,
      "serviços financeiros",
      "plataforma financeira",
      "catálogo de serviços",
    ],
  },
  segmentos: {
    title: "Segmentos",
    description:
      "Conheça os segmentos da Plug Go e veja como as soluções se adaptam para pessoa física e para empresas.",
    path: "/segmentos",
    keywords: [
      ...COMMON_KEYWORDS,
      "segmentos",
      "para você",
      "para sua empresa",
    ],
  },
  news: {
    title: "News",
    description:
      "Acompanhe as novidades da Plug Go com atualizações sobre tecnologia, segurança e mercado financeiro.",
    path: "/news",
    keywords: [
      ...COMMON_KEYWORDS,
      "news",
      "novidades plug go",
      "conteúdo financeiro",
    ],
  },
  seguranca: {
    title: "Segurança",
    description:
      "Conheça como a Plug Go estrutura processos para oferecer mais segurança, confiança e previsibilidade operacional.",
    path: "/seguranca",
    keywords: [
      ...COMMON_KEYWORDS,
      "segurança financeira",
      "confiabilidade",
      "gestão de risco",
    ],
  },
  pf: {
    title: "Para você",
    description:
      "Conheça as soluções da Plug Go para pessoa física e descubra mais praticidade, segurança e agilidade para o seu dia a dia.",
    path: "/pf",
    keywords: [
      ...COMMON_KEYWORDS,
      "para você",
      "pessoa física",
      "soluções financeiras para pessoa física",
      "serviços para pessoa física",
    ],
  },
  pj: {
    title: "Para sua empresa",
    description:
      "Explore as soluções da Plug Go para empresas e veja como sua operação pode ganhar mais eficiência, segurança e escalabilidade.",
    path: "/pj",
    keywords: [
      ...COMMON_KEYWORDS,
      "para sua empresa",
      "pessoa jurídica",
      "soluções financeiras para empresas",
      "serviços para empresas",
    ],
  },
  solucoesParaVoce: {
    title: "Soluções para Você",
    description:
      "Conheça as soluções da Plug Go para pessoa física e descubra mais praticidade, segurança e agilidade no dia a dia.",
    path: "/solucoes/para-voce",
    keywords: [
      ...COMMON_KEYWORDS,
      "solucoes para voce",
      "pessoa fisica",
      "servicos para pessoa fisica",
    ],
  },
  solucoesParaEmpresas: {
    title: "Soluções para Empresas",
    description:
      "Explore as soluções da Plug Go para empresas com foco em eficiência operacional, segurança e escalabilidade.",
    path: "/solucoes/para-empresa",
    keywords: [
      ...COMMON_KEYWORDS,
      "solucoes para empresas",
      "pessoa juridica",
      "servicos para empresas",
    ],
  },
  solucoesParaFintechs: {
    title: "Soluções para Fintechs",
    description:
      "Conheça as soluções da Plug Go para fintechs e escale sua operação com segurança, performance e flexibilidade.",
    path: "/solucoes/para-fintechs",
    keywords: [
      ...COMMON_KEYWORDS,
      "solucoes para fintechs",
      "infraestrutura para fintech",
      "pagamentos digitais",
    ],
  },
  solucoesParaEcommerce: {
    title: "Soluções para E-commerce",
    description:
      "Conheça as soluções da Plug Go para e-commerce com foco em conversão, fluidez da jornada e eficiência de pagamento.",
    path: "/solucoes/para-e-commerce",
    keywords: [
      ...COMMON_KEYWORDS,
      "solucoes para e-commerce",
      "pagamentos para ecommerce",
      "conversao em checkout",
    ],
  },
  solucoesParaMarketplaces: {
    title: "Soluções para Marketplaces",
    description:
      "Conheça as soluções da Plug Go para marketplaces com mais controle em repasses, cobranças e operações complexas.",
    path: "/solucoes/para-marketplaces",
    keywords: [
      ...COMMON_KEYWORDS,
      "solucoes para marketplaces",
      "repasses marketplace",
      "pagamentos marketplace",
    ],
  },
  solucoesParaPlataformasDigitais: {
    title: "Soluções para Plataformas Digitais",
    description:
      "Conheça as soluções da Plug Go para plataformas digitais com integração, automação e base para crescimento.",
    path: "/solucoes/para-plataformas-digitais",
    keywords: [
      ...COMMON_KEYWORDS,
      "solucoes para plataformas digitais",
      "integracao financeira",
      "automacao financeira",
    ],
  },
  solucoesParaNegociosRecorrentes: {
    title: "Soluções para Negócios Recorrentes",
    description:
      "Conheça as soluções da Plug Go para negócios recorrentes com mais previsibilidade de receita e eficiência em cobranças.",
    path: "/solucoes/para-negocios-recorrentes",
    keywords: [
      ...COMMON_KEYWORDS,
      "solucoes para negocios recorrentes",
      "cobranca recorrente",
      "gestao de assinaturas",
    ],
  },
  termsOfServices: {
    title: "Termos de Serviço",
    description:
      "Consulte os termos que regem o uso dos canais e serviços da Plug Go.",
    path: "/terms-of-services",
    keywords: [...COMMON_KEYWORDS, "termos de uso", "terms of services"],
  },
  privacyPolicy: {
    title: "Política de Privacidade",
    description:
      "Entenda como a Plug Go coleta, utiliza e protege dados pessoais.",
    path: "/privacy-policy",
    keywords: [...COMMON_KEYWORDS, "politica de privacidade", "privacy policy"],
  },
  cookiePolicy: {
    title: "Política de Cookies",
    description:
      "Saiba como a Plug Go utiliza cookies e como você pode gerenciar preferências.",
    path: "/cookie-policy",
    keywords: [...COMMON_KEYWORDS, "politica de cookies", "cookie policy"],
  },
};

export function buildPageMetadata(pageSeo: PageSeo): Metadata {
  if (!pageSeo) {
    return buildPageMetadata(HOME_SEO);
  }

  const absoluteUrl = new URL(pageSeo.path, SITE_URL).toString();

  return {
    title: pageSeo.title,
    description: pageSeo.description,
    keywords: pageSeo.keywords,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: pageSeo.title,
      description: pageSeo.description,
      url: absoluteUrl,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageSeo.title,
      description: pageSeo.description,
    },
  };
}

export function buildServiceMetadata(service: Service): Metadata {
  return buildDetailMetadata(service, `/solucoes/${service.slug}`);
}

type SegmentServiceMetadataOptions = {
  segmentTitle: string;
  segmentKeywords: string[];
};

export function buildDetailMetadata(
  detail: SlugPageDetail,
  path: string,
): Metadata {
  const absoluteUrl = new URL(path, SITE_URL).toString();

  return {
    title: detail.title,
    description: detail.seoDescription,
    keywords: [...COMMON_KEYWORDS, ...detail.seoKeywords],
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: `${detail.title} | ${SITE_NAME}`,
      description: detail.seoDescription,
      url: absoluteUrl,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${detail.title} | ${SITE_NAME}`,
      description: detail.seoDescription,
    },
  };
}

export function buildSegmentServiceMetadata(
  detail: SlugPageDetail,
  path: string,
  options: SegmentServiceMetadataOptions,
): Metadata {
  const absoluteUrl = new URL(path, SITE_URL).toString();
  const title = `${options.segmentTitle} | ${detail.title}`;
  const description = detail.seoDescription;

  return {
    title,
    description,
    keywords: [...COMMON_KEYWORDS, ...options.segmentKeywords, ...detail.seoKeywords],
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: absoluteUrl,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}