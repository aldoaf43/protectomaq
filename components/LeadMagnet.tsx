"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function LeadMagnet() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="kit" className="py-32 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[48px] overflow-hidden grid lg:grid-cols-5 border-white/5">
          {/* Left Content */}
          <div className="lg:col-span-3 p-12 md:p-20 flex flex-col justify-center bg-grid">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 italic text-white leading-[0.9]"
            >
              Profesionaliza <br /> tu operación <br /> <span className="text-primary">sin costo.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-xl mb-12"
            >
              Descarga el <strong>Kit de Gestión ProtectoMAQ</strong>. Plantillas diseñadas por expertos para el control preventivo.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {["Checklist Diario", "Bitácora Mantenimiento", "Reporte Siniestro"].map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white/5 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-white/10 text-white"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="lg:col-span-2 bg-primary p-12 md:p-20 flex flex-col justify-center">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-black text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter italic text-black mb-4">
                  ¡KIT ENVIADO!
                </h3>
                <p className="text-black/70 font-bold uppercase text-xs tracking-widest">
                  Revisa tu bandeja de entrada en unos minutos.
                </p>
              </motion.div>
            ) : (
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 text-black">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1">Nombre Completo</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-black/5 border-b-2 border-black/20 focus:border-black outline-none p-3 font-bold placeholder-black/30 transition-colors"
                    />
                  </div>
                  <div className="space-y-2 text-black">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1">Email Corporativo</label>
                    <input 
                      type="email" 
                      required
                      placeholder="juan@constructora.com"
                      className="w-full bg-black/5 border-b-2 border-black/20 focus:border-black outline-none p-3 font-bold placeholder-black/30 transition-colors"
                    />
                  </div>
                  <div className="space-y-2 text-black">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1">Teléfono</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="55 0000 0000"
                      className="w-full bg-black/5 border-b-2 border-black/20 focus:border-black outline-none p-3 font-bold placeholder-black/30 transition-colors"
                    />
                  </div>
                  <div className="space-y-2 text-black">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1">Localidad</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ej. CDMX, Veracruz..."
                      className="w-full bg-black/5 border-b-2 border-black/20 focus:border-black outline-none p-3 font-bold placeholder-black/30 transition-colors"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-black text-primary py-6 rounded-2xl font-black uppercase tracking-widest text-lg hover:scale-[1.02] transition-transform active:scale-95 shadow-xl flex items-center justify-center gap-3"
                  >
                    RECIBIR KIT <Send size={20} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
