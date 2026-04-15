import PageHero from "@/components/page-hero/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      title="Para Marketplaces"
      description="Conheça as soluções da PlugGo para marketplaces e descubra uma estrutura preparada para dar mais controle, fluidez e segurança às operações."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Soluções", href: "/solucoes" },
        { label: "Para Marketplaces" },
      ]}
    />
  );
}