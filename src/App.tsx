import { useState } from "react"
import type { ElementType } from "react"

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Eye,
  Heart,
  Menu,
  MoonStar,
  Sparkles,
  Star,
  X,
} from "lucide-react"

import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa"

type ServiceItem = {
  name: string
  description?: string
  price: string
}

type Service = {
  tag: string
  title: string
  description: string
  icon: ElementType
  items: ServiceItem[]
}

const WHATSAPP_NUMBER = "553191749920"

const INSTAGRAM_URL =
  "https://www.instagram.com/_mystheria/"

const TIKTOK_URL =
  "https://www.tiktok.com/@mystheria.oraculos"

const PORTFOLIO_URL = "/portfolio-mystheria.pdf"

const services: Service[] = [
  {
    tag: "Direto ao ponto",
    title: "Perguntas objetivas",
    description:
      "Perguntas claras e diretas para orientações precisas sobre uma situação específica.",
    icon: Sparkles,
    items: [
      {
        name: "1 pergunta",
        price: "R$ 10,00",
      },
      {
        name: "3 perguntas",
        price: "R$ 25,00",
      },
      {
        name: "Pergunta adicional",
        price: "R$ 7,00",
      },
    ],
  },
  {
    tag: "Autoconhecimento",
    title: "Perguntas aprofundadas",
    description:
      "Questões para ir além do sim ou não, buscando autoconhecimento, causas ocultas e caminhos possíveis.",
    icon: MoonStar,
    items: [
      {
        name: "1 pergunta",
        price: "R$ 16,00",
      },
      {
        name: "3 perguntas",
        price: "R$ 42,00",
      },
    ],
  },
  {
    tag: "Amor e vínculos",
    title: "Relacionamentos",
    description:
      "Métodos voltados para vínculos afetivos, sentimentos, decisões e dinâmicas amorosas.",
    icon: Heart,
    items: [
      {
        name: "Templo de Afrodite",
        description:
          "7 cartas, conexão entre duas pessoas",
        price: "R$ 45,00",
      },
      {
        name: "Reconciliação e Pontes",
        description:
          "6 cartas, conflitos e bloqueios",
        price: "R$ 40,00",
      },
      {
        name: "Caminhos do Amor",
        description:
          "6 cartas, vida amorosa e energias futuras",
        price: "R$ 45,00",
      },
      {
        name: "Ficar ou Partir",
        description:
          "5 cartas. Clareza amorosa para quem está dividido entre permanecer ou encerrar um vínculo.",
        price: "R$ 40,00",
      },
      {
        name: "Templo do Diabo",
        description:
          "6 cartas. Explora segredos, desejos, influências externas e a natureza da ligação entre duas pessoas.",
        price: "R$ 45,00",
      },
    ],
  },
  {
    tag: "Trabalho",
    title: "Profissional e carreiras",
    description:
      "Direção e estratégia para o seu momento profissional.",
    icon: BriefcaseBusiness,
    items: [
      {
        name: "Âncora Profissional",
        description:
          "8 cartas, fortalecimento no trabalho atual",
        price: "R$ 45,00",
      },
      {
        name: "Novo Horizonte",
        description:
          "8 cartas, novas oportunidades e transição",
        price: "R$ 45,00",
      },
    ],
  },
  {
    tag: "Alma",
    title: "Espiritualidade e autoimagem",
    description:
      "Leituras para escutar sua espiritualidade, sua proteção e a forma como você se enxerga.",
    icon: Eye,
    items: [
      {
        name: "Sentinela do Caminho",
        description:
          "8 cartas, escolhas espirituais e guias",
        price: "R$ 50,00",
      },
      {
        name: "Encruzilhada Interior",
        description:
          "6 cartas, estado espiritual e proteção",
        price: "R$ 45,00",
      },
      {
        name: "Espelho da Alma",
        description:
          "5 cartas, autoestima e expressão externa",
        price: "R$ 40,00",
      },
    ],
  },
  {
    tag: "Panorama",
    title: "Leitura mensal",
    description:
      "Análise de tendências, desafios e oportunidades do mês para agir com mais consciência.",
    icon: Star,
    items: [
      {
        name: "Leitura completa do mês",
        price: "R$ 75,00",
      },
    ],
  },
  {
    tag: "Personalizado",
    title: "Exclusivos e combos",
    description:
      "Leituras sob medida e combinações para quem busca mais profundidade.",
    icon: Sparkles,
    items: [
      {
        name: "Alquimia Oracular",
        description:
          "4 a 8 cartas, leitura personalizada",
        price: "A combinar",
      },
      {
        name: "Combo Caminhos do Amor",
        description:
          "Inclui 1 pergunta objetiva",
        price: "R$ 50,00",
      },
      {
        name: "Combo Direção Profissional",
        description:
          "Novo Horizonte com 1 pergunta aprofundada",
        price: "R$ 50,00",
      },
    ],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const createWhatsappLink = (
    category?: string,
    service?: string,
    price?: string,
  ) => {
    let message =
      "Olá, Ana! Conheci a Mystheria pelo site e gostaria de saber mais sobre as leituras."

    if (category && service) {
      message =
        `Olá, Ana! Conheci a Mystheria pelo site e gostaria de agendar uma leitura.\n\n` +
        `Categoria: ${category}\n` +
        `Método: ${service}` +
        (price ? `\nValor: ${price}` : "")
    }

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`
  }

  const createOtherMethodsLink = () => {
    const message =
      "Olá, Ana! Conheci a Mystheria pelo site. Vi que existem outros métodos além dos apresentados e gostaria de saber qual combina melhor com a minha questão."

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`
  }

  return (
    <div className="site">
      <header className="header">
        <a
          href="#inicio"
          className="brand"
          onClick={closeMenu}
        >
          <img
            src="/mystheria-logo.png"
            alt="Logo Mystheria"
            className="brand-logo"
          />

          <div className="brand-copy">
            <strong>Mystheria</strong>
            <span>Cartomancia</span>
          </div>
        </a>

        <nav className="desktop-nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#leituras">Leituras</a>

          <a href={PORTFOLIO_URL} download>
            Portfólio
          </a>

          <a href="#contato">Contato</a>
        </nav>

        <div className="header-right">
          <div className="header-socials">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Mystheria"
            >
              <FaInstagram />
            </a>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok da Mystheria"
            >
              <FaTiktok />
            </a>
          </div>

          <a
            href={createWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="header-cta"
          >
            <FaWhatsapp className="whatsapp-icon" />
            AGENDAR
          </a>
        </div>

        <button
          className={`menu-toggle ${
            menuOpen ? "menu-toggle-open" : ""
          }`}
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((value) => !value)
          }
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </header>

      <button
        className={`menu-backdrop ${
          menuOpen ? "menu-backdrop-visible" : ""
        }`}
        aria-label="Fechar menu"
        onClick={closeMenu}
      />

      <aside
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <div className="mobile-menu-head">
          <div>
            <span>Menu</span>
            <strong>Mystheria</strong>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <X size={21} />
          </button>
        </div>

        <nav className="mobile-menu-links">
          <a href="#inicio" onClick={closeMenu}>
            <span>Início</span>
            <ArrowUpRight size={17} />
          </a>

          <a href="#sobre" onClick={closeMenu}>
            <span>Sobre</span>
            <ArrowUpRight size={17} />
          </a>

          <a href="#leituras" onClick={closeMenu}>
            <span>Leituras</span>
            <ArrowUpRight size={17} />
          </a>

          <a
            href={PORTFOLIO_URL}
            download
            onClick={closeMenu}
          >
            <span>Portfólio</span>
            <Download size={17} />
          </a>

          <a href="#contato" onClick={closeMenu}>
            <span>Contato</span>
            <ArrowUpRight size={17} />
          </a>
        </nav>

        <div className="mobile-menu-bottom">
          <a
            href={createWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mobile-whatsapp"
          >
            <FaWhatsapp size={22} />
            AGENDAR PELO WHATSAPP
          </a>

          <div className="mobile-socials">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </aside>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <span className="hero-kicker">
              Cartomancia
            </span>

            <h1>
              Um olhar mais
              <br />
              claro para o que
              <br />
              <em>você está vivendo.</em>
            </h1>

            <p>
              Leituras sensíveis e sem julgamentos
              para momentos de dúvida, transformação,
              escolhas e reconexão interior.
            </p>

            <div className="hero-actions">
              <a
                href="#leituras"
                className="primary-button"
              >
                Ver leituras
                <ArrowRight size={17} />
              </a>

              <a
                href={createWhatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <FaWhatsapp size={20} />
                AGENDAR
              </a>

              <a
                href={PORTFOLIO_URL}
                download
                className="portfolio-button"
              >
                <Download size={16} />
                PORTFÓLIO
              </a>
            </div>

            <div className="hero-signature">
              <strong>
                Ana Carolina Amaral
              </strong>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-image-wrap">
              <img
                src="/hero-cartomancia.jpg"
                alt="Cartas utilizadas em uma leitura"
                className="hero-image"
              />

              <div className="hero-image-overlay" />

              <span className="hero-image-tag">
                ✦ Mystheria
              </span>
            </div>
          </div>
        </section>

        <section
          className="about section"
          id="sobre"
        >
          <div className="about-label">
            <span>Sobre</span>
          </div>

          <div className="about-main">
            <div className="about-name">
              <span>Ana Carolina</span>
              <strong>Amaral</strong>
            </div>

            <div className="about-text">
              <p>
                Sou{" "}
                <strong>
                  Ana Carolina Amaral
                </strong>
                , cartomante apaixonada por ouvir
                histórias e acolher sentimentos.
                Através do Tarot, ofereço leituras
                sensíveis e sem julgamentos, voltadas
                ao autoconhecimento, clareza e apoio
                nos momentos de dúvida, transformação
                e reconexão interior.
              </p>

              <div className="about-actions">
                <a
                  href={createWhatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp size={20} />
                  AGENDAR
                </a>

                <a
                  href={PORTFOLIO_URL}
                  download
                >
                  <Download size={17} />
                  PORTFÓLIO
                </a>
              </div>
            </div>
          </div>

          <div className="about-values">
            <article>
              <Heart size={20} />
              <h3>Empatia</h3>
              <p>
                Escuta, cuidado e respeito pelo seu
                momento.
              </p>
            </article>

            <article>
              <Eye size={20} />
              <h3>Intuição</h3>
              <p>
                Uma leitura sensível dos símbolos,
                sentimentos e caminhos apresentados.
              </p>
            </article>

            <article>
              <Sparkles size={20} />
              <h3>Clareza</h3>
              <p>
                Novas perspectivas para compreender
                melhor suas escolhas.
              </p>
            </article>
          </div>
        </section>

        <section
          className="services section"
          id="leituras"
        >
          <div className="services-heading">
            <div>
              <span>
                Leituras e métodos
              </span>

              <h2>
                Encontre algo que
                <br />
                <em>
                  converse com seu momento.
                </em>
              </h2>
            </div>

            <p>
              Alguns métodos estão disponíveis aqui
              para você conhecer. Ao escolher uma
              opção, clique em AGENDAR e o WhatsApp
              será aberto com a leitura já
              identificada.
            </p>
          </div>

          <div className="services-list">
            {services.map(
              ({
                tag,
                title,
                description,
                icon: Icon,
                items,
              }) => (
                <article
                  className="service"
                  key={title}
                >
                  <div className="service-info">
                    <div className="service-tag">
                      <Icon size={18} />
                      <span>{tag}</span>
                    </div>

                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>

                  <div className="service-options">
                    {items.map((item) => (
                      <div
                        className="service-option"
                        key={`${title}-${item.name}`}
                      >
                        <div className="option-info">
                          <strong>
                            {item.name}
                          </strong>

                          {item.description && (
                            <small>
                              {
                                item.description
                              }
                            </small>
                          )}
                        </div>

                        <span className="option-price">
                          {item.price}
                        </span>

                        <a
                          href={createWhatsappLink(
                            title,
                            item.name,
                            item.price,
                          )}
                          target="_blank"
                          rel="noreferrer"
                          className="option-button"
                        >
                          <FaWhatsapp size={18} />
                          AGENDAR
                        </a>
                      </div>
                    ))}
                  </div>
                </article>
              ),
            )}
          </div>

          <div className="more-methods">
            <div className="more-methods-icon">
              <Sparkles size={21} />
            </div>

            <div className="more-methods-copy">
              <span>
                Outros métodos
              </span>

              <h3>
                Há outras possibilidades de leitura.
              </h3>

              <p>
                Nem todos os métodos utilizados pela
                Mystheria estão listados aqui. De
                acordo com a sua questão e com aquilo
                que você deseja explorar, outros
                métodos também podem ser utilizados.
              </p>
            </div>

            <a
              href={createOtherMethodsLink()}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={18} />
              Conversar sobre minha questão
            </a>
          </div>
        </section>

        {/* PORTFÓLIO */}

        <section className="portfolio-section">
          <div className="portfolio-art">
            <img
              src="/cartas.png"
              alt="Ilustração de uma mão segurando cartas de tarot"
            />
          </div>

          <div className="portfolio-copy">
            <span>
              Portfólio Mystheria
            </span>

            <h2>
              Conheça o trabalho
              <br />
              <em>com mais detalhes.</em>
            </h2>

            <p>
              No portfólio você encontra mais
              informações sobre métodos e propostas.
            </p>

            <a
              href={PORTFOLIO_URL}
              download
              className="primary-button"
            >
              <Download size={18} />
              BAIXAR PORTFÓLIO
            </a>
          </div>
        </section>

        <section className="cta-section">
          <span>✦ MYSTHERIA</span>

          <h2>
            Não sabe qual
            <br />
            leitura escolher?
          </h2>

          <p>
            Conte um pouco sobre o que está vivendo.
            A Ana pode ajudar você a encontrar um
            método que faça sentido para a sua
            questão.
          </p>

          <a
            href={createOtherMethodsLink()}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            <FaWhatsapp size={20} />
            Falar com a Mystheria
          </a>
        </section>

        <section
          className="contact section"
          id="contato"
        >
          <div className="contact-copy">
            <span>Onde encontrar</span>

            <h2>
              Acompanhe a
              <br />
              <em>Mystheria.</em>
            </h2>
          </div>

          <div className="social-list">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />

              <div>
                <span>Instagram</span>
                <strong>
                  @_mystheria
                </strong>
              </div>

              <ArrowUpRight />
            </a>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />

              <div>
                <span>TikTok</span>
                <strong>
                  @mystheria.oraculos
                </strong>
              </div>

              <ArrowUpRight />
            </a>

            <a
              href={createWhatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />

              <div>
                <span>WhatsApp</span>
                <strong>
                  Agendar uma leitura
                </strong>
              </div>

              <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img
            src="/mystheria-logo.png"
            alt="Mystheria"
          />

          <div>
            <strong>Mystheria</strong>

            <span>
              Ana Carolina Amaral
            </span>
          </div>
        </div>

        <div className="footer-socials">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

          <a
            href={createWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href={PORTFOLIO_URL}
            download
            aria-label="Baixar portfólio"
          >
            <Download />
          </a>
        </div>

        <p>
          © 2026 Mystheria. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  )
}

export default App