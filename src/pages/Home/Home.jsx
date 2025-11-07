import { useEffect, useRef, useState } from "react";
import logo from "../../utils/imgs/edu_dash_logo.png";
import dark_logo from "../../utils/imgs/edu_dash_dark.png";
import dark_logo2 from "../../utils/imgs/edu_dash_dark2.png"
import {
  MessageSquare,
  Mail,
  User,
  Clock,
  MapPin,
  Users,
  Layers,
  BarChart3,
  FileDown,
  Globe2,
  Users2,
  CreditCard,
  FileBarChart,
  CalendarDays,
  Bell,
  GraduationCap,
  Smile,
  Building2,
  ChevronDown,
  MessageCircle,
  Shield,
  Sun,
  Moon,
} from "lucide-react";

import Illustration from "../../utils/imgs/college project-amico.svg"

import AOS from "aos";
import "aos/dist/aos.css";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Accueil", "À propos", "Fonctionnalités", "Témoignages", "Contact"];

  const [darkMode, setDarkMode] = useState(false);

  // Load preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };
  return (
    <nav className="w-full h-[80px] flex items-center px-4 md:px-8 bg-white dark:bg-gray-900 sticky top-0 z-50 relative transition-colors duration-250">
<div className="max-w-7xl pr-20 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="/">
          <img 
            src={logo} 
            alt="EduDash Logo" 
            className="h-10 dark:hidden" // Light logo
          />
          <img 
            src={dark_logo} 
            alt="EduDash Dark Logo" 
            className="h-10 hidden dark:block" // Dark logo
          />
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-1 justify-center gap-8 text-md">
        {links.map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} // convert spaces to -
            className="text-gray-700 dark:text-gray-300 hover:text-[#FFAA28] transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#FFAA28] after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Desktop Login */}
      <div className="hidden md:flex items-center ml-6">
        <a href="/login" className="px-4 py-2 rounded-lg bg-[#FFAA28] text-white font-medium hover:bg-orange-500 transition">
          Se Connecter
        </a>
      </div>

      {/* Theme toggle + Mobile Hamburger */}
      <div className="flex items-center ml-4 gap-3">
    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
      {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
    </button>

        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#FFAA28] focus:outline-none text-3xl"
            aria-label="Ouvrir le menu"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div
            className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50"
            style={{ animation: "fadeSlideIn 0.32s ease forwards" }}
          >
            <div className="flex justify-center py-6">
        <a href="/">
          <img 
            src={logo} 
            alt="EduDash Logo" 
            className="h-10 dark:hidden" // Light logo
          />
          <img 
            src={dark_logo2} 
            alt="EduDash Dark Logo" 
            className="h-10 hidden dark:block" // Dark logo
          />
        </a>
            </div>

            <div className="flex flex-col items-start py-6 px-6 gap-6">
              {links.map((item, i) => {
                // Hide "Fonctionnalités" in mobile sidebar
                if (item === "Fonctionnalités") return null;

                return (
                  <a
                    key={i}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-[#FFAA28] text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                );
              })}
              <a
                href="/login"
                className="bg-[#FFAA28] hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition duration-200 font-semibold mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Se Connecter
              </a>
            </div>
          </div>
        </>
      )}


      <style>
        {`
          @keyframes fadeSlideIn {
            0% { opacity: 0; transform: translateX(-100%); }
            100% { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </nav>
  );
}
/* ------------------ CountUp ------------------ */
function CountUp({ end = 0, duration = 2800, suffix = "", start = true }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    startRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - (startRef.current || 0);
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      const current = Math.floor(end * eased);
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else setValue(end);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [end, duration, start]);

  const formatted = new Intl.NumberFormat("en-US").format(value);
  return (
    <>
      {formatted}
      {suffix}
    </>
  );
}

/* ------------------ HeroSection ------------------ */
export function HeroSection() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section data-aos="fade-down" className="relative z-10 overflow-hidden bg-gradient-to-b from-white to-primary-light/30 dark:from-gray-900 dark:to-gray-800" id="accueil">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Mobile Image */}
        <div className="flex md:hidden justify-center lg:mb-6 mt-4">
          <div className="relative w-full max-w-[280px] rounded-2xl overflow-hidden flex items-center justify-center">
            <img src={Illustration}  alt="Illustration examens EDU Dash" className="object-contain w-full h-auto drop-shadow-lg" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-6 max-w-xl md:max-w-lg lg:max-w-xl text-center md:text-left mx-auto lg:mb-0 mb-12">
          <h1 className="lg:text-6xl lg:block hidden text-3xl font-display font-bold tracking-tight text-neutral-dark dark:text-gray-100 leading-tight">
            Gérez votre école <br />
            <span className="bg-clip-text text-neutral-dark dark:text-gray-100 bg-gradient-to-r from-primary-dark to-orange-500">
              simplement et efficacement
            </span>
          </h1>

          <p className="text-base lg:text-lg text-sm text-neutral-gray dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
            EDU Dash centralise la communication, le suivi administratif et financier, les bulletins et les statistiques clés. Une solution unique pour une école plus connectée.
          </p>

          {/* Desktop Buttons */}
          <div className="lg:flex hidden flex-col sm:flex-row gap-4 pt-4 items-start sm:items-center">
            <a href="/login">
              <button className="px-10 py-3 text-lg rounded-xl bg-[#FFAA28] text-white font-medium hover:bg-primary-dark/90 transition-all shadow-lg hover:shadow-xl duration-300 flex items-center justify-center">
                Se Connecter
              </button>
            </a>
            <a href="#contact">
              <button className="px-8 py-4 md:px-6 md:py-3 rounded-xl border-2 border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all lg:flex items-center justify-center hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Demander un démo
              </button>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex justify-center">
            <a href="/login" className="flex py-3 px-6 rounded-lg bg-[#FFAA28] text-white font-semibold text-base shadow-md hover:bg-orange-500 transition">
              Se connecter
            </a>
          </div>
        </div>

        {/* Desktop image */}
        <div className="relative hidden md:flex justify-center">
          <div className="relative w-full max-w-[520px] rounded-3xl overflow-hidden flex items-center justify-center">
            <img src={Illustration} alt="Illustration examens EDU Dash" className="object-contain w-full h-auto" style={{ maxWidth: "520px" }} />
          </div>
        </div>
      </div>

      <div className="lg:block hidden relative lg:pt-3 pt-6 lg:py-8 lg:px-6 md:px-12 lg:px-24 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border-t border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-8">Déjà adopté par des établissements reconnus</p>
        </div>
      </div>
    </section>
  );
}

/* ------------------ PourquoiEduDash ------------------ */
export function PourquoiEduDash() {
  const points = [
    {
      icon: <Layers className="w-6 h-6 text-[#FFAA28]" />,
      title: "Système Multi-École",
      desc: "Chaque établissement dispose de son propre espace sécurisé grâce à notre technologie multi-tenant. Gérez plusieurs écoles sans jamais mélanger leurs données.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#FFAA28]" />,
      title: "Vue Globale Instantanée",
      desc: "Des tableaux de bord clairs et dynamiques pour suivre paiements, absences, résultats et statistiques clés en temps réel.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#FFAA28]" />,
      title: "Communication Unifiée",
      desc: "Un chat interne relie enseignants, parents et responsables pour une collaboration fluide et rapide.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#FFAA28]" />,
      title: "Gestion Complète et Centralisée",
      desc: "De la création d’un élève à la génération des bulletins, tout est centralisé dans une interface intuitive.",
    },
    {
      icon: <FileDown className="w-6 h-6 text-[#FFAA28]" />,
      title: "Export & Automatisation",
      desc: "Exportez vos données en PDF ou Excel, gérez factures, absences et documents officiels automatiquement.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#FFAA28]" />,
      title: "Conçu pour le Marché Marocain et Européen",
      desc: "Une solution développée en Europe et adaptée aux besoins des écoles marocaines, conforme aux normes locales.",
    },
  ];

  return (
    <section id="à-propos" className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div data-aos="fade-down" className="text-center mb-14">
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Pourquoi <span>choisir Edu Dash ?</span></h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:text-lg text-sm">Une solution pensée pour simplifier, sécuriser et moderniser la gestion des établissements scolaires.</p>
        </div>

        <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {points.map((item, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#FFAA28]/10 p-3 rounded-xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ FeaturesSection ------------------ */
export function FeaturesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const features = [
    {
      icon: <Users2 className="w-6 h-6 text-[#FFAA28]" />,
      title: "Gestion Administrative Complète",
      desc: "Centralisez toutes les informations des élèves, enseignants et parents. Gagnez du temps avec des outils puissants de gestion de classes, d’inscriptions et de présence.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#FFAA28]" />,
      title: "Communication Simplifiée",
      desc: "Facilitez la communication entre enseignants, parents et direction grâce à un système de chat intégré et des annonces instantanées.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#FFAA28]" />,
      title: "Suivi Financier Intelligent",
      desc: "Suivez les paiements, gérez la facturation et visualisez vos budgets à travers des tableaux de bord simples et précis.",
    },
    {
      icon: <FileBarChart className="w-6 h-6 text-[#FFAA28]" />,
      title: "Bulletins & Rapports Automatisés",
      desc: "Créez et exportez en un clic des bulletins, rapports académiques et statistiques personnalisés.",
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-[#FFAA28]" />,
      title: "Planification & Absences",
      desc: "Organisez vos emplois du temps, suivez les absences et recevez des alertes automatiques pour chaque événement important.",
    },
    {
      icon: <Bell className="w-6 h-6 text-[#FFAA28]" />,
      title: "Notifications & Rappels",
      desc: "Tenez tout le monde informé avec des rappels automatiques et notifications intelligentes pour les paiements, réunions ou devoirs.",
    },
  ];

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="fonctionnalites" className="bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:block hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Les <span>Fonctionnalités Clés</span></h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:text-lg text-sm">EDU Dash combine puissance et simplicité pour transformer la gestion scolaire en une expérience fluide et moderne.</p>
        </div>

        <div className="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
          {features.map((feature, index) => (
            <div key={index} className="group transition-all duration-300 hover:bg-orange-50/40 dark:hover:bg-gray-700">
              <button onClick={() => toggle(index)} className="w-full cursor-pointer flex items-center justify-between px-6 py-5 text-left focus:outline-none">
                <div className="flex items-center gap-4">
                  <div className="bg-[#FFAA28]/10 p-3 rounded-xl">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{feature.title}</h3>
                </div>
                <ChevronDown className={`text-[#FFAA28] w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>

              <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 px-6 pb-6" : "max-h-0 opacity-0"}`}>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ StatistiquesHome ------------------ */
export function StatistiquesHome() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { end: 7500, suffix: "+", label: "Étudiants Inscrits", icon: <GraduationCap className="w-8 h-8 text-[#FFAA28]" /> },
    { end: 150, suffix: "+", label: "Enseignants Actifs", icon: <Users className="w-8 h-8 text-[#FFAA28]" /> },
    { end: 8020, suffix: "+", label: "Parents Connectés", icon: <Smile className="w-8 h-8 text-[#FFAA28]" /> },
    { end: 430, suffix: "+", label: "Équipe Administrative", icon: <Building2 className="w-8 h-8 text-[#FFAA28]" /> },
  ];

  return (
    <section ref={sectionRef} id="statistiques" className="relative py-24 lg:bg-gradient-to-b lg:from-orange-50 lg:to-white dark:lg:from-gray-800 dark:bg-gray-900 dark:lg:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="lg:text-4xl text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">Statistiques <span>Clés</span></h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:text-lg text-sm">Des chiffres qui illustrent la confiance des écoles envers <span className="font-semibold dark:text-gray-100">Edu Dash</span>.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transform transition-all duration-500 border border-orange-100 dark:border-gray-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#FFAA28]/10 p-4 rounded-full mb-4">{s.icon}</div>
                <h3 className="text-4xl font-semibold text-[#FFAA28] mb-1">
                  {visible ? <CountUp start={visible} end={s.end} duration={2800} suffix={s.suffix} /> : <>0{s.suffix}</>}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 font-medium">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ Témoignages ------------------ */
const testimonials = [
  {
    name: "Mme Amina",
    role: "Directrice d’École Privée",
    quote: "EDU Dash a transformé notre manière de gérer l’établissement. Communication, paiements, suivi… tout est devenu plus simple !",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    name: "M. Youssef",
    role: "Enseignant Principal",
    quote: "Un gain de temps incroyable ! Je peux gérer mes notes, absences et exercices sans stress depuis une seule plateforme.",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    name: "Mme Sara",
    role: "Parent d’Élève",
    quote: "Je reçois les notes et les notifications en temps réel. C’est rassurant de voir la progression de mon enfant si facilement.",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
];

export function Témoignages() {
  return (
    <section id="témoignages" className="relative lg:py-24 py-12 overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 data-aos="fade-down" className="lg:text-4xl text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Témoignages <span> & Avis</span></h2>
        <p data-aos="fade-down" className="text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto lg:text-lg text-sm">Découvrez ce que disent les utilisateurs d'<strong className="dark:text-gray-100">EDU Dash</strong> — la solution tout-en-un pour une gestion scolaire fluide et moderne.</p>

        <div  className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div data-aos="fade-right" key={i} className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 text-left group">
              <div className="absolute -top-8 left-8 w-16 h-16 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-800 transition-transform duration-300 group-hover:-translate-y-1">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-[#FFAA28]">{t.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{t.role}</p>
                <p className="italic text-gray-700 dark:text-gray-200 leading-relaxed">“{t.quote}”</p>
              </div>

              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#FFAA28]/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ ContactSection ------------------ */
export function ContactSection() {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle"); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const MESSAGE_LIMIT = 1000;

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((s) => ({ ...s, [name]: value }));
    setFieldErrors((s) => ({ ...s, [name]: "" }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setStatus("idle");
    setErrorMessage("");
    const errors = {};
    if (!contact.name.trim()) errors.name = "Le nom est requis.";
    if (!contact.email.trim()) errors.email = "L'email est requis.";
    else if (!validateEmail(contact.email)) errors.email = "L'email fourni est invalide.";
    if (!contact.message.trim()) errors.message = "Le message est requis.";
    else if (contact.message.length > MESSAGE_LIMIT) errors.message = `Le message dépasse la limite de ${MESSAGE_LIMIT} caractères.`;

    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      setStatus("error");
      setErrorMessage("Veuillez corriger les champs indiqués.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      setContact({ name: "", email: "", message: "" });
      setFieldErrors({});
    }, 700);
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div data-aos="fade-down" className="text-center lg:mb-14 mb-8">
          <h2 className="lg:text-4xl text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">Contactez <span>notre équipe</span></h2>
          <div className="lg:flex hidden w-24 h-1 bg-[#FFAA28] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:text-lg text-sm">Une question, un partenariat, ou un besoin d’assistance ? N’hésitez pas à nous écrire nous serons ravis de vous répondre.</p>
        </div>

        <div data-aos="fade-right" className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left: Contact Info (hidden on mobile) */}
          <div className="hidden md:flex lg:flex-1 p-8 flex-col">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Informations de contact</h3>

            <ul className="space-y-6 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-4">
                <div className="bg-[#FFAA28]/10 text-[#FFAA28] p-3 rounded-full"><Mail size={20} /></div>
                <div><p className="font-semibold">E-mail</p><p className="text-gray-600 dark:text-gray-300">edudashma@gmail.com</p></div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#FFAA28]/10 text-[#FFAA28] p-3 rounded-full"><MapPin size={20} /></div>
                <div><p className="font-semibold">Adresse</p><p className="text-gray-600 dark:text-gray-300">Casablanca, Maroc</p></div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#FFAA28]/10 text-[#FFAA28] p-3 rounded-full"><Clock size={20} /></div>
                <div><p className="font-semibold">Horaires</p><p className="text-gray-600 dark:text-gray-300">Lun - Ven : 9h à 18h</p></div>
              </li>
            </ul>

            <div className="mt-10 border-t border-gray-100 dark:border-gray-700 pt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Besoin d’aide rapide ?</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Vous pouvez également consulter notre centre d’aide ou contacter un responsable de votre établissement pour un accompagnement direct.</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-[1.3] bg-white dark:bg-gray-800 px-4 lg:p-8 lg:space-y-6">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-800 dark:text-gray-200 text-sm font-medium mb-2">Votre nom</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400" />
                  <input name="name" value={contact.name} onChange={handleContactChange} placeholder="Jean Dupont" required
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 placeholder-gray-400 dark:placeholder-gray-400 text-gray-700 dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFAA28]/40 focus:border-[#FFAA28] transition" />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 dark:text-gray-200 text-sm font-medium mb-2">E-mail</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400" />
                  <input type="email" name="email" value={contact.email} onChange={handleContactChange} placeholder="email@example.com" required
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 placeholder-gray-400 dark:placeholder-gray-400 text-gray-700 dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFAA28]/40 focus:border-[#FFAA28] transition" />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 dark:text-gray-200 text-sm font-medium mb-2">Message</label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-3 top-4 text-gray-400 dark:text-gray-400" />
                  <textarea name="message" value={contact.message} onChange={handleContactChange} rows={5} placeholder="Votre message..." required
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 placeholder-gray-400 dark:placeholder-gray-400 text-gray-700 dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFAA28]/40 focus:border-[#FFAA28] transition resize-none" />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#FFAA28] hover:bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition">
                {isSubmitting ? "Envoi..." : "Envoyer"}
              </button>
            </form>

            {status === "error" && <p className="text-red-500 text-sm mt-2 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 p-2 rounded-lg">{errorMessage}</p>}
            {status === "success" && <p className="text-green-600 text-sm mt-2 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 p-2 rounded-lg">Merci ! Votre message a été envoyé avec succès.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ FinalCTA ------------------ */
export function FinalCTA() {
  return (
    <section className="relative lg:block hidden py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
        <h2 className="lg:text-5xl text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100">Prêt à moderniser la gestion de votre école ?</h2>
        <p className="text-md lg:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">Rejoignez les établissements qui font déjà confiance à EDU Dash et découvrez une nouvelle façon de gérer votre école, simplement et efficacement.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="/login" className="px-8 py-3 rounded-xl text-white bg-[#FFAA28] hover:text-[#FFAA28] hover:bg-white transition-colors duration-300 border hover:border-[#FFAA28] font-semibold hover:bg-gray-100 transition dark:border-none shadow-lg">Se connecter</a>
          <a href="#contact" className="px-8 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white dark:hover:text-white transition-colors duration-300 dark:bg-transparent border-2 border-white font-semibold">Nous contacter</a>
        </div>
      </div>
    </section>
  );
}

/* ------------------ Footer ------------------ */
export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-black dark:text-gray-200 py-16 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex-1 md:flex-none">
          <img src={logo} alt="EduDash Logo" className="h-12 dark:hidden mb-4" />
          <img src={dark_logo} alt="EduDash Dark Logo" className="h-12 hidden dark:block mb-4" />
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm">
            EduDash est une plateforme de gestion scolaire intuitive et complète pour moderniser la vie éducative.
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4 dark:text-gray-100">Liens utiles</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#accueil" className="hover:text-[#FFAA28] transition-colors duration-300">Accueil</a></li>
            <li><a href="#apropos" className="hover:text-[#FFAA28] transition-colors duration-300">À propos</a></li>
            <li><a href="#fonctionnalites" className="hover:text-[#FFAA28] transition-colors duration-300">Fonctionnalités</a></li>
            <li><a href="#témoignages" className="hover:text-[#FFAA28] transition-colors duration-300">Témoignages</a></li>
            <li><a href="#contact" className="hover:text-[#FFAA28] transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4 dark:text-gray-100">Contactez-nous</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>Email : <a href="mailto:contact@edudash.com" className="hover:text-[#FFAA28] transition-colors">contact@edudash.com</a></li>
            <li className="flex">Localisation : <p className="hover:text-[#FFAA28] transition-colors ml-2">Casablanca, Maroc</p></li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2 dark:text-gray-100">Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Votre email" className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFAA28]" />
            <button type="submit" className="px-4 py-2 rounded-md bg-[#FFAA28] text-white font-medium hover:bg-primary-dark transition-colors">S'inscrire</button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-100 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} EduDash. Tous droits réservés.</div>
    </footer>
  );
}

/* ------------------ HomePage (combines everything) ------------------ */
export function HomePage() {


  return (
    <>
      <div style={{ fontFamily: "'Poppins', sans-serif" }}>
        <NavBar />
        <HeroSection />
        <PourquoiEduDash />
        <FeaturesSection />
        <StatistiquesHome />
        <Témoignages />
        <ContactSection />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
