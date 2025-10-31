"use client"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="fgrid">
          <div className="foot">
            <h4>À Propos</h4>
            <a href="#about">Qui sommes-nous</a>
            <a href="#services">Services</a>
            <a href="#projects">Projets</a>
          </div>
          <div className="foot">
            <h4>Services</h4>
            <a href="#services">Construction Résidentielle</a>
            <a href="#services">Construction Commerciale</a>
            <a href="#services">Construction Industrielle</a>
          </div>
          <div className="foot">
            <h4>Contact</h4>
            <a href="tel:+21699999999">+216 XX XXX XXXX</a>
            <a href="mailto:info@linaconstructions.com">info@linaconstructions.com</a>
            <a href="#contact">Demander un devis</a>
          </div>
          <div className="foot">
            <h4>Nous Suivre</h4>
            <a href="https://www.facebook.com/linaconstructions" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com/linaconstructions" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/linaconstructions" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="copy">
          <p>
            &copy; 2025 Lina Constructions. Tous droits réservés. | <a href="#">Politique de confidentialité</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        footer {
          margin-top: 42px;
          background: linear-gradient(180deg, var(--card), color-mix(in srgb, var(--hero) 90%, var(--card)));
          color: #cfd6df;
          border-top: 1px solid var(--line);
        }

        .fgrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          padding: 32px 0;
        }

        .foot h4 {
          color: white;
          margin: 0.2rem 0 0.6rem;
          font-size: 1.05rem;
        }

        .foot a {
          display: block;
          color: #cfd6df;
          text-decoration: none;
          padding: 0.2rem 0;
          transition: color 0.2s;
        }

        .foot a:hover {
          color: var(--brand);
        }

        .copy {
          border-top: 1px solid var(--line);
          color: #98a2b3;
          padding: 12px 0;
          font-size: 0.95rem;
        }

        .copy a {
          color: inherit;
          text-decoration: none;
        }

        .copy a:hover {
          color: var(--brand);
        }

        @media (max-width: 768px) {
          .fgrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
