"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4" style={{ marginBottom: "3px" }}>
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">À Propos de Services Batiment Selmi</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Services Batiment Selmi mêle savoir-faire traditionnel et technologies modernes pour
              livrer des ouvrages durables, performants et élégants.
            </p>
            <p className="text-lg text-gray-600">
              Notre priorité : Sécurité, qualité et communication transparente avec tous nos clients.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Pourquoi nous choisir ?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✅</span>
                <span className="text-gray-700">Expertise reconnue en construction tous corps d'état</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✅</span>
                <span className="text-gray-700">Respect des délais et budgets convenus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✅</span>
                <span className="text-gray-700">Conformité aux normes et régulations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✅</span>
                <span className="text-gray-700">Équipe expérimentée et professionnelle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✅</span>
                <span className="text-gray-700">Garanties de qualité et de satisfaction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✅</span>
                <span className="text-gray-700">Communication régulière avec les clients</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
