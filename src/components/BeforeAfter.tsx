"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import GsapReveal from "./GsapReveal";

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const cases = [
    {
      title: "Harmonização Facial",
      category: "Preenchimento Avançado",
      image: "/images/resultados/736493876_18599656540027291_3319948686093090763_n.jpg",
      description: "Delineamento natural de contornos faciais, promovendo simetria, elegância e rejuvenescimento sutil.",
    },
    {
      title: "Tratamento de Melasma",
      category: "Pele & Estética Clínica",
      image: "/images/resultados/740827882_18599656531027291_540429829894052901_n.jpg",
      description: "Protocolo integrado de gerenciamento de manchas, devolvendo a uniformidade de textura e tom da pele.",
    },
    {
      title: "Rejuvenescimento & Botox",
      category: "Toxina Botulínica",
      image: "/images/resultados/741168812_18599656522027291_794907819902854050_n.jpg",
      description: "Suavização das marcas do tempo e rugas de expressão, preservando a mobilidade natural do rosto.",
    }
  ];

  // Dynamically calculate items per page based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = cases.length - itemsPerPage;

  // Auto-play interval
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Loop back to the start
        }
        return prev + 1;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="resultados" className="pt-24 pb-36 bg-nude-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-luxury-black mb-4 leading-tight">
              Resultados <span className="font-script text-gold-600 normal-case text-4xl sm:text-5xl md:text-6xl block sm:inline mt-1 sm:mt-0 font-light">reais</span>
            </h2>
            <p className="text-xs sm:text-sm text-nude-700 leading-relaxed font-light">
              Acompanhe a transformação real de nossas pacientes. Cada imagem reflete a aplicação de protocolos 
              personalizados focados em saúde de pele e harmonia estética.
            </p>
          </div>

          {/* Navigation Controls */}
          {maxIndex > 0 && (
            <div className="flex gap-3 self-start md:self-end">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-nude-300 hover:border-gold-500 rounded-full flex items-center justify-center text-luxury-black hover:text-gold-600 transition-all duration-200"
                aria-label="Caso anterior"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-nude-300 hover:border-gold-500 rounded-full flex items-center justify-center text-luxury-black hover:text-gold-600 transition-all duration-200"
                aria-label="Próximo caso"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Sliding Carousel Wrapper */}
        <GsapReveal type="scale-up" duration={1} className="relative">
          <div
            className="overflow-hidden -mx-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 180, damping: 25 }}
            >
              {cases.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white border border-gold-200/10 shadow-sm p-4 sm:p-5 rounded-sm flex flex-col h-full group hover:shadow-md hover:border-gold-300/20 transition-all duration-300">
                    
                    {/* Before & After Image */}
                    <div className="relative w-full aspect-[4/5] bg-nude-50 rounded-sm overflow-hidden mb-5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                        sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-luxury-black/85 backdrop-blur-sm text-white px-2.5 py-1 text-[8px] sm:text-[9px] font-light tracking-widest uppercase rounded-sm border border-gold-400/20">
                        Antes & Depois
                      </div>
                    </div>

                    {/* Category & Title */}
                    <div className="flex-1">
                      <span className="text-[9px] tracking-widest uppercase font-semibold text-gold-600 block mb-1.5">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-luxury-black mb-2.5 group-hover:text-gold-700 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-nude-700 leading-relaxed font-light mb-6">
                        {item.description}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/5564992134343?text=Ol%C3%A1%2C+gostaria+de+avaliar+meu+caso+para+o+procedimento+de+${encodeURIComponent(item.title)}%21`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 bg-luxury-black hover:bg-gold-500 text-white font-semibold text-[9px] tracking-widest uppercase transition-all duration-300 rounded-sm"
                    >
                      <Calendar className="w-3.5 h-3.5 mr-2" />
                      Avaliar meu Caso
                    </a>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          {maxIndex > 0 && (
            <div className="flex justify-center gap-2.5 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-6 bg-gold-500" : "w-1.5 bg-nude-300 hover:bg-nude-400"
                  }`}
                  aria-label={`Ir para slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </GsapReveal>

      </div>

      {/* Soft gradient transition to the white Testimonials section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
    </section>
  );
}
