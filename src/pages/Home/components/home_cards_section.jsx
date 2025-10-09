import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function HomeCards() {
        useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true, // animate only once
          easing: "ease-in-out", // smooth effect
        });
      }, []);
  return (
        <section data-aos="fade-up"  className="" id="apropos">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 lg:py-8 py-20">
            {/* Header (now full width) */}
            {/* <div className="mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Pourquoi choisir EDU Dash ?</h2>
                <p className="text-gray-600">EDU Dash est conçu pour simplifier la gestion scolaire avec des outils intuitifs et une interface conviviale.</p>
            </div> */}

            {/* Cards grid: 2 cols on md, 4 cols on lg */}
            <div className="grid grid-cols-1 hover:cursor-pointer sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                <div
                    className="bg-white p-6 rounded-lg shadow transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg border-l-4 border-orange-400/80 hover:border-l-8"
                    style={{ animation: 'cardIn 440ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '0s' }}
                >
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Gestion Administrative</h3>
                    <p className="text-gray-600">Centralisez les informations des étudiants, des enseignants et du personnel pour une gestion efficace.</p>
                </div>
                {/* Card 2 */}
                <div
                    className="bg-white p-6 rounded-lg shadow transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg border-l-4 border-orange-300/70 hover:border-l-8"
                    style={{ animation: 'cardIn 440ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '60ms' }}
                >
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Communication Simplifiée</h3>
                    <p className="text-gray-600">Facilitez la communication entre les enseignants, les étudiants et les parents grâce à des outils intégrés.</p>
                </div>
                {/* Card 3 */}
                <div
                    className="bg-white p-6 rounded-lg shadow transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg border-l-4 border-orange-300/70 hover:border-l-8"
                    style={{ animation: 'cardIn 440ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '120ms' }}
                >
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Suivi Financier</h3>
                    <p className="text-gray-600">Gérez les paiements, les factures et les budgets scolaires en toute simplicité.</p>
                </div>
                {/* Card 4 */}
                <div
                    className="bg-white p-6 rounded-lg shadow transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg border-l-4 border-orange-300/70 hover:border-l-8"
                    style={{ animation: 'cardIn 440ms cubic-bezier(0.4,0,0.2,1) both', animationDelay: '180ms' }}
                >
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Bulletins et Rapports</h3>
                    <p className="text-gray-600">Générez des bulletins et des rapports détaillés pour suivre les performances académiques.</p>
                </div>
    </div>
        </div>
        </section>

    );
}

