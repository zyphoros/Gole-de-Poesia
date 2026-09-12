import React from 'react';
import { HandwritingTexture } from './HandwritingTexture';
import { WashiTape } from './WashiTape';
import { ArrowDown, Sparkles, MapPin, Feather } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative bg-[#E8A324] text-[#4A1030] pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden"
    >
      {/* TEXTURA DE FUNDO COM ESCRITA À MÃO SUTIL */}
      <HandwritingTexture variant="mustard" opacity={0.06} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* COLUNA ESQUERDA: TIPOGRAFIA DE CARTAZ E CHAMADA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tag de Localização estilo Carimbo/Zine */}
            <div className="inline-flex items-center gap-2 bg-[#4A1030] text-[#F5EDE0] px-3.5 py-1.5 rounded-sm shadow-sm transform -rotate-1 mb-5">
              <MapPin className="w-3.5 h-3.5 text-[#E8A324]" />
              <span className="font-display text-sm md:text-base tracking-widest uppercase">
                Taguatinga - DF • Coletivo Cultural
              </span>
            </div>

            {/* Título Estilo Cartaz: Combinação Script + Bold Condensado */}
            <div className="relative mb-4">
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#4A1030] font-extrabold uppercase leading-[0.88] tracking-tight drop-shadow-sm">
                gole
              </h1>
              <span className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#4A1030] font-bold block transform -rotate-2 -mt-1 sm:-mt-2 md:-mt-3 ml-2 sm:ml-4">
                de Poesia
              </span>
            </div>

            {/* Frase de Efeito no Estilo das Artes de Divulgação */}
            <div className="relative border-l-4 border-[#4A1030] pl-4 mb-6">
              <p className="font-body text-xl sm:text-2xl md:text-3xl font-bold text-[#4A1030] leading-tight">
                “Literatura que se fala, se canta e se vive.”
              </p>
              <p className="font-script text-2xl md:text-3xl text-[#340720] font-bold mt-1">
                Da quebrada, nasce poesia.
              </p>
            </div>

            {/* Texto Descritivo de Apresentação */}
            {/* TEXTO PLACEHOLDER EDITÁVEL DE APRESENTAÇÃO */}
            <p className="font-body text-base sm:text-lg text-[#4A1030]/90 max-w-xl mb-8 leading-relaxed">
              Um coletivo de oficinas formativas e vivências literárias voltado à cultura afro-brasileira, performance oral, ficção contemporânea e sustentabilidade cultural na periferia do Distrito Federal.
            </p>

            {/* Grupo de Ações: Botão CTA e Informação de Gratuidade */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#oficinas"
                className="w-full sm:w-auto text-center bg-[#4A1030] hover:bg-[#340720] text-[#F5EDE0] px-8 py-4 rounded-xl font-display text-2xl tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group"
              >
                <span>Conheça as oficinas</span>
                <ArrowDown className="w-5 h-5 text-[#E8A324] group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#sobre"
                className="w-full sm:w-auto text-center border-2 border-[#4A1030] hover:bg-[#4A1030]/10 text-[#4A1030] px-6 py-3.5 rounded-xl font-body font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
              >
                <Feather className="w-4 h-4" />
                <span>O que é o projeto?</span>
              </a>
            </div>

            {/* Badges de Destaque */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-[#4A1030]/10 text-[#4A1030] font-body text-xs font-semibold px-2.5 py-1 rounded-md">
                ✓ 4 Oficinas Gratuitas
              </span>
              <span className="bg-[#4A1030]/10 text-[#4A1030] font-body text-xs font-semibold px-2.5 py-1 rounded-md">
                ✓ Mestres e Artistas Afro-Brasileiros
              </span>
              <span className="bg-[#4A1030]/10 text-[#4A1030] font-body text-xs font-semibold px-2.5 py-1 rounded-md">
                ✓ Vagas Abertas
              </span>
            </div>

            {/* SETA ILUSTRATIVA APONTANDO PARA BAIXO (Estilo Lambe/Zine artesanal) */}
            <div className="flex items-center gap-3 mt-8 text-[#4A1030] select-none">
              <svg
                width="84"
                height="48"
                viewBox="0 0 84 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform rotate-6"
                aria-hidden="true"
              >
                <path
                  d="M10 8 C25 20, 50 15, 68 34"
                  stroke="#4A1030"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M52 35 L68 36 L64 20"
                  stroke="#4A1030"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-script text-xl text-[#340720] font-bold">
                role para ver as vagas abertas
              </span>
            </div>

          </div>

          {/* COLUNA DIREITA: CARTAZ/COLAGEM VISUAL COM A LOGO OFICIAL */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Fita adesiva / Washi tape no topo da colagem */}
              <WashiTape
                position="top-center"
                color="cream"
                width="w-36 md:w-44"
                text="ARTE • COLETIVO • VOZ"
                angle={-2}
              />

              {/* Moldura estilo Cartaz de Lambe-Lambe / Zine */}
              <div className="relative bg-[#4A1030] text-[#F5EDE0] p-6 sm:p-8 rounded-2xl shadow-2xl border-4 border-[#340720] transform rotate-1 hover:rotate-0 transition-transform duration-300">
                
                {/* Carimbo de Taguatinga dentro do cartaz */}
                <div className="flex justify-between items-center mb-4 border-b border-[#F5EDE0]/20 pb-3">
                  <div>
                    <span className="font-display text-lg tracking-wider uppercase text-[#F5EDE0]">
                      Taguatinga • DF
                    </span>
                  </div>
                  <div className="bg-[#E8A324] text-[#4A1030] font-display text-xs font-bold px-2 py-1 rounded">
                    100% GRATUITO
                  </div>
                </div>

                {/* 
                  ESPAÇO DA LOGO / ARTE PRINCIPAL
                  Aqui é renderizada a imagem oficial da logo (mulher bebendo poesia da taça),
                  baixada em alta resolução do link fornecido pelo coletivo.
                */}
                <div className="relative bg-[#E8A324] rounded-xl p-4 overflow-hidden border-2 border-[#E8A324]/50 shadow-inner flex flex-col items-center justify-center min-h-[300px]">
                  <img
                    src="/logo-gole-de-poesia.png"
                    alt="Arte Oficial do Coletivo Gole de Poesia"
                    className="w-full max-w-[260px] h-auto object-contain drop-shadow-md rounded-lg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('google.com')) {
                        target.src = 'https://drive.google.com/uc?export=download&id=1nOAbBfiSchVyYBnXFzWq2NHMtGdq5sCI';
                      } else {
                        target.src = '/logo-gole-de-poesia.svg';
                      }
                    }}
                  />
                  <p className="font-script text-xl text-[#4A1030] font-bold mt-2 text-center">
                    “beba da fonte viva da palavra”
                  </p>
                </div>

                {/* Rodapé do Cartaz */}
                <div className="mt-4 pt-3 border-t border-[#F5EDE0]/20 flex items-center justify-between text-xs text-[#F5EDE0]/80">
                  <span className="font-body">4 Oficinas Formativas</span>
                  <span className="font-body font-bold text-[#E8A324]">Inscrições pelo formulário</span>
                </div>
              </div>

              {/* Tag lateral solta colada com washi tape */}
              <div className="absolute -bottom-4 -left-3 bg-[#FAF4EB] text-[#4A1030] px-4 py-2 rounded-lg shadow-lg border border-[#4A1030]/20 transform -rotate-3">
                <span className="font-script text-xl font-bold block text-center">
                  Inscrições Abertas!
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
