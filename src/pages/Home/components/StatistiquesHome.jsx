import { useEffect, useRef, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
function CountUp({ end = 0, duration = 2800, suffix = '', start = true }) {
    const [value, setValue] = useState(0);
    const rafRef = useRef(null);
    const startRef = useRef(null);

    useEffect(() => {
        if (!start) return; // wait until allowed to start
        const startTime = performance.now();
        startRef.current = startTime;

        const tick = (now) => {
            const elapsed = now - startRef.current;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out quad
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
        return () => cancelAnimationFrame(rafRef.current);
    }, [end, duration, start]);

    // format with thousands separator
    const formatted = new Intl.NumberFormat('en-US').format(value);
    return <>{formatted}{suffix}</>;
}

export function StatistiquesHome() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

        useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true, // animate only once
          easing: "ease-in-out", // smooth effect
        });
      }, []);


    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                });
            },
            { root: null, threshold: 0.25 }
        );
        obs.observe(node);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="bg-gradient-to-b from-white to-orange-50 py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Statistiques Clés</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Des données en temps réel pour une gestion scolaire éclairée.</p>
                </div>
                <div data-aos="fade-up"  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { key: 'students', end: 1600, suffix: '+', label: 'Étudiants Inscrits', icon: 'student' },
                        { key: 'teachers', end: 150, suffix: '+', label: 'Enseignants', icon: 'teacher' },
                        { key: 'satisfaction', end: 98, suffix: '%', label: 'Taux de Satisfaction', icon: 'smile' },
                        { key: 'schools', end: 25, suffix: '+', label: 'Écoles Utilisatrices', icon: 'school' },
                    ].map((s, i) => (
                        <div
                            key={s.key}
                            className={`bg-white p-6 rounded-lg shadow text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                        >
                            <div className="flex items-center justify-center mb-3">
                                {/* simple icons */}
                                {s.icon === 'student' && (
                                    <svg className="h-8 w-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                        <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
                                    </svg>
                                )}
                                {s.icon === 'teacher' && (
                                    <svg className="h-8 w-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                        <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a3 3 0 100-6 3 3 0 000 6z" />
                                    </svg>
                                )}
                                {s.icon === 'smile' && (
                                    <svg className="h-8 w-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-4.5 8a1.5 1.5 0 11.001-2.999A1.5 1.5 0 017.5 10zm9 0a1.5 1.5 0 11.001-2.999A1.5 1.5 0 0116.5 10zM12 18a5 5 0 004.33-2.5H7.67A5 5 0 0012 18z" />
                                    </svg>
                                )}
                                {s.icon === 'school' && (
                                    <svg className="h-8 w-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                        <path d="M12 3L1 9l11 6 9-4.909V17h2V9L12 3z" />
                                    </svg>
                                )}
                            </div>

                            <h3
                                className="text-3xl font-bold text-orange-400 mb-2"
                                style={{ animationDelay: `${i * 140}ms` }}
                            >
                                {visible ? (
                                    <CountUp start={visible} end={s.end} duration={2800} suffix={s.suffix} />
                                ) : (
                                    <span>0{s.suffix}</span>
                                )}
                            </h3>
                            <p className="text-gray-600">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

