"use client";

import { Sparkles, Calendar, Heart, ShieldCheck } from "lucide-react";
import GsapReveal from "./GsapReveal";

export default function Services() {
  const categories = [
    {
      title: "Rejuvenescimento & Sustentação",
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      description: "Procedimentos avançados focados em combater a flacidez facial e restaurar a sustentação natural dos tecidos.",
      services: [
        { name: "Toxina Botulínica (Botox)", desc: "Suavização de rugas dinâmicas (testa, glabela e pés de galinha) com preservação de expressões naturais." },
        { name: "Bioestimuladores de Colágeno", desc: "Tratamento de flacidez profundo com Sculptra e Radiesse para reestruturação cutânea." },
        { name: "Lifting com Fios de PDO", desc: "Aplicação de fios espiculados para efeito de tração sutil e sustentação imediata dos tecidos faciais." }
      ]
    },
    {
      title: "Preenchimentos & Contorno",
      icon: <Heart className="w-6 h-6 text-gold-500" />,
      description: "Harmonização de traços e volumização com ácido hialurônico de alta qualidade para simetria e elegância.",
      services: [
        { name: "Preenchimento Labial Premium", desc: "Refinamento de contorno, hidratação profunda e volumização labial com naturalidade absoluta." },
        { name: "Preenchimento de Olheiras & Malar", desc: "Suavização do olhar cansado e devolução de volume nas maçãs do rosto para sustentação facial." },
        { name: "Lipo de Papada Enzimática", desc: "Redução enzimática localizada sob o queixo para delinear o contorno da mandíbula." }
      ]
    },
    {
      title: "Pele & Estética Clínica",
      icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
      description: "Protocolos magistrais focados em renovação celular, textura, manchas e saúde fisiológica da pele.",
      services: [
        { name: "Protocolo Melasma Control", desc: "Estratégia integrada de clareamento facial com peelings e ativos inibidores de melanina." },
        { name: "Microagulhamento & Drug Delivery", desc: "Indução de colágeno associada à infusão direta de vitaminas e fatores de crescimento estéreis." },
        { name: "Peelings Químicos de Renovação", desc: "Tratamento de acne, controle de oleosidade e uniformização profunda da textura da pele." }
      ]
    }
  ];

  return (
    <section id="servicos" className="pt-24 pb-36 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-luxury-black mb-6 leading-tight">
            Nossas <span className="font-script text-gold-600 normal-case text-4xl sm:text-5xl md:text-6xl block sm:inline mt-1 sm:mt-0 font-light">especialidades</span>
          </h2>
          <p className="text-sm sm:text-base text-nude-700 leading-relaxed">
            Oferecemos uma gama completa de tratamentos estéticos faciais inovadores, 
            utilizando rigor clínico e marcas premium do mercado para realçar sua melhor versão.
          </p>
        </div>

        {/* Services Grid */}
        <GsapReveal type="stagger-items" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {categories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col bg-nude-50 border border-gold-200/10 rounded-sm hover:border-gold-300/30 transition-all duration-300 p-8 shadow-sm hover:shadow-md"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gold-200/20">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gold-200/30">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-luxury-black">{category.title}</h3>
                  <span className="text-[10px] tracking-wider uppercase font-light text-gold-600 block mt-0.5">Dra. Tatiane Lambert</span>
                </div>
              </div>

              <p className="text-xs text-nude-700 mb-8 leading-relaxed">
                {category.description}
              </p>

              {/* Service List */}
              <div className="space-y-6 flex-1 mb-8">
                {category.services.map((service) => (
                  <div key={service.name} className="group/item">
                    <h4 className="text-sm font-semibold text-luxury-black group-hover/item:text-gold-600 transition-colors duration-200">
                      {service.name}
                    </h4>
                    <p className="text-xs text-nude-600 mt-1 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/5564992134343?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+os+procedimentos+de+${encodeURIComponent(category.title)}%21`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3.5 border border-gold-400 bg-white hover:bg-gold-500 hover:text-white text-xs font-semibold uppercase tracking-widest text-gold-700 transition-all duration-300 rounded-sm"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Consultar Agenda
              </a>

            </div>
          ))}
        </GsapReveal>

      </div>
      
      {/* Soft gradient transition to the dark About section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-luxury-black pointer-events-none z-10" />
    </section>
  );
}
