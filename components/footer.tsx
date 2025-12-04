"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Services Batiment Selmi</h3>
            <p className="text-gray-300">
              Construction professionnelle et rénovation En France. Qualité, sécurité et satisfaction garanties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-blue-400 transition">Accueil</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">À Propos</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Projets</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <span>+33 6 95 95 63 97</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span>servicesbatimentselmi@outlook.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>36 rue Claude Bernard 57070 Metz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex justify-center gap-6">
          <a href="#" className="text-gray-300 hover:text-blue-400 transition text-2xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-400 transition text-2xl">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-8">
          <p>&copy; 2025 Services Batiment Selmi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
