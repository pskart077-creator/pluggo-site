import PageHero from "@/components/page-hero/PageHero";

export default function ProductHero() {
  return (
    <PageHero
      title="Pagamentos recorrentes"
      description="Conheça a solução de pagamentos recorrentes da Plug Go e descubra como automatizar cobranças com mais previsibilidade, eficiência e controle para sua operação."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Produtos", href: "/produtos" },
        { label: "Pagamentos recorrentes" },
      ]}
    />
  );
}