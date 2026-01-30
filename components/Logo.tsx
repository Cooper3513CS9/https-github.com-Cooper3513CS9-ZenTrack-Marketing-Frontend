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

       {/* Centered Icon - Open Package/Envelope with Checkmark */}
       <g transform="translate(6, 8)">
          {/* Left side of envelope */}
          <path
            d="M2 6L14 2L26 6V18C26 19.6569 24.6569 21 23 21H5C3.34315 21 2 19.6569 2 18V6Z"
            stroke={iconStroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Envelope flap - diagonal from top left to middle */}
          <path
            d="M2 6L14 11L26 6"
            stroke={iconStroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Checkmark - prominent on top right */}
          <path
            d="M19 3L22 6L28 0"
            stroke={iconStroke}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
       </g>
    </svg>
  );
};
