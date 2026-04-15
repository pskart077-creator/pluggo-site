import PageHero from "@/components/page-hero/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      title="Para Você"
      description="Conheça as soluções da PlugGo para pessoa física e descubra como nossa tecnologia pode trazer mais praticidade, segurança e agilidade para o seu dia a dia."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Soluções", href: "/solucoes" },
        { label: "Para Você" },
      ]}
    />
  );
}