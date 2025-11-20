"use client"

export default function ContactPill() {
  return (
    <div className="pill">
      <a href="tel:+352621633226" aria-label="Appeler Services Batiment Selmi">
        📞 Appeler
      </a>
      <a
        href="https://wa.me/+352621633226"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary"
        aria-label="WhatsApp"
      >
        💬 WhatsApp
      </a>

      <style jsx>{`
        .pill {
          position: fixed;
          right: 16px;
          bottom: 16px;
          z-index: 60;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pill a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 0.9rem;
          border-radius: 999px;
          background: var(--brand);
          color: #fff;
          text-decoration: none;
          font-weight: 800;
          box-shadow: 0 8px 20px rgba(255, 107, 53, 0.32);
          transition: all 0.2s;
        }

        .pill a:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255, 107, 53, 0.4);
        }

        .pill a.secondary {
          background: #25d366;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.32);
        }

        .pill a.secondary:hover {
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.4);
        }
      `}</style>
    </div>
  )
}
