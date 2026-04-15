import PageHero from "@/components/page-hero/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      title="Para E-commerce"
      description="Conheça as soluções da PlugGo para e-commerce e descubra como nossa tecnologia pode trazer mais conversão, fluidez e eficiência para a jornada de compra."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Soluções", href: "/solucoes" },
        { label: "Para E-commerce" },
      ]}
    />
  );
}