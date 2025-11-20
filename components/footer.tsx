"use client"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

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
        <h4>Contact</h4>
        <a href="tel:+352621633226" className="contact-link">
          <FaPhone className="icon" />
          +352 62 163 3226
        </a>
        <a href="tel:+4917624062756" className="contact-link">
          <FaPhone className="icon" />
          +49 176 240 627 56
        </a>
        <a href="mailto:info@linaconstructions.com" className="contact-link">
          <FaEnvelope className="icon" />
          info@linaconstructions.com
        </a>
        <a href="#" className="contact-link">
          <FaMapMarkerAlt className="icon" />
          44 rue de l'industrie, 8069 Strassen
        </a>
      
      </div>

      <div className="foot">
        <h4>Nous Suivre</h4>
        <a 
          href="https://www.facebook.com/profile.php?id=61583341880229" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaFacebook className="icon" />
          Facebook
        </a>
        <a 
          href="https://www.instagram.com/lina_constructions_luxembourg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram className="icon" />
          Instagram
        </a>
      </div>
        </div>
        <div className="copy">
          <p>
            &copy; 2025 Services Batiment Selmi. Tous droits réservés. | <a href="#">Politique de confidentialité</a>
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

        /* ADD THIS: Make icons appear on left with text on right */
        .contact-link,
        .social-link {
          display: flex !important;
          align-items: center;
          gap: 8px;
        }

        .contact-link .icon,
        .social-link .icon {
          font-size: 16px;
          flex-shrink: 0;
        }

        .contact-link.highlight {
          background-color: var(--brand);
          color: white;
          padding: 8px 12px;
          border-radius: 4px;
          font-weight: bold;
          margin-top: 8px;
          display: inline-flex !important;
        }

        .contact-link.highlight:hover {
          opacity: 0.9;
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
