import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ComingSoon = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const created = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 20 + Math.random() * 60,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 5,
    }));
    setBubbles(created);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#fff7ed] to-[#fff] text-center px-6">
      {/* Floating bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-[#ffa500]/20"
          style={{
            left: `${bubble.left}%`,
            width: bubble.size,
            height: bubble.size,
            bottom: -bubble.size,
          }}
          animate={{
            y: ["0%", "-120vh"],
            opacity: [0.3, 0.8, 0],
            scale: [1, 1.2, 0.8],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient halo effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#ffa500]/20 to-transparent blur-3xl pointer-events-none"></div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
        >
          🚀 Demo en préparation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed"
        >
          La démonstration d’<span className="text-[#ffa500] font-semibold">EDU Dash</span> arrive très bientôt.  
          Nous finalisons les derniers détails pour une expérience fluide, rapide et moderne.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
            <a href="/">
                <button className="px-6 py-3 bg-[#ffa500] text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-orange-500 transition-all">
                    Me prévenir à la sortie
                </button>            
            </a>
            <a href="/">
                <button className="px-6 py-3 border-2 border-[#ffa500] text-[#ffa500] rounded-xl font-semibold hover:bg-[#ffa500]/10 transition-all">
                    Retour à l’accueil
                </button>
            </a>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-6 text-gray-400 text-sm">
        © 2025 EDU Dash — Tous droits réservés.
      </div>
    </section>
  );
};
