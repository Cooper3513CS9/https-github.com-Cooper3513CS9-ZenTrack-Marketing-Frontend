import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white' | 'avatar';
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8", variant = 'default' }) => {
  // Official ZenTrack Brandbook Logo
  // Design: Control layer positioning - "Wat hier doorheen gaat, is gecontroleerd en afgesloten"
  //
  // Represents:
  // - Authority, discipline, and governance (not just helpful tool)
  // - Infrastructure thinking (not feature-based)
  // - Professional, formal positioning in healthcare context
  //
  // Source: ZenTrack_Final_Brand_Package_CORRECTED
  // Proportions: Always proportional (height follows width per brandbook)

  const logoSrc = '/zentrack-logo-light.png';

  return (
    <Image
      src={logoSrc}
      alt="ZenTrack Logo - Healthcare Procurement Control Layer"
      width={32}
      height={32}
      className={className}
      priority
    />
  );
};
