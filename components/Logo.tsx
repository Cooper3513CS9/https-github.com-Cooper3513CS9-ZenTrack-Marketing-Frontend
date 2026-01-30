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

       {/* Centered Icon - 3D Isometric Box with Checkmark */}
       <g transform="translate(7, 10)">
          {/* Left face - parallelogram */}
          <path
            d="M0 8L0 20L8 24L8 12Z"
            stroke={iconStroke}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right face - parallelogram */}
          <path
            d="M8 12L16 8L16 20L8 24Z"
            stroke={iconStroke}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Top face (open box view) - parallelogram */}
          <path
            d="M0 8L8 4L16 8L8 12Z"
            stroke={iconStroke}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Checkmark emerging from box */}
          <path
            d="M10 6L12 9L18 2"
            stroke={iconStroke}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
       </g>
    </svg>
  );
};
