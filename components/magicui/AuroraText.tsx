'use client';

import React, { ReactNode } from 'react';

interface AuroraTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
}

export const AuroraText: React.FC<AuroraTextProps> = ({
  children,
  className = '',
  colors = ['#3EB985', '#1C81AC', '#233A77', '#3EB985'],
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(', ')})`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'auroraTextShift 6s ease-in-out infinite alternate',
  };

  return (
    <span className={`inline-block ${className}`} style={gradientStyle}>
      {children}
      <style jsx>{`
        @keyframes auroraTextShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </span>
  );
};
