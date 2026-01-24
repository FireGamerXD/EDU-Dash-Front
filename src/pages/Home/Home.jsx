import {
  ArrowUpRight,
  BarChart3,
  Building2,
  ChevronDown,
  Clock,
  FileDown,
  Globe2,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Shield,
  ShieldCheck,
  ShieldCheckIcon,
  Smile,
  User,
  Users,
  Users2,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ExamsBro from "../../utils/imgs/college project-amico.svg"
import logo from '../../utils/imgs/edu_dash_logo.png'
// const ExamsBro = "/college project-amico.svg";
// const logo = "/edu_dash_logo.png";

/* ================= NAVBAR ================= */
export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex h-[80px] w-full items-center bg-white px-4 md:px-8">
      <div className="flex lg:w-[24%] lg:min-w-[160px] items-center">
        <a href="/">
          <img src={logo} className="w-44 lg:h-12 lg:w-54" alt="EduDash Logo" />
        </a>
      </div>

      <div className="text-md hidden flex-1 justify-center gap-8 md:flex">
        {[
          ["Accueil", "#accueil"],
          ["À propos", "#apropos"],
          ["Fonctionnalités", "#fonctionnalites"],
          ["Témoignages", "#Témoignages"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="relative text-gray-700 transition-colors duration-200
            after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
            after:bg-[#ffa500] after:transition-all after:duration-300
            hover:text-[#ffa500] hover:after:w-full"
          >
            {label}
          </a>
        ))}
      </div>

      <div className="ml-6 hidden items-center md:flex">
        <a
          href="/student/login"
          className="rounded-lg bg-[#FFAA27] px-4 py-2 font-medium text-white hover:bg-orange-500"
        >
          Se Connecter
        </a>
      </div>

      <div className="ml-auto flex items-center md:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-3xl text-[#ffa500]"
        >
          &#9776;
        </button>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="fixed left-0 top-0 z-50 h-full w-64 bg-white shadow-xl"
            style={{ animation: "slideIn 0.3s ease forwards" }}
          >
            <div className="flex justify-center py-6">
              <img src={logo} className="h-10" alt="EduDash Logo" />
            </div>

            <div className="flex flex-col gap-6 px-6 py-6">
              {[
                ["Accueil", "#accueil"],
                ["À propos", "#apropos"],
                ["Témoignages", "#Témoignages"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-lg text-gray-700 hover:text-[#ffa500]"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}

              <a
                href="/student/login"
                className="mt-4 rounded-lg bg-[#FFAA27] px-6 py-2 text-center font-semibold text-white hover:bg-amber-600"
                onClick={() => setMenuOpen(false)}
              >
                Se Connecter
              </a>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </nav>
  );
};

/* ================= COUNT UP ================= */
function CountUp({ end = 0, duration = 2800, suffix = "", start = true }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    startRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      const current = Math.floor(end * eased);
      setValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [end, duration, start]);

  return (
    <>
      {new Intl.NumberFormat("en-US").format(value)}
      {suffix}
    </>
  );
}

/* ================= HERO ================= */
export function HeroSection() {
  return (
    <section
      className="relative z-10 overflow-hidden bg-gradient-to-b from-white to-primary-light/30 dark:from-gray-900 dark:to-gray-800"
      id="accueil"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Mobile Image */}
        <div className="flex md:hidden justify-center lg:mb-6 lg:mt-4">
          <div className="relative w-full max-w-[280px] rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src={ExamsBro}
              alt="Illustration examens EDU Dash"
              className="object-contain w-full h-auto drop-shadow-lg"
            />
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
              <button className="cursor-pointer px-10 py-3 text-lg rounded-xl bg-[#FFAA28] text-white font-medium hover:bg-primary-dark/90 transition-all shadow-lg hover:shadow-xl duration-300 flex items-center justify-center">
                Se Connecter
              </button>
            </a>
            <a href="#contact">
              <button className="cursor-pointer px-8 py-4 md:px-6 md:py-3 rounded-xl border-2 border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all lg:flex items-center justify-center hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Contactez-nous
              </button>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex justify-center">
            <a
              href="/login"
              className="flex py-3 px-6 rounded-lg bg-[#FFAA28] text-white font-semibold text-base shadow-md hover:bg-orange-500 transition"
            >
              Se connecter
            </a>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="relative hidden md:flex justify-center">
          <div className="relative w-full max-w-[520px] rounded-3xl overflow-hidden flex items-center justify-center">
            <img
              src={ExamsBro}
              alt="Illustration examens EDU Dash"
              className="object-contain w-full h-auto"
              style={{ maxWidth: "520px" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicators */}

    {/* Desktop Mouse Scroll */}
    <div className="hidden md:flex absolute left-1/2 bottom-28 -translate-x-1/2 flex-col items-center z-50">
    <a href="#apropos" className="flex flex-col items-center cursor-pointer">
        <div className="w-6 h-12 rounded-full border-2 border-gray-400 flex items-start justify-center p-1">
        <div className="w-1 h-1 rounded-full bg-gray-400 animate-scrollDown" />
        </div>
        {/* <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">Scroll</span> */}
    </a>
    </div>

    <style>
    {`
    @keyframes scrollDown {
        0% { transform: translateY(0); opacity: 0; }
        50% { transform: translateY(6px); opacity: 1; }
        100% { transform: translateY(0); opacity: 0; }
    }
    .animate-scrollDown {
        animation: scrollDown 1.5s infinite;
    }
    `}
    </style>


      {/* Mobile Arrow Button */}
      {/* <div className="flex md:hidden fixed right-4 bottom-16 z-50">
        <a
          href="#apropos"
          className="flex items-center justify-center w-10 h-10 rounded-full text-[#FFAA28] border hover:scale-110 transition-transform animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div> */}

      {/* Trusted By Section */}
      <div className="lg:block hidden relative lg:pt-3 pt-6 lg:py-8 lg:px-6 md:px-12 lg:px-24 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border-t border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-8">
            Déjà adopté par des établissements reconnus
          </p>
        </div>
      </div>

      <style>
        {`
          @keyframes scrollDown {
            0% { transform: translateY(0); opacity: 0; }
            50% { transform: translateY(6px); opacity: 1; }
            100% { transform: translateY(0); opacity: 0; }
          }

          .animate-scrollDown {
            animation: scrollDown 1.5s infinite;
          }
        `}
      </style>
    </section>
  );
}

export function PourquoiEduDash() {
    const points = [
        {
            icon: <Layers className="h-6 w-6 text-[#FFAA27]" />,
            title: 'Espace Scolaire Dédié et Sécurisé',
            desc: 'Chaque établissement bénéficie d’un environnement numérique privé, structuré et sécurisé pour une gestion sereine et professionnelle.',
        },
        {
            icon: <BarChart3 className="h-6 w-6 text-[#FFAA27]" />,
            title: 'Pilotage Clair et Décisions Rapides',
            desc: 'Visualisez instantanément les indicateurs essentiels : paiements, absences, performances et statistiques clés.',
        },
        {
            icon: <ShieldCheck className="h-6 w-6 text-[#FFAA27]" />,
            title: 'Contrôle Avancé par Rôles et Permissions',
            desc: 'Un système d’accès intelligent qui garantit que chaque acteur voit uniquement les informations qui le concernent.',
        },
        {
            icon: <Shield className="h-6 w-6 text-[#FFAA27]" />,
            title: 'Gestion Scolaire Centralisée',
            desc: 'Inscriptions, classes, niveaux, enseignants, finances et documents réunis dans une seule plateforme fluide.',
        },
        {
            icon: <FileDown className="h-6 w-6 text-[#FFAA27]" />,
            title: 'Automatisation et Gain de Temps',
            desc: 'Documents, factures, bulletins et exports PDF ou Excel générés rapidement, sans tâches répétitives.',
        },
        {
            icon: <Globe2 className="h-6 w-6 text-[#FFAA27]" />,
            title: 'Pensé pour les Écoles d’Aujourd’hui',
            desc: 'Une solution moderne, conforme aux besoins des établissements marocains et européens, prête à évoluer avec votre structure.',
        },
    ];

    return (
        <section id="apropos" className="bg-white py-14">
            <div className="mx-auto max-w-7xl px-6 md:px-12">

                <div className="mb-16 text-center">
                    <h2 className="mb-4 lg:text-3xl text-2xl font-bold text-gray-900 lg:text-4xl">
                        Pourquoi choisir <span className="">Edu Dash</span> ?
                    </h2>
                    <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-[#FFAA27]" />
                    <p className="mx-auto max-w-2xl text-gray-600 lg:text-lg text-sm">
                        Une plateforme professionnelle conçue pour structurer, sécuriser et moderniser la gestion scolaire.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2">
                    {points.map((item, i) => (
                        <div key={i} className="group flex items-start space-x-5">
                            <div className="flex-shrink-0 rounded-xl bg-[#FFAA27]/10 p-3 transition group-hover:bg-[#FFAA27]/20">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export function WhoItsFor() {
  const roles = [
    {
      title: "Direction & Administration",
      desc: "Pilotez l’établissement avec une vision claire et centralisée.",
      features: [
        "Gestion scolaire complète",
        "Suivi financier & paiements",
        "Statistiques et rapports",
      ],
      icon: <ShieldCheckIcon className="h-8 w-8 text-[#FFAA27]" />,
    },
    {
      title: "Enseignants",
      desc: "Un espace simple pour gérer la pédagogie au quotidien.",
      features: ["Notes & absences", "Devoirs et évaluations", "Suivi des élèves"],
      icon: <GraduationCap className="h-8 w-8 text-[#FFAA27]" />,
    },
    {
      title: "Parents",
      desc: "Une visibilité fiable sur la scolarité des enfants.",
      features: [
        "Notes & bulletins",
        "Notifications importantes",
        "Demandes administratives",
      ],
      icon: <Users className="h-8 w-8 text-[#FFAA27]" />,
    },
    {
      title: "Élèves",
      desc: "Tout le parcours scolaire en un seul espace.",
      features: ["Emploi du temps", "Résultats & moyennes", "Devoirs à faire"],
      icon: <User className="h-8 w-8 text-[#FFAA27]" />,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative overflow-hidden py-16">
      {/* Decorative shapes (DESKTOP ONLY) */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {/* Left half circle */}
        <div className="absolute left-[-120px] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-[#FFAA27]/10 blur-3xl" />

        {/* Right half circle */}
        <div className="absolute right-[-120px] top-1/3 h-[300px] w-[300px] rounded-full bg-[#FFAA27]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-4xl">
            Une plateforme pensée pour{" "}
            <span className="">chaque acteur</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 lg:text-lg">
            Des fonctionnalités ciblées selon chaque rôle, pour une gestion fluide
            et maîtrisée.
          </p>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden md:block">
          {/* Animated line */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 flex justify-center">
            <div className="h-[2px] w-[85%] origin-left scale-x-0 rounded-full bg-[#FFAA27]/70 animate-flowLine" />
          </div>

          <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {roles.map((role, i) => (
              <div
                key={i}
                className="group relative h-[280px] overflow-hidden rounded-3xl
                           border border-gray-100 bg-white
                           shadow-sm transition-all duration-500
                           hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative z-10 flex h-full flex-col p-8">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl">
                    {role.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {role.title}
                  </h3>
                  <p className="text-sm text-gray-600">{role.desc}</p>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 z-20 flex flex-col justify-center
                             bg-white/90 p-8 backdrop-blur-sm
                             opacity-0 translate-y-4
                             transition-all duration-500
                             group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-[#FFAA27]">
                    Fonctionnalités clés
                  </p>
                  <ul className="space-y-3 text-sm text-gray-800">
                    {role.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FFAA27]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="space-y-4 md:hidden">
          {roles.map((role, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="w-full overflow-hidden border-b border-gray-200 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold text-[#FFAA27]">
                      {i + 1}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {role.title}
                      </h3>
                      <p className="text-sm text-gray-600">{role.desc}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden px-4 transition-all duration-500 ${
                    isOpen ? "max-h-96 py-3" : "max-h-0"
                  }`}
                >
                  <ul className="space-y-2">
                    {role.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#FFAA27]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes flowLine {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }

          .animate-flowLine {
            animation: flowLine 1.2s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}

export function TrustSection() {
  const items = [
    {
      icon: <Shield className="h-7 w-7 text-[#FFAA27]" />,
      title: "Sécurité des données",
      desc: "Infrastructure robuste, accès strictement contrôlés et isolation complète des données.",
    },
    {
      icon: <Globe2 className="h-7 w-7 text-[#FFAA27]" />,
      title: "Conformité & Fiabilité",
      desc: "Architecture inspirée des standards européens, pensée pour la stabilité et l’évolutivité à long terme.",
    },
    {
      icon: <MessageCircle className="h-7 w-7 text-[#FFAA27]" />,
      title: "Support & Accompagnement",
      desc: "Une équipe humaine, réactive et impliquée à chaque étape du déploiement et de l’utilisation.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Trust Badge */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full bg-[#FFAA27]/10 px-4 py-1 text-sm font-medium text-[#FFAA27]">
            Conçu pour les établissements exigeants
          </span>
        </div>

        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-4xl">
            Une solution <span className="">fiable, sécurisée</span> et durable
          </h2>
          <p className="text-sm text-gray-600 lg:text-lg">
            Edu Dash accompagne les écoles avec une vision long terme, une
            technologie maîtrisée et une transparence totale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                group relative rounded-3xl border border-gray-100 bg-white p-8
                shadow-sm transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl
              "
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFAA27]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>

              {/* Bottom accent */}
              {/* <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#FFAA27] transition-transform duration-500 group-hover:scale-x-100" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatistiquesHome() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
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
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      end: 7500,
      suffix: '+',
      label: 'Étudiants inscrits',
      icon: <GraduationCap className="h-8 w-8 text-[#FFAA27]" />,
    },
    {
      end: 150,
      suffix: '+',
      label: 'Enseignants actifs',
      icon: <Users className="h-8 w-8 text-[#FFAA27]" />,
    },
    {
      end: 8020,
      suffix: '+',
      label: 'Parents connectés',
      icon: <Smile className="h-8 w-8 text-[#FFAA27]" />,
    },
    {
      end: 430,
      suffix: '+',
      label: 'Équipe administrative',
      icon: <Building2 className="h-8 w-8 text-[#FFAA27]" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="statistiques"
      className="relative overflow-hidden py-20"
    >
      {/* Side glows */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-72 bg-gradient-to-r from-[#FFAA27]/10 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-72 bg-gradient-to-l from-[#FFAA27]/10 to-transparent" /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Des chiffres qui parlent d’eux-mêmes
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 lg:text-lg">
            Des statistiques réelles qui reflètent la confiance des établissements
            envers <span className="font-semibold">Edu Dash</span>.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`
                group relative overflow-hidden rounded-3xl
                border border-gray-100 bg-white/80
                p-8 backdrop-blur-sm
                shadow-sm transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl
                ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFAA27]/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFAA27]/10 transition-transform duration-500 group-hover:scale-110">
                  {s.icon}
                </div>

                <h3 className="mb-1 text-4xl font-extrabold text-[#FFAA27]">
                  {visible ? (
                    <CountUp start={visible} end={s.end} duration={2800} suffix={s.suffix} />
                  ) : (
                    <>0{s.suffix}</>
                  )}
                </h3>

                <p className="mt-1 text-sm font-medium text-gray-700">
                  {s.label}
                </p>
              </div>

              {/* Bottom accent */}
              <span className="absolute bottom-0 left-0 h-1 w-full scale-x-0 bg-[#FFAA27] transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Mme Amina",
    role: "Directrice d’École Privée",
    quote:
      "EDU Dash a transformé notre manière de gérer l’établissement. Communication, paiements, suivi… tout est devenu plus simple !",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    name: "M. Youssef",
    role: "Enseignant Principal",
    quote:
      "Un gain de temps incroyable ! Je peux gérer mes notes, absences et exercices sans stress depuis une seule plateforme.",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    name: "Mme Sara",
    role: "Parent d’Élève",
    quote:
      "Je reçois les notes et les notifications en temps réel. C’est rassurant de voir la progression de mon enfant si facilement.",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
];


export function Témoignages() {
  return (
    <section className="relative lg:py-24 py-12 overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Témoignages <span> & Avis</span></h2>
        <p className="text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto lg:text-lg text-sm">Découvrez ce que disent les utilisateurs d'<strong className="dark:text-gray-100">EDU Dash</strong> — la solution tout-en-un pour une gestion scolaire fluide et moderne.</p>

        <div  className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 text-left group">
              <div className="absolute -top-8 left-8 z-99 w-16 h-16 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-800 transition-transform duration-300 group-hover:-translate-y-1 z-10">
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

export function ContactSection() {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((s) => ({ ...s, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      setContact({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
        <section id="contact" className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-6 md:px-10">
                {/* Heading */}
                <div className="mb-8 text-center lg:mb-14">
                    <h2 className="mb-3 text-3xl font-bold text-gray-900 lg:text-4xl">
                        Contactez <span className="">notre équipe</span>
                    </h2>
                    <div className="mx-auto mb-4 hidden h-1 w-24 rounded-full bg-[#FFAA27] lg:flex"></div>
                    <p className="mx-auto max-w-2xl text-sm text-gray-600 lg:text-lg">
                        Une question, un partenariat, ou un besoin d’assistance ? N’hésitez pas à nous écrire nous serons ravis de vous répondre.
                    </p>
                </div>

                {/* Row Layout */}
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    {/* Left: Contact Info */}
                    <div className="p-8 lg:flex-1">
                        <h3 className="mb-6 text-2xl font-semibold text-gray-900">Informations de contact</h3>

                        <ul className="space-y-6 text-gray-700">
                            <li className="flex items-start gap-4">
                                <div className="rounded-full bg-[#FFAA27]/10 p-3 text-[#FFAA27]">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold">E-mail</p>
                                    <p className="text-gray-600">edudashma@gmail.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="rounded-full bg-[#FFAA27]/10 p-3 text-[#FFAA27]">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold">Adresse</p>
                                    <p className="text-gray-600">Casablanca, Maroc</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="rounded-full bg-[#FFAA27]/10 p-3 text-[#FFAA27]">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold">Horaires</p>
                                    <p className="text-gray-600">Lun - Ven : 9h à 18h</p>
                                </div>
                            </li>
                        </ul>

                        {/* Replace Social Section */}
                        <div className="mt-10 border-t border-gray-100 pt-6">
                            <h4 className="mb-3 text-lg font-semibold text-gray-900">Besoin d’aide rapide ?</h4>
                            <p className="mb-4 text-sm text-gray-600">
                                Vous pouvez également consulter notre centre d’aide ou contacter un responsable de votre établissement pour un
                                accompagnement direct.
                            </p>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="flex-[1.3] bg-white px-4 lg:space-y-6 lg:p-8">
                        <form onSubmit={handleContactSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800">Votre nom</label>
                                <div className="relative">
                                    <User size={18} className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                                    <input
                                        name="name"
                                        value={contact.name}
                                        onChange={handleContactChange}
                                        placeholder="Jean Dupont"
                                        required
                                        className="w-full rounded-xl border border-gray-200 bg-white py-3 pr-3 pl-10 text-sm text-gray-700 placeholder-gray-400 transition focus:border-[#FFAA27] focus:ring-2 focus:ring-[#FFAA27]/40 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800">E-mail</label>
                                <div className="relative">
                                    <Mail size={18} className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={contact.email}
                                        onChange={handleContactChange}
                                        placeholder="email@example.com"
                                        required
                                        className="w-full rounded-xl border border-gray-200 bg-white py-3 pr-3 pl-10 text-sm text-gray-700 placeholder-gray-400 transition focus:border-[#FFAA27] focus:ring-2 focus:ring-[#FFAA27]/40 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800">Message</label>
                                <div className="relative">
                                    <MessageSquare size={18} className="absolute top-4 left-3 text-gray-400" />
                                    <textarea
                                        name="message"
                                        value={contact.message}
                                        onChange={handleContactChange}
                                        rows={5}
                                        placeholder="Votre message..."
                                        required
                                        className="w-full resize-none rounded-xl border border-gray-200 bg-white py-3 pr-3 pl-10 text-sm text-gray-700 placeholder-gray-400 transition focus:border-[#FFAA27] focus:ring-2 focus:ring-[#FFAA27]/40 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#FFAA27] py-3 font-semibold text-white shadow-md transition hover:bg-orange-500 hover:shadow-lg"
                            >
                                {/* <Send size={18} /> */}
                                {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
                            </button>
                        </form>

                        {/* Status */}
                        {status === 'error' && (
                            <p className="mt-2 rounded-lg border border-red-100 bg-red-50 p-2 text-sm text-red-500">{errorMessage}</p>
                        )}
                        {status === 'success' && (
                            <p className="mt-2 rounded-lg border border-green-100 bg-green-50 p-2 text-sm text-green-600">
                                Merci ! Votre message a été envoyé avec succès.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
  );
}

export function FinalCTA() {
    return (
    <section className="relative lg:block hidden py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
        <h2 className="lg:text-4xl text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">Prêt à moderniser la gestion de votre école ?</h2>
        <p className="text-sm lg:text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">Rejoignez les établissements qui font déjà confiance à EDU Dash et découvrez une nouvelle façon de gérer votre école, simplement et efficacement.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="/login" className="px-8 py-3 rounded-xl text-white bg-[#FFAA28] hover:text-[#FFAA28] hover:bg-white transition-colors duration-300 border hover:border-[#FFAA28] font-semibold hover:bg-gray-100 transition dark:border-none shadow-lg">Se connecter</a>
          <a href="#contact" className="px-8 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white dark:hover:text-white transition-colors duration-300 dark:bg-transparent border-2 border-white font-semibold">Nous contacter</a>
        </div>
      </div>
    </section>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white py-16 text-black">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-6 md:flex-row md:px-12">
                {/* Logo & Description */}
                <div className="flex-1 md:flex-none">
                    <img src={logo} alt="EduDash Logo" className="mb-4 h-12" />
                    <p className="max-w-sm text-sm leading-relaxed text-gray-600">
                        EduDash est une plateforme de gestion scolaire intuitive et complète pour moderniser la vie éducative.
                    </p>
                </div>

                {/* Useful Links */}
                <div className="flex-1">
                    <h3 className="mb-4 text-lg font-semibold">Liens utiles</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#accueil" className="transition-colors duration-300 hover:text-[#FFAA27]">
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href="#apropos" className="transition-colors duration-300 hover:text-[#FFAA27]">
                                À propos
                            </a>
                        </li>
                        <li>
                            <a href="#fonctionnalites" className="transition-colors duration-300 hover:text-[#FFAA27]">
                                Fonctionnalités
                            </a>
                        </li>
                        <li>
                            <a href="/soon" className="transition-colors duration-300 hover:text-[#FFAA27]">
                                Démo
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="transition-colors duration-300 hover:text-[#FFAA27]">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact / Newsletter */}
                <div className="flex-1">
                    <h3 className="mb-4 text-lg font-semibold">Contactez-nous</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                            Email :{' '}
                            <a href="mailto:contact@edudash.com" className="transition-colors hover:text-[#FFAA27]">
                                contact@edudash.com
                            </a>
                        </li>
                        <li className="flex gap-1">
                            <p>Localisation :</p>
                            <p className="transition-colors hover:text-[#FFAA27]"> Casablanca , Maroc</p>
                        </li>
                    </ul>

                    <h3 className="mt-6 mb-2 text-lg font-semibold">Newsletter</h3>
                    <form className="flex flex-col gap-2 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Votre email"
                            className="rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#FFAA27] focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="hover:bg-primary-dark rounded-md bg-[#FFAA27] px-4 py-2 font-medium text-white transition-colors"
                        >
                            S'inscrire
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-12 border-t border-gray-100 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} EduDash. Tous droits réservés.
            </div>
        </footer>
    );
}

/* ================= PAGE ================= */
export default function Accueil() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <NavBar />
      <HeroSection />
      <PourquoiEduDash />
      <WhoItsFor />
      <TrustSection />
      {/* <StatistiquesHome /> */}
      <Témoignages />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
