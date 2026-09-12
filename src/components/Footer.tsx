import React from 'react';
import { LogoGoleDePoesia, PoetryChaliceIcon } from './LogoGoleDePoesia';
import { Instagram, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="relative bg-[#340720] text-[#F5EDE0] border-t-4 border-[#E8A324] pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#F5EDE0]/15">
          
          {/* IDENTIDADE E MANIFESTO NO FOOTER */}
          <div className="md:col-span-6 space-y-4">
            <LogoGoleDePoesia invertColors={true} className="h-14" showLocationTag={true} />
            
            <p className="font-body text-sm text-[#F5EDE0]/80 max-w-md leading-relaxed">
              Coletivo de oficinas literárias, artísticas e formativas voltado à cultura afro-brasileira, poesia, performance e escrita periférica, sediado em Taguatinga - DF.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#E8A324] font-display tracking-widest uppercase">
              <MapPin className="w-4 h-4" />
              <span>Taguatinga • Distrito Federal • Brasil</span>
            </div>
          </div>

          {/* LINKS RÁPIDOS DE NAVEGAÇÃO */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-lg uppercase tracking-wider text-[#E8A324]">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <a href="#inicio" className="hover:text-[#E8A324] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#oficinas" className="hover:text-[#E8A324] transition-colors">
                  4 Oficinas Gratuitas
                </a>
              </li>
              <li>
                <a href="#programacao" className="hover:text-[#E8A324] transition-colors">
                  Programação & Chamamento
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#E8A324] transition-colors">
                  Sobre o Coletivo
                </a>
              </li>
            </ul>
          </div>

          {/* CONTATO & REDES SOCIAIS */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-lg uppercase tracking-wider text-[#E8A324]">
              Contato & Redes
            </h4>

            {/* INSTAGRAM OFICIAL */}
            <a
              href="https://www.instagram.com/goledepoesia.df/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4A1030] hover:bg-[#E8A324] text-[#F5EDE0] hover:text-[#4A1030] px-4 py-2 rounded-xl transition-all font-body text-sm font-semibold border border-[#E8A324]/30"
              aria-label="Instagram Oficial Gole de Poesia"
            >
              <Instagram className="w-4 h-4 text-[#E8A324] group-hover:text-[#4A1030]" />
              <span>@goledepoesia.df</span>
            </a>

            {/* 
              =========================================================
              ESPAÇO PLACEHOLDER PARA E-MAIL DE CONTATO DEFINITIVO
              Substitua 'contato@goledepoesia.com.br' pelo e-mail oficial
              =========================================================
            */}
            <div className="pt-2">
              <span className="text-xs text-[#F5EDE0]/60 block mb-1">
                E-mail para parcerias e informações:
              </span>
              <a
                href="mailto:goledepoesiadf@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-[#F5EDE0] hover:text-[#E8A324] transition-colors font-body underline decoration-[#E8A324]/50"
              >
                <Mail className="w-4 h-4 text-[#E8A324]" />
                {/* EDITAR E-MAIL AQUI */}
                <span>goledepoesiadf@gmail.com</span>
              </a>
            </div>

            {/* Botão de Voltar ao Topo */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#E8A324] hover:text-[#F5EDE0] transition-colors font-display tracking-wider uppercase"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>

        </div>

        {/* DIREITOS RESERVADOS & CRÉDITOS */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5EDE0]/60 font-body text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong className="text-[#F5EDE0]">Gole de Poesia</strong>. Todos os direitos reservados.
          </p>
          <p className="flex items-center justify-center gap-1">
            <span>Feito com poesia e resistência em Taguatinga - DF</span>
            <PoetryChaliceIcon className="w-3.5 h-3.5 text-[#E8A324]" color="#E8A324" />
          </p>
        </div>

      </div>
    </footer>
  );
};
