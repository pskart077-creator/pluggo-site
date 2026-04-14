import PageHero from "@/components/page-hero/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      title="Nossas Soluções"
      description="Explore as soluções da Plug Go e veja como a tecnologia pode transformar rotinas, otimizar processos e entregar mais segurança, eficiência e conveniência para pessoas e empresas."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Soluções" },
      ]}
    />
  );
}