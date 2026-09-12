import React from 'react';
import { WORKSHOPS_DATA } from '../data/workshops';
import { WorkshopCard } from './WorkshopCard';
import { HandwritingTexture } from './HandwritingTexture';
import { Sparkles, MapPin, CheckCircle } from 'lucide-react';

export const Workshops: React.FC = () => {
  return (
    <section
      id="oficinas"
      className="relative bg-[#E8A324] text-[#4A1030] pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden"
    >
      {/* TEXTURA DE ESCRITA À MÃO EM BAIXA OPACIDADE */}
      <HandwritingTexture variant="mustard" opacity={0.06} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* CABEÇALHO DA SEÇÃO DE OFICINAS */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          <div className="inline-flex items-center gap-2 bg-[#4A1030] text-[#F5EDE0] px-4 py-1.5 rounded-full font-display text-sm tracking-widest uppercase mb-4 shadow-sm transform -rotate-1">
            <MapPin className="w-3.5 h-3.5 text-[#E8A324]" />
            <span>Formação Gratuita • Taguatinga - DF</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-[#4A1030] uppercase tracking-tight leading-none mb-3">
            4 OFICINAS. <span className="text-[#340720]">4 EXPERIÊNCIAS.</span>
          </h2>

          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#340720] font-bold">
            Um gole de formação para quem vive de verso, cena e projeto.
          </p>

          <p className="font-body text-base sm:text-lg text-[#4A1030]/85 max-w-2xl mx-auto mt-4 leading-relaxed">
            Vivências intensivas com artistas e pesquisadores fundamentais da cultura periférica e afro-brasileira. Escolha a sua oficina e garanta sua vaga preenchendo o formulário oficial.
          </p>

          {/* Destaques das Oficinas */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs sm:text-sm font-semibold">
            <span className="flex items-center gap-1.5 bg-[#FAF4EA] text-[#4A1030] px-3 py-1.5 rounded-lg shadow-sm border border-[#4A1030]/15">
              <CheckCircle className="w-4 h-4 text-[#4A1030]" />
              Inscrições 100% Gratuitas
            </span>
            <span className="flex items-center gap-1.5 bg-[#FAF4EA] text-[#4A1030] px-3 py-1.5 rounded-lg shadow-sm border border-[#4A1030]/15">
              <CheckCircle className="w-4 h-4 text-[#4A1030]" />
              Certificado de Participação
            </span>
            <span className="flex items-center gap-1.5 bg-[#FAF4EA] text-[#4A1030] px-3 py-1.5 rounded-lg shadow-sm border border-[#4A1030]/15">
              <CheckCircle className="w-4 h-4 text-[#4A1030]" />
              Material Incluso
            </span>
          </div>
        </div>

        {/* GRID DE 4 CARDS: 2x2 EM DESKTOP, 1 COLUNA EM MOBILE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {WORKSHOPS_DATA.map((workshop, index) => (
            <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
          ))}
        </div>

        {/* NOTA DE RODAPÉ DAS OFICINAS */}
        <div className="mt-14 p-6 bg-[#FAF4EA]/80 backdrop-blur-sm rounded-2xl border-2 border-[#4A1030]/20 text-center max-w-2xl mx-auto shadow-md">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#4A1030]">
            <Sparkles className="w-5 h-5 text-[#E8A324]" />
            <h4 className="font-display text-xl uppercase tracking-wider">
              Dúvidas sobre as inscrições?
            </h4>
          </div>
          <p className="font-body text-xs sm:text-sm text-[#4A1030]/80 mb-3">
            As vagas são preenchidas por ordem de inscrição e análise de perfil comunitário. Após preencher o formulário no Google Forms, nossa produção entrará em contato via e-mail ou WhatsApp com as orientações de local e horário.
          </p>
          <a
            href="https://www.instagram.com/goledepoesia.df/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-bold text-xs sm:text-sm text-[#4A1030] underline hover:text-[#340720] transition-colors"
          >
            Acompanhe atualizações no Instagram @goledepoesia.df →
          </a>
        </div>

      </div>
    </section>
  );
};
