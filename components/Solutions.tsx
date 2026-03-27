"use client";

import { motion } from "framer-motion";
import { SolutionsSection } from "@/types/sanity";
import DynamicIcon from "./ui/DynamicIcon";

interface SolutionsProps {
  data: SolutionsSection;
}

export default function Solutions({ data }: SolutionsProps) {
  const { label, title, solutions } = data;
  return (
    <section id="soluciones" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {label && (
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                {label}
              </span>
            )}
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight text-white italic">
              {title || "Nuestras Soluciones"}
            </h2>
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
          {solutions?.map((item, index) => {
            return (
              <motion.div
                key={item._key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-10 rounded-3xl group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary/20 transition-colors text-primary">
                  {item.icon && <DynamicIcon name={item.icon} />}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase italic text-white tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.description}
                </p>
                {item.stats && (
                  <p className="mt-4 text-primary text-[10px] font-bold uppercase tracking-widest">
                    {item.stats}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
