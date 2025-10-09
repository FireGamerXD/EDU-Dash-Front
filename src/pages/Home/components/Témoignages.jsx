import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mme Amina",
    role: "Directrice d’École Privée",
    quote:
      "EDU Dash a transformé notre manière de gérer l’établissement. Communication, paiements, suivi… tout est devenu plus simple !",
    img: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "M. Youssef",
    role: "Enseignant Principal",
    quote:
      "Un gain de temps incroyable ! Je peux gérer mes notes, absences et exercices sans stress depuis une seule plateforme.",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Mme Sara",
    role: "Parent d’Élève",
    quote:
      "Je reçois les notes et les notifications en temps réel. C’est rassurant de voir la progression de mon enfant si facilement.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export function Témoignages() {
  return (
    <section
      id="testimonials"
      className="relative lg:py-24 py-2 overflow-hidden"
    >
      {/* Background decorative gradient blur */}
      <div className="absolute -top-32 left-0 w-96 h-96  rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-orange-100 opacity-40 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-neutral-900 mb-4"
        >
          Témoignages <span className="text-orange-400">& Avis</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-16 max-w-2xl mx-auto lg:block hidden"
        >
          Découvrez ce que disent les utilisateurs d’<strong>EDU Dash</strong> —
          la solution tout-en-un pour une gestion scolaire fluide et moderne.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 lg:gap-10 gap-14 lg:py-0 py-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              className="relative bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-orange-200 transition-all duration-500 text-left group"
            >
              {/* Avatar */}
              <motion.div
                className="absolute -top-8 left-8 w-16 h-16 rounded-full overflow-hidden shadow-lg border-4 border-white"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="mt-8">
                <h4 className="font-semibold text-orange-400">{t.name}</h4>
                <p className="text-sm text-gray-500 mb-4">{t.role}</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="italic text-gray-700 leading-relaxed"
                >
                  “{t.quote}”
                </motion.p>
              </div>

              {/* Animated orange glow border on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-400/30 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
