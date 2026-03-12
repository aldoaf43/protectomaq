"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Banknote, ShieldAlert, FileText } from "lucide-react";

export default function Solutions() {
  return (
    <section id="soluciones" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight text-white italic">
              Transformamos <span className="text-primary">Gasto</span> <br /> 
              en Herramientas <span className="text-primary">Operativas.</span>
            </h2>
            <p className="text-zinc-500 text-lg">
              Identificamos los huecos en tus pólizas actuales que ponen en riesgo tu flujo de caja.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <p className="text-primary text-4xl font-black italic">5 min</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-2">Cotización</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <p className="text-white text-4xl font-black italic">10 min</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-2">Emisión</p>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Flujo de Caja */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-10 rounded-3xl group"
          >
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <Banknote className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase italic text-white tracking-tighter">Flujo de Caja</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Protegemos tu liquidez operativa ante reparaciones imprevistas de +$200k MXN.
            </p>
          </motion.div>

          {/* Robo Total */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-10 rounded-3xl group"
          >
            <div className="bg-zinc-800 w-14 h-14 rounded-xl flex items-center justify-center mb-8 border border-zinc-700 group-hover:border-white/20 transition-colors">
              <ShieldAlert className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase italic text-white tracking-tighter">Robo Total</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Cobertura técnica en zonas críticas como Michoacán, Veracruz y Puebla.
            </p>
          </motion.div>

          {/* Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-10 rounded-3xl border-primary/30 group"
          >
            <div className="bg-zinc-800 w-14 h-14 rounded-xl flex items-center justify-center mb-8 border border-zinc-700 group-hover:border-primary/50 transition-colors">
              <FileText className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase italic text-white tracking-tighter">Compliance</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Certificados de RC especializados para entrada inmediata a obras federales y naves industriales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
