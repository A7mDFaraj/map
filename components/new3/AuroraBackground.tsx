'use client';

import React, { useEffect, useRef } from 'react';

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  showParticles?: boolean;
}

export function AuroraBackground({
  children,
  className = '',
  showParticles = true,
}: AuroraBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 100;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 100;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Particle system
    const particleCount = showParticles ? 35 : 0;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? '#3EB985' : '#1C81AC',
      alpha: Math.random() * 0.6 + 0.2,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.6 - 0.2,
    }));

    let time = 0;

    const render = () => {
      time += 0.008;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Base rich dark navy background
      ctx.fillStyle = '#0a0f24';
      ctx.fillRect(0, 0, width, height);

      // Aurora Wave Blob 1: SCY Primary Dark Navy to Deep Cyan (#233A77 -> #1C81AC)
      const x1 = width * 0.3 + Math.sin(time * 0.8) * 120 + mouseRef.current.x * 0.5;
      const y1 = height * 0.35 + Math.cos(time * 0.6) * 90 + mouseRef.current.y * 0.5;
      const r1 = Math.min(width, height) * 0.65;
      const g1 = ctx.createRadialGradient(x1, y1, 10, x1, y1, r1);
      g1.addColorStop(0, 'rgba(35, 58, 119, 0.85)');
      g1.addColorStop(0.5, 'rgba(28, 129, 172, 0.5)');
      g1.addColorStop(1, 'rgba(10, 15, 36, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Aurora Wave Blob 2: SCY Youth Accent Emerald Green (#3EB985)
      const x2 = width * 0.7 + Math.cos(time * 0.7) * 140 - mouseRef.current.x * 0.8;
      const y2 = height * 0.4 + Math.sin(time * 0.9) * 100 - mouseRef.current.y * 0.8;
      const r2 = Math.min(width, height) * 0.55;
      const g2 = ctx.createRadialGradient(x2, y2, 10, x2, y2, r2);
      g2.addColorStop(0, 'rgba(62, 185, 133, 0.45)');
      g2.addColorStop(0.4, 'rgba(28, 129, 172, 0.25)');
      g2.addColorStop(1, 'rgba(10, 15, 36, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // Aurora Wave Blob 3: Bright Teal Light Beam (#7ec8e3)
      const x3 = width * 0.5 + Math.sin(time * 1.1) * 160;
      const y3 = height * 0.65 + Math.cos(time * 1.3) * 110;
      const r3 = Math.min(width, height) * 0.5;
      const g3 = ctx.createRadialGradient(x3, y3, 10, x3, y3, r3);
      g3.addColorStop(0, 'rgba(126, 200, 227, 0.35)');
      g3.addColorStop(0.6, 'rgba(35, 58, 119, 0.2)');
      g3.addColorStop(1, 'rgba(10, 15, 36, 0)');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, width, height);

      // Aurora Wave Blob 4: Glowing Cyan Accent Node
      const x4 = width * 0.2 + Math.cos(time * 0.5) * 80;
      const y4 = height * 0.7 + Math.sin(time * 0.7) * 70;
      const r4 = Math.min(width, height) * 0.4;
      const g4 = ctx.createRadialGradient(x4, y4, 5, x4, y4, r4);
      g4.addColorStop(0, 'rgba(28, 129, 172, 0.4)');
      g4.addColorStop(1, 'rgba(10, 15, 36, 0)');
      ctx.fillStyle = g4;
      ctx.fillRect(0, 0, width, height);

      // Draw floating glowing particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.6 + Math.sin(time * 2 + p.x) * 0.4);
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [showParticles]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Canvas for Aurora Motion */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Brand Pattern Overlay (frame.svg) - transparent inverted tone matching BrandBackground */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1] bg-repeat"
        style={{ 
          backgroundImage: `url('/brand/logo/frame.svg')`, 
          backgroundSize: '420px auto',
          filter: 'brightness(0) invert(1)',
          opacity: 0.08,
        }}
      />

      {/* Vignette and Subtle Ambient Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f24]/80 via-transparent to-[#0a0f24]/90 pointer-events-none z-[2]" />
      
      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
