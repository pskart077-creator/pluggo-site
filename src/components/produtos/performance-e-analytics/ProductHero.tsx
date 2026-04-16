import PageHero from "@/components/page-hero/PageHero";

export default function ProductHero() {
  return (
    <PageHero
      title="Performance e analytics"
      description="Conheça a solução de performance e analytics da Plug Go e acompanhe indicadores importantes para evoluir decisões, resultados e eficiência operacional."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Produtos", href: "/produtos" },
        { label: "Performance e analytics" },
      ]}
    />
  );
}