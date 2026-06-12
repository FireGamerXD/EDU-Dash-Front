import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Clock3,
  CreditCard,
  Database,
  Download,
  Eye,
  FileDown,
  Globe2,
  GraduationCap,
  Headphones,
  HeadphonesIcon,
  Layers,
  Layers3,
  LayoutDashboard,
  Mail,
  MapPin,
  MapPinned,
  MessageCircle,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  Rocket,
  Shield,
  ShieldCheck,
  ShieldCheckIcon,
  Smile,
  Upload,
  User,
  Users,
  Users2,
  Wallet,
  X,
  XCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ExamsBro from "../../utils/imgs/college project-amico.svg";
import logo from '../../utils/imgs/edu_dash_logo.png';
import dashboardPreview from "../../utils/imgs/directeur_dashboard_view.png";
import businessCardImage from "../../utils/imgs/CarteVisite.png";
import flyerImage from "../../utils/imgs/Flyer.png";
import herosectionImage from "../../utils/imgs/edudash_hero_v5.png";
import { FaWhatsapp } from "react-icons/fa";
// const ExamsBro = "/college project-amico.svg";
// const logo = "/edu_dash_logo.png";

/* ================= NAVBAR ================= */
export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex h-[80px] w-full items-center bg-white px-4 md:px-8">
      {/* Logo */}
      <div className="flex justify-center py-7">
        <div className="w-56 flex justify-center">
          <img
            src={logo}
            className="w-full max-w-full h-auto transition-transform duration-300 hover:scale-105"
            alt="EduDash Logo"
          />
        </div>
      </div>

      {/* Desktop Navigation — DO NOT TOUCH */}
      <div className="text-md hidden flex-1 justify-center gap-8 md:flex">
        {[
          ['Accueil', '#accueil'],
          ['À propos', '#apropos'],
          ['Fonctionnalités', '#fonctionnalites'],
          ['Témoignages', '#Témoignages'],
          ['Contact', '#contact'],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="relative text-gray-700 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ffa500] after:transition-all after:duration-300 hover:text-[#ffa500] hover:after:w-full"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Desktop CTA — DO NOT TOUCH */}
      <div className="ml-6 hidden items-center md:flex">
        <a
          href="/login"
          className="rounded-lg bg-[#FFAA27] px-4 py-2 font-medium text-white transition hover:bg-orange-500"
        >
          Se Connecter
        </a>
      </div>

      {/* Mobile Burger */}
      <div className="ml-auto flex items-center md:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-3xl text-[#ffa500] transition-transform active:scale-90"
          aria-label="Ouvrir le menu"
        >
          &#9776;
        </button>
      </div>

      {/* ================= PREMIUM MOBILE SIDEBAR ================= */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          />

          {/* Sidebar */}
          <div
            className="fixed left-0 top-0 z-50 h-full w-72 bg-white backdrop-blur-xl shadow-2xl border-r border-white/20"
            style={{
              animation: 'drawerIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards',
            }}
          >
            {/* Top Glow Accent */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400" />

            {/* Logo */}
            <div className="flex justify-center py-7">
              <img
                src={logo}
                className="w-52 h-auto transition-transform duration-300 hover:scale-105"
                alt="EduDash Logo"
              />
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3 px-6 py-4">
              {[
                ['Accueil', '#accueil'],
                ['À propos', '#apropos'],
                ['Témoignages', '#Témoignages'],
                ['Contact', '#contact'],
              ].map(([label, href], i) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="group relative flex items-center gap-3 rounded-xl px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-white/60 hover:shadow-md hover:translate-x-1"
                  style={{
                    animation: `fadeSlide 0.35s ease forwards`,
                    animationDelay: `${i * 0.05}s`,
                    opacity: 0,
                  }}
                >
                  {/* Animated dot indicator */}
                  <span className="h-2 w-2 rounded-full bg-[#ffa500] opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125" />

                  <span className="transition-colors duration-200 group-hover:text-[#ffa500]">
                    {label}
                  </span>
                </a>
              ))}

              {/* CTA */}
              <a
                href="/login"
                className="mt-4 rounded-xl bg-[#FFAA27]  px-6 py-3 text-center font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                onClick={() => setMenuOpen(false)}
              >
                Se Connecter
              </a>
            </div>
          </div>
        </>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes drawerIn {
            from {
              transform: translateX(-100%);
              opacity: 0.6;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes fadeSlide {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </nav>
  );
};

function CountUp({ end = 0, duration = 2800, suffix = '', start = true }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    startRef.current = startTime;

    const tick = (now) => {
      const elapsed = now - (startRef.current || 0);
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2); // ease-out quad
      const current = Math.floor(end * eased);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, start]);

  const formatted = new Intl.NumberFormat('en-US').format(value);
  return (
    <>
      {formatted}
      {suffix}
    </>
  );
}

export function HeroSection() {
  return (
    <section
      className="to-primary-light/30 relative z-10 overflow-hidden bg-gradient-to-b from-white dark:from-gray-900 dark:to-gray-800"
      id="accueil"
    >
      <div className="max-w-8xl grid grid-cols-1 items-center gap-8 px-4 py-4 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-12 md:py-14">
        {/* Mobile Image */}
        <div className="flex justify-center md:hidden">
          <div className="relative flex w-full max-w-[380px] items-center justify-center">
            <img
              src={herosectionImage}
              alt="Illustration examens EDU Dash"
              className="w-full object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Text */}
        <div className="mx-auto mb-12 w-full max-w-full text-center md:text-left lg:mb-0 lg:max-w-2xl">
          {/* Mobile Title */}
          <h1 className="font-display text-neutral-dark text-2xl leading-snug font-bold tracking-tight md:hidden dark:text-gray-100">
            Maîtrisez votre établissement en temps réel.
          </h1>

          {/* Mobile Subtitle */}
          <p className="text-neutral-gray mt-3 text-sm leading-relaxed md:hidden dark:text-gray-300">
            Une plateforme unique pour gérer votre école.
          </p>

          {/* Desktop Title */}
          <h1 className="font-display text-neutral-dark hidden text-4xl leading-tight font-bold tracking-tight md:block lg:text-6xl dark:text-gray-100">
            Maîtrisez votre établissement
            <span className="block">en temps réel.</span>
          </h1>

          {/* Desktop Subtitle */}
          <p className="text-neutral-gray mt-6 hidden max-w-xl text-lg leading-relaxed md:block dark:text-gray-300">
            Centralisez la gestion des élèves, des paiements, des emplois du temps
            et des communications au sein d'une plateforme moderne et intuitive.
          </p>

          {/* Benefits */}
          <div className="mt-8 hidden flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-600 md:flex md:justify-start dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#FFAA28]">✓</span>
              Gestion centralisée
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#FFAA28]">✓</span>
              Communication simplifiée
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#FFAA28]">✓</span>
              Accessible partout
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="mt-10 hidden flex-col items-start gap-4 sm:flex-row sm:items-center lg:flex">
            <a href="/login">
              <button className="flex cursor-pointer items-center justify-center rounded-xl bg-[#FFAA28] px-10 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                Se connecter
              </button>
            </a>

            <a href="#apropos">
              <button className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                Découvrir Edu Dash
              </button>
            </a>
          </div>

          {/* Mobile Button */}
<div className="mt-8 flex gap-4 lg:hidden">

  {/* PRIMARY CTA */}
  <a
    href="/login"
    className="flex-1 flex items-center justify-center rounded-xl bg-[#FFAA28] px-4 py-3 font-medium text-white transition hover:bg-[#e09a20]"
  >
    Se connecter
  </a>

  {/* SECONDARY CTA (muted green, not loud) */}
  <a
    href="https://wa.me/212765232205?text=Bonjour%20Edu%20Dash,%20je%20souhaite%20demander%20une%20d%C3%A9monstration."
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-green-500 bg-white px-4 py-3 font-medium text-green-500 transition hover:bg-gray-50"
  >
    <FaWhatsapp className="h-5 w-5 shrink-0 text-green-500" />
    <span>Démo WhatsApp</span>
  </a>

</div>
        </div>

        {/* Desktop Image */}
        <div className="relative hidden justify-end md:flex">
          <div className="relative w-full max-w-[770px]">
            <img
              src={herosectionImage}
              alt="Illustration examens EDU Dash"
              className="h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>
      </div>

      {/* Desktop Mouse Scroll */}
      <div className="absolute bottom-28 left-1/2 z-50 hidden -translate-x-1/2 flex-col items-center md:flex">
        <a href="#apropos" className="flex cursor-pointer flex-col items-center">
          <div className="flex h-12 w-6 items-start justify-center rounded-full border-2 border-gray-400 p-1">
            <div className="animate-scrollDown h-1 w-1 rounded-full bg-gray-400" />
          </div>
        </a>
      </div>

      {/* Trusted By Section */}
      <div className="relative hidden border-t border-gray-100 bg-white/70 pt-6 backdrop-blur-sm md:px-12 lg:block lg:px-6 lg:px-24 lg:py-8 lg:pt-3 dark:border-gray-700 dark:bg-gray-900/50">
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-8 text-center text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
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

export function StatsSection() {
  const items = [
    { icon: MapPinned, title: "Solution 100% marocaine" },
    { icon: HeadphonesIcon, title: "Support local" },
    { icon: ShieldCheck, title: "Hébergement sécurisé" },
  ];

  return (
    <section className="pb-8">
      <div className="mx-auto max-w-5xl px-6">

        {/* ================= MOBILE ONLY ================= */}
        <div className="sm:hidden">

{/* Featured (main value) */}
<div className="mb-4 rounded-2xl border border-gray-200 bg-white shadow-sm">

  <div className="flex items-center gap-3 p-5">

    {/* accent dot */}
    <div className="h-2 w-2 rounded-full bg-[#FFAA27]" />

    <div className="flex-1">
      <div className="text-sm font-medium text-gray-900">
        Solution 100% adaptée aux établissements scolaires
      </div>

      <div className="text-xs text-gray-500 mt-1">
        EduDash • Plateforme centralisée
      </div>
    </div>

  </div>

</div>

          {/* 2 supporting cards */}
          <div className="grid grid-cols-2 gap-4">

            <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm py-5 active:scale-[0.98] transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFAA27]/10">
                <HeadphonesIcon className="h-6 w-6 text-[#FFAA27]" />
              </div>
              <span className="mt-2 text-xs font-medium text-gray-800 text-center">
                Support local
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm py-5 active:scale-[0.98] transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFAA27]/10">
                <ShieldCheck className="h-6 w-6 text-[#FFAA27]" />
              </div>
              <span className="mt-2 text-xs font-medium text-gray-800 text-center">
                Hébergement sécurisé
              </span>
            </div>

          </div>

        </div>

        {/* ================= DESKTOP (UNCHANGED) ================= */}
        <div className="hidden sm:flex flex-wrap items-center justify-center divide-x divide-gray-100">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-4 px-10 py-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFAA27]/10">
                  <Icon className="h-6 w-6 text-[#FFAA27]" />
                </div>
                <span className="text-base font-medium text-gray-800">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export function PourquoiEduDash() {
  const [expanded, setExpanded] = useState(false);

  const points = [
    {
      icon: <Eye className="h-6 w-6 text-[#FFAA27]" />,
      title: 'Une vision claire pour décider plus vite',
      desc: 'Accédez en un instant aux données essentielles : soldes, absences, performances et statistiques clés pour piloter votre école efficacement.',
    },
    {
      icon: <Shield className="h-6 w-6 text-[#FFAA27]" />,
      title: 'Toute votre gestion sur une seule plateforme',
      desc: 'Élèves, classes, enseignants, finances, documents… tout est centralisé pour éviter les outils multiples et les pertes de temps.',
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#FFAA27]" />,
      title: 'Une solution moderne, pensée pour évoluer',
      desc: 'Conçue pour les écoles marocaines et européennes, EDU Dash s\u2019adapte à votre croissance et à vos besoins futurs.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#FFAA27]" />,
      title: 'Contrôle Avancé par Rôles et Permissions',
      desc: 'Un système d\u2019accès intelligent qui garantit que chaque acteur voit uniquement les informations qui le concernent.',
    },
    {
      icon: <FileDown className="h-6 w-6 text-[#FFAA27]" />,
      title: 'Automatisation et gain de temps réel',
      desc: 'Générez facilement factures, bulletins, documents et exports (PDF / Excel) sans tâches répétitives.',
    },
    {
      icon: <Globe2 className="h-6 w-6 text-[#FFAA27]" />,
      title: 'Pensé pour les Écoles d\u2019Aujourd\u2019hui',
      desc: 'Une solution moderne, conforme aux besoins des établissements marocains et européens, prête à évoluer avec votre structure.',
    },
  ];

  // First 3 points shown by default on mobile
  const visiblePointsMobile = expanded ? points : points.slice(0, 3);

  return (
    <section id="apropos" className="relative bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl lg:text-4xl">
            Pourquoi choisir <span className="">Edu Dash</span> ?
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-[#FFAA27]" />
          <p className="mx-auto max-w-2xl text-sm text-gray-600 lg:text-lg">
            Une plateforme moderne pensée pour simplifier la gestion de votre école, améliorer la communication et vous faire gagner du
            temps chaque jour.{' '}
          </p>
        </div>

        {/* Mobile: 3 cards + expandable */}
        <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:hidden">
          {visiblePointsMobile.map((item, i) => (
            <div key={i} className="group flex items-start space-x-5">
              <div className="flex-shrink-0 rounded-xl bg-[#FFAA27]/10 p-3 transition group-hover:bg-[#FFAA27]/20">{item.icon}</div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}

          <button
            onClick={() => setExpanded((v) => !v)}
            className="mx-auto mt-2 flex items-center gap-1.5 rounded-full bg-[#FFAA27]/10 px-5 py-2 text-sm font-semibold text-[#FFAA27] transition hover:bg-[#FFAA27]/20"
          >
            {expanded ? 'Voir moins' : 'Voir plus'}
            <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Desktop: all 6 cards */}
        <div className="hidden grid-cols-1 gap-x-14 gap-y-12 md:grid md:grid-cols-2">
          {points.map((item, i) => (
            <div key={i} className="group flex items-start space-x-5">
              <div className="flex-shrink-0 rounded-xl bg-[#FFAA27]/10 p-3 transition group-hover:bg-[#FFAA27]/20">{item.icon}</div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      icon: Building2,
      title: "Création de votre établissement",
      description: "Nous configurons votre espace selon votre structure et vos besoins.",
    },
    {
      icon: Upload,
      title: "Importation des données",
      description: "Import simple des élèves, enseignants et informations existantes.",
    },
    {
      icon: GraduationCap,
      title: "Formation de votre équipe",
      description: "Accompagnement personnalisé pour une prise en main rapide.",
    },
    {
      icon: Rocket,
      title: "Mise en service",
      description: "Votre établissement est opérationnel sur Edu Dash.",
    },
  ];

  return (
    <section className="lg:py-14 lg:pb-0 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="hidden lg:inline-flex rounded-full bg-[#FFAA27]/10 px-4 py-1 text-sm font-medium text-[#FFAA27]">
            Mise en place simplifiée
          </span>

          <h2 className="mt-6 text-3xl font-bold text-gray-900 lg:text-4xl">
            Déployez Edu Dash en quelques étapes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Nous vous accompagnons de la configuration jusqu'à la mise en service.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-[#FFAA27]/20 lg:block" />

          <div className="grid gap-5 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:rounded-3xl lg:p-8"
                >
                  <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFAA27] text-sm font-bold text-white lg:left-8">
                    {index + 1}
                  </div>

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFAA27]/10 lg:mb-6 lg:h-16 lg:w-16">
                    <Icon className="h-6 w-6 text-[#FFAA27] lg:h-8 lg:w-8" />
                  </div>

                  <h3 className="text-base font-bold text-gray-900 lg:text-lg">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600 lg:mt-3">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductPreview() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const features = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      title: 'Tableau de bord intelligent',
      description: 'Une vue complète de votre établissement en temps réel.',
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: 'Gestion des élèves',
      description: 'Suivez facilement inscriptions, classes et dossiers.',
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: 'Paiements & facturation',
      description: 'Centralisez les paiements et simplifiez le suivi.',
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: 'Communication simplifiée',
      description: 'Restez connecté avec enseignants et parents.',
    },
  ];

  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-3 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full bg-[#FFAA27]/10 px-4 py-1 text-sm font-medium text-[#FFAA27]">
            Découvrez Edu Dash
          </span>

          <h2 className="mt-6 w-full text-2xl font-bold tracking-tight text-gray-900 lg:text-5xl">
            Une nouvelle façon de gérer votre école.
          </h2>

          {/* Subtitle hidden on mobile to give screenshot room */}
          <p className="mt-4 hidden text-lg leading-relaxed text-gray-600 md:block">
            Simple, moderne et pensée pour toute votre communauté éducative.
          </p>
        </div>

        {/* Dashboard Screenshot — near full-width on mobile */}
        <div className="relative mx-auto mt-8 max-w-6xl lg:mt-16">
          {/* Glow */}
          <div className="absolute -inset-6 hidden rounded-[40px] bg-[#FFAA27]/5 blur-3xl lg:block" />

          {/* Browser Frame */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.10)] lg:rounded-[32px] lg:shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            {/* Browser Top */}
            <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2.5 lg:px-6 lg:py-4">
              <div className="h-2.5 w-2.5 rounded-full bg-red-300 lg:h-3 lg:w-3" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-300 lg:h-3 lg:w-3" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-300 lg:h-3 lg:w-3" />

              <div className="ml-4 rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-500 lg:px-4 lg:text-xs">
                app.edudash.ma
              </div>
            </div>

            {/* Screenshot */}
            <img
              src={dashboardPreview}
              alt="Edu Dash Dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white px-5 py-4 transition-all duration-300 hover:border-[#FFAA27]/30 hover:shadow-md"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#FFAA27]/10 text-[#FFAA27] transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA — text hidden on mobile */}
        <div className="mt-10 text-center lg:mt-16">
          <p className="mx-auto hidden max-w-2xl text-gray-600 md:block">
            Découvrez comment Edu Dash peut transformer la gestion
            de votre établissement et renforcer la collaboration
            entre les équipes pédagogiques, les élèves et les familles.
          </p>

          <div className="mt-0 flex flex-col justify-center gap-4 sm:flex-row md:mt-8">
            <button>
              <a
                href="https://wa.me/212765232205?text=Bonjour%20Edu%20Dash,%20je%20souhaite%20demander%20une%20d%C3%A9monstration."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl text-white bg-green-500 px-6 py-3 font-medium transition hover:bg-green-600 "
              >
                <FaWhatsapp className="h-5 w-5" />
                Demander une démo WhatsApp
              </a>
            </button>

            <button
              onClick={() => setShowDemoModal(true)}
              className="rounded-xl border border-gray-200 px-7 py-3 font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50">
              En savoir plus
            </button>
          </div>
        </div>
      </div>

{showDemoModal && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
    
    <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl sm:rounded-[32px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

      {/* Close */}
      <button
        onClick={() => setShowDemoModal(false)}
        className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 rounded-xl p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Layout */}
<div className="grid grid-cols-1 lg:grid-cols-2">

  {/* LEFT CONTENT (always visible) */}
  <div className="p-6 sm:p-8 lg:p-12">

    <div className="inline-flex rounded-full bg-[#FFAA27]/10 px-4 py-1 text-xs sm:text-sm font-medium text-[#FFAA27]">
      Démonstration Edu Dash
    </div>

    <h3 className="mt-4 sm:mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
      Planifions une démonstration
    </h3>

    <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-gray-600">
      Vous souhaitez découvrir Edu Dash en détail ?
      Contactez-nous afin d'organiser une démonstration personnalisée adaptée à votre établissement.
    </p>

    <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">

      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-3 sm:p-4">
        <p className="text-xs sm:text-sm text-gray-500">Email</p>
        <p className="font-semibold text-gray-900 text-sm sm:text-base">
          contact@edudash.ma
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-3 sm:p-4">
        <p className="text-xs sm:text-sm text-gray-500">Téléphone</p>
        <p className="font-semibold text-gray-900 text-sm sm:text-base">
          +212 765 23 22 05
        </p>
      </div>

    </div>

    <button
      onClick={() => setShowDemoModal(false)}
      className="mt-6 sm:mt-8 w-full sm:w-auto rounded-xl border border-gray-200 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
    >
      Fermer
    </button>

  </div>

  {/* RIGHT SIDE (DESKTOP ONLY) */}
  <div className="hidden lg:flex items-center justify-center bg-gray-50 p-12">

    <div className="w-full max-w-sm">

      <a
        href={businessCardImage}
        download="Carte-de-visite-Edu-Dash.png"
        className="group block"
      >
        <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
          <img
            src={businessCardImage}
            alt="Carte de visite Edu Dash"
            className="w-full transition duration-700 group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#FFAA27] px-5 py-3 font-medium text-white transition group-hover:bg-[#f39a08]">
          <Download className="h-5 w-5" />
          Télécharger la carte
        </div>
      </a>

      <p className="mt-4 text-center text-sm text-gray-500">
        Cliquez sur la carte pour la télécharger
        et retrouver facilement nos coordonnées.
      </p>

    </div>

  </div>

</div>
    </div>
  </div>
)}
    </section>
  );
}

export function WhoItsFor() {
  const [selected, setSelected] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", esc);
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const modules = [
    {
      title: "Vie scolaire",
      subtitle: "Le cœur de votre établissement.",
      icon: BookOpen,
      features: [
        "Inscriptions & pré-inscriptions en ligne",
        "Générateur intelligent d'emplois du temps",
        "Bulletins, relevés & fiches scolaires",
        "Fiche scolaire complète de l'élève",
      ],
      extras: [
        "Gestion des absences & retards",
        "Suivi complet du parcours de l'élève",
        "Gestion des niveaux & filières",
        "Dossiers administratifs centralisés",
        "Statistiques scolaires en temps réel",
      ],
    },
    {
      title: "Communication",
      subtitle: "Restez connecté.",
      icon: MessageSquare,
      features: [
        "Notifications ciblées par rôle",
        "Communication parents-école",
        "Demandes administratives",
        "Messagerie interne sécurisée",
      ],
      extras: [
        "Réunions numériques",
        "Alertes en temps réel",
        "Diffusion d'annonces",
      ],
    },
    {
      title: "Finance",
      subtitle: "Visibilité financière.",
      icon: Wallet,
      features: [
        "Facturation automatisée",
        "Suivi des paiements",
        "Soldes parents",
        "Tableaux de bord financiers",
      ],
      extras: [
        "Gestion dépenses & revenus",
        "Exports PDF",
        "Historique transactions",
        "Analyses financières",
      ],
    },
    {
      title: "Pédagogie",
      subtitle: "Pour la réussite.",
      icon: MonitorSmartphone,
      features: [
        "Notes & évaluations",
        "Cahier de textes",
        "Compétences & badges",
        "Suivi des performances",
      ],
      extras: [
        "Devoirs en ligne",
        "Analyse des résultats",
        "Ressources pédagogiques",
      ],
    },
    {
      title: "Services",
      subtitle: "Au-delà de la classe.",
      icon: Briefcase,
      features: [
        "Transport scolaire",
        "Cantine",
        "Activités parascolaires",
        "Sorties scolaires",
      ],
      extras: [
        "Bibliothèque",
        "Ressources scolaires",
      ],
    },
    {
      title: "Administration",
      subtitle: "Pilotez sereinement.",
      icon: ShieldCheck,
      features: [
        "Rôles & permissions",
        "KPI décisionnels",
        "Historique actions",
        "Archivage annuel",
      ],
      extras: [
        "Gestion du personnel",
        "Contrôle d'accès",
        "Rapports stratégiques",
        "Multi-établissements",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <span className="inline-flex rounded-full bg-[#FFAA27]/10 px-4 py-1 text-sm font-medium text-[#FFAA27]">
            Tout-en-un
          </span>
          <h2 className="mt-6 text-3xl lg:text-5xl font-bold">
            Tout ce dont votre établissement a besoin.
          </h2>
          <p className="mt-5 text-gray-600">
            Une plateforme unique regroupant tous les outils indispensables.
          </p>
        </div>

        {/* Mobile: accordion */}
        <div className="flex flex-col gap-3 md:hidden">
          {modules.map((module, idx) => {
            const Icon = module.icon;
            const isOpen = openIndex === idx;
            return (
              <div key={module.title} className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#FFAA27]/10 text-[#FFAA27]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-base font-semibold text-gray-900">{module.title}</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 flex-shrink-0 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="border-t border-gray-100 px-5 py-4">
                    <p className="mb-3 text-xs text-gray-400">{module.subtitle}</p>
                    <div className="space-y-2">
                      {[...module.features, ...module.extras].map((f) => (
                        <div key={f} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFAA27]" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop: original grid + modal */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <div key={module.title}
                className="group rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFAA27]/20 hover:shadow-xl">

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#FFAA27]/10 text-[#FFAA27]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                    <p className="text-xs text-gray-400">{module.subtitle}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  {module.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFAA27]" />
                      {f}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelected(module)}
                  className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[#FFAA27] transition hover:gap-2.5">
                  +{module.extras.length} fonctionnalités
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-xl w-full p-8 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">{selected.title}</h3>
              <button onClick={() => setSelected(null)}>
                <X />
              </button>
            </div>

            <p className="mt-2 text-gray-600">{selected.subtitle}</p>

            <div className="mt-6 space-y-3">
              {selected.extras.map((f) => (
                <div key={f} className="border rounded-2xl p-4">
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export function ComparisonSection() {
  const others = [
    'Interfaces complexes et anciennes',
    'Outils multiples et dispersés',
    'Communication difficile',
    'Manque de visibilité globale',
    'Formation longue nécessaire',
    'Expérience identique pour tous',
  ];

  const eduDash = [
    'Interface moderne et intuitive',
    'Une seule plateforme pour tout gérer',
    'Communication simple et directe',
    'Tableaux de bord en temps réel',
    'Prise en main rapide',
    'Expérience adaptée à chaque rôle',
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-[-100px] h-[300px] w-[300px] rounded-full bg-[#FFAA27]/10 blur-3xl" />
        <div className="absolute right-[-120px] bottom-0 h-[320px] w-[320px] rounded-full bg-[#FFAA27]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-5xl">EDU Dash vs les solutions traditionnelles</h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 lg:text-lg">
            Arrêtez les systèmes compliqués. Passez à une gestion moderne, simple et efficace.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          <div className="group relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-xl lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <XCircle className="h-7 w-7 text-gray-400" />
              <h3 className="text-xl font-semibold text-gray-800">Autres solutions</h3>
            </div>

            <ul className="space-y-4">
              {others.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <XCircle className="mt-1 h-5 w-5 text-gray-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative rounded-3xl border-2 border-[#FFAA27] bg-white p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl lg:p-8">
            <span className="absolute -top-4 left-6 rounded-full bg-[#FFAA27] px-4 py-1 text-xs font-semibold text-white shadow">
              Recommandé
            </span>

            <div className="mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-7 w-7 text-[#FFAA27]" />
              <h3 className="text-xl font-semibold text-gray-900">EDU Dash</h3>
            </div>

            <ul className="space-y-4">
              {eduDash.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#FFAA27]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFAA27]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>

        <div className="mt-12 text-center lg:mt-16">
          <p className="mx-auto max-w-2xl text-base font-medium text-gray-800 lg:text-lg">
            Avec EDU Dash, vous ne changez pas seulement de logiciel — vous améliorez toute l'organisation de votre école.
          </p>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  const items = [
    {
      icon: <Shield className="h-7 w-7 text-[#FFAA27]" />,
      title: 'Sécurité totale de vos données',
      desc: 'Vos données sont protégées et isolées. Chaque établissement dispose d’un espace sécurisé, avec des accès strictement contrôlés.',
    },
    {
      icon: <Globe2 className="h-7 w-7 text-[#FFAA27]" />,
      title: 'Une plateforme fiable au quotidien',
      desc: 'Un système stable et performant, conçu pour fonctionner sans interruption et accompagner votre école sur le long terme.',
    },
    {
      icon: <MessageCircle className="h-7 w-7 text-[#FFAA27]" />,
      title: 'Un accompagnement réel',
      desc: 'Nous vous accompagnons à chaque étape : mise en place, formation et utilisation quotidienne. Vous n’êtes jamais seul.',
    },
  ];

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
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Badge */}
<div className="mb-6 flex justify-center">
  
  {/* Mobile version */}
  <span className="sm:hidden inline-flex rounded-full bg-[#FFAA27]/10 px-4 py-2 text-xs font-medium text-[#FFAA27] text-center">
    Déjà adopté par des établissements
  </span>

  {/* Desktop version (unchanged) */}
  <span className="hidden sm:inline-flex rounded-full bg-[#FFAA27]/10 px-4 py-1 text-sm font-medium text-[#FFAA27] text-center">
    Déjà adopté par des établissements qui nous font confiance
  </span>

</div>

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-4xl dark:text-gray-100">Gérez votre école en toute confiance</h2>
          <p className="text-sm text-gray-600 lg:text-lg dark:text-gray-300">
            EDU Dash vous offre une solution stable, sécurisée et pensée pour durer, avec un accompagnement à chaque étape.
          </p>
        </div>

        {/* Cards layout */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-start space-y-4 rounded-2xl bg-white p-8 shadow-md transition-all duration-500 hover:shadow-xl dark:bg-gray-800 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFAA27]/10 text-[#FFAA27] transition-all duration-300 group-hover:bg-[#FFAA27]/20">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.desc}</p>

              {/* Subtle hover accent line */}
              <span className="mt-2 block h-1 w-16 rounded-full bg-[#FFAA27]/30 transition-all duration-500 group-hover:w-full"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-[-80px] h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#FFAA27]/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-[-80px] h-[250px] w-[250px] rounded-full bg-[#FFAA27]/5 blur-3xl" />
    </section>
  );
}

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
    <section ref={sectionRef} id="statistiques" className="relative overflow-hidden border-t border-gray-100 bg-white/80 py-16 backdrop-blur-sm">
      {/* Side glows */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-72 bg-gradient-to-r from-[#FFAA27]/10 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-72 bg-gradient-to-l from-[#FFAA27]/10 to-transparent" /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Des chiffres qui parlent d’eux-mêmes</h2>
          <p className="mx-auto max-w-2xl text-gray-600 lg:text-lg">
            Des statistiques réelles qui reflètent la confiance des établissements envers <span className="font-semibold">Edu Dash</span>.
          </p>
        </div>

        {/* Stats grid */}
        <div className="relative mt-16">
          {/* vertical separators for desktop */}
          <div className="absolute inset-y-8 left-1/4 hidden w-px bg-gray-200 lg:block" />
          <div className="absolute inset-y-8 left-2/4 hidden w-px bg-gray-200 lg:block" />
          <div className="absolute inset-y-8 left-3/4 hidden w-px bg-gray-200 lg:block" />

          <div className="grid gap-14 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`group relative flex flex-col items-center transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} `}
                style={{ transitionDelay: `${i * 180}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFAA27]/10 text-[#FFAA27] transition-transform duration-500 group-hover:scale-110">
                  {s.icon}
                </div>

                {/* Number */}
                <div className="text-4xl font-extrabold tracking-tight text-gray-900">
                  {visible ? <CountUp end={s.end} duration={2.8} suffix={s.suffix} /> : <>0{s.suffix}</>}
                </div>

                {/* Label */}
                <p className="mt-3 max-w-[160px] text-sm font-medium text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: 'M. Youssef El Kafi',
    role: 'Directeur',
    school: 'École privée · Casablanca',
    quote: "EDU Dash a transformé notre manière de gérer l'établissement. Communication, finances, suivi… tout est devenu plus simple !",
    initials: 'YK',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'M. Youssef',
    role: 'Enseignant Principal',
    school: 'Lycée privé · Rabat',
    quote: "Un gain de temps incroyable ! Je peux gérer mes notes, absences et exercices sans stress depuis une seule plateforme.",
    initials: 'YO',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Mme Sara',
    role: "Parent d'Élève",
    school: 'École primaire · Marrakech',
    quote: "Je reçois les notes et les notifications en temps réel. C'est rassurant de voir la progression de mon enfant si facilement.",
    initials: 'SA',
    color: 'bg-green-100 text-green-700',
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, s) => (
          <span key={s} className="text-[#FFAA27] text-sm">★</span>
        ))}
      </div>

      <p className="flex-1 text-base leading-relaxed text-gray-700">"{t.quote}"</p>

      <div className="my-6 h-px bg-gray-100" />

      <div className="flex items-center gap-3">
        <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold ${t.color}`}>
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 text-left">{t.name}</p>
          <p className="text-xs text-gray-400 text-left">{t.role}</p>
          <p className="text-xs font-medium text-[#FFAA27]">{t.school}</p>
        </div>
      </div>
    </div>
  );
}

export function Témoignages() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="témoignages" className="relative overflow-hidden bg-white py-16 lg:py-28 dark:bg-gray-900">
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-4xl dark:text-gray-100">Témoignages & Avis</h2>
        <p className="mx-auto max-w-2xl text-sm text-gray-600 lg:text-lg dark:text-gray-300">
          Découvrez ce que disent les utilisateurs d'<strong className="dark:text-gray-100">EDU Dash</strong>.
        </p>

        {/* Mobile: carousel, one card at a time */}
        <div className="mt-10 md:hidden">
          <TestimonialCard t={testimonials[index]} />

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Témoignage précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-50"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Aller au témoignage ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-all ${i === index ? 'w-6 bg-[#FFAA27]' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Témoignage suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-50"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="mt-16 hidden gap-8 md:grid md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}


export function ContactSection() {
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
            Une question, un partenariat, ou un besoin d'assistance ? N'hésitez pas à nous écrire nous serons ravis de vous répondre.
          </p>
        </div>

        {/* Mobile: WhatsApp first, then email, then address */}
        <div className="flex flex-col gap-4 md:hidden">
          <a
            href="https://wa.me/212765232205?text=Bonjour%20Edu%20Dash,%20je%20souhaite%20demander%20une%20d%C3%A9monstration."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-green-200 bg-green-50 px-5 py-5 transition-all duration-300 hover:border-green-300 hover:bg-green-100"
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-green-500 text-white shadow-md">
              <FaWhatsapp className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-700">Réponse rapide</p>
              <h4 className="text-lg font-bold text-gray-900">Demander une démo WhatsApp</h4>
              <p className="text-sm text-gray-600">Échangez directement avec notre équipe</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4">
            <div className="rounded-full bg-[#FFAA27]/10 p-3 text-[#FFAA27]">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">E-mail</p>
              <p className="text-gray-600">contact@edudash.ma</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4">
            <div className="rounded-full bg-[#FFAA27]/10 p-3 text-[#FFAA27]">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Adresse</p>
              <p className="text-gray-600">Casablanca, Maroc</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4">
            <div className="rounded-full bg-[#FFAA27]/10 p-3 text-[#FFAA27]">
              <Phone size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Téléphone</p>
              <p className="text-gray-600">+212 765 23 22 05</p>
            </div>
          </div>

          {/* Business card download */}
          <a
            href={businessCardImage}
            download="Carte-de-visite-Edu-Dash.png"
            className="group block"
          >
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-500">
              <img
                src={businessCardImage}
                alt="Carte de visite Edu Dash"
                className="w-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-white/80">Cliquez pour télécharger</p>
                  <div className="rounded-full bg-white/20 p-2 backdrop-blur-md">
                    <Download className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop: original row layout */}
        <div className="hidden flex-col gap-10 md:flex md:flex-row md:gap-16">
          <div className="p-8 lg:flex-1">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Informations de contact</h3>

            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-[#FFAA27]/10 p-3 text-[#FFAA27]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-gray-600">contact@edudash.ma</p>
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
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-gray-600">+212 765 23 22 05</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="https://wa.me/212765232205?text=Bonjour%20Edu%20Dash,%20je%20souhaite%20demander%20une%20d%C3%A9monstration."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-green-200 bg-green-50 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-green-100"
              >
                <div className="flex h-14 w-14 px-3 items-center justify-center rounded-xl bg-green-500 text-white shadow-md">
                  <FaWhatsapp className="h-8 w-8" />
                </div>

                <div>
                  <p className="text-sm font-medium text-green-700">Réponse rapide</p>
                  <h4 className="text-xl font-bold text-gray-900">Demander une démo WhatsApp</h4>
                  <p className="text-sm text-gray-600">Échangez directement avec notre équipe</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex-[1.3] flex items-center justify-center px-4 lg:p-8">
            <div className="w-full max-w-lg">
              <a
                href={businessCardImage}
                download="Carte-de-visite-Edu-Dash.png"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                  <img
                    src={businessCardImage}
                    alt="Carte de visite Edu Dash"
                    className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/80">Cliquez pour télécharger</p>
                      </div>

                      <div className="rounded-full bg-white/20 p-3 backdrop-blur-md transition group-hover:bg-[#FFAA27]">
                        <Download className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <p className="mt-5 text-center text-sm text-gray-500">
                Téléchargez notre carte de visite pour retrouver facilement nos coordonnées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative hidden bg-white py-20 lg:block dark:bg-gray-900">
      <div className="mx-auto max-w-5xl space-y-8 px-6 text-center">
        <h2 className="text-3xl leading-tight font-bold text-gray-900 lg:text-4xl dark:text-gray-100">
          Prêt à moderniser la gestion de votre école ?
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-gray-700 lg:text-lg dark:text-gray-300">
          Essayez EDU Dash et transformez la gestion de votre école dès aujourd’hui.
        </p>

        <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
          <a
            href="https://wa.me/212765232205?text=Bonjour%20Edu%20Dash,%20je%20souhaite%20demander%20une%20d%C3%A9monstration."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-green-500 px-6 py-3 font-medium text-green-600 transition hover:bg-green-50"
          >
            <FaWhatsapp className="h-5 w-5" />
            Demander une démo WhatsApp
          </a>
          <a
            href="#contact"
            className="rounded-xl border-2 border-white bg-gray-50 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gray-900 hover:text-white dark:bg-gray-800 dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (key) => setOpenSection((cur) => (cur === key ? null : key));

  return (
    <footer className="border-t border-gray-200 bg-white py-12 text-black lg:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Logo & Description — always visible */}
        <div className="mb-8 md:mb-0">
          <img src={logo} alt="EduDash Logo" className="mb-4 h-12" />
          <p className="max-w-sm text-sm leading-relaxed text-gray-600">
            EduDash est une plateforme de gestion scolaire intuitive et complète pour moderniser la vie éducative.
          </p>
        </div>

        {/* Mobile: accordion sections */}
        <div className="flex flex-col md:hidden">
          {/* Liens utiles */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggle('liens')}
              className="flex w-full items-center justify-between py-4 text-left text-base font-semibold"
            >
              Liens utiles
              <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${openSection === 'liens' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'liens' && (
              <ul className="space-y-2 pb-4 text-sm">
                <li><a href="#accueil" className="transition-colors hover:text-[#FFAA27]">Accueil</a></li>
                <li><a href="#apropos" className="transition-colors hover:text-[#FFAA27]">À propos</a></li>
                <li><a href="#fonctionnalites" className="transition-colors hover:text-[#FFAA27]">Fonctionnalités</a></li>
                <li><a href="/soon" className="transition-colors hover:text-[#FFAA27]">Démo</a></li>
                <li><a href="#contact" className="transition-colors hover:text-[#FFAA27]">Contact</a></li>
              </ul>
            )}
          </div>

          {/* Contact */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggle('contact')}
              className="flex w-full items-center justify-between py-4 text-left text-base font-semibold"
            >
              Contact
              <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${openSection === 'contact' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'contact' && (
              <ul className="space-y-2 pb-4 text-sm text-gray-600">
                <li>
                  Email :{' '}
                  <a href="mailto:contact@edudash.com" className="transition-colors hover:text-[#FFAA27]">
                    contact@edudash.com
                  </a>
                </li>
                <li className="flex gap-1">
                  <p>Localisation :</p>
                  <p className="transition-colors hover:text-[#FFAA27]">Casablanca, Maroc</p>
                </li>
              </ul>
            )}
          </div>

          {/* Newsletter */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggle('newsletter')}
              className="flex w-full items-center justify-between py-4 text-left text-base font-semibold"
            >
              Newsletter
              <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${openSection === 'newsletter' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'newsletter' && (
              <div className="pb-4">
                <form className="flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 min-w-0 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 bg-[#FFAA27] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500"
                  >
                    S'inscrire
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Desktop: original 3-column layout */}
        <div className="hidden md:flex md:gap-16">
          <div className="flex-1">
            <h3 className="mb-4 text-lg font-semibold">Liens utiles</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#accueil" className="transition-colors duration-300 hover:text-[#FFAA27]">Accueil</a></li>
              <li><a href="#apropos" className="transition-colors duration-300 hover:text-[#FFAA27]">À propos</a></li>
              <li><a href="#fonctionnalites" className="transition-colors duration-300 hover:text-[#FFAA27]">Fonctionnalités</a></li>
              <li><a href="/soon" className="transition-colors duration-300 hover:text-[#FFAA27]">Démo</a></li>
              <li><a href="#contact" className="transition-colors duration-300 hover:text-[#FFAA27]">Contact</a></li>
            </ul>
          </div>

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
            <form className="mt-2 flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 min-w-0 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-[#FFAA27] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-100 pt-6 text-center text-sm text-gray-500 lg:mt-12">
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
      <StatsSection />
      <PourquoiEduDash />
      <HowItWorksSection />
      <ProductPreview />
      <WhoItsFor />
      <ComparisonSection />
      <TrustSection />
      {/* <StatistiquesHome /> */}
      <Témoignages />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
