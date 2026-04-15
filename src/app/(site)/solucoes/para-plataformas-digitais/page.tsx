import type { Metadata } from "next";
import SiteFooter from "@/components/layout/footer/SiteFooter";
import Service from "@/components/solucoes/para-plataformas-digitais/ServiceSplitPj";
import ServiceCard from "@/components/solucoes/para-plataformas-digitais/ServiceCard";
import ServicesHero from "@/components/solucoes/para-plataformas-digitais/PjHero";
import Contact from "@/components/contato/Contact";
import { STATIC_PAGE_SEO, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(STATIC_PAGE_SEO.solucoesParaPlataformasDigitais);

export default function PjPage() {
  return (
    <>
      <ServicesHero />
      <Service />
      <ServiceCard />
      <Contact />
      <SiteFooter />
    </>
  );
}
