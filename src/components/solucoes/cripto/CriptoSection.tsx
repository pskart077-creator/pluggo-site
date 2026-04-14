import { Check } from "lucide-react";
import Image from "next/image";

const aboutItemsLeft = [
  "Soluções digitais inteligentes",
  "Integrações sob medida",
  "Performance e escalabilidade",
];

const aboutItemsRight = [
  "Segurança para operações",
  "Estratégia para empresas",
  "Tecnologia para crescimento",
];

export default function AboutSection() {
  return (
    <section className="about-crypto-section">
      <div className="about-crypto-container">
        <div className="about-crypto-grid">
          <div className="about-crypto-content">
            <span className="about-crypto-pill">Sobre nós</span>

            <h2 className="about-crypto-title">
              Tecnologia inteligente
              <br />
              para acelerar negócios
            </h2>

            <p className="about-crypto-description">
              A PlugGo desenvolve soluções digitais modernas para conectar pessoas,
              empresas e operações com mais eficiência, segurança e escalabilidade.
              Unimos estratégia, tecnologia e inovação para transformar desafios em crescimento.
            </p>

            <div className="about-crypto-lists">
              <ul className="about-crypto-list">
                {aboutItemsLeft.map((item) => (
                  <li key={item}>
                    <span className="about-crypto-list__icon">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="about-crypto-list">
                {aboutItemsRight.map((item) => (
                  <li key={item}>
                    <span className="about-crypto-list__icon">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-crypto-visual">
            <div className="about-crypto-card">
              <Image
                src="/assets/img/about/img-01.png"
                alt="PlugGo tecnologia e soluções digitais"
                fill
                className="about-crypto-card__image"
              />

              <span className="about-crypto-square about-crypto-square--one" />
              <span className="about-crypto-square about-crypto-square--two" />
              <span className="about-crypto-square about-crypto-square--three" />
              <span className="about-crypto-square about-crypto-square--four" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}