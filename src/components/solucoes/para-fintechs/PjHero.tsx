import PageHero from "@/components/page-hero/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      title="Para Fintechs"
      description="Conheça as soluções da PlugGo para fintechs e descubra uma estrutura preparada para escalar operações com segurança, performance e flexibilidade."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Soluções", href: "/solucoes" },
        { label: "Para Fintechs" },
      ]}
    />
  );
}