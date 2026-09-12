import React, { useState } from 'react';

interface LogoGoleDePoesiaProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon-only';
  invertColors?: boolean; // Para fundos escuros/vinho
  showLocationTag?: boolean;
}

/**
 * Componente da Logo Oficial do Coletivo Gole de Poesia
 * Utiliza o arquivo oficial em alta resolução baixado do Google Drive: /public/logo-gole-de-poesia.png
 */
export const LogoGoleDePoesia: React.FC<LogoGoleDePoesiaProps> = ({
  className = 'h-12 md:h-14',
  variant = 'full',
  invertColors = false,
  showLocationTag = false,
}) => {
  const [currentSrc, setCurrentSrc] = useState('/logo-gole-de-poesia.png');

  const handleImageError = () => {
    if (currentSrc === '/logo-gole-de-poesia.png') {
      // Fallback para link direto do Google Drive ou SVG
      setCurrentSrc('https://drive.google.com/uc?export=download&id=1nOAbBfiSchVyYBnXFzWq2NHMtGdq5sCI');
    } else if (currentSrc.includes('google.com')) {
      setCurrentSrc('/logo-gole-de-poesia.svg');
    }
  };

  return (
    <div className="flex items-center gap-3 group">
      {/* Imagem oficial da logo enviada pelo coletivo via Google Drive */}
      <div className="relative flex-shrink-0">
        <img
          src={currentSrc}
          alt="Logo Oficial Gole de Poesia"
          className={`${className} w-auto aspect-[1122/1402] object-contain rounded-md transition-transform duration-300 group-hover:scale-105`}
          onError={handleImageError}
        />
      </div>

      {/* Tipografia da Marca ao lado da logo para fácil identificação e acessibilidade */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center select-none">
          <div className="flex items-baseline leading-none">
            <span
              className="font-display text-2xl md:text-3xl tracking-wider font-extrabold uppercase leading-none"
              style={{ color: invertColors ? '#F5EDE0' : '#4A1030' }}
            >
              GOLE DE POESIA
            </span>
          </div>

          {showLocationTag && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8A324] animate-pulse"></span>
              <span
                className="font-display text-xs tracking-widest uppercase opacity-80"
                style={{ color: invertColors ? '#F5EDE0' : '#4A1030' }}
              >
                Taguatinga • DF
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Ícone estilizado da taça/cálice de poesia
 */
export const PoetryChaliceIcon: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = 'w-6 h-6', color = 'currentColor' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 2h8l2 8c0 4-3 7-6 7s-6-3-6-7l2-8z" fill={color} fillOpacity="0.2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <path d="M7 6c2 1 4 1 5 0s3-1 5 0" strokeWidth="1.5" />
    </svg>
  );
};
