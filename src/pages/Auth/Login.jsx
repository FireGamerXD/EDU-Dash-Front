import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../utils/imgs/logo.png";
import illustration from "../../utils/imgs/Login-amico.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 bg-white relative overflow-hidden"
    >
      {/* Floating gradient orbs for depth */}
      <div className="absolute top-20 left-10 w-56 h-56 bg-orange-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-4xl rounded-3xl shadow-xl overflow-hidden border border-gray-100 bg-white/80 backdrop-blur-lg"
      >
        {/* Orange Illustration Section */}
{/* Orange Illustration Section */}
<motion.div
  data-aos="fade-right"
  className="hidden md:flex w-1/2 bg-[#ffa500] items-center justify-center p-10 rounded-r-[4rem] relative"
>
<a
  href="/"
  className="absolute top-6 left-6 flex items-center gap-2 text-white font-medium hover:text-orange-100 transition-all duration-300"
>
  {/* Left Arrow SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 19l-7-7 7-7M3 12h18"
    />
  </svg>

  Retour à l’accueil
</a>


  {/* Illustration Image */}
  <img
    src={illustration}
    alt="Illustration"
    className="w-[95%] h-auto drop-shadow-lg"
  />
</motion.div>


        {/* White Form Section */}
        <motion.div
          data-aos="fade-left"
          className="w-full md:w-1/2 bg-white p-8 md:px-10 md:pt-6 flex flex-col justify-between"
          style={{ minHeight: "500px" }}
        >
          {/* Top Section (20%) */}
          <div className="flex flex-col items-center justify-center flex-[0.1]">
            <a href="/"><img src={logo} alt="EduDash Logo" className="h-20 mb-3" /></a>
          </div>

          {/* Form Section (80%) */}
          <div className="flex flex-col justify-center flex-[0.9]">
            <form onSubmit={handleLogin} className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code Massar ou e-mail
                </label>
                <input
                  type="email"
                  placeholder="exemple@email.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ffa500] outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mot de passe
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ffa500] outline-none transition"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#ffa500]" />
                  <span className="text-gray-600">Se souvenir de moi</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[#ffa500] hover:underline"
                >
                  Mot de passe oublié ?
                </Link>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isLoading}
                className="w-full py-3 mt-4 bg-[#ffa500] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isLoading ? "Connexion..." : "Se connecter"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
