import PageHero from "@/components/page-hero/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      title="Para Negócios Recorrentes"
      description="Conheça as soluções da PlugGo para negócios recorrentes e descubra como otimizar cobranças, automações e gestão com mais previsibilidade e eficiência."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Soluções", href: "/solucoes" },
        { label: "Para Negócios Recorrentes" },
      ]}
    />
  );
}