"use client"

import { type FormEvent, useState } from "react"
import { sendContactEmail } from "@/app/actions"

export default function Contact() {
  const [formState, setFormState] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setFormState("Envoi en cours...")

    const formData = new FormData(e.currentTarget)
    const result = await sendContactEmail(formData)

    if (result.success) {
      setFormState("✅ " + result.message)
      e.currentTarget.reset()
    } else {
      setFormState("❌ " + result.message)
    }
    setIsLoading(false)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <div>
            <h2>Demander un Devis</h2>
            <p>Contactez-nous pour vos projets de construction</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" name="nom" placeholder="Votre nom *" required aria-label="Nom" />
            <input type="email" name="email" placeholder="Votre email *" required aria-label="Email" />
          </div>
          <div className="row">
            <input type="tel" name="telephone" placeholder="Votre téléphone *" required aria-label="Téléphone" />
            <select name="typeProjet" required aria-label="Type de projet">
              <option value="">Sélectionner un type de projet *</option>
              <option value="Résidentiel">Construction Résidentielle</option>
              <option value="Commercial">Construction Commerciale</option>
              <option value="Industriel">Construction Industrielle</option>
              <option value="Rénovation">Rénovation & Réhabilitation</option>
            </select>
          </div>
          <select name="budget" required aria-label="Budget">
            <option value="">Sélectionner un budget estimé *</option>
            <option value="Moins de 50000 TND">Moins de 50 000 TND</option>
            <option value="50000 - 200000 TND">50 000 - 200 000 TND</option>
            <option value="200000 - 500000 TND">200 000 - 500 000 TND</option>
            <option value="500000+ TND">500 000+ TND</option>
          </select>
          <textarea
            name="description"
            placeholder="Décrivez votre projet *"
            required
            rows={5}
            aria-label="Description du projet"
          ></textarea>
          <button type="submit" className="cta" disabled={isLoading}>
            {isLoading ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>
          {formState && (
            <div className="form-message" style={{ color: formState.includes("✅") ? "green" : "red" }}>
              {formState}
            </div>
          )}
        </form>
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

        form {
          display: grid;
          gap: 14px;
        }

        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        input,
        textarea,
        select {
          appearance: none;
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: 1.5px solid var(--line);
          background: var(--card);
          color: var(--ink);
          font: inherit;
        }

        input:focus,
        textarea:focus,
        select:focus {
          outline: none;
          border-color: color-mix(in srgb, var(--brand) 60%, var(--line));
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--brand) 16%, transparent);
        }

        .cta {
          background: var(--brand);
          color: white;
          border: 0;
          padding: 0.72rem 1.1rem;
          border-radius: 12px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(255, 107, 53, 0.25);
          transition: all 0.2s;
        }

        .cta:hover:not(:disabled) {
          background: var(--brand-600);
          transform: translateY(-1px);
        }

        .cta:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-message {
          margin-top: 12px;
          text-align: center;
          font-weight: 600;
        }

        @media (max-width: 580px) {
          .row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
