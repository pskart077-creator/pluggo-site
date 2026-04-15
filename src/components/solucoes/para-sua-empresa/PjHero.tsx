import PageHero from "@/components/page-hero/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      title="Para Empresas"
      description="Conheça as soluções da PlugGo para empresas e descubra como nossa tecnologia pode trazer mais controle, eficiência e segurança para a operação."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Soluções", href: "/solucoes" },
        { label: "Para Empresas" },
      ]}
    />
  );
}