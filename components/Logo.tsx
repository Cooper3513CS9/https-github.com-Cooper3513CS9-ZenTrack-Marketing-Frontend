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

       {/* Centered Icon - Maximized size (no padding) */}
       <g transform="translate(8, 8)">
          {/* Box Shape */}
          <path
            d="M4 10L12 6L20 10V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V10Z"
            stroke={iconStroke}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner Flap */}
          <path
            d="M4 10L12 14L20 10"
            stroke={iconStroke}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Checkmark - Popping out/over */}
          <path
            d="M15 5L18 8L23 3"
            stroke={iconStroke}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
       </g>
    </svg>
  );
};
