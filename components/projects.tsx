"use client"

import { useState } from "react"

export default function Projects() {
  const [filter, setFilter] = useState("tous")

  const projects = [
    { category: "commercial", title: "Centre Commercial", year: "2024", size: "5000m²" },
    { category: "residential", title: "Résidence Prestige", year: "2023", size: "50 unités" },
    { category: "industrial", title: "Usine Textile", year: "2023", size: "8000m²" },
    { category: "commercial", title: "Bureau Moderne", year: "2024", size: "3500m²" },
    { category: "residential", title: "Villa Contemporaine", year: "2023", size: "250m²" },
    { category: "industrial", title: "Entrepôt Logistique", year: "2023", size: "6000m²" },
  ]

  const filteredProjects = filter === "tous" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <div>
            <h2>Nos Projets</h2>
            <p>Réalisations de qualité</p>
          </div>
        </div>
        <div className="filters">
          {["tous", "residential", "commercial", "industrial"].map((f) => (
            <button
              key={f}
              className={`chip filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f === "tous" && "Tous"}
              {f === "residential" && "Résidentiel"}
              {f === "commercial" && "Commercial"}
              {f === "industrial" && "Industriel"}
            </button>
          ))}
        </div>
        <div className="projects">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project">
              <div className="img"></div>
              <div className="info">
                <h3>{project.title}</h3>
                <p>
                  {project.year} • {project.size}
                </p>
              </div>
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

        .filters {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .chip {
          border: 1px solid var(--line);
          padding: 0.45rem 0.8rem;
          border-radius: 999px;
          background: var(--card);
          color: var(--muted);
          cursor: pointer;
          font-weight: 700;
          transition: all 0.2s;
        }

        .chip.active {
          background: var(--brand);
          color: #fff;
          border-color: transparent;
        }

        .projects {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(3, 1fr);
        }

        .project {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #0f1115;
          aspect-ratio: 4/3;
          border: 1px solid var(--line);
        }

        .img {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
            url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect width=%22800%22 height=%22600%22 fill=%22%232a2f38%22/%3E%3Crect x=%22100%22 y=%2290%22 width=%22120%22 height=%22400%22 fill=%22%23656b77%22/%3E%3Crect x=%22260%22 y=%22120%22 width=%22140%22 height=%22370%22 fill=%22%23575963%22/%3E%3Crect x=%22440%22 y=%22140%22 width=%22120%22 height=%22340%22 fill=%22%23797f88%22/%3E%3Crect x=%22590%22 y=%2280%22 width=%2290%22 height=%22440%22 fill=%22%23656b77%22/%3E%3C/svg%3E');
          background-size: cover;
          background-position: center;
          transition: transform 0.4s ease;
        }

        .project:hover .img {
          transform: scale(1.06);
        }

        .info {
          position: absolute;
          inset: auto 0 0 0;
          padding: 16px;
          color: #fff;
          background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.75));
        }

        .info h3 {
          margin: 0;
          font-size: 1.1rem;
        }

        .info p {
          margin: 4px 0 0;
          font-size: 0.9rem;
          color: #ccc;
        }

        @media (max-width: 980px) {
          .projects {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .projects {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
