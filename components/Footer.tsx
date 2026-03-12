import Link from "next/link";
import { Linkedin, Instagram, HardHat } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 text-white">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-primary p-1.5 rounded-lg shadow-lg shadow-primary/20">
              <HardHat className="text-black" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">
              PROTECTO<span className="text-primary">MAQ</span>
            </span>
          </div>
          <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
            Consultoría especializada en la gestión y transferencia de riesgos para equipo pesado. No vendemos pólizas, habilitamos construcciones.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary transition-all">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary transition-all">
              <Instagram size={18} />
            </Link>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-zinc-500">Horario</h4>
          <ul className="text-zinc-400 space-y-4 text-sm font-medium">
            <li>Lun - Vie: 9:00 AM - 6:00 PM</li>
            <li className="text-primary font-bold">Emisión Exprés 24/7 (Suscritos)</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-zinc-500">Ubicación</h4>
          <p className="text-zinc-400 text-sm font-medium leading-relaxed">
            Ciudad de México, MX.<br />
            contacto@protectomaq.mx<br />
            55 1234 5678
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[9px] text-zinc-600 font-black uppercase tracking-[0.5em] gap-4">
        <p>© {currentYear} PROTECTOMAQ - ALTA GESTIÓN DE RIESGOS</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
          <Link href="#" className="hover:text-white transition-colors">Términos</Link>
        </div>
      </div>
    </footer>
  );
}
