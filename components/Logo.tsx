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

       {/* Centered Icon - Premium 3D Isometric Box with Professional Shading */}
       <g transform="translate(6, 8)">
          {/* Left face - Darkest (furthest back) */}
          <path
            d="M0 10L0 22L10 28L10 16Z"
            fill={isWhiteVariant ? 'rgba(5, 150, 105, 0.12)' : 'rgba(255, 255, 255, 0.12)'}
            stroke={iconStroke}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right face - Medium depth */}
          <path
            d="M10 16L18 12L18 24L10 28Z"
            fill={isWhiteVariant ? 'rgba(5, 150, 105, 0.20)' : 'rgba(255, 255, 255, 0.20)'}
            stroke={iconStroke}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Top face - Lightest (closest to viewer) */}
          <path
            d="M0 10L10 6L18 12L10 16Z"
            fill={isWhiteVariant ? 'rgba(5, 150, 105, 0.28)' : 'rgba(255, 255, 255, 0.28)'}
            stroke={iconStroke}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Checkmark - BOLD hero element with shadow */}
          <path
            d="M9 10L11.5 13L17 7"
            stroke={iconStroke}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}
          />
       </g>
    </svg>
  );
};
