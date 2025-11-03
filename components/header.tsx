"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image";
import logo from "./projects/Lina Constructions.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Top Notice Bar */}
      <div className="notice">
        <div className="inner container">
          <span>Entreprise de construction et rénovation - Résidentiel • Commercial • Industriel</span>
        </div>
      </div>

      {/* Header/Navigation */}
      <header id="header" className="header">
        <nav className="container">
          <Link href="#" className="brand">
  <Image 
    src={logo} 
    alt="Lina Constructions Logo" 
    width={150} 
    height={50}
    priority
  />
</Link>
          <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`} id="nav">
            <button onClick={() => scrollToSection("services")} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection("projects")} className="nav-link">
              Projets
            </button>
            <button onClick={() => scrollToSection("about")} className="nav-link">
              À propos
            </button>
            <button onClick={() => scrollToSection("contact")} className="nav-link">
              Contact
            </button>
          </div>
          <button
            id="menuToggle"
            className="menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu mobile"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button className="cta" onClick={() => scrollToSection("#contact")} aria-label="Demander un devis gratuit">
            Devis Gratuit
          </button>
        </nav>
      </header>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: saturate(140%) blur(6px);
          background: color-mix(in srgb, var(--bg) 70%, transparent);
          border-bottom: 1px solid var(--line);
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.7rem 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          cursor: pointer;
        }

        .logo {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: var(--brand);
          color: white;
          font-weight: 900;
        }

        .brand span {
          font-weight: 800;
          letter-spacing: 0.2px;
          color: var(--ink);
        }

        .nav-links {
          display: flex;
          gap: 1rem;
        }

        .nav-link {
          padding: 0.5rem 0.8rem;
          border-radius: 10px;
          text-decoration: none;
          color: var(--muted);
          font-weight: 600;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .nav-link:hover {
          color: var(--ink);
          background: var(--line);
        }

        .cta {
          --bgc: var(--brand);
          --bgh: var(--brand-600);
          background: var(--bgc);
          color: white;
          border: 0;
          padding: 0.72rem 1.1rem;
          border-radius: 12px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(255, 107, 53, 0.25);
          transition: all 0.2s;
        }

        .cta:hover {
          background: var(--bgh);
          transform: translateY(-1px);
        }

        .menu {
          display: none;
        }

        @media (max-width: 980px) {
          .nav-links {
            display: none;
            position: fixed;
            inset: 80px 0 auto 0;
            background: var(--bg);
            border-top: 1px solid var(--line);
            padding: 12px 16px;
            flex-direction: column;
          }

          .nav-links.active {
            display: flex;
          }

          .menu {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            background: transparent;
            border: 1px solid var(--line);
            padding: 0.55rem 0.75rem;
            border-radius: 10px;
            font-weight: 800;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  )
}
