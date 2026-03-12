"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-32 flex flex-col lg:flex-row items-center px-6 overflow-hidden max-w-7xl mx-auto bg-grid">
      {/* Glow Spots */}
      <div className="glow-spot top-[-10%] left-[-10%]" />
      <div className="glow-spot bottom-[10%] right-[-5%]" />

      <div className="z-10 lg:w-3/5 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full mb-8 hover:border-primary/40 transition duration-500 cursor-default"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#CCFF00]" />
          <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            Aliado Técnico del Constructor 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter text-gradient uppercase italic"
        >
          Gestionamos el riesgo <br /> de tu <span className="text-primary">equipo pesado.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl lg:mx-0 mx-auto leading-relaxed font-medium"
        >
          No somos un agente de seguros tradicional. Somos consultoría especializada que habilita tu operación en <span className="text-white font-bold underline decoration-primary">15 minutos</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
        >
          <Link href="#kit" className="bg-primary text-black px-10 py-5 rounded-xl font-black text-lg transition-transform hover:scale-105 flex items-center justify-center gap-3">
            SOLICITAR AUDITORÍA <ChevronRight size={20} />
          </Link>
          <Link href="#cobertura" className="glass-card px-10 py-5 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-3 text-white">
            VER COBERTURAS
          </Link>
        </motion.div>
        
        {/* Trust Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center lg:justify-start items-center gap-12"
        >
          <span className="text-2xl font-black text-white italic tracking-tighter uppercase">CHUBB</span>
          <span className="text-2xl font-black text-white italic tracking-tighter uppercase">HDI</span>
          <span className="text-2xl font-black text-white italic tracking-tighter uppercase">GMX</span>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="lg:w-2/5 mt-16 lg:mt-0 relative hidden lg:block"
      >
        <div className="hero-image-mask relative z-10">
          <Image
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7edd?auto=format&fit=crop&q=80&w=1000" 
            alt="Maquinaria Pesada" 
            className="rounded-3xl grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/5]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent blur-3xl -z-10" />
      </motion.div>
    </section>
  );
}
