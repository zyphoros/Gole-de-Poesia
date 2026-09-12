import React, { useState, useEffect } from 'react';
import { LogoGoleDePoesia } from './LogoGoleDePoesia';
import { Menu, X, Sparkles, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#E8A324]/95 backdrop-blur-md shadow-md py-2.5'
          : 'bg-[#E8A324] py-3.5 md:py-4'
      } border-b border-[#4A1030]/15`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* LOGO OFICIAL NO HEADER */}
        <a
          href="#inicio"
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#4A1030] rounded-lg p-1"
          aria-label="Gole de Poesia - Início"
        >
          <LogoGoleDePoesia className="h-14 sm:h-16 md:h-18 lg:h-20" showLocationTag={false} />
        </a>

        {/* Localizador Taguatinga - DF no Desktop */}
        <div className="hidden lg:flex items-center gap-2 bg-[#4A1030] text-[#F5EDE0] px-3 py-1 rounded-full text-xs font-display tracking-widest uppercase shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-[#E8A324]" />
          <span>Taguatinga • DF</span>
        </div>

        {/* NAVEGAÇÃO DESKTOP COM ÂNCORAS */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-body font-semibold text-sm">
          <a
            href="#oficinas"
            className="text-[#4A1030] hover:text-[#340720] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4A1030] hover:after:w-full after:transition-all"
          >
            Oficinas Gratuitas
          </a>
          <a
            href="#sobre"
            className="text-[#4A1030] hover:text-[#340720] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4A1030] hover:after:w-full after:transition-all"
          >
            O Coletivo
          </a>
          <a
            href="#contato"
            className="text-[#4A1030] hover:text-[#340720] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4A1030] hover:after:w-full after:transition-all"
          >
            Contato
          </a>

          {/* CTA Header */}
          <a
            href="#oficinas"
            className="bg-[#4A1030] hover:bg-[#340720] text-[#F5EDE0] px-4 py-2 rounded-lg font-display text-base tracking-wider uppercase shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#E8A324]" />
            <span>Inscreva-se</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <span className="text-[11px] font-display uppercase tracking-wider bg-[#4A1030] text-[#F5EDE0] px-2 py-0.5 rounded">
            Taguatinga
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#4A1030] hover:bg-[#4A1030]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A1030]"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#E8A324] border-t border-[#4A1030]/20 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <a
            href="#oficinas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-lg font-display uppercase tracking-wider text-[#4A1030] border-b border-[#4A1030]/10"
          >
            Oficinas Gratuitas
          </a>
          <a
            href="#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-lg font-display uppercase tracking-wider text-[#4A1030] border-b border-[#4A1030]/10"
          >
            O Coletivo
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-lg font-display uppercase tracking-wider text-[#4A1030] border-b border-[#4A1030]/10"
          >
            Contato & Redes
          </a>
          <div className="pt-2">
            <a
              href="#oficinas"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block bg-[#4A1030] text-[#F5EDE0] py-3 rounded-lg font-display text-lg tracking-wider uppercase shadow-md"
            >
              Garantir Minha Vaga nas Oficinas
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
