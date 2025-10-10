import dashboard_Director from '../../../utils/imgs/dashboard-direction.png'
import dashboard_Administration from '../../../utils/imgs/dashboard-administration.png'
import dashboard_Pédagogique from '../../../utils/imgs/dashboard-pédagogique.png'
import dashboard_Enseignant from '../../../utils/imgs/dashboard-Enseignant.png'
import dashboard_Eleve from '../../../utils/imgs/dashboard-Eleve.png'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Building2, CreditCard, BarChart3, BookOpen, Users, GraduationCap } from "lucide-react";

const roles = [
  {
    name: "Direction",
    color: "from-orange-400 to-orange-600",
    icon: <Building2 className="w-6 h-6 text-white" />,
    image: dashboard_Director,
    cards: [
      { title: "Vue Globale", desc: "Accédez à toutes les statistiques clés en un coup d’œil." },
      { title: "Rapports Financiers", desc: "Analysez vos revenus et dépenses en temps réel." },
      { title: "Communication Multi-niveau", desc: "Gérez facilement les échanges avec tout le personnel." },
    ],
  },
  {
    name: "Administratif",
    color: "from-blue-400 to-blue-600",
    icon: <CreditCard className="w-6 h-6 text-white" />,
    image: dashboard_Administration,
    cards: [
      { title: "Paiements", desc: "Suivi clair et détaillé des paiements et retards." },
      { title: "Inscriptions", desc: "Gérez les nouveaux élèves en quelques clics." },
      { title: "Factures", desc: "Générez des factures et reçus instantanément." },
    ],
  },
  {
    name: "Pédagogique",
    color: "from-teal-400 to-teal-600",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    image: dashboard_Pédagogique,
    cards: [
      { title: "Suivi Élèves", desc: "Consultez les performances et absences en temps réel." },
      { title: "Emploi du Temps", desc: "Planifiez et ajustez facilement les horaires." },
      { title: "Statistiques", desc: "Visualisez les résultats et tendances académiques." },
    ],
  },
  {
    name: "Enseignants",
    color: "from-green-400 to-green-600",
    icon: <BookOpen className="w-6 h-6 text-white" />,
    image: dashboard_Enseignant,
    cards: [
      { title: "Cours & Exercices", desc: "Publiez et gérez vos contenus pédagogiques." },
      { title: "Notes", desc: "Ajoutez rapidement les résultats des élèves." },
      { title: "Absences", desc: "Signalez et suivez les absences en temps réel." },
    ],
  },
  {
    name: "Parents",
    color: "from-purple-400 to-purple-600",
    icon: <Users className="w-6 h-6 text-white" />,
    image: "/images/dashboard-parent.png",
    cards: [
      { title: "Bulletins", desc: "Consultez les notes et observations instantanément." },
      { title: "Paiements", desc: "Suivez les factures et échéances facilement." },
      { title: "Communication", desc: "Contactez les enseignants directement." },
    ],
  },
  {
    name: "Élèves",
    color: "from-pink-400 to-pink-600",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    image: dashboard_Eleve,
    cards: [
      { title: "Leçons", desc: "Accédez à vos cours et ressources à tout moment." },
      { title: "Exercices", desc: "Soumettez vos devoirs en ligne facilement." },
      { title: "Résultats", desc: "Suivez vos progrès et résultats en direct." },
    ],
  },
];

export function Fonctionnalités() {
  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <section className="py-20 bg-gradient-to-t from-white to-orange-50" id="fonctionnalites">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-neutral-800 mb-4">Fonctionnalités Clés</h2>
        <p className="text-gray-600 mb-12 lg:block hidden">Découvrez les fonctionnalités selon votre rôle dans l’établissement</p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {roles.map((role) => (
            <button
              key={role.name}
              onClick={() => setActiveRole(role)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all border 
                ${activeRole.name === role.name
                  ? "bg-gradient-to-r " + role.color + " text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"}`}
            >
              {role.icon}
              {role.name}
            </button>
          ))}
        </div>

        {/* Image + Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Dashboard Image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeRole.image}
                src={activeRole.image}
                alt={activeRole.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl shadow-xl border border-gray-100"
              />
            </AnimatePresence>
          </div>

          {/* Cards */}
          <div className="grid gap-6">
            <AnimatePresence mode="wait">
              {activeRole.cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 0.5 }}
                  className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-orange-200 text-left"
                >
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
