import { useState } from 'react';
import logo from '../utils/imgs/logo.png';
export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full h-[80px] flex items-center px-4 md:px-8 bg-white sticky top-0 z-50">
            {/* Logo */}
            <div className="flex items-center w-[24%] min-w-[160px]">
                <a href="/"><img src={logo} className="h-18 md:h-20 lg:h-20 w-auto" alt="EduDash Logo" /></a>
                {/* Mobile: h-18, md: h-20, lg: h-20 (keep desktop size unchanged) */}
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex flex-1 justify-center gap-8 text-md">
                <a href="#accueil" className="text-gray-700 hover:text-[#ffa500] transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ffa500] after:transition-all after:duration-300 hover:after:w-full">Accueil</a>
                <a href="#apropos" className="text-gray-700 hover:text-[#ffa500] transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ffa500] after:transition-all after:duration-300 hover:after:w-full">À propos</a>
                <a href="#fonctionnalites" className="text-gray-700 hover:text-[#ffa500] transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ffa500] after:transition-all after:duration-300 hover:after:w-full">Fonctionnalités</a>
                <a href="#demo" className="text-gray-700 hover:text-[#ffa500] transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ffa500] after:transition-all after:duration-300 hover:after:w-full">Démo</a>
                <a href="#contact" className="text-gray-700 hover:text-[#ffa500] transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ffa500] after:transition-all after:duration-300 hover:after:w-full">Contact</a>
            </div>

            {/* CTA Button - Desktop */}
            {/* <div className="hidden md:flex items-center justify-end w-[20%] min-w-[120px]">
                <button className="bg-white text-[#ffa500] border border-[#ffa500] px-6 py-2 rounded-lg transition duration-200 font-semibold">Demander une démo</button>
            </div> */}

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center ml-auto">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-[#ffa500] focus:outline-none text-3xl"
                    aria-label="Ouvrir le menu"
                >
                    &#9776;
                </button>
            </div>

            {/* Mobile Menu Dropdown with animation */}
            {menuOpen && (
                <div className="absolute top-[80px] left-0 w-full bg-white shadow-lg md:hidden z-40 animate-slideDownFade">
                    <div className="flex flex-col items-center py-4 gap-4">
                        <a href="#accueil" className="text-gray-700 hover:text-[#ffa500] text-lg" onClick={() => setMenuOpen(false)}>Accueil</a>
                        <a href="#apropos" className="text-gray-700 hover:text-[#ffa500] text-lg" onClick={() => setMenuOpen(false)}>À propos</a>
                        <a href="#fonctionnalites" className="text-gray-700 hover:text-[#ffa500] text-lg" onClick={() => setMenuOpen(false)}>Fonctionnalités</a>
                        <a href="#demo" className="text-gray-700 hover:text-[#ffa500] text-lg" onClick={() => setMenuOpen(false)}>Démo</a>
                        <a href="#contact" className="text-gray-700 hover:text-[#ffa500] text-lg" onClick={() => setMenuOpen(false)}>Contact</a>
                        <button className="bg-[#ffa500] hover:bg-orange-700 text-white px-6 py-2 rounded-lg shadow transition duration-200 font-semibold mt-2" onClick={() => setMenuOpen(false)}> <a href="/login">Se Connecter</a></button>
                    </div>
                </div>
            )}
        </nav>
    );
};
