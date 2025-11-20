"use client"

export default function About() {
  return (
    <section id="about" className="section" >
      <div className="container" >
        <div className="about">
          <div>
            <h2>À Propos de Services Batiment Selmi</h2>
            <p>
               Services Batiment Selmi mêle savoir-faire traditionnel et technologies modernes pour
              livrer des ouvrages durables, performants et élégants.
            </p>
            <p>
              <strong>Notre priorité :</strong> Sécurité, qualité et communication transparente avec tous nos clients.
            </p>
            <h3>Pourquoi nous choisir ?</h3>
            <ul>
              <li>✅ Expertise reconnue en construction tous corps d&apos;état</li>
              <li>✅ Respect des délais et budgets convenus</li>
              <li>✅ Conformité aux normes et régulations</li>
              <li>✅ Équipe expérimentée et professionnelle</li>
              <li>✅ Garanties de qualité et de satisfaction</li>
              <li>✅ Communication régulière avec les clients</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: clamp(56px, 7vw, 96px) 0;
          scroll-margin-top: 80px;
        }

        .about {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 32px;
        }

        .about h2 {
          font-size: clamp(1.4rem, 3.4vw, 2.2rem);
          margin: 0 0 16px 0;
        }

        .about h3 {
          margin-top: 28px;
          font-size: 1.2rem;
        }

        .about p {
          color: var(--muted);
          margin: 0 0 16px 0;
          line-height: 1.6;
        }

        .about ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .about li {
          padding: 8px 0;
          color: var(--muted);
        }

        .pic {
          border-radius: 18px;
          background: linear-gradient(120deg, color-mix(in srgb, var(--brand) 22%, transparent), transparent 60%),
            url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect width=%22800%22 height=%22600%22 fill=%22%23343a46%22/%3E%3Crect x=%22100%22 y=%22160%22 width=%22160%22 height=%22340%22 fill=%22%23656b77%22/%3E%3Crect x=%22290%22 y=%2290%22 width=%22150%22 height=%22410%22 fill=%22%23575963%22/%3E%3Crect x=%22470%22 y=%22140%22 width=%22165%22 height=%22360%22 fill=%22%23797f88%22/%3E%3Ccircle cx=%22640%22 cy=%2290%22 r=%2240%22 fill=%22%23ffc84d%22/%3E%3C/svg%3E');
          background-size: cover;
          background-position: center;
          min-height: 360px;
          border: 1px solid var(--line);
        }

        @media (max-width: 980px) {
          .about {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
