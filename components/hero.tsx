"use client";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Services Batiment Selmi : Construction Professionnelle En France
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Solutions complètes de construction pour particuliers et entreprises. Résidentiel, commercial et
              industriel. Qualité garantie, délais respectés.
            </p>
            <div className="flex gap-4 flex-col md:flex-row">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                Demander un Devis
              </button>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
              >
                Voir nos projets →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Projets réalisés</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Clients satisfaits</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">24h</div>
              <p className="text-blue-100">Réponse devis</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">30+</div>
              <p className="text-blue-100">Ans d'expérience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
