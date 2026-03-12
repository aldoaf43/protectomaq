"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, HardHat, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-black/60 backdrop-blur-xl border-white/10 py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg neon-shadow transition-transform group-hover:scale-110">
            <HardHat size={20} className="text-black" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic text-white">
            PROTECTO<span className="text-primary">MAQ</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          <Link href="#soluciones" className="hover:text-white transition-colors">Soluciones</Link>
          <Link href="#cobertura" className="hover:text-white transition-colors">Cobertura</Link>
          <Link href="#kit" className="hover:text-white transition-colors">Kit Operativo</Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Direct Contact Buttons */}
          <div className="hidden md:flex gap-2">
            <a href="tel:5512345678" className="glass-card px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 hover:border-primary/50 text-white transition-all">
              <Phone size={12} className="text-primary" /> Llamar ahora
            </a>
            <a href="https://wa.me/5512345678" className="glass-card px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 hover:border-[#25D366]/50 text-white transition-all">
              <MessageSquare size={12} className="text-[#25D366]" /> WhatsApp
            </a>
          </div>
          <Link href="#contacto" className="bg-primary text-black px-6 py-2 rounded-full font-black text-xs hover:scale-105 transition-all active:scale-95 shadow-[0_0_15px_rgba(204,255,0,0.3)] uppercase">
            COTIZAR AHORA
          </Link>
          
          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 py-8 px-6 flex flex-col space-y-6">
          <Link
            href="#soluciones"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-black uppercase tracking-tighter italic text-white"
          >
            Soluciones
          </Link>
          <Link
            href="#cobertura"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-black uppercase tracking-tighter italic text-white"
          >
            Cobertura
          </Link>
          <Link
            href="#kit"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-black uppercase tracking-tighter italic text-white"
          >
            Kit Operativo
          </Link>
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <a href="tel:5512345678" className="flex items-center gap-3 text-white font-bold uppercase text-xs tracking-widest">
              <Phone size={18} className="text-primary" /> Llamar ahora
            </a>
            <a href="https://wa.me/5512345678" className="flex items-center gap-3 text-white font-bold uppercase text-xs tracking-widest">
              <MessageSquare size={18} className="text-[#25D366]" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
