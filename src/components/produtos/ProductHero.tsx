import PageHero from "@/components/page-hero/PageHero";

export default function ProductsHero() {
  return (
    <PageHero
      title="Nossos Produtos"
      description="Conheça os produtos da Plug Go e veja como nossa tecnologia ajuda a estruturar pagamentos, reduzir fricções, aumentar a segurança da operação e criar experiências mais eficientes para pessoas e empresas."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Produtos" },
      ]}
    />
  );
}