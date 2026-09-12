import React, { useState } from 'react';
import { Workshop } from '../types';
import { ExternalLink, User, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface WorkshopCardProps {
  workshop: Workshop;
  index: number;
}

export const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop, index }) => {
  const [imgErrorCount, setImgErrorCount] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Fallback cascade: local path -> google drive link -> avatar icon
  const currentImgSrc =
    imgErrorCount === 0
      ? workshop.facilitator.photoLocal
      : imgErrorCount === 1
      ? workshop.facilitator.photoDrive
      : null;

  const handleImageError = () => {
    setImgErrorCount((prev) => prev + 1);
  };

  return (
    <div
      id={`oficina-${workshop.id}`}
      className="relative bg-[#FAF4EA] text-[#4A1030] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#4A1030]/15 flex flex-col justify-between overflow-hidden group transform hover:-translate-y-1"
    >
      <div className="p-6 sm:p-7">
        
        {/* CABEÇALHO DO CARD COM FOTO DO(A) FACILITADOR(A) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-5 pt-2">
          
          {/* FOTO COM MOLDURA VINHO E EFEITO DE BORDA RASGADA / COLAGEM */}
          <div className="relative shrink-0">
            <div
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#4A1030] p-1.5 shadow-md overflow-hidden relative"
              style={{
                clipPath:
                  'polygon(3% 0%, 97% 2%, 100% 95%, 96% 100%, 4% 98%, 0% 5%)',
              }}
            >
              {currentImgSrc ? (
                <img
                  src={currentImgSrc}
                  alt={`Foto de ${workshop.facilitator.name}`}
                  className="w-full h-full object-cover rounded-xl filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  onError={handleImageError}
                />
              ) : (
                /* Fallback visual com ícone de pessoa em fundo vinho */
                <div className="w-full h-full rounded-xl bg-[#340720] flex flex-col items-center justify-center text-[#F5EDE0]">
                  <User className="w-10 h-10 text-[#E8A324] mb-1" />
                  <span className="font-display text-xs tracking-wider uppercase text-center px-1">
                    {workshop.facilitator.name.split(' ')[0]}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* DADOS DO(A) FACILITADOR(A) E TAG */}
          <div className="flex-1 text-center sm:text-left">
            {workshop.highlightTag && (
              <span className="inline-block bg-[#4A1030]/10 text-[#4A1030] font-body text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1.5">
                {workshop.highlightTag}
              </span>
            )}
            
            <h4 className="font-display text-2xl sm:text-3xl text-[#4A1030] uppercase leading-none tracking-wide">
              {workshop.facilitator.name}
            </h4>

            <p className="font-body text-xs sm:text-sm font-semibold text-[#C98814] mt-1">
              {workshop.facilitator.role}
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-1 text-[11px] text-[#4A1030]/70 font-medium mt-1.5">
              <span>Formato presencial</span>
              <span>•</span>
              <span className="text-[#4A1030] font-bold">Vagas limitadas</span>
            </div>
          </div>

        </div>

        {/* TÍTULO DA OFICINA EM FONTE BOLD CONDENSADA TIPO CARTAZ */}
        <div className="border-t border-[#4A1030]/15 pt-4 mb-3">
          <h3 className="font-display text-2xl sm:text-3xl lg:text-3xl text-[#4A1030] font-bold uppercase tracking-wide leading-tight group-hover:text-[#340720] transition-colors">
            {workshop.title}
          </h3>
          <p className="font-script text-xl sm:text-2xl text-[#C98814] font-bold mt-0.5">
            {workshop.subtitle}
          </p>
        </div>

        {/* DESCRIÇÃO DA OFICINA (2-3 LINHAS / TEXTO EDITÁVEL) */}
        <p className="font-body text-sm sm:text-base text-[#4A1030]/85 leading-relaxed mb-4">
          {workshop.description}
        </p>

        {/* DETALHAMENTO EXPANSÍVEL DA OFICINA */}
        {isExpanded && (
          <div className="space-y-3 pt-2 pb-3 text-xs sm:text-sm border-t border-dashed border-[#4A1030]/20 animate-fadeIn">
            <p className="font-body text-[#4A1030]/90 leading-relaxed">
              {workshop.fullDescription}
            </p>
            {workshop.topics && workshop.topics.length > 0 && (
              <div className="bg-[#E8A324]/15 rounded-xl p-3">
                <span className="font-display text-xs uppercase tracking-wider text-[#4A1030] block mb-1 font-bold">
                  O que você vai vivenciar:
                </span>
                <ul className="space-y-1 text-xs">
                  {workshop.topics.map((t, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-[#4A1030]/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4A1030] shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* BOTÃO TOGGLE DE DETALHES */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold text-[#4A1030]/70 hover:text-[#4A1030] flex items-center gap-1 transition-colors mb-2 focus:outline-none"
        >
          <span>{isExpanded ? 'Ver menos' : 'Saiba mais sobre o conteúdo'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

      </div>

      {/* RODAPÉ DO CARD COM BOTÃO CTA DE INSCRIÇÃO */}
      <div className="p-6 pt-0 sm:p-7 sm:pt-0">
        <a
          href={workshop.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#4A1030] hover:bg-[#340720] text-[#F5EDE0] py-3.5 px-4 rounded-xl font-display text-xl tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 group/btn"
          aria-label={`Inscreva-se na oficina ${workshop.title} com ${workshop.facilitator.name}`}
        >
          <Sparkles className="w-4 h-4 text-[#E8A324]" />
          <span>Inscreva-se no formulário</span>
          <ExternalLink className="w-4 h-4 opacity-80 group-hover/btn:opacity-100 transition-opacity" />
        </a>

        <div className="flex items-center justify-between text-[11px] text-[#4A1030]/60 mt-2 px-1 font-body">
          <span>Inscrição gratuita via Google Forms</span>
          <span className="font-bold text-[#4A1030]">Oficina 0{workshop.number}</span>
        </div>
      </div>

    </div>
  );
};
