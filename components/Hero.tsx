"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroSection } from "@/types/sanity";
import { urlForImage } from "@/lib/sanity/image";
import CtaButton from "./CtaButton";

interface HeroProps {
  data: HeroSection;
}

export default function Hero({ data }: HeroProps) {
  const {
    label,
    title,
    description,
    primaryCta,
    secondaryCta,
    image,
    insuranceBrands,
  } = data;

  return (
    <section className="relative pt-32 pb-20 flex flex-col lg:flex-row items-center px-32 overflow-hidden mx-auto bg-grid">
      <div className="glow-spot top-[-10%] left-[-10%]" />
      <div className="glow-spot bottom-[10%] right-[-5%]" />

      <div className="z-10 lg:w-3/5 text-center lg:text-left">
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full mb-8 hover:border-primary/40 transition duration-500 cursor-default"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#CCFF00]" />
            <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              {label}
            </span>
          </motion.div>
        )}

        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter text-gradient uppercase italic"
          >
            {title}
          </motion.h1>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl lg:mx-0 mx-auto leading-relaxed font-medium"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
        >
          {primaryCta && (
            <CtaButton cta={primaryCta} className="font-bold py-6" size="lg" />
          )}
          {secondaryCta && (
            <CtaButton
              cta={secondaryCta}
              className="font-bold py-6"
              size="lg"
            />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 pt-12 border-t border-white/5 flex flex-wrap justify-center lg:justify-start items-center gap-12"
        >
          {insuranceBrands &&
            insuranceBrands.map((brand) => {
              return (
                <span key={brand} className="text-2xl font-black text-white italic tracking-tighter uppercase">
                  {brand}
                </span>
              );
            })}
        </motion.div>
      </div>

      {/* Hero Image */}
      {image && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:w-2/5 mt-16 lg:mt-0 relative hidden lg:block h-150"
        >
          <div className="hero-image-mask relative z-10 w-full h-full">
            <Image
              src={
                urlForImage(image)!.url() ||
                "https://images.unsplash.com/photo-1581094288338-2314dddb7edd?auto=format&fit=crop&q=80&w=1000"
              }
              alt={title || "Maquinaria Pesada"}
              fill
              className="rounded-3xl grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-l from-primary/10 to-transparent blur-3xl -z-10" />
        </motion.div>
      )}
    </section>
  );
}
