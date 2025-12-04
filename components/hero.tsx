"use client";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Services Bâtiment Selmi
            </h1>
            <h2 className="text-lg sm:text-xl text-blue-100 font-semibold mb-4">
              INTÉRIEUR / EXTÉRIEUR - NETTOYAGE - JARDINAGE
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed">
              Solutions complètes de construction et d'entretien pour particuliers et entreprises. Résidentiel, commercial et industriel. Qualité garantie, délais respectés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 active:bg-blue-100 transition duration-200 w-full sm:w-auto"
              >
                Demander un Devis
              </button>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 active:bg-blue-100 transition duration-200 text-center w-full sm:w-auto"
              >
                Voir nos projets →
              </a>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl text-center border border-white/20 hover:bg-white/15 transition duration-300">
              <div className="text-3xl sm:text-4xl font-bold mb-3 text-white">50+</div>
              <p className="text-sm sm:text-base text-blue-100 font-medium">Projets réalisés</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl text-center border border-white/20 hover:bg-white/15 transition duration-300">
              <div className="text-3xl sm:text-4xl font-bold mb-3 text-white">98%</div>
              <p className="text-sm sm:text-base text-blue-100 font-medium">Clients satisfaits</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl text-center border border-white/20 hover:bg-white/15 transition duration-300">
              <div className="text-3xl sm:text-4xl font-bold mb-3 text-white">24h</div>
              <p className="text-sm sm:text-base text-blue-100 font-medium">Réponse devis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl text-center border border-white/20 hover:bg-white/15 transition duration-300">
              <div className="text-3xl sm:text-4xl font-bold mb-3 text-white">24/7</div>
              <p className="text-sm sm:text-base text-blue-100 font-medium">Support client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}