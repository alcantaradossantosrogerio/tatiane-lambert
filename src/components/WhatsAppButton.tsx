"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      
      {/* Floating tooltip/message */}
      <div className="bg-white border border-gold-200/20 text-luxury-black text-xs font-medium px-4 py-2 rounded-sm shadow-md mr-3 opacity-0 translate-x-4 invisible group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible transition-all duration-300 pointer-events-none whitespace-nowrap">
        Fale conosco no WhatsApp 👋
      </div>

      {/* Button link */}
      <motion.a
        href="https://wa.me/5564992134343?text=Ol%C3%A1%2C+vi+o+site+e+gostaria+de+agendar+uma+consulta+com+a+Dra.+Tatiane+Lambert%21"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 relative focus:outline-none"
        aria-label="Fale conosco no WhatsApp"
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0px 4px 10px rgba(16, 185, 129, 0.3)",
            "0px 4px 20px rgba(16, 185, 129, 0.5)",
            "0px 4px 10px rgba(16, 185, 129, 0.3)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Direct green badge/icon */}
        <MessageCircle size={28} className="fill-white text-emerald-500" />
        
        {/* Notification dot */}
        <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white"></span>
        </span>
      </motion.a>

    </div>
  );
}
