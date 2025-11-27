"use client";

import React, { useState } from "react";

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  typeProjet: string;
  budget: string;
  description: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    typeProjet: "",
    budget: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">(
    ""
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (
      !formData.nom ||
      !formData.email ||
      !formData.telephone ||
      !formData.typeProjet ||
      !formData.description
    ) {
      setMessage("Tous les champs requis doivent être remplis");
      setMessageType("error");
      return false;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMessage("Format d'email invalide");
      setMessageType("error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toLocaleString("fr-TN"),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(
          "Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais."
        );
        setMessageType("success");
        setFormData({
          nom: "",
          email: "",
          telephone: "",
          typeProjet: "",
          budget: "",
          description: "",
        });

        setTimeout(() => {
          setMessage("");
        }, 5000);
      } else {
        setMessage(
          result.error ||
            "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
        );
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage(
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement."
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Demander un Devis</h2>
        <p className="text-center text-gray-600 mb-12">Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures</p>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                messageType === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {message}
            </div>
          )}

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Nom *</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Votre nom"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="votre.email@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Téléphone *</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="+33 XX XX XX XX"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Type de projet *</label>
            <select
              name="typeProjet"
              value={formData.typeProjet}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="">Sélectionnez un type de projet</option>
              <option value="Construction">Construction</option>
              <option value="Rénovation">Rénovation</option>
              <option value="Extension">Extension</option>
              <option value="Aménagement">Aménagement</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Budget (optionnel)</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="ex: 50,000 - 100,000 €"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Description du projet *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Décrivez votre projet..."
              rows={6}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
            onMouseEnter={(e) => {
              if (!loading)
                (e.target as HTMLButtonElement).style.backgroundColor = "#1e3a8a";
            }}
            onMouseLeave={(e) => {
              if (!loading)
                (e.target as HTMLButtonElement).style.backgroundColor = "#1e40af";
            }}
          >
            {loading ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>
        </form>
      </div>
    </section>
  );
}
