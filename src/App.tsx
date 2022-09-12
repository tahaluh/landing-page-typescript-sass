import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <a href="#">
          <img
            className="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
          />
        </a>
      </header>

      <main className="site-main">
        <section className="hero section">
          <h1 className="hero-title">Landing page com Typescript</h1>
          <p className="hero-description">
            Essa landing page se adapta a todos os dispositivos, então você
            altera uma vez e fica pronto para sempre!
          </p>
          <div className="hero-cta">
            <button className="button button-primary">Comprar agora</button>
            <button className="button button-secundary">
              Entrar em contato
            </button>
          </div>
        </section>

        <section className="features section">
          <div className="separator">
            <div className="line"></div>
            <h2 className="features-title">Recursos</h2>
            <div className="line"></div>
          </div>
          <div className="features-flex">
            <div className="feature">
              <div className="feature-icon">
                <img className="image" src="https://i.pinimg.com/originals/01/b8/c3/01b8c3d325c2c6ded29bf35159e19de3.jpg"></img>
              </div>
              <h3 className="feature-title">Sabor do bom</h3>
              <p className="feature-description">
                O tal produto além de ter um agradável sabor compatível, tem um
                grande desconto por qualquer coisa que só to escrevendo pra
                ficar maior aqui
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img className="image" src="https://i.pinimg.com/originals/01/b8/c3/01b8c3d325c2c6ded29bf35159e19de3.jpg"></img>
              </div>
              <h3 className="feature-title">Sabor do bom</h3>
              <p className="feature-description">
                O tal produto além de ter um agradável sabor compatível, tem um
                grande desconto por qualquer coisa que só to escrevendo pra
                ficar maior aqui
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img className="image" src="https://i.pinimg.com/originals/01/b8/c3/01b8c3d325c2c6ded29bf35159e19de3.jpg"></img>
              </div>
              <h3 className="feature-title">Sabor do bom</h3>
              <p className="feature-description">
                O tal produto além de ter um agradável sabor compatível, tem um
                grande desconto por qualquer coisa que só to escrevendo pra
                ficar maior aqui
              </p>
            </div>
          </div>
        </section>

        <section className="reviews section">
          <div className="separator">
            <div className="line"></div>
            <h2 className="reviews-title">Avaliações</h2>
            <div className="line"></div>
          </div>
          <div className="reviews-flex">
            <div className="review">
              <div className="reviwer-icon">
                <img className="image" src="https://i.pinimg.com/736x/8c/d8/73/8cd8736024a650f7b8c2e0c91fcfeb0e--penguins-of-madagascar-art-ideas.jpg"></img>
              </div>
              <h3 className="review-title">O bagulho é bom mesmo</h3>
              <p className="review-description">
                O tal produto além de ter um agradável sabor compatível, tem um
                grande desconto por qualquer coisa que só to escrevendo pra
                ficar maior aqui
              </p>
            </div>
            <div className="review">
              <div className="reviwer-icon">
              <img className="image" src="https://i.pinimg.com/736x/8c/d8/73/8cd8736024a650f7b8c2e0c91fcfeb0e--penguins-of-madagascar-art-ideas.jpg"></img>
              </div>
              <h3 className="review-title">O bagulho é bom mesmo</h3>
              <p className="review-description">
                O tal produto além de ter um agradável sabor compatível, tem um
                grande desconto por qualquer coisa que só to escrevendo pra
                ficar maior aqui
              </p>
            </div>
            <div className="review">
              <div className="reviwer-icon">
              <img className="image" src="https://i.pinimg.com/736x/8c/d8/73/8cd8736024a650f7b8c2e0c91fcfeb0e--penguins-of-madagascar-art-ideas.jpg"></img>
              </div>
              <h3 className="review-title">O bagulho é bom mesmo</h3>
              <p className="review-description">
                O tal produto além de ter um agradável sabor compatível, tem um
                grande desconto por qualquer coisa que só to escrevendo pra
                ficar maior aqui
              </p>
            </div>
          </div>
        </section>

        <section className="pricing section">
          <div className="separator">
            <div className="line"></div>
            <h2 className="pricing-title">Comprar:</h2>
            <div className="line"></div>
          </div>
          <div className="pricing-tables">
            <div className="pricing-table">
              <div className="pricing-table-price">
                <span className="pricing-table-price-currency">R$</span>
                <span className="pricing-table-price-amount">30</span>
              </div>
              <div className="pricing-table-features">
                <div className="pricing-table-features-title">
                  O que você ganha?
                </div>
                <ul className="pricing-table-feature">
                  <li>
                    <i className="fa-solid fa-check"></i> Cubo Diorama 9x9Cm
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Tema personalizado
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Frete grátis
                  </li>
                </ul>
              </div>
              <div className="pricing-table-cta">
                <button className="button button-primary button-block">
                  Compre agora
                </button>
              </div>
            </div>
            <div className="pricing-table">
              <div className="pricing-table-price">
                <span className="pricing-table-price-currency">R$</span>
                <span className="pricing-table-price-amount">30</span>
              </div>
              <div className="pricing-table-features">
                <div className="pricing-table-features-title">
                  O que você ganha?
                </div>
                <ul className="pricing-table-feature">
                  <li>
                    <i className="fa-solid fa-check"></i> Cubo Diorama 9x9Cm
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Tema personalizado
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Frete grátis
                  </li>
                </ul>
              </div>
              <div className="pricing-table-cta">
                <button className="button button-primary button-block">
                  Compre agora
                </button>
              </div>
            </div>
            <div className="pricing-table">
              <div className="pricing-table-price">
                <span className="pricing-table-price-currency">R$</span>
                <span className="pricing-table-price-amount">30</span>
              </div>
              <div className="pricing-table-features">
                <div className="pricing-table-features-title">
                  O que você ganha?
                </div>
                <ul className="pricing-table-feature">
                  <li>
                    <i className="fa-solid fa-check"></i> Cubo Diorama 9x9Cm
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Tema personalizado
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Frete grátis
                  </li>
                </ul>
              </div>
              <div className="pricing-table-cta">
                <button className="button button-primary button-block">
                  Compre agora
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section">
          <div className="separator">
            <div className="line"></div>
            <h2 className="pricing-title">Alguma dúvida?</h2>
            <div className="line"></div>
          </div>
          <div className="contact-div">
            <h2 className="contact-title">Entre em contato</h2>
            <form className="contact-form">
              <input
                className="contact-form-input"
                type="text"
                name="name"
                placeholder="Nome..."
              ></input>
              <input
                className="contact-form-input"
                type="email"
                name="email"
                placeholder="Email..."
              ></input>
              <textarea
                className="contact-form-input contact-form-textarea"
                name="mesage"
                placeholder="Mensagem..."
              ></textarea>
              <button className="button button-primary button-block">
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-logo">
          <img className="image" src="https://preview.cruip.com/solid/dist/images/feature-icon-02.svg"></img>
        </div>
        <ul className="footer-links">
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Suporte</a>
          </li>
        </ul>

        <ul className="footer-social-links">
          <li>
            <a href="#">
              <svg
                role="img"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path
                  d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                  fill="#0270D7"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <title>Twitter</title>
                <path
                  d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                  fill="#0270D7"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <title>Google</title>
                <path
                  d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                  fill="#0270D7"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
        <div className="footer-copyright">
          © 2022 Thauã Magalhães, todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}

export default App;
