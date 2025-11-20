"use client"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="wrap">
          <div>
            <h1>Services Batiment Selmi : Construction Professionnelle au Luxembourg</h1>
            <p>
              Solutions complètes de construction pour particuliers et entreprises. Résidentiel, commercial et
              industriel. Qualité garantie, délais respectés.
            </p>
            <div className="actions">
              <button className="btn primary" onClick={scrollToContact}>
                Demander un Devis
              </button>
              <a href="#projects" className="btn ghost">
                Voir nos projets →
              </a>
            </div>
            <div className="kpis">
              <div className="kpi">
                <h3>50+</h3>
                <p>Projets réalisés</p>
              </div>
              <div className="kpi">
                <h3>98%</h3>
                <p>Clients satisfaits</p>
              </div>
              <div className="kpi">
                <h3>24h</h3>
                <p>Réponse devis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          background: radial-gradient(1200px 600px at 80% -10%, rgba(255, 107, 53, 0.28), transparent 50%), var(--hero);
          color: white;
          overflow: hidden;
        }

        .wrap {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          padding: clamp(56px, 7vw, 100px) 0;
        }

        .kpis {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 26px;
        }

        .kpi {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 16px;
          text-align: center;
        }

        .kpi h3 {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          margin: 0.1rem 0;
        }

        h1 {
          font-size: clamp(1.8rem, 4.8vw, 3.2rem);
          line-height: 1.18;
          margin: 0 0 12px;
        }

        p {
          color: #e7eaee;
          margin: 0 0 24px;
        }

        .actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 1.1rem;
          border-radius: 12px;
          font-weight: 800;
          text-decoration: none;
          border: 2px solid transparent;
          cursor: pointer;
        }

        .btn.primary {
          background: var(--brand);
          color: #fff;
        }

        .btn.primary:hover {
          background: var(--brand-600);
        }

        .btn.ghost {
          border-color: rgba(255, 255, 255, 0.28);
          color: white;
        }

        .btn.ghost:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .mock {
          border-radius: 18px;
          background: linear-gradient(180deg, #2a2f38, #161a21);
          border: 1px solid rgba(255, 255, 255, 0.1);
          min-height: 340px;
          position: relative;
          box-shadow: var(--shadow);
          background-image: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.05) 0 2px,
            transparent 2px 6px
          );
        }

        @media (max-width: 980px) {
          .wrap {
            grid-template-columns: 1fr;
          }
          .kpis {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .kpis {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
