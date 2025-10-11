import React from "react";
import logo from "../utils/imgs/logo.png";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-gray-100 text-gray-700 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96  rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand & Socials */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="EduDash" className="lg:w-[15vw] w-[40vw] transition-all duration-500 hover:scale-105" />
            </div>
            <p className="text-sm text-gray-600 max-w-sm">
              Simplifiez la gestion scolaire avec un tableau de bord moderne — administration, communication et rapports en un seul endroit.
            </p>
          <div className="flex items-center space-x-3">
            {[FaLinkedin, FaEnvelope].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white shadow-md text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-all duration-300"
                href="#"
                target="_blank"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-6 md:col-span-1">
            <div>
              <h4 className="text-sm font-semibold mb-3">Produit</h4>
              <ul className="space-y-2 text-sm">
                {["Fonctionnalités", "Tarifs", "Intégrations", "API"].map((item, i) => (
                  <li key={i}>
                    <a className="text-gray-600 hover:text-orange-500 hover:pl-2 transition-all duration-300" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Entreprise</h4>
              <ul className="space-y-2 text-sm">
                {["À propos", "Carrières", "Blog", "Contact"].map((item, i) => (
                  <li key={i}>
                    <a className="text-gray-600 hover:text-orange-500 hover:pl-2 transition-all duration-300" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex items-center justify-center h-full md:justify-end">
            <motion.div
              className="w-full max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-center gap-3">
                <label htmlFor="newsletter" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Votre adresse e-mail"
                  className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#FFAA27" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  S'inscrire
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} EDU Dash. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
