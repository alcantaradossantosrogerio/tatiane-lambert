"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como funciona a consulta avaliativa?",
      a: "Toda jornada clínica com a Dra. Tatiane Lambert começa com uma consulta de avaliação detalhada. Analisamos a fisiologia da sua pele, a sua saúde geral e definimos o plano estético ideal para suas metas de beleza natural. O agendamento é feito de forma rápida pelo nosso WhatsApp."
    },
    {
      q: "Os procedimentos injetáveis (como Botox ou preenchimento) doem?",
      a: "Para maior conforto das pacientes, utilizamos anestésicos tópicos potentes de grau médico e técnicas de aplicação muito delicadas. A maioria das pacientes relata apenas um leve incômodo passageiro. Priorizamos sua tranquilidade em todas as etapas."
    },
    {
      q: "O tratamento para Melasma realmente funciona?",
      a: "Sim! O melasma é controlado com sucesso através de uma associação de procedimentos em consultório (peelings químicos e drug delivery) e a dedicação ao home care diário personalizado recomendado pela Dra. Tatiane. Mantemos a pele saudável, uniforme e protegida."
    },
    {
      q: "Qual a durabilidade dos resultados da Toxina Botulínica?",
      a: "A durabilidade média é de 4 a 6 meses, variando conforme o metabolismo de cada paciente, estilo de vida e cuidados diários. Recomendamos aplicações periódicas para manutenção e prevenção de novas linhas de expressão."
    },
    {
      q: "O consultório possui estacionamento ou facilidade de acesso?",
      a: "Sim! Estamos localizados no Parque dos Buritis, em Rio Verde - GO, uma região de fácil acesso. Contamos com espaço seguro e tranquilo para estacionar seu veículo em frente ao consultório."
    },
    {
      q: "Quais são as formas de pagamento aceitas?",
      a: "Aceitamos pagamentos via Pix, cartões de débito e crédito (com possibilidade de parcelamento sem juros em até 6x dependendo do valor total do plano de tratamento contratado)."
    }
  ];

  return (
    <section id="duvidas" className="pt-24 pb-36 bg-nude-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-luxury-black mb-6 leading-tight">
            Perguntas <span className="font-script text-gold-600 normal-case text-4xl sm:text-5xl md:text-6xl block sm:inline mt-1 sm:mt-0 font-light">frequentes</span>
          </h2>
          <p className="text-xs sm:text-sm text-nude-700 max-w-xl mx-auto">
            Separamos as principais perguntas que nossas clientes costumam fazer antes de agendar. 
            Se a sua dúvida não estiver aqui, clique no botão e fale conosco.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-gold-200/10 rounded-sm overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors duration-200 hover:bg-nude-50/30"
                >
                  <span className="font-medium text-xs sm:text-sm md:text-base text-luxury-black pr-4">
                    {faq.q}
                  </span>
                  <div className="w-6 h-6 border border-gold-200 rounded-full flex items-center justify-center shrink-0 text-gold-600">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-nude-100">
                        <p className="text-xs sm:text-sm text-nude-800 leading-relaxed font-light">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-nude-700 mb-4">Ainda tem alguma pergunta sobre os nossos protocolos?</p>
          <a
            href="https://wa.me/5564992134343?text=Ol%C3%A1%2C+tenho+uma+d%C3%BAvida+sobre+um+procedimento%21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-gold-500 hover:bg-gold-500 hover:text-white text-xs font-semibold uppercase tracking-widest text-gold-700 transition-all duration-300 rounded-sm"
          >
            Falar com a Equipe
          </a>
        </div>

      </div>

      {/* Soft gradient transition to the dark Footer section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-luxury-black pointer-events-none z-10" />
    </section>
  );
}
