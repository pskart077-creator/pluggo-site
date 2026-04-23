import type { ContactWizardStepMeta, OptionItem } from "@/components/contato/pluggo-contact-wizard.types";

export const CONTACT_WIZARD_STEPS: ContactWizardStepMeta[] = [
  {
    title: "Primeiro, seus dados iniciais.",
    subtitle: "Com essas informações, a PlugGo já consegue iniciar seu atendimento com mais agilidade e contexto.",
  },
  {
    title: "Agora, fale sobre sua empresa e sua operação.",
    subtitle: "Queremos entender sua estrutura comercial para direcionar um diagnóstico mais preciso.",
  },
  {
    title: "Agora, vamos entender seu volume.",
    subtitle: "Com esse recorte, conseguimos avaliar o potencial da sua operação com mais precisão.",
  },
  {
    title: "Onde a sua operação mais perde resultado hoje?",
    subtitle: "Vamos identificar o principal gargalo que impacta sua conversão, aprovação ou receita.",
  },
  {
    title: "Perfeito. Falta só concluir seu diagnóstico.",
    subtitle: "Informe seu e-mail corporativo para que a PlugGo possa dar continuidade ao atendimento.",
  },
];

export const SEGMENT_OPTIONS: OptionItem[] = [
  { value: "ecommerce", label: "E-commerce" },
  { value: "marketplace", label: "Marketplace" },
  { value: "infoproduto", label: "Infoproduto" },
  { value: "saas", label: "SaaS" },
  { value: "servicos", label: "Serviços" },
  { value: "outro", label: "Outro" },
];

export const SALES_CHANNEL_OPTIONS: OptionItem[] = [
  { value: "site-proprio", label: "Site próprio" },
  { value: "checkout-externo", label: "Checkout externo" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "marketplace", label: "Marketplace" },
  { value: "multicanal", label: "Mais de um canal" },
];

export const OPERATION_MODEL_OPTIONS: OptionItem[] = [
  { value: "b2c", label: "B2C" },
  { value: "b2b", label: "B2B" },
  { value: "hibrida", label: "Híbrida" },
];

export const TRANSACTION_OPTIONS: OptionItem[] = [
  { value: "ate-500", label: "Até 500" },
  { value: "500-2000", label: "500 a 2.000" },
  { value: "2000-10000", label: "2.000 a 10.000" },
  { value: "10000-plus", label: "10.000+" },
];

export const REVENUE_OPTIONS: OptionItem[] = [
  { value: "ate-50k", label: "Até R$ 50 mil" },
  { value: "50k-300k", label: "R$ 50 mil a R$ 300 mil" },
  { value: "300k-1m", label: "R$ 300 mil a R$ 1 milhão" },
  { value: "1m-plus", label: "Acima de R$ 1 milhão" },
];

export const TICKET_OPTIONS: OptionItem[] = [
  { value: "ate-100", label: "Até R$ 100" },
  { value: "100-300", label: "R$ 100 a R$ 300" },
  { value: "300-1000", label: "R$ 300 a R$ 1.000" },
  { value: "1000-plus", label: "Acima de R$ 1.000" },
];

export const MAIN_PAIN_OPTIONS: OptionItem[] = [
  { value: "abandono-checkout", label: "Abandono no checkout" },
  { value: "conversao-baixa", label: "Conversão baixa" },
  { value: "aprovacao-baixa", label: "Aprovação baixa" },
  { value: "fraude-chargeback", label: "Fraude e chargeback" },
  { value: "lentidao-pagamento", label: "Lentidão no pagamento" },
  { value: "falta-integracao", label: "Falta de integração" },
  { value: "falta-visao-dados", label: "Falta de visibilidade dos dados" },
];

export const LOSS_STAGE_OPTIONS: OptionItem[] = [
  { value: "carrinho", label: "Carrinho" },
  { value: "cadastro", label: "Cadastro" },
  { value: "checkout", label: "Checkout" },
  { value: "pagamento", label: "Pagamento" },
  { value: "aprovacao", label: "Aprovação" },
];

export const URGENCY_OPTIONS: OptionItem[] = [
  { value: "agora", label: "Quero resolver agora" },
  { value: "30-dias", label: "Nos próximos 30 dias" },
  { value: "90-dias", label: "Nos próximos 90 dias" },
  { value: "avaliando", label: "Estou avaliando no momento" },
];
