import PageHero from "@/components/page-hero/PageHero";

export default function ProductHero() {
  return (
    <PageHero
      title="Checkout inteligente"
      description="Conheça o checkout inteligente da Plug Go e descubra como nossa tecnologia pode reduzir fricções, aumentar conversões e tornar a jornada de pagamento mais fluida e eficiente."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Produtos", href: "/produtos" },
        { label: "Checkout inteligente" },
      ]}
    />
  );
}