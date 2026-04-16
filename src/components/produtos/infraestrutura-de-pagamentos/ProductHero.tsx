import PageHero from "@/components/page-hero/PageHero";

export default function ProductHero() {
  return (
    <PageHero
      title="Infraestrutura de pagamentos"
      description="Conheça a infraestrutura de pagamentos da Plug Go e descubra como nossa tecnologia pode trazer mais segurança, estabilidade, escala e eficiência para diferentes operações digitais."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Produtos", href: "/produtos" },
        { label: "Infraestrutura de pagamentos" },
      ]}
    />
  );
}