import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../utils/imgs/edu_dash_logo.png";
import illustration from "../../utils/imgs/Login-amico.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Eye, EyeOff, LogIn } from "lucide-react";

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <section className="min-h-screen flex flex-col md:flex-row bg-white relative overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-56 h-56 bg-orange-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Left Illustration */}
      <motion.div
        data-aos="fade-right"
        className="hidden lg:flex w-full md:w-1/2 bg-[#FFA500] text-white flex-col justify-center items-center p-8 overflow-hidden"
      >
        <img
          src={illustration}
          alt="Login Illustration"
          className="w-[90%] max-w-md opacity-95 drop-shadow-2xl animate-fade-in"
        />
      </motion.div>

      {/* Right Form */}
      <motion.div
        data-aos="fade-left"
        className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white z-0"></div>

        <div className="z-10 w-full max-w-md sm:max-w-lg px-6 sm:px-10 py-12 sm:py-16">
          {/* Logo */}
          <div className="flex justify-center mb-10 sm:mb-12">
            <img
              src={logo}
              alt="EduDash Logo"
              className="w-[50%] sm:w-[25%] md:w-[15vw]"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6 sm:space-y-8">
            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm sm:text-base font-medium mb-2 sm:mb-3">
                E-mail ou Massar Code
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemple@gmail.com"
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border text-sm sm:text-[15px] border-gray-200 focus:ring-2 focus:ring-[#FFA500] focus:outline-none transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 text-sm sm:text-base font-medium mb-2 sm:mb-3">
                Mot de passe
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 pr-10 rounded-xl sm:rounded-2xl border text-sm sm:text-[15px] border-gray-200 focus:ring-2 focus:ring-[#FFA500] focus:outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 sm:right-4 text-gray-500 hover:text-[#FFA500] transition-colors flex items-center justify-center h-full"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#FFA500]" />
                <span className="text-gray-600">Se souvenir de moi</span>
              </label>
              <Link to="/forgot-password" className="text-[#FFA500] hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 sm:py-4 bg-[#FFA500] text-white text-sm sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              <LogIn size={18} />
              {isLoading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-gray-500 text-center mt-8 sm:mt-10 text-xs sm:text-sm">
            © {new Date().getFullYear()} EduDash — Espace étudiant
          </p>
        </div>
      </motion.div>
    </section>
  );
};
