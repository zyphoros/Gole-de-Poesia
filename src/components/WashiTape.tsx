import React from 'react';

interface WashiTapeProps {
  position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'custom';
  color?: 'cream' | 'wine' | 'mustard';
  angle?: number;
  width?: string;
  className?: string;
  text?: string;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  position = 'top-right',
  color = 'cream',
  angle = -3,
  width = 'w-24 md:w-32',
  className = '',
  text,
}) => {
  const positionClasses = {
    'top-left': '-top-3 -left-3',
    'top-right': '-top-3 -right-3',
    'top-center': '-top-3.5 left-1/2 -translate-x-1/2',
    'bottom-left': '-bottom-3 -left-3',
    'bottom-right': '-bottom-3 -right-3',
    'custom': '',
  }[position];

  const colorStyles = {
    cream: 'bg-[#F5EDE0]/85 text-[#4A1030] border-y border-[#E8DFC8]/40 shadow-sm',
    wine: 'bg-[#4A1030]/90 text-[#F5EDE0] border-y border-[#340720]/40 shadow-sm',
    mustard: 'bg-[#E8A324]/90 text-[#4A1030] border-y border-[#C98814]/40 shadow-sm',
  }[color];

  return (
    <div
      className={`absolute z-20 ${positionClasses} ${width} ${colorStyles} h-7 px-3 flex items-center justify-center font-script text-xs md:text-sm font-bold tracking-wider select-none pointer-events-none backdrop-blur-[1px] ${className}`}
      style={{
        transform: `rotate(${angle}deg)`,
        clipPath: 'polygon(0% 12%, 4% 0%, 96% 0%, 100% 12%, 97% 50%, 100% 88%, 96% 100%, 4% 100%, 0% 88%, 3% 50%)',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.12)',
      }}
      aria-hidden="true"
    >
      {text && <span className="truncate opacity-90">{text}</span>}
    </div>
  );
};
