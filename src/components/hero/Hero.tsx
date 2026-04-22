import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="pluggo-hero section-anchor">
      <div className="pluggo-hero__bg" aria-hidden="true">
        <div className="pluggo-hero__overlay" />
      </div>

      <div className="pluggo-hero__container">
        <div className="pluggo-hero__inner">
          <div className="pluggo-hero__content">
            <h1 className="pluggo-hero__title">
              Seu Hub Financeiro Completo
              <br />
              Para Movimentar, Receber E
              <br />
              Organizar Sua Rotina.
            </h1>

            <p className="pluggo-hero__description">
              A PlugGo conecta soluções essenciais para pessoas e empresas em uma
              experiência mais simples, segura e inteligente. Centralize sua
              rotina financeira com mais praticidade, clareza e controle no dia a dia.
            </p>

            <div className="pluggo-hero__actions">
              <Link href="/contato" className="pluggo-hero__button">
                Fale Conosco
              </Link>
            </div>
          </div>

          <div className="pluggo-hero__visual">
            <div className="pluggo-hero__grid">
              <article className="pluggo-hero__card pluggo-hero__card--main">
                <span className="pluggo-hero__brand-badge">PlugGo</span>

                <div className="pluggo-hero__media-slot pluggo-hero__media-slot--main">
                  <Image
                    src="/assets/img/hero/pluggo-main.png"
                    alt="Dashboard da PlugGo em notebook"
                    fill
                    priority
                    className="pluggo-hero__main-image"
                  />
                </div>

                <div className="pluggo-hero__floating">
                  <div className="pluggo-hero__floating-avatar">
                    <Image
                      src="/assets/img/hero/pluggo-avatar.png"
                      alt="Avatar do usuário"
                      fill
                      className="pluggo-hero__floating-avatar-image"
                    />
                  </div>

                  <div className="pluggo-hero__floating-copy">
                    <strong>Entrada confirmada</strong>
                    <span>Hoje</span>
                  </div>

                  <div className="pluggo-hero__floating-value">
                    <strong>R$42,54</strong>
                    <span>Valor registrado</span>
                  </div>
                </div>
              </article>

              <div className="pluggo-hero__stack">
                <article className="pluggo-hero__card pluggo-hero__card--top">
                  <div className="pluggo-hero__media-slot pluggo-hero__media-slot--top">
                    <Image
                      src="/assets/img/hero/pluggo-top.jpg"
                      alt="Equipe utilizando a PlugGo"
                      fill
                      className="pluggo-hero__top-image"
                    />
                  </div>

                  <div className="pluggo-hero__top-pill">
                    <div className="pluggo-hero__top-pill-icon">
                      <Globe size={15} />
                    </div>

                    <div className="pluggo-hero__top-pill-copy">
                      <strong>Visão financeira completa</strong>
                      <span>Tudo centralizado em um único painel</span>
                    </div>
                  </div>
                </article>

                <article className="pluggo-hero__card pluggo-hero__card--phone">
                  <div className="pluggo-hero__phone-image-wrap">
                    <Image
                      src="/assets/img/hero/pluggo-phone.png"
                      alt="Aplicativo da PlugGo no celular"
                      fill
                      priority
                      className="pluggo-hero__phone-image"
                    />
                  </div>
                </article>
              </div>

              <article className="pluggo-hero__card pluggo-hero__card--banner">
                <div className="pluggo-hero__banner-copy">
                  <p>Organize, acompanhe e projete suas finanças</p>
                </div>

                <div className="pluggo-hero__banner-arrow" aria-hidden="true">
                  <ArrowUpRight size={28} />
                </div>

                <div className="pluggo-hero__banner-mark" aria-hidden="true" />
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}