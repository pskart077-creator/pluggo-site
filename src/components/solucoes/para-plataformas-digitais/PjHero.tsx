import PageHero from "@/components/page-hero/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      title="Para Plataformas Digitais"
      description="Conheça as soluções da PlugGo para plataformas digitais e descubra uma base tecnológica preparada para integrar, automatizar e sustentar crescimento."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Soluções", href: "/solucoes" },
        { label: "Para Plataformas Digitais" },
      ]}
    />
  );
}