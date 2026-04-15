import type { SlugPageDetail } from "@/types";

export const ABOUT_TOPICS: SlugPageDetail[] = [
  {
    slug: "hub-financeiro",
    title: "Hub financeiro completo",
    seoDescription:
      "Entenda como a Plug Go conecta soluções financeiras para pessoas e empresas em uma experiência unificada.",
    seoKeywords: [
      "hub financeiro completo",
      "sobre plug go",
      "plataforma financeira integrada",
    ],
    description:
      "A Plug Go conecta soluções financeiras para pessoas e empresas em uma experiência mais simples, segura e funcional.",
    highlights: [
      "Gestão inteligente da rotina financeira",
      "Mais clareza para movimentar e receber",
      "Experiência simples e segura",
    ],
  },
  {
    slug: "missao",
    title: "Nossa missão",
    seoDescription:
      "Conheça a missão da Plug Go para simplificar a rotina financeira com uma plataforma moderna e eficiente.",
    seoKeywords: [
      "missao plug go",
      "simplificar rotina financeira",
      "plataforma financeira moderna",
    ],
    description:
      "Nossa missão é simplificar a rotina financeira com uma plataforma moderna, organizada e eficiente para pessoas e empresas.",
    highlights: [
      "Mais praticidade no dia a dia",
      "Operação centralizada",
      "Soluções para PF e PJ",
    ],
  },
  {
    slug: "visao",
    title: "Nossa visão",
    seoDescription:
      "Veja a visão da Plug Go sobre o futuro das soluções financeiras para pessoas e empresas.",
    seoKeywords: [
      "visao plug go",
      "futuro financeiro",
      "inovacao em solucoes financeiras",
    ],
    description:
      "Queremos transformar a relação com soluções financeiras, entregando mais clareza, confiança e eficiência em cada etapa.",
    highlights: [
      "Mais confiança nas operações",
      "Visão mais clara da rotina financeira",
      "Tecnologia com praticidade",
    ],
  },
];

export function getAboutTopicBySlug(slug: string) {
  return ABOUT_TOPICS.find((topic) => topic.slug === slug);
}