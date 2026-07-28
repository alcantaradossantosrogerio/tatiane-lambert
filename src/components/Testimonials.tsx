"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Mariana Silva",
      role: "Tratamento de Melasma",
      text: "Fiz o protocolo de Melasma Control com a Dra. Tatiane e o resultado superou todas as minhas expectativas! Minha pele clareou de forma segura e uniforme. O rigor clínico dela faz toda a diferença.",
      stars: 5
    },
    {
      name: "Gabriela Santos",
      role: "Preenchimento Labial",
      text: "Estava com medo de fazer preenchimento labial e ficar artificial, mas a Dra. Tatiane foi super paciente e detalhista. Ficou com um contorno lindo, super natural e muito hidratado! Amei!",
      stars: 5
    },
    {
      name: "Camila Rodrigues",
      role: "Toxina Botulínica (Botox)",
      text: "Faço meu botox com a Dra. Tatiane há mais de um ano. A aplicação é super tranquila e o resultado é uma expressão leve e descansada, sem aquele efeito de rosto congelado. Excelente profissional!",
      stars: 5
    },
    {
      name: "Júlia Ferreira",
      role: "Bioestimulador de Colágeno",
      text: "Iniciei o tratamento de bioestimulação de colágeno facial e o viço e a firmeza da minha pele melhoraram incrivelmente. O espaço é super aconchegante e o atendimento é impecável.",
      stars: 5
    },
    {
      name: "Fernanda Costa",
      role: "Harmonização Facial Natural",
      text: "Realizei o preenchimento de olheiras e malar. A Dra. Tatiane fez uma avaliação detalhada e me explicou todo o processo. O resultado foi sutil e muito elegante, exatamente o que eu queria.",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-luxury-black mb-6 leading-tight">
            O que dizem nossas <span className="font-script text-gold-600 normal-case text-4xl sm:text-5xl md:text-6xl block sm:inline mt-1 sm:mt-0 font-light">pacientes</span>
          </h2>
          <p className="text-sm sm:text-base text-nude-700 leading-relaxed">
            Nada nos traz mais alegria do que ver a autoestima de nossas pacientes renovada. 
            Confira alguns dos relatos de quem vivenciou a experiência clínica com a Dra. Tatiane Lambert.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-nude-50/50 border border-gold-200/10 p-8 rounded-sm hover:border-gold-300/30 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-gold-200 group-hover:text-gold-400 transition-colors duration-300 absolute top-6 right-8">
                  <Quote size={32} strokeWidth={1} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xs sm:text-sm text-nude-800 leading-relaxed font-light mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Patient Info */}
              <div className="border-t border-gold-200/20 pt-4 flex flex-col">
                <span className="font-serif text-base font-semibold text-luxury-black">{review.name}</span>
                <span className="text-[10px] tracking-wider uppercase font-light text-gold-600 mt-0.5">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
