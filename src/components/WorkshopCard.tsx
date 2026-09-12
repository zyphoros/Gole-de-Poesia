import React, { useState } from 'react';
import { Workshop } from '../types';
import { ExternalLink, User, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Calendar, Users, Clock } from 'lucide-react';

interface WorkshopCardProps {
  workshop: Workshop;
  index: number;
}

export const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop }) => {
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
      className="relative bg-[#FAF4EA] text-[#4A1030] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#4A1030]/20 flex flex-col justify-between overflow-hidden group hover:-translate-y-0.5 p-3.5 sm:p-4"
    >
      <div>
        {/* BARRA SUPERIOR: DATA/HORÁRIO E NÚMERO DE VAGAS */}
        <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-[#4A1030]/15">
          <div className="flex items-center gap-1.5 bg-[#4A1030] text-[#F5EDE0] px-2.5 py-0.5 rounded-md shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#E8A324]" />
            <span className="font-display text-xs sm:text-sm tracking-wide uppercase font-bold text-[#E8A324]">
              {workshop.date}
            </span>
            <span className="text-[#F5EDE0]/60 text-[10px]">•</span>
            <span className="font-body text-[11px] sm:text-xs font-semibold text-[#F5EDE0] flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#E8A324]" />
              {workshop.time}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-[#E8A324]/20 border border-[#E8A324]/70 text-[#4A1030] px-2 py-0.5 rounded-md">
            <Users className="w-3 h-3 text-[#4A1030]" />
            <span className="font-body text-[11px] font-bold uppercase tracking-wider">
              {workshop.spots}
            </span>
          </div>
        </div>

        {/* CABEÇALHO COMPACTO: FOTO + TÍTULO + FACILITADOR */}
        <div className="flex items-start gap-3 mb-2">
          
          {/* FOTO DO(A) FACILITADOR(A) */}
          <div className="relative shrink-0">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-[#4A1030] p-1 shadow overflow-hidden relative"
              style={{
                clipPath:
                  'polygon(3% 0%, 97% 2%, 100% 95%, 96% 100%, 4% 98%, 0% 5%)',
              }}
            >
              {currentImgSrc ? (
                <img
                  src={currentImgSrc}
                  alt={`Foto de ${workshop.facilitator.name}`}
                  className="w-full h-full object-cover rounded filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full rounded bg-[#340720] flex flex-col items-center justify-center text-[#F5EDE0]">
                  <User className="w-6 h-6 text-[#E8A324] mb-0.5" />
                  <span className="font-display text-[9px] tracking-wider uppercase text-center px-0.5 leading-none">
                    {workshop.facilitator.name.split(' ')[0]}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* TÍTULO E FACILITADOR(A) */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg sm:text-xl text-[#4A1030] font-bold uppercase tracking-wide leading-tight group-hover:text-[#340720] transition-colors">
              {workshop.title}
            </h3>

            <p className="font-body text-xs text-[#4A1030]/85 mt-0.5">
              Com <strong className="font-bold text-[#4A1030]">{workshop.facilitator.name}</strong>
              <span className="text-[#4A1030]/40 mx-1">•</span>
              <span className="text-[#C98814] font-semibold text-[11px] sm:text-xs">{workshop.facilitator.role}</span>
            </p>

            <p className="font-script text-sm sm:text-base text-[#C98814] font-bold leading-tight">
              {workshop.subtitle}
            </p>
          </div>
        </div>

        {/* DESCRIÇÃO COMPACTA */}
        <p className="font-body text-xs text-[#4A1030]/85 leading-snug mb-2">
          {workshop.description}
        </p>

        {/* DETALHAMENTO EXPANSÍVEL (OPCIONAL SOB DEMANDA) */}
        {isExpanded && (
          <div className="space-y-2 pt-1.5 pb-2 text-xs border-t border-dashed border-[#4A1030]/20 animate-fadeIn mb-1.5">
            <p className="font-body text-[#4A1030]/90 leading-relaxed text-[11px] sm:text-xs">
              {workshop.fullDescription}
            </p>
            {workshop.topics && workshop.topics.length > 0 && (
              <div className="bg-[#E8A324]/15 rounded-md p-2">
                <span className="font-display text-[10px] uppercase tracking-wider text-[#4A1030] block mb-1 font-bold">
                  O que você vai vivenciar:
                </span>
                <ul className="space-y-0.5 text-[11px]">
                  {workshop.topics.map((t, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-[#4A1030]/90">
                      <CheckCircle2 className="w-3 h-3 text-[#4A1030] shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* BOTÃO TOGGLE DE DETALHES COMPACTO */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[10px] sm:text-[11px] font-semibold text-[#4A1030]/70 hover:text-[#4A1030] flex items-center gap-1 transition-colors mb-2.5 focus:outline-none"
        >
          <span>{isExpanded ? 'Ocultar detalhes' : '+ Ver conteúdo completo'}</span>
          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      </div>

      {/* RODAPÉ DO CARD COM BOTÃO CTA DE INSCRIÇÃO DIRETO */}
      <div className="pt-2 border-t border-[#4A1030]/10">
        <a
          href={workshop.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#4A1030] hover:bg-[#340720] text-[#F5EDE0] py-2 px-3 rounded-lg font-display text-sm sm:text-base tracking-wider uppercase text-center flex items-center justify-center gap-1.5 shadow hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 group/btn"
          aria-label={`Inscreva-se na oficina ${workshop.title} com ${workshop.facilitator.name}`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E8A324]" />
          <span>Inscreva-se no formulário</span>
          <ExternalLink className="w-3 h-3 opacity-80 group-hover/btn:opacity-100 transition-opacity" />
        </a>

        <div className="flex items-center justify-between text-[10px] text-[#4A1030]/60 mt-1.5 px-0.5 font-body">
          <span>Presencial • Taguatinga - DF</span>
          <span className="font-semibold text-[#4A1030]">100% Gratuito</span>
        </div>
      </div>

    </div>
  );
};
