import type { SlugPageDetail } from "@/types";

export const CONTACT_TOPICS: SlugPageDetail[] = [
  {
    slug: "atendimento-comercial",
    title: "Atendimento comercial",
    seoDescription:
      "Fale com o time comercial da Plug Go para avaliar soluções aderentes ao seu momento.",
    seoKeywords: [
      "atendimento comercial",
      "contato comercial plug go",
      "consultoria financeira",
    ],
    description:
      "Converse com nosso time comercial para entender como as soluções da Plug Go podem se encaixar na sua operação.",
    highlights: [
      "Mapeamento do seu contexto",
      "Orientação sobre serviços aderentes",
      "Suporte para início da jornada",
    ],
  },
  {
    slug: "suporte",
    title: "Suporte",
    seoDescription:
      "Acesse o suporte da Plug Go para tirar dúvidas e manter sua rotina financeira operando com fluidez.",
    seoKeywords: [
      "suporte plug go",
      "atendimento financeiro",
      "ajuda plataforma financeira",
    ],
    description:
      "Nosso suporte ajuda a manter sua operação estável e funcional, com respostas objetivas para o dia a dia.",
    highlights: [
      "Apoio em dúvidas operacionais",
      "Orientação sobre fluxos da plataforma",
      "Atendimento para pessoas e empresas",
    ],
  },
  {
    slug: "parcerias",
    title: "Parcerias",
    seoDescription:
      "Entre em contato com a Plug Go para avaliar oportunidades de parceria e colaboração.",
    seoKeywords: [
      "parcerias plug go",
      "oportunidades de parceria",
      "ecossistema financeiro",
    ],
    description:
      "Construímos parcerias para ampliar o acesso a soluções financeiras e fortalecer a experiência de pessoas e empresas.",
    highlights: [
      "Modelos de colaboração alinhados ao negócio",
      "Integração com foco em valor para o cliente",
      "Relação de longo prazo com evolução contínua",
    ],
  },
];

export function getContactTopicBySlug(slug: string) {
  return CONTACT_TOPICS.find((topic) => topic.slug === slug);
}