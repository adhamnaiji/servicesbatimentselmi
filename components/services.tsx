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
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Services de Construction</h2>
        <p className="text-center text-gray-600 mb-12">Solutions adaptées à vos besoins</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors bg-gradient-to-br from-blue-50 to-white"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
