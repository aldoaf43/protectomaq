"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, HardHat } from "lucide-react";
import { NavItem } from "@/types/sanity";
import { Image } from "sanity";
import { urlForImage } from "@/lib/sanity/image";
import NextImage from "next/image";
import DynamicIcon from "./ui/DynamicIcon";
import { Button } from "./ui/button";

interface NavbarProps {
  navigation?: NavItem[];
  logo?: Image;
}

export default function Navbar({ navigation, logo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoUrl = logo ? urlForImage(logo)?.url() : null;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-black/60 backdrop-blur-xl border-white/10 py-4"
          : "bg-transparent border-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NextLink href="/" className="flex items-center gap-2 group">
          {logoUrl ? (
            <div className="relative w-8 h-8">
              <NextImage
                src={logoUrl}
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="bg-primary p-1.5 rounded-lg neon-shadow transition-transform group-hover:scale-110">
              <HardHat size={20} className="text-black" />
            </div>
          )}
          <span className="text-xl font-black tracking-tighter uppercase italic text-white">
            PROTECTO<span className="text-primary">MAQ</span>
          </span>
        </NextLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          {navigation
            ?.filter((item) => item.color === "link" || !item.color)
            .map((item) => (
              <NextLink
                key={item._key}
                href={item.url}
                className="hover:text-white transition-colors"
              >
                {item.title}
              </NextLink>
            ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex gap-2">
            {navigation?.map((item) => {
                return (
                  <Button
                    key={item._key}
                    variant={item.color}
                    size="sm"
                    asChild
                    className="text-md font-semibold rounded-full"
                    onClick={() => {
                      // setIsMobileMenuOpen(false);
                      // sendGAdsEvent(item.codeConversion!);
                    }}
                  >
                    <div>
                      <DynamicIcon name={item.icon!} />
                      <a href={item.url}>{item.title}</a>
                    </div>
                  </Button>
                );
              })}
          </div>
          <Button
            variant="link"
            size="icon-sm"
            asChild
            className="md:hidden text-white ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 py-8 px-6 flex flex-col space-y-6">
          {navigation?.map((item) => {
            if (item.color === "link" || !item.color) {
              return (
                <NextLink
                  key={item._key}
                  href={item.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-black uppercase tracking-tighter italic text-white"
                >
                  {item.title}
                </NextLink>
              );
            }

            return (
              <a
                key={item._key}
                href={item.url}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-white font-bold uppercase text-xs tracking-widest"
              >
                {item.icon && (
                  <DynamicIcon
                    name={item.icon}
                    size={16}
                    className="text-primary"
                  />
                )}
                {item.title}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
