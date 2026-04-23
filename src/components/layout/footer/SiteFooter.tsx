import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="PlugGo Início">
            <Image
              src="/assets/img/logo/logo.svg"
              alt="PlugGo"
              className="site-logo-image"
              width={90}
              height={33}
              priority
            />
          </Link>

          <p className="footer-description">
            A Plug Go conecta soluções financeiras para pessoas e empresas em
            uma experiência mais simples, segura e funcional.
          </p>

          <div className="footer-socials" aria-label="Redes sociais">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
            <a href="#" aria-label="X">
              x
            </a>
            <a href="#" aria-label="Instagram">
              ig
            </a>
            <a href="#" aria-label="YouTube">
              yt
            </a>
          </div>
        </div>

        <nav className="footer-column" aria-label="Soluções">
          <h4>Soluções</h4>
          <Link href="/servicos/conta-digital">Conta digital</Link>
          <Link href="/servicos/cobrancas-integradas">Cobranças</Link>
          <Link href="/servicos/seguranca-financeira">Seguros</Link>
          <Link href="/servicos/cripto">Cripto</Link>
        </nav>

        <nav className="footer-column" aria-label="Empresa">
          <h4>Empresa</h4>
          <Link href="/sobre">Sobre</Link>
          <Link href="/sobre">Para Você</Link>
          <Link href="/sobre">Para Empresas</Link>
          <Link href="/contato">Contato</Link>
        </nav>

        <nav className="footer-column" aria-label="Suporte">
          <h4>Suporte</h4>
          <a href="#faq">Central de ajuda</a>
          <Link href="/seguranca">Segurança</Link>
          <Link href="/privacy-policy">Política de Privacidade</Link>
          <Link href="/terms-of-services">Termos de Serviço</Link>
        </nav>

        <div className="footer-contact">
          <h4>Atendimento em dias úteis das 8h às 20h (Horário de Brasília)</h4>

          <div className="footer-contact-item">
            <Phone size={18} strokeWidth={2} />
            <p>(11) 91533-3965</p>
          </div>

          <div className="footer-contact-item">
            <Mail size={18} strokeWidth={2} />
            <a href="mailto:contato@pluggopay.com.br">
              contato@pluggopay.com.br
            </a>
          </div>

          <div className="footer-contact-item footer-contact-item-address">
            <MapPin size={18} strokeWidth={2} />
            <div>
              <p>Av. Alameda Mamoré, 503 - Alphaville</p>
              <p>Barueri - SP, CEP 06454-040</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <p>
          A PLUGGO CAPITAL - SYFRA PAYMENTS SOLUCOES EM PAGAMENTOS LTDA,
          inscrita no CNPJ n. 22.605.209/0001-11, atua na intermediação de
          serviços financeiros, nos termos da regulamentação do Banco Central
          do Brasil. Todos os produtos e serviços financeiros são fornecidos
          por instituições financeiras parceiras autorizadas pelo Banco
          Central.
        </p>
      </div>

      <div className="site-footer-content">
        <p>&copy; Plug Go - Todos os direitos reservados</p>

        <div className="site-footer-links">
          <Link href="/terms-of-services">Termos de Serviço</Link>
          <Link href="/privacy-policy">Política de Privacidade</Link>
          <Link href="/cookie-policy">Política de Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
