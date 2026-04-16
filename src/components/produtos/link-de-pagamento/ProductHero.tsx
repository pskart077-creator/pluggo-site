import PageHero from "@/components/page-hero/PageHero";

export default function ProductHero() {
  return (
    <PageHero
      title="Link de pagamento"
      description="Conheça o link de pagamento da Plug Go e veja como nossa tecnologia pode facilitar cobranças, agilizar vendas e tornar o processo de pagamento mais simples e prático."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Produtos", href: "/produtos" },
        { label: "Link de pagamento" },
      ]}
    />
  );
}