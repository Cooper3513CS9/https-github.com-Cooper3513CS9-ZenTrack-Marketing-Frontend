import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white' | 'avatar';
}

export const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", variant = 'default' }) => {
  // The Solid Zen Box
  // A solid background badge gives the logo visual weight (mass) so it doesn't look "lost" next to text.
  // Inside is a clear, bold box with a checkmark.

  // Default: Emerald Background, White Icon (Best for white headers)
  // White: White Background, Emerald Icon (Best for dark sidebars/footers)

  const isWhiteVariant = variant === 'white' || variant === 'avatar';

  // Colors
  const bgFill = isWhiteVariant ? 'white' : '#059669'; // Emerald-600
  const iconStroke = isWhiteVariant ? '#059669' : 'white';

  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
       {/* Solid Background Badge - Gives weight */}
       <rect width="40" height="40" rx="10" fill={bgFill} />

       {/* Centered Icon - 3D Isometric Box (User Approved Design) */}
       <g transform="translate(8, 10)">
          {/* Top face (bovenkant) */}
          <path
            d="M0 8L12 2L24 8L12 14Z"
            fill="none"
            stroke={iconStroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Left face */}
          <path
            d="M0 8L0 20L12 26L12 14Z"
            fill="none"
            stroke={iconStroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Right face */}
          <path
            d="M12 14L24 8L24 20L12 26Z"
            fill="none"
            stroke={iconStroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Checkmark - Enhanced visibility with drop shadow */}
          <path
            d="M8 6L11.2 10L18 3.2"
            stroke={iconStroke}
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{ filter: 'drop-shadow(0 0.8px 1.2px rgba(0, 0, 0, 0.5))' }}
          />
       </g>
    </svg>
  );
};
