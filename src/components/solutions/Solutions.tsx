import Image from "next/image";

export default function Solutions() {
  const proofAvatarImages = [
    "/assets/img/solutions/people/people-01.png",
    "/assets/img/solutions/people/people-02.png",
    "/assets/img/solutions/people/people-03.png",
    "/assets/img/solutions/people/people-04.png",
    "/assets/img/solutions/people/people-05.png",
  ];

  return (
    <section id="soluções" className="solutions-section section-anchor">
      <div className="solutions-layout">
        <div className="solutions-visual">
          <Image
            src="/assets/img/solutions/global.svg"
            alt="Hub financeiro conectado globalmente"
            width={779}
            height={744}
          />
        </div>

        <div className="solutions-content">
          <p className="solutions-eyebrow">HUB FINANCEIRO PLUG GO</p>

          <h2 className="solutions-title">
            Uma experiência financeira mais conectada para pessoas e empresas.
          </h2>

          <p className="solutions-description">
            A Plug Go reúne soluções essenciais em uma plataforma mais simples,
            segura e funcional. Com uma proposta pensada para o dia a dia, a
            experiência se torna mais fluida para movimentar, receber e
            organizar a rotina financeira com mais clareza e praticidade.
          </p>

          <div className="solutions-proof">
            <div className="solutions-proof-avatars" aria-hidden="true">
              {proofAvatarImages.map((avatarSrc) => (
                <Image
                  key={avatarSrc}
                  className="solutions-proof-avatar"
                  src={avatarSrc}
                  alt=""
                  width={48}
                  height={48}
                />
              ))}
              <span className="solutions-proof-badge">50M</span>
            </div>

            <p className="solutions-proof-text">
              Uma plataforma pensada para quem busca mais praticidade,
              segurança e controle financeiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
