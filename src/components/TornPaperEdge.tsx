import React from 'react';

interface TornPaperEdgeProps {
  /** The color of the tearing paper edge (must match the adjacent section) */
  fillColor?: string;
  /** Direction: 'bottom' rests at the bottom of a section; 'top' rests at top of a section */
  position?: 'top' | 'bottom';
  /** Flip horizontally for variety */
  flipX?: boolean;
  className?: string;
}

export const TornPaperEdge: React.FC<TornPaperEdgeProps> = ({
  fillColor = '#E8A324',
  position = 'bottom',
  flipX = false,
  className = '',
}) => {
  const isTop = position === 'top';

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      style={{
        transform: `${flipX ? 'scaleX(-1)' : ''} ${isTop ? 'rotate(180deg)' : ''}`,
        marginBottom: isTop ? '-1px' : '-2px',
        marginTop: isTop ? '-2px' : '-1px',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-12 lg:h-14 block"
      >
        {/* Subtle fiber shadow under the tear */}
        <path
          d="M0,28 L35,35 L70,24 L110,38 L150,22 L190,34 L230,20 L275,37 L320,25 L365,39 L410,23 L460,36 L510,22 L560,40 L610,25 L660,38 L710,21 L760,37 L810,24 L860,41 L910,23 L960,36 L1010,22 L1060,38 L1110,24 L1160,39 L1210,23 L1260,36 L1310,21 L1360,38 L1405,26 L1440,32 L1440,64 L0,64 Z"
          fill="rgba(0, 0, 0, 0.15)"
        />
        {/* Main ragged torn paper shape */}
        <path
          d="M0,0 L0,22 
             L25,28 L48,16 L72,27 L95,18 L120,31 L145,19 L170,30 L198,15 L224,29 L250,17 
             L278,32 L305,19 L332,31 L360,16 L388,29 L416,18 L444,33 L472,17 L500,28 
             L528,14 L556,31 L584,18 L612,32 L640,15 L668,30 L696,17 L724,31 L752,16 
             L780,29 L808,18 L836,34 L864,15 L892,30 L920,18 L948,31 L976,16 L1004,30 
             L1032,19 L1060,33 L1088,17 L1116,29 L1144,15 L1172,32 L1200,18 L1228,30 
             L1256,16 L1284,31 L1312,17 L1340,33 L1368,19 L1395,29 L1420,16 L1440,24 
             L1440,0 Z"
          fill={fillColor}
        />
        {/* Fine paper deckle edge line */}
        <path
          d="M0,22 
             L25,28 L48,16 L72,27 L95,18 L120,31 L145,19 L170,30 L198,15 L224,29 L250,17 
             L278,32 L305,19 L332,31 L360,16 L388,29 L416,18 L444,33 L472,17 L500,28 
             L528,14 L556,31 L584,18 L612,32 L640,15 L668,30 L696,17 L724,31 L752,16 
             L780,29 L808,18 L836,34 L864,15 L892,30 L920,18 L948,31 L976,16 L1004,30 
             L1032,19 L1060,33 L1088,17 L1116,29 L1144,15 L1172,32 L1200,18 L1228,30 
             L1256,16 L1284,31 L1312,17 L1340,33 L1368,19 L1395,29 L1420,16 L1440,24"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    </div>
  );
};
