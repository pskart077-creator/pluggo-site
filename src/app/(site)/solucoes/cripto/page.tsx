import type { Metadata } from "next";
import SiteFooter from "@/components/layout/footer/SiteFooter";
import CriptoAbout from "@/components/solucoes/cripto/CriptoAbout";
import CriptoHero from "@/components/solucoes/cripto/CriptoHero";
import CriptoSection from "@/components/solucoes/cripto/CriptoSection";
import Contact from "@/components/contato/Contact";
import FaqCripto from "@/components/solucoes/cripto/FaqCripto";
import { STATIC_PAGE_SEO, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(STATIC_PAGE_SEO.solucoes);

export default function ServicesPage() {
  return (
    <>
      <CriptoHero />
      <CriptoSection />
      <CriptoAbout />
      <FaqCripto />
      <Contact />
      <SiteFooter />
    </>
  );
}
