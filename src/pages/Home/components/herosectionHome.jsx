import ExamsBro from '../../../utils/imgs/Exams-bro.svg';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function HerosecHome() {

    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animate only once
      easing: "ease-in-out", // smooth effect
    });
  }, []);

  return (
<section  className="relative z-10 overflow-hidden bg-gradient-to-b from-white to-primary-light/30" id='accueil'>
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 lg:py-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* Left content */}
    <div data-aos="fade-right" className="space-y-8">


      <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-bold tracking-tight text-neutral-dark leading-tight">
        Gérez votre école <br />
        <span className="bg-clip-text text-neutral-dark bg-gradient-to-r from-primary-dark to-orange-500">simplement et efficacement</span>
      </h1>

      <p className="text-md md:text-lg text-neutral-gray max-w-2xl leading-relaxed">
        EDU Dash centralise la communication, le suivi administratif et financier, les bulletins et les statistiques clés.
        Une solution unique pour une école plus connectée.
      </p>
      
 
       <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <a href="/login">
          <button className="px-8 py-4 md:px-6 md:py-3 rounded-xl bg-[#FFAA27] text-white font-medium hover:bg-primary-dark/90 transition-all shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-orange-200 flex items-center justify-center">
            Se Connecter
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293z" clipRule="evenodd" />
            </svg>
          </button>
        </a>



        <a href="/soon">
          <button className="px-8 py-4 md:px-6 md:py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-all lg:flex items-center justify-center hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Voir la démo
          </button>       
        </a>

      </div>
    {/* Ecoles ect 500 section */}
      {/* <div className="flex items-center  space-x-4">
        <div className="flex -space-x-2">
          <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/12.jpg" alt="User"/>
          <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User"/>
          <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/45.jpg" alt="User"/>
          <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/76.jpg" alt="User"/>
        </div>
        <p className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">500+ écoles</span> nous font déjà confiance
        </p>
      </div> */}
    </div>

    {/* Right image */}
    <div data-aos="fade-left" className="relative hidden lg:flex ">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden flex items-center justify-center">
        {/* Illustration alone (no bg or decorative boxes) */}
        <img src={ExamsBro} alt="Illustration examens EDU Dash" className="object-contain w-[95%] h-full" />
      </div>
    </div>

  </div>

  {/* Trusted section */}
  <div className="relative py-8 px-6 md:px-12 lg:px-24 bg-white/70 backdrop-blur-sm border-t border-gray-100">
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-sm uppercase tracking-wider text-gray-500 font-medium mb-8">
        Déjà adopté par des établissements reconnus
      </p>

    </div>
  </div>
</section>

  );
}

