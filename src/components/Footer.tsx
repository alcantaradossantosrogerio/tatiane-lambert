"use client";

import { MapPin, Phone, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black text-white pt-16 pb-8 border-t border-gold-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-nude-900/40">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-widest text-gold-300 block">
                DRA. TATIANE LAMBERT
              </span>
              <span className="text-[9px] tracking-[0.25em] font-light uppercase text-gold-500 block mt-1">
                Farmacêutica Esteta
              </span>
              <p className="text-xs text-nude-300 mt-4 leading-relaxed font-light max-w-sm">
                Proporcionando procedimentos estéticos avançados e um cuidado facial sob medida, 
                aliando rigor científico e sofisticação para realçar sua beleza natural.
              </p>
            </div>
            
            {/* CNPJ Info */}
            <div className="text-[10px] text-nude-400 mt-6 font-light">
              Dra. Tatiane Lambert <br />
              Farmacêutica Esteta
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h3 className="font-serif text-base font-semibold text-gold-200 mb-4">Navegação</h3>
            <ul className="space-y-2.5 text-xs text-nude-300 font-light">
              <li>
                <a href="#inicio" className="hover:text-gold-400 transition-colors duration-200">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold-400 transition-colors duration-200">Nossos Serviços</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-gold-400 transition-colors duration-200">Sobre</a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-gold-400 transition-colors duration-200">Antes & Depois</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-gold-400 transition-colors duration-200">Onde Estamos</a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-gold-400 transition-colors duration-200">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Socials & Contato Column */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-base font-semibold text-gold-200 mb-4">Redes Sociais & Contato</h3>
            <p className="text-xs text-nude-300 font-light leading-relaxed mb-4">
              Acompanhe as transformações diárias e dicas de beleza diretamente em nossas redes sociais oficiais.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="https://www.instagram.com/tatiane.lambert/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-nude-300 hover:text-gold-400 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold-400"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>@tatiane.lambert</span>
              </a>
              <a
                href="https://wa.me/5564992134343"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-nude-300 hover:text-gold-400 transition-colors duration-200"
              >
                <Phone size={16} className="text-gold-400" />
                <span>(64) 99213-4343 (Consultório)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copy and tech credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-nude-400 font-light gap-4">
          <div className="flex items-center gap-1">
            <span>&copy; {currentYear} Dra. Tatiane Lambert. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <span>Desenvolvido com</span>
            <Heart size={10} className="text-gold-500 fill-gold-500" />
            <span>para</span>
            <a href="https://tatianelambert.com.br" className="underline hover:text-gold-400">tatianelambert.com.br</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
