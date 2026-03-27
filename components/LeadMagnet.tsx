"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { FormPayload, LeadMagnetSection } from "@/types/sanity";
import Form from "./form-element";

interface LeadMagnetProps {
  data: LeadMagnetSection;
  form: FormPayload;
}

export default function LeadMagnet({ data, form }: LeadMagnetProps) {
  const { title, subtitle, formTitle } = data;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="kit" className="py-32 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[48px] overflow-hidden grid lg:grid-cols-5 border-white/5">
          <div className="lg:col-span-3 p-12 md:p-20 flex flex-col justify-center bg-grid">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 italic text-white leading-[0.9]"
            >
              {title || "Profesionaliza tu operación"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-xl mb-12"
            >
              {subtitle || "Descarga nuestro material especializado."}
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[
                "Checklist Diario",
                "Bitácora Mantenimiento",
                "Reporte Siniestro",
              ].map((badge, i) => (
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
                  {form.responseMessage?.title}
                </h3>
                <p className="text-black/70 font-bold uppercase text-xs tracking-widest">
                  {form.responseMessage?.description}
                </p>
              </motion.div>
            ) : (
              <Form form={form}/>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
