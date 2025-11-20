"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Services Batiment Selmi</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            À Propos
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Projets
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl text-gray-700">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="flex flex-col gap-4 px-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 text-left transition"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 text-left transition"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 text-left transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-blue-600 text-left transition"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
