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
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 80;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 80;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const particleCount = showParticles ? 25 : 0;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.5 ? '#3EB985' : '#1C81AC',
      alpha: Math.random() * 0.5 + 0.2,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
    }));

    let time = 0;

    const render = () => {
      time += 0.006;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Base rich dark navy background
      ctx.fillStyle = '#0a0f24';
      ctx.fillRect(0, 0, width, height);

      // Soft minimalist Aurora Blob 1 (#233A77 -> #1C81AC)
      const x1 = width * 0.35 + Math.sin(time * 0.7) * 90 + mouseRef.current.x * 0.4;
      const y1 = height * 0.4 + Math.cos(time * 0.5) * 70 + mouseRef.current.y * 0.4;
      const r1 = Math.min(width, height) * 0.6;
      const g1 = ctx.createRadialGradient(x1, y1, 10, x1, y1, r1);
      g1.addColorStop(0, 'rgba(35, 58, 119, 0.75)');
      g1.addColorStop(0.55, 'rgba(28, 129, 172, 0.35)');
      g1.addColorStop(1, 'rgba(10, 15, 36, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Aurora Blob 2 (#3EB985 Youth Green Accent)
      const x2 = width * 0.7 + Math.cos(time * 0.6) * 110 - mouseRef.current.x * 0.6;
      const y2 = height * 0.35 + Math.sin(time * 0.8) * 80 - mouseRef.current.y * 0.6;
      const r2 = Math.min(width, height) * 0.5;
      const g2 = ctx.createRadialGradient(x2, y2, 10, x2, y2, r2);
      g2.addColorStop(0, 'rgba(62, 185, 133, 0.35)');
      g2.addColorStop(0.5, 'rgba(28, 129, 172, 0.2)');
      g2.addColorStop(1, 'rgba(10, 15, 36, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // Aurora Blob 3 (Teal Light Glow)
      const x3 = width * 0.5 + Math.sin(time * 0.9) * 120;
      const y3 = height * 0.6 + Math.cos(time * 1.0) * 80;
      const r3 = Math.min(width, height) * 0.45;
      const g3 = ctx.createRadialGradient(x3, y3, 10, x3, y3, r3);
      g3.addColorStop(0, 'rgba(126, 200, 227, 0.25)');
      g3.addColorStop(1, 'rgba(10, 15, 36, 0)');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, width, height);

      // Draw floating light particles
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
        ctx.globalAlpha = p.alpha * (0.6 + Math.sin(time * 1.8 + p.x) * 0.4);
        ctx.shadowBlur = 6;
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
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Brand Pattern Overlay (frame.svg) matching BrandBackground transparent style */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1] bg-repeat"
        style={{
          backgroundImage: `url('/brand/logo/frame.svg')`,
          backgroundSize: '420px auto',
          filter: 'brightness(0) invert(1)',
          opacity: 0.07,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f24]/70 via-transparent to-[#0a0f24]/90 pointer-events-none z-[2]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
