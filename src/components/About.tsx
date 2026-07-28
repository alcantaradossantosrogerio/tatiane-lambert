"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Award, Compass, Heart, X } from "lucide-react";

// Provided custom SVG Arrow pointing Up
const CustomArrow = ({ className = "" }: { className?: string }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="17px"
    height="30px"
    viewBox="0 0 17 30"
    enableBackground="new 0 0 17 30"
    xmlSpace="preserve"
    className={className}
  >
    <g>
      <defs>
        <rect id="SVGID_1_" width="17" height="30"></rect>
      </defs>
      <clipPath id="SVGID_2_">
        <use xlinkHref="#SVGID_1_" overflow="visible"></use>
      </clipPath>
      <line
        clipPath="url(#SVGID_2_)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="8.5"
        y1="29.167"
        x2="8.5"
        y2="0.833"
      ></line>
      <polyline
        clipPath="url(#SVGID_2_)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="0.85,9.167 8.5,0.833 16.15,9.167"
      ></polyline>
    </g>
  </svg>
);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth Parallax coordinate offsets for each collage image
  const y1 = useTransform(scrollYProgress, [0, 1], [-20, 40]);
  const x1 = useTransform(scrollYProgress, [0, 1], [-10, 20]);

  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const y3 = useTransform(scrollYProgress, [0, 1], [-40, 30]);
  const x3 = useTransform(scrollYProgress, [0, 1], [15, -15]);

  const y4 = useTransform(scrollYProgress, [0, 1], [20, -40]);
  const x4 = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const spaceImages = [
    {
      src: "/images/Foto Perfil conjunta.png",
      alt: "Dra. Tatiane Lambert em seu espaço de atendimento",
      title: "Atendimento Exclusivo"
    },
    {
      src: "/images/707855801_18586937608027291_833162245290642277_n.jpg",
      alt: "Equipamentos e procedimentos estéticos avançados",
      title: "Ciência e Estética Avançada"
    },
    {
      src: "/images/708794091_18586937542027291_1765055213857999621_n.jpg",
      alt: "Detalhamento e protocolos de rejuvenescimento",
      title: "Tratamentos Personalizados"
    },
    {
      src: "/images/708993697_18587238724027291_2410384785443015849_n.jpg",
      alt: "Ambiente clínico acolhedor",
      title: "Cuidado & Bem-Estar"
    }
  ];

  const values = [
    {
      title: "Rigor Farmacêutico",
      icon: <Heart className="w-4 h-4 text-gold-400" />,
      desc: "Domínio técnico de farmacologia e fisiologia da pele, assegurando máxima segurança em todos os procedimentos."
    },
    {
      title: "Naturalidade Elegante",
      icon: <Award className="w-4 h-4 text-gold-400" />,
      desc: "Especialidade em realçar os traços faciais de forma sutil, respeitando e valorizando a sua identidade única."
    },
    {
      title: "Atendimento Humanizado",
      icon: <Compass className="w-4 h-4 text-gold-400" />,
      desc: "Avaliações minuciosas e planejamentos estéticos personalizados de acordo com as necessidades de cada paciente."
    }
  ];

  // Lightbox keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNextLightbox();
      if (e.key === "ArrowLeft") handlePrevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % spaceImages.length));
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + spaceImages.length) % spaceImages.length));
  };

  return (
    <section ref={sectionRef} id="sobre" className="pt-24 pb-36 bg-luxury-black text-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-950/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Parallax Image Gallery */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            {/* Mobile Grid Layout */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              {spaceImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className="relative aspect-square border border-gold-400/10 bg-luxury-charcoal/30 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-luxury-black/90 to-transparent p-3 pt-6">
                    <p className="text-[10px] uppercase tracking-widest text-gold-300 font-light">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Parallax Staggered Collage Layout */}
            <div className="hidden lg:block relative w-full h-[580px]">
              
              {/* Image 1: Top-Left */}
              <motion.div
                style={{ y: y1, x: x1 }}
                onClick={() => setLightboxIndex(0)}
                className="absolute top-0 left-0 w-[50%] aspect-square border border-gold-400/15 bg-luxury-charcoal/40 shadow-2xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={spaceImages[0].src}
                  alt={spaceImages[0].alt}
                  fill
                  priority
                  className="object-cover filter brightness-[0.9] group-hover:brightness-[1.0] group-hover:scale-103 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-luxury-black/30 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-luxury-black/85 border border-gold-400/25 px-2.5 py-1 text-[8px] tracking-widest uppercase text-gold-300 font-light">
                  {spaceImages[0].title}
                </div>
              </motion.div>

              {/* Image 2: Top-Right */}
              <motion.div
                style={{ y: y2, x: x2 }}
                onClick={() => setLightboxIndex(1)}
                className="absolute top-12 right-0 w-[42%] aspect-[3/4] border border-gold-400/15 bg-luxury-charcoal/40 shadow-2xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={spaceImages[1].src}
                  alt={spaceImages[1].alt}
                  fill
                  priority
                  className="object-cover filter brightness-[0.9] group-hover:brightness-[1.0] group-hover:scale-103 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-luxury-black/30 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-luxury-black/85 border border-gold-400/25 px-2.5 py-1 text-[8px] tracking-widest uppercase text-gold-300 font-light">
                  {spaceImages[1].title}
                </div>
              </motion.div>

              {/* Image 3: Bottom-Left */}
              <motion.div
                style={{ y: y3, x: x3 }}
                onClick={() => setLightboxIndex(2)}
                className="absolute bottom-0 left-6 w-[45%] aspect-[3/4] border border-gold-400/15 bg-luxury-charcoal/40 shadow-2xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={spaceImages[2].src}
                  alt={spaceImages[2].alt}
                  fill
                  className="object-cover filter brightness-[0.9] group-hover:brightness-[1.0] group-hover:scale-103 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-luxury-black/30 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-luxury-black/85 border border-gold-400/25 px-2.5 py-1 text-[8px] tracking-widest uppercase text-gold-300 font-light">
                  {spaceImages[2].title}
                </div>
              </motion.div>

              {/* Image 4: Bottom-Right */}
              <motion.div
                style={{ y: y4, x: x4 }}
                onClick={() => setLightboxIndex(3)}
                className="absolute bottom-10 right-4 w-[45%] aspect-square border border-gold-400/15 bg-luxury-charcoal/40 shadow-2xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={spaceImages[3].src}
                  alt={spaceImages[3].alt}
                  fill
                  className="object-cover filter brightness-[0.9] group-hover:brightness-[1.0] group-hover:scale-103 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-luxury-black/30 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-luxury-black/85 border border-gold-400/25 px-2.5 py-1 text-[8px] tracking-widest uppercase text-gold-300 font-light">
                  {spaceImages[3].title}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-6 text-white leading-tight">
              A ciência do cuidado, <br />
              <span className="font-script text-gold-300 text-5xl sm:text-6xl md:text-7xl normal-case block my-2 font-light">
                a arte da naturalidade
              </span>
            </h2>

            {/* Core connector quote */}
            <div className="border-l-2 border-gold-400 pl-4 py-1 my-5">
              <p className="font-serif italic text-base sm:text-lg text-gold-100/90 font-light leading-relaxed">
                &ldquo;Realçar a beleza é, acima de tudo, resgatar a autoconfiança de cada mulher de forma elegante, ética e segura.&rdquo;
              </p>
              <span className="text-[9px] tracking-wider uppercase font-light text-gold-400 block mt-2">Dra. Tatiane Lambert - Farmacêutica Esteta</span>
            </div>

            <div className="space-y-5 text-xs sm:text-sm text-nude-200 leading-relaxed font-light mb-8">
              <p>
                Sou mineira, do sul de Minas Gerais, e cheguei a Goiás após o meu casamento, trazendo comigo o sonho de construir uma nova vida ao lado da minha família. Formada em Farmácia, iniciei minha trajetória trabalhando em uma drogaria e, com dedicação e anos de entrega, essa oportunidade se transformou em minha própria drogaria, a qual liderei por 16 anos.
              </p>
              <p>
                A estética entrou na minha vida de forma inesperada. O que começou como uma especialização para cuidar de mim, da minha mãe e da minha irmã, logo tomou uma proporção maior. De atendimentos de porta em porta até alugar minha primeira sala clínica, conciliei a gestão, os estudos e a maternidade. Hoje, dedico-me 100% à minha própria clínica de estética avançada, ajudando mulheres a devolver sua autoestima e realçar sua beleza natural e elegante.
              </p>
            </div>

            {/* Staggered values below */}
            <div className="space-y-4 pt-4 border-t border-gold-400/10">
              {values.map((value, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-7 h-7 bg-luxury-charcoal border border-gold-400/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-gold-100 mb-0.5">{value.title}</h4>
                    <p className="text-[11px] text-nude-350 leading-relaxed font-light">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Lightbox Gallery Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-luxury-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none"
          >
            {/* Modal Header Controls */}
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 border border-gold-400/20 rounded-full flex items-center justify-center text-white hover:text-gold-400 transition-colors duration-200 focus:outline-none"
                aria-label="Fechar galeria"
              >
                <X size={20} />
              </button>
            </div>

            {/* Carousel navigation and display */}
            <div className="relative w-full max-w-4xl aspect-[4/3] max-h-[80vh] flex items-center justify-center">
              
              {/* Prev Button (Custom SVG Arrow rotated left) */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-2 sm:left-4 z-10 w-12 h-12 border border-gold-400/20 rounded-full flex items-center justify-center text-white hover:text-gold-400 hover:border-gold-400/50 transition-all duration-300 focus:outline-none"
                aria-label="Foto anterior"
              >
                <CustomArrow className="-rotate-90 text-white hover:text-gold-400" />
              </button>

              {/* Main Image container with animations */}
              <div className="relative w-[85%] h-[85%] border border-gold-400/20 bg-luxury-charcoal/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={spaceImages[lightboxIndex].src}
                      alt={spaceImages[lightboxIndex].alt}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Subtitle / Caption bar */}
                <div className="absolute bottom-0 inset-x-0 bg-luxury-black/85 border-t border-gold-400/10 p-4 text-center">
                  <p className="font-serif text-base sm:text-lg text-gold-300 font-medium">
                    {spaceImages[lightboxIndex].title}
                  </p>
                  <p className="text-[10px] tracking-wider uppercase text-white/70 font-light mt-0.5">
                    {spaceImages[lightboxIndex].alt}
                  </p>
                </div>
              </div>

              {/* Next Button (Custom SVG Arrow rotated right) */}
              <button
                onClick={handleNextLightbox}
                className="absolute right-2 sm:right-4 z-10 w-12 h-12 border border-gold-400/20 rounded-full flex items-center justify-center text-white hover:text-gold-400 hover:border-gold-400/50 transition-all duration-300 focus:outline-none"
                aria-label="Próxima foto"
              >
                <CustomArrow className="rotate-90 text-white hover:text-gold-400" />
              </button>

            </div>

            {/* Thumbnails indicator */}
            <div className="flex gap-2 mt-8 z-10 overflow-x-auto max-w-full px-4">
              {spaceImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-14 h-14 border cursor-pointer overflow-hidden rounded-sm transition-all duration-300 ${
                    lightboxIndex === idx
                      ? "border-gold-400 scale-105 shadow-md shadow-gold-500/10"
                      : "border-gold-400/15 opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={img.src} alt={img.title} fill className="object-cover" />
                </div>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Soft gradient transition to the light Before & After section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-nude-100 pointer-events-none z-10" />
    </section>
  );
}
