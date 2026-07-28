"use client";

import { MapPin, Phone, Clock, Compass } from "lucide-react";

export default function Location() {
  return (
    <section id="localizacao" className="pt-24 pb-36 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-luxury-black mb-6 leading-tight">
            Visite nosso <span className="font-script text-gold-600 normal-case text-4xl sm:text-5xl md:text-6xl block sm:inline mt-1 sm:mt-0 font-light">espaço</span>
          </h2>
          <p className="text-sm text-nude-700 leading-relaxed">
            Estamos prontos para receber você em um ambiente reservado e acolhedor, planejado para o seu conforto 
            e bem-estar total no Parque dos Buritis, em Rio Verde - GO.
          </p>
        </div>

        {/* Location Details and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Contact details and info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              
              {/* Address card */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold-200 bg-gold-50/50 rounded-full flex items-center justify-center shrink-0 text-gold-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-luxury-black mb-1">Nosso Endereço</h3>
                  <p className="text-xs sm:text-sm text-nude-800 leading-relaxed font-light">
                    R. Rio Grande do Sul, 113 <br />
                    Parque dos Buritis <br />
                    Rio Verde - GO, CEP: 75907-360
                  </p>
                </div>
              </div>

              {/* Operating hours card */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold-200 bg-gold-50/50 rounded-full flex items-center justify-center shrink-0 text-gold-600">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-luxury-black mb-1">Horário de Funcionamento</h3>
                  <p className="text-xs sm:text-sm text-nude-800 leading-relaxed font-light">
                    Segunda a Sexta-feira: 08:00 às 18:00 <br />
                    Sábados: 08:00 às 13:00 <br />
                    Atendimento com hora marcada
                  </p>
                </div>
              </div>

              {/* Contact info card */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold-200 bg-gold-50/50 rounded-full flex items-center justify-center shrink-0 text-gold-600">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-luxury-black mb-1">Contato e Agendamentos</h3>
                  <p className="text-xs sm:text-sm text-nude-800 leading-relaxed font-light">
                    WhatsApp: (64) 99213-4343 <br />
                    Instagram: @tatiane.lambert
                  </p>
                </div>
              </div>

            </div>

            {/* Extra trust details */}
            <div className="p-6 bg-nude-50/70 border border-gold-200/20 rounded-sm">
              <h4 className="font-serif text-base font-semibold text-luxury-black mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-gold-600" />
                Facilidades de Acesso
              </h4>
              <ul className="text-xs text-nude-700 space-y-2 font-light list-disc pl-4">
                <li>Localização segura e tranquila em avenida de fácil acesso.</li>
                <li>Estacionamento fácil e gratuito diretamente em frente ao consultório.</li>
                <li>Ambiente climatizado, privativo e com acessibilidade.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Google Maps and Facade */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Map */}
              <div className="relative w-full h-[300px] sm:h-[380px] border border-gold-200/20 rounded-sm overflow-hidden bg-nude-50 shadow-md">
                <iframe
                  title="Google Maps - Consultório Dra. Tatiane Lambert"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.9238917830386!2d-50.9255474!3d-17.7943566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e4d2843dc0333%3A0x6bcfd30a597a9f7!2sR.%20Rio%20Grande%20do%20Sul%2C%20113%20-%20Pq.%20dos%20Buritis%2C%20Rio%20Verde%20-%20GO%2C%2075907-360!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Facade Image */}
              <div className="relative w-full h-[300px] sm:h-[380px] border border-gold-200/20 rounded-sm overflow-hidden bg-nude-50 shadow-md group">
                <img
                  src="/images/Fachada.png"
                  alt="Fachada do Consultório Dra. Tatiane Lambert"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400 block mb-1">
                      Espaço Físico
                    </span>
                    <p className="font-serif text-sm sm:text-base text-white font-medium">
                      Fachada do Consultório
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Soft gradient transition to the light beige FAQ section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-nude-100 pointer-events-none z-10" />
    </section>
  );
}
