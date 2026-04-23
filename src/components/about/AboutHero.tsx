import PageHero from "@/components/page-hero/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      title="Sobre Nos"
      description="Conheca a Plug Go e nossa forma de conectar soluções financeiras para pessoas e empresas."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre Nos" },
      ]}
    />
  );
}
