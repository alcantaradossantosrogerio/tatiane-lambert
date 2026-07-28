"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-28 overflow-hidden bg-luxury-black text-white"
    >
      {/* Blurred Backdrop Portrait (Duplicando a foto de perfil no fundo com blur) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <Image
          src="/images/Foto Perfil.png"
          alt="Backdrop Blur"
          fill
          priority
          className="object-cover object-center filter blur-[50px] scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-luxury-black/75 to-luxury-black" />
      </div>

      {/* Sophisticated Editorial Lighting Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-950/15 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gold-900/10 rounded-full blur-3xl opacity-30 z-0 pointer-events-none" />

      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-176px)]">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left z-10 relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-gold-400 uppercase mb-6 block"
            >
              FARMACÊUTICA ESTETA
            </motion.span>

            {/* High Contrast Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight mb-8"
            >
              <span className="block font-serif text-white">Beleza</span>
              <span className="block font-serif text-white">elegante &</span>
              <span className="font-script text-gold-300 normal-case block mt-3 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light">
                natural.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-nude-300 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10 font-light"
            >
              Realçando a sua beleza única através de uma abordagem científica e 
              individualizada. Procedimentos estéticos refinados focados na sua naturalidade e bem-estar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* WhatsApp Booking CTA */}
              <a
                href="https://wa.me/5564992134343?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+a+Dra.+Tatiane+Lambert%21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 rounded-none shadow-md shadow-gold-500/10 hover:shadow-lg hover:shadow-gold-500/25 group"
              >
                Agendar Horário
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* View Services Link */}
              <a
                href="#servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-gold-400/20 hover:border-gold-400 bg-white/5 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 rounded-none"
              >
                Nossos Serviços
              </a>
            </motion.div>
          </div>

          {/* Right Column: Full-height Blended Professional Image */}
          <div className="lg:col-span-5 relative w-full h-[500px] sm:h-[600px] lg:h-full flex items-end justify-center lg:absolute lg:right-0 lg:bottom-0 lg:top-0 lg:w-[46%] z-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative w-full h-full overflow-hidden"
            >
              {/* Professional Photo */}
              <Image
                src="/images/Foto Perfil.png"
                alt="Dra. Tatiane Lambert"
                fill
                priority
                className="object-cover object-top filter brightness-[0.92] contrast-[1.02] select-none"
                sizes="(max-w-1024px) 100vw, 46vw"
              />

              {/* Editorial Gradient Overlays */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-luxury-black via-luxury-black/30 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent pointer-events-none" />
              <div className="lg:hidden absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-luxury-black via-luxury-black/20 to-transparent pointer-events-none" />

              {/* Professional Name Tag */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-12 left-4 sm:left-8 lg:left-12 bg-luxury-black/90 backdrop-blur-sm border border-gold-400/35 p-5 pr-10 shadow-2xl z-10 max-w-[260px]"
              >
                <p className="font-serif text-xl sm:text-2xl font-light text-gold-300 tracking-wide">
                  Dra. Tatiane Lambert
                </p>
                <div className="w-10 h-[1px] bg-gold-400/40 my-2.5" />
                <p className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-light text-white/80">
                  Farmacêutica Esteta
                </p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Soft gradient transition to the white Services section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
    </section>
  );
}
