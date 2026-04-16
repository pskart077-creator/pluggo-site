import PageHero from "@/components/page-hero/PageHero";

export default function ProductHero() {
  return (
    <PageHero
      title="Split de pagamentos"
      description="Conheça o split de pagamentos da Plug Go e veja como nossa tecnologia ajuda a distribuir valores com mais controle, flexibilidade e eficiência em operações complexas."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Produtos", href: "/produtos" },
        { label: "Split de pagamentos" },
      ]}
    />
  );
}