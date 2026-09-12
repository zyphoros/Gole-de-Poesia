import React from 'react';

interface HandwritingTextureProps {
  variant?: 'mustard' | 'wine';
  opacity?: number;
}

export const HandwritingTexture: React.FC<HandwritingTextureProps> = ({
  variant = 'mustard',
  opacity = 0.05,
}) => {
  const strokeColor = variant === 'mustard' ? '#4A1030' : '#F5EDE0';

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id={`handwriting-pattern-${variant}`}
            width="420"
            height="320"
            patternUnits="userSpaceOnUse"
          >
            {/* Poetic script fragments */}
            <text
              x="20"
              y="45"
              fill={strokeColor}
              fontFamily="'Caveat', cursive"
              fontSize="24"
              fontWeight="600"
              transform="rotate(-4 20 45)"
            >
              da quebrada nasce poesia...
            </text>

            <text
              x="180"
              y="90"
              fill={strokeColor}
              fontFamily="'Caveat', cursive"
              fontSize="20"
              transform="rotate(2 180 90)"
            >
              um gole de verso e voz
            </text>

            <text
              x="40"
              y="150"
              fill={strokeColor}
              fontFamily="'Caveat', cursive"
              fontSize="22"
              transform="rotate(-2 40 150)"
            >
              palavra, tambor e corpo em cena
            </text>

            <text
              x="220"
              y="200"
              fill={strokeColor}
              fontFamily="'Caveat', cursive"
              fontSize="21"
              transform="rotate(3 220 200)"
            >
              oralidade viva • Taguatinga DF
            </text>

            <text
              x="30"
              y="265"
              fill={strokeColor}
              fontFamily="'Caveat', cursive"
              fontSize="25"
              transform="rotate(-3 30 265)"
            >
              literatura periférica & ancestral
            </text>

            {/* Hand-drawn scribbled underlines and loops */}
            <path
              d="M 22 55 Q 85 62 165 52 Q 210 46 250 56"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 185 102 Q 260 108 340 98"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M 45 162 Q 135 170 260 160 Q 310 155 365 165"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M 35 278 Q 150 286 310 274"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Little stars and scribbles */}
            <path
              d="M 380 40 L 388 48 M 388 40 L 380 48"
              stroke={strokeColor}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M 120 215 L 128 223 M 128 215 L 120 223"
              stroke={strokeColor}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#handwriting-pattern-${variant})`} />
      </svg>
    </div>
  );
};
