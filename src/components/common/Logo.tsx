import React from 'react';

interface LogoProps {
  variant?: 'wide' | 'compact' | 'icon-only';
  theme?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'wide',
  theme = 'light',
  className = '',
  size = 'md'
}) => {
  const isDark = theme === 'dark';

  // Sizing styles for image
  const wideSizes = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12'
  };

  const iconSizes = {
    sm: 'h-7 w-auto',
    md: 'h-9 w-auto',
    lg: 'h-12 w-auto'
  };

  if (variant === 'icon-only' || variant === 'compact') {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        <img
          src="/MWHEBA Software_Logo.png"
          alt="MWHEBA Software Solutions Logo"
          className={`${iconSizes[size]} object-contain select-none`}
          loading="eager"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/MWHEBA Software_Wide.png"
        alt="MWHEBA Software Solutions"
        className={`${wideSizes[size]} w-auto object-contain select-none ${isDark ? 'brightness-0 invert' : ''}`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

