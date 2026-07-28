"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Resultados", href: "#resultados" },
    { name: "Localização", href: "#localizacao" },
    { name: "Dúvidas", href: "#duvidas" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-nude-100/80 backdrop-blur-md shadow-sm border-b border-gold-200/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex flex-col items-center sm:items-start group">
            <span className={`font-serif text-xl sm:text-2xl font-semibold tracking-widest transition-colors duration-300 ${
              isScrolled ? "text-luxury-black group-hover:text-gold-600" : "text-white group-hover:text-gold-300"
            }`}>
              DRA. TATIANE LAMBERT
            </span>
            <span className={`text-[9px] tracking-[0.25em] font-light uppercase mt-0.5 transition-colors duration-300 ${
              isScrolled ? "text-gold-600" : "text-gold-400"
            }`}>
              Farmacêutica Esteta
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isScrolled 
                    ? "text-luxury-black/85 hover:text-gold-600" 
                    : "text-white/90 hover:text-gold-300"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5564992134343?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+a+Dra.+Tatiane+Lambert%21"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-5 py-2.5 border transition-all duration-300 rounded-sm text-xs font-semibold uppercase tracking-wider ${
                isScrolled
                  ? "border-gold-400 text-gold-700 hover:bg-gold-500 hover:text-white"
                  : "border-gold-300/40 text-gold-300 hover:bg-gold-500 hover:text-white"
              }`}
            >
              Agendar Horário
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none p-2 transition-colors duration-300 ${
                isScrolled ? "text-luxury-black hover:text-gold-600" : "text-white hover:text-gold-300"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-nude-100 border-b border-gold-200/20 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "top-full opacity-100 visible" : "-top-[400px] opacity-0 invisible"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium tracking-wide text-luxury-black/90 hover:text-gold-600 py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5564992134343?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+a+Dra.+Tatiane+Lambert%21"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center w-full py-3 bg-gold-500 text-white text-xs font-semibold uppercase tracking-widest hover:bg-gold-600 transition-colors duration-200 rounded-sm"
          >
            Agendar Horário
          </a>
        </div>
      </div>
    </nav>
  );
}
