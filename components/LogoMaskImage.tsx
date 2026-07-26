import React from 'react';

interface LogoMaskImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function LogoMaskImage({ src, className = '' }: LogoMaskImageProps) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: '35/34' }}>
      <svg
        viewBox="0 0 35 34"
        className="w-full h-full"
        style={{ position: 'absolute', inset: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="scy-logo-mask" clipPathUnits="userSpaceOnUse">
            <path d="M20.5 9.39995C19.3 9.39995 18.3 10.4 18.3 11.6V31.0999C18.3 32.2999 19.3 33.2999 20.5 33.2999C21.7 33.2999 22.7 32.2999 22.7 31.0999V11.6C22.7 10.4 21.7 9.39995 20.5 9.39995Z" />
            <path d="M14.4 6.99995C13.2 6.99995 12.2 7.99995 12.2 9.19995V31.0999C12.2 32.2999 13.2 33.2999 14.4 33.2999C15.6 33.2999 16.6 32.2999 16.6 31.0999V9.29995C16.6 7.99995 15.6 6.99995 14.4 6.99995Z" />
            <path d="M14.4 6.19995C15.6 6.19995 16.6 5.19995 16.6 3.99995C16.6 2.79995 15.6 1.79995 14.4 1.79995C13.2 1.79995 12.2 2.79995 12.2 3.99995C12.2 5.19995 13.2 6.19995 14.4 6.19995Z" />
            <path d="M20.5 8.49995C21.715 8.49995 22.7 7.51498 22.7 6.29995C22.7 5.08493 21.715 4.09995 20.5 4.09995C19.285 4.09995 18.3 5.08493 18.3 6.29995C18.3 7.51498 19.285 8.49995 20.5 8.49995Z" />
            <path d="M32.7 19.0001C31.5 19.0001 30.5 20.0001 30.5 21.2001V27.0001C30.5 28.2001 31.5 29.2001 32.7 29.2001C33.9 29.2001 34.9 28.2001 34.9 27.0001V21.3001C34.9 20.0001 33.9 19.0001 32.7 19.0001Z" />
            <path d="M26.6 15.7001C25.4 15.7001 24.4 16.7001 24.4 17.9001V28.4001C24.4 29.6001 25.4 30.6001 26.6 30.6001C27.8 30.6001 28.8 29.6001 28.8 28.4001V18.0001C28.8 16.7001 27.8 15.7001 26.6 15.7001Z" />
            <path d="M26.6 14.8001C27.8 14.8001 28.8 13.8001 28.8 12.6001C28.8 11.4001 27.8 10.4001 26.6 10.4001C25.4 10.4001 24.4 11.4001 24.4 12.6001C24.4 13.9001 25.4 14.8001 26.6 14.8001Z" />
            <path d="M32.7 18.1001C33.9 18.1001 34.9 17.1001 34.9 15.9001C34.9 14.7001 33.9 13.7001 32.7 13.7001C31.5 13.7001 30.5 14.7001 30.5 15.9001C30.5 17.2001 31.5 18.1001 32.7 18.1001Z" />
            <path d="M2.2 8.3C1 8.3 0 9.3 0 10.5V19.1C0 20.3 1 21.3 2.2 21.3C3.4 21.3 4.4 20.3 4.4 19.1V10.5C4.5 9.3 3.5 8.3 2.2 8.3Z" />
            <path d="M2.2 7.4C3.4 7.4 4.4 6.4 4.4 5.2C4.4 4 3.4 3 2.2 3C1 3 0 4 0 5.2C0 6.4 1 7.4 2.2 7.4Z" />
            <path d="M8.3 4.4C9.5 4.4 10.5 3.4 10.5 2.2C10.5 1 9.5 0 8.3 0C7.1 0 6.1 1 6.1 2.2C6.1 3.4 7.1 4.4 8.3 4.4Z" />
            <path d="M8.3 5.3C7.1 5.3 6.1 6.3 6.1 7.5V26.1C6.1 27.3 7.1 28.3 8.3 28.3C9.5 28.3 10.5 27.3 10.5 26.1V7.6C10.6 6.3 9.6 5.3 8.3 5.3Z" />
          </clipPath>
          <linearGradient id="scy-overlay-grad" x1="0" y1="34" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#233A77" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#233A77" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* The image masked by the logo shape */}
        <image
          href={src}
          width="35"
          height="34"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#scy-logo-mask)"
        />
        
        {/* Gradient overlay for depth */}
        <rect
          width="35"
          height="34"
          clipPath="url(#scy-logo-mask)"
          fill="url(#scy-overlay-grad)"
        />
      </svg>
    </div>
  );
}
