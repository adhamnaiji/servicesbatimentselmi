"use client"

export default function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Construction Résidentielle",
      description:
        "Maisons sur mesure, extensions, surélévations et rénovations énergétiques pour votre confort de vie.",
    },
    {
      icon: "🏢",
      title: "Construction Commerciale",
      description: "Du gros œuvre aux finitions, conformité et sécurité garanties pour vos espaces professionnels.",
    },
    {
      icon: "🏭",
      title: "Construction Industrielle",
      description: "Usines, entrepôts et installations industrielles avec expertise technique avancée.",
    },
    {
      icon: "📋",
      title: "Gestion de Projets",
      description: "Planification, coordination des corps de métier, contrôle qualité et sécurité sur chantier.",
    },
    {
      icon: "📐",
      title: "Études & Consulting",
      description: "Études de faisabilité, estimations détaillées, optimisation des coûts et des délais.",
    },
    {
      icon: "🔧",
      title: "Rénovation & Réhabilitation",
      description: "Réhabilitation complète avec phasage intelligent.",
    },
  ]

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-title">
          <div>
            <h2>Services de Construction</h2>
            <p>Solutions adaptées à vos besoins</p>
          </div>
        </div>
        <div className="grid cols-3">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="service-head">
                <div className="service-ico">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: clamp(56px, 7vw, 96px) 0;
          scroll-margin-top: 80px;
        }

        .section-title {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 28px;
        }

        .section-title h2 {
          font-size: clamp(1.4rem, 3.4vw, 2.2rem);
          margin: 0;
        }

        .section-title p {
          color: var(--muted);
          margin: 0;
        }

        .grid {
          display: grid;
          gap: 18px;
        }

        .grid.cols-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 22px;
          box-shadow: var(--shadow);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-4px);
        }

        .service-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .service-ico {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--brand) 16%, transparent);
          display: grid;
          place-items: center;
          font-size: 22px;
        }

        .card p {
          color: var(--muted);
        }

        @media (max-width: 980px) {
          .grid.cols-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .grid.cols-3 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
