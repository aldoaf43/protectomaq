import { Facebook, Globe, HardHat, Instagram, Linkedin, Twitter } from "lucide-react";
import { FooterPayload } from "@/types/sanity";

interface FooterProps {
  data?: FooterPayload;
}

const SocialIcon = ({ name, className }: { name: string, className?: string }) => {
  switch (name.toLowerCase()) {
    case 'facebook': return <Facebook className={className} />
    case 'twitter': return <Twitter className={className} />
    case 'instagram': return <Instagram className={className} />
    case 'linkedin': return <Linkedin className={className} />
    default: return <Globe className={className} />
  }
}

export default function Footer({data}: FooterProps ) {
  if (!data) return null

  const { 
    description, 
    socialLinks = [], 
    schedule = [], 
    contactInfo, 
    copyright, 
    legalLinks = [] 
  } = data

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto" className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 text-white">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-primary p-1.5 rounded-lg shadow-lg shadow-primary/20">
              <HardHat className="text-black text-xl h-6 w-6" aria-hidden="true" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">
              PROTECTO<span className="text-primary">MAQ</span>
            </span>
          </div>
          
          {description && (
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
              {description}
            </p>
          )}

          {socialLinks.length > 0 && (
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social._key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-zinc-400 hover:text-primary transition-colors"
                  aria-label={`Visitar nuestro ${social.platform}`}
                >
                  <SocialIcon name={social.platform} className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-zinc-500">
            Horario
          </h4>
          {schedule.length > 0 ? (
            <ul className="text-zinc-400 space-y-4 text-sm font-medium">
              {schedule.map((item) => (
                <li 
                  key={item._key} 
                  className={item.isHighlighted ? "text-primary font-bold" : ""}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-zinc-600 text-sm">No hay horarios disponibles.</p>
          )}
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-zinc-500">
            Ubicación
          </h4>
          <p className="text-zinc-400 text-sm font-medium leading-relaxed">
            {contactInfo?.address && (
              <>
                {contactInfo.address}
                <br />
              </>
            )}
            {contactInfo?.email && (
              <>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
                <br />
              </>
            )}
            {contactInfo?.phone && (
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                {contactInfo.phone}
              </a>
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[9px] text-zinc-600 font-black uppercase tracking-[0.5em] gap-4">
        <p>
          &copy; {currentYear} {copyright || 'PROTECTOMAQ - ALTA GESTIÓN DE RIESGOS'}
        </p>
        
        {legalLinks.length > 0 && (
          <div className="flex flex-wrap gap-8">
            {legalLinks.map((link) => (
              <a
                key={link._key}
                href={link.url}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}
